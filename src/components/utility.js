import Main from "./layout";

export default class Utility {
    static load() {
        const app = document.getElementById('app');
        app.appendChild(Main());
    }

    static render(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }
}