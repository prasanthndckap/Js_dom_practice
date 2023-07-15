// let add = document.querySelector("#container")
// console.log(add.innerText)
// for ( let i=0; i<add.length; i++){
//     console.log(add[i].innerHTML)
// }

// for ( let i=0; i<add.length; i++){
//     add[i].style.color = "red"
// }
// if(add[i].innertext === "content"){
//     add[i].style.color = "pink"
// }else if(add[i].innerText.toLo)


// const sixthLi = document.createElement("li")
// sixthLi.innerText = "follow us"

// add.append(sixthLi)

// const secondLi = document.querySelector("#container")
// secondLi.setAttribute("class","items")

// const secondLi = document.querySelector("#container")
// secondLi.removeAttribute("class","content")







// const ulchild = document.querySelector("ul").children
// // console.log (ulchild)
// for (let i=0;i<ulchild.length; i++){
//     // console.log(ulchild[i].innerText);
// }


// const ulchild = document.querySelector("ul").children
// // console.log (ulchild)
// for (let i=0;i<ulchild.length; i++){
//     // console.log(ulchild[i].innerText);
//     // ulchild[i].style.listStyle = "none"
//     ulchild[i].innerText =ulchild[i].innerText.toLowerCase()
//     ulchild[i].style.listStyle = "none"
// }


// const more = document.querySelector("#container")
// console.log(more.nextElementSibling)

// events

// const but =  document.querySelector(".btn")
// function showAlert(){
//     alert("welcome to my page")
// } 
// but.addEventListener("click",showAlert)


// const but =  document.querySelector(".btn")
// function showAlert(event){
// if(event.target.innerText === "submit"){
//     event.target.innerText = "submitted"
// }
// else {
//     event.target.innerText = "submit"
// }
// } 
// but.addEventListener("click",showAlert)

// const but = document.querySelector(".btn")
// const buts = document.querySelector(".get")

// function showall(){
//     buts.classList.toggle("hide")
// }
// but.addEventListener("click", showall)


// const but = document.querySelector(".btn")
// const buts = document.querySelector(".get")

// function more(){
//     if(buts.classList.contains("show")){
//         buts.classList.remove("show")
//         buts.classList.add("hide")
//     }else{
//         buts.classList.remove("hide")
//         buts.classList.add("show")
//     }
// } 

// but.addEventListener('click',more)


// const find = document.getElementsByName("p")

// document.getElementById("must").innerText = "hdriewfdsad" +


// const x = document.getElementById("main")
// const y = x.getElementsByTagName("p")

// document.getElementById("must").innerText = " good morning " + " "+ y[1].innerText


// const x = document.getElementsByClassName("demo");
// document.getElementById("must").innerHTML = " the first paragraph 



// const x = document.forms["frm1"]
// let text = ""
// for ( let i = 0; i<x.length; i++){
//     text += x[i].value + " " + " ";
// }
// document.getElementById("must").innerHTML = text

// find anchors 
// document.getElementById("must").innerHTML = "number of anchors:" + document.anchors.length;


//  to reasign the value
// const good = document.getElementById("must");
// good.innerHTML = "vignesh"

//  to find date 
// document.getElementById("must").innerHTML= "date : " + Date ();


// alert user if value is empty

// function prasanth(){
//     let x = document.forms["santh"]["fname"].value
//     if(x == ""){
//         alert ("value enter pandra domeru");
//         return false;
//     }
// }

// alert user if value if not insert in correctly

// function prasanth(){
//     let x = document.getElementById("numb").value;

//     let text;
//     if(isNaN(x) || x<5|| x>10){
//         text = "invalid"
//         alert("correct ta na value va insert pannu ")
        

//     }
//     else {
//         text = " input ok"
//         alert(" vealai mundathu")
//         // text = " input ok"
//     }
//     document.getElementById("must").innerHTML = text;
//  }



//  function  prasanth (){
//     console.log("button clicked")
//  }

//  function keypress(e){
//     if(e.code === "Enter")
//     console.log(e.target.value)
//  }

//  function keypress(e){
  
//     console.log(e)
//  }

// function more(){
//     if(buts.classList.contains("show")){
//         buts.classList.remove("show")
//         buts.classList.add("hide")
//     }else{
//         buts.classList.remove("hide")
//         buts.classList.add("show")
//     }
// } 

// but.addEventListener('click',more)

// const change = document.querySelector(".camilion")
// function prasanth (){
// if(change.classList.contains("make")){
//     change.classList.remove("make")
//     change.classList.add("changes")
// }else{
//     change.classList.remove("changes")
//     change.classList.add("make")
// }
// }
// change.addEventListener('click', prasanth)
// const newchange = document.querySelector(".camilion1")
// function prasanth1 (){
//     if(newchange.classList.contains("make")){
//         newchange.classList.remove("make")
//         newchange.classList.add("changes")
//     }else{
       
//         newchange.classList.remove("changes")
//         newchange.classList.add("make")
//     }
//     }
//     newchange.addEventListener('click', prasanth1)
    

//     const change = document.querySelectorAll(".camilion")
// for(let i=0;i<change.length; i++){
//     function modify(){
//         change[i].classList.toggle("changes")
//     }
//     change[i].addEventListener("click", modify)
// }

// document.querySelectorAll("div")

// document.querySelector('.myclass')
// document.querySelector('p.myclass')