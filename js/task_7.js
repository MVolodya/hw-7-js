function Emploee(firstName, lastName, salary, position) {
    this.id = firstName + lastName;
    this.firstName = firstName;
    this.lastName  = lastName;
    this.salary    = salary;
    this.position  = position;
}

let userArray = [];

createDefUser();

function createDefUser() {
    let defUser = new Emploee("John", "Doe", "1000", "Manager");
    userArray.push(defUser);
    createList(userArray);
    checkSalary(userArray);
}

let submitClick = document.querySelector('input[type=submit]');
submitClick.addEventListener('click', function(event) {
    inputValidation();
});

function inputValidation() {
    let inputFirstName = document.querySelector('#first-name').value;
    let inputLastName  = document.querySelector('#last-name').value;
    let inputSalary    = document.querySelector('#salary').value;
    let inputPosition  = document.querySelector('#position').value;

    let firstName = isText(inputFirstName);
    let lastName  = isText(inputLastName);
    let salary   = isNumber(inputSalary);
    let position = isText(inputPosition);

    if (!firstName){ showAlertText("First name");}
    if (!lastName) { showAlertText("Last name");}
    if (!salary)   { showAlertNumber("Salary")}
    if (!position) { showAlertText("Position");}

    if (firstName && lastName && position && salary) {
        renderList(inputFirstName, inputLastName, inputSalary, inputPosition);
    }
}

function renderList(firstName, lastName, salary, position) {
    let inputValue = document.querySelector('input[type=number]');
    let max = inputValue.value;

    if (userArray.length >= max) {
        alert("Sorry, limit of employee are " + max);
    } else {
        addNewEmploee(firstName, lastName, salary, position);
        setMinValue(inputValue);
    }
}

function addNewEmploee(firstName, lastName, salary, position) {

    let obj = new Emploee(firstName, lastName, salary, position);

    let result = checkUser(userArray, obj);

    if (result) {
        let text = "Employee " + obj.firstName + " " + obj.lastName + " is exists";
        alert(text);
    } else {
        userArray.push(obj);
        let checkedArray = checkSalary(userArray);
        createList(checkedArray);
    }
}

function setMinValue(inputValue) {
    let min = userArray.length;
    return inputValue.setAttribute('min', min);
}

function checkUser(arr, val) {
    return arr.some(function(arrVal) {
        return (val.firstName === arrVal.firstName &&
                val.lastName  === arrVal.lastName);
    });
}

function checkSalary(arr) {
    let salary = document.getElementById('average-salary');

    let averageS = 0;
    let maxAverageSalary = 2000;

    for (let i = 0; i < arr.length; i++) {
        averageS += parseInt(arr[i].salary);
    }

    let result = (averageS / arr.length).toFixed();

    if (isNaN(result)) {
        salary.innerHTML = "";
        let textAverageSalary = document.createTextNode('0');
        salary.appendChild(textAverageSalary);
    } else if (result >= maxAverageSalary) {
        alert("Sorry, average salary is higher than 2000$");
        arr.pop();
    } else {
        salary.innerHTML = "";
        let textAverageSalary = document.createTextNode(result);
        salary.appendChild(textAverageSalary);
    }

    return arr;
}

function createList(arr) {
    let list = document.getElementById('list-of-emploee');
    list.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');

        li.setAttribute('id', arr[i].firstName + arr[i].lastName);

        let spanFirstName = document.createElement('span');
        let spanLastName  = document.createElement('span');
        let spanSalary    = document.createElement('span');
        let spanPosition  = document.createElement('span');

        spanFirstName.setAttribute('class', 'employeeFirstName');
        spanLastName.setAttribute('class', 'employeeLastName');
        spanSalary.setAttribute('class', 'employeeSalary');
        spanPosition.setAttribute('class', 'employeePosition');

        let textFirstName = document.createTextNode(arr[i].firstName + " ");
        let textLastName  = document.createTextNode(arr[i].lastName + " ");
        let textSalary    = document.createTextNode(arr[i].salary + "$ ");
        let textPosition  = document.createTextNode(arr[i].position);

        spanFirstName.appendChild(textFirstName);
        spanLastName.appendChild(textLastName);
        spanSalary.appendChild(textSalary);
        spanPosition.appendChild(textPosition);

        li.appendChild(spanFirstName);
        li.appendChild(spanLastName);
        li.appendChild(spanSalary);
        li.appendChild(spanPosition);
        list.appendChild(li);
    }

    let li = list.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let button = renderCloseButton();
        li[i].appendChild(button);
    }

    countUsers();
    eventToClickClose();

    return list;
}

function renderCloseButton() {
    let button = document.createElement('button');
    let cross = document.createTextNode('\u00D7');
    button.className = 'close';
    button.appendChild(cross);

    return button;
}

function countUsers() {
    let number      = document.getElementById('number-of-employees');
    let arrayLength = document.createTextNode(userArray.length);

    number.innerHTML = "";
    number.appendChild(arrayLength);
}


function eventToClickClose() {
    let closeButtons = document.getElementsByClassName('close');
    for (let j = 0; j < closeButtons.length; j++) {
        closeButtons[j].onclick = onCloseButtonClick;
    }
}

function onCloseButtonClick() {
    let inputValue = document.querySelector('input[type=number]');

    let button = this;
    let parent = button.parentElement;
    parent.style.display = 'none';

    for(let i = userArray.length - 1; i >= 0; i--) {
        if(userArray[i].id === parent.id) {
           userArray.splice(i, 1);
        }
    }

    countUsers();
    checkSalary(userArray);
    setMinValue(inputValue);
}


function isText(value) {
    let regexpValue = /^[A-Z][a-z]+$/;
    let checkValue  = regexpValue.test(value) ? true : false;
    return checkValue;
}

function isNumber(value) {
    let regexpValue = /^\d+$/;
    let checkValue  = (regexpValue.test(value) && (value >= 0)) ? true : false;
    return checkValue;
}

function showAlertText(value) {
    let text = "Sorry, you entered invalid " + value + "\n" +
               "-------------------------------------------\n" +
               "The word must consist of more than 1 letter\n" +
               "The first letter must be a uppercase\n" +
               "The text should be in English only";
    return alert(text);;
}

function showAlertNumber(value) {
    let text = "Sorry, you entered invalid " + value + "\n" +
               "------------------------------------\n" +
               "You must enter only digits";
    return alert(text);;
}
