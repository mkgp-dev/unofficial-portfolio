import profile from '../../assets/profile-picture.png';
import Icon from '../ui/icon';

export default function Header() {
    const frag = document.createDocumentFragment();

    const header = document.createElement('header');
    header.className = 'relative overflow-hidden';

    const headerBackground = document.createElement('div');
    headerBackground.className = 'absolute inset-0 -z-10 bg-sky-500 origin-bottom-left -rotate-20 md:-rotate-6 scale-[1.3] -translate-y-100 md:-translate-y-10';

    const body = document.createElement('div');
    body.className = 'relative mx-auto max-w-5xl px-6 py-6 md:py-16';

    const card = document.createElement('div');
    card.className = 'flex flex-col md:flex-row md:items-center';

    const profileContainer = document.createElement('div');
    profileContainer.className = 'relative w-full md:max-w-sm shadow-lg drop-shadow-lg shrink-0';

    const profilePicture = document.createElement('img');
    profilePicture.className = 'w-full h-full object-cover object-center aspect-3/4 md:aspect-auto';
    profilePicture.alt = 'mark-pelayo-profile-picture'
    profilePicture.src = profile;
    profilePicture.loading = 'lazy';

    const profileShadow = document.createElement('div');
    profileShadow.className = 'absolute inset-0 bg-linear-to-t from-black/50 to-transparent';

    const profileName = document.createElement('div');
    profileName.className = 'font-serif absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-100 text-4xl text-5xl md:text-6xl whitespace-nowrap';
    profileName.textContent = 'Mark Pelayo';

    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'flex flex-col bg-white d w-full px-4 sm:px-6 py-6 sm:py-8 md:drop-shadow-lg md:shadow-lg md:h-90';

    const aboutHeader = document.createElement('h1');
    aboutHeader.className ='font-serif text-3xl text-center mb-2 md:text-left md:text-4xl md:mb-4';
    aboutHeader.textContent = 'About me';

    const aboutParagraph = document.createElement('p');
    aboutParagraph.className = 'leading-snug text-slate-500 mb-2';
    aboutParagraph.textContent = 'Self-taught web developer transitioning from a maritime background, dedicated to learning modern web practices.';

    const aboutParagraph2 = document.createElement('p');
    aboutParagraph2.className = 'leading-snug text-slate-500';
    aboutParagraph2.textContent = 'Currently enhancing my skills through The Odin Project to strengthen my foundation in JavaScript and build real-world projects.'

    const aboutSocials = document.createElement('div');
    aboutSocials.className = 'flex items-center gap-4 mt-6 mx-auto md:mx-0 md:mt-auto md:justify-end';

    const aboutGithub = document.createElement('a');
    aboutGithub.href = 'https://github.com/mkgp-dev';
    aboutGithub.target = '_blank';
    aboutGithub.appendChild(Icon.github());

    const aboutFreeCodeCamp = document.createElement('a');
    aboutFreeCodeCamp.href = 'https://www.freecodecamp.org/mkgp-dev';
    aboutFreeCodeCamp.target = '_blank';
    aboutFreeCodeCamp.appendChild(Icon.freecodecamp());

    const aboutCodepen = document.createElement('a');
    aboutCodepen.href = 'https://codepen.io/mkgp-dev';
    aboutCodepen.target = '_blank';
    aboutCodepen.appendChild(Icon.codepen());

    [aboutGithub, aboutFreeCodeCamp, aboutCodepen].forEach(child => aboutSocials.appendChild(child));
    [aboutHeader, aboutParagraph, aboutParagraph2, aboutSocials].forEach(child => aboutContainer.appendChild(child));
    [profilePicture, profileShadow, profileName].forEach(child => profileContainer.appendChild(child));
    [profileContainer, aboutContainer].forEach(child => card.appendChild(child));
    body.appendChild(card);
    [headerBackground, body].forEach(child => header.appendChild(child));
    frag.appendChild(header);

    return frag;
}