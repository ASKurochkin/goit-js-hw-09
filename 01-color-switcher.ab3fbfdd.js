!function(){var t,e=document.querySelector("body"),o=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");o.addEventListener("click",(function(){t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o.disabled=!0})),n.addEventListener("click",(function(){clearInterval(t),e.style.backgroundColor="#FFFFFF",o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ab3fbfdd.js.map
