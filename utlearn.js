
// // to asign a variable for p tag
// para = document.querySelector('p')

// // to setting thee attribute  from title to latest
// para.setAttribute("title", "latest")
//  adding style to p tag
// para.style.color = 'red';

// adding classlist to red 
// para.classList.add("red")
// // calling classlist where
// para.classList.add("red")

// function prasanth () {
// console.log("okay button clicked")
// }
// -----------------------------------------------------------------------------------------------
// event bubling 

// document.getElementById("p1").addEventListener("click",function(e){
// console.log(e.target.innerText);
// })
// // stopPropagation is used to stop calling parent element
// document.getElementById('myid').addEventListener('click', function(e){
//    e.stopPropagation();
//     console.log('button clicked')
// })
// document.getElementById('myidh').addEventListener('click',function(e){
//     console.log('div  clicked');
// })
// ---------------------------------------------------------------------------------------------

// how to creat,  remvoe append dom

// container =  document.getElementById('myidh');
// $h1 = document.createElement("h1")
// $h1.id = "header";
// $h1.innerText = "hello this is a h1"
// console.log($h1)


// container.appendChild($h1);
// container.removeChild($h1)