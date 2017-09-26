let navigatorMessageMap = {
    'mac'   : 'macos',
    'iphone': 'macos',
    'win'   : 'windows'
};

let platform = navigator.platform.toLowerCase();
let msg      = document.getElementsByClassName('download-message');

for (let key in navigatorMessageMap) {
    key = key.toLowerCase();
    let version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0){
        for (let i = 0; i < msg.length; i++) {
            let userPlatform = (msg[i].getAttribute('data-version') === version) ? true : false;
            if (userPlatform) {msg[i].classList.add('visible')}
        }
    }
}
