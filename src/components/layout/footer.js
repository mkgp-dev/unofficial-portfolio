import contact from '../../assets/cat-contact.jpg';
import Icon from "../ui/icon";

export default function Footer() {
    const frag = document.createDocumentFragment();

    const container = document.createElement('footer');
    container.className = 'bg-sky-500';

    const body = document.createElement('div');
    body.className = 'mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2';

    const contactContainer = document.createElement('div');
    contactContainer.className = 'px-4 py-8 md:py-10 text-slate-100 space-y-4';

    const contactHeader = document.createElement('h1');
    contactHeader.className = 'font-serif text-3xl text-center md:text-left md:text-4xl';
    contactHeader.textContent = 'Contact me';

    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = 'Feel free to reach out via email if you think we could work well together.';

    const contactEmail = document.createElement('div');
    contactEmail.className = 'flex items-center gap-2';
    contactEmail.textContent = 'mkgpdev@gmail.com';
    contactEmail.prepend(Icon.mail());

    const imageContainer = document.createElement('div');
    imageContainer.className = 'w-full md:max-w-xl md:py-10';

    const contactImage = document.createElement('img');
    contactImage.className = 'w-full h-full object-cover';
    contactImage.src = contact;
    contactImage.alt = 'cat-contact';
    contactImage.loading = 'lazy';

    imageContainer.appendChild(contactImage);
    [contactHeader, contactParagraph, contactEmail].forEach(child => contactContainer.appendChild(child));
    [contactContainer, imageContainer].forEach(child => body.appendChild(child));
    container.appendChild(body);
    frag.appendChild(container);

    return frag;
}