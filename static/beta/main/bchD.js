const _0x4881a2 = _0x4642;
(function (_0x281768, _0x23324e) {
    const _0x16da01 = _0x4642, _0x1d3fb5 = _0x281768();
    while (!![]) {
        try {
            const _0x4ef9ed = -parseInt(_0x16da01(0xed)) / 0x1 * (parseInt(_0x16da01(0x118)) / 0x2) + -parseInt(_0x16da01(0x217)) / 0x3 * (parseInt(_0x16da01(0x143)) / 0x4) + -parseInt(_0x16da01(0x112)) / 0x5 * (parseInt(_0x16da01(0x362)) / 0x6) + parseInt(_0x16da01(0x1f6)) / 0x7 + -parseInt(_0x16da01(0x2ad)) / 0x8 + parseInt(_0x16da01(0x18d)) / 0x9 + parseInt(_0x16da01(0xf9)) / 0xa;
            if (_0x4ef9ed === _0x23324e)
                break;
            else
                _0x1d3fb5['push'](_0x1d3fb5['shift']());
        } catch (_0x5e3e5f) {
            _0x1d3fb5['push'](_0x1d3fb5['shift']());
        }
    }
}(_0x19bc, 0x4b238), darkMode = ![], mode = 'lua', game = _0x4881a2(0x340), run = ![], win = ![], sOW = ![], startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x4881a2(0x335), bethigh = !![], target = 0x0, result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
    'amount': 0x0,
    'Amount': 0x0,
    'chance': 0x0,
    'Chance': 0x0,
    'roll': 0x0,
    'Roll': 0x0,
    'profit': 0x0,
    'Profit': 0x0,
    'target': 0x0,
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSpeed = null, wdbTimer = null, wdbSound = new Object(new Audio(WDB_API + '/' + WDB_MODE + _0x4881a2(0x194))), wdbUI = _0x4881a2(0x2e6) + CASINO_GAME + '\x20|\x20' + WDB_MODE + _0x4881a2(0x10d) + location['hostname']['replace']('www.', '') + _0x4881a2(0x2bd));
function changeMaxRows() {
    const _0x4adffa = _0x4881a2, _0x113722 = {
            'WhWNz': _0x4adffa(0x24f),
            'VHAUJ': function (_0x1444af) {
                return _0x1444af();
            }
        };
    maxRows = Number(document['getElementById'](_0x113722['WhWNz'])[_0x4adffa(0x2a6)]), _0x113722[_0x4adffa(0x138)](resetchart), resethistory(), resetlog();
}
function toggleDarkMode() {
    const _0x49c066 = _0x4881a2, _0x1fea1a = {
            'mxCmN': _0x49c066(0x159),
            'QHmLN': _0x49c066(0x2d7),
            'CPkeS': _0x49c066(0x12f),
            'poobR': _0x49c066(0x31a),
            'wCWTt': _0x49c066(0x156),
            'jMnLt': _0x49c066(0x1da),
            'oKqWE': '#fff',
            'FUVtR': _0x49c066(0x135),
            'aJurx': '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
            'lXoUG': _0x49c066(0xc4),
            'wJmsK': '#wdbWrapFunctions\x20pre',
            'ihAzZ': _0x49c066(0x22e),
            'bqVAv': _0x49c066(0x224),
            'ETJdM': function (_0x552ed8) {
                return _0x552ed8();
            }
        };
    darkMode = !darkMode;
    if (darkMode)
        document['getElementById'](_0x1fea1a['mxCmN'])[_0x49c066(0x285)][_0x49c066(0x30a)] = _0x1fea1a['QHmLN'], document[_0x49c066(0x16a)](_0x1fea1a[_0x49c066(0x167)])[_0x49c066(0x285)]['color'] = '#fff', chart[_0x49c066(0x321)][_0x49c066(0x156)] = _0x1fea1a[_0x49c066(0x37f)], chart[_0x49c066(0x226)](), luaEditor[_0x49c066(0x13e)](_0x49c066(0x156), _0x1fea1a['poobR']), jsEditor[_0x49c066(0x13e)](_0x1fea1a[_0x49c066(0x13d)], _0x1fea1a[_0x49c066(0xc1)]), document['querySelector'](_0x49c066(0x1da))[_0x49c066(0x285)][_0x49c066(0x30a)] = _0x1fea1a['QHmLN'], document[_0x49c066(0x291)](_0x1fea1a[_0x49c066(0x1bc)])['style'][_0x49c066(0x12c)] = _0x1fea1a[_0x49c066(0x1dc)], document[_0x49c066(0x291)](_0x49c066(0x2ca))[_0x49c066(0x285)]['backgroundColor'] = _0x1fea1a[_0x49c066(0x214)], document[_0x49c066(0x291)](_0x49c066(0x2ca))[_0x49c066(0x285)]['color'] = _0x1fea1a[_0x49c066(0x1dc)], document['querySelector'](_0x49c066(0x135))[_0x49c066(0x285)][_0x49c066(0x30a)] = _0x1fea1a[_0x49c066(0x214)], document[_0x49c066(0x291)](_0x1fea1a[_0x49c066(0x318)])[_0x49c066(0x285)][_0x49c066(0x12c)] = _0x1fea1a['oKqWE'], document[_0x49c066(0x1d7)](_0x1fea1a[_0x49c066(0x15d)])[_0x49c066(0x169)](_0x9681d5 => _0x9681d5['style'][_0x49c066(0x12c)] = '#fff');
    else {
        const _0x15ec5f = _0x1fea1a[_0x49c066(0x352)][_0x49c066(0x11e)]('|');
        let _0x5de701 = 0x0;
        while (!![]) {
            switch (_0x15ec5f[_0x5de701++]) {
            case '0':
                document[_0x49c066(0x291)](_0x1fea1a[_0x49c066(0x2b8)])[_0x49c066(0x285)][_0x49c066(0x12c)] = _0x1fea1a[_0x49c066(0x20c)];
                continue;
            case '1':
                luaEditor[_0x49c066(0x13e)](_0x49c066(0x156), _0x49c066(0x356));
                continue;
            case '2':
                document[_0x49c066(0x1d7)](_0x1fea1a[_0x49c066(0x15d)])['forEach'](_0x31eae5 => _0x31eae5[_0x49c066(0x285)][_0x49c066(0x12c)] = _0x49c066(0x22e));
                continue;
            case '3':
                document[_0x49c066(0x291)](_0x1fea1a[_0x49c066(0x1bc)])[_0x49c066(0x285)][_0x49c066(0x30a)] = _0x1fea1a[_0x49c066(0x1dc)];
                continue;
            case '4':
                chart[_0x49c066(0x226)]();
                continue;
            case '5':
                document['getElementById'](_0x1fea1a[_0x49c066(0x167)])['style'][_0x49c066(0x30a)] = _0x1fea1a[_0x49c066(0x1dc)];
                continue;
            case '6':
                document[_0x49c066(0x16a)](_0x49c066(0x159))[_0x49c066(0x285)][_0x49c066(0x12c)] = _0x1fea1a[_0x49c066(0x20c)];
                continue;
            case '7':
                document['querySelector'](_0x49c066(0x135))[_0x49c066(0x285)][_0x49c066(0x12c)] = _0x1fea1a['ihAzZ'];
                continue;
            case '8':
                document[_0x49c066(0x291)](_0x1fea1a['jMnLt'])[_0x49c066(0x285)][_0x49c066(0x12c)] = _0x1fea1a['ihAzZ'];
                continue;
            case '9':
                jsEditor[_0x49c066(0x13e)](_0x49c066(0x156), _0x49c066(0x356));
                continue;
            case '10':
                chart[_0x49c066(0x321)][_0x49c066(0x156)] = _0x1fea1a['bqVAv'];
                continue;
            case '11':
                document[_0x49c066(0x291)](_0x1fea1a[_0x49c066(0x2b8)])[_0x49c066(0x285)][_0x49c066(0x30a)] = _0x49c066(0x198);
                continue;
            case '12':
                document[_0x49c066(0x291)](_0x1fea1a['FUVtR'])[_0x49c066(0x285)][_0x49c066(0x30a)] = _0x1fea1a['oKqWE'];
                continue;
            }
            break;
        }
    }
    _0x1fea1a['ETJdM'](updateStats);
}
function toggleMinimalBot(_0x117880) {
    const _0xa91651 = _0x4881a2, _0x1d41bc = {
            'hIbku': function (_0x490160, _0x29779b) {
                return _0x490160 === _0x29779b;
            },
            'RuwPw': '5|3|4|1|6|2|0',
            'RYFbq': _0xa91651(0x159),
            'NFCmc': _0xa91651(0x336),
            'beMbt': _0xa91651(0x272),
            'ntmZL': _0xa91651(0x295),
            'CUzzl': _0xa91651(0x1fc),
            'oYPTY': _0xa91651(0x2df),
            'SrCcL': _0xa91651(0x31c),
            'ANvdW': _0xa91651(0x188),
            'yjtNw': _0xa91651(0x1df),
            'kdKsD': _0xa91651(0x2e9),
            'AZvTY': _0xa91651(0x348),
            'xsMCh': _0xa91651(0x244)
        };
    if (_0x1d41bc['hIbku'](_0x117880[_0xa91651(0xbc)], '▼')) {
        const _0x311365 = _0x1d41bc['RuwPw'][_0xa91651(0x11e)]('|');
        let _0x20cbb1 = 0x0;
        while (!![]) {
            switch (_0x311365[_0x20cbb1++]) {
            case '0':
                _0x117880[_0xa91651(0xbc)] = '▲';
                continue;
            case '1':
                document[_0xa91651(0x16a)](_0x1d41bc[_0xa91651(0xf3)])['style']['top'] = _0x1d41bc[_0xa91651(0x2ed)];
                continue;
            case '2':
                document['getElementById'](_0xa91651(0x159))[_0xa91651(0x285)]['position'] = _0x1d41bc[_0xa91651(0x350)];
                continue;
            case '3':
                document['getElementById'](_0x1d41bc[_0xa91651(0xc8)])[_0xa91651(0x285)][_0xa91651(0x19e)] = _0x1d41bc['CUzzl'];
                continue;
            case '4':
                document['getElementById'](_0x1d41bc['RYFbq'])['style'][_0xa91651(0x1f3)] = _0x1d41bc['oYPTY'];
                continue;
            case '5':
                document[_0xa91651(0x16a)](_0x1d41bc[_0xa91651(0x292)])[_0xa91651(0x285)][_0xa91651(0x19e)] = _0x1d41bc[_0xa91651(0x17e)];
                continue;
            case '6':
                document[_0xa91651(0x16a)](_0xa91651(0x159))[_0xa91651(0x285)][_0xa91651(0x278)] = _0x1d41bc['ANvdW'];
                continue;
            }
            break;
        }
    } else {
        const _0x43a53c = _0x1d41bc[_0xa91651(0x276)][_0xa91651(0x11e)]('|');
        let _0x99e341 = 0x0;
        while (!![]) {
            switch (_0x43a53c[_0x99e341++]) {
            case '0':
                document[_0xa91651(0x16a)](_0x1d41bc['RYFbq'])[_0xa91651(0x285)][_0xa91651(0x1f3)] = _0x1d41bc[_0xa91651(0x14a)];
                continue;
            case '1':
                document['getElementById'](_0x1d41bc[_0xa91651(0xc8)])[_0xa91651(0x285)]['display'] = _0xa91651(0x348);
                continue;
            case '2':
                document['getElementById'](_0x1d41bc['SrCcL'])[_0xa91651(0x285)]['display'] = _0x1d41bc[_0xa91651(0x2e7)];
                continue;
            case '3':
                document['getElementById']('wdb')['style']['left'] = _0x1d41bc[_0xa91651(0x309)];
                continue;
            case '4':
                _0x117880[_0xa91651(0xbc)] = '▼';
                continue;
            case '5':
                document[_0xa91651(0x16a)](_0x1d41bc[_0xa91651(0xf3)])[_0xa91651(0x285)][_0xa91651(0x37b)] = _0x1d41bc[_0xa91651(0x309)];
                continue;
            }
            break;
        }
    }
}
function _0x4642(_0x5287c5, _0x66c51d) {
    const _0x19bcd3 = _0x19bc();
    return _0x4642 = function (_0x464263, _0x1a0ced) {
        _0x464263 = _0x464263 - 0xba;
        let _0x461b42 = _0x19bcd3[_0x464263];
        return _0x461b42;
    }, _0x4642(_0x5287c5, _0x66c51d);
}
function toggleHideControlBot(_0x2c198d) {
    const _0x55f341 = _0x4881a2, _0x3744ac = {
            'pVdqX': function (_0x3a4e64, _0x2c21a3) {
                return _0x3a4e64 === _0x2c21a3;
            },
            'VrJrF': _0x55f341(0x2a1),
            'SOFbY': _0x55f341(0x1fc),
            'cwgsr': _0x55f341(0x2f7)
        };
    _0x3744ac[_0x55f341(0x247)](_0x2c198d[_0x55f341(0xbc)], '▲') ? (document['getElementById'](_0x3744ac[_0x55f341(0x1f0)])[_0x55f341(0x285)]['display'] = _0x3744ac['SOFbY'], _0x2c198d['innerText'] = '▼') : (document[_0x55f341(0x16a)](_0x3744ac[_0x55f341(0x1f0)])[_0x55f341(0x285)]['display'] = _0x3744ac[_0x55f341(0x36d)], _0x2c198d['innerText'] = '▲');
}
function drawSelectCoin() {
    const _0x47b2e4 = _0x4881a2, _0x4a28c4 = {
            'WYmcW': function (_0xaf8fb7, _0x42e9df) {
                return _0xaf8fb7(_0x42e9df);
            }
        };
    let _0x479f66 = '';
    coins[_0x47b2e4(0x2d2)](_0xe1fee2 => {
        const _0x20d773 = _0x47b2e4;
        _0x479f66 += _0x20d773(0x29b) + _0xe1fee2 + '\x22>' + _0xe1fee2 + _0x20d773(0x2ce);
    }), document[_0x47b2e4(0x16a)](_0x47b2e4(0x1d6))['innerHTML'] = _0x479f66, currency = _0x4a28c4[_0x47b2e4(0x1a0)](String, coin)[_0x47b2e4(0x250)](), fengari[_0x47b2e4(0x36e)](_0x47b2e4(0xff) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x154d63 = _0x4881a2, _0x2c960f = {
            'DcbiM': _0x154d63(0xd7),
            'eHDaw': function (_0x42dac9, _0x3ec051) {
                return _0x42dac9 - _0x3ec051;
            },
            'pwGdj': function (_0x53279c, _0x135fc5) {
                return _0x53279c + _0x135fc5;
            },
            'BOpEi': function (_0x1bd995, _0x7780fc) {
                return _0x1bd995 + _0x7780fc;
            },
            'MjbOc': function (_0x13f758, _0x507ee9) {
                return _0x13f758 - _0x507ee9;
            },
            'bKlFV': function (_0x24947e, _0x48c34d) {
                return _0x24947e + _0x48c34d;
            },
            'JcqrL': function (_0x36c98f, _0x1699c6) {
                return _0x36c98f + _0x1699c6;
            },
            'mqKUe': function (_0x577a5e, _0x1663a8) {
                return _0x577a5e + _0x1663a8;
            },
            'sHdKz': 'wdbTime',
            'pSVVx': _0x154d63(0x127),
            'UaOei': _0x154d63(0x34f),
            'xLTtZ': _0x154d63(0x295),
            'necSs': _0x154d63(0x306),
            'vEJKa': _0x154d63(0x133),
            'qRkdn': _0x154d63(0x356),
            'AkaDB': _0x154d63(0x2a5),
            'gNUMX': _0x154d63(0x1ac),
            'bSXMu': _0x154d63(0x152),
            'IIclH': _0x154d63(0x1fc),
            'MDzpb': _0x154d63(0x284),
            'tDeFL': _0x154d63(0x2e3),
            'MTCIP': 'wdbWrapVariables',
            'OZWfL': 'wdbWrapFunctions',
            'hIDbt': _0x154d63(0x375),
            'FdwGv': _0x154d63(0x1b2),
            'qPRbH': _0x154d63(0x311),
            'budhy': 'change',
            'Jwgyf': _0x154d63(0x140),
            'KTOdE': function (_0x4ec03c) {
                return _0x4ec03c();
            }
        }, _0x568286 = document[_0x154d63(0x2e5)](_0x2c960f['pSVVx']);
    _0x568286['id'] = _0x154d63(0x241), _0x568286[_0x154d63(0x1a1)] = wdbUI, document[_0x154d63(0x332)][_0x154d63(0x274)](_0x568286);
    const _0x7be8d6 = document[_0x154d63(0x16a)](_0x154d63(0x159));
    let _0x32ee38 = 0x0, _0x47da07 = 0x0, _0xd1e24f = 0x0, _0x35408a = 0x0;
    document['getElementById'](_0x2c960f[_0x154d63(0x1d0)]) ? document[_0x154d63(0x16a)](_0x2c960f[_0x154d63(0x1d0)])['onmousedown'] = _0x2330ce : _0x7be8d6[_0x154d63(0x117)] = _0x2330ce, document[_0x154d63(0x16a)](_0x2c960f[_0x154d63(0x34b)]) ? document[_0x154d63(0x16a)](_0x2c960f[_0x154d63(0x34b)])[_0x154d63(0x117)] = _0x2330ce : _0x7be8d6[_0x154d63(0x117)] = _0x2330ce;
    function _0x2330ce(_0x2d9c26) {
        const _0x26cf6a = _0x154d63;
        _0x2d9c26 = _0x2d9c26 || window[_0x26cf6a(0x2b6)], _0x2d9c26['preventDefault'](), _0xd1e24f = _0x2d9c26[_0x26cf6a(0xfa)], _0x35408a = _0x2d9c26[_0x26cf6a(0xee)], document[_0x26cf6a(0x1fa)] = _0x2dacb5, document['onmousemove'] = _0xe6bd21;
    }
    function _0xe6bd21(_0x1adf79) {
        const _0x9cb781 = _0x154d63, _0x4d66de = _0x2c960f['DcbiM'][_0x9cb781(0x11e)]('|');
        let _0x239395 = 0x0;
        while (!![]) {
            switch (_0x4d66de[_0x239395++]) {
            case '0':
                _0x35408a = _0x1adf79[_0x9cb781(0xee)];
                continue;
            case '1':
                _0x47da07 = _0x2c960f['eHDaw'](_0x35408a, _0x1adf79[_0x9cb781(0xee)]);
                continue;
            case '2':
                _0x1adf79['preventDefault']();
                continue;
            case '3':
                _0x1adf79 = _0x1adf79 || window[_0x9cb781(0x2b6)];
                continue;
            case '4':
                _0x7be8d6['style']['left'] = _0x2c960f[_0x9cb781(0x10c)](_0x2c960f[_0x9cb781(0xc9)](_0x7be8d6[_0x9cb781(0x33b)], _0x32ee38), 'px');
                continue;
            case '5':
                _0x32ee38 = _0x2c960f[_0x9cb781(0xc9)](_0xd1e24f, _0x1adf79['clientX']);
                continue;
            case '6':
                _0x7be8d6['style'][_0x9cb781(0x37b)] = _0x2c960f[_0x9cb781(0x376)](_0x2c960f[_0x9cb781(0x314)](_0x7be8d6[_0x9cb781(0x180)], _0x47da07), 'px');
                continue;
            case '7':
                _0xd1e24f = _0x1adf79[_0x9cb781(0xfa)];
                continue;
            }
            break;
        }
    }
    function _0x2dacb5() {
        const _0x42d13a = _0x154d63;
        document[_0x42d13a(0x1fa)] = null, document['onmousemove'] = null;
    }
    if (document[_0x154d63(0x16a)](_0x2c960f[_0x154d63(0x2de)]))
        document[_0x154d63(0x16a)](_0x2c960f['necSs'])[_0x154d63(0x17c)]();
    if (document['getElementById'](_0x2c960f[_0x154d63(0x259)]))
        document[_0x154d63(0x16a)](_0x2c960f[_0x154d63(0x259)])[_0x154d63(0x17c)]();
    luaEditor = CodeMirror[_0x154d63(0xc7)](document['getElementById'](_0x154d63(0x21d)), {
        'theme': _0x2c960f[_0x154d63(0x210)],
        'mode': _0x2c960f[_0x154d63(0x166)],
        'lineNumbers': !![]
    }), luaEditor[_0x154d63(0x346)](), jsEditor = CodeMirror[_0x154d63(0xc7)](document['getElementById'](_0x154d63(0x121)), {
        'theme': _0x2c960f[_0x154d63(0x210)],
        'mode': _0x2c960f[_0x154d63(0x1ee)],
        'lineNumbers': !![]
    }), jsEditor['save'](), wdbSpeed = new MySpeed(), wdbTimer = new easytimer['Timer'](), wdbTimer[_0x154d63(0x13f)](_0x2c960f[_0x154d63(0x16e)], () => {
        const _0x1a4493 = _0x154d63, _0xccf0f4 = _0x2c960f[_0x1a4493(0x313)](_0x2c960f[_0x1a4493(0x1eb)](_0x2c960f[_0x1a4493(0x10a)](_0x2c960f[_0x1a4493(0x10a)](wdbTimer['getTimeValues']()['days'], ':'), wdbTimer['getTimeValues']()[_0x1a4493(0x31e)]), ':') + wdbTimer[_0x1a4493(0x28f)]()[_0x1a4493(0x21c)], ':') + wdbTimer[_0x1a4493(0x28f)]()[_0x1a4493(0x165)];
        document[_0x1a4493(0x16a)](_0x2c960f[_0x1a4493(0x343)])['innerText'] = _0xccf0f4;
    }), document['getElementById'](_0x154d63(0x142))['style'][_0x154d63(0x19e)] = _0x2c960f['IIclH'], document[_0x154d63(0x16a)](_0x2c960f['MDzpb'])[_0x154d63(0x285)]['display'] = _0x2c960f[_0x154d63(0x1ad)], document[_0x154d63(0x16a)](_0x2c960f['tDeFL'])['style'][_0x154d63(0x19e)] = _0x2c960f[_0x154d63(0x1ad)], document['getElementById'](_0x2c960f['MTCIP'])[_0x154d63(0x285)]['display'] = 'none', document[_0x154d63(0x16a)](_0x2c960f['OZWfL'])[_0x154d63(0x285)]['display'] = _0x2c960f[_0x154d63(0x1ad)], document['getElementById'](_0x2c960f[_0x154d63(0xbe)])['style'][_0x154d63(0x19e)] = _0x154d63(0x1fc), document[_0x154d63(0x16a)](_0x2c960f[_0x154d63(0x282)])[_0x154d63(0x365)] = !![], luaFileSelector = document[_0x154d63(0x16a)](_0x154d63(0x29c)), luaFileSelector[_0x154d63(0x13f)](_0x2c960f[_0x154d63(0x2fa)], function () {
        const _0x1cfdaa = _0x154d63;
        luaFileSelector[_0x1cfdaa(0x2a6)] = null;
    }), luaFileSelector[_0x154d63(0x13f)](_0x2c960f[_0x154d63(0x35d)], async _0x55ced5 => {
        const _0x5265c1 = _0x154d63, _0x470a5f = await new Response(_0x55ced5[_0x5265c1(0xf2)]['files'][0x0])['text']();
        if (!_0x470a5f)
            return;
        luaEditor[_0x5265c1(0x308)](_0x470a5f);
    }), jsFileSelector = document[_0x154d63(0x16a)](_0x2c960f['Jwgyf']), jsFileSelector['addEventListener'](_0x2c960f[_0x154d63(0x2fa)], function () {
        const _0x314935 = _0x154d63;
        jsFileSelector[_0x314935(0x2a6)] = null;
    }), jsFileSelector[_0x154d63(0x13f)](_0x2c960f['budhy'], async _0x3e8a29 => {
        const _0x5accb7 = _0x154d63, _0x46278d = await new Response(_0x3e8a29[_0x5accb7(0xf2)]['files'][0x0])[_0x5accb7(0x277)]();
        if (!_0x46278d)
            return;
        jsEditor[_0x5accb7(0x308)](_0x46278d);
    }), _0x2c960f[_0x154d63(0x361)](drawChart);
}
async function wdbLoader(_0x410bd2, _0x4274dd) {
    const _0x4468d8 = _0x4881a2, _0x266c8f = {
            'TfOzc': _0x4468d8(0x114),
            'VylJD': function (_0x42a821) {
                return _0x42a821();
            },
            'IjQoy': function (_0x2734ad) {
                return _0x2734ad();
            },
            'hoEZQ': function (_0x3b244c, _0xda8841) {
                return _0x3b244c(_0xda8841);
            },
            'WlghB': _0x4468d8(0x2a7),
            'yNjZF': function (_0x569359, _0x2b9156) {
                return _0x569359 + _0x2b9156;
            },
            'WCWBt': _0x4468d8(0x34d),
            'WLIxS': function (_0x3173db, _0x1a20f7) {
                return _0x3173db(_0x1a20f7);
            },
            'UrHmg': _0x4468d8(0x35c),
            'PbXaF': function (_0x1f88a4, _0x5aba59) {
                return _0x1f88a4 + _0x5aba59;
            },
            'NWtEU': '/lib/chart.js',
            'YJKQE': _0x4468d8(0x1ae),
            'VjlWW': _0x4468d8(0xeb),
            'DGyuY': function (_0x1812dc, _0x4e3786) {
                return _0x1812dc(_0x4e3786);
            },
            'eUZkX': function (_0x2d06c4, _0x3818c5) {
                return _0x2d06c4 + _0x3818c5;
            },
            'lhDZM': function (_0x5232a1, _0x34a34b) {
                return _0x5232a1 + _0x34a34b;
            },
            'tPoUB': function (_0x5d48d5, _0x2d1edb) {
                return _0x5d48d5(_0x2d1edb);
            },
            'ouoSQ': _0x4468d8(0x119),
            'Isndu': _0x4468d8(0x264),
            'CizCn': function (_0x26bf3c, _0x122bd1) {
                return _0x26bf3c(_0x122bd1);
            },
            'Femcc': function (_0x31f6fa, _0x1e501b) {
                return _0x31f6fa(_0x1e501b);
            },
            'SIUqQ': function (_0xd35542, _0x114d06) {
                return _0xd35542(_0x114d06);
            },
            'XcNfu': _0x4468d8(0x330)
        }, _0xc02695 = _0x266c8f['TfOzc']['split']('|');
    let _0x17dded = 0x0;
    while (!![]) {
        switch (_0xc02695[_0x17dded++]) {
        case '0':
            await _0x266c8f['VylJD'](wdbCreateUI);
            continue;
        case '1':
            _0x266c8f['IjQoy'](initLua);
            continue;
        case '2':
            await getListCoin();
            continue;
        case '3':
            await _0x266c8f[_0x4468d8(0x36c)](_0x410bd2, _0x266c8f[_0x4468d8(0x268)]);
            continue;
        case '4':
            await _0x410bd2(_0x266c8f[_0x4468d8(0x1cb)](_0x266c8f[_0x4468d8(0x1cb)](_0x266c8f[_0x4468d8(0x1cb)](WDB_API, '/'), WDB_MODE), _0x266c8f['WCWBt']));
            continue;
        case '5':
            await _0x266c8f[_0x4468d8(0x2d8)](_0x410bd2, _0x266c8f[_0x4468d8(0x2a3)]);
            continue;
        case '6':
            await _0x266c8f[_0x4468d8(0x2d8)](_0x410bd2, _0x266c8f[_0x4468d8(0x1a8)](_0x266c8f['yNjZF'](WDB_API + '/', WDB_MODE), _0x266c8f['NWtEU']));
            continue;
        case '7':
            await beforeWork(_0x410bd2);
            continue;
        case '8':
            await _0x4274dd(_0x266c8f[_0x4468d8(0x281)]);
            continue;
        case '9':
            return _0x266c8f[_0x4468d8(0x262)];
        case '10':
            await _0x266c8f[_0x4468d8(0x1dd)](_0x410bd2, _0x266c8f['eUZkX'](_0x266c8f[_0x4468d8(0x35e)](WDB_API, '/') + WDB_MODE, '/lib/ms.js'));
            continue;
        case '11':
            await _0x266c8f[_0x4468d8(0x168)](_0x4274dd, _0x266c8f[_0x4468d8(0x17d)]);
            continue;
        case '12':
            await _0x266c8f[_0x4468d8(0x2d8)](_0x410bd2, _0x266c8f[_0x4468d8(0x36b)]);
            continue;
        case '13':
            await _0x266c8f['CizCn'](_0x410bd2, _0x4468d8(0x2f8));
            continue;
        case '14':
            _0x266c8f['Femcc'](log, _0x4468d8(0xdb));
            continue;
        case '15':
            await _0x266c8f['SIUqQ'](_0x410bd2, _0x266c8f[_0x4468d8(0x1a8)](_0x266c8f[_0x4468d8(0x1a8)](WDB_API + '/', WDB_MODE), _0x266c8f[_0x4468d8(0x1fe)]));
            continue;
        }
        break;
    }
}
function toggleNav(_0x1a724f) {
    const _0xb49d26 = _0x4881a2, _0x29fce5 = {
            'hJbrV': function (_0x3d7543, _0x579d73) {
                return _0x3d7543 === _0x579d73;
            },
            'NfRCb': _0xb49d26(0x235),
            'Nxhjp': _0xb49d26(0x22b),
            'FYHDe': _0xb49d26(0x348),
            'VQwUk': 'wdbWrapLog',
            'aLElj': _0xb49d26(0xd5),
            'HPOjB': _0xb49d26(0x1fc),
            'epiab': 'wdbShowFunctions',
            'LPHdO': _0xb49d26(0x158),
            'bgsfW': 'wdbWrapTips',
            'pfixp': _0xb49d26(0x2f4),
            'vKQUU': function (_0x462448, _0x150e66) {
                return _0x462448 === _0x150e66;
            },
            'jbPem': _0xb49d26(0x24a),
            'whzXL': _0xb49d26(0x141),
            'zrryS': _0xb49d26(0x1b2),
            'UgiRQ': _0xb49d26(0x1d2),
            'AmkeF': 'wdbWrapMode',
            'VaqTk': _0xb49d26(0x377),
            'bIPyf': _0xb49d26(0x171),
            'BZWCC': _0xb49d26(0xdc),
            'SHZCc': function (_0x495b16, _0x510d57) {
                return _0x495b16 === _0x510d57;
            },
            'BOmDx': 'functions',
            'xeHLY': function (_0xe4d93d, _0x15b7b1) {
                return _0xe4d93d === _0x15b7b1;
            },
            'QGiDl': _0xb49d26(0x19a)
        };
    if (_0x29fce5['hJbrV'](_0x1a724f, _0x29fce5[_0xb49d26(0x1ea)])) {
        const _0xb619da = _0x29fce5[_0xb49d26(0x33c)][_0xb49d26(0x11e)]('|');
        let _0x4dd387 = 0x0;
        while (!![]) {
            switch (_0xb619da[_0x4dd387++]) {
            case '0':
                document['getElementById'](_0xb49d26(0x271))[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5['FYHDe'];
                continue;
            case '1':
                document['getElementById'](_0x29fce5[_0xb49d26(0x25e)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = 'none';
                continue;
            case '2':
                document['getElementById'](_0xb49d26(0xdc))['disabled'] = ![];
                continue;
            case '3':
                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x14b)])[_0xb49d26(0x285)]['display'] = _0x29fce5[_0xb49d26(0x23b)];
                continue;
            case '4':
                document['getElementById'](_0x29fce5['epiab'])[_0xb49d26(0x365)] = ![];
                continue;
            case '5':
                document['getElementById'](_0xb49d26(0x1d2))['style']['display'] = _0x29fce5[_0xb49d26(0x23b)];
                continue;
            case '6':
                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2a2)])[_0xb49d26(0x365)] = ![];
                continue;
            case '7':
                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2ac)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)];
                continue;
            case '8':
                document['getElementById'](_0x29fce5[_0xb49d26(0x2d5)])[_0xb49d26(0x365)] = ![];
                continue;
            case '9':
                document[_0xb49d26(0x16a)](_0xb49d26(0x1b2))[_0xb49d26(0x365)] = !![];
                continue;
            }
            break;
        }
    } else {
        if (_0x29fce5['vKQUU'](_0x1a724f, _0x29fce5[_0xb49d26(0x303)])) {
            const _0x458c10 = _0x29fce5['whzXL'][_0xb49d26(0x11e)]('|');
            let _0x5bcc78 = 0x0;
            while (!![]) {
                switch (_0x458c10[_0x5bcc78++]) {
                case '0':
                    document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0xbb)])[_0xb49d26(0x365)] = ![];
                    continue;
                case '1':
                    document[_0xb49d26(0x16a)](_0x29fce5['epiab'])[_0xb49d26(0x365)] = ![];
                    continue;
                case '2':
                    document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2a2)])[_0xb49d26(0x365)] = !![];
                    continue;
                case '3':
                    document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2ac)])['style'][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)];
                    continue;
                case '4':
                    document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x17f)])[_0xb49d26(0x285)]['display'] = _0xb49d26(0x1fc);
                    continue;
                case '5':
                    document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x25e)])['style'][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x28d)];
                    continue;
                case '6':
                    document[_0xb49d26(0x16a)](_0xb49d26(0xdc))[_0xb49d26(0x365)] = ![];
                    continue;
                case '7':
                    document['getElementById'](_0x29fce5[_0xb49d26(0x14b)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)];
                    continue;
                case '8':
                    document[_0xb49d26(0x16a)](_0x29fce5['pfixp'])[_0xb49d26(0x365)] = ![];
                    continue;
                case '9':
                    document[_0xb49d26(0x16a)](_0x29fce5['AmkeF'])[_0xb49d26(0x285)]['display'] = _0xb49d26(0x1fc);
                    continue;
                }
                break;
            }
        } else {
            if (_0x1a724f === _0x29fce5['VaqTk']) {
                const _0x5e2699 = _0x29fce5[_0xb49d26(0x1db)][_0xb49d26(0x11e)]('|');
                let _0x312883 = 0x0;
                while (!![]) {
                    switch (_0x5e2699[_0x312883++]) {
                    case '0':
                        document[_0xb49d26(0x16a)](_0x29fce5['pfixp'])[_0xb49d26(0x365)] = ![];
                        continue;
                    case '1':
                        document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0xbb)])[_0xb49d26(0x365)] = ![];
                        continue;
                    case '2':
                        document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x103)])[_0xb49d26(0x365)] = ![];
                        continue;
                    case '3':
                        document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x19f)])[_0xb49d26(0x365)] = !![];
                        continue;
                    case '4':
                        document['getElementById'](_0xb49d26(0x271))[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0xb49d26(0x1fc);
                        continue;
                    case '5':
                        document[_0xb49d26(0x16a)](_0x29fce5['UgiRQ'])['style'][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)];
                        continue;
                    case '6':
                        document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2a2)])['disabled'] = ![];
                        continue;
                    case '7':
                        document['getElementById'](_0x29fce5[_0xb49d26(0x14b)])[_0xb49d26(0x285)]['display'] = 'block';
                        continue;
                    case '8':
                        document['getElementById'](_0x29fce5[_0xb49d26(0x2ac)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)];
                        continue;
                    case '9':
                        document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x25e)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)];
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x29fce5[_0xb49d26(0x27f)](_0x1a724f, _0x29fce5[_0xb49d26(0x219)]))
                    document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x129)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x23b)], document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x25e)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5['HPOjB'], document[_0xb49d26(0x16a)](_0x29fce5['aLElj'])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = 'none', document['getElementById'](_0x29fce5[_0xb49d26(0x17f)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5['FYHDe'], document[_0xb49d26(0x16a)](_0xb49d26(0x375))['style'][_0xb49d26(0x19e)] = _0x29fce5['HPOjB'], document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0xbb)])[_0xb49d26(0x365)] = ![], document[_0xb49d26(0x16a)](_0x29fce5['LPHdO'])[_0xb49d26(0x365)] = ![], document[_0xb49d26(0x16a)](_0x29fce5['BZWCC'])['disabled'] = ![], document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x103)])[_0xb49d26(0x365)] = !![], document['getElementById'](_0x29fce5['pfixp'])[_0xb49d26(0x365)] = ![];
                else {
                    if (_0x29fce5['xeHLY'](_0x1a724f, _0x29fce5[_0xb49d26(0x15f)])) {
                        const _0x5213c3 = _0xb49d26(0x170)['split']('|');
                        let _0x1e7bbe = 0x0;
                        while (!![]) {
                            switch (_0x5213c3[_0x1e7bbe++]) {
                            case '0':
                                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2a2)])[_0xb49d26(0x365)] = ![];
                                continue;
                            case '1':
                                document['getElementById'](_0x29fce5[_0xb49d26(0xbb)])['disabled'] = ![];
                                continue;
                            case '2':
                                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x2d5)])['disabled'] = !![];
                                continue;
                            case '3':
                                document['getElementById'](_0x29fce5['bgsfW'])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5[_0xb49d26(0x28d)];
                                continue;
                            case '4':
                                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x103)])[_0xb49d26(0x365)] = ![];
                                continue;
                            case '5':
                                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x14b)])[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0xb49d26(0x1fc);
                                continue;
                            case '6':
                                document[_0xb49d26(0x16a)](_0x29fce5[_0xb49d26(0x129)])[_0xb49d26(0x285)]['display'] = _0x29fce5[_0xb49d26(0x23b)];
                                continue;
                            case '7':
                                document['getElementById'](_0x29fce5[_0xb49d26(0x19f)])[_0xb49d26(0x365)] = ![];
                                continue;
                            case '8':
                                document[_0xb49d26(0x16a)](_0x29fce5['UgiRQ'])['style'][_0xb49d26(0x19e)] = _0xb49d26(0x1fc);
                                continue;
                            case '9':
                                document['getElementById'](_0xb49d26(0x2e3))[_0xb49d26(0x285)][_0xb49d26(0x19e)] = _0x29fce5['HPOjB'];
                                continue;
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}
function toggleShow(_0xdc00db) {
    const _0xf3671c = _0x4881a2, _0x2ad640 = {
            'FRuRc': 'wdbToggleShowStats',
            'KDFCP': function (_0x17cc16, _0x4ac7e8) {
                return _0x17cc16(_0x4ac7e8);
            },
            'DFlLb': _0xf3671c(0x1a3),
            'VMgQp': 'chart',
            'lwcuH': function (_0x35210b, _0x56e91b) {
                return _0x35210b(_0x56e91b);
            },
            'PHEfF': _0xf3671c(0x37e),
            'miVvu': function (_0x1000be, _0x3563f3) {
                return _0x1000be === _0x3563f3;
            },
            'eQilQ': _0xf3671c(0x1be),
            'aAzmW': function (_0x3f8938, _0x45edb3) {
                return _0x3f8938(_0x45edb3);
            },
            'vyaYR': _0xf3671c(0x33f)
        };
    if (_0xdc00db === 'stats')
        document[_0xf3671c(0x16a)](_0x2ad640[_0xf3671c(0x1e5)])[_0xf3671c(0x2eb)] ? _0x2ad640[_0xf3671c(0x2b5)](selectFunction, _0x2ad640[_0xf3671c(0x358)]) : _0x2ad640[_0xf3671c(0x2b5)](selectFunction, _0xf3671c(0xe3));
    else {
        if (_0xdc00db === _0x2ad640[_0xf3671c(0x21b)])
            document[_0xf3671c(0x16a)](_0xf3671c(0x297))[_0xf3671c(0x2eb)] ? _0x2ad640[_0xf3671c(0x2f5)](selectFunction, _0x2ad640['PHEfF']) : selectFunction(_0xf3671c(0x275));
        else
            _0x2ad640[_0xf3671c(0x36f)](_0xdc00db, _0xf3671c(0xc3)) && (document[_0xf3671c(0x16a)](_0x2ad640[_0xf3671c(0x202)])[_0xf3671c(0x2eb)] ? selectFunction(_0xf3671c(0x21f)) : _0x2ad640[_0xf3671c(0xda)](selectFunction, _0x2ad640['vyaYR']));
    }
}
function toggleLive(_0x2cb29e) {
    const _0x4a2bca = _0x4881a2, _0x526ea4 = {
            'pfqKT': function (_0x479f2b, _0x58e6d3) {
                return _0x479f2b === _0x58e6d3;
            },
            'tYuHB': _0x4a2bca(0x1fb),
            'jMCYp': _0x4a2bca(0x2c8),
            'qCyQv': function (_0x22dd9d, _0x168a91) {
                return _0x22dd9d(_0x168a91);
            },
            'isTOK': 'startchart',
            'dvhSB': function (_0x202f72, _0x356e50) {
                return _0x202f72(_0x356e50);
            },
            'wlLBQ': _0x4a2bca(0xd3),
            'VkMaK': function (_0x51d29a, _0x2de23d) {
                return _0x51d29a === _0x2de23d;
            },
            'GzkVJ': _0x4a2bca(0x1bb),
            'rOqeY': _0x4a2bca(0x258),
            'TJipk': function (_0xa1d529, _0x2507f2) {
                return _0xa1d529(_0x2507f2);
            },
            'KgQFY': _0x4a2bca(0x13c),
            'bHkgf': _0x4a2bca(0x24a),
            'uxWNt': 'startlog'
        };
    if (_0x526ea4[_0x4a2bca(0x31f)](_0x2cb29e, _0x526ea4[_0x4a2bca(0x184)]))
        document[_0x4a2bca(0x16a)](_0x526ea4['jMCYp'])[_0x4a2bca(0x2eb)] ? _0x526ea4['qCyQv'](selectFunction, _0x526ea4[_0x4a2bca(0x30e)]) : _0x526ea4[_0x4a2bca(0x245)](selectFunction, _0x526ea4[_0x4a2bca(0xe1)]);
    else {
        if (_0x526ea4[_0x4a2bca(0x201)](_0x2cb29e, 'history'))
            document[_0x4a2bca(0x16a)](_0x526ea4[_0x4a2bca(0x322)])[_0x4a2bca(0x2eb)] ? _0x526ea4[_0x4a2bca(0x191)](selectFunction, _0x526ea4['rOqeY']) : _0x526ea4[_0x4a2bca(0x22a)](selectFunction, _0x526ea4[_0x4a2bca(0x2b3)]);
        else
            _0x2cb29e === _0x526ea4['bHkgf'] && (document[_0x4a2bca(0x16a)]('wdbToggleLiveLog')[_0x4a2bca(0x2eb)] ? _0x526ea4[_0x4a2bca(0x191)](selectFunction, _0x526ea4[_0x4a2bca(0x137)]) : _0x526ea4[_0x4a2bca(0x191)](selectFunction, _0x4a2bca(0x359)));
    }
}
function selectFunction(_0x16a7a0) {
    const _0x1d0d84 = _0x4881a2, _0x530657 = {
            'kRkjE': _0x1d0d84(0x1cd),
            'TEptX': _0x1d0d84(0x1c6),
            'CvAdr': _0x1d0d84(0x2fd),
            'DulZo': function (_0x4a70cd, _0x3b78bf) {
                return _0x4a70cd === _0x3b78bf;
            },
            'lWqgJ': _0x1d0d84(0xfc),
            'QfMWN': function (_0x584d25, _0x3bfb30) {
                return _0x584d25(_0x3bfb30);
            },
            'hilOw': _0x1d0d84(0x1c9),
            'zrHzz': _0x1d0d84(0x381),
            'lUIuN': function (_0x8060ec) {
                return _0x8060ec();
            },
            'GaGze': 'showhistory',
            'toXHl': function (_0x469e86, _0x5f18fd) {
                return _0x469e86(_0x5f18fd);
            },
            'bdqhD': _0x1d0d84(0xd0),
            'OWTtd': _0x1d0d84(0x2dc),
            'AzcUH': function (_0x395fef, _0x434d65) {
                return _0x395fef === _0x434d65;
            },
            'fviIe': _0x1d0d84(0x359),
            'wLKqs': _0x1d0d84(0xf6),
            'SdJlu': function (_0x11147d, _0x54c5b1) {
                return _0x11147d === _0x54c5b1;
            },
            'BGNwU': _0x1d0d84(0x229),
            'yTYPo': 'stopchart',
            'mdqqO': function (_0x350e7e, _0x4fbb1e) {
                return _0x350e7e === _0x4fbb1e;
            },
            'HKnRK': _0x1d0d84(0x1f2),
            'PDOlG': function (_0x25925b, _0x581d7d) {
                return _0x25925b === _0x581d7d;
            },
            'urNxt': _0x1d0d84(0x37e),
            'kPnCO': function (_0x42bedc, _0x2049ef) {
                return _0x42bedc(_0x2049ef);
            },
            'DYxKH': function (_0x2f913a, _0x9d189) {
                return _0x2f913a === _0x9d189;
            },
            'fJHxy': 'startchart',
            'CJcLo': _0x1d0d84(0x24d),
            'YLuog': function (_0x3dabb8, _0x10a847) {
                return _0x3dabb8 === _0x10a847;
            },
            'bNkLG': _0x1d0d84(0x258),
            'ZeZns': function (_0x59b3d4, _0x4e1cee) {
                return _0x59b3d4(_0x4e1cee);
            },
            'uykhN': function (_0x494b95, _0xd306ac) {
                return _0x494b95 === _0xd306ac;
            },
            'URpnH': _0x1d0d84(0x1a3),
            'BClJw': function (_0x3d0442, _0x5796ae) {
                return _0x3d0442(_0x5796ae);
            },
            'dNWmB': 'stophistory',
            'fZNuQ': function (_0x53f3e8, _0x1c94f5) {
                return _0x53f3e8(_0x1c94f5);
            }
        }, _0x53e2c7 = _0x530657['kRkjE'][_0x1d0d84(0x11e)]('|');
    let _0x3c9fb3 = 0x0;
    while (!![]) {
        switch (_0x53e2c7[_0x3c9fb3++]) {
        case '0':
            if (_0x16a7a0 === _0x530657[_0x1d0d84(0x111)])
                toggleChart(_0x530657['CvAdr']);
            continue;
        case '1':
            if (_0x530657[_0x1d0d84(0x131)](_0x16a7a0, _0x530657[_0x1d0d84(0x15c)]))
                _0x530657[_0x1d0d84(0x144)](toggleLog, _0x530657['hilOw']);
            continue;
        case '2':
            if (_0x16a7a0 === _0x530657[_0x1d0d84(0xce)])
                _0x530657['lUIuN'](resetall);
            continue;
        case '3':
            if (_0x530657[_0x1d0d84(0x131)](_0x16a7a0, _0x530657['GaGze']))
                _0x530657[_0x1d0d84(0x32d)](toggleHistory, _0x530657[_0x1d0d84(0x15b)]);
            continue;
        case '4':
            if (_0x530657[_0x1d0d84(0x131)](_0x16a7a0, _0x1d0d84(0x275)))
                _0x530657[_0x1d0d84(0x32d)](toggleChart, _0x530657[_0x1d0d84(0x160)]);
            continue;
        case '5':
            if (_0x530657[_0x1d0d84(0x163)](_0x16a7a0, _0x530657['fviIe']))
                toggleLog(_0x530657[_0x1d0d84(0x2cc)]);
            continue;
        case '6':
            if (_0x530657[_0x1d0d84(0x1a5)](_0x16a7a0, _0x530657[_0x1d0d84(0x2fc)]))
                _0x530657[_0x1d0d84(0x290)](resetseed);
            continue;
        case '7':
            if (_0x530657[_0x1d0d84(0x131)](_0x16a7a0, _0x530657[_0x1d0d84(0x260)]))
                toggleChart(_0x1d0d84(0xf6));
            continue;
        case '8':
            if (_0x530657[_0x1d0d84(0x131)](_0x16a7a0, _0x1d0d84(0x125)))
                _0x530657[_0x1d0d84(0x290)](resetstats);
            continue;
        case '9':
            if (_0x530657[_0x1d0d84(0x1b4)](_0x16a7a0, _0x1d0d84(0x255)))
                toggleLog(_0x530657[_0x1d0d84(0x2f3)]);
            continue;
        case '10':
            if (_0x530657['PDOlG'](_0x16a7a0, _0x530657[_0x1d0d84(0x1bd)]))
                _0x530657[_0x1d0d84(0xc2)](toggleChart, _0x530657[_0x1d0d84(0x15b)]);
            continue;
        case '11':
            if (_0x530657[_0x1d0d84(0x240)](_0x16a7a0, _0x530657[_0x1d0d84(0x220)]))
                _0x530657[_0x1d0d84(0x144)](toggleChart, _0x530657[_0x1d0d84(0x2f3)]);
            continue;
        case '12':
            if (_0x530657[_0x1d0d84(0x20e)](_0x16a7a0, _0x530657['CJcLo']))
                _0x530657[_0x1d0d84(0xc2)](toggleHistory, _0x530657[_0x1d0d84(0x1b1)]);
            continue;
        case '13':
            if (_0x530657[_0x1d0d84(0x1e6)](_0x16a7a0, _0x530657[_0x1d0d84(0x31b)]))
                _0x530657[_0x1d0d84(0xea)](toggleHistory, _0x1d0d84(0x1f2));
            continue;
        case '14':
            if (_0x530657[_0x1d0d84(0x1f4)](_0x16a7a0, _0x1d0d84(0xe3)))
                toggleStats(_0x530657[_0x1d0d84(0x160)]);
            continue;
        case '15':
            if (_0x530657[_0x1d0d84(0x131)](_0x16a7a0, _0x530657[_0x1d0d84(0x206)]))
                _0x530657[_0x1d0d84(0x196)](toggleStats, _0x530657['bdqhD']);
            continue;
        case '16':
            if (_0x530657[_0x1d0d84(0x1f4)](_0x16a7a0, _0x530657[_0x1d0d84(0x254)]))
                _0x530657['fZNuQ'](toggleHistory, _0x530657[_0x1d0d84(0x2cc)]);
            continue;
        case '17':
            if (_0x530657[_0x1d0d84(0x1e6)](_0x16a7a0, _0x1d0d84(0x33f)))
                _0x530657[_0x1d0d84(0x182)](toggleHistory, _0x530657[_0x1d0d84(0x160)]);
            continue;
        }
        break;
    }
}
function toggleMode(_0x324b82) {
    const _0x24e6e4 = _0x4881a2, _0x28d1f4 = {
            'CFpPH': function (_0x2c7982, _0x2d565c) {
                return _0x2c7982 === _0x2d565c;
            },
            'eeTtE': 'block',
            'grbDh': 'wdbJSMode',
            'QoXrs': _0x24e6e4(0x1fc),
            'hSXVd': _0x24e6e4(0x284),
            'lvufF': _0x24e6e4(0x28b),
            'bxTme': function (_0x4e7342, _0x1f5b27) {
                return _0x4e7342 === _0x1f5b27;
            },
            'OMvmp': _0x24e6e4(0x379)
        };
    mode = _0x324b82;
    if (_0x28d1f4['CFpPH'](_0x324b82, _0x24e6e4(0x2a5)))
        document[_0x24e6e4(0x16a)](_0x24e6e4(0x28b))[_0x24e6e4(0x285)][_0x24e6e4(0x19e)] = _0x28d1f4[_0x24e6e4(0x13b)], document[_0x24e6e4(0x16a)](_0x28d1f4['grbDh'])['style'][_0x24e6e4(0x19e)] = _0x28d1f4[_0x24e6e4(0x25f)], document[_0x24e6e4(0x16a)](_0x28d1f4[_0x24e6e4(0x11f)])[_0x24e6e4(0x285)]['display'] = _0x28d1f4[_0x24e6e4(0x25f)];
    else {
        if (_0x28d1f4[_0x24e6e4(0x329)](_0x324b82, 'js'))
            document[_0x24e6e4(0x16a)](_0x28d1f4[_0x24e6e4(0x1d5)])[_0x24e6e4(0x285)][_0x24e6e4(0x19e)] = _0x28d1f4[_0x24e6e4(0x25f)], document[_0x24e6e4(0x16a)](_0x28d1f4[_0x24e6e4(0x17a)])[_0x24e6e4(0x285)][_0x24e6e4(0x19e)] = _0x28d1f4[_0x24e6e4(0x13b)], document['getElementById'](_0x24e6e4(0x284))[_0x24e6e4(0x285)]['display'] = 'none';
        else
            _0x28d1f4['bxTme'](_0x324b82, _0x28d1f4[_0x24e6e4(0x30f)]) && (document[_0x24e6e4(0x16a)](_0x28d1f4[_0x24e6e4(0x1d5)])[_0x24e6e4(0x285)][_0x24e6e4(0x19e)] = _0x28d1f4['QoXrs'], document['getElementById'](_0x28d1f4['grbDh'])[_0x24e6e4(0x285)][_0x24e6e4(0x19e)] = _0x28d1f4[_0x24e6e4(0x25f)], document[_0x24e6e4(0x16a)](_0x28d1f4[_0x24e6e4(0x11f)])['style'][_0x24e6e4(0x19e)] = _0x28d1f4[_0x24e6e4(0x13b)]);
    }
}
function toggleStats(_0x5e3d80) {
    const _0x268e5b = _0x4881a2, _0xb6f03e = {
            'lvMqE': function (_0x22da67, _0x586d1a) {
                return _0x22da67 === _0x586d1a;
            },
            'TPnIb': _0x268e5b(0x2dc),
            'kNWzV': _0x268e5b(0xd0),
            'Ppbtf': _0x268e5b(0x2f7)
        };
    if (_0xb6f03e[_0x268e5b(0x24b)](_0x5e3d80, _0xb6f03e[_0x268e5b(0x267)]))
        document[_0x268e5b(0x16a)]('wdbStats')['style'][_0x268e5b(0x19e)] = _0x268e5b(0x1fc);
    else
        _0x5e3d80 === _0xb6f03e[_0x268e5b(0x26d)] && (document[_0x268e5b(0x16a)](_0x268e5b(0x14e))[_0x268e5b(0x285)]['display'] = _0xb6f03e[_0x268e5b(0x342)]);
}
function toggleChart(_0x49d909) {
    const _0x34a774 = _0x4881a2, _0x557394 = {
            'fCjJv': _0x34a774(0x2dc),
            'qVHBr': _0x34a774(0x2d4),
            'kHbsB': _0x34a774(0x1fc),
            'YwwPM': _0x34a774(0x2c9),
            'ieulG': _0x34a774(0x337),
            'yAlit': function (_0x4d461d, _0x5c3411) {
                return _0x4d461d === _0x5c3411;
            },
            'VmlOn': _0x34a774(0xd0),
            'xlakp': _0x34a774(0x348),
            'KZARN': _0x34a774(0x2dd),
            'dVffI': _0x34a774(0xf6),
            'UiaRp': function (_0x593418, _0x19dd3f) {
                return _0x593418 === _0x19dd3f;
            },
            'IOVxq': 'start',
            'icLbz': _0x34a774(0x2fd)
        };
    if (_0x49d909 === _0x557394[_0x34a774(0x1f1)])
        document[_0x34a774(0x16a)](_0x557394['qVHBr'])[_0x34a774(0x285)][_0x34a774(0x19e)] = _0x557394[_0x34a774(0x19c)], document['getElementById'](_0x557394[_0x34a774(0xe7)])[_0x34a774(0x285)][_0x34a774(0x19b)] = _0x557394[_0x34a774(0x2c7)];
    else {
        if (_0x557394[_0x34a774(0x349)](_0x49d909, _0x557394['VmlOn']))
            document['getElementById'](_0x557394[_0x34a774(0x327)])['style'][_0x34a774(0x19e)] = _0x557394['xlakp'], document['getElementById'](_0x557394[_0x34a774(0xe7)])[_0x34a774(0x285)][_0x34a774(0x19b)] = _0x557394[_0x34a774(0x29e)];
        else {
            if (_0x49d909 === _0x557394['dVffI'])
                stopChart = !![];
            else {
                if (_0x557394[_0x34a774(0x2b4)](_0x49d909, _0x557394[_0x34a774(0x2d6)]))
                    stopChart = ![];
                else
                    _0x557394[_0x34a774(0x2b4)](_0x49d909, _0x557394[_0x34a774(0x266)]) && (betsChart = 0x0, profitChart = 0x0, drawChart());
            }
        }
    }
}
function toggleHistory(_0x2362ce) {
    const _0x4fd804 = _0x4881a2, _0x5cced5 = {
            'PwrtF': _0x4fd804(0x2c9),
            'ESldD': _0x4fd804(0x2d4),
            'yQTFl': _0x4fd804(0x337),
            'CjbqK': function (_0x46e29c, _0x589205) {
                return _0x46e29c === _0x589205;
            },
            'WBJCR': _0x4fd804(0x348),
            'IQnSD': _0x4fd804(0x2dd),
            'WikUl': _0x4fd804(0xf6),
            'ktcpC': _0x4fd804(0x1c9),
            'Gqfmm': _0x4fd804(0x2d9)
        };
    if (_0x2362ce === _0x4fd804(0x2dc))
        document[_0x4fd804(0x16a)](_0x5cced5[_0x4fd804(0x106)])[_0x4fd804(0x285)][_0x4fd804(0x19e)] = _0x4fd804(0x1fc), document['getElementById'](_0x5cced5['ESldD'])[_0x4fd804(0x285)][_0x4fd804(0x19b)] = _0x5cced5[_0x4fd804(0x149)];
    else {
        if (_0x5cced5['CjbqK'](_0x2362ce, _0x4fd804(0xd0)))
            document['getElementById'](_0x4fd804(0x2c9))[_0x4fd804(0x285)][_0x4fd804(0x19e)] = _0x5cced5[_0x4fd804(0x197)], document['getElementById'](_0x4fd804(0x2d4))[_0x4fd804(0x285)][_0x4fd804(0x19b)] = _0x5cced5['IQnSD'];
        else {
            if (_0x5cced5[_0x4fd804(0x124)](_0x2362ce, _0x5cced5[_0x4fd804(0x2d3)]))
                stopHistory = !![];
            else {
                if (_0x5cced5[_0x4fd804(0x124)](_0x2362ce, 'start'))
                    stopHistory = ![];
                else
                    _0x5cced5[_0x4fd804(0x124)](_0x2362ce, _0x5cced5[_0x4fd804(0xcf)]) && (document[_0x4fd804(0x16a)](_0x5cced5[_0x4fd804(0x33e)])[_0x4fd804(0x1a1)] = '');
            }
        }
    }
}
function toggleLog(_0x309b99) {
    const _0x3ebf98 = _0x4881a2, _0x1e2cbb = {
            'AqMgF': 'stop',
            'BQMlG': function (_0x4d5d55, _0x8ae12e) {
                return _0x4d5d55 === _0x8ae12e;
            },
            'UIRzV': _0x3ebf98(0x113)
        };
    if (_0x309b99 === _0x1e2cbb[_0x3ebf98(0x2c6)])
        stopLog = !![];
    else {
        if (_0x1e2cbb[_0x3ebf98(0x222)](_0x309b99, _0x3ebf98(0x1f2)))
            stopLog = ![];
        else
            _0x309b99 === _0x3ebf98(0x1c9) && (document[_0x3ebf98(0x16a)](_0x1e2cbb['UIRzV'])['innerHTML'] = '');
    }
}
async function handleAdvanced() {
    const _0x551e27 = _0x4881a2, _0x1efa5a = {
            'JugkG': function (_0x31c07a, _0x5e0c9e) {
                return _0x31c07a(_0x5e0c9e);
            },
            'lxdAs': 'advancedChance',
            'CHLOB': 'advancedChanceOnWinCheck',
            'fGLwn': _0x551e27(0x319),
            'LyeEd': _0x551e27(0x2ab),
            'uWvcq': _0x551e27(0x26b),
            'MkYVh': 'advancedMultiOnWinCheck',
            'ZbEiT': _0x551e27(0x27e),
            'xkghP': function (_0x39f87b, _0x460813) {
                return _0x39f87b(_0x460813);
            },
            'VeZbk': _0x551e27(0x195),
            'rPMKV': _0x551e27(0xd1),
            'bpvtc': function (_0x195eab, _0x1d64ad) {
                return _0x195eab === _0x1d64ad;
            },
            'IBeIT': function (_0x4c09c5, _0x4a096d) {
                return _0x4c09c5 % _0x4a096d;
            },
            'BzIGY': _0x551e27(0xdf),
            'PVQRr': _0x551e27(0x1e9),
            'NgREc': function (_0x133332, _0x43384e) {
                return _0x133332 >= _0x43384e;
            },
            'BQvDp': _0x551e27(0x2ff),
            'GVbVO': function (_0x12c628, _0x43a1df) {
                return _0x12c628(_0x43a1df);
            },
            'fwmvS': _0x551e27(0xe0),
            'kZeNo': function (_0x3fea19, _0x18b09a) {
                return _0x3fea19 >= _0x18b09a;
            },
            'sKukV': function (_0x3ec7f2) {
                return _0x3ec7f2();
            },
            'tufLl': 'advancedStopRollNumber',
            'glEHJ': function (_0x1c016b, _0x53f9d6) {
                return _0x1c016b === _0x53f9d6;
            },
            'LueoF': function (_0x3bd3b7, _0xdfbf5d) {
                return _0x3bd3b7 + _0xdfbf5d;
            },
            'iTyit': _0x551e27(0x2f9),
            'XKrqR': 'advancedStopAfterStreakCheck',
            'wLXnA': _0x551e27(0xcb),
            'OqOHm': function (_0x255532, _0x38669e) {
                return _0x255532 >= _0x38669e;
            },
            'ioHvs': _0x551e27(0x25c),
            'jINAR': function (_0x26283e, _0x3b27f1) {
                return _0x26283e <= _0x3b27f1;
            },
            'dFwoJ': _0x551e27(0x338),
            'KeBOY': function (_0xcb3b22, _0x3f0c48) {
                return _0xcb3b22(_0x3f0c48);
            },
            'lCfgl': _0x551e27(0x289),
            'EzAGy': _0x551e27(0x2b7),
            'bsUJt': 'advancedStopOnWinsCheck',
            'FQJIb': function (_0x62709e, _0x2764f3) {
                return _0x62709e(_0x2764f3);
            },
            'zDaBx': _0x551e27(0xdd),
            'Iqtbk': function (_0x421af0, _0x308434) {
                return _0x421af0 >= _0x308434;
            },
            'UdLwB': function (_0x2680f8, _0x44f976) {
                return _0x2680f8 + _0x44f976;
            },
            'FnuJj': _0x551e27(0x35f),
            'hmcif': _0x551e27(0x20f),
            'lXtBJ': function (_0x50a913, _0x4308fc) {
                return _0x50a913 + _0x4308fc;
            },
            'uSnLe': function (_0x53df01, _0x15c8d6) {
                return _0x53df01 + _0x15c8d6;
            },
            'eTwvH': _0x551e27(0x1a9),
            'EWHja': _0x551e27(0x2d1),
            'hqzAP': _0x551e27(0x383),
            'xrFlS': function (_0x32173b, _0x82ebbd) {
                return _0x32173b >= _0x82ebbd;
            },
            'bxall': function (_0x19edb3, _0x47eb27) {
                return _0x19edb3 + _0x47eb27;
            },
            'RHCvo': _0x551e27(0x1b3),
            'VvawE': _0x551e27(0x2ec),
            'RlOyG': function (_0x2a0379, _0x32206b) {
                return _0x2a0379(_0x32206b);
            },
            'cIxTt': _0x551e27(0x234),
            'iLJao': _0x551e27(0xf5),
            'IUvEW': 'advancedBetHighOnWin',
            'egarE': function (_0x4e42c4, _0x2c15a4) {
                return _0x4e42c4 === _0x2c15a4;
            },
            'PnHPq': function (_0x555041, _0x2996ca) {
                return _0x555041 % _0x2996ca;
            },
            'QOGAo': function (_0x70c701, _0x15db43) {
                return _0x70c701 % _0x15db43;
            },
            'nsmPF': function (_0x4ec872, _0x1ef950) {
                return _0x4ec872 * _0x1ef950;
            },
            'LCrCn': _0x551e27(0xd8),
            'MwgGP': _0x551e27(0x273),
            'XFuVY': function (_0x570243, _0xa4b8a5) {
                return _0x570243 % _0xa4b8a5;
            },
            'OdTHi': function (_0x2dbc88, _0x4ba0b4) {
                return _0x2dbc88 % _0x4ba0b4;
            },
            'WnRAx': function (_0x597b03, _0x25e0de) {
                return _0x597b03 === _0x25e0de;
            },
            'IDGig': function (_0x53e70a, _0x215c3b) {
                return _0x53e70a * _0x215c3b;
            }
        };
    chance = _0x1efa5a['JugkG'](Number, document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x286)])[_0x551e27(0x2a6)]), chanceOnWinCheck = document['getElementById'](_0x1efa5a[_0x551e27(0x242)])[_0x551e27(0x2eb)], chanceOnWinCheck ? chanceOnWin = _0x1efa5a[_0x551e27(0x21a)](Number, document[_0x551e27(0x16a)](_0x1efa5a['fGLwn'])[_0x551e27(0x2a6)]) : chanceOnWin = chance, chanceOnWinBets = Number(document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x294)])[_0x551e27(0x2a6)]), chanceOnLoseCheck = document[_0x551e27(0x16a)]('advancedChanceOnLoseCheck')['checked'], chanceOnLoseCheck ? chanceOnLose = _0x1efa5a[_0x551e27(0x21a)](Number, document[_0x551e27(0x16a)](_0x1efa5a['uWvcq'])['value']) : chanceOnLose = chance, chanceOnLoseBets = _0x1efa5a[_0x551e27(0x21a)](Number, document['getElementById']('advancedChanceOnLoseBets')[_0x551e27(0x2a6)]), multiOnWinCheck = document['getElementById'](_0x1efa5a[_0x551e27(0x355)])[_0x551e27(0x2eb)], multiOnWinCheck ? multiOnWin = _0x1efa5a['JugkG'](Number, document[_0x551e27(0x16a)](_0x551e27(0x1ab))['value']) : multiOnWin = 0x1, multiOnWinBets = Number(document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x339)])['value']), multiOnLoseCheck = document[_0x551e27(0x16a)]('advancedMultiOnLoseCheck')[_0x551e27(0x2eb)], multiOnLoseCheck ? multiOnLose = Number(document[_0x551e27(0x16a)](_0x551e27(0x10f))[_0x551e27(0x2a6)]) : multiOnLose = 0x1, multiOnLoseBets = _0x1efa5a[_0x551e27(0x145)](Number, document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x24c)])[_0x551e27(0x2a6)]), betHighOnBetCheck = document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x10e)])['checked'];
    if (betHighOnBetCheck) {
        betHighOnBet = _0x1efa5a[_0x551e27(0x145)](Number, document[_0x551e27(0x16a)]('advancedBetHighOnBet')[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x13a)](_0x1efa5a['IBeIT'](bets, betHighOnBet), 0x0))
            bethigh = !bethigh;
    }
    betHighOnProfitCheck = document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x33a)])['checked'];
    if (betHighOnProfitCheck) {
        betHighOnProfit = Number(document['getElementById'](_0x1efa5a[_0x551e27(0x270)])[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x2c2)](profit, betHighOnProfit))
            bethigh = !bethigh;
    }
    resetstatsOnProfitCheck = document['getElementById'](_0x1efa5a[_0x551e27(0x11a)])[_0x551e27(0x2eb)];
    if (resetstatsOnProfitCheck) {
        resetstatsOnProfit = _0x1efa5a[_0x551e27(0x1b6)](Number, document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x2a9)])['value']);
        if (_0x1efa5a['kZeNo'](profit, resetstatsOnProfit))
            _0x1efa5a[_0x551e27(0x287)](resetstats);
    }
    stopRollNumberCheck = document['getElementById']('advancedStopRollNumberCheck')[_0x551e27(0x2eb)];
    if (stopRollNumberCheck) {
        stopRollNumber = Number(document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x28a)])[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x1e1)](lastBet[_0x551e27(0xec)], stopRollNumber))
            _0x1efa5a[_0x551e27(0x287)](stop), _0x1efa5a[_0x551e27(0x21a)](log, _0x1efa5a['LueoF'](_0x1efa5a['iTyit'], stopRollNumber));
    }
    stopStreakCheck = document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x328)])[_0x551e27(0x2eb)];
    if (stopStreakCheck) {
        stopStreak = Number(document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x28e)])[_0x551e27(0x2a6)]);
        if (stopStreak > 0x0) {
            if (_0x1efa5a[_0x551e27(0x161)](currentstreak, stopStreak))
                _0x1efa5a['sKukV'](stop), _0x1efa5a['JugkG'](log, _0x1efa5a[_0x551e27(0x354)] + stopStreak);
        } else {
            if (_0x1efa5a[_0x551e27(0xbd)](currentstreak, stopStreak))
                _0x1efa5a[_0x551e27(0x287)](stop), _0x1efa5a['xkghP'](log, _0x1efa5a[_0x551e27(0x1b5)](_0x1efa5a['ioHvs'], stopStreak));
        }
    }
    stopOnBetsCheck = document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x10b)])[_0x551e27(0x2eb)];
    if (stopOnBetsCheck) {
        stopOnBets = _0x1efa5a['KeBOY'](Number, document['getElementById']('advancedStopOnBets')[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x161)](bets, stopOnBets))
            stop(), _0x1efa5a[_0x551e27(0x145)](log, _0x1efa5a['LueoF'](_0x1efa5a['lCfgl'] + stopOnBets, _0x1efa5a[_0x551e27(0x18b)]));
    }
    stopOnWinsCheck = document[_0x551e27(0x16a)](_0x1efa5a['bsUJt'])[_0x551e27(0x2eb)];
    if (stopOnWinsCheck) {
        stopOnWins = _0x1efa5a[_0x551e27(0x22d)](Number, document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x368)])[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x1e7)](winstreak, stopOnWins))
            _0x1efa5a['sKukV'](stop), log(_0x1efa5a[_0x551e27(0x1b5)](_0x1efa5a[_0x551e27(0x174)](_0x1efa5a[_0x551e27(0x36a)], stopOnWins), _0x1efa5a['FnuJj']));
    }
    stopOnLoseCheck = document[_0x551e27(0x16a)](_0x551e27(0x2cb))['checked'];
    if (stopOnLoseCheck) {
        stopOnLose = _0x1efa5a['JugkG'](Number, document['getElementById'](_0x1efa5a[_0x551e27(0x18c)])[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x1b7)](losestreak, stopOnLose))
            stop(), log(_0x1efa5a[_0x551e27(0x384)](_0x1efa5a['uSnLe'](_0x1efa5a[_0x551e27(0x36a)], stopOnLose), _0x1efa5a['eTwvH']));
    }
    stopOnProfitCheck = document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x323)])[_0x551e27(0x2eb)];
    if (stopOnProfitCheck) {
        stopOnProfit = _0x1efa5a[_0x551e27(0x22d)](Number, document[_0x551e27(0x16a)](_0x1efa5a[_0x551e27(0x203)])[_0x551e27(0x2a6)]);
        if (_0x1efa5a[_0x551e27(0x190)](profit, stopOnProfit))
            stop(), _0x1efa5a[_0x551e27(0x22d)](log, _0x1efa5a[_0x551e27(0x178)](_0x1efa5a[_0x551e27(0xd6)], stopOnProfit));
    }
    stopOnBalanceCheck = document[_0x551e27(0x16a)](_0x1efa5a['VvawE'])[_0x551e27(0x2eb)];
    if (stopOnBalanceCheck) {
        stopOnBalance = _0x1efa5a['RlOyG'](Number, document[_0x551e27(0x16a)](_0x551e27(0x15a))[_0x551e27(0x2a6)]);
        if (balance >= stopOnBalance)
            stop(), _0x1efa5a[_0x551e27(0x22d)](log, _0x1efa5a[_0x551e27(0x178)](_0x1efa5a[_0x551e27(0x1c8)], stopOnBalance));
    }
    if (win) {
        betHighOnWinCheck = document[_0x551e27(0x16a)](_0x1efa5a['iLJao'])['checked'];
        if (betHighOnWinCheck) {
            betHighOnWin = Number(document[_0x551e27(0x16a)](_0x1efa5a['IUvEW'])[_0x551e27(0x2a6)]);
            if (_0x1efa5a[_0x551e27(0x251)](_0x1efa5a[_0x551e27(0xe6)](winstreak, betHighOnWin), 0x0))
                bethigh = !bethigh;
        }
        if (_0x1efa5a['QOGAo'](winstreak, chanceOnWinBets) === 0x0)
            chance = chanceOnWin;
        if (multiOnWinCheck) {
            if (_0x1efa5a['bpvtc'](winstreak % multiOnWinBets, 0x0))
                nextbet = _0x1efa5a[_0x551e27(0xcd)](previousbet, multiOnWin);
        } else
            nextbet = basebet;
    } else {
        betHighOnLoseCheck = document[_0x551e27(0x16a)](_0x1efa5a['LCrCn'])[_0x551e27(0x2eb)];
        if (betHighOnLoseCheck) {
            betHighOnLose = _0x1efa5a[_0x551e27(0x22d)](Number, document['getElementById'](_0x1efa5a[_0x551e27(0x353)])['value']);
            if (_0x1efa5a[_0x551e27(0x351)](losestreak, betHighOnLose) === 0x0)
                bethigh = !bethigh;
        }
        if (_0x1efa5a[_0x551e27(0x13a)](_0x1efa5a[_0x551e27(0x1d4)](losestreak, chanceOnLoseBets), 0x0))
            chance = chanceOnLose;
        if (multiOnLoseCheck) {
            if (_0x1efa5a['WnRAx'](_0x1efa5a[_0x551e27(0xe6)](losestreak, multiOnLoseBets), 0x0))
                nextbet = _0x1efa5a['IDGig'](previousbet, multiOnLose);
        } else
            nextbet = basebet;
    }
    return _0x551e27(0x1c7);
}
function changeCoin() {
    const _0x5ec093 = _0x4881a2, _0x33be4d = { 'rhfNb': _0x5ec093(0x1d6) };
    coin = document[_0x5ec093(0x16a)](_0x33be4d[_0x5ec093(0x208)])['value'], currency = String(coin)[_0x5ec093(0x250)](), fengari[_0x5ec093(0x36e)](_0x5ec093(0xff) + currency + '\x22')(), checkbalance();
}
async function handleStats() {
    const _0x4e9b5d = _0x4881a2, _0x5c8a18 = {
            'OChRP': function (_0x21b556, _0x32a6af) {
                return _0x21b556 === _0x32a6af;
            },
            'GulFe': 'lua',
            'heyoi': function (_0x5bef94) {
                return _0x5bef94();
            },
            'FJBJW': function (_0x516a62) {
                return _0x516a62();
            },
            'qHSpM': _0x4e9b5d(0x379),
            'HOCiG': function (_0x6e02cd, _0xddc434) {
                return _0x6e02cd && _0xddc434;
            },
            'SZKnW': function (_0x5eb02f) {
                return _0x5eb02f();
            },
            'phmBI': function (_0x22812a, _0x505f16) {
                return _0x22812a(_0x505f16);
            },
            'AgnHD': function (_0x2c9351, _0x3fefdf) {
                return _0x2c9351 === _0x3fefdf;
            },
            'cvqSz': _0x4e9b5d(0x340),
            'GtsGS': function (_0x5ec496, _0x2c32d0) {
                return _0x5ec496 > _0x2c32d0;
            },
            'ZiPAL': function (_0x3a605d, _0x3407f3) {
                return _0x3a605d < _0x3407f3;
            },
            'FFFoS': _0x4e9b5d(0x1b0),
            'faSWQ': function (_0x411de9, _0x15513d) {
                return _0x411de9 >= _0x15513d;
            },
            'OWBcC': _0x4e9b5d(0x232),
            'NaoOO': function (_0x2310ad, _0x342b80) {
                return _0x2310ad - _0x342b80;
            },
            'FUVxu': function (_0x5e0ba0, _0x20d879) {
                return _0x5e0ba0 < _0x20d879;
            },
            'OJNTV': function (_0x34ff6f, _0x3be630) {
                return _0x34ff6f < _0x3be630;
            },
            'sALVW': function (_0x3f5537, _0x58bc38) {
                return _0x3f5537 > _0x58bc38;
            }
        };
    bets++, betsChart++, wdbSpeed[_0x4e9b5d(0x373)]++, lastBet['target'] = target, lastBet['Target'] = target, lastBet[_0x4e9b5d(0xec)] = result, lastBet[_0x4e9b5d(0x2fe)] = result, lastBet[_0x4e9b5d(0x1ff)] = currentprofit, lastBet[_0x4e9b5d(0x370)] = currentprofit, lastBet[_0x4e9b5d(0x2c1)] = lastBet[_0x4e9b5d(0x1e3)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, profitChart += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    if (_0x5c8a18[_0x4e9b5d(0x366)](game, _0x5c8a18['cvqSz']))
        bethigh ? _0x5c8a18[_0x4e9b5d(0x26f)](lastBet[_0x4e9b5d(0xec)], lastBet[_0x4e9b5d(0xf2)]) ? win = !![] : win = ![] : _0x5c8a18[_0x4e9b5d(0x26a)](lastBet['result'], lastBet[_0x4e9b5d(0xf2)]) ? win = !![] : win = ![];
    else {
        if (_0x5c8a18['AgnHD'](game, _0x5c8a18[_0x4e9b5d(0x20a)]))
            _0x5c8a18['GtsGS'](lastBet['profit'], 0x0) ? win = !![] : win = ![];
        else
            _0x5c8a18[_0x4e9b5d(0x288)](lastBet['result'], lastBet['target']) ? win = !![] : win = ![];
    }
    if (win) {
        const _0x13d70f = '2|1|0|3|4'[_0x4e9b5d(0x11e)]('|');
        let _0x580685 = 0x0;
        while (!![]) {
            switch (_0x13d70f[_0x580685++]) {
            case '0':
                winstreak++;
                continue;
            case '1':
                wins++;
                continue;
            case '2':
                color = 'green';
                continue;
            case '3':
                losestreak = 0x0;
                continue;
            case '4':
                currentstreak = winstreak;
                continue;
            }
            break;
        }
    } else {
        color = _0x5c8a18['OWBcC'], losses++, losestreak++, winstreak = 0x0, currentstreak = _0x5c8a18['NaoOO'](0x0, losestreak);
        if (previousbet > maxLosseAmount)
            maxLosseAmount = previousbet;
    }
    if (_0x5c8a18['GtsGS'](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x5c8a18[_0x4e9b5d(0x26f)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x5c8a18['GtsGS'](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x5c8a18[_0x4e9b5d(0x1ca)](balance, minbalance))
        minbalance = balance;
    if (_0x5c8a18[_0x4e9b5d(0x26f)](balance, maxbalance))
        maxbalance = balance;
    if (_0x5c8a18[_0x4e9b5d(0x256)](profit, minprofit))
        minprofit = profit;
    if (_0x5c8a18['sALVW'](profit, maxprofit))
        maxprofit = profit;
    const _0x47a7e2 = await _0x5c8a18[_0x4e9b5d(0x209)](updateStats), _0xcfc58d = await _0x5c8a18[_0x4e9b5d(0x209)](updateChart), _0x2371c7 = await _0x5c8a18['heyoi'](updateHistory);
    Promise[_0x4e9b5d(0xe5)]([
        _0x47a7e2,
        _0xcfc58d,
        _0x2371c7
    ])[_0x4e9b5d(0x18a)](async _0x292a58 => {
        const _0x106118 = _0x4e9b5d;
        try {
            if (_0x5c8a18['OChRP'](mode, _0x5c8a18[_0x106118(0x280)]))
                await _0x5c8a18[_0x106118(0x387)](updateLua);
            else {
                if (_0x5c8a18[_0x106118(0x2a8)](mode, 'js'))
                    await _0x5c8a18['FJBJW'](dobet);
                else
                    mode === _0x5c8a18['qHSpM'] && await handleAdvanced();
            }
            if (_0x5c8a18['HOCiG'](win, sOW))
                return _0x5c8a18['SZKnW'](stop);
            if (run)
                return _0x5c8a18['heyoi'](playBet);
        } catch (_0x159e49) {
            _0x5c8a18[_0x106118(0x209)](stop), _0x5c8a18[_0x106118(0x25a)](log, _0x159e49);
        }
    });
}
function _0x19bc() {
    const _0x4b2409 = [
        'clear',
        'FUVxu',
        'yNjZF',
        'gKnfA',
        '2|8|0|12|1|6|7|11|16|13|5|9|14|15|4|10|17|3',
        '\x0a\x20\x20',
        'zYTvW',
        'UaOei',
        'length',
        'wdbWrapFunctions',
        'TckpU',
        'OdTHi',
        'lvufF',
        'wdbMenuCoin',
        'querySelectorAll',
        'HNifJ',
        'wuuGj',
        '#wdbWrapVariables\x20pre',
        'bIPyf',
        'oKqWE',
        'DGyuY',
        'lastChild',
        '2|1|0|5|3|4',
        'lmPge',
        'glEHJ',
        'NaN',
        'nonce',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'FRuRc',
        'YLuog',
        'Iqtbk',
        'MJHMe',
        'advancedBetHighOnProfit',
        'NfRCb',
        'JcqrL',
        'toString',
        'response',
        'gNUMX',
        'expires=',
        'VrJrF',
        'fCjJv',
        'start',
        'width',
        'uykhN',
        'RVPVL',
        '4043277HQdlrG',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'jdYAG',
        'LgTDI',
        'onmouseup',
        'chart',
        'none',
        'toFixed',
        'XcNfu',
        'profit',
        'wdbResumeButton',
        'VkMaK',
        'eQilQ',
        'hqzAP',
        'qztRr',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'URpnH',
        '#91f190',
        'rhfNb',
        'FJBJW',
        'FFFoS',
        'advancedBaseBet',
        'ihAzZ',
        'toUTCString',
        'PDOlG',
        'advancedStopOnLose',
        'qRkdn',
        'wdbCurrentStreak',
        'toUpperCase',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'QHmLN',
        '\x0a\x20\x20\x20\x20losestreak=',
        'chance',
        '1033161yUxBkF',
        'SBdLM',
        'BOmDx',
        'JugkG',
        'VMgQp',
        'minutes',
        'wdbScriptBoxLUA',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'showhistory',
        'fJHxy',
        'RFhfm',
        'BQMlG',
        'iBQBU',
        'light',
        'AqMyd',
        'render',
        'dobet()',
        'qKgRw',
        'resetseed',
        'TJipk',
        '0|1|3|5|7|9|6|2|4|8',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'FQJIb',
        '#000',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=\x20',
        'href',
        'updateLua\x20done',
        'red',
        'wdbWins',
        'Stop\x20on\x20balance\x20',
        'mode',
        'updateStats\x20ok',
        'tDFdx',
        'kWnIe',
        'text/plain;\x20charset=utf-8',
        'inAAt',
        'HPOjB',
        'eZxbb',
        'DiceScript',
        'cookie',
        'iMqOj',
        'DYxKH',
        'wdbWrap',
        'CHLOB',
        'IfMgl',
        '5px',
        'dvhSB',
        '\x20at\x20',
        'pVdqX',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'dYEww',
        'log',
        'lvMqE',
        'VeZbk',
        'resethistory',
        'zVfSG',
        'wdbMaxRows',
        'toLowerCase',
        'egarE',
        'scriptName',
        'WBETD',
        'dNWmB',
        'startlog',
        'OJNTV',
        'kCBvK',
        'starthistory',
        'vEJKa',
        'phmBI',
        'updateHistory\x20ok',
        'Stop\x20on\x20current\x20streak\x20',
        'amount',
        'VQwUk',
        'QoXrs',
        'yTYPo',
        'round',
        'VjlWW',
        'appendChild',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'wdbRunningScript',
        'icLbz',
        'TPnIb',
        'WlghB',
        'wdbHighLoseStreak',
        'ZiPAL',
        'advancedChanceOnLose',
        'yysTA',
        'kNWzV',
        'return\x20nextbet',
        'GtsGS',
        'PVQRr',
        'wdbWrapMode',
        'fixed',
        'advancedBetHighOnLose',
        'prepend',
        'hidechart',
        'yjtNw',
        'text',
        'left',
        'ZXPHJ',
        'jSgck',
        'RwWip',
        'NlRui',
        'XUkfQ',
        'advancedMultiOnWinBets',
        'SHZCc',
        'GulFe',
        'YJKQE',
        'FdwGv',
        '.js',
        'wdbAdvancedMode',
        'style',
        'lxdAs',
        'sKukV',
        'faSWQ',
        'Stop\x20on\x20',
        'tufLl',
        'wdbLUAMode',
        'cjhGX',
        'FYHDe',
        'wLXnA',
        'getTimeValues',
        'lUIuN',
        'querySelector',
        'SrCcL',
        'pJNoe',
        'LyeEd',
        'wdbFooter',
        'qIXst',
        'wdbToggleShowChart',
        'wdbBets',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'zHIdg',
        '<option\x20value=\x22',
        'wdbOpenLUAScript',
        'replace',
        'KZARN',
        'wdbWrapPercentProfit',
        'wdbHighLose',
        'wdbWrapControl',
        'LPHdO',
        'UrHmg',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=\x20',
        'lua',
        'value',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js',
        'OChRP',
        'fwmvS',
        'LBsYV',
        'advancedChanceOnWinBets',
        'bgsfW',
        '2426960NwGWew',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'JmGWI',
        '0:0:0:0',
        'OqFOI',
        'IbPGK',
        'KgQFY',
        'UiaRp',
        'KDFCP',
        'event',
        '\x20bet',
        'wJmsK',
        'wdbMenuMode',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'afZJJ',
        'wdbBalance',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Speed:\x20<span\x20id=\x22wdbSpeed\x22>0</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        '3|4|2|7|1|0|5|6',
        '<input\x20id=\x22bethigh',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'Nonce',
        'NgREc',
        'WeBgT',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'getValue',
        'AqMgF',
        'ieulG',
        'wdbToggleLiveChart',
        'wdbWrapHistory',
        '#wdbWrapFunctions\x20pre',
        'advancedStopOnLoseCheck',
        'wLKqs',
        'QCvnY',
        '</option>',
        'indexOf',
        'xFopy',
        'stopOnProfitCheck',
        'map',
        'WikUl',
        'wdbChart',
        'pfixp',
        'IOVxq',
        '#2a2a2a',
        'WLIxS',
        'wdbHistory',
        'lineColor',
        'Xizjq',
        'hide',
        '190px',
        'necSs',
        '350px',
        'nXifi',
        'return\x20currency',
        'aoGmz',
        'wdbWrapLog',
        'wdbMaxBalance',
        'createElement',
        '<style>\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20\x22Courier\x20New\x22,\x20monospace;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20padding:\x205px;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a#wdbHeader,\x0a#wdbFooter\x20{\x0a\x20\x20cursor:\x20move;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffc107;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-image:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-position:\x20right\x20center;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20#fff;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20|\x20',
        'AZvTY',
        'children',
        '1000px',
        'OGzkN',
        'checked',
        'stopOnBalanceCheck',
        'NFCmc',
        'Iqynl',
        'slice',
        'RTOPx',
        'yKvay',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'HKnRK',
        'wdbShowTips',
        'lwcuH',
        '#wdbSaveScriptButton',
        'flex',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'Stop\x20on\x20roll\x20number\x20',
        'qPRbH',
        'jrGDG',
        'BGNwU',
        'reset',
        'Result',
        'resetstatsOnProfitCheck',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'updateChart\x20ok',
        'SnFZk',
        'jbPem',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'wdbWrapLicenseBox',
        '<td>',
        'setValue',
        'xsMCh',
        'backgroundColor',
        'WItyE',
        '\x0a\x20\x20\x20\x20bets=',
        'oYXuc',
        'isTOK',
        'OMvmp',
        'wdbMinProfit',
        'click',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'bKlFV',
        'MjbOc',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'SCNyB',
        'pKMUQ',
        'FUVtR',
        'advancedChanceOnWin',
        'darcula',
        'bNkLG',
        'wdbMain',
        '\x0a\x20\x20\x20\x20chance=',
        'hours',
        'pfqKT',
        'wdbTime',
        'options',
        'GzkVJ',
        'EWHja',
        'JvPkz',
        'DxRbI',
        '7|5|9|0|4|10|3|11|6|1|8|2',
        'qVHBr',
        'XKrqR',
        'CFpPH',
        'axJMQ',
        '.lua',
        'joVQS',
        'toXHl',
        '#advancedBetHigh',
        'AJFKd',
        '/lib/easytimer.js',
        'abcdefghijklmnopqrstuvwxyz',
        'body',
        '$1=$1*$2\x20',
        'play',
        'low',
        '95vh',
        '380px',
        'advancedStopOnBetsCheck',
        'ZbEiT',
        'BzIGY',
        'offsetLeft',
        'Nxhjp',
        'kcJcP',
        'Gqfmm',
        'hidehistory',
        'dice',
        'HCddb',
        'Ppbtf',
        'sHdKz',
        'green',
        'return\x20scriptname',
        'save',
        'kXpkN',
        'block',
        'yAlit',
        'wdbStopOnWinButton',
        'xLTtZ',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        '/lib/fengari.js',
        'eRjdo',
        'wdbHeader',
        'beMbt',
        'XFuVY',
        'lXoUG',
        'MwgGP',
        'ioHvs',
        'MkYVh',
        'default',
        'substring',
        'DFlLb',
        'stoplog',
        'white',
        'wILUz',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'budhy',
        'lhDZM',
        '\x20win',
        'shift',
        'KTOdE',
        '12eAGiTD',
        'function\x20checkbalance()\x0a\x20js.global:checkbalance()\x0a\x20end',
        'cFKAu',
        'disabled',
        'AgnHD',
        'lidLQ',
        'zDaBx',
        '\x0a\x20\x20\x20\x20profit=',
        'lCfgl',
        'Isndu',
        'hoEZQ',
        'cwgsr',
        'load',
        'miVvu',
        'Profit',
        'lSRTQ',
        'wdbMaxProfit',
        'bets',
        'setTime',
        'wdbWrapTips',
        'BOpEi',
        'variables',
        'aeGSj',
        'advanced',
        'fMpov',
        'top',
        'FvlDk',
        '\x0a\x20\x20\x20\x20winstreak=',
        'showchart',
        'CPkeS',
        'Infinity',
        'resetall',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'stopOnProfit',
        'lXtBJ',
        '$1=$1-$2\x20',
        '\x0a\x20\x20\x20\x20minprofit=',
        'heyoi',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'Betting\x20',
        'getTime',
        'JXukU',
        'zrryS',
        'innerText',
        'jINAR',
        'hIDbt',
        'UjJNW',
        '\x20to\x20win',
        'poobR',
        'kPnCO',
        'history',
        '5|6|10|4|1|9|3|8|11|0|12|7|2',
        'jGRFJ',
        'GJovh',
        'fromTextArea',
        'ntmZL',
        'eHDaw',
        '\x0a\x20\x20\x20\x20balance=',
        'advancedStopAfterStreak',
        'charAt',
        'nsmPF',
        'zrHzz',
        'ktcpC',
        'show',
        'advancedBetHighOnBetCheck',
        'return\x20chance',
        'stopchart',
        'EPSILON',
        'wdbWrapVariables',
        'RHCvo',
        '3|2|5|1|7|0|6|4',
        'advancedBetHighOnLoseCheck',
        '\x0a\x20\x20\x20\x20minbalance=',
        'aAzmW',
        'Connected',
        'wdbShowVariables',
        'advancedStopOnWins',
        'wdbMinBalance',
        'advancedBetHighOnProfitCheck',
        'resetstatsOnProfit',
        'wlLBQ',
        'LVtpe',
        'hidestats',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'all',
        'PnHPq',
        'YwwPM',
        'now',
        'rWOUr',
        'ZeZns',
        'wdbLoader\x20ok',
        'result',
        '34qokTtD',
        'clientY',
        'gNutu',
        'floor',
        'return\x20bethigh',
        'target',
        'RYFbq',
        'Amount',
        'advancedBetHighOnWinCheck',
        'stop',
        'wdbStartButton',
        'aGvfS',
        '11414150VYFQcq',
        'clientX',
        '\x0a\x20\x20\x20\x20previousbet=',
        'resetlog',
        'rows',
        '#wdbHistory',
        'currency=\x22',
        'return\x20plinkoRow',
        'qjOrx',
        'JoRzI',
        'epiab',
        'oXxMR',
        'KvSsP',
        'PwrtF',
        '4|2|0|3|1|5',
        '0123456789',
        'black',
        'mqKUe',
        'dFwoJ',
        'pwGdj',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a--\x20log(casino)\x0a--\x20plinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a--\x20plinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a//\x20log(casino)\x0a//\x20plinkoRow=8\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a//\x20plinkoRisk=\x27low\x27\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>chance\x20:\x20%\x20win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20:\x20Plinko\x20rows,\x20only\x20for\x20plinko\x20game,\x20some\x20site\x20not\x20have\x0aplinkoRisk\x20:\x20risk\x20level\x20for\x20plinko\x20game\x20(low,\x20medium,\x20high)\x0abethigh\x20:\x20Bet\x20side\x20in\x20next\x20game\x20(true\x20is\x20over/above,\x20false\x20is\x20under/below)\x0anextbet\x20:\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20:\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20:\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20:\x20%\x20roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20:\x20Target\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.result\x20:\x20Result\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.profit,\x20currentprofit\x20:\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20:\x20Current\x20seed\x20nonce\x0alastBet.id\x20:\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20:\x20Currency\x20to\x20play\x20(some\x20site\x20not\x20work)\x0abalance\x20:\x20Current\x20balance\x0aminbalance\x20:\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20:\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20:\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20:\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20:\x20Session\x20profit\x0awagered\x20:\x20Session\x20wagered\x0awin\x20:\x20State\x20in\x20previous\x20game\x20(true\x20is\x20win,\x20false\x20is\x20lose)\x0abets\x20:\x20Bet\x20count\x0awins\x20:\x20Win\x20count\x0awinstreak\x20\x20:\x20Winning\x20streak\x0alosses\x20:\x20Lose\x20count\x0alosestreak\x20:\x20Losing\x20streak\x0acurrentstreak\x20:\x20Current\x20streak\x20(smaller\x200\x20is\x20losing\x20streak\x20and\x20vice\x20versa)\x0apartialprofit\x20:\x20Partial\x20profit\x20(same\x20in\x20other\x20dicebot)\x0ascriptname\x20:\x20Name\x20of\x20script\x20u\x20use\x0acasino\x20:\x20Name\x20of\x20casino\x20(example:\x20500.casino\x20=\x20500;\x20bch.games\x20=\x20bch)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a<pre>dobet()\x20:\x20Main\x20function\x20for\x20betting\x0astop()\x20:\x20Stop\x20betting\x0aresume()\x20:\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20:\x20Reset\x20fairness\x0aresetstats()\x20:\x20Reset\x20statistics\x0aresetchart()\x20:\x20Reset\x20chart\x0aresethistory()\x20:\x20Reset\x20history\x0aresetlog()\x20:\x20Reset\x20log\x0aresetall()\x20:\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20:\x20Check\x20actual\x20balance\x0aching()\x20:\x20Alert\x20with\x20sound\x0alog(message)\x20:\x20Write\x20a\x20message\x20in\x20Log\x20area\x0asleep(sec)\x20:\x20Pause\x20betting\x20system\x20with\x20sec\x0aresetpartialprofit()\x20:\x20Reset\x20partialprofit</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Click\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aHold\x20top\x20or\x20bottom\x20area\x20to\x20move\x20the\x20bot\x20around</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20bot.mhqb365.com\x20|\x20',
        'rPMKV',
        'advancedMultiOnLose',
        'XTKxk',
        'TEptX',
        '1372400bwdZcf',
        'wdbLog',
        '3|8|11|5|13|12|6|15|4|10|7|0|2|1|14|9',
        'createObjectURL',
        'wdbHighWinStreak',
        'onmousedown',
        '18650aUwwgf',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'BQvDp',
        'kqpIC',
        'wdbPercentProfit',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'split',
        'hSXVd',
        '</td>',
        'wdbScriptBoxJS',
        'AHxhk',
        'OTuWl',
        'CjbqK',
        'resetstats',
        '\x0a\x20\x20\x20\x20losses=',
        'div',
        'pause',
        'AmkeF',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=\x20',
        'push',
        'color',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'return\x20plinkoRisk',
        'dark1',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'DulZo',
        '#wdbOpenScript',
        'wdbWrapInitializing',
        'data',
        '#wdbWrapTips\x20pre',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'uxWNt',
        'VHAUJ',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'bpvtc',
        'eeTtE',
        'stophistory',
        'wCWTt',
        'setOption',
        'addEventListener',
        'wdbOpenJSScript',
        '9|5|7|4|3|0|2|6|1|8',
        'wdbJSMode',
        '4qSbESR',
        'QfMWN',
        'xkghP',
        'dnOgJ',
        'wdbPercentWagered',
        'tEqGb',
        'yQTFl',
        'kdKsD',
        'aLElj',
        'URL',
        'numeric',
        'wdbStats',
        'EsLQQ',
        'GwYko',
        'nbqvf',
        'secondsUpdated',
        'APOXo',
        'www.',
        'qlCmH',
        'theme',
        'asIsp',
        'wdbShowLog',
        'wdb',
        'stopOnBalance',
        'bdqhD',
        'lWqgJ',
        'aJurx',
        'JWimB',
        'QGiDl',
        'OWTtd',
        'OqOHm',
        'fyXAl',
        'AzcUH',
        'zsOWl',
        'seconds',
        'AkaDB',
        'mxCmN',
        'tPoUB',
        'forEach',
        'getElementById',
        'XLHHr',
        'cQLMQ',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'bSXMu',
        'roll',
        '6|9|5|8|3|1|0|7|4|2',
        '4|9|7|5|8|1|6|3|2|0',
        'oCobd',
        'ogHXm',
        'UdLwB',
        'JNtrC',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'vQRKJ',
        'bxall',
        '#ffc0cb',
        'grbDh',
        'CDNeI',
        'remove',
        'ouoSQ',
        'CUzzl',
        'UgiRQ',
        'offsetTop',
        'message',
        'fZNuQ',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'tYuHB',
        'download',
        'MjXQD',
        'exiIC',
        '0vh',
        'HHIAV',
        'then',
        'EzAGy',
        'hmcif',
        '922581cSZcBf',
        'lglaA',
        'vQnYs',
        'xrFlS',
        'qCyQv',
        'XJLFn',
        'vrzDt',
        '/media/ching.mp3',
        'advancedMultiOnLoseBets',
        'BClJw',
        'WBJCR',
        '#fff',
        'KaZHM',
        'tips',
        'height',
        'kHbsB',
        'aRrQS',
        'display',
        'BZWCC',
        'WYmcW',
        'innerHTML',
        '$1=$1+$2\x20',
        'showstats',
        'Ffztf',
        'SdJlu',
        'QBVMN',
        'fWsBK',
        'PbXaF',
        '\x20lose',
        'wdbWagered',
        'advancedMultiOnWin',
        'javascript',
        'IIclH',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'hauZi',
        'plinko',
        'hilOw',
        'wdbShowMode',
        'Stop\x20on\x20profit\x20',
        'mdqqO',
        'LueoF',
        'GVbVO',
        'kZeNo',
        'insertBefore',
        'getElementsByTagName',
        'Chart',
        'wdbToggleLiveHistory',
        'jMnLt',
        'urNxt',
        'wdbToggleShowHistory',
        'script',
        'Bbxya',
        '\x0a\x20\x20\x20\x20maxbalance=',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'JAfvd',
        'alphabet',
        'mgSbe',
        'resetchart',
        'handleAdvanced\x20ok',
        'cIxTt'
    ];
    _0x19bc = function () {
        return _0x4b2409;
    };
    return _0x19bc();
}
async function updateStats() {
    const _0x46b64c = _0x4881a2, _0x29f1cb = {
            'AHxhk': function (_0xef6cfb, _0xad9148) {
                return _0xef6cfb === _0xad9148;
            },
            'HHIAV': _0x46b64c(0x35a),
            'qIXst': _0x46b64c(0x109),
            'AJFKd': function (_0x4c421d, _0x3fcecb) {
                return _0x4c421d < _0x3fcecb;
            },
            'zYTvW': _0x46b64c(0x232),
            'qlCmH': _0x46b64c(0x344),
            'BDHFn': function (_0x52e459, _0x4edf26) {
                return _0x52e459 === _0x4edf26;
            },
            'dYEww': function (_0x1dfda5, _0x328fd8) {
                return _0x1dfda5 < _0x328fd8;
            },
            'JWimB': _0x46b64c(0x116),
            'SBdLM': function (_0x1f00ff, _0x113ddd) {
                return _0x1f00ff > _0x113ddd;
            },
            'RTOPx': _0x46b64c(0x269),
            'ORyiz': _0x46b64c(0x1aa),
            'WeBgT': _0x46b64c(0x2bc),
            'JmGWI': 'wdbProfit',
            'LVtpe': 'wdbHighBet',
            'mgSbe': _0x46b64c(0x298),
            'iMqOj': _0x46b64c(0x233),
            'NQsGU': 'wdbLosses',
            'pXdzM': _0x46b64c(0x2e4),
            'LzZDh': _0x46b64c(0x310),
            'aGvfS': _0x46b64c(0x372),
            'rWOUr': function (_0x541545, _0x333bde) {
                return _0x541545 / _0x333bde;
            },
            'ogHXm': function (_0x4da6f7, _0x346f40) {
                return _0x4da6f7 * _0x346f40;
            },
            'hauZi': function (_0x5e6d06, _0x476835) {
                return _0x5e6d06 === _0x476835;
            },
            'TckpU': function (_0x2738db, _0x2ac502) {
                return _0x2738db(_0x2ac502);
            },
            'jowXD': function (_0xbee20c, _0x170e6f) {
                return _0xbee20c === _0x170e6f;
            },
            'JvPkz': function (_0x2ca1b3, _0x5d1448) {
                return _0x2ca1b3(_0x5d1448);
            },
            'HNifJ': _0x46b64c(0x1e2),
            'oYXuc': function (_0x1bd771, _0x336c66) {
                return _0x1bd771 / _0x336c66;
            },
            'JXukU': function (_0x560066, _0x4f2d44) {
                return _0x560066 / _0x4f2d44;
            },
            'dnOgJ': function (_0x1edc3a, _0x5ed29d) {
                return _0x1edc3a * _0x5ed29d;
            },
            'SCNyB': function (_0x3135b8, _0x60ad17) {
                return _0x3135b8 + _0x60ad17;
            },
            'Xizjq': _0x46b64c(0x380),
            'qjOrx': function (_0x6ead29, _0x46d477) {
                return _0x6ead29 === _0x46d477;
            },
            'BEQdG': _0x46b64c(0x29f),
            'bYyvY': _0x46b64c(0x11c),
            'IbPGK': _0x46b64c(0x236)
        }, _0x56c917 = _0x29f1cb[_0x46b64c(0x122)](profit, 0x0) ? darkMode ? _0x29f1cb[_0x46b64c(0x189)] : _0x29f1cb[_0x46b64c(0x296)] : _0x29f1cb[_0x46b64c(0x32f)](profit, 0x0) ? _0x29f1cb[_0x46b64c(0x1cf)] : _0x29f1cb[_0x46b64c(0x155)], _0xcee789 = _0x29f1cb['BDHFn'](currentstreak, 0x0) ? darkMode ? _0x29f1cb[_0x46b64c(0x189)] : _0x29f1cb[_0x46b64c(0x296)] : _0x29f1cb[_0x46b64c(0x249)](currentstreak, 0x0) ? _0x29f1cb['zYTvW'] : _0x29f1cb[_0x46b64c(0x155)], _0x52769d = maxwinstreak > 0x0 ? _0x29f1cb[_0x46b64c(0x155)] : _0x29f1cb['qIXst'];
    document[_0x46b64c(0x16a)](_0x29f1cb[_0x46b64c(0x15e)])[_0x46b64c(0x285)][_0x46b64c(0x12c)] = _0x52769d;
    const _0x1b792d = _0x29f1cb[_0x46b64c(0x218)](maxlosestreak, 0x0) ? _0x29f1cb[_0x46b64c(0x1cf)] : _0x29f1cb['qIXst'];
    document[_0x46b64c(0x16a)](_0x29f1cb['RTOPx'])['style'][_0x46b64c(0x12c)] = _0x1b792d, document[_0x46b64c(0x16a)](_0x29f1cb['ORyiz'])[_0x46b64c(0xbc)] = wagered[_0x46b64c(0x1fd)](decimalAmountView), document[_0x46b64c(0x16a)](_0x29f1cb[_0x46b64c(0x2c3)])[_0x46b64c(0xbc)] = balance['toFixed'](decimalAmountView), document[_0x46b64c(0x16a)](_0x29f1cb['JmGWI'])[_0x46b64c(0x285)]['color'] = _0x56c917, document[_0x46b64c(0x16a)](_0x29f1cb[_0x46b64c(0x2af)])[_0x46b64c(0xbc)] = profit['toFixed'](decimalAmountView), document['getElementById'](_0x29f1cb[_0x46b64c(0xe2)])[_0x46b64c(0xbc)] = maxBetAmount[_0x46b64c(0x1fd)](decimalAmountView), document['getElementById'](_0x46b64c(0x2a0))[_0x46b64c(0xbc)] = maxLosseAmount[_0x46b64c(0x1fd)](decimalAmountView), document['getElementById'](_0x29f1cb[_0x46b64c(0x1c5)])[_0x46b64c(0xbc)] = bets, document['getElementById'](_0x29f1cb[_0x46b64c(0x23f)])[_0x46b64c(0xbc)] = wins, document[_0x46b64c(0x16a)](_0x29f1cb['NQsGU'])['innerText'] = losses, document['getElementById'](_0x46b64c(0x211))[_0x46b64c(0x285)][_0x46b64c(0x12c)] = _0xcee789, document[_0x46b64c(0x16a)](_0x46b64c(0x211))[_0x46b64c(0xbc)] = currentstreak, document['getElementById'](_0x29f1cb[_0x46b64c(0x15e)])['innerText'] = maxwinstreak, document[_0x46b64c(0x16a)](_0x29f1cb[_0x46b64c(0x2f0)])['innerText'] = maxlosestreak, document[_0x46b64c(0x16a)](_0x46b64c(0xde))[_0x46b64c(0xbc)] = minbalance['toFixed'](decimalAmountView), document['getElementById'](_0x29f1cb['pXdzM'])[_0x46b64c(0xbc)] = maxbalance[_0x46b64c(0x1fd)](decimalAmountView), document[_0x46b64c(0x16a)](_0x29f1cb['LzZDh'])[_0x46b64c(0xbc)] = minprofit[_0x46b64c(0x1fd)](decimalAmountView), document[_0x46b64c(0x16a)](_0x29f1cb[_0x46b64c(0xf8)])['innerText'] = maxprofit[_0x46b64c(0x1fd)](decimalAmountView), percentWagered = _0x29f1cb[_0x46b64c(0xe9)](wagered, startBalance), percentWagered = Math[_0x46b64c(0x261)](_0x29f1cb[_0x46b64c(0x173)](percentWagered + Number[_0x46b64c(0xd4)], 0x64)) / 0x64;
    if (_0x29f1cb[_0x46b64c(0x1af)](_0x29f1cb[_0x46b64c(0x1d3)](String, percentWagered), _0x46b64c(0x380)) || _0x29f1cb['jowXD'](_0x29f1cb['JvPkz'](String, percentWagered), _0x29f1cb['HNifJ']))
        percentWagered = 0x0;
    document[_0x46b64c(0x16a)](_0x46b64c(0x147))['innerText'] = percentWagered, percentProfit = _0x29f1cb[_0x46b64c(0x30d)](profit, startBalance) * 0x64, percentProfit = _0x29f1cb[_0x46b64c(0xba)](Math['round'](_0x29f1cb[_0x46b64c(0x146)](_0x29f1cb[_0x46b64c(0x316)](percentProfit, Number[_0x46b64c(0xd4)]), 0x64)), 0x64);
    if (String(percentProfit) === _0x29f1cb[_0x46b64c(0x2db)] || _0x29f1cb[_0x46b64c(0x101)](_0x29f1cb[_0x46b64c(0x324)](String, percentProfit), _0x29f1cb[_0x46b64c(0x1d8)]))
        percentProfit = 0x0;
    return document['getElementById'](_0x29f1cb['BEQdG'])['style']['color'] = _0x56c917, document['getElementById'](_0x29f1cb['bYyvY'])[_0x46b64c(0xbc)] = percentProfit, _0x29f1cb[_0x46b64c(0x2b2)];
}
function drawChart() {
    const _0x40f29e = _0x4881a2, _0x35ea08 = {
            'fMpov': 'wdbChart',
            'lujmE': 'dark1',
            'RwWip': 'line'
        };
    dps = [{
            'x': betsChart,
            'y': profitChart
        }], chart = new CanvasJS[(_0x40f29e(0x1ba))](_0x35ea08[_0x40f29e(0x37a)], {
        'theme': darkMode ? _0x35ea08['lujmE'] : 'light1',
        'axisY': { 'includeZero': ![] },
        'data': [{
                'type': _0x35ea08[_0x40f29e(0x27b)],
                'markerSize': 0x0,
                'dataPoints': dps
            }]
    }), chart['render']();
}
async function updateChart() {
    const _0x48840f = _0x4881a2, _0x25e9aa = {
            'Bbxya': function (_0x3b169c, _0x442afc) {
                return _0x3b169c > _0x442afc;
            },
            'inAAt': function (_0x47b543, _0x27e3a9) {
                return _0x47b543 - _0x27e3a9;
            },
            'vQnYs': function (_0x3881c9, _0x30330b) {
                return _0x3881c9 - _0x30330b;
            }
        };
    if (!stopChart) {
        dps[_0x48840f(0x12b)]({
            'x': betsChart,
            'y': profitChart,
            'color': color
        });
        if (_0x25e9aa[_0x48840f(0x1c0)](dps[_0x48840f(0x1d1)], maxRows))
            dps[_0x48840f(0x360)]();
        if (dps[_0x25e9aa[_0x48840f(0x23a)](dps[_0x48840f(0x1d1)], 0x2)])
            dps[_0x25e9aa[_0x48840f(0x18f)](dps[_0x48840f(0x1d1)], 0x2)][_0x48840f(0x2da)] = color;
        chart[_0x48840f(0x226)]();
    }
    return _0x48840f(0x301);
}
async function updateHistory() {
    const _0x34429a = _0x4881a2, _0x588757 = {
            'kqpIC': function (_0x16e8e3, _0x8a58e5) {
                return _0x16e8e3 === _0x8a58e5;
            },
            'APOXo': 'dice',
            'tDFdx': function (_0x768ce9, _0x1eb3fe) {
                return _0x768ce9 + _0x1eb3fe;
            },
            'cQLMQ': function (_0x20ff01, _0x36fb29) {
                return _0x20ff01(_0x36fb29);
            },
            'GJovh': _0x34429a(0x1b0),
            'fyXAl': function (_0x2aeb3d, _0x5a2aa4) {
                return _0x2aeb3d(_0x5a2aa4);
            },
            'JNtrC': function (_0x197666, _0x4e0141) {
                return _0x197666(_0x4e0141);
            },
            'qztRr': _0x34429a(0x207),
            'DxRbI': _0x34429a(0x179),
            'WItyE': _0x34429a(0x2d9),
            'RSjpj': function (_0x235e4c, _0x5980a8) {
                return _0x235e4c > _0x5980a8;
            },
            'CDNeI': _0x34429a(0xfe),
            'FDQTe': _0x34429a(0x25b)
        };
    if (!stopHistory) {
        const _0x279b3a = _0x588757[_0x34429a(0x11b)](game, _0x588757[_0x34429a(0x153)]) ? bethigh ? '>' : '<' : '>', _0x37ee3d = bethigh ? _0x34429a(0x2bf) + bets + _0x34429a(0x22c) : '<input\x20id=\x22bethigh' + bets + _0x34429a(0x2c0), _0x146bbe = '' + (havePlinkoRows ? _0x588757['tDFdx'](plinkoRow, '\x20|\x20') : '') + plinkoRisk, _0xe0d18b = _0x34429a(0x307) + bets + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x588757['cQLMQ'](Number, lastBet['amount'])[_0x34429a(0x1fd)](decimalAmountView) + _0x34429a(0x305) + _0x37ee3d + _0x34429a(0x305) + (game === _0x588757[_0x34429a(0xc6)] ? _0x146bbe : _0x588757[_0x34429a(0x16c)](Number, lastBet['chance'])[_0x34429a(0x1fd)](decimalChanceView)) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + Number(lastBet[_0x34429a(0x16f)])['toFixed'](decimalChanceView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x588757[_0x34429a(0x16c)](Number, lastBet['profit'])[_0x34429a(0x1fd)](decimalAmountView) + _0x34429a(0x305) + (_0x588757[_0x34429a(0x11b)](game, _0x588757['GJovh']) ? _0x146bbe : _0x588757[_0x34429a(0x237)](_0x279b3a, _0x588757[_0x34429a(0x162)](Number, target)['toFixed'](decimalTargetResult))) + _0x34429a(0x305) + _0x588757[_0x34429a(0x175)](Number, result)['toFixed'](decimalTargetResult) + _0x34429a(0x305) + lastBet['nonce'] + _0x34429a(0x305) + lastBet['id'] + _0x34429a(0x120), _0x3df854 = document[_0x34429a(0x2e5)]('tr');
        if (win)
            _0x3df854[_0x34429a(0x285)][_0x34429a(0x30a)] = _0x588757[_0x34429a(0x204)];
        else
            _0x3df854[_0x34429a(0x285)][_0x34429a(0x30a)] = _0x588757[_0x34429a(0x325)];
        _0x3df854['innerHTML'] = _0xe0d18b, document[_0x34429a(0x16a)](_0x588757[_0x34429a(0x30b)])['insertBefore'](_0x3df854, document[_0x34429a(0x16a)](_0x588757['WItyE'])[_0x34429a(0x2e8)][0x0]);
        const _0x4f1e88 = document[_0x34429a(0x291)](_0x34429a(0xfe))[_0x34429a(0xfd)];
        if (_0x588757['RSjpj'](_0x4f1e88[_0x34429a(0x1d1)], maxRows))
            document[_0x34429a(0x291)](_0x588757[_0x34429a(0x17b)])[_0x34429a(0x1de)]['remove']();
    }
    return _0x588757['FDQTe'];
}
function log(_0x105bb9) {
    const _0x4e4b00 = _0x4881a2, _0x523132 = { 'zVfSG': _0x4e4b00(0x113) }, _0x1aa350 = document[_0x4e4b00(0x16a)](_0x523132[_0x4e4b00(0x24e)]), _0x52def4 = document[_0x4e4b00(0x2e5)]('li');
    _0x52def4[_0x4e4b00(0xbc)] = '' + _0x105bb9, document['getElementById'](_0x523132[_0x4e4b00(0x24e)])[_0x4e4b00(0x1b8)](_0x52def4, _0x1aa350[_0x4e4b00(0x2e8)][0x0]);
    const _0x2ab82e = _0x1aa350[_0x4e4b00(0x1b9)]('li');
    if (_0x2ab82e[_0x4e4b00(0x1d1)] > maxRows)
        document[_0x4e4b00(0x16a)](_0x523132['zVfSG'])['removeChild'](_0x1aa350[_0x4e4b00(0x1de)]);
}
async function start() {
    const _0x469112 = _0x4881a2, _0x5cb6b8 = {
            'XJLFn': 'wdbTime',
            'FDtKI': _0x469112(0x2b0),
            'EsLQQ': _0x469112(0x1d6),
            'KvSsP': 'wdbMenuMode',
            'HCddb': _0x469112(0x200),
            'yysTA': _0x469112(0x2f6),
            'cFKAu': _0x469112(0x132),
            'lSRTQ': function (_0x269285, _0x6e6e5) {
                return _0x269285 === _0x6e6e5;
            },
            'xFopy': 'not\x20',
            'lmPge': _0x469112(0x1a2),
            'Ffztf': '$1=$1/$2\x20',
            'wuuGj': function (_0x4a60fa, _0x3305dd) {
                return _0x4a60fa === _0x3305dd;
            },
            'kcJcP': function (_0x142b0b, _0x5a7db3) {
                return _0x142b0b !== _0x5a7db3;
            },
            'kCBvK': _0x469112(0x265),
            'FNzDh': _0x469112(0x1bf),
            'ZpLxL': _0x469112(0x379),
            'oXxMR': _0x469112(0x20b),
            'JXxkv': function (_0x18fb95, _0x3503fa) {
                return _0x18fb95(_0x3503fa);
            },
            'LCbIs': 'advancedChance',
            'eZxbb': function (_0xcc711b) {
                return _0xcc711b();
            },
            'UmWnt': function (_0x205688, _0x32220b) {
                return _0x205688(_0x32220b);
            }
        };
    try {
        if (!run) {
            document[_0x469112(0x16a)](_0x5cb6b8[_0x469112(0x192)])[_0x469112(0xbc)] = _0x5cb6b8['FDtKI'], document[_0x469112(0x16a)](_0x5cb6b8[_0x469112(0x14f)])[_0x469112(0x365)] = !![], document[_0x469112(0x16a)](_0x5cb6b8[_0x469112(0x105)])[_0x469112(0x365)] = !![], document[_0x469112(0x16a)](_0x469112(0xf7))['disabled'] = !![], document[_0x469112(0x16a)](_0x5cb6b8[_0x469112(0x341)])[_0x469112(0x365)] = !![], document[_0x469112(0x1d7)](_0x5cb6b8[_0x469112(0x26c)])[_0x469112(0x169)](_0x21a8f4 => _0x21a8f4[_0x469112(0x365)] = !![]), document[_0x469112(0x1d7)](_0x5cb6b8[_0x469112(0x364)])[_0x469112(0x169)](_0x389bf8 => _0x389bf8['disabled'] = !![]), run = !![], sOW = ![], wdbTimer[_0x469112(0xf6)](), wdbTimer[_0x469112(0x1f2)](), wdbSpeed[_0x469112(0xf6)](), wdbSpeed['start']();
            if (_0x5cb6b8[_0x469112(0x371)](mode, _0x469112(0x2a5)))
                diceScript = luaEditor[_0x469112(0x2c5)](), diceScript = diceScript[_0x469112(0x29d)](/!=/g, '~=')['replace'](/!/g, _0x5cb6b8[_0x469112(0x2d0)])[_0x469112(0x29d)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x5cb6b8[_0x469112(0x1e0)])['replace'](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x469112(0x385))['replace'](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x469112(0x333))[_0x469112(0x29d)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x5cb6b8[_0x469112(0x1a4)]), fengari[_0x469112(0x36e)](diceScript)();
            else {
                if (_0x5cb6b8[_0x469112(0x1d9)](mode, 'js')) {
                    if (_0x5cb6b8[_0x469112(0x33d)](document[_0x469112(0x16a)](_0x5cb6b8[_0x469112(0x257)]), null))
                        document[_0x469112(0x16a)](_0x5cb6b8[_0x469112(0x257)])[_0x469112(0x17c)]();
                    diceScript = jsEditor[_0x469112(0x2c5)]();
                    let _0x2bf528 = document[_0x469112(0x2e5)](_0x5cb6b8['FNzDh']);
                    _0x2bf528['id'] = _0x469112(0x265), _0x2bf528[_0x469112(0x1a1)] = diceScript, document['head'][_0x469112(0x263)](_0x2bf528);
                } else
                    mode === _0x5cb6b8['ZpLxL'] && (basebet = Number(document['getElementById'](_0x5cb6b8[_0x469112(0x104)])[_0x469112(0x2a6)]), nextbet = basebet, chance = _0x5cb6b8['JXxkv'](Number, document['getElementById'](_0x5cb6b8['LCbIs'])['value']), bethigh = document[_0x469112(0x291)](_0x469112(0x32e))[_0x469112(0x2eb)]);
            }
            if (run)
                return playBet();
        }
    } catch (_0x3d1be6) {
        _0x5cb6b8[_0x469112(0x23c)](stop), _0x5cb6b8['UmWnt'](log, _0x3d1be6);
    }
}
function stop() {
    const _0x3c8e74 = _0x4881a2, _0x577e80 = {
            'nFGpj': '3|2|0|8|4|1|7|6|9|10|5',
            'zHIdg': _0x3c8e74(0x2b9),
            'OTuWl': 'wdbMenuCoin',
            'kWnIe': _0x3c8e74(0x34a),
            'NlRui': 'wdbResumeButton',
            'XLHHr': _0x3c8e74(0xf7),
            'tPmGC': '#wdbSaveScriptButton',
            'AqMyd': _0x3c8e74(0x132)
        };
    if (run) {
        const _0x5d49d8 = _0x577e80['nFGpj'][_0x3c8e74(0x11e)]('|');
        let _0x968dce = 0x0;
        while (!![]) {
            switch (_0x5d49d8[_0x968dce++]) {
            case '0':
                wdbSpeed[_0x3c8e74(0x128)]();
                continue;
            case '1':
                document['getElementById'](_0x577e80[_0x3c8e74(0x29a)])[_0x3c8e74(0x365)] = ![];
                continue;
            case '2':
                sOW = ![];
                continue;
            case '3':
                run = ![];
                continue;
            case '4':
                document[_0x3c8e74(0x16a)](_0x577e80[_0x3c8e74(0x123)])[_0x3c8e74(0x365)] = ![];
                continue;
            case '5':
                document[_0x3c8e74(0x16a)](_0x577e80[_0x3c8e74(0x238)])[_0x3c8e74(0x365)] = ![];
                continue;
            case '6':
                document[_0x3c8e74(0x16a)](_0x577e80[_0x3c8e74(0x27c)])[_0x3c8e74(0x365)] = ![];
                continue;
            case '7':
                document['getElementById'](_0x577e80[_0x3c8e74(0x16b)])[_0x3c8e74(0x365)] = ![];
                continue;
            case '8':
                wdbTimer[_0x3c8e74(0x128)]();
                continue;
            case '9':
                document[_0x3c8e74(0x1d7)](_0x577e80['tPmGC'])['forEach'](_0x5ef674 => _0x5ef674[_0x3c8e74(0x365)] = ![]);
                continue;
            case '10':
                document[_0x3c8e74(0x1d7)](_0x577e80[_0x3c8e74(0x225)])[_0x3c8e74(0x169)](_0x48b7b2 => _0x48b7b2['disabled'] = ![]);
                continue;
            }
            break;
        }
    }
}
async function resume(_0x39ec3e) {
    const _0x144fb0 = _0x4881a2, _0x1d7f0e = {
            'OGzkN': _0x144fb0(0x326),
            'jdYAG': _0x144fb0(0x200),
            'jGRFJ': function (_0x25d8c2) {
                return _0x25d8c2();
            },
            'sDeby': function (_0x2653fd, _0x220d26) {
                return _0x2653fd(_0x220d26);
            },
            'XUkfQ': _0x144fb0(0x2f2),
            'zsOWl': _0x144fb0(0x2f6),
            'gKnfA': 'wdbMenuMode',
            'eRjdo': _0x144fb0(0x1d6),
            'joVQS': _0x144fb0(0x132)
        };
    if (!run) {
        const _0x228cde = _0x1d7f0e[_0x144fb0(0x2ea)][_0x144fb0(0x11e)]('|');
        let _0x3f323e = 0x0;
        while (!![]) {
            switch (_0x228cde[_0x3f323e++]) {
            case '0':
                document[_0x144fb0(0x16a)](_0x1d7f0e[_0x144fb0(0x1f8)])[_0x144fb0(0x365)] = !![];
                continue;
            case '1':
                wdbSpeed[_0x144fb0(0x1f2)]();
                continue;
            case '2':
                return _0x1d7f0e[_0x144fb0(0xc5)](playBet);
            case '3':
                !_0x39ec3e && (_0x1d7f0e['sDeby'](log, _0x1d7f0e[_0x144fb0(0x27d)]), await new Promise(_0x457a61 => setTimeout(_0x457a61, 0x1388)));
                continue;
            case '4':
                document[_0x144fb0(0x1d7)](_0x1d7f0e[_0x144fb0(0x164)])[_0x144fb0(0x169)](_0x27a907 => _0x27a907[_0x144fb0(0x365)] = !![]);
                continue;
            case '5':
                document[_0x144fb0(0x16a)](_0x1d7f0e[_0x144fb0(0x1cc)])[_0x144fb0(0x365)] = !![];
                continue;
            case '6':
                sOW = ![];
                continue;
            case '7':
                document[_0x144fb0(0x16a)](_0x1d7f0e[_0x144fb0(0x34e)])[_0x144fb0(0x365)] = !![];
                continue;
            case '8':
                wdbTimer[_0x144fb0(0x1f2)]();
                continue;
            case '9':
                document[_0x144fb0(0x16a)](_0x144fb0(0xf7))['disabled'] = !![];
                continue;
            case '10':
                document[_0x144fb0(0x1d7)](_0x1d7f0e[_0x144fb0(0x32c)])['forEach'](_0x284ed9 => _0x284ed9['disabled'] = !![]);
                continue;
            case '11':
                run = !![];
                continue;
            }
            break;
        }
    }
}
function stopOnWin() {
    const _0x2f3822 = _0x4881a2, _0x5efa0b = { 'IqdXz': _0x2f3822(0x34a) };
    sOW = !![];
    if (run)
        document[_0x2f3822(0x16a)](_0x5efa0b['IqdXz'])[_0x2f3822(0x365)] = !![];
}
async function playBet() {
    const _0x10b782 = _0x4881a2, _0x24779a = {
            'gNutu': _0x10b782(0x2a5),
            'vQRKJ': _0x10b782(0xd2),
            'RVPVL': _0x10b782(0xf1),
            'fWsBK': function (_0x17513b, _0x3e05c4) {
                return _0x17513b(_0x3e05c4);
            },
            'lglaA': function (_0x5732c0, _0xe16069) {
                return _0x5732c0 === _0xe16069;
            },
            'GwYko': _0x10b782(0x1b0),
            'uozgq': function (_0x3a4503, _0x2d9907) {
                return _0x3a4503 === _0x2d9907;
            },
            'Iqynl': 'high',
            'iBQBU': 'low',
            'MJHMe': function (_0x433480) {
                return _0x433480();
            },
            'jrGDG': function (_0x56108d) {
                return _0x56108d();
            },
            'FvlDk': function (_0x227408, _0x9e8248) {
                return _0x227408(_0x9e8248);
            }
        };
    try {
        mode === _0x24779a[_0x10b782(0xef)] && (nextbet = fengari['load'](_0x10b782(0x26e))(), chance = fengari['load'](_0x24779a[_0x10b782(0x177)])(), bethigh = fengari[_0x10b782(0x36e)](_0x24779a[_0x10b782(0x1f5)])());
        nextbet = Number(nextbet), chance = _0x24779a[_0x10b782(0x1a7)](Number, chance), previousbet = nextbet, lastBet[_0x10b782(0x25d)] = nextbet, lastBet[_0x10b782(0xf4)] = nextbet, lastBet[_0x10b782(0x216)] = chance, lastBet['Chance'] = chance;
        if (!stopLog) {
            if (_0x24779a[_0x10b782(0x18e)](game, _0x24779a[_0x10b782(0x150)])) {
                const _0x591a1 = '' + (havePlinkoRows ? plinkoRow + '\x20|\x20' : '') + plinkoRisk, _0x2d9a3f = _0x10b782(0x389) + Number(lastBet[_0x10b782(0x25d)])['toFixed'](decimalAmountView) + '\x20at\x20' + _0x591a1 + _0x10b782(0xc0);
                log(_0x2d9a3f);
            } else {
                const _0x14444b = _0x24779a['uozgq'](game, _0x10b782(0x340)) ? bethigh ? _0x24779a['Iqynl'] : _0x24779a[_0x10b782(0x223)] : _0x24779a[_0x10b782(0x2ee)], _0x5819da = _0x10b782(0x389) + _0x24779a['fWsBK'](Number, lastBet[_0x10b782(0x25d)])[_0x10b782(0x1fd)](decimalAmountView) + _0x10b782(0x246) + Number(lastBet[_0x10b782(0x216)])[_0x10b782(0x1fd)](decimalChanceView) + '%\x20chance\x20to\x20win,\x20' + _0x14444b;
                log(_0x5819da);
            }
        }
        if (run)
            return _0x24779a[_0x10b782(0x1e8)](sendBet);
    } catch (_0xc7c439) {
        _0x24779a[_0x10b782(0x2fb)](stop), _0x24779a[_0x10b782(0x37c)](log, _0xc7c439);
    }
}
function resetall() {
    const _0x6fcdfa = _0x4881a2, _0x322aac = {
            'nXifi': _0x6fcdfa(0x1c9),
            'WBETD': function (_0x5534a8, _0x4e5863) {
                return _0x5534a8(_0x4e5863);
            },
            'LBsYV': _0x6fcdfa(0x2fd),
            'IfMgl': '0:0:0:0'
        }, _0x5335ce = _0x6fcdfa(0x107)['split']('|');
    let _0x15f135 = 0x0;
    while (!![]) {
        switch (_0x5335ce[_0x15f135++]) {
        case '0':
            resetstats();
            continue;
        case '1':
            toggleHistory(_0x322aac[_0x6fcdfa(0x2e0)]);
            continue;
        case '2':
            run ? (wdbSpeed[_0x6fcdfa(0xf6)](), wdbSpeed[_0x6fcdfa(0x1f2)](), wdbTimer['stop'](), wdbTimer[_0x6fcdfa(0x1f2)]()) : (wdbSpeed[_0x6fcdfa(0xf6)](), wdbTimer[_0x6fcdfa(0xf6)]());
            continue;
        case '3':
            _0x322aac[_0x6fcdfa(0x253)](toggleChart, _0x322aac[_0x6fcdfa(0x2aa)]);
            continue;
        case '4':
            document['getElementById'](_0x6fcdfa(0x320))['innerText'] = _0x322aac[_0x6fcdfa(0x243)];
            continue;
        case '5':
            toggleLog(_0x6fcdfa(0x1c9));
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0x2bc1e9 = _0x4881a2, _0x2e6111 = {
            'aeGSj': function (_0x3db38d, _0x320cb3) {
                return _0x3db38d(_0x320cb3);
            },
            'yKvay': _0x2bc1e9(0x2fd)
        };
    return _0x2e6111[_0x2bc1e9(0x378)](toggleChart, _0x2e6111[_0x2bc1e9(0x2f1)]);
}
function resethistory() {
    const _0x52945c = _0x4881a2, _0x2d5ada = {
            'cjhGX': function (_0x2d0e00, _0x4a572b) {
                return _0x2d0e00(_0x4a572b);
            },
            'OznTF': 'clear'
        };
    return _0x2d5ada[_0x52945c(0x28c)](toggleHistory, _0x2d5ada['OznTF']);
}
function resetlog() {
    return toggleLog('clear');
}
function resetstats() {
    const _0x52ed10 = _0x4881a2, _0x484eab = {
            'vrzDt': '5|7|3|0|9|13|17|14|2|11|6|1|10|16|12|4|8|15',
            'axJMQ': function (_0x51840f) {
                return _0x51840f();
            }
        }, _0x270c0c = _0x484eab[_0x52ed10(0x193)][_0x52ed10(0x11e)]('|');
    let _0xbf3af2 = 0x0;
    while (!![]) {
        switch (_0x270c0c[_0xbf3af2++]) {
        case '0':
            profit = 0x0;
            continue;
        case '1':
            minprofit = 0x0;
            continue;
        case '2':
            maxlosestreak = 0x0;
            continue;
        case '3':
            percentWagered = 0x0;
            continue;
        case '4':
            losses = 0x0;
            continue;
        case '5':
            startBalance = balance;
            continue;
        case '6':
            maxbalance = balance;
            continue;
        case '7':
            wagered = 0x0;
            continue;
        case '8':
            currentstreak = 0x0;
            continue;
        case '9':
            percentProfit = 0x0;
            continue;
        case '10':
            maxprofit = 0x0;
            continue;
        case '11':
            minbalance = balance;
            continue;
        case '12':
            wins = 0x0;
            continue;
        case '13':
            maxBetAmount = 0x0;
            continue;
        case '14':
            maxwinstreak = 0x0;
            continue;
        case '15':
            return _0x484eab[_0x52ed10(0x32a)](updateStats);
        case '16':
            bets = 0x0;
            continue;
        case '17':
            maxLosseAmount = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x2803a0) {
    return _0x2803a0;
}
function ching() {
    const _0x55a95e = _0x4881a2;
    return wdbSound[_0x55a95e(0x334)]();
}
function sleep(_0x4d5a8d) {
    return new Promise(_0x17aae6 => setTimeout(_0x17aae6, _0x4d5a8d * 0x3e8));
}
function initLua() {
    const _0x2ab91f = _0x4881a2, _0x263b1e = {
            'afZJJ': _0x2ab91f(0x205),
            'LgTDI': _0x2ab91f(0xe4),
            'RFhfm': _0x2ab91f(0x363),
            'asIsp': _0x2ab91f(0x248),
            'aoGmz': _0x2ab91f(0x300),
            'pKMUQ': _0x2ab91f(0x1e4),
            'pJNoe': _0x2ab91f(0x154)
        };
    fengari['load'](_0x263b1e[_0x2ab91f(0x2bb)])(), fengari['load'](_0x2ab91f(0x130))(), fengari[_0x2ab91f(0x36e)](_0x263b1e[_0x2ab91f(0x1f9)])(), fengari[_0x2ab91f(0x36e)](_0x263b1e[_0x2ab91f(0x221)])(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x21e))(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x213))(), fengari[_0x2ab91f(0x36e)](_0x263b1e[_0x2ab91f(0x157)])(), fengari[_0x2ab91f(0x36e)](_0x263b1e[_0x2ab91f(0x2e2)])(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x382))(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x299))(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x2ba))(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x12d))(), fengari[_0x2ab91f(0x36e)](_0x263b1e[_0x2ab91f(0x317)])(), fengari[_0x2ab91f(0x36e)]('function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend')(), fengari['load'](_0x2ab91f(0x1f7))(), fengari[_0x2ab91f(0x36e)](_0x2ab91f(0x34c))();
    const _0x4dcbef = location['hostname']['replace'](_0x263b1e[_0x2ab91f(0x293)], '');
    let _0x4946bf = _0x4dcbef[_0x2ab91f(0x2cf)]('.');
    casino = _0x4dcbef[_0x2ab91f(0x2ef)](0x0, _0x4946bf), fengari['load']('casino=\x22' + casino + '\x22')();
}
async function updateLua() {
    const _0x17f836 = _0x4881a2, _0x52c7a0 = {
            'bFhTA': _0x17f836(0x2be),
            'MjXQD': _0x17f836(0x12e),
            'ikGJO': _0x17f836(0x345),
            'GHaEs': 'scriptName',
            'tEqGb': _0x17f836(0x227),
            'hHnnV': _0x17f836(0x100),
            'lidLQ': _0x17f836(0x231),
            'OqFOI': 'return\x20currency',
            'JoRzI': function (_0x33a3e5, _0x4b3d1d) {
                return _0x33a3e5(_0x4b3d1d);
            }
        }, _0x182547 = _0x52c7a0['bFhTA'][_0x17f836(0x11e)]('|');
    let _0x47f7a1 = 0x0;
    while (!![]) {
        switch (_0x182547[_0x47f7a1++]) {
        case '0':
            fengari['load'](_0x52c7a0[_0x17f836(0x186)])() && (plinkoRisk = fengari[_0x17f836(0x36e)](_0x52c7a0[_0x17f836(0x186)])());
            continue;
        case '1':
            fengari[_0x17f836(0x36e)](_0x52c7a0['ikGJO'])() ? (scriptname = fengari[_0x17f836(0x36e)]('return\x20scriptname')(), document[_0x17f836(0x16a)](_0x52c7a0['GHaEs'])['innerText'] = 'Script\x20Name:\x20' + scriptname) : (scriptname = '', document[_0x17f836(0x16a)](_0x17f836(0x252))[_0x17f836(0xbc)] = '');
            continue;
        case '2':
            fengari[_0x17f836(0x36e)](_0x52c7a0[_0x17f836(0x148)])();
            continue;
        case '3':
            fengari['load']('\x0a\x20\x20\x20\x20win=' + win + _0x17f836(0x30c) + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x17f836(0x126) + losses + _0x17f836(0x37d) + winstreak + _0x17f836(0x215) + losestreak + _0x17f836(0x388) + currentstreak + _0x17f836(0xca) + balance + _0x17f836(0xd9) + minbalance + _0x17f836(0x1c1) + maxbalance + _0x17f836(0x386) + minprofit + _0x17f836(0x2ae) + maxprofit + _0x17f836(0x31d) + chance + '\x0a\x20\x20\x20\x20bethigh=' + bethigh + '\x0a\x20\x20\x20\x20nextbet=' + nextbet + _0x17f836(0xfb) + previousbet + _0x17f836(0x369) + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + _0x17f836(0x315) + partialprofit + '\x0a\x20\x20\x20\x20wagered=' + wagered + _0x17f836(0x1ce))();
            continue;
        case '4':
            fengari[_0x17f836(0x36e)](_0x17f836(0x176) + lastBet[_0x17f836(0x25d)] + _0x17f836(0x11d) + lastBet[_0x17f836(0x25d)] + _0x17f836(0x12a) + lastBet[_0x17f836(0x216)] + _0x17f836(0x2a4) + lastBet[_0x17f836(0x216)] + _0x17f836(0x2c4) + lastBet['roll'] + _0x17f836(0x16d) + lastBet[_0x17f836(0x16f)] + _0x17f836(0x136) + lastBet['profit'] + _0x17f836(0x139) + lastBet[_0x17f836(0x1ff)] + ',\x0a\x20\x20\x20\x20\x20\x20target=\x20' + lastBet[_0x17f836(0xf2)] + _0x17f836(0x22f) + lastBet[_0x17f836(0xf2)] + ',\x0a\x20\x20\x20\x20\x20\x20result=' + lastBet['result'] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet['result'] + _0x17f836(0x304) + lastBet[_0x17f836(0x1e3)] + _0x17f836(0x183) + lastBet[_0x17f836(0x1e3)] + ',\x0a\x20\x20\x20\x20\x20\x20id=\x22' + lastBet['id'] + _0x17f836(0x1c2) + lastBet['id'] + _0x17f836(0x312))();
            continue;
        case '5':
            fengari['load'](_0x17f836(0x100))() && (plinkoRow = fengari[_0x17f836(0x36e)](_0x52c7a0['hHnnV'])());
            continue;
        case '6':
            return _0x52c7a0[_0x17f836(0x367)];
        case '7':
            fengari[_0x17f836(0x36e)](_0x52c7a0[_0x17f836(0x2b1)])() && (currency = fengari['load'](_0x17f836(0x2e1))(), coin = _0x52c7a0[_0x17f836(0x102)](String, currency)['toUpperCase']());
            continue;
        }
        break;
    }
}
function randomString(_0x133f4d, _0x2af70e) {
    const _0x553f37 = _0x4881a2, _0x19e600 = {
            'oCobd': _0x553f37(0x331),
            'kXpkN': _0x553f37(0x108),
            'QrFkM': function (_0xce601a, _0x4d22e2) {
                return _0xce601a + _0x4d22e2;
            },
            'XTKxk': function (_0x3d4c33, _0x140273) {
                return _0x3d4c33 === _0x140273;
            },
            'wMZdX': _0x553f37(0x1c4),
            'SnFZk': function (_0x49e8fe, _0x4fb27d) {
                return _0x49e8fe + _0x4fb27d;
            },
            'UjJNW': 'hex',
            'wILUz': function (_0x2909b5, _0x53970a) {
                return _0x2909b5 < _0x53970a;
            },
            'rBfCb': function (_0x4d3453, _0x57d7d9) {
                return _0x4d3453 * _0x57d7d9;
            }
        }, _0x4ccdc1 = _0x19e600[_0x553f37(0x172)], _0x201eca = _0x4ccdc1[_0x553f37(0x212)](), _0x4a0bf6 = _0x19e600[_0x553f37(0x347)], _0x1f18dd = _0x4ccdc1['slice'](0x0, 0x6);
    let _0x19d75f = '', _0x300524 = '';
    if (!_0x2af70e)
        _0x19d75f = _0x19e600['QrFkM'](_0x4a0bf6 + _0x4ccdc1, _0x201eca);
    if (_0x19e600[_0x553f37(0x110)](_0x2af70e, _0x19e600['wMZdX']))
        _0x19d75f = _0x19e600[_0x553f37(0x302)](_0x4ccdc1, _0x201eca);
    if (_0x19e600[_0x553f37(0x110)](_0x2af70e, _0x553f37(0x14d)))
        _0x19d75f = _0x4a0bf6;
    if (_0x19e600[_0x553f37(0x110)](_0x2af70e, _0x19e600[_0x553f37(0xbf)]))
        _0x19d75f = _0x19e600[_0x553f37(0x302)](_0x4a0bf6, _0x1f18dd);
    for (let _0x2c856a = 0x0; _0x19e600[_0x553f37(0x35b)](_0x2c856a, _0x133f4d); _0x2c856a++)
        _0x300524 += _0x19d75f[_0x553f37(0xcc)](Math[_0x553f37(0xf0)](_0x19e600['rBfCb'](Math['random'](), _0x19d75f['length'])));
    return _0x300524;
}
function setCookie(_0x3e949b, _0x1a6569, _0x406bff) {
    const _0x5a8131 = _0x4881a2, _0x3914f9 = {
            'aRrQS': function (_0x1bbe6b, _0x2a02a2) {
                return _0x1bbe6b * _0x2a02a2;
            },
            'jSgck': function (_0x18adcd, _0x58b137) {
                return _0x18adcd + _0x58b137;
            },
            'ZXPHJ': _0x5a8131(0x1ef),
            'WkBnO': function (_0x429951, _0x248d41) {
                return _0x429951 + _0x248d41;
            },
            'QBVMN': function (_0x2aa4f3, _0xf4c543) {
                return _0x2aa4f3 + _0xf4c543;
            }
        }, _0x158eb6 = new Date();
    _0x158eb6[_0x5a8131(0x374)](_0x158eb6[_0x5a8131(0x38a)]() + _0x3914f9[_0x5a8131(0x19d)](_0x406bff * 0x18, 0x3c) * 0x3c * 0x3e8);
    let _0x39b48f = _0x3914f9['jSgck'](_0x3914f9[_0x5a8131(0x279)], _0x158eb6[_0x5a8131(0x20d)]());
    document[_0x5a8131(0x23e)] = _0x3914f9['WkBnO'](_0x3914f9[_0x5a8131(0x27a)](_0x3914f9[_0x5a8131(0x1a6)](_0x3e949b, '='), _0x1a6569), ';') + _0x39b48f + ';path=/';
}
function getCookie(_0x129ce9) {
    const _0x4783db = _0x4881a2, _0x15ad6d = {
            'KaZHM': function (_0x8a2ce0, _0x56dbb3) {
                return _0x8a2ce0 + _0x56dbb3;
            },
            'wNect': function (_0x35ab56, _0xa3dfa) {
                return _0x35ab56(_0xa3dfa);
            },
            'oaahW': function (_0xda50f0, _0x512d7a) {
                return _0xda50f0 === _0x512d7a;
            }
        };
    _0x129ce9 = _0x15ad6d[_0x4783db(0x199)](_0x129ce9, '=');
    let _0xb0af48 = _0x15ad6d['wNect'](decodeURIComponent, document[_0x4783db(0x23e)]), _0x57d6ca = _0xb0af48['split'](';');
    for (let _0x4ba41a = 0x0; _0x4ba41a < _0x57d6ca[_0x4783db(0x1d1)]; _0x4ba41a++) {
        let _0x411301 = _0x57d6ca[_0x4ba41a];
        while (_0x15ad6d['oaahW'](_0x411301['charAt'](0x0), '\x20')) {
            _0x411301 = _0x411301[_0x4783db(0x357)](0x1);
        }
        if (_0x411301[_0x4783db(0x2cf)](_0x129ce9) === 0x0)
            return _0x411301[_0x4783db(0x357)](_0x129ce9['length'], _0x411301[_0x4783db(0x1d1)]);
    }
    return '';
}
function saveScript() {
    const _0x2b047d = _0x4881a2, _0x247c08 = {
            'nbqvf': _0x2b047d(0x239),
            'qKgRw': function (_0xc0faa4, _0x170b22) {
                return _0xc0faa4 === _0x170b22;
            },
            'NTZtq': function (_0x212bbe, _0x14e372) {
                return _0x212bbe + _0x14e372;
            },
            'QCvnY': function (_0x3a5fac, _0x1254a1) {
                return _0x3a5fac + _0x1254a1;
            },
            'JAfvd': _0x2b047d(0x32b),
            'exiIC': _0x2b047d(0x23d),
            'CXfYK': _0x2b047d(0x283)
        };
    let _0x27950b = null;
    mode === _0x2b047d(0x2a5) ? _0x27950b = luaEditor[_0x2b047d(0x2c5)]() : _0x27950b = jsEditor['getValue']();
    let _0x2972e3 = document[_0x2b047d(0x2e5)]('a');
    _0x2972e3[_0x2b047d(0x230)] = window[_0x2b047d(0x14c)][_0x2b047d(0x115)](new Blob([_0x27950b], { 'type': _0x247c08[_0x2b047d(0x151)] })), _0x2972e3[_0x2b047d(0x185)] = _0x247c08[_0x2b047d(0x228)](mode, _0x2b047d(0x2a5)) ? _0x247c08['NTZtq'](_0x247c08[_0x2b047d(0x2cd)]('DiceScript', Date[_0x2b047d(0xe8)]()), _0x247c08[_0x2b047d(0x1c3)]) : _0x247c08[_0x2b047d(0x2cd)](_0x247c08[_0x2b047d(0x2cd)](_0x247c08[_0x2b047d(0x187)], Date[_0x2b047d(0xe8)]()), _0x247c08['CXfYK']), _0x2972e3[_0x2b047d(0x311)]();
}
function getErrMsg(_0x13b4c1) {
    const _0x1fbcf0 = _0x4881a2, _0x46d4f5 = _0x13b4c1['response'] && _0x13b4c1[_0x1fbcf0(0x1ed)][_0x1fbcf0(0x134)] && _0x13b4c1[_0x1fbcf0(0x1ed)][_0x1fbcf0(0x134)][_0x1fbcf0(0x181)] || _0x13b4c1['message'] || _0x13b4c1[_0x1fbcf0(0x1ec)]();
    return _0x46d4f5;
}

function _0x5e2b(_0x5694b1, _0x582f2d) {
    const _0x16272a = _0x1627();
    return _0x5e2b = function (_0x5e2be1, _0x2c37cd) {
        _0x5e2be1 = _0x5e2be1 - 0x86;
        let _0x416a51 = _0x16272a[_0x5e2be1];
        return _0x416a51;
    }, _0x5e2b(_0x5694b1, _0x582f2d);
}
function _0x1627() {
    const _0x49625c = [
        'load',
        'bkDLx',
        '7644610HLVdqa',
        'subscription\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20balance\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20before\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20after\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'authenticate',
        'QYWCJ',
        'round',
        'dqohV',
        'EPSILON',
        'dyEJy',
        '5235012SowujJ',
        '27632fXcZId',
        'bjZlR',
        'data',
        'trim',
        'ipGRB',
        'hYsSU',
        'eSZCe',
        'mOTwe',
        'checkbalance\x20ok',
        'GNjQk',
        'eMKMS',
        'IrCdb',
        '/lib/uuidv4.js',
        'XCwPn',
        'send',
        'network-only',
        'RollUnder',
        'jYGwP',
        'onerror',
        'stringify',
        'auth_token',
        'XTulE',
        'details',
        'resetseed()\x20not\x20support',
        '1077892oGXXBt',
        'jqVBx',
        'mutation\x20($amount:\x20Float!,\x20$clientSeed:\x20String!,\x20$dividingPoint:\x20Float!,\x20$mode:\x20DiceGameMode!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20playDice(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount:\x20$amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clientSeed:\x20$clientSeed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dividingPoint:\x20$dividingPoint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mode:\x20$mode\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20isWin\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20details\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...\x20on\x20DiceGameDetails\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dividingPoint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'uuid',
        '1eYsBgV',
        'balance',
        '587115vVCTmb',
        '8HWfMzC',
        'connection_ack',
        'tYhKt',
        'YNYQq',
        'TWJPv',
        'readyState',
        'uephx',
        'InsnT',
        'YuPtX',
        'pSAAv',
        'playDice',
        'ZSsyC',
        'getItem',
        'initConnection\x20ok',
        'XXFAG',
        'miss',
        'XFYWl',
        'nlOWV',
        'eDdje',
        '4|0|2|3|1',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20username\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authToken\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20email\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20twoFactorEnabled\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20role\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20countryBlock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'ucFPW',
        'result',
        'payload',
        'nveCN',
        'VVGXe',
        'BCH',
        'errors',
        'graphql-transport-ws',
        'onopen',
        'uSTDs',
        'wss://bch.games/api/graphql',
        'FgeOm',
        '1620504bXQWmf',
        'connection_init',
        'RollOver',
        '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authenticate(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authToken:\x20\x22',
        'LgSpF',
        'ULEsw',
        'PdPxq',
        'connectServer\x20ok',
        'kFDIm',
        '80mEcYqF',
        'type',
        'uUUOw',
        '3630732qnuttV',
        'FcEDt',
        'split',
        'subscribe',
        'pfBvM',
        'XhzEw',
        'profit',
        'beGse',
        'roll',
        '11DiwbcB',
        'kFArG',
        'ZzPFX',
        'qhXjI'
    ];
    _0x1627 = function () {
        return _0x49625c;
    };
    return _0x1627();
}
const _0x31b8a2 = _0x5e2b;
(function (_0x2fd038, _0x482a44) {
    const _0x32dfa1 = _0x5e2b, _0x568506 = _0x2fd038();
    while (!![]) {
        try {
            const _0x30df29 = parseInt(_0x32dfa1(0x89)) / 0x1 * (-parseInt(_0x32dfa1(0xe9)) / 0x2) + parseInt(_0x32dfa1(0xad)) / 0x3 + -parseInt(_0x32dfa1(0xd1)) / 0x4 * (parseInt(_0x32dfa1(0xb6)) / 0x5) + parseInt(_0x32dfa1(0xd0)) / 0x6 + parseInt(_0x32dfa1(0xb9)) / 0x7 * (parseInt(_0x32dfa1(0x8c)) / 0x8) + -parseInt(_0x32dfa1(0x8b)) / 0x9 + -parseInt(_0x32dfa1(0xc8)) / 0xa * (parseInt(_0x32dfa1(0xc2)) / 0xb);
            if (_0x30df29 === _0x482a44)
                break;
            else
                _0x568506['push'](_0x568506['shift']());
        } catch (_0x457b3e) {
            _0x568506['push'](_0x568506['shift']());
        }
    }
}(_0x1627, 0x6e650), CASINO_API = 'https://bch.games/api/graphql', token = localStorage[_0x31b8a2(0x98)](_0x31b8a2(0xe5))[_0x31b8a2(0xd4)]()['slice'](0x3, -0x3), client = null, uuid = null, idInit = null, idBalance = null, idBet = null, clientSeed = randomString(0x10), wdbConnected = ![], loadingCoin = !![]);
async function beforeWork(_0xad853e) {
    const _0x5eba5f = _0x31b8a2, _0x3bca0b = {
            'jAqwn': function (_0x5558c5, _0x2eab89) {
                return _0x5558c5(_0x2eab89);
            },
            'ysAMM': function (_0x2137c2, _0x3f6d68) {
                return _0x2137c2 + _0x3f6d68;
            },
            'hYsSU': function (_0x5d68dd, _0x160000) {
                return _0x5d68dd + _0x160000;
            },
            'eOSfH': function (_0x16cb90, _0x3142dc) {
                return _0x16cb90 + _0x3142dc;
            },
            'tYhKt': _0x5eba5f(0xdd)
        };
    return await _0x3bca0b['jAqwn'](_0xad853e, _0x3bca0b['ysAMM'](_0x3bca0b[_0x5eba5f(0xd6)](_0x3bca0b['eOSfH'](WDB_API, '/'), WDB_MODE), _0x3bca0b[_0x5eba5f(0x8e)])), connectServer();
}
async function getListCoin() {
    const _0x488fc2 = _0x31b8a2, _0x2cd5ac = {
            'FgeOm': _0x488fc2(0xa6),
            'JYVxY': function (_0x476aad) {
                return _0x476aad();
            }
        };
    return coins = [_0x2cd5ac[_0x488fc2(0xac)]], coin = coins[0x0], _0x2cd5ac['JYVxY'](drawSelectCoin);
}
async function checkbalance() {
    const _0x5555a2 = _0x31b8a2, _0x565b10 = {
            'GNjQk': function (_0x2232aa, _0x2c0299) {
                return _0x2232aa === _0x2c0299;
            },
            'XhzEw': function (_0x5cf80f) {
                return _0x5cf80f();
            },
            'kFArG': _0x5555a2(0xbc),
            'QYWCJ': function (_0x1dbb0b, _0x129c04) {
                return _0x1dbb0b(_0x129c04);
            },
            'eDdje': _0x5555a2(0xe0),
            'zogko': 'miss'
        };
    return wdbConnected && _0x565b10[_0x5555a2(0xda)](client[_0x5555a2(0x91)], 0x1) && (loadingCoin = !![], idBalance = _0x565b10[_0x5555a2(0xbe)](uuidv4), client[_0x5555a2(0xdf)](JSON['stringify']({
        'id': idBalance,
        'type': _0x565b10[_0x5555a2(0xc3)],
        'payload': {
            'key': _0x565b10[_0x5555a2(0xcb)](randomString, 0x6),
            'query': _0x5555a2(0xc9),
            'variables': {},
            'context': {
                'url': CASINO_API,
                'preferGetMethod': ![],
                'suspense': ![],
                'requestPolicy': _0x565b10[_0x5555a2(0x9e)],
                'meta': { 'cacheOutcome': _0x565b10['zogko'] }
            }
        }
    }))), _0x5555a2(0xd9);
}
function resetseed() {
    const _0x4ba0ab = _0x31b8a2, _0xd5f62b = {
            'dyEJy': function (_0x5d5d74, _0x350921) {
                return _0x5d5d74(_0x350921);
            },
            'pfBvM': _0x4ba0ab(0xe8)
        };
    return _0xd5f62b[_0x4ba0ab(0xcf)](log, _0xd5f62b[_0x4ba0ab(0xbd)]), clientSeed = randomString(0x10);
}
async function sendBet() {
    const _0x1b34e = _0x31b8a2, _0x1fef28 = {
            'XTulE': function (_0x30f056, _0x13c1b4) {
                return _0x30f056 / _0x13c1b4;
            },
            'IrCdb': function (_0x1a508c, _0x36ea2e) {
                return _0x1a508c * _0x36ea2e;
            },
            'XXFAG': function (_0x14458a, _0x51538b) {
                return _0x14458a + _0x51538b;
            },
            'jqVBx': function (_0x4fceae, _0x253d76) {
                return _0x4fceae - _0x253d76;
            },
            'eMKMS': function (_0x529f30, _0x20facc) {
                return _0x529f30 / _0x20facc;
            },
            'ipGRB': function (_0x36e34e, _0x1c703a) {
                return _0x36e34e * _0x1c703a;
            },
            'eUhfa': function (_0x565fe1) {
                return _0x565fe1();
            },
            'uSTDs': function (_0x56b7ce, _0x2740e5) {
                return _0x56b7ce(_0x2740e5);
            },
            'LgSpF': _0x1b34e(0xaf),
            'ucFPW': _0x1b34e(0xe1),
            'XCwPn': function (_0x45f8a6, _0x203d21) {
                return _0x45f8a6(_0x203d21);
            },
            'kFDIm': _0x1b34e(0xe0),
            'XFYWl': function (_0x505203) {
                return _0x505203();
            }
        };
    chance = _0x1fef28[_0x1b34e(0xe6)](Math[_0x1b34e(0xcc)](_0x1fef28[_0x1b34e(0xdc)](_0x1fef28[_0x1b34e(0x9a)](chance, Number[_0x1b34e(0xce)]), 0x64)), 0x64), target = bethigh ? _0x1fef28[_0x1b34e(0x86)](99.99, chance) : chance, target = _0x1fef28[_0x1b34e(0xdb)](Math[_0x1b34e(0xcc)](_0x1fef28[_0x1b34e(0xd5)](_0x1fef28[_0x1b34e(0x9a)](target, Number['EPSILON']), 0x64)), 0x64);
    if (run)
        idBet = _0x1fef28['eUhfa'](uuidv4), client['send'](JSON[_0x1b34e(0xe4)]({
            'id': idBet,
            'type': _0x1b34e(0xbc),
            'payload': {
                'key': _0x1fef28[_0x1b34e(0xaa)](randomString, 0x6),
                'query': _0x1b34e(0x87),
                'variables': {
                    'dividingPoint': target,
                    'mode': bethigh ? _0x1fef28[_0x1b34e(0xb1)] : _0x1fef28[_0x1b34e(0xa1)],
                    'amount': _0x1fef28[_0x1b34e(0xde)](parseInt, _0x1fef28[_0x1b34e(0xdc)](nextbet, 0x5f5e100)),
                    'clientSeed': clientSeed
                },
                'context': {
                    '_instance': [],
                    'url': CASINO_API,
                    'preferGetMethod': ![],
                    'suspense': ![],
                    'requestPolicy': _0x1fef28[_0x1b34e(0xb5)],
                    'meta': { 'cacheOutcome': _0x1b34e(0x9b) }
                }
            }
        }));
    else
        _0x1fef28[_0x1b34e(0x9c)](connectServer)['then'](sendBet);
}
async function handleResult(_0x1ca54e) {
    const _0x7a0e9e = _0x31b8a2, _0x56aa3a = {
            'MYggx': function (_0x4d73ba) {
                return _0x4d73ba();
            },
            'bkDLx': function (_0x2710c5, _0x4e4111) {
                return _0x2710c5(_0x4e4111);
            },
            'nveCN': function (_0x3d7d7a, _0x420b1a) {
                return _0x3d7d7a(_0x420b1a);
            }
        };
    try {
        const _0x371038 = _0x7a0e9e(0x9f)[_0x7a0e9e(0xbb)]('|');
        let _0x27fde4 = 0x0;
        while (!![]) {
            switch (_0x371038[_0x27fde4++]) {
            case '0':
                lastBet[_0x7a0e9e(0xc1)] = _0x1ca54e['details'][_0x7a0e9e(0xa2)];
                continue;
            case '1':
                return _0x56aa3a['MYggx'](handleStats);
            case '2':
                result = _0x1ca54e[_0x7a0e9e(0xe7)][_0x7a0e9e(0xa2)];
                continue;
            case '3':
                lastBet['id'] = _0x56aa3a[_0x7a0e9e(0xc7)](String, _0x1ca54e['id']);
                continue;
            case '4':
                currentprofit = _0x1ca54e[_0x7a0e9e(0xbf)] / 0x5f5e100;
                continue;
            }
            break;
        }
    } catch (_0x2a7049) {
        return stop(), log(_0x56aa3a[_0x7a0e9e(0xa4)](getErrMsg, _0x2a7049));
    }
}
async function connectServer() {
    const _0x523f18 = _0x31b8a2, _0x473389 = {
            'pSAAv': function (_0x53e8ab) {
                return _0x53e8ab();
            },
            'nlOWV': _0x523f18(0xab),
            'uephx': _0x523f18(0xa8),
            'dqohV': _0x523f18(0xb4)
        };
    return client = new WebSocket(_0x473389[_0x523f18(0x9d)], [_0x473389[_0x523f18(0x92)]]), client[_0x523f18(0xa9)] = async _0x3b714c => {
        const _0x3c2110 = _0x523f18;
        client[_0x3c2110(0xdf)](JSON[_0x3c2110(0xe4)]({ 'type': _0x3c2110(0xae) }));
    }, client['onclose'] = () => {
        wdbConnected = ![], setTimeout(connectServer, 0xbb8);
    }, client[_0x523f18(0xe3)] = _0x523c8d => {
        const _0x2542ec = _0x523f18;
        wdbConnected = ![], (_0x473389[_0x2542ec(0x95)](stop), log(_0x523c8d));
    }, client['onmessage'] = handleMessage, _0x473389[_0x523f18(0xcd)];
}
async function handleMessage(_0xbcc76e) {
    const _0x2ec616 = _0x31b8a2, _0x447056 = {
            'VVGXe': function (_0x5a363e, _0x2a3516) {
                return _0x5a363e === _0x2a3516;
            },
            'ZSsyC': _0x2ec616(0x8d),
            'bjZlR': function (_0xf29671) {
                return _0xf29671();
            },
            'qhXjI': function (_0xb83243, _0x130764) {
                return _0xb83243 === _0x130764;
            },
            'ULEsw': 'next',
            'jYGwP': '0|6|3|4|7|5|2|8|1',
            'FcEDt': function (_0x405d2d, _0x3aec85) {
                return _0x405d2d(_0x3aec85);
            },
            'PdPxq': function (_0xa276a6, _0x4e9d67) {
                return _0xa276a6 / _0x4e9d67;
            },
            'eSZCe': function (_0x5b0ef4, _0xe95dab) {
                return _0x5b0ef4 + _0xe95dab;
            },
            'uUUOw': 'maxbalance=',
            'YNYQq': function (_0x3681a2, _0x39ad9e) {
                return _0x3681a2 + _0x39ad9e;
            },
            'beGse': 'balance=',
            'mOTwe': function (_0x241572) {
                return _0x241572();
            },
            'TWJPv': function (_0x93c3e, _0x2d74cf) {
                return _0x93c3e(_0x2d74cf);
            }
        }, _0x5b6142 = JSON['parse'](_0xbcc76e[_0x2ec616(0xd3)]);
    if (_0x447056[_0x2ec616(0xa5)](_0x5b6142[_0x2ec616(0xb7)], _0x447056[_0x2ec616(0x97)]))
        await _0x447056[_0x2ec616(0xd2)](initConnection);
    if (_0x447056[_0x2ec616(0xa5)](_0x5b6142['id'], idInit) && _0x447056[_0x2ec616(0xc5)](_0x5b6142['type'], _0x447056['ULEsw'])) {
        if (_0x5b6142['payload'][_0x2ec616(0xd3)][_0x2ec616(0xca)])
            uuid = _0x5b6142['payload'][_0x2ec616(0xd3)]['authenticate'][_0x2ec616(0x88)];
        wdbConnected = !![], _0x447056[_0x2ec616(0xd2)](checkbalance);
    }
    if (_0x447056[_0x2ec616(0xc5)](_0x5b6142['id'], idBalance) && _0x447056[_0x2ec616(0xa5)](_0x5b6142['type'], _0x447056['ULEsw'])) {
        if (_0x5b6142[_0x2ec616(0xa3)]['data'][_0x2ec616(0x8a)] && loadingCoin) {
            const _0x451d9b = _0x447056[_0x2ec616(0xe2)][_0x2ec616(0xbb)]('|');
            let _0xcbc464 = 0x0;
            while (!![]) {
                switch (_0x451d9b[_0xcbc464++]) {
                case '0':
                    balance = _0x447056[_0x2ec616(0xba)](Number, _0x447056[_0x2ec616(0xb3)](_0x5b6142['payload'][_0x2ec616(0xd3)]['balance']['after'], 0x5f5e100));
                    continue;
                case '1':
                    loadingCoin = ![];
                    continue;
                case '2':
                    fengari[_0x2ec616(0xc6)](_0x447056[_0x2ec616(0xd7)](_0x447056[_0x2ec616(0xb8)], balance))();
                    continue;
                case '3':
                    startBalance = balance;
                    continue;
                case '4':
                    minbalance = balance;
                    continue;
                case '5':
                    maxbalance = balance;
                    continue;
                case '6':
                    fengari[_0x2ec616(0xc6)](_0x447056[_0x2ec616(0x8f)](_0x447056[_0x2ec616(0xc0)], balance))();
                    continue;
                case '7':
                    fengari[_0x2ec616(0xc6)]('minbalance=' + balance)();
                    continue;
                case '8':
                    _0x447056[_0x2ec616(0xd8)](updateStats);
                    continue;
                }
                break;
            }
        }
    }
    if (_0x5b6142['id'] === idBet && _0x447056[_0x2ec616(0xc5)](_0x5b6142[_0x2ec616(0xb7)], _0x447056[_0x2ec616(0xb2)])) {
        if (_0x5b6142[_0x2ec616(0xa3)]['data'])
            return _0x447056[_0x2ec616(0x90)](handleResult, _0x5b6142[_0x2ec616(0xa3)]['data'][_0x2ec616(0x96)]);
        else
            return _0x447056[_0x2ec616(0xd8)](stop), log(_0x5b6142[_0x2ec616(0xa3)][_0x2ec616(0xa7)][0x0]['message']);
    }
}
async function initConnection() {
    const _0x1265ea = _0x31b8a2, _0x2abb32 = {
            'InsnT': function (_0x149fbb, _0x343b4a) {
                return _0x149fbb === _0x343b4a;
            },
            'ZzPFX': function (_0x1d8c6) {
                return _0x1d8c6();
            },
            'YuPtX': _0x1265ea(0xbc)
        };
    if (_0x2abb32[_0x1265ea(0x93)](client[_0x1265ea(0x91)], 0x1))
        idInit = _0x2abb32['ZzPFX'](uuidv4), client['send'](JSON[_0x1265ea(0xe4)]({
            'id': idInit,
            'payload': {
                'query': _0x1265ea(0xb0) + token + _0x1265ea(0xa0),
                'variables': {}
            },
            'type': _0x2abb32[_0x1265ea(0x94)]
        }));
    else
        _0x2abb32[_0x1265ea(0xc4)](connectServer);
    return _0x1265ea(0x99);
}
