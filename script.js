const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('#menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });

  // Close menu after clicking a link (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const company = (data.get('company') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`Solicitud de información - ${name}${company ? ' (' + company + ')' : ''}`);
    const body = encodeURIComponent(
`Hola equipo de ProteNord,

Soy ${name}${company ? ' de ' + company : ''}.

${message}

Gracias.`);

    window.location.href = `mailto:info@protenord.com?subject=${subject}&body=${body}`;
  });
}
