const $ = (query) => document.querySelector(query);

const cleanForm = (address) => {
  $('#endereco').value = '';
  $('#bairro').value = '';
  $('#cidade').value = '';
  $('#estado').value = '';
}

const fillOutForm = (address) => { 
$('#endereco').value = address.logradouro;
  $('#bairro').value = address.bairro;
  $('#cidade').value = address.localidade;
  $('#estado').value = address.uf;
}


const eNumber = (number) => /^[0-9]+$/.test(number);

const validZipCode = (zipCode) => zipCode.length == 8 && eNumber(zipCode); 

const searchZipCode = async() => {
  cleanForm();
  
  let zipCode = $('#cep').value;
  zipCode = zipCode.replace('.','');
  zipCode = zipCode.replace('-','');

  const url = `https://viacep.com.br/ws/${zipCode}/json/`;
  if (validZipCode(zipCode)){
      const dados = await fetch(url); //capturar
      const address = await dados.json(); //pegar só json
      if (address.hasOwnProperty('erro')) {
          $('#endereco').value = 'CEP não encontrado!';
      } else {
          fillOutForm(address);
      }
  } else {
      $('#endereco').value = 'CEP incorreto!';
  }
   
}

$('#cep').addEventListener('focusout',searchZipCode);