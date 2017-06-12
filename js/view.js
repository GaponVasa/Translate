"use strict";
class Menu{
	constructor(model, arrRule){
		this._model = model;
		this.sourceElement = document.getElementById("inputKiril");
		this.translateButton = document.getElementById("translate");
		this.clearButton = document.getElementById("clear");
		this.copyButton = document.getElementById("copy");
		this.targetElement = document.getElementById("inputLatyn");
		this.sourceRuleElement = document.querySelector(".sourceRule");
		this.ruleElement = this.sourceRuleElement.querySelectorAll("input[name=\"rule\"");
		this.ruleLatinyc = arrRule;
		this.heightTextarea = this.sourceElement.clientHeight;
	};

	init(){
		new Clipboard('.btn');
		this.sourceElement.addEventListener("paste", this.changeTextArea.bind(this));
		this.translateButton.addEventListener("click", this.checkInput.bind(this));
		//this.sourceElement.addEventListener("keyup", this.checkInput.bind(this));
		this.copyButton.addEventListener("click", this.copyTextarea.bind(this));
		this.clearButton.addEventListener("click", this.clearTextarea.bind(this));
	};

	copyTextarea(){
		console.log("Ok");
		console.log(this);

	};

	clearTextarea(){
		this.sourceElement.value = "";
		this.targetElement.removeChild(this.targetElement.firstChild);
		this.sourceElement.style.height = this.heightTextarea + "px";
		this.targetElement.style.height = this.heightTextarea + "px";
	};

	changeTextArea(){//Автоматично збільшуємо висоту textarea
		setTimeout(()=>{
			let heightTA = this.sourceElement.scrollHeight;
			this.sourceElement.style.height = heightTA + "px";
			this.targetElement.style.height = heightTA + "px";
		},0);
		console.log(ClipboardEvent.clipboardData);
	};

	translate(thisRule){//Переклад тексту після перевірок
		let text = this.sourceElement.value;
		this._model.textInOut(text);
		this._model.translate(thisRule);
		if(this._model.textErrorOut()){//Перевіряємо чи введено текст чи ні
			this.sourceElement.value += "ВВедіть сюда текст.";//Якщо ні виводимо текст
		}else{//Якщо ТАК
			let newText = this._model.textInOut();
			let lineText = document.createTextNode(newText);
			this.targetElement.appendChild(lineText);
		}
	};

	checkInput(){//Перевіряєм правила перекладу
		let arrRuleElement = Array.prototype.slice.apply(this.ruleElement);
		if(arrRuleElement.some((el)=>el.checked === true)){
			this.sourceRuleElement.classList.remove("alert");
			let valueCheck; 
			arrRuleElement.forEach(el => {
				if(el.checked === true){
					this.ruleLatinyc.forEach(elem =>{
						if(elem.name === el.value){
							valueCheck = elem;
						};
					})
				};
			});
			this.translate(valueCheck);
		}else{
			this.sourceRuleElement.className += " alert";
		};
	};

};