
// heart part

let count=0
 const hearts =document.querySelectorAll(".heard")
 for( const heartItem of hearts){
    heartItem.addEventListener("click",function(){
        count++
        countHeart(count)
        heartItem.style.color="red"
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
              addElement(title,hotLine)

        }
        else{
            alert("insufficient coin")
        }
       
            
 }) }
//  Add item in the call history 
function addElement(title,hotLine){
    const now = new Date();
    const time = now.toLocaleTimeString();
    const aside=document.getElementById("history")

     const divParent=document.createElement("div")
     divParent.innerHTML=` 
    <div class="flex justify-between items-center pt-4 pb-4 pl-3 pr-3 bg-[#FAFAFA] rounded-lg">
                <div>
                    <h1 class="font-bold text-[14px] ">${title}</h1>
                    <p class="text-[#5C5C5C]">${hotLine}</p>
                </div>
                <p class="text-[12px] font-semibold">${time}</p>
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

const copyCounts=document.querySelectorAll(".copyBtn")
for(const copyCount of copyCounts){
   copyCount.addEventListener("click",function(){
    const title=copyCount.parentNode.parentNode.children[3].innerText
     count++
    countcopies(count)
    alert(`Copied number ${title}`)
    const inputTag=document.createElement("input")
    document.body.appendChild(inputTag)
    inputTag.value=title
    inputTag.select()
    document.execCommand('copy')
    document.body.removeChild(inputTag)
   
   })
}
function countcopies(count){
     let Counter=document.getElementById("count-copy")
     
     Counter.innerText=count
     
     
}
