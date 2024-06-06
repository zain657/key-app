var successBckgroundColor = 'rgb(53, 94, 14)';
var ent = document.getElementById('ent');
var ent2 = document.getElementById('ent2');
var bbttnn = document.getElementById('bbttnn');
var Keybord = document.getElementById('Keybord');
var btn = document.getElementById('btn');
var scren1 = document.getElementById('scren1');

var keysMap = {
    'Escape': document.getElementById('ecs'),
    'F1': document.getElementById('f1'),
    'F2': document.getElementById('f2'),
    'F3': document.getElementById('f3'),
    'F4': document.getElementById('f4'),
    'F5': document.getElementById('f5'),
    'F6': document.getElementById('f6'),
    'F7': document.getElementById('f7'),
    'F8': document.getElementById('f8'),
    'F9': document.getElementById('f9'),
    'F10': document.getElementById('f10'),
    'F11': document.getElementById('f11'),
    'F12': document.getElementById('f12'),
    'ScrollLock': document.getElementById('sl'),
    'Pause': document.getElementById('pb'),
    'Backquote': document.getElementById('b1'),
    'Digit1': document.getElementById('one'),
    'Digit2': document.getElementById('tow'),
    'Digit3': document.getElementById('three'),
    'Digit4': document.getElementById('four'),
    'Digit5': document.getElementById('five'),
    'Digit6': document.getElementById('six'),
    'Digit7': document.getElementById('seven'),
    'Digit8': document.getElementById('eight'),
    'Digit9': document.getElementById('nine'),
    'Digit0': document.getElementById('zero'),
    'Minus': document.getElementById('aaaaaa'),
    'Equal': document.getElementById('plus'),
    'Backspace': document.getElementById('bs'),
    'Insert': document.getElementById('insert'),
    'Home': document.getElementById('home'),
    'PageUp': document.getElementById('pu'),
    'NumLock': document.getElementById('nl'),
    'NumpadDivide': document.getElementById('ss'),
    'NumpadMultiply': document.getElementById('multipli'),
    'NumpadSubtract': document.getElementById('aa'),
    'Tab': document.getElementById('tab'),
    'KeyQ': document.getElementById('q'),
    'KeyW': document.getElementById('w'),
    'KeyE': document.getElementById('e'),
    'KeyR': document.getElementById('r'),
    'KeyT': document.getElementById('t'),
    'KeyY': document.getElementById('y'),
    'KeyU': document.getElementById('u'),
    'KeyI': document.getElementById('i'),
    'KeyO': document.getElementById('o'),
    'KeyP': document.getElementById('p'),
    'BracketLeft': document.getElementById('str'),
    'BracketRight': document.getElementById('stl'),
    'Enter': document.getElementById('enter'),
    'NumpadEnter': document.getElementById('enter2'),
    'Delete': document.getElementById('del'),
    'End': document.getElementById('end'),
    'PageDown': document.getElementById('pd'),
    'Numpad7': document.getElementById('seven2'),
    'Numpad8': document.getElementById('eight2'),
    'Numpad9': document.getElementById('nine2'),
    'NumpadAdd': document.getElementById('plus2'),
    'CapsLock': document.getElementById('cl'),
    'KeyA': document.getElementById('a'),
    'KeyS': document.getElementById('s'),
    'KeyD': document.getElementById('d'),
    'KeyF': document.getElementById('f'),
    'KeyG': document.getElementById('g'),
    'KeyH': document.getElementById('h'),
    'KeyJ': document.getElementById('j'),
    'KeyK': document.getElementById('k'),
    'KeyL': document.getElementById('l'),
    'Semicolon': document.getElementById('simicolumn'),
    'Quote': document.getElementById('tComa'),
    'Backslash': document.getElementById('sss'),
    'Numpad4': document.getElementById('four2'),
    'Numpad5': document.getElementById('five2'),
    'Numpad6': document.getElementById('six2'),
    'ps': document.getElementById('ps'),

    'ShiftLeft': document.getElementById('Shift'),
    'IntlBackslash': document.getElementById('ssss'),
    'KeyZ': document.getElementById('z'),
    'KeyX': document.getElementById('x'),
    'KeyC': document.getElementById('c'),
    'KeyV': document.getElementById('v'),
    'KeyB': document.getElementById('b'),
    'KeyN': document.getElementById('n'),
    'KeyM': document.getElementById('m'),
    'Comma': document.getElementById('bComa'),
    'Period': document.getElementById('point'),
    'Slash': document.getElementById('qmark'),
    'ShiftRight': document.getElementById('Shift1'),
    'ArrowUp': document.getElementById('top'),
    'Numpad1': document.getElementById('one2'),
    'Numpad2': document.getElementById('tow2'),
    'Numpad3': document.getElementById('three2'),

    'ControlLeft': document.getElementById('ctrl1'),
    'MetaLeft': document.getElementById('ws1'),
    'AltLeft': document.getElementById('alt1'),
    'Space': document.getElementById('space'),
    'AltRight': document.getElementById('ag'),
    'MetaRight': document.getElementById('ws2'),
    'ContextMenu': document.getElementById('paper'),
    'ControlRight': document.getElementById('ctrl2'),
    'ArrowLeft': document.getElementById('arrl'),
    'ArrowDown': document.getElementById('arrt'),
    'ArrowRight': document.getElementById('arrr'),
    'Numpad0': document.getElementById('zero2'),
    'NumpadDecimal': document.getElementById('point2')
};


btn.addEventListener('click', function () {
    Keybord.classList.replace('d-none', 'd-block');
    btn.classList.add('d-none');


    function efect(key) {
        key.style.backgroundColor = successBckgroundColor;
        key.style.transform = 'scale(.9)';
        key.style.borderRadius = "10px";
    }


    document.addEventListener('keydown', function (event) {
        event.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        var keyCode = e.code;
        if (keysMap[keyCode]) {
            efect(keysMap[keyCode]);
            scren1.innerHTML = e.key;
            completionButton();
        }
    });

    function btncomblete(ent) {
        ent.style.backgroundColor = successBckgroundColor;
        ent.style.transform = 'scale(.9)';
        ent.style.borderRadius = "10px";
    }



    function completionButton() {
        if (getComputedStyle(keysMap['Enter']).backgroundColor === successBckgroundColor) {
            btncomblete(ent);
        }
        if (getComputedStyle(keysMap['NumpadAdd']).backgroundColor === successBckgroundColor) {
            btncomblete(bbttnn);
        }
        if (getComputedStyle(keysMap['NumpadEnter']).backgroundColor === successBckgroundColor) {
            btncomblete(ent2);
        }
    }


})

