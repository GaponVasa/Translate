"use strict";
var sourceElement = document.getElementById("inputKiril");
var translateButton = document.getElementById("translate");
var targetElement = document.querySelector(".targetText");
var sourceRuleElement = document.querySelector(".sourceRule");
var ruleElement = sourceRuleElement.querySelectorAll("input[name=\"rule\"");
var arrCyrylycKeysObject = Object.keys(cyrillicLetter);
var latynRule_2 ={name:"latynRule_2"};
var latynRule_3 ={name:"latynRule_3"};
function clearTextArea(){
	sourceElement.value = "";
	sourceElement.style.height = "34px";
};
function pasteHeight(){
	var heightTA = sourceElement.scrollHeight;
	sourceElement.style.height = heightTA + "px";
};
function changeTextArea(){
	setTimeout(pasteHeight,0);
};
function translate(rule){
	var text = sourceElement.value;
	if(text === "" || text === undefined){
		sourceElement.value += "ВВедіть сюда текст.";
	}else{
		var arr = text.split(" ");
		var arrKeysObject = Object.keys(cyrillicLetter);
		var newArr = arr.map(element => {
			arrKeysObject.forEach(el => {
				element = element.replace(cyrillicLetter[el], rule[el]);
			});
			return element;
		});
		text = newArr.join(" ");
		newArr = text.split("");
		var arrCompare = [];
		newArr.forEach(function(el, ind){
			if(/\n/.test(el) || ind === newArr.length - 1){
				text = arrCompare.join("");
				var p = document.createElement("p");
				p.innerHTML = text;
				targetElement.appendChild(p);
				arrCompare.length = 0;
			}else{
				arrCompare.push(el);
			};
		});
	};
};
function checkInput(){
	var myRule = [latynRule_1, latynRule_2, latynRule_3];
	var arrRuleElement = Array.prototype.slice.apply(ruleElement);
	if(arrRuleElement.some((el)=>el.checked === true)){
		sourceRuleElement.classList.remove("alert");
		var valueCheck; 
		arrRuleElement.forEach(el => {
			if(el.checked === true){
				myRule.forEach(elem =>{
					if(elem.name === el.value){
						valueCheck = elem;
					};
				})
			};
		});
		translate(valueCheck);
	}else{
		sourceRuleElement.className += " alert";
	};
};
var clickTr = translateButton.addEventListener("click", checkInput);	
var clearTextArea = sourceElement.addEventListener("click", clearTextArea);
var pasteTextArea = sourceElement.addEventListener("paste", changeTextArea);