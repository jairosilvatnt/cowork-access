// Obtém o formulário
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

let people = JSON.parse(localStorage.getItem('people')) || [];

// Função para verificar a senha
function isPasswordValid(password) {
  // Verifica se a senha tem pelo menos 8 caracteres e contém pelo menos uma letra
  return /^(?=.*[A-Za-z]).{8,}$/.test(password);
}

// Função para adicionar uma pessoa à lista
function addPerson(name, password) {
  const person = { name, password };
  people.push(person);
}

// Função para verificar se o nome já existe na lista
function doesNameExist(name) {
  return people.some(person => person.name === name);
}

// Função para exibir uma mensagem no console e redefinir o formulário
function displayMessageAndReset(message) {
  alert(message);
  form.reset();
}

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const name = nameInput.value;
  const password = passwordInput.value;

  if (!isPasswordValid(password)) {
    alert('A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra.');
    return;
  }

  if (doesNameExist(name)) {
    alert('Este nome já existe na lista!');
    return;
  }

  addPerson(name, password);

  localStorage.setItem('people', JSON.stringify(people));

  alert('Dados do formulário armazenados no localStorage:');
});