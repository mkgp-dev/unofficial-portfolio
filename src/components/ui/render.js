import Utility from "../utility";
import Icon from "./icon";

export function personalProject(image, name, description, source, view) {
    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.className = 'bg-white drop-shadow-lg flex flex-col';

    const cover = document.createElement('img');
    cover.className = 'w-full aspect-4/3 object-cover';
    cover.src = image;
    cover.alt = name;
    cover.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'px-4 py-3 flex-1 flex flex-col';

    const projectHeader = document.createElement('div');
    projectHeader.className = 'flex items-center justify-between gap-2 mb-2';

    const projectTitle = document.createElement('p');
    projectTitle.className = 'font-serif text-lg';
    projectTitle.textContent = name;

    const projectIcon = document.createElement('div');
    projectIcon.className = 'flex gap-3';

    const projectGithub = document.createElement('a');
    projectGithub.href = source;
    projectGithub.target = '_blank';
    projectGithub.appendChild(Icon.github(4));

    const projectLink = document.createElement('a');
    projectLink.href = view;
    projectLink.target = '_blank';
    projectLink.appendChild(Icon.link(4));

    const projectDescription = document.createElement('p');
    projectDescription.className = 'text-sm text-slate-500';
    projectDescription.textContent = description;

    [projectGithub, projectLink].forEach(child => projectIcon.appendChild(child));
    [projectTitle, projectIcon].forEach(child => projectHeader.appendChild(child));
    [projectHeader, projectDescription].forEach(child => body.appendChild(child));
    [cover, body].forEach(child => container.appendChild(child));
    frag.appendChild(container);

    return frag;
}