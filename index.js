
//let count = 5
//count = count + 1
//console.log(count)
//intialize the count as 0
// listen for clicks on the increment buttom 
//increment the count variable when the button is clicked 
//change the count-el in the HTML to reflect the new count  
 let countEl = document.getElementById("count-el")



 let count = 0
 
function increment() {
   count += 1
   countEl.textContent = count  
}

function save(){
 let countStr = count + " - "
saveEl.textContent += countStr
 countEl.textContent = 0 
}



