console.log("JS linked")
// Instatiate your Tomagotchi
// Add the ability to name your pet.

const initiateSetup = ()=>{
    setup.start = true;
    setup.tomagochi = new TomagotchiPet($('#toma-name').val());
    console.log('setup initiated')
    setup.tomagochi.getHungry();
    setup.tomagochi.getBored();
    setup.tomagochi.getSleepy();
    setup.tomagochi.getOlder();
    setup.tomagochi.checkIfAlive();
}

const setup = {
    start: false,
    initiate: initiateSetup,
    tomagochi: {},
}

$('form').on('submit', (e)=>{
    e.preventDefault();
    console.log('Name submitted!');
    const valueOfInput = $('#toma-name').val();

    $('h2').text(`Hi my name is ${valueOfInput}!`);
    $('form').css('visibility', 'hidden');
    // $('#parent').css('visibility', 'visible');
    $('.parent').attr('class', 'visible');

    initiateSetup();
    $('h4').eq(0).text(`hunger: ${setup.tomagochi.hunger}`);
    $('h4').eq(1).text(`boredom: ${setup.tomagochi.boredom}`);
    $('h4').eq(2).text(`sleepiness: ${setup.tomagochi.sleepiness}`);
    $('#age').text(`age: ${setup.tomagochi.age}`);

    $('#toma-name').val("");
})

$('#feed').on('click',()=>{
    setup.tomagochi.eat();
})

$('#sleep').on('click',()=>{
    setup.tomagochi.lights();
})

$('#play').on('click',()=>{
    setup.tomagochi.play();    
})
    // Input for name of Tomagochi
    // Start raising your Tomagotchi button
        // callback function to switch to screen with tomagochi
        //start functions:
            //aging
            //growing hunger
            //getting bored
            //getting sleepy

// Increase your pet's age every x minutes
    //function every 3 mins
    
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
    // Hunger every 2 mins
    // sleepiness every 5 mins
    // bored every 1 min

// Your pet should die if Hunger, Boredom, or Sleepiness hits 10.
    //
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.










// ### Extras
// * Have your tomagotchi give birth to baby tomagotchi...
// * ...with special powers (extend the class)!
// * Add an `excercise()` method to your tomagotchi, that affects certain properties
// * Add anything you can think of... use your imagination!