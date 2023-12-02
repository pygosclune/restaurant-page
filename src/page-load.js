export function loadHome() {
    //divs
    const contentDiv = document.getElementById("content");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");
    const headingDiv = document.createElement("div");
    headingDiv.setAttribute("id", "heading");
    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("id", "hours");

    //content of divs
    const h1Heading = document.createElement("h1");
    h1Heading.textContent = "Woody restaurant";
    const h2Heading = document.createElement("h2");
    h2Heading.textContent = "FOOD MADE BY WOOD";

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = ['8am - 8pm', '8am - 8pm', '8am - 8pm', '8am - 8pm', '8am - 8pm', '10am - 6pm', 'CLOSED'];

    for (let i = 0; i < days.length; i++) {
        const pElement = document.createElement('p');
        pElement.textContent = days[i] + ': ' + hours[i];
        hoursDiv.appendChild(pElement);
    }

    //appending
    headingDiv.appendChild(h1Heading);
    headingDiv.appendChild(h2Heading);
    mainDiv.appendChild(headingDiv);
    mainDiv.appendChild(hoursDiv);
    contentDiv.appendChild(mainDiv);
}

export function loadMenu() {
    //divs
    const contentDiv = document.getElementById("content");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");

    //content of divs
    const h1Heading = document.createElement("h1");
    h1Heading.textContent = "Menu";
    mainDiv.appendChild(h1Heading);
    contentDiv.appendChild(mainDiv);
}

export function loadContact() {
    //divs
    const contentDiv = document.getElementById("content");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");

    //content of divs
    const h1Heading = document.createElement("h1");
    h1Heading.textContent = "Contact";
    mainDiv.appendChild(h1Heading);
    contentDiv.appendChild(mainDiv);
}