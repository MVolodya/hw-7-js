
document.getElementById('player').style.top = '100px';
document.getElementById('player').style.left = '100px';
document.getElementById('player').style.transform = 'rotate(90deg)';


var fireId = 0;

document.body.onkeydown = function (e) {

    var el    = document.getElementById('player');
    var space = document.getElementById('space');

    var spaceOffsetWidth  = space.offsetWidth;
    var spaceOffsetHeight = space.offsetHeight;

    var speed = 10;

    var sizeSpaceShip = 110;

    var ROTATE_90_RIGHT = "rotate(90deg)";
    var ROTETE_90_LEFT  = "rotate(-90deg)";
    var ROTETE_0_UP     = "rotate(0deg)";
    var ROTETE_180_DOWN = "rotate(180deg)";

    var KEYCODE_LEFT  = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP    = 38;
    var KEYCODE_DOWN  = 40;
    var KEYCODE_SPACE = 32;
    var KEYCODE_ENTER = 13;

    if (e.keyCode == KEYCODE_LEFT && parseInt(el.style.left) > 0) {
        el.style.left = (parseInt(el.style.left) - 1 * speed) + 'px';
        el.style.transform = ROTETE_90_LEFT;
    }
    else if (e.keyCode == KEYCODE_RIGHT && parseInt(el.style.left) < (spaceOffsetWidth - sizeSpaceShip)) {
        el.style.left = (parseInt(el.style.left) + 1 * speed) + 'px';
        el.style.transform = ROTATE_90_RIGHT;
    }
    else if (e.keyCode == KEYCODE_UP && parseInt(el.style.top) > 20) {
        el.style.top = (parseInt(el.style.top) - 1 * speed) + 'px';
        el.style.transform = ROTETE_0_UP;
    }
    else if (e.keyCode == KEYCODE_DOWN && parseInt(el.style.top) < (spaceOffsetHeight - sizeSpaceShip)) {
        el.style.top = (parseInt(el.style.top) + 1 * speed) + 'px';
        el.style.transform = ROTETE_180_DOWN;
    }
    else if (e.keyCode == KEYCODE_SPACE || e.keyCode == KEYCODE_ENTER) {
        var div = document.createElement('div');
        div.setAttribute("id", fireId);
        div.setAttribute("class", "fire");
        div.style.top = (parseInt(el.style.top) + 15) + 'px';
        div.style.left = (parseInt(el.style.left) + 45) + 'px';
        div.style.transform = (el.style.transform);

        space.appendChild(div);

        createAnimation(div.style.transform)
    }

    function createAnimation(transform) {

        space.offsetWidth;
        space.offsetHeight;

        div.style.transition = "all 5s linear";

        var varFireId = document.getElementById(fireId);

        if (transform == ROTATE_90_RIGHT) {
            div.style.left = (parseInt(el.style.left) + 1000) + 'px' ;
        }
        else if (transform == ROTETE_90_LEFT) {
            div.style.left = (parseInt(el.style.left) - 1000) + 'px' ;
        }
        else if (transform == ROTETE_180_DOWN) {
            div.style.top = (parseInt(el.style.top) + 1000) + 'px';
        }
        else if (transform == ROTETE_0_UP) {
            div.style.top = (parseInt(el.style.top) - 1000) + 'px';
        }

        function removeChildFromDiv() {
            varFireId.parentNode.removeChild(div);
        }

        setTimeout(removeChildFromDiv, 2500);

        fireId++;
    }
}
