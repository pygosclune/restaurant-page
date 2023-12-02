import { loadHome, loadMenu, loadContact } from "./page-load.js";
loadHome();

function clearPageAndLoad(execute) {   
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    execute();
}

function setActiveTab(tabId) {
    const tabs = document.querySelectorAll(".tab-list li");
    tabs.forEach(tab => tab.classList.remove("selected"));

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("selected");
}

const navHome = document.getElementById("home");
const navMenu = document.getElementById("menu");
const navContact = document.getElementById("contact");

navHome.addEventListener("click", function() {
    clearPageAndLoad(loadHome);
    setActiveTab("home");
});

navMenu.addEventListener("click", function() {
    clearPageAndLoad(loadMenu);
    setActiveTab("menu");
});

navContact.addEventListener("click", function() {
    clearPageAndLoad(loadContact);
    setActiveTab("contact");
});