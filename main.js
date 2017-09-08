/*
        <form name="login" action="google.com">
           <input type="text" name="age">
           <input type="text" name="username">
           <input type="text" name="date">
           <input type="submit" value="Validate Me">
        </form>
*/


var body = document.querySelector('body');

var form = document.createElement('form');
form.setAttribute('name', 'login');
form.setAttribute('action', 'google.com');

var inputAge = document.createElement('input');
inputAge.setAttribute('type','text'); //inputAge.type='text';
inputAge.setAttribute('name','age'); //inputAge.name='age';
form.appendChild(inputAge);

var inputUsername = document.createElement('input');
inputUsername.setAttribute('type','text');
inputUsername.setAttribute('name','username');
form.appendChild(inputUsername);

var inputDate = document.createElement('input');
inputDate.setAttribute('type','text');
inputDate.setAttribute('name','date');
form.appendChild(inputDate);

var inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type','submit');
inputSubmit.setAttribute('value','Validate Me');
form.appendChild(inputSubmit);

body.appendChild(form);


console.log('form', form);
