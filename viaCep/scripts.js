const $ = (query) => document.querySelector(query);

const form = $('#form')
const logradouro = $('#logradouro')
const bairro = $('#bairro')
const localidade = $('#localidade')
const uf = $('#uf')
let msg = $('#msg')

const preencherCampos = (data) => {
  logradouro.value = data.logradouro;
  bairro.value = data.bairro;
  localidade.value = data.localidade;
  uf.value = data.uf;
}

const setError = (message) => {
  let formControl = $('#cep').parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  
  msg.innerText = message;
}

const setSuccess = () => {
  let formControl = $('#cep').parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

const pesquisaCep = async () => {
  let cep = $('#cep')
  cep = cep.value;
  cep = cep.replace(/\D/g, '');
  
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (cep != '') {
    logradouro.value = 'buscando...';
    bairro.value = 'buscando...';
    localidade.value = 'buscando...';
    uf.value = 'buscando...';

    
    if (cep.length === 8) {
      const data = await fetch(url);
      const endereco = await data.json();
      if (("erro" in endereco)) {
        setError('CEP não encontrado.');
        logradouro.value = 'erro...';
        bairro.value = 'erro...';
        localidade.value = 'erro...';
        uf.value = 'erro...';
      } else {
        preencherCampos(endereco);
        setSuccess();
      }
    } else {
      setError('CEP Inválido precisa ter 8 dígitos.');
      logradouro.value = 'erro...';
      bairro.value = 'erro...';
      localidade.value = 'erro...';
      uf.value = 'erro...';
    }
  } else {
    return;
  }
}

// cep.addEventListener('focusout', pesquisaCep)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  pesquisaCep();
})