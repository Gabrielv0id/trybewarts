const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnEntrar = document.querySelector('#botao-entrar');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

function validarLogin(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnSubmit.disable = true;
btnEntrar.addEventListener('click', validarLogin);

function validacao() {
  if (agreement.value === '') {
    btnSubmit.disable = true;
  } else {
    btnSubmit.disable = false;
  }
}

agreement.addEventListener('change', validacao);
