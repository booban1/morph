const moonPath = 'M50.000,-0.000 C50.614,-0.000 26.000,21.386 26.000,49.000 C26.000,76.614 49.948,100.000 50.000,100.000 C22.386,100.000 -0.000,77.614 -0.000,50.000 C-0.000,22.386 22.386,-0.000 50.000,-0.000 z   ';
const sunPath = 'M50,0A50,50,0,1,1,0,50,50,50,0,0,1,50,0Z';


const darkMode = document.querySelector("#darkMode"); 
let toggle = false;

// enabling click evnt on the sun

darkMode.addEventListener('click', () => { 
    //using the anime.js lib
    //setting up the timeline

    const timeline = anime.timeline({
         //the  objects that we need
        duration: 750,
        easing: "easeOutExpo"
    });

    //adding animations t   o the timeline

    timeline.add({
        targets: ".sun",
        d: [{value: toggle ? sunPath : moonPath}]
    }).add({
        targets: "#darkMode",
        rotate: 320
         }, "-= 350" )
     .add({
            targets: "section",
            backgroundColor: toggle? 'rgb(255, 255, 255' : 'rgb(22,22,22)',
            color: toggle?'rgb(22,22,22)' : 'rgb(255,255,255)'
        }, "-= 700"  );

    //toggling backgroung after each click

    if(!toggle){
        toggle= true
        expresso.innerHTML  = "It is Dark"
    }
    else{
        toggle= false
        expresso.innerHTML  = "It is light"
    }

});