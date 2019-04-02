// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Increase your pet's age every x minutes
    // 1 mins
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
    // Hunger every 1 mins
    // sleepiness every 1 mins
    // bored every 1 min
// Your pet should die if Hunger, Boredom, or Sleepiness hits 10.
class TomagotchiPet {
    constructor(name){
        this.name = name;
        this.hunger = 1;
        this.boredom = 1;
        this.sleepiness = 1;
        this.age = 0;
        this.hungerInterval = 0;
        this.boredInterval = 0;
        this.sleepInterval = 0;
        this.lightsOn = true;
    }
    getHungry(){
        this.hungerInterval = setInterval(()=>{
            console.log('add hunger');
            this.hunger += 1;
            $('h4').eq(0).text(`hunger: ${this.hunger}`);
            if(this.hunger === 10){
                clearInterval(this.hungerInterval);
            }       
        }, 2000);

    }
    eat(){
        if(this.hunger < 5){
            console.log('not hungry')
            $('#comment').text(`${this.name} says: i'm not Hungry...`)
        } else {
            this.hunger -= 4
            $('#comment').text(`${this.name} says: nom..nom..nom`)
        }
        $('h4').eq(0).text(`hunger: ${this.hunger}`);
    }
    
    getBored(){
        this.boredInterval = setInterval(()=>{
            console.log('add boredom');
            this.boredom += 1;
            $('h4').eq(1).text(`boredom: ${this.boredom}`);
            if(this.boredom === 10){
                clearInterval(this.boredInterval);
            }   
        }, 2000);
    }
    play(){
        if(this.boredom < 4){
            $('#comment').text(`${this.name} says: no, i don't want to.`)
        } else {
            this.boredom -= 3;
            $('#comment').text(`${this.name} says: YAYYYY!!!`)
        }
        $('h4').eq(1).text(`boredom: ${this.boredom}`);
    }
    getSleepy(){
        this.sleepInterval = setInterval(()=>{
            console.log('add sleepiness');
            this.sleepiness += 1;
            $('h4').eq(2).text(`sleepiness: ${this.sleepiness}`);
            if(this.sleepiness === 10){
                clearInterval(this.sleepInterval);
            }   
        }, 2000);
    }
    lights(){
        if(this.lightsOn){
            if(this.sleepiness < 6){
                $('#comment').text(`${this.name} says: nooooo, i'm not sleepy.`);
            } else {
                this.sleepiness = 1;
                clearInterval(this.hungerInterval);
                clearInterval(this.boredInterval);
                clearInterval(this.sleepInterval);
                $('#comment').text(`${this.name} says: ..zzzZZ..`);    
                $('h4').eq(2).text(`sleepiness: ${this.sleepiness}`);
                $('#sleep').text('turn lights on');
                this.lightsOn = false;
                $('#feed').css('visibility', 'hidden');
                $('#play').css('visibility', 'hidden');
                  // change pick to sleeping ryan
            }
        } else if(!this.lightsOn){
            // change to awake ryan
            $('#feed').css('visibility', 'visible');
            $('#play').css('visibility', 'visible');
            this.getSleepy();
            this.getBored();
            this.getHungry();
            $('#sleep').text('turn lights off');
            $('#comment').text(`${this.name} says: good morning!`);
            this.lightsOn = true;    
        }

    }
    age(){
        // this.age += 1 every 2 mins
        // alert user that the tomagochi aged
        setInterval(()=>{
            console.log('a little older');
            this.age += 1;
        }, 2000);
    }
    died(){
        //if statements(hunger === 10 || boredom === 10 || sleepiness === 10) to show the following:
        //tomagochi died (visual)
        //alert user by inputing a message in the body
        setInterval(()=>{
            console.log('did it die?');
            if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10){
                console.log('toma died')
                // message (tomagochi name) has passed away
                // RIP image
                // blur background
                // return to start page
            }
        }, 1000);
    }
}