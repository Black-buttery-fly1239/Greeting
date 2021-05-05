function Greeting(){

    var nameList = []

    function theName(name){
        if (!nameList.includes(name)) {
            nameList.push(name)        
        }
    
    }
//you need to use the .includes function to check if the name already exist in the list

    // function setName(name) {
    //     nameList = name;
    // }

    function getName() {
        return nameList;
    }

    function greet(language,name){
        var greeting;
      if(language === "English"){
          greeting = "Hello "+ name;
      }
      else if(language === "Afrikaans"){
          greeting = "Groet "+ name;
      }
      else if(language === "Isixhosa"){
          greeting = "Molo  "+ name;
      }
     return greeting;
    }


function greetCounter(){
return nameList.length;
}

return {
    // setName,
    getName,
    theName,
    greet,
    greetCounter,
}
}