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
        this.ageInterval = 0;
        this.diedInterval = 0;
        this.lightsOn = true;
    }
    getHungry(){
        this.hungerInterval = setInterval(()=>{
            this.hunger += 1;
            $('h4').eq(0).text(`hunger: ${this.hunger}`);
            $('h4').eq(0).css('animation', 'pulseRed 3s ease-in')
            $('h4').eq(0).css('animation', 'none')
            if(this.hunger > 6){
                $('img').attr('src', 'https://i.pinimg.com/originals/02/e6/bb/02e6bbceb1637bdd8dcfeffe294a5bd0.gif')
            }
            if(this.hunger === 11){
                clearInterval(this.hungerInterval);
            }   
        }, 9000);

    }
    eat(){
        if(this.hunger < 5){
            $('#comment').text(`${this.name} says: i'm not Hungry...`)
        } else {
            $('img').attr('src', 'https://pro2-bar-s3-cdn-cf.myportfolio.com/a11b5ee8c6486635374ca2d1ca922d33/8f2faca5-5624-4c6d-aabe-2582ffef3e1e_rw_600.gif?h=809e082e641110103e865cbc7af7403c')
            this.hunger -= 4
            $('#comment').text(`${this.name} says: nom..nom..nom`)
            $('h4').eq(0).text(`hunger: ${this.hunger}`);
            $('h4').eq(0).css('animation', 'pulseGreen 3s ease-in')
        }
    }
    
    getBored(){
        this.boredInterval = setInterval(()=>{
            this.boredom += 1;
            $('h4').eq(1).text(`boredom: ${this.boredom}`);
            $('h4').eq(1).css('animation', 'pulseRed 3s ease-in')
            if(this.boredom > 6){
                $('img').attr('src', "https://media.tenor.com/images/83469e2610ad80929f1a90affbca2843/tenor.gif");
            }
            if(this.boredom === 11){
                clearInterval(this.boredInterval);
            }   
        }, 5000);
    }
    play(){
        if(this.boredom < 5){
            $('#comment').text(`${this.name} says: no, i don't want to.`)
        } else {
            $('img').attr('src', 'https://thumbs.gfycat.com/FatalWeepyAtlanticblackgoby-small.gif')
            this.boredom -= 4;
            $('#comment').text(`${this.name} says: YAYYYY!!!`)
            $('h4').eq(1).text(`boredom: ${this.boredom}`);
            $('h4').eq(1).css('animation', 'pulseGreen 3s ease-in');
        }

    }
    getSleepy(){
        this.sleepInterval = setInterval(()=>{
            this.sleepiness += 1;
            $('h4').eq(2).text(`sleepiness: ${this.sleepiness}`);
            $('h4').eq(2).css('animation', 'pulseRed 3s ease-in');
            if(this.sleepiness === 11){
                clearInterval(this.sleepInterval);
            }   
        }, 12000);
    }
    lights(){
        if(this.lightsOn){
            if(this.sleepiness < 5){
                $('#comment').text(`${this.name} says: nooooo, i'm not sleepy.`);
            } else {
                this.sleepiness = 1;
                $('h4').eq(2).text(`sleepiness: ${this.sleepiness}`);
                $('h4').eq(2).css('animation', 'pulseGreen 3s ease-in');
                $('img').attr('src', 'sleeping.png');
                $('.visible').attr('class', 'overlay');
                clearInterval(this.hungerInterval);
                clearInterval(this.boredInterval);
                clearInterval(this.sleepInterval);
                $('#comment').text(`${this.name} says: ..zzzZZ..`);    
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
            $('.overlay').attr('class', 'visible');
            this.getSleepy();
            this.getBored();
            this.getHungry();
            $('#sleep').text('turn lights off');
            $('#comment').text(`${this.name} says: good morning!`);
            this.lightsOn = true;
            if(this.age >= 6){
                $('img').attr('src', 'https://img.kpopmap.com/2017/11/original.gif');
            } else if(this.age < 6){
                $('img').attr('src', 'https://img.kpopmap.com/2017/09/hoodie-ryan.gif');
            }    
        }
    }
    getOlder(){
        this.ageInterval = setInterval(()=>{
            this.age += 1;
            $('#age').text(`age: ${this.age}`)
            if(this.age > 5){
                $('#age').css('animation', 'pulseBigToSmall 2s ease-in');
                $('img').attr('src', 'https://img.kpopmap.com/2017/11/original.gif');
            } 
            if(this.age === 10){
                clearInterval(this.ageInterval);
            }
        }, 15000);
    }
    checkIfAlive(){
        //if statements(hunger === 10 || boredom === 10 || sleepiness === 10) to show the following:
        //tomagochi died (visual)
        //alert user by inputing a message in the body
        this.diedInterval = setInterval(()=>{
            if(this.hunger === 9 || this.boredom === 9 || this.sleepiness === 9){
                $('.visible').css('animation', 'backgroundRed 3s ease-in');
                $('.visible').css('background-color', '#ff4949');
            } else if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10){
                $('.visible').css('animation', 'whiteout 5s ease-in');
            } else if(this.hunger === 11 || this.boredom === 11 || this.sleepiness === 11){
                console.log('tomagochi died')
                clearInterval(this.hungerInterval);
                clearInterval(this.boredInterval);
                clearInterval(this.sleepInterval);
                clearInterval(this.ageInterval);
                $('.ripStart').attr('class', "rip")
                $('.rip').css('animation', 'fadein 3s ease-out')
                $('.visible').css('visibility', 'hidden')
                $('h1').css('visibility', 'hidden')
                $('#feed').css('visibility', 'hidden');
                $('#play').css('visibility', 'hidden');
                // RIP image
                $('.rip').append("<img class='last-img' src='http://www.bergenit.net/wp-content/uploads/RIP-tombstone.jpg' width='150' height='auto'>")
                // message (tomagochi name) has passed away
                $('.rip').append(`<h2>${this.name} has passed away</h2>`)
                $('.rip').append("<form class='refresh'></form>")
                $('.refresh').append("<button type='submit'>Try Again?</button>")
                // blur background
                // return to start page
                clearInterval(this.diedInterval);
            }
        }, 1000);
    }
}