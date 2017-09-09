/*
        <form name="login" action="google.com">
           <input type="text" name="age">
           <input type="text" name="username">
           <input type="text" name="date">
           <input type="submit" value="Validate Me">
        </form>
*/


let body = document.querySelector('body');
body.appendChild(createText());

function createForm() {

    let form = document.createElement('form');
    let inputAge = document.createElement('input');
    let inputUsername = document.createElement('input');
    let inputDate = document.createElement('input');
    let inputSubmit = document.createElement('input');
    let h2 = document.createElement("h2");
    let textForm = document.createTextNode("Form for validation");

    h2.appendChild(textForm);

    form.setAttribute('name', 'login');
    //form.setAttribute('action', 'google.com');

    //setAttribute for input Age
    inputAge.className = 'custom-input';
    inputAge.setAttribute('type','text');   //inputAge.type='text';
    inputAge.setAttribute('name','age');    //inputAge.name='age';
    inputAge.setAttribute('placeholder','age');
    inputAge.setAttribute('autofocus', '');

    //setAttribute for input Username
    inputUsername.className = 'custom-input';
    inputUsername.setAttribute('type','text');
    inputUsername.setAttribute('name','username');
    inputUsername.setAttribute('placeholder','username');

    //setAttribute for input Date
    inputDate.className = 'custom-input';
    inputDate.setAttribute('type','text');
    inputDate.setAttribute('name','date');
    inputDate.setAttribute('placeholder','date');

    //setAttribute for input Submit
    inputSubmit.className = 'custom-submit-input';
    inputSubmit.setAttribute('type','submit');
    inputSubmit.setAttribute('value','Validate Me');
    inputSubmit.setAttribute('onclick','functionName()');  // test

    form.appendChild(h2);
    form.appendChild(inputAge);
    form.appendChild(inputUsername);
    form.appendChild(inputDate);
    form.appendChild(inputSubmit);

    console.log('form', form);

    return form;
}

function createText() {

    let divContainer = document.createElement('div');
    let divFormContainer = document.createElement('div');
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let textTitle = document.createTextNode("Volodymyr Medvid");
    let textDescription = document.createTextNode("Do you like some jokes?");

    divContainer.setAttribute('class', 'container');
    divFormContainer.setAttribute('class', 'form-container');

    h1.appendChild(textTitle);
    p.appendChild(textDescription);
    divContainer.appendChild(h1);
    divContainer.appendChild(p);
    divContainer.appendChild(divFormContainer);
    divFormContainer.appendChild(createForm());

    console.log('divContainer', divContainer);
    return divContainer;
}
functionName()
function functionName() {
    //show me nicolas cage
    let te = document.querySelectorAll('input[type=text]').value;
    console.log('ff',te);
}
