 const usernames={"gender":"male","name":{"title":"Mr","first":"Milorad","last":"Simonović"},"location":{"street":{"number":373,"name":"Učitelja Mihailovića"},"city":"Valjevo","state":"Braničevo","country":"Serbia","postcode":58985,"coordinates":{"latitude":"63.2118","longitude":"-63.4221"},"timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},"email":"milorad.simonovic@example.com","login":{"uuid":"7b20ee08-c8ee-4ba9-a2b5-344c03592b44","username":"silverfrog299","password":"brandy1","salt":"YI45QNLN","md5":"84832da5ab287754c0c1d5b275e3a012","sha1":"6190525ef3c15e85feef57addf69da9bf773deec","sha256":"e5a839aee8c9b822004ea1a609c29a394885e469c24196a0779b154e58e25340"},"dob":{"date":"1961-01-14T03:19:52.618Z","age":62},"registered":{"date":"2007-07-20T23:38:25.274Z","age":15},"phone":"012-3517-223","cell":"062-3354-235","id":{"name":"SID","value":"562675094"},"picture":{"large":"https://randomuser.me/api/portraits/men/75.jpg","medium":"https://randomuser.me/api/portraits/med/men/75.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/75.jpg"},"nat":"RS"}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
});


const loginButton=document.querySelector('#loginbutton');
loginButton.addEventListener("click", () => {
const names=document.querySelector('#name').value;
const passwords=document.querySelector('#password').value;
 if(names === usernames.login.username && passwords === usernames.login.password){
  window.location.assign("students.html");
} 
});


  
   
