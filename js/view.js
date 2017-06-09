"use strict";

class Menu{
	constructor(model){
		this._model = model;
		this.sourceElement = document.getElementById("inputKiril");
		this.translateButton = document.getElementById("translate");
		this.targetElement = document.querySelector(".targetText");
		this.sourceRuleElement = document.querySelector(".sourceRule");
		this.ruleElement = this.sourceRuleElement.querySelectorAll("input[name=\"rule\"");
		//this.arrCyrylycKeysObject = Object.keys(cyrillicLetter);
	};

	init(){
		//this.translateButton.addEventListener("click", checkInput);
		this.sourceElement.addEventListener("paste", this.pasteHeight);
		console.dir(this._model.textIn());
	};

	changeTextArea(){
		setTimeout(this.pasteHeight,0);
		console.log("ok changeTextArea");
	};

	pasteHeight(){
		var heightTA = this.sourceElement.scrollHeight;
		this.sourceElement.style.height = heightTA + "px";
		this._model.textIn(this.sourceElement.value);
		console.dir(this._model.textIn());
		console.log("ok pasteHeight");
	};
	// checkInput(){
	// 	var myRule = [latynRule_1, latynRule_2, latynRule_3];
	// 	var arrRuleElement = Array.prototype.slice.apply(ruleElement);
	// 	if(arrRuleElement.some((el)=>el.checked === true)){
	// 		sourceRuleElement.classList.remove("alert");
	// 		var valueCheck; 
	// 		arrRuleElement.forEach(el => {
	// 			if(el.checked === true){
	// 				myRule.forEach(elem =>{
	// 					if(elem.name === el.value){
	// 						valueCheck = elem;
	// 					};
	// 				})
	// 			};
	// 		});
	// 		translate(valueCheck);
	// 	}else{
	// 		sourceRuleElement.className += " alert";
	// 	};
	// };
};