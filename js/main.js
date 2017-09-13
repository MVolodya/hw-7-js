

let body = document.querySelector('body');
body.appendChild(createText());

function createForm() {

    let form = document.createElement('form');

    let textForm = document.createTextNode("Form for validation");

    //input Age
    let labelAge = document.createElement('label');
    let textLabelAge = document.createTextNode("Age");
    let inputAge = document.createElement('input');

    //input Username
    let labelUsername = document.createElement('label');
    let textLabelUsername = document.createTextNode("Username");
    let inputUsername = document.createElement('input');

    //input Date
    let labelDate = document.createElement('label');
    let textLabelDate = document.createTextNode("Date");
    let inputDate = document.createElement('input');

    let inputSubmit = document.createElement('input');

    let h2 = document.createElement("h2");

    h2.className = 'form-title';
    h2.appendChild(textForm);

    form.setAttribute('name', 'login');
    form.setAttribute('action', 'google.com');

    //setAttribute for input Age
    labelAge.setAttribute('for','age');
    labelAge.appendChild(textLabelAge);

    inputAge.className = 'custom-input';
    inputAge.setAttribute('type','text');   //inputAge.type='text';
    inputAge.setAttribute('name','age');    //inputAge.name='age';
    inputAge.setAttribute('id','age');
    inputAge.setAttribute('value','asd');
    inputAge.setAttribute('autofocus', '');

    //setAttribute for input Username
    labelUsername.setAttribute('for','username');
    labelUsername.appendChild(textLabelUsername);

    inputUsername.className = 'custom-input';
    inputUsername.setAttribute('type','text');
    inputUsername.setAttribute('name','username');
    inputUsername.setAttribute('id','username');
    inputUsername.setAttribute('value','user_volodymyr');

    //setAttribute for input Date
    labelDate.setAttribute('for','date');
    labelDate.appendChild(textLabelDate);

    inputDate.className = 'custom-input';
    inputDate.setAttribute('type','text');
    inputDate.setAttribute('name','date');
    inputDate.setAttribute('id','date');
    inputDate.setAttribute('value','date');

    //setAttribute for input Submit
    inputSubmit.className = 'custom-submit-input';
    inputSubmit.setAttribute('type','submit');
    inputSubmit.setAttribute('value','Validate Me');

    form.appendChild(h2);
    form.appendChild(labelAge);
    form.appendChild(inputAge);
    form.appendChild(labelUsername);
    form.appendChild(inputUsername);
    form.appendChild(labelDate);
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

inputValidation()
function inputValidation() {
    let inputAge = document.querySelector('#age').value;
    let inputUsername = document.querySelector('#username').value;
    let inputDate = document.querySelector('#date').value;

    inputAge = isNumber(inputAge);
    inputUsername = isUsername(inputUsername)

    
    console.log("hhhh", inputUsername);
    inputUsername = isUsername(inputUsername);
    console.log("hhhh", inputUsername);
    //alert(inputAge);
}

function isNumber(inputAge) {
    let regexpValueAge = /^[0-9]\d*$/;
    let checkValueAge = ((regexpValueAge.test(inputAge)) && (inputAge >= 0)) ? 'true' : alert('Sorry, please enter a valid age');
    return checkValueAge;
}

function isUsername(inputUsername) {
    let regexpValueUsername = /^user_(([0-9a-z-]{1,})?([@])?[0-9a-z-]{2,}\.[a-z]{2,})?\w+$/;
    let checkValueUsername = regexpValueUsername.test(inputUsername) ? 'true' : alert('Sorry, please enter a valid username');
    return checkValueUsername;
}
