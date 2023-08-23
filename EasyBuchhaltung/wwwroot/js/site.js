const planTypeSelecter = document.querySelector(".plan-type-selecter");
const jearlich = document.querySelector(".jearlich");
const montalich = document.querySelector(".monatlich");
const mover = document.querySelector(".mover")
planTypeSelecter.setAttribute("plan", "jearlich");

planTypeSelecter.addEventListener("click", () => {
    if (planTypeSelecter.getAttribute("plan") == "jearlich") {
        planTypeSelecter.setAttribute("plan", "monatlich")
        mover.classList.add("left-to-right");
        mover.classList.remove("right-to-left");
        jearlich.classList.add("text-black-50");
        montalich.classList.remove("text-black-50");
    }
    else if (planTypeSelecter.getAttribute("plan") == "monatlich") {
        planTypeSelecter.setAttribute("plan", "jearlich")
        mover.classList.remove("left-to-right");
        mover.classList.add("right-to-left");
        montalich.classList.add("text-black-50");
        jearlich.classList.remove("text-black-50");
    }
})
