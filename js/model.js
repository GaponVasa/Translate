"use strict";

class Translate{

	constructor(rule){
		this.textIn;
		this.textOut;
		this.textError = false;
		this.ruleCyrilyc = rule;
	};

	textInOut(text){
		if(text){
			this.textIn = text;
		}else{
			return this.textOut;
		};
	};

	textErrorOut(){
		return this.textError;
	}

	translate(rule){
		if(this.textIn === "" || this.textIn === undefined  || this.textIn === " "){
			this.textError = true;
		}else{
			this.textError = false;
			let arr = this.textIn.split(" ");
			let arrKeysObject = Object.keys(this.ruleCyrilyc);
			let newArr = arr.map(element => {
				arrKeysObject.forEach(el => {
					element = element.replace(this.ruleCyrilyc[el], rule[el]);
				});
				return element;
			});
			this.textOut = newArr.join(" ");
		};
	};
};