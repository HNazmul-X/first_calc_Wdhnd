const valueTaker1 = document.querySelectorAll("#input-from-group #input input" )[0];
const valueTaker2 = document.querySelectorAll("#input-from-group #input input" )[1];
const getResult = document.querySelector("#getResult");
const resultShower = document.querySelector("#input-from-group #input h1");
const plusOparator = document.querySelectorAll("#oparator-btn button")[0];
const minusOparator = document.querySelectorAll("#oparator-btn button")[1];
const timesOparator = document.querySelectorAll("#oparator-btn button")[2];
const dividedOparator = document.querySelectorAll("#oparator-btn button")[3];
plusOparator.addEventListener("click", function(){
    
    let result = parseFloat(valueTaker1.value) + parseFloat(valueTaker2.value);
    return resultShower.innerHTML=result;
    
});
minusOparator.addEventListener("click", function(){
    let result = parseFloat(valueTaker1.value) - parseFloat(valueTaker2.value);
    return resultShower.innerHTML=result;
});
timesOparator.addEventListener("click", function(){
    let result = parseFloat(valueTaker1.value) * parseFloat(valueTaker2.value);
    return resultShower.innerHTML=result;
});
dividedOparator.addEventListener("click", function(){
    let result = parseFloat(valueTaker1.value) / parseFloat(valueTaker2.value);
    return resultShower.innerHTML=result;
});

for(let x = 0; x<4;x++){
    let warning = document.querySelectorAll("#oparator-btn button")[x];
    warning.addEventListener("click", function(){
        if(valueTaker1.value === "" || valueTaker2.value=== ""){
        valueTaker1.classList.add("warning-border")
        valueTaker2.classList.add("warning-border")
        resultShower.classList.add("warning-border")
        return resultShower.innerHTML = "No value"
    }else if(valueTaker1.value !== "" && valueTaker2.value !== ""){
        valueTaker1.classList.remove("warning-border")
        valueTaker2.classList.remove("warning-border")
        resultShower.classList.remove("warning-border")
        
    }
    valueTaker1.value = "";
    valueTaker2.value = "";
    return
    });
}
















// for(let x = 0; x<4; x++){
//     let selectedOparator =  document.querySelectorAll("#oparator-btn button")[x];
//     selectedOparator.addEventListener("click",function(){
//         alert( this.innerHTML)
//         var selectedOparatorText = this.innerHTML;
//         return oparatorSelectedFunction(selectedOparatorText)
//     });
// }


// function oparatorSelectedFunction(selectedOparatorText){
//     switch(selectedOparatorText){
//         case "+":
//             result = parseFloat(valueTaker1.value )+ parseFloat(valueTaker2.value);
//             break;
//         case "-":
//             result = parseFloat(valueTaker1.value )- parseFloat(valueTaker2.value);
//             break;
//         case "x":
//             result = parseFloat(valueTaker1.value )* parseFloat(valueTaker2.value);
//             break;
//         case "/":
//             result = parseFloat(valueTaker1.value )/ parseFloat(valueTaker2.value);
//             break;
//     }

// }
// getResult.addEventListener("click", function(){
//     if(valueTaker1.value === "" || valueTaker2.value=== ""){
//         valueTaker1.classList.add("warning-border")
//         valueTaker2.classList.add("warning-border")
//         resultShower.classList.add("warning-border")
//         return resultShower.innerHTML = "No value"
//     }
//     else if(valueTaker1.value !== "" && valueTaker2.value !== ""){
//         valueTaker1.classList.remove("warning-border")
//         valueTaker2.classList.remove("warning-border")
//         resultShower.classList.remove("warning-border")
//     }
//     let result = parseFloat(valueTaker1.value )+ parseFloat(valueTaker2.value);
//     return resultShower.innerHTML = result;

// });
// console.log(oparatorSelectedFunction())