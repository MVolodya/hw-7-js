
var onClickSP = function (e) {
    var $el = e.target;
    e.stopPropagation();
    $el.style.backgroundColor = 'yellow';
    alert('I\'m stopPropagation!');
    //$el.style.backgroundColor = '';
}

var onClickPD = function (event) {
    var $link = event.target;
    event.preventDefault();
    alert('I\'m preventDefault!');
}

document.body.onclick = onClickSP;
box1.onclick = onClickSP;
box2.onclick = onClickSP;
box3.onclick = onClickSP;

link.onclick = onClickPD;
