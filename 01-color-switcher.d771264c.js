const e=document.querySelector("body"),t=document.querySelector(".js-start"),n=document.querySelector(".js-stop");let r,d=!1;function o(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){if(d)return;d=!0,t.disabled=!0,n.disabled=!1,r=setInterval(o,1e3)})),n.addEventListener("click",(function(){clearInterval(r),t.disabled=!1,n.disabled=!0,d=!1}));
//# sourceMappingURL=01-color-switcher.d771264c.js.map
