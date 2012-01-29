var myAutomaton = require('../../lib/automatta/automatta').createAutomata();


myAutomaton.addStatus("init",function(){console.log("init!" + x);},function(){if(x%2 == 0) return "final";});
myAutomaton.addStatus("final",function(){console.log("final!" + x);},function(){ if(x%2 == 1) return "init";});
myAutomaton.setInitialStatus("init");
myAutomaton.setFinalStatus("final");
for(var x = 0; x <= 6; x++){
	myAutomaton.exec();
}
console.log("A automata to say if a number is even");
console.log(myAutomaton.getTrace());