class Player{
 constructor(){
this.rank = 0;
this.index = 0;
this.pname = null;
this.distance=0;
 }
 update(){
     var pIndex = "players/player" + this.index;
    database.ref(pIndex).set({
    name: this.pname,
    distance: this.distance,
    rank: this.rank
    }) 
 }

 updateCount(count){
    database.ref('/').update({
    playerCount: count
    })
}
 
 getCount(){
     var pref = database.ref("playerCount");
     pref.on("value", function(data){
     playerCount=data.val();
     });
 }
 static getPlayerInfo(){
 var playerRef = database.ref("players");
 playerRef.on("value", (data) => {
 allPlayers=data.val();  
 });
 }

 static updateFinishedPlayer(){
     database.ref('/').update({
         finishedPlayer:finishedPlayer+1
     })
     this.rank+=1;
 }

 getFinishedPlayer(){
     database.ref("finishedPlayer").on("value", (data) =>{
         finishedPlayer=data.val()
     })
 }
}