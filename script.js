const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnEntrar = document.querySelector('#botao-entrar');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function validarLogin(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function validacao() {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

contador.innerHTML = 500;

function contadorCaracter(event) {
  const max = 500;
  const inputLength = textArea.value.length;
  console.log(event.key);
  contador.innerHTML = max - inputLength;
}

textArea.addEventListener('input', contadorCaracter);
btnEntrar.addEventListener('click', validarLogin);
agreement.addEventListener('click', validacao);
