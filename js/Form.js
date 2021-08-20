class Form{
    constructor(){
        this.title  = createElement("h1");
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h2");
        this.reset = createButton("reset");

    }
    display(){
        this.title.html("Car racing game");
        this.title.position(displayWidth/2, 100);
        this.title.style("color", "orange");
        this.title.style("font-size", "40px");
        //this.title.style("font-style", "times new roman");
        this.input.position(displayWidth/2, 200);
        this.input.style("width", "200px");
        this.input.style("height", "20px");
        this.button.position(displayWidth/2, 230);
        this.button.style("background", "red");
        this.reset.position(displayWidth-100, 50);
        this.reset.style("background", "red");
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                gameState:0,
                playerCount:0,
                players:null,
                finishedPlayer: 0
            })
            location.reload();
        })

        this.button.mousePressed(()=>{
            start();   
        })
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }

    start(){
        this.input.hide();
        this.button.hide();
        player.pname = this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.pname);
        this.greeting.position(displayWidth/2-40, displayHeight/2);
        this.greeting.style("font-size", "70px");
        this.greeting.style("color", "white");
    }
}