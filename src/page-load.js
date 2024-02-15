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

    const images = ['Oak', 'Beech', 'Pine', 'Mahogany'];
    const images_src = ['oak-wood.jpg', 'beech-wood.jpg', 'pine-wood.jpg', 'mahogany-wood.jpg'];

    for (let i = 0; i < images.length; i++) {
        const pElement = document.createElement('p');
        pElement.className = "wood-type";
        pElement.textContent = images[i];
        const image = document.createElement('img');
        image.src = 'assets/' + images_src[i];

        mainDiv.appendChild(pElement);
        mainDiv.appendChild(image);
    }

    const aElement = document.createElement("a");
    aElement.textContent = "Images from homesdirect365";
    aElement.href = "https://www.homesdirect365.co.uk/blog/2020/07/a-guide-to-wood-types";
    aElement.target = "_blank";
    aElement.rel = "noopener noreferrer";
    mainDiv.appendChild(aElement);

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

    const h3Heading = document.createElement("h3");
    h3Heading.textContent = 'Find some tree around you and shout "restaurant" to contact us!';
    mainDiv.appendChild(h3Heading);
    contentDiv.appendChild(mainDiv);
}