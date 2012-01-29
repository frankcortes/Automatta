var createAutomata = function(){
	var automaton = {
			status : [],
			currentStatus : undefined,
			finalStatus : [],
			trace : [],
			/*Return a string with current status*/
			getCurrentStatus : function(){
				if (currentStatus == undefined) return false;
				return status[currentStatus].name;
			},
			/*Add a new Status for own automaton*/
			addStatus : function(name,func,conditions){
				this.status[name] = {'name':name,'func':func,'conditions':conditions};
			},
			/*Remove a Status*/
			removeStatus : function(name){
				this.status[name] = undefined;
				this.finalStatus[name] = undefined;
				if(this.currentStatus == name){
					this.currentStatus = undefined;
				}
			},
			/*Set initial Status*/
			setInitialStatus : function(name){
				if(this.status[name] != undefined){
					this.currentStatus = name;
					return true;
				}
				else return false;
			},
			/*Set Final Status*/
			setFinalStatus : function(name){
				if(this.status[name] != undefined){
					this.finalStatus[name] = true;
					return true;
				}
				else return false;
			},
			/*Remove Final Status*/
			removeFinalStatus : function(name){
				if(this.finalStatus[name] != undefined){
					this.finalStatus[name] = undefined;
				}
				else return false;
			},
			/*Falta removeStatus,setInitStatus,setFinalStatus,removeFinalStatus*/
			/*exec the current Status*/
			exec : function(){
				var newCurrentStatus = this.status[this.currentStatus].conditions();
				this.trace.push(this.currentStatus);
				if(this.status[newCurrentStatus] != undefined){
					this.currentStatus = newCurrentStatus;
				}
				return this.status[this.currentStatus].func();
				//if newCurrentStatus is undefined, The automaton will continue in the same status.
			},
			/*Return true if the automaton is finished*/
			isFinished : function(){
				return (this.finalStatus[this.currentStatus] === true);
			},
			/*Return the trace for this automaton*/
			getTrace : function(){
				var trace = this.trace;
				trace.push(this.currentStatus);
				return trace;
			}
		};
		return automaton;
	};

if(typeof exports != "undefined"){
	exports.createAutomata = createAutomata;
}