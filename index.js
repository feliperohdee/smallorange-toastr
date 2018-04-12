const place = (html, type, time = 4500, footerText = 'Tap to close') => {
    let container = document.querySelector('.toastrContainer');
    const containerExists = !!container;

    if (!container) {
        container = document.createElement('div');
        container.className = 'toastrContainer';
    }

    if (!containerExists) {
        container.style.top = '10px';
        container.style.right = '10px';

        document.body.insertBefore(container, document.body.childNodes[0]);
    }

    const toastr = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    
    toastr.close = () => {
        toastr.classList.add('close');

        setTimeout(() => {
            clearTimeout(toastr.timeout);
            toastr.removeEventListener('click', toastr.close);
            toastr.remove();

            const container = document.querySelector('.toastrContainer');
            const childNodes = container && container.childNodes;
            const count = childNodes && childNodes.length;

            !count && container.remove();
        }, 300);
    };

    toastr.className = `toastr ${type}`;
    toastr.addEventListener('click', toastr.close);
    toastr.timeout = setTimeout(toastr.close, time);
    toastr.appendChild(main);
    toastr.appendChild(footer);
    
    main.innerHTML = html;

    footer.innerHTML = footerText;
    footer.classList.add('footer');
    container.insertBefore(toastr, container.childNodes[0]); 
};

const toastr = (html, time, footerText) => place(html, null, time, footerText);
toastr.success = (html, time, footerText) => place(html, 'success', time, footerText);
toastr.info = (html, time, footerText) => place(html, 'info', time, footerText);
toastr.warning = (html, time, footerText) => place(html, 'warning', time, footerText);
toastr.error = (html, time, footerText) => place(html, 'error', time, footerText);

window.toastr = toastr;
module.exports = toastr;
