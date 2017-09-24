





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
/*
let applyLanguage = function (lang) {
	alert('now language is: ' + lang);
}

let defaultLanguage = 'ua';
let currentLang = getCurrentLanguage(defaultLanguage);

function getCurrentLanguage(valueFromCheckedButton) {
	defaultLanguage = valueFromCheckedButton;
	console.log(defaultLanguage);
	setUserLanguage(defaultLanguage);
	applyLanguage(defaultLanguage);

	return defaultLanguage;
}

function setUserLanguage(getChosenLanguage) {
	let langEls = document.getElementsByClassName('lang-' + getChosenLanguage);
	for (let i=0; i<langEls.length; i++) {
		let langEl = langEls[i];
		langEl.classList.add('visible');
	}
}
function unvi() {
	let aaa = document.getElementsByClassName('lang-' + currentLang);
	for (let i=0; i < aaa.length; i++) {
		let sss = aaa[i];
		sss.classList.remove('visible');
	}
	console.log(currentLang);
}

let radioButtons = document.getElementsByName('lang');
for (let i = 0; i < radioButtons.length; i++) {
	radioButtons[i].addEventListener("click", function() {
		let checkedButton = radioButtons[i].value;
		getCurrentLanguage(checkedButton);
		unvi();
		console.log(checkedButton);
	})
}

function setUserLanguage(valueFromCheckedButton) {
	let findSelectedLanguage = document.getElementsByClassName('lang-' + valueFromCheckedButton);
	for (let i = 0; i < findSelectedLanguage.length; i++) {
		let newLanguage = findSelectedLanguage[i];
		newLanguage.classList.add('visible');
	}
}*/
