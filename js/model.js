"use strict";

class Translate{

	constructor(){
		this.textIn;
		this.textOut;
		this.textError = false;
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
			let newArr = arr.map(element => {
				return this.parsingRules(rule, element);
			});
			this.textOut = newArr.join(" ");
		};
	};

	parsingRules(rule, text ){
		let arrKeysObject = Object.keys(rule);
		arrKeysObject.forEach(element => {
			if(typeof rule[element] === "object"){

				let arrKeysObjectRule = Object.keys(rule[element]);
				let reg;
				arrKeysObjectRule.forEach(elem => {
					if(typeof rule[element][elem] === "object" && !(rule[element][elem] instanceof RegExp) ){
						reg = rule[element][elem].reg;
						if(reg.test(text)){
							text = text.replace(rule[element][elem].reg, rule[element][elem].translateRule);
						}else{
							return;
						};
					}else{
						reg = rule[element].reg;
						if(reg.test(text)){
							text = text.replace(rule[element].reg, rule[element].translateRule);
						}else{
							return;
						};
					};
				});
			}
		});
		return text;
	};

};