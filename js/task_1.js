let body = document.querySelector('body');
body.appendChild(createText());

let submitClick = document.querySelector('input[type=submit]');
submitClick.addEventListener('click', function(event) {
        event.preventDefault();
        if (!inputValidation()) {
            alert('Oops, your validation is invalid');
        }
        else {
            alert('You are welcome, your validation is valid');
        }
});

function createForm() {

    let form     = document.createElement('form');
    let textForm = document.createTextNode("Form for validation");

    //input Age
    let labelAge     = document.createElement('label');
    let textLabelAge = document.createTextNode("Age");
    let inputAge     = document.createElement('input');

    //input Username
    let labelUsername     = document.createElement('label');
    let textLabelUsername = document.createTextNode("Username");
    let inputUsername     = document.createElement('input');

    //input Date
    let labelDate     = document.createElement('label');
    let textLabelDate = document.createTextNode("Date");
    let inputDate     = document.createElement('input');

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
    inputAge.setAttribute('value','20');

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
    inputDate.setAttribute('value', generateCurrentDate());

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

    return form;
}

function createText() {
    let divContainer     = document.createElement('div');
    let divFormContainer = document.createElement('div');
    let h1               = document.createElement("h1");
    //let p                = document.createElement("p");
    let textTitle        = document.createTextNode("Task 1");
    //let textDescription  = document.createTextNode("Do you like some jokes?");

    let divButtonContainer = document.createElement('div');
    let myAnchor           = document.createElement('a');
    let textButton         = document.createTextNode("Back");

    divButtonContainer.setAttribute('class', 'button-container');
    divContainer.setAttribute('class', 'container');
    divFormContainer.setAttribute('class', 'form-container');
    myAnchor.setAttribute('href', '../index.html');
    myAnchor.setAttribute('class', 'button button-back button-task-1');


    h1.appendChild(textTitle);
    //p.appendChild(textDescription);
    myAnchor.appendChild(textButton);
    divContainer.appendChild(h1);
    //divContainer.appendChild(p);
    divContainer.appendChild(divFormContainer);
    divFormContainer.appendChild(createForm());
    divButtonContainer.appendChild(myAnchor);
    divContainer.appendChild(divButtonContainer);

    return divContainer;
}

function inputValidation() {
    let inputAge      = document.querySelector('#age').value;
    let inputUsername = document.querySelector('#username').value;
    let inputDate     = document.querySelector('#date').value;

    inputAge      = isNumber(inputAge);
    inputUsername = isUsername(inputUsername);
    inputDate     = isCurrentDate(inputDate);

    if (!inputAge)      { alert("Sorry, you entered invalid age");}
    if (!inputUsername) { alert("Sorry, you entered invalid username");}
    if (!inputDate)     { alert("Sorry, you entered invalid date");}

    let checkingValidation = (inputAge && inputUsername && inputDate) ? true : false;

    return checkingValidation;
}

function isNumber(inputAge) {
    let regexpValueAge = /^\d+$/;
    let checkValueAge  = (regexpValueAge.test(inputAge) && (inputAge >= 0)) ? true : false;
    return checkValueAge;
}

function isUsername(inputUsername) {
    //let regexpValueUsername = /^user_(([0-9a-z-]+)?([@])?[0-9a-z-]+\.[a-z]+)?\w+$/;
    let regexpValueUsername = /^user_\S.+?$/;
    let checkValueUsername  = regexpValueUsername.test(inputUsername) ? true : false;
    return checkValueUsername;
}

function isCurrentDate(inputDate) {
    let regexpValueDate  = /^\d{2}\/\d{2}\/\d{4}$/;
    let checkedValueDate = false;
    let currentDate      = new Date();

    if (regexpValueDate.test(inputDate)) {
        let splitValueDate = inputDate.split('/')
        checkedValueDate = (splitValueDate[0] == currentDate.getDate() &&
                            splitValueDate[1] == currentDate.getMonth()+1 &&
                            splitValueDate[2] == currentDate.getFullYear());
    }
    return checkedValueDate;
}

function generateCurrentDate() {
    let currentDate = new Date();
    let dd   = currentDate.getDate();
    let mm   = currentDate.getMonth()+1; // The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
    let yyyy = currentDate.getFullYear();

    dd = dd < 10 ? (dd = "0" + dd) : (dd);
    mm = mm < 10 ? (mm = "0" + mm) : (mm);

    currentDate = dd + "/" + mm +"/"+ yyyy;

    return currentDate;
}
