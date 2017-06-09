"use strict";

class Translate{

	constructor(){
		this.textIn;
		this.textOut;
		this.textError = false;
		this.ruleCyrilyc;
		this.ruleLatinyc;
	};

	textIn(){
		return this.textIn;
	};

	translate(){
		var text = sourceElement.value;
		if(this.textIn === "" || this.textIn === undefined){
			this.textError = true;
		}else{
			// var arr = text.split(" ");
			// var arrKeysObject = Object.keys(cyrillicLetter);
			// var newArr = arr.map(element => {
			// 	arrKeysObject.forEach(el => {
			// 		element = element.replace(cyrillicLetter[el], rule[el]);
			// 	});
			// 	return element;
			// });
			// text = newArr.join(" ");
			// newArr = text.split("");
			// var arrCompare = [];
			// newArr.forEach(function(el, ind){
			// 	if(/\n/.test(el) || ind === newArr.length - 1){
			// 		text = arrCompare.join("");
			// 		var p = document.createElement("p");
			// 		p.innerHTML = text;
			// 		targetElement.appendChild(p);
			// 		arrCompare.length = 0;
			// 	}else{
			// 		arrCompare.push(el);
			// 	};
			// });
		};
	};
};