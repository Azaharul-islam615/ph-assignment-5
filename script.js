
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
//  Add item in the call history 
function addElement(title,hotLine){
    const aside=document.getElementById("history")

     const divParent=document.createElement("div")
     divParent.innerHTML=` 
    <div class="flex justify-between items-center pt-4 pb-4 pl-4 pr-4 bg-[#FAFAFA] rounded-lg">
                <div>
                    <h1 class="font-bold">${title}</h1>
                    <p class="text-[#5C5C5C]">${hotLine}</p>
                </div>
                <p>11:36:58 AM</p>
            </div>`
            aside.appendChild(divParent)
            divParent.classList.add("asideproperty")
}

// Celear button
document.getElementById("clearAll").addEventListener("click",function(){
  const asides=document.querySelectorAll(".asideproperty")
   for(const aside of asides){
    aside.remove()
   }
})

// copy button

function countNumberOfcopies(count){
     const copyCounter=document.getElementById("count-copy").innerText
     copyCounter=count
}
