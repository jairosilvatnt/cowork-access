 // Obtém o formulário
 const form = document.getElementById('form');

 let people = JSON.parse(localStorage.getItem('people'))||[];

  // Função para verificar a senha
function isPasswordValid(password) {
  // Verifica se a senha tem pelo menos 8 caracteres
  if (password.length < 8) {
    return false;
  }

  // Verifica se a senha contém pelo menos uma letra
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }

  return true;
}

 // Adiciona um ouvinte de evento para o envio do formulário
 form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

     // Verifica se a senha é válida
    if (!isPasswordValid(password)) {
      console.log('A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra.');
      form.reset();
      return; // Não envia o formulário se a senha não for válida
    }

      // Verifica se o nome já existe na lista
    const nameExists = people.some(person => person.name === name);

    if (nameExists) {
      console.log('Este nome já existe na lista!');
      form.reset();
      return; // Não adiciona a pessoa à lista
    }
    
    // Cria um objeto com os dados do formulário
    const person = {
      name,
      password
    };

    people.push(person);    
  
    
    // Armazena os dados no localStorage
    localStorage.setItem('people', JSON.stringify(people));
    
    // Exibe os dados no console.log
    console.log('Dados do formulário armazenados no localStorage:');
    console.log(people);
    
    form.reset();
 });  