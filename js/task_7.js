function Emploee(firstName, lastName, salary, position) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.salary    = salary;
    this.position  = position;
}

let userArray = [];

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

function renderList(firstName, lastName, salary, position) {
    let inputValue = document.querySelector('input[type=number]');
    let max = inputValue.value;

    if (userArray.length >= max) {
        alert("Sorry, limit of employee are " + max);
    } else {
        addNewEmploee(firstName, lastName, salary, position);
        let min = userArray.length;
        inputValue.setAttribute('min', min)
    }
}

function addNewEmploee(firstName, lastName, salary, position) {

    let obj = new Emploee(firstName, lastName, salary, position);

    let result = checkUser(userArray, obj);

    if (result) {
        alert("Employee is exists")
    } else {
        userArray.push(obj);
        let checkedArray = checkSalary(userArray);
        createList(checkedArray);
    }

}

function checkUser(arr, val) {
    return arr.some(function(arrVal) {
        return (val.firstName === arrVal.firstName &&
                val.lastName  === arrVal.lastName);
    });
}

function checkSalary(arr) {
    let salary = document.getElementById('average-salary');

    let average = 0;

    for (var i = 0; i < arr.length; i++) {
        average += parseInt(arr[i].salary);
    }

    let result = (average / arr.length).toFixed();

    if (result >= 2000) {
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

    for (var i = 0; i < arr.length; i++) {
        let li = document.createElement('li');

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
        let textSalary    = document.createTextNode(arr[i].salary + " ");
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

    countUsers();

    return list;
}

function countUsers() {
    let number      = document.getElementById('number-of-employees');
    let arrayLength = document.createTextNode(userArray.length);

    number.innerHTML = "";
    number.appendChild(arrayLength);
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
