 // Obtém o formulário
 const form = document.getElementById('form');

 let people = JSON.parse(localStorage.getItem('people'))||[];

 // Adiciona um ouvinte de evento para o envio do formulário
 form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

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