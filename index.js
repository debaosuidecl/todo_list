const input = document.querySelector("input")
const list = document.querySelector("ul")
const form  = document.querySelector("form")
const deleteTrash = document.querySelector(".delete");
const weekdays = [
    "Sunday",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
]
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
form.addEventListener("submit", submitHandler)


function submitHandler(e){
    e.preventDefault();
    let item = document.createElement("li")

    item.className = "item"
    item.innerHTML = `      
                
    <div class="circle"></div>
    <div class="text">
        <p>${input.value}</p>
    </div>
    <div class="delete">
        <i class="fas fa-trash"></i>


    </div>`

    input.value = ""

    list.appendChild(item)
    const allDeletes = document.querySelectorAll(`.delete i`)
    const allCircles = document.querySelectorAll(".circle")
    const alltext = document.querySelectorAll(".text")
        for (let i=0; i <allDeletes.length; i++){
            allCircles[i].addEventListener("click", markasdone )
            allDeletes[i].addEventListener("click", deleteItem)
            alltext[i].addEventListener("dblclick", converttoinput)
        }
}

function deleteItem(e){
    e.target.parentNode.parentNode.classList.add("rotateDisappear")
    setTimeout(()=> {

        e.target.parentNode.parentNode.remove()
    }, 300)
}


function markasdone(e){
let listofclasses = [...e.target.parentNode.querySelector(".text p").classList];
if(listofclasses.indexOf("cross-style") == -1){
    e.target.parentNode.querySelector(".text p").classList.add("cross-style")
    e.target.classList.add("fill-circle")

} else{
    e.target.parentNode.querySelector(".text p").classList.remove("cross-style")
    e.target.classList.remove("fill-circle")

}

}

function converttoinput(e){
    console.log("I double clicked")
}


function currentTime() {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let weekday = weekdays[date.getDay()];
    let dayInMonth = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getUTCFullYear();
    console.log(date.getDate(), month, year)
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec; /* adding time to the div */
    document.getElementById("date").innerHTML = dayInMonth + " " + weekday + " " + month + " " + year; /* adding time to the div */
    let t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */

  }

  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }


  currentTime(); /* calling currentTime() function to initiate the process */
