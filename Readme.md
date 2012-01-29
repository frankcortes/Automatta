
# Automatta

 > A powerful and lightweight library to create, execute and monitor automata in NodeJS and Javascript.

## Installation

In nodeJS:

    npm install automatta

In javascript:

Load the file lib/automatta/automatta.js usually:

    <script type='text/javascript' src='automatta/lib/auttomatta/automatta/automatta.js'></script>
 
	
## Quick Start
	
Create an Automata is very simple and easy. We have to define states (name, definition and condicions to arrive to other states), and  init & final states. A dump example (in nodeJS):
   
    var myAutomaton = require('automatta').createAutomata();
    myAutomaton.addStatus("init",function(){console.log("init!" + x);},function(){if(x%2 == 0) return "middle";});
    myAutomaton.addStatus("middle",function(){console.log("middle!" + x);},function(){if (x == 3) {return "init"; } else if(x > 4) { return "final"; }});
    myAutomaton.addStatus("final",function(){console.log("final!" + x);},function(){});
    myAutomaton.setInitialStatus("init");
    myAutomaton.setFinalStatus("final");
	
This Automata is defined with the next diagram:

    +------------+              +-------------+            +------------+
    |            |   if(x%2==0) |             | if(x>4)    |            |
    |            |              |             |            |            |
    | Init       |+------------>| Middle      |+---------->| Final      |
    |            |              |             |            |            |
    |            |              |             |            |            |
    +------------+              +-------------+            +------------+
           ^                            +
           |                            |
           |                            |
           |      if(x==3)              |
           +----------------------------+
	
So, if we execute this:


    for(var x = 0; x < 6; x++){
		myAutomaton.exec();
    }
    console.log("trace of this automata: " + myAutomaton.getTrace());

The output will be:
	
	middle!0
    middle!1
    middle!2
    init!3
    middle!4
    final!5
    trace of this automata: [ 'init', 'middle', 'middle', 'middle', 'init', 'middle', 'final' ]
	

## License 

(The MIT License)

Copyright (c) 2012 Francisco Cort&eacute;s &lt;franklyn.bdn@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.