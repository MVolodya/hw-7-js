





/*
var fooBar = {};

fooBar.updateFooName = function() {
  var fooName = $(this).data('name');
    console.log(fooName)
  if (fooName) {
    $(this).closest('[class^="col-sm"]').find('.foo-title span').text(fooName);
  }
};

$(document).ready(function() {
  $("input[name=foo_id]:radio").change(fooBar.updateFooName);
});
*/

var applyLanguage = function (lang) {
	alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
	var savedLang = localStorage.getItem('currentLang');
	var defaultLanguage = savedLang || 'ua';
  var checked = document.querySelector('input[type="radio"]:checked');

  return checked ? checked.value : defaultLanguage;
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
}

changeLang();

// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function() {
	localStorage.setItem('currentLang', getCurrentLanguage());
});
