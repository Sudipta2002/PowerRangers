var readlineSync = require('readline-sync');
var score=0;
var level=0;

var userName=readlineSync.question("What is your name ? ");

console.log("Welcome Mr. "+userName+" to POWER RANGER SPD quiz");
console.log("\n Let's see how well do you know Power Rangers :) ");
var question=[{quest:"What is the name of Red Ranger ?\n 1.JACK\n2.ZEE\n3.BRIDGE",ans:"JACK"},{quest:" What is the name of the commander of SPD ?\n1.JACK\n2.DOGGIE\n3.SYD ",ans:"DOGGIE"},{quest:"Who's power is the most among this?\n1.JACK\n2.DOGGIE\n3.SKY ",ans:"DOGGIE"},{quest:" Who is the team leader among the cadets of Space Petrol Delta(SPD) ?\n1.JACK\n2.DOGGIE\n3.SKY ",ans:"DOGGIE"}];

function guess(question,ans){
  var userAns=readlineSync.question(question);
  if(userAns.toUpperCase()==ans){
    score=score+1;
    console.log("Right ans !! ");
  }else{
    score=score-1;
    console.log("Wrong ans !! ");
  }
  if(score<0){
    score=0;
  }
  console.log("Current score "+score);
  console.log("------------------------");
}

for(var i=0;i<question.length;i++){
  guess(question[i].quest,question[i].ans);
}

if(score>2){
  level=level+2;
}else{
  level=level+1;
}
console.log("Your score is : "+score+"\n You have reached level "+level);
