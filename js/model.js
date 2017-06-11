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

	// translate(rule){
	// 	if(this.textIn === "" || this.textIn === undefined  || this.textIn === " "){
	// 		this.textError = true;
	// 	}else{
	// 		this.textError = false;
	// 		let arr = this.textIn.split(" ");
	// 		let arrKeysObject = Object.keys(this.ruleCyrilyc);
	// 		let newArr = arr.map(element => {
	// 			arrKeysObject.forEach(el => {
	// 				element = element.replace(this.ruleCyrilyc[el], rule[el]);
	// 			});
	// 			return element;
	// 		});
	// 		this.textOut = newArr.join(" ");
	// 	};
	// };

	translate(rule){
		if(this.textIn === "" || this.textIn === undefined  || this.textIn === " "){
			this.textError = true;
		}else{
			this.textError = false;
			let arr = this.textIn.split(" ");
			let newArr = arr.map(element => {
				//console.log(this);
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
				arrKeysObjectRule.forEach(elem => {

					if(typeof rule[element][elem] === "object" ){
						let arrKeysObjectRuleIn = Object.keys(rule[element][elem]);
						arrKeysObjectRuleIn.forEach(el =>{
							text = text.replace(rule[element][elem].reg, rule[element][elem].translateRule);
						});
					}else{
						text = text.replace(rule[element].reg, rule[element].translateRule);
					};

				});
				
			}
		});
		return text;
	};

};