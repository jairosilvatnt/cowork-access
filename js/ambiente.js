const loginData = localStorage.getItem('login');

if (loginData !== null) {
  const loginObj = JSON.parse(loginData);
  const userEmail = loginObj.email;

 
  
} else {
  window.location.href = 'login.html';
}

// 1-> criar um paragrafo na tela de ambiente