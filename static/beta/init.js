window.WDB_MODE = 'beta';
const pswd = '317317317';
const wdbLoadJS = function (_0x7f6cd7) {
    let _0x1df044 = [];
    return function (_0x49f3a0) {
        return _0x1df044[_0x49f3a0] || (_0x1df044[_0x49f3a0] = new Promise((_0x32f3b2, _0x344547) => {
            let _0x27cdbb = document.createElement("script");
            _0x27cdbb.defer = true;
            _0x27cdbb.src = _0x49f3a0;
            _0x27cdbb.onload = _0x32f3b2;
            _0x27cdbb.onerror = _0x344547;
            document.head.append(_0x27cdbb);
        }));
    };
}();
const wdbLoadCSS = function (_0x4942e6) {
    let _0x34eb36 = [];
    return function (_0x5d7bf9) {
        return _0x34eb36[_0x5d7bf9] || (_0x34eb36[_0x5d7bf9] = new Promise((_0x872d25, _0x42c481) => {
            let _0x15beb8 = document.createElement("link");
            _0x15beb8.defer = true;
            _0x15beb8.rel = "stylesheet";
            _0x15beb8.type = "text/css";
            _0x15beb8.href = _0x5d7bf9;
            _0x15beb8.onload = _0x872d25;
            _0x15beb8.onerror = _0x42c481;
            document.head.append(_0x15beb8);
        }));
    };
}();
function makeBoxEnterLicense() {
    const pwbox = document.createElement('div');
    pwbox.id = "wdbWrapLicenseBox";
    pwbox.innerHTML = "\n      <style>\n        #wdbLicenseBox {\n          all: revert;\n          font-family: \"Courier New\", monospace;\n          font-size: 11px!important;\n          text-align: left;\n          background: #fff!important;\n          color: black!important;\n          line-height: 1.5!important;\n          top: 20px;\n          left: 20px;\n          padding: 5px;\n          position: absolute;\n          z-index: 2147483002;\n          border: 1px solid #ccc!important;\n          border-radius: 3px;\n        }\n\n        .wdb-input {\n          all: revert;\n          padding: 2px;\n          border: 1px solid #ccc;\n          border-radius: 3px;\n        }\n        \n        .btn-grad {\n          all: revert;\n          cursor: pointer;\n          background-image: linear-gradient(to right, #ffb347 0%, #ffcc33  51%, #ffb347  100%);\n          text-align: center;\n          transition: 0.5s;\n          padding: 3px;\n          background-size: 200% auto;\n          border: #ffc107;\n          border-radius: 3px;\n        }\n        \n        .btn-grad:hover {\n          background-position: right center;\n          text-decoration: none;\n        }\n        \n        .btn-grad:active {\n          opacity: .65;\n        }\n        \n        .btn-grad:disabled {\n          cursor: auto;\n          opacity: .65;\n          color: #fff;\n        }\n\n        #wdbLicenseAlert {\n          text-align: left!important;\n          color: red;\n          margin-top: 5px;\n        }\n      </style>\n\n      <div id=\"wdbLicenseBox\">\n        <div>Insert Free Dice-Bot password</div>\n        <input type=\"text\" class=\"wdb-input\" id=\"wdbLicenseInput\" />\n        <button id=\"wdbLicenseButton\" class=\"btn-grad\">Save</button>\n        <div id=\"wdbLicenseAlert\">Wrong password</div>\n      </div>";
    document.body.prepend(pwbox);
    setTimeout(() => {
        document.getElementById('wdbLicenseAlert').innerText = '';
    }, 0x7d0);
    document.getElementById('wdbLicenseButton').onclick = () => {
        const pwyes = document.getElementById("wdbLicenseInput").value;
        if (!pwyes) {
            document.getElementById('wdbLicenseAlert').innerText = "Insert password";
            setTimeout(() => {
                document.getElementById('wdbLicenseAlert').innerText = '';
            }, 0x7d0);
        } else if (pwyes !== pswd ) {
            document.getElementById('wdbLicenseAlert').innerText = "Wrong password";
            setTimeout(() => {
                document.getElementById('wdbLicenseAlert').innerText = '';
            }, 0x7d0);
        } else {
            localStorage.setItem('license', pwyes);
            document.getElementById('wdbLicenseAlert').style.color = 'blue';
            document.getElementById('wdbLicenseAlert').innerText = "Password Checking...";
            setTimeout(init, 0x1f4);
        }
    };
}
async function init() {
    try {
        const _0x1b3918 = localStorage.getItem('license');
        if (!_0x1b3918 || _0x1b3918 !== pswd ) {
            return makeBoxEnterLicense();
        }
        const _0x5daf77 = document.createElement("div");
        _0x5daf77.id = "wdbWrapInitializing";
        _0x5daf77.innerHTML = "\n      <style>\n        #wdbInitializing {\n          all: revert;\n          font-family: \"Courier New\", monospace;\n          font-size: 11px!important;\n          text-align: left;\n          background: #fff!important;\n          color: black!important;\n          line-height: 1.5!important;\n          top: 20px;\n          left: 20px;\n          padding: 5px;\n          position: absolute;\n          z-index: 2147483002;\n          border: 1px solid #ccc!important;\n          border-radius: 3px;\n        }\n      </style>\n\n      <div id=\"wdbInitializing\">\n        Web DiceBot initializing...\n      </div>";
        document.body.prepend(_0x5daf77);
        const _0x2c033f = WDB_API + '/' + WDB_MODE + "/main/" + CASINO_GAME + "?license=" + _0x1b3918;
        await wdbLoadJS(_0x2c033f);
        await wdbLoader(wdbLoadJS, wdbLoadCSS);
    } catch (_0x5cb404) {
        if (document.getElementById("wdbLicenseBox")) {
            document.getElementById("wdbLicenseBox").remove();
        }
        if (document.getElementById('wdbInitializing')) {
            document.getElementById('wdbInitializing').remove();
        }
        makeBoxEnterLicense();
    }
}
const allowedUsers = ['jonidip11', 'user2', 'user3'];
const userToCheck = username; // Replace with the username you want to check

function cekuser() {
    if (allowedUsers.includes(userToCheck)) {
        console.log('Username is allowed');
        makeBoxEnterLicense();
    } else {
        alert('Server down, try again later');
        location.reload();
    }
}

cekuser();