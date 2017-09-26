var applyLanguage = function (lang) {
	alert('Your language is: ' + lang);
}

var getCurrentLanguage = function () {

	var savedLang       = localStorage.getItem('currentLang');
	var defaultLanguage = savedLang || 'ua';
	var checked         = document.querySelector('input[type="radio"]:checked');
	var language        = checked ? checked.value : defaultLanguage;

	return language;
}

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
	applyLanguage(currentLang);
}

changeLang();

// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function() {
	applyLanguage(getCurrentLanguage());
	localStorage.setItem('currentLang', getCurrentLanguage());
});
