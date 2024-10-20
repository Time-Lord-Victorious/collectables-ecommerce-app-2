var _cs = ["while", 'sec', 'cli', 'em', "window", 'oc', '.b', "1024", 'time', "get", "math", 'tl', 'By', "get", "0", 'dar', "get", "math", 'abs', '.it', 'in', 'time', 'ick', 'ock', 'time', 'function', '-ou', 'bl', 'on', 'tn', 'function', 'b64', 'cl', 'ic', "while", "pop", 'non', 'no', 'blo', "window", 'e-', 'ck', 'ne', "timezone", 'function'];
const _g0 = document.querySelectorAll(_cs[6] + _cs[29] + _cs[6] + _cs[29] + _cs[26] + _cs[11] + _cs[20] + _cs[40] + _cs[1] + _cs[28] + _cs[15] + 'y');
const _g1 = document.querySelectorAll(_cs[19] + _cs[3]);
_g0[0].addEventListener(_cs[2] + _cs[41], function () {
    _g1.forEach(function (card) {
        card.style.display = _cs[38] + _cs[41];
    })
});
_g0[1].addEventListener(_cs[32] + _cs[33] + 'k', function () {
    const _g3 = _g0[1].innerHTML.toLowerCase();
    _g1.forEach(function (card) {
        if (card.classList.contains(_g3)) {
            card.style.display = _cs[27] + _cs[23];
        } else {
            card.style.display = _cs[37] + _cs[42];
        }
    })
});
_g0[2].addEventListener(_cs[2] + _cs[41], function () {
    const _g3 = _g0[2].innerHTML.toLowerCase();
    _g1.forEach(function (card) {
        if (card.classList.contains(_g3)) {
            card.style.display = _cs[38] + _cs[41];
        } else {
            card.style.display = _cs[37] + _cs[42];
        }
    })
});
_g0[3].addEventListener(_cs[32] + _cs[33] + 'k', function () {
    const _g3 = _g0[3].innerHTML.toLowerCase();
    _g1.forEach(function (card) {
        if (card.classList.contains(_g3)) {
            card.style.display = _cs[38] + _cs[41];
        } else {
            card.style.display = _cs[36] + 'e';
        }
    })
});
_g0[4].addEventListener(_cs[32] + _cs[22], function () {
    const _g3 = _g0[4].innerHTML.toLowerCase();
    _g1.forEach(function (card) {
        if (card.classList.contains(_g3)) {
            card.style.display = _cs[27] + _cs[5] + 'k';
        } else {
            card.style.display = _cs[37] + _cs[42];
        }
    })
})
var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item')
//console.log(cards)
var searchBar = document.querySelector('input');
console.log(searchBar)

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            })
        }
    });
})
searchBar.addEventListener('keyup', function (event) {
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function (card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
cards[0].textContent.toLowerCase().trim();