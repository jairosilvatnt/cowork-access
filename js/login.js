// Capturando meu formulario de login
const loginForm = document.getElementById('login-form');
// Capturando os inputs de login
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event){
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  let people = JSON.parse(localStorage.getItem('people')) || [];

  if(people.length === 0){
    alert('Usuário não encontrado')
  }

  const foundUser = people.filter(person => person.email === email);

  if(!foundUser){
    alert('Usuário não encontrado');
  }
  //Variavel da senha //Pegando o primeiro item do array //Checando a senha do usuario;
  const validPassword = foundUser[0].password === password;

  if (validPassword) {
    //Criando um objeto vazio.
    const login = Object.create(null);
    //O objeto esta recebendo o valor da propriedade email.  
    login.email = email;

    localStorage.setItem('login', JSON.stringify(login));

    window.location.href='environment.html';
  }else{
    alert('Senha incorreta!');
  }

  // const existsEmail = people.find(person => person.email === email);

  // if(existsEmail){
  //   alert('Email não encontrado!');
  //   return;
  // }
  // const existsPassword = people.find(person => person.password === password);

  // if(existsPassword){
  //   alert('Não foi encontrado as credenciais informadas!');
  //   return;
  // }
  // loginForm.reset()

  // window.location.href = 'ambiente.html';


});