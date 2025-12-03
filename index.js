import "./style/style.css";
import { loadHome, loadContact, loadAbout } from "./modules/pages.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");


loadHome(content);

// menu btn listener was added in pages.js 
homeBtn.addEventListener('click', () => loadHome(content));
aboutBtn.addEventListener('click', () => loadAbout(content));
contactBtn.addEventListener('click', () => loadContact(content));


