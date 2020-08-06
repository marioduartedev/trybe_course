document.getElementById('data').DatePickerX.init();
const estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
const caixa = document.querySelector('#estado');
for (let i = 0; i < 27; i += 1) {
    let dropDown = document.createElement('option');
    dropDown.value = estados[i];
    dropDown.innerHTML = estados[i];
    caixa.appendChild(dropDown);
}
let campoData = document.querySelector('#data');

const botao = document.querySelector('#botao');
const form = document.querySelector('#formulario');
botao.addEventListener('click', curricular, false);

function curricular(evt) {
		evt.preventDefault();
		let requirido = true;
		let rege = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
		let email = document.querySelector('#email').value;
		if (rege.test(email) === false && email !== "") {
			alert('Email invalido');
			requirido = false;
		}
		let todos = document.querySelectorAll('.inputs');
		for (let k = 0; k < todos.length; k += 1) {
			if (todos[k].checkValidity() === false){
				requirido = false;
			}
		}
		if (requirido === false) {
			alert("Preencha todos os campos!!!!");
		} else {
			let box = document.createElement('div');
			box.className = 'box';
			for (let j = 0; j < todos.length; j += 1) {
				let parag = document.createElement('p');
				parag.innerHTML = todos[j].value;
				parag.className = todos[j].tagName;
				box.appendChild(parag);
			}
			document.querySelector('.curriculo').appendChild(box);
			let teste = document.querySelector('.moradia:checked');
			let parag = document.createElement('p');
			parag.innerHTML = teste.value;
			box.insertBefore(parag, document.querySelector('.TEXTAREA'));
		}
}
const limpar = document.querySelector('#resetar');
limpar.addEventListener('click', function() {
	if (document.querySelector('.box')){
		document.querySelector('.box').remove();
	}
});