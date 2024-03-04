let playerone = document.querySelector(".playerone")
let playeronemen = document.querySelector(".playeronemen")
let playeroneinput = document.querySelector(".playeroneinput")
let playeonebut = document.querySelector(".playeonebut")
let playeroneerr = document.querySelector(".playeroneerr")

let playertwo = document.querySelector(".playertwo")
let playertwomen = document.querySelector(".playertwomen")
let playertwoinput = document.querySelector(".playertwoinput")
let playetwobut = document.querySelector(".playetwobut")
let playertwoerr = document.querySelector(".playertwoerr")
let success = document.querySelector(".success")
let chance = document.querySelector(".chance")
let one = document.querySelector(".one")
let start = document.querySelector(".start")








let playeronevalue;
let chancevalue = 3
playeonebut.addEventListener("click",()=>{
    if(playeroneinput.value){
     if(playeroneinput.value - 10){
    if(playeroneinput.value > 0 && playeroneinput.value < 10 ){
      playeronevalue = playeroneinput.value
      playertwo.style.display = "block"
      playerone.style.display = "none"
    }else{
        playeroneerr.innerHTML = "please Enter Number 1 to 9"
    }
     }else{
        playeroneerr.innerHTML = "please Enter Number"
     }
    }else{
        playeroneerr.innerHTML = "please Enter some value"
    }
})

playetwobut.addEventListener("click",()=>{
    if(playertwoinput.value){
     if(playertwoinput.value - 10){
    if(playertwoinput.value > 0 && playertwoinput.value < 10 ){
      if(playertwoinput.value == playeronevalue){
        success.innerHTML = "win"
      }else{
        if(chancevalue != 1){
            chancevalue --
            chance.innerHTML = chancevalue
        }else{
            success.innerHTML = "Lost"
            chance.innerHTML = ""
        }
        
      }
    }else{
       playertwoerr.innerHTML = "please Enter Number 1 to 9"
    }
     }else{
        playertwoerr.innerHTML = "please Enter Number"
     }
    }else{
        playertwoerr.innerHTML = "please Enter some value"
    }
})
start.addEventListener("click",(e)=>{
 
  if(one.type == "password" ){
    one.type = "text"
    e.target.className = "fa-regular fa-eye"
  }else{
    one.type = "password"
    e.target.className = "fa-regular fa-eye-slash"
  }
})


let text = document.querySelector(".text")
let add = document.querySelector(".add")
let list = document.querySelector(".list")
let upd = document.querySelector(".upd")


let data = [];
let id ;


add.addEventListener("click",()=>{
 if(text.value){
  data.push(text.value)
  addtodo()
  text.value = ""
 }
 
})

upd.addEventListener("click",()=>{
  data[id] = text.value
  addtodo()
  text.value = ""
})


function addtodo(){
  list.innerHTML = ""
  data.map((item)=>{
    list.innerHTML += `<li>${item} <button class="delete">delete</button>
    <button class="edit">edit</button></li>`
  })
  


  let deletesingel = document.querySelectorAll(".delete")
  let edit = document.querySelectorAll(".edit")
  let deleteArr = Array.from(deletesingel)
  let editsingel = Array.from(edit)
  
  

  deleteArr.map((itemd, index)=>{
    itemd.addEventListener("click",()=>{
      data.splice(index, 1)
      addtodo()
    })

  })
  editsingel.map((iteme ,index)=>{
    iteme.addEventListener("click",()=>{
      text.value = data[index]
      id = index
      addtodo()
    })

  })
  
}