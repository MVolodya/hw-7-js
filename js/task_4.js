var applyLanguage = function (username, lang) {
	alert(username + ' your language is: ' + lang);
}

var getCurrentLanguage = function () {

	var savedLang       = localStorage.getItem('currentLang');
	var defaultLanguage = savedLang || 'ua';
	var checked         = document.querySelector('input[type="radio"]:checked');
	var language        = checked ? checked.value : defaultLanguage;

	return language;
}

var inputBox = document.getElementById('username');
var spanUser = document.getElementById('print-username');

var getUsername = function () {

	var savedUsername = localStorage.getItem('username');

	if (!savedUsername || savedUsername  == "undefined") {
		inputBox.setAttribute('value', 'Volodymyr');
		spanUser.innerHTML = inputBox.value;
	} else {
		inputBox.setAttribute('value', savedUsername);
		spanUser.innerHTML = savedUsername;
	}

	inputBox.onkeyup = function() {
		inputBox.maxLength = "15"
		spanUser.innerHTML = inputBox.value;
	}

	var inputValue = inputBox.value;
	if (inputValue != "") {

		spanUser.innerHTML = inputBox.value;
		return inputValue;
	} else {
			inputBox.setAttribute('value', savedUsername);
		var a = inputBox.value;
		spanUser.innerHTML = a;
		return a;
	}

}

getUsername();


var radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(function (btn) {
	btn.addEventListener('click', function () {
		changeLang();
	});
});


function changeLang() {
	var currentLang = getCurrentLanguage();
	var allLang     = document.querySelectorAll('[class*="lang-"]');
	var langEls     = document.getElementsByClassName('lang-' + currentLang);
	var btn         = document.querySelector('input[value="' + currentLang + '"]');

	btn.setAttribute('checked', true);


	allLang.forEach(function (lang) {
		lang.classList.remove('visible');
	});

	for (var i=0; i<langEls.length; i++) {
		var langEl = langEls[i];
		// langEl.style.display = 'inline';
		langEl.classList.add('visible');
	}
	applyLanguage(getUsername(), currentLang);
}

changeLang();

// $<prefix> == DOMElement
var $save = document.querySelector('html body div#save')

$save.addEventListener('click', function() {
	applyLanguage(getUsername(), getCurrentLanguage());
	localStorage.setItem('currentLang', getCurrentLanguage());
	localStorage.setItem('username', getUsername());
});
