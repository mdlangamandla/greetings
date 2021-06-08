const nameFld = document.querySelector(".faka_gama");
const counter_div = document.querySelector(".counter_div");
const greetbtn = document.querySelector(".greetBtn");
const output_div = document.querySelector(".output_div");
const clearBtn = document.querySelector(".resetBtn");
const lstBtn = document.querySelector(".listBtn");
const error_mssg = document.querySelector(".error_mssg");


let namesGreeted;


let rdioVal = ''
if (localStorage["names"]) {
    namesGreeted = JSON.parse(localStorage["names"])

}
let amagama = greet(namesGreeted);


counter_div.innerHTML = amagama.getGreetCtr()

greetbtn.addEventListener("click", function () {


//Timer for error messages//    
    setTimeout(() => {
        error_mssg.innerHTML = amagama.clearError( error_mssg.innerHTML)        
    }, 4000); 

     ( error_mssg) =>{ error_mssg.classList.toggle("visibility")};

//Timer for output messages//
     setTimeout(() => {
        output_div.innerHTML = amagama.clearError( output_div.innerHTML)        
    }, 4000); 

     ( output_div) =>{ output_div.classList.toggle("visibility")}; 


     rdioVal = document.querySelector(".rdio:checked");


    if (!amagama.antiDigit(nameFld.value)) {


        if (nameFld.value === "") {
            error_mssg.innerHTML = "Please enter your name in the text-box below."
        } 

        else if(rdioVal === null){
            error_mssg.innerHTML = amagama.testChecked(rdioVal);
        }else {
            amagama.setNames(nameFld.value)
            output_div.innerHTML = amagama.bulisa(rdioVal.value, nameFld.value)           
        }

    } else {
        error_mssg.innerHTML = "Please enter a name that only contains letters not numbers."
     }
 
     


    localStorage.setItem("names", JSON.stringify(amagama.greeted()));

    counter_div.innerHTML = amagama.getGreetCtr()
    nameFld.value = ''
    unchecked()

})

function unchecked()
{
 document.getElementById('awe1').checked = false
 document.getElementById('awe2').checked = false
 document.getElementById('awe3').checked = false

}

clearBtn.addEventListener("click", function () {


    localStorage.clear()


    location.reload()
   

})



lstBtn.addEventListener("click", function () {
   
    if(amagama.getGreetCtr() > 0){
    output_div.innerHTML = amagama.showAllGreets();
    }
    else if (amagama.getGreetCtr() <= 0){
        error_mssg.innerHTML = amagama.showAllGreets();
    }
////Timeout error messages///
    setTimeout(() => {
        error_mssg.innerHTML = amagama.clearError(error_mssg.innerHTML)
    }, 4000);
})
  