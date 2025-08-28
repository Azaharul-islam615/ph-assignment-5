
// heart part

let count=0
 const hearts =document.querySelectorAll(".heard")
 for( const heartItem of hearts){
    heartItem.addEventListener("click",function(){
        count++
        countHeart(count)
    })
    
 }
  

function countHeart(count){
    const heart=document.getElementById("love")
    heart.innerText=count
}