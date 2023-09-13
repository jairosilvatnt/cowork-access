const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const cpfInput = document.getElementById('cpf');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

let people = JSON.parse(localStorage.getItem('people')) || [];

function isPasswordValid(password) {
  return /^(?=.*[A-Za-z]).{8,}$/.test(password);
}


function isValidCPF(cpf) {
  // Verifica se o CPF tem 14 dígitos
  if (cpf.length !== 14) {
    return false;
  }
  return true;
}
// Expressões regulares para CPF's
// cpfInput.addEventListener("blur", function () {
//   cpfInput.value = cpfInput.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/, "-");
// });


function mask(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmask()", 1)
}

function execmask() {
  v_obj.value = v_fun(v_obj.value)
}

function masktel(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  return v;
}

function maskcpf(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v;
}

function maskcnpj(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  return v;
}


function idcss(el) {
  return document.getElementById(el);
}

window.onload = function () {


  //TEL FIXO -------
  // idcss('phone').setAttribute('maxlength', 14);
  // idcss('phone').onkeypress = function () {
  //   mask(this, masktel);
  // }
  //-------------


  //CELULAR -------
  idcss('phone').setAttribute('maxlength', 15);
  idcss('phone').onkeypress = function () {
    mask(this, masktel);
  }
  //-------------


  //CPF ---------
  idcss('cpf').setAttribute('maxlength', 14);
  idcss('cpf').onkeypress = function () {
    mask(this, maskcpf);
  }
  //-------------


  //CNPJ --------
  // idcss('cnpj').setAttribute('maxlength', 18);
  // idcss('cnpj').onkeypress = function () {
  //   mask(this, maskcnpj);
  // }
  //-------------

}



//Expressões regulares para numeros de telefones
// const regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

// phoneInput.addEventListener('input', function (){
//   const phoneNumber = phoneInput.value;

//   if(regex.test(phoneNumber)){
//     alert('Número de telefone válido:', phoneNumber);
//   }else{
//     alert('Número de telefone inválido:', phoneNumber);
//   }
// });

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function addPerson(name, cpf, phone, email, password) {
  const person = { name, cpf, phone, email, password };
  people.push(person);
}

function doesNameExist(name) {
  return people.some(person => person.name === name);
}

function doesCPFExist(cpf) {
  return people.some(person => person.cpf === cpf);
}

function alert(message) {
  console.log(message);
}


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const cpf = cpfInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!isPasswordValid(password)) {
    alert('A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra.');
    return;
  }

  if (doesNameExist(name)) {
    alert('Este nome já existe na lista!');
    return;
  }

  if (!isValidCPF(cpf)) {
    alert('CPF inválido ou em formato incorreto.');
    return;
  }

  if (doesCPFExist(cpf)) {
    alert('Este CPF já está cadastrado!');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Por favor, insira um endereço de email válido.');
    return;
  }

  addPerson(name, cpf, phone, email, password);

  localStorage.setItem('people', JSON.stringify(people));

  alert('Dados do formulário armazenados no localStorage:');
  form.reset();
});

