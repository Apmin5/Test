const navbar = document.querySelector(".nav-bar");
const menu = document.querySelector(".menu");
const menubar = document.querySelector(".menu-bar");
const tothetop = document.querySelector(".top");

const array = ["all","home","about","portfolio","contact"];

const callFun = (event)=>{
    const atagId = event.target.id;
    const getatag = document.getElementById(atagId);
    const offsetw = getatag.offsetWidth +"px";
    const offsetL = getatag.offsetLeft+"px";
    menubar.style.width = offsetw;
    menubar.style.transform = `translateX(${offsetL})`;
}

for(let i = 0; i<array.length;i++){
    let arrele = array[i];
    const atag = document.createElement("a");
    atag.id = i;
    atag.href = `#${arrele}`;
    atag.append(arrele.toUpperCase());
    menu.append(atag);
    atag.addEventListener("click",callFun);

}
// for humberger
const one = document.querySelector(".One");
const two = document.querySelector(".Two");
const three = document.querySelector(".Three");
const humberger = document.getElementById("humberger");
const forHum = document.getElementById("forHum");


humberger.addEventListener("click",()=>{
    if (two.classList.contains("opa")) {
        two.style.opacity = "1";
        two.classList.remove("opa");
        one.classList.remove("plustranslate")
        three.classList.remove("minustranslate");
        forHum.classList.add("de");
    }else{
        two.style.opacity = "0";
        forHum.innerHTML = "";
        two.classList.add("opa");
        one.classList.add("plustranslate")
        three.classList.add("minustranslate");
        forHum.classList.remove("de");
        for(let i = 0; i<array.length;i++){
            let arrele = array[i];
            const atag = document.createElement("a");
            atag.id = i;
            atag.href = `#${arrele}`;
            atag.append(arrele.toUpperCase());
            forHum.append(atag);
        }
}})
