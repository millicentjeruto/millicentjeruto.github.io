const menuButton=document.querySelector(".menu-toggle");const nav=document.querySelector("nav");if(menuButton&&nav){menuButton.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));}
document.querySelectorAll(".gallery-item").forEach(item=>{
  item.addEventListener("click",()=>{
    const box=document.querySelector(".lightbox");
    const img=box.querySelector("img");
    img.src=item.dataset.full;
    img.alt=item.querySelector("img")?.alt || "Portfolio project";
    box.classList.add("open");
    box.setAttribute("aria-hidden","false");
  });
});
const lightbox=document.querySelector(".lightbox");
if(lightbox){
  const close=()=>{lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightbox.querySelector("img").src="";};
  lightbox.querySelector(".lightbox-close").addEventListener("click",close);
  lightbox.addEventListener("click",e=>{if(e.target===lightbox)close();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
}
