!function(){var t,e=document.querySelector("body"),n=document.querySelector(".js-start"),r=document.querySelector(".js-stop"),o=!1;function c(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}n.addEventListener("click",(function(){if(o)return;o=!0,n.disabled=!0,t=setInterval(c,1e3)})),r.addEventListener("click",(function(){clearInterval(t),n.disabled=!1,o=!1}))}();
//# sourceMappingURL=01-color-switcher.44eb06b6.js.map
