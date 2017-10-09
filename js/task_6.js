
document.getElementById('player').style.top = '100px';
document.getElementById('player').style.left = '100px';

var fireId = 0;



document.body.onkeydown = function (e) {
    var el = document.getElementById('player');
    console.log(e.keyCode);

    var speed = 10;


    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_SPACE = 32;
    var KEYCODE_ENTER = 13;


    if (e.keyCode == KEYCODE_LEFT && parseInt(el.style.left) > 0) {
        el.style.left = (parseInt(el.style.left) - 1 * speed) + 'px';
        el.style.transform = "rotate(-90deg)";
    }
    else if (e.keyCode == KEYCODE_RIGHT && parseInt(el.style.left) < 900) {
        el.style.left = (parseInt(el.style.left) + 1 * speed) + 'px';
        el.style.transform = "rotate(90deg)";
    }
    else if (e.keyCode == KEYCODE_UP && parseInt(el.style.top) > 20) {
        el.style.top = (parseInt(el.style.top) - 1 * speed) + 'px';
        el.style.transform = "rotate(0deg)";
    }
    else if (e.keyCode == KEYCODE_DOWN && parseInt(el.style.top) < 410) {
        el.style.top = (parseInt(el.style.top) + 1 * speed) + 'px';
        el.style.transform = "rotate(180deg)";
    }
    else if (e.keyCode == KEYCODE_SPACE || e.keyCode == KEYCODE_ENTER) {
        var space = document.getElementById('space');
        var div = document.createElement('div');
        div.setAttribute("id", fireId);
        div.setAttribute("class", "fire");
        div.style.top = (parseInt(el.style.top) - 0) + 'px';
        div.style.left = (parseInt(el.style.left) - 0) + 'px';
        div.style.transform = (el.style.transform);

        space.appendChild(div);

        

        speedId++;

    }


}
