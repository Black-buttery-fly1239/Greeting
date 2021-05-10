//get a reference to the enter your name
var nameSet = document.querySelector(".greetingWithSetting");
// get refences to all the settings fields
var greetingElem = document.querySelector(".greeting")
var resetBtnElem = document.querySelector(".resetBtn")
var counterElem = document.querySelector(".counter")
var emptyElem = document.querySelector(".empty")
//get a reference to the greet me button
var AddBtneElem = document.querySelector(".Addbutton")
var clickInBtn = document.querySelector(".theLanguage");

var existingNames;

if(localStorage['name']){
    existingNames = JSON.parse(localStorage.getItem('name'));

}

var settingInstance = Greeting(existingNames);
// console.log(settingInstance);
//add an event listener for when the  button is pressed
AddBtneElem.addEventListener('click', function () {
    // settingInstance.greet();
    // settingInstance.gsettingInstance.greet(clickInBtn.value, nameSet.value)
    // etName();
    // settingInstance.theName();
// if(!clickInBtn.value){
//     emptyElem.innerHTML = settingInstance.emptySpace(clickInBtn.value, nameSet.value)

// }
var clickInBtn = document.querySelector("input[name='language']:checked");


    if (nameSet.value && clickInBtn.value) {
        if (clickInBtn) {
            settingInstance.theName(nameSet.value);
            greetingElem.innerHTML = settingInstance.greet(clickInBtn.value, nameSet.value)
            console.log(Object.keys(settingInstance.getName()))
            localStorage.setItem('name', JSON.stringify(settingInstance.getName()))
            counterElem.innerHTML = settingInstance.greetCounter();

            // emptyElem.innerHTML = settingInstance.emptySpace()
        }

    }
    if (nameSet.value === '' && !clickInBtn.value) {
        emptyElem.innerHTML = "please enter name and select lang"
    }
    else if (nameSet.value ==="") {
        emptyElem.innerHTML = "Please enter name"
    }
    else if(!clickInBtn.value){
        emptyElem.innerHTML ="Please select lang"
    }
});

counterElem.innerHTML = settingInstance.greetCounter();

resetBtnElem.addEventListener('click', function () {

})


