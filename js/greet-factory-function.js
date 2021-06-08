function greet(existingNames) {

    let namesGreeted = existingNames || {}
 



    
    function bulisa(checked,greetNames) {
        let  greetName = greetNames.charAt(0).toUpperCase() + greetNames.slice(1).toLowerCase();;
  
          if (checked === "IsiXhosa") {
              return "Molo, " + greetName;
          }
          else if (checked === "english") {
              return "Hello, " + greetName
          }
          else if (checked === "portuguese") {
              return "Olá , " + greetName
          }
          
      }

  
      function setNames(name) {
        let   name_ = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
 
         if (namesGreeted[name_] === undefined) {
             namesGreeted[name_] = 0;
 
         }
     }


    function antiEmpty(par) {
        if (par === "") {
            return "Please enter your name!!"
        }
        

    }


    function antiDigit(par) {
        let para = /[0-9]/;
        if (par.match(para)) {            
            return par;
        }

    }

    function getGreetCtr() {
       
        return Object.keys(namesGreeted).length
    }

    function clearError(par){
        return ""
    }

    function greeted() {
        
        return namesGreeted
    }

   
    function getGreetKeys(){
        return Object.keys(namesGreeted)
    }
    function showAllGreets(){
      return  (getGreetCtr() > 0) ? "You have greeted: "+Object.keys(namesGreeted):"Please enter a name in the text-box before viewing people greeted and select a language of your choice ";
    }

    
 
    function testChecked(par){
            return  (par === null) ? "Please select a language":undefined;
      }




    return {
       
        setNames,
        bulisa,
        getGreetCtr,
        testChecked,
        greeted,
        antiEmpty,
        clearError,
        antiDigit,
        showAllGreets,
        getGreetKeys,

    }
}