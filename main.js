(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("div");n.setAttribute("id","heading");const d=document.createElement("div");d.setAttribute("id","hours");const c=document.createElement("h1");c.textContent="Woody restaurant";const o=document.createElement("h2");o.textContent="FOOD MADE BY WOOD";const m=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=["8am - 8pm","8am - 8pm","8am - 8pm","8am - 8pm","8am - 8pm","10am - 6pm","CLOSED"];for(let e=0;e<m.length;e++){const t=document.createElement("p");t.textContent=m[e]+": "+a[e],d.appendChild(t)}n.appendChild(c),n.appendChild(o),t.appendChild(n),t.appendChild(d),e.appendChild(t)}function t(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("h1");n.textContent="Menu",t.appendChild(n),e.appendChild(t)}function n(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","main");const n=document.createElement("h1");n.textContent="Contact",t.appendChild(n),e.appendChild(t)}function d(e){document.getElementById("content").innerHTML="",e()}function c(e){document.querySelectorAll(".tab-list li").forEach((e=>e.classList.remove("selected"))),document.getElementById(e).classList.add("selected")}e();const o=document.getElementById("home"),m=document.getElementById("menu"),a=document.getElementById("contact");o.addEventListener("click",(function(){d(e),c("home")})),m.addEventListener("click",(function(){d(t),c("menu")})),a.addEventListener("click",(function(){d(n),c("contact")}))})();