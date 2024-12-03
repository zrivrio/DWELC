const iconos = {
    pdf: '📄', 
    ppt: '📊', 
    pptx: '📊', 
    jpg: '🖼️', 
    jpeg: '🖼️', 
    png: '🖼️', 
    gif: '🖼️', 
    zip: '📦',
    rar: '📦',
    doc: '📝',
    docx: '📝'
};

function addIconos() {
    const links = document.querySelectorAll('#enlace-lista a'); 
    links.forEach(link => {
        const url = link.getAttribute('href');
        const extension = url.split('.').pop().toLowerCase();

        if (iconos[extension]) {
            const icono = document.createElement('span');
            icono.classList.add('link-icon'); 
            icono.textContent = iconos[extension];
            link.prepend(icono); 
        }
    });
}

document.addEventListener('DOMContentLoaded', addIconos);
