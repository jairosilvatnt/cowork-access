const loginData = localStorage.getItem('login');
const pUserName = document.getElementById('userName');
const pUserEmail = document.getElementById('userEmail');
const pUserPhone = document.getElementById('userPhone');

// 

if (loginData !== null) {
  const loginObj = JSON.parse(loginData);
  const userEmail = loginObj.email;
  const userName = loginObj.name;
 
  pUserEmail.textContent = userEmail;  
  pUserName.textContent = userName;  
} else {
  window.location.href = 'login.html';
}

logout.addEventListener('click', () => {
  localStorage.removeItem('login');

  const quit = confirm('Deseja sair?');

  if (quit) {
    location.href = 'environment.html';
  }
});

// 1-> criar um paragrafo na tela de ambiente