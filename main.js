(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("div");n.setAttribute("id","heading");const o=document.createElement("div");o.setAttribute("id","hours");const d=document.createElement("h1");d.textContent="Woody restaurant";const c=document.createElement("h2");c.textContent="FOOD MADE BY WOOD";const a=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],m=["8am - 8pm","8am - 8pm","8am - 8pm","8am - 8pm","8am - 8pm","10am - 6pm","CLOSED"];for(let e=0;e<a.length;e++){const t=document.createElement("p");t.textContent=a[e]+": "+m[e],o.appendChild(t)}n.appendChild(d),n.appendChild(c),t.appendChild(n),t.appendChild(o),e.appendChild(t)}function t(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("h1");n.textContent="Menu",t.appendChild(n);const o=["Oak","Beech","Pine","Mahogany"],d=["oak-wood.jpg","beech-wood.jpg","pine-wood.jpg","mahogany-wood.jpg"];for(let e=0;e<o.length;e++){const n=document.createElement("p");n.className="wood-type",n.textContent=o[e];const c=document.createElement("img");c.src="assets/"+d[e],t.appendChild(n),t.appendChild(c)}const c=document.createElement("a");c.textContent="Images from homesdirect365",c.href="https://www.homesdirect365.co.uk/blog/2020/07/a-guide-to-wood-types",c.target="_blank",c.rel="noopener noreferrer",t.appendChild(c),e.appendChild(t)}function n(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("h1");n.textContent="Contact",t.appendChild(n);const o=document.createElement("h3");o.textContent='Find some tree around you and shout "restaurant" to contact us!',t.appendChild(o),e.appendChild(t)}function o(e){document.getElementById("content").innerHTML="",e()}function d(e){document.querySelectorAll(".tab-list li").forEach((e=>e.classList.remove("selected"))),document.getElementById(e).classList.add("selected")}e();const c=document.getElementById("home"),a=document.getElementById("menu"),m=document.getElementById("contact");c.addEventListener("click",(function(){o(e),d("home")})),a.addEventListener("click",(function(){o(t),d("menu")})),m.addEventListener("click",(function(){o(n),d("contact")}))})();