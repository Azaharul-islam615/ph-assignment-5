
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

// call button part

 const callBtns=document.querySelectorAll(".call-btn")
 for(let callBtn of callBtns ){
    callBtn.addEventListener("click",function(){
        const numberOfCoin=document.getElementById("coin")
        
        let convertCoin=Number(numberOfCoin.innerText)
        console.log(convertCoin)
        const title=callBtn.parentNode.parentNode.children[1].innerText
        const hotLine=callBtn.parentNode.parentNode.children[3].innerText
        if(convertCoin>0){
             alert(`Calling ${title} ${hotLine}....`)
             convertCoin=convertCoin-20
             numberOfCoin.innerText=convertCoin

        }
        else{
            alert("insufficient coin")
        }
        addElement(title,hotLine)
            
 }) }

