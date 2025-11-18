import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Main() {
    const frag = document.createDocumentFragment();

    [Header(), Content(), Footer()].forEach(child => frag.appendChild(child));

    return frag;
}