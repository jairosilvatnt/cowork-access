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
  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;    
  }
  return true;
}
// Expressões regulares para CPF's
cpfInput.addEventListener("blur", function(){
  cpfInput.value = cpfInput.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});


//Expressões regulares para numeros de telefones
const regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

phoneInput.addEventListener('input', function (){
  const phoneNumber = phoneInput.value;

  if(regex.test(phoneNumber)){
    alert('Número de telefone válido:', phoneNumber);
  }else{
    alert('Número de telefone inválido:', phoneNumber);
  }
});

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

