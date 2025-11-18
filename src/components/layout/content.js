import shipwreck from '../../assets/ship-wreck.png';
import forecastme from '../../assets/forecast-me.png';
import whattodo from '../../assets/what-to-do.png';
import tictactoe from '../../assets/tic-tac-toe.png';
import rockpaperscissor from '../../assets/rock-paper-scissor.png';
import calculator from '../../assets/calculator.png';
import { personalProject } from '../ui/render';

const projects = [
    { image: shipwreck, name: 'Ship Wreck', description: 'A simple Battleship project submitted for The Odin Project course.', source: 'https://github.com/mkgp-dev/ship-wreck', view: 'https://mkgp-dev.github.io/ship-wreck' },
    { image: forecastme, name: 'Forecast Me', description: 'A simple Weather App project submitted for The Odin Project course.', source: 'https://github.com/mkgp-dev/forecast-me', view: 'https://mkgp-dev.github.io/forecast-me' },
    { image: whattodo, name: 'What to do', description: 'A simple To-Do List project submitted for The Odin Project course.', source: 'https://github.com/mkgp-dev/what-to-do', view: 'https://mkgp-dev.github.io/what-to-do' },
    { image: tictactoe, name: 'Tic Tac Toe', description: 'A simple Tic Tac Toe project submitted for The Odin Project course.', source: 'https://github.com/mkgp-dev/personal-top-archive/blob/main/tic-tac-toe', view: 'https://mkgp-dev.github.io/personal-top-archive/tic-tac-toe' },
    { image: calculator, name: 'Calculator', description: 'A simple Calculator project submitted for The Odin Project course.', source: 'https://github.com/mkgp-dev/personal-top-archive/blob/main/calculator', view: 'https://mkgp-dev.github.io/personal-top-archive/calculator' },
    { image: rockpaperscissor, name: 'Rock Paper Scissor', description: 'A simple Rock Paper Scissor project submitted for The Odin Project course.', source: 'https://github.com/mkgp-dev/personal-top-archive/blob/main/rock-paper-scissors', view: 'https://mkgp-dev.github.io/personal-top-archive/rock-paper-scissors' }
];

export default function Content() {
    const frag = document.createDocumentFragment();

    const container = document.createElement('main');
    container.className = 'mx-auto max-w-5xl px-4 py-10 md:py-16';

    const header = document.createElement('h1');
    header.className = 'font-serif text-3xl text-center mb-4 md:text-left md:text-4xl';
    header.textContent = 'My work';

    const grid = document.createElement('div');
    grid.className = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3';

    projects.forEach(p => grid.appendChild(personalProject(p.image, p.name, p.description, p.source, p.view)));

    [header, grid].forEach(child => container.appendChild(child));
    frag.appendChild(container);

    return frag;
}