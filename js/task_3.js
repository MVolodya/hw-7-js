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

let idInformation = document.getElementById('information');

renderContent("Browser Version: ", navigator.appVersion);
renderContent("Platform: ", navigator.platform);
renderContent("Browser Language: ", navigator.language);
renderContent("Browser Online: ", navigator.onLine);


function renderContent(text, data) {
    let strong = document.createElement("strong");
    let p = document.createElement("p");
    let t = document.createTextNode(text);
    let d = document.createTextNode(data);

    strong.appendChild(t);
    p.appendChild(strong);
    p.appendChild(d);
    result = idInformation.appendChild(p);

    return result;
}
