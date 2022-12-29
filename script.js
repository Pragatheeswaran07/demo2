let bar=document.querySelector(".togglebar")
let cols=document.querySelector(".col-5")
let down=document.querySelector(".dropdown")
let dlist=document.querySelector(".dlist")
console.log(down)
bar.addEventListener("click",()=>{

    bar.classList.toggle("active")
    cols.classList.toggle("dis")
})
down.addEventListener("click",()=>{
    dlist.classList.toggle("dls")
})