const peopleData = localStorage.getItem('people');
const loginData = localStorage.getItem('login');
const pUserName = document.getElementById('userName');
const pUserEmail = document.getElementById('userEmail');
const pUserPhone = document.getElementById('userPhone');

if (peopleData !== null) {
  const peopleObj = JSON.parse(peopleData);
  peopleObj.filter(email);

  const userName = peopleObj.name;
  const userPhone = peopleObj.phone;

  pUserName.textContent = userName;
  pUserPhone.textContent = userPhone;
};

if (loginData !== null) {
  const loginObj = JSON.parse(loginData);

  const userEmail = loginObj.email;
  pUserEmail.textContent = userEmail;

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