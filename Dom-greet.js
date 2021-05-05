//get a reference to the enter your name
var nameSet = document.querySelector(".greetingWithSetting");
// get refences to all the settings fields
var greetingElem = document.querySelector(".greeting")
var resetBtnElem = document.querySelector(".resetBtn")
var counterElem = document.querySelector(".counter")
//get a reference to the greet me button
var AddBtneElem = document.querySelector(".Addbutton")

var settingInstance = Greeting();
// console.log(settingInstance);
//add an event listener for when the  button is pressed
AddBtneElem.addEventListener('click',function(){
    // settingInstance.greet();
    // settingInstance.gsettingInstance.greet(clickInBtn.value, nameSet.value)
// etName();
    // settingInstance.theName();

    var clickInBtn = document.querySelector("input[name='language']:checked");
    console.log(clickInBtn)
    settingInstance.theName(nameSet.value);

    if (clickInBtn){
console.log(settingInstance.greet(clickInBtn.value, nameSet.value)
)
    greetingElem.innerHTML = settingInstance.greet(clickInBtn.value, nameSet.value)
    
    }

    counterElem.innerHTML = settingInstance.greetCounter();
    console.log(settingInstance.greetCounter())

});

resetBtnElem.addEventListener('click', function(){

})


      

