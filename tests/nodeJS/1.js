var myAutomaton = require('../automatta').createAutomata();


myAutomaton.addStatus("init",function(){console.log("init!" + x);},function(){if(x%2 == 0) return "middle";});
myAutomaton.addStatus("middle",function(){console.log("middle!" + x);},function(){if (x == 3) {return "init"; } else if(x > 4) { return "final"; }});
myAutomaton.addStatus("final",function(){console.log("final!" + x);},function(){});
myAutomaton.setInitialStatus("init");
myAutomaton.setFinalStatus("final");
for(var x = 0; x < 6; x++){
	myAutomaton.exec();
}
console.log(myAutomaton.getTrace());