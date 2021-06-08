function greet(existingNames) {

    let namesGreeted = existingNames || {}
 



    function bulisa(checked,grtName_) {
      let  grtName = grtName_.charAt(0).toUpperCase() + grtName_.slice(1);

        if (checked === "IsiXhosa") {
            return "Molo, " + grtName;
        }
        else if (checked === "english") {
            return "Hello, " + grtName
        }
        else if (checked === "portuguese") {
            return "Olá , " + grtName
        }
        
    }

    function setNames(name) {
        

        if (namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;

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



    function greeted() {
        
        return namesGreeted
    }

   
    function getGreetKeys(){
        return Object.keys(namesGreeted)
    }
    function showAllGreets(){
      return  (getGreetCtr() > 0) ? "You have greeted: "+Object.keys(namesGreeted):"Please enter a name in the text field before viewing people greeted ";
    }
 




    return {
        setNames,
        bulisa,
        getGreetCtr,
        greeted,
        antiEmpty,
        antiDigit,
        showAllGreets,
        getGreetKeys

    }
}