//get a reference to the enter your name
var nameSet = document.querySelector(".greetingWithSetting");
// get refences to all the settings fields
var greetingElem = document.querySelector(".greeting")
var resetBtnElem = document.querySelector(".resetBtn")
var counterElem = document.querySelector(".counter")
var emptyElem = document.querySelector(".empty")
//get a reference to the greet me button
var AddBtneElem = document.querySelector(".Addbutton")


var existingNames;

if (localStorage['name']) {
    existingNames = JSON.parse(localStorage.getItem('name'));

}

var settingInstance = Greeting(existingNames);

AddBtneElem.addEventListener('click', function () {
 

    var tickTockBtn = document.querySelector("input[name='language']:checked");

    if (nameSet.value && tickTockBtn) {

        //alert(tickTockBtn.value)
        if (tickTockBtn) {
            settingInstance.theName(nameSet.value);
            greetingElem.innerHTML = settingInstance.greet(tickTockBtn.value, nameSet.value)
            console.log(Object.keys(settingInstance.getName()))
            localStorage.setItem('name', JSON.stringify(settingInstance.getName()))
            counterElem.innerHTML = settingInstance.greetCounter();
            emptyElem.innerHTML = ""
            
        }

    }
      
          
     if (!nameSet.value && tickTockBtn === null) {
        emptyElem.innerHTML = "please enter name and select language"
        setTimeout(function(){
            emptyElem.innerHTML = "";
        }, 2000)
    }
    else if (!nameSet.value) {
        //alert(!tickTockBtn)

        emptyElem.innerHTML = "Please enter name"
        setTimeout(function(){
            emptyElem.innerHTML = "";
        }, 2000)
    }
    else if (tickTockBtn === null) {
        emptyElem.innerHTML = "Please select language"
        setTimeout(function(){
            emptyElem.innerHTML = "";
        }, 2000)
    }
    //alert(!tickTockBtn)
    nameSet.value = "";
    // myVar = setTimeout(function, 1000);
    
});

counterElem.innerHTML = settingInstance.greetCounter();

resetBtnElem.addEventListener('click', function () {
    location.reload()
    localStorage.clear();

});



