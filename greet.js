function Greeting(existingNames) {

    var nameList = existingNames || []

    function theName(name) {
       name = name.toLowerCase()
       name = name.toUpperCase()
        if (name) {
            if (!nameList.includes(name)) {
                nameList.push(name)
            }
        }

    }
    //you need to use the .includes function to check if the name already exist in the list

    

    function getName() {
        console.log(nameList)
        return nameList;
    }

    function greet(language, name) {
        var greeting;
        if(language && name){
        if (language === "English") {
            greeting = "Hello " + name;
        }
        else if (language === "Afrikaans") {
            greeting = "Groet " + name;
        }
        else if (language === "Isixhosa") {
            greeting = "Molo  " + name;
        }
       

        return greeting;
    }
    }
    
    
     
    
    function greetCounter() {
        {
            return nameList.length;
        }
    }

    return {
        getName,
        theName,
        greet,
        greetCounter,
        
        
    }
}