

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings={
  databaseURL: "https://endorsements-e2ca6-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsInDB = ref(database, "ListOfEndorsements") 

const textInput = document.getElementById("text-input");
const btnPublish = document.getElementById("btn-publish"); 
const container = document.getElementById("container")

const toInput = document.getElementById("to-input")
const fromInput = document.getElementById("from-input")

btnPublish.addEventListener("click", function(){
    let textInputValue = textInput.value
    
    push(endorsementsInDB, textInputValue)
     console.log(textInputValue)
     
     clearTextInputValue()
    

})


onValue(endorsementsInDB , function(snapshot) {
    let itemsArray = Object.values(snapshot.val())
    // Challenge: Use Object.values() to convert snapshot.val() from an Object to an Array. Create a variable for this.
    
    clearContainerHTML()
   
    
      for (let i = 0; i < itemsArray.length; i++) {
        // Challenge: Use the appendItemToShoppingListEl(itemValue) function inside of the for loop to append item to the shopping list element for each iteration.
        
        appendItemToEndorsementsListEl(itemsArray[i])
    }
    
    console.log(itemsArray)
})


  function clearTextInputValue(){
       textInput.value = ""
  }
  
   function clearContainerHTML(){
    container.innerHTML = ""  
   }
  
  
function appendItemToEndorsementsListEl(item) {
    container.innerHTML += `<p id="p-content">${item}</p>`
}

