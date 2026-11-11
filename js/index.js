/* ===================
   MENÚ MÓVIL
==================== */
/* Respaldo: si i18n.js no se cargó, el tema y el CV siguen funcionando (en español) */
const tr = (key, fallback) => (typeof t === 'function' ? t(key) : fallback);
const getLang = () => (typeof currentLang !== 'undefined' ? currentLang : 'es');

const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

function closeMenu(){
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});


/* ===================
   MODO CLARO / OSCURO
   (el tema inicial se aplica en el <head> para evitar parpadeo)
==================== */
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    const isLight = theme === 'light';
    themeBtn.setAttribute('aria-label', isLight ? tr('theme.toDark', 'Cambiar a modo oscuro') : tr('theme.toLight', 'Cambiar a modo claro'));
    themeBtn.setAttribute('aria-pressed', String(isLight));
}

applyTheme(root.getAttribute('data-theme') || 'dark');

themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
});

// Al cambiar de idioma, actualizar el texto accesible del botón de tema
document.addEventListener('langchange', () => {
    applyTheme(root.getAttribute('data-theme'));
});

// Si la persona no eligió tema manualmente, seguir el del sistema
const systemQuery = window.matchMedia('(prefers-color-scheme: light)');
systemQuery.addEventListener('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) applyTheme(e.matches ? 'light' : 'dark');
});


/* ===================
   MODAL VISTA PREVIA DEL CV
==================== */
const cvModal = document.getElementById('cv-modal');
const cvOpen = document.getElementById('cv-open');
const cvClose = document.getElementById('cv-close');
const cvFrame = document.getElementById('cv-frame');
const cvDownload = document.getElementById('cv-download');
const cvNewTab = document.getElementById('cv-newtab');

// Archivo del CV por idioma. Cuando tengas el CV en inglés, cambia la ruta de "en".
const CV_FILES = {
    es: { file: './docs/cv.pdf', name: 'CV-Selvin-Eladio-Lem-Ical.pdf' },
    en: { file: './docs/cv.pdf', name: 'CV-Selvin-Eladio-Lem-Ical-EN.pdf' }
};

function updateCvLinks(){
    const cv = CV_FILES[getLang()];
    cvDownload.setAttribute('href', cv.file);
    cvDownload.setAttribute('download', cv.name);
    cvNewTab.setAttribute('href', cv.file);
    cvFrame.dataset.src = cv.file + '#view=FitH';
    // Si el PDF ya estaba cargado y el archivo cambió, recargarlo
    if (cvFrame.getAttribute('src') && cvFrame.getAttribute('src') !== cvFrame.dataset.src) {
        cvFrame.setAttribute('src', cvFrame.dataset.src);
    }
}

updateCvLinks();
document.addEventListener('langchange', updateCvLinks);

function openCv(){
    // El PDF se carga solo al abrir, para no gastar datos antes de tiempo
    if (!cvFrame.getAttribute('src')) {
        cvFrame.setAttribute('src', cvFrame.dataset.src);
    }
    cvModal.showModal();
    document.body.classList.add('no-scroll');
}

function closeCv(){
    cvModal.close();
}

cvOpen.addEventListener('click', openCv);
cvClose.addEventListener('click', closeCv);

// Cerrar al hacer clic fuera del cuadro (sobre el fondo oscurecido)
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) closeCv();
});

// Se dispara al cerrar con el botón, con clic fuera o con Escape
cvModal.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
});