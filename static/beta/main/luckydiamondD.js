darkMode = false;
mode = "lua";
game = "dice";
run = false;
win = false;
sOW = false;
startBalance = 0x0;
percentWagered = 0x0;
percentProfit = 0x0;
luaEditor = null;
jsEditor = null;
stopHistory = false;
stopLog = false;
stopChart = false;
maxRows = 0xc8;
chart = null;
betsChart = 0x0;
profitChart = 0x0;
dps = [];
coins = [];
coin = null;
currency = null;
casino = null;
balance = 0x0;
minbalance = 0x0;
maxbalance = 0x0;
minprofit = 0x0;
maxprofit = 0x0;
basebet = 0x0;
nextbet = 0x0;
chance = 0x0;
havePlinkoRows = false;
plinkoRow = 0x8;
plinkoRisk = "low";
bethigh = true;
target = 0x0;
result = 0x0;
bets = 0x0;
wins = 0x0;
losses = 0x0;
profit = 0x0;
wagered = 0x0;
maxBetAmount = 0x0;
maxLosseAmount = 0x0;
currentprofit = 0x0;
partialprofit = 0x0;
winstreak = 0x0;
losestreak = 0x0;
currentstreak = 0x0;
maxwinstreak = 0x0;
maxlosestreak = 0x0;
previousbet = 0x0;
lastBet = {
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
};
scriptname = '';
decimalAmountView = 0x8;
decimalChanceView = 0x2;
decimalTargetResult = 0x2;
wdbSpeed = null;
wdbTimer = null;
wdbSound = new Object(new Audio(WDB_API + '/' + WDB_MODE + '/media/ching.mp3'));
wdbUI = "<style>\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n#wdb {\n  all: revert;\n  width: 1000px;\n  font-family: \"Courier New\", monospace;\n  font-size: 11px!important;\n  text-align: left;\n  background: #bef6fa;\n  color: #000;\n  line-height: 1.5!important;\n  top: 5px;\n  left: 5px;\n  padding: 5px;\n  position: absolute;\n  z-index: 2147483002;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\n#wdbHeader,\n#wdbFooter {\n  cursor: move;\n}\n\n.wdb-toggle {\n  cursor: pointer;\n  padding: 5px;\n  z-index: 2147483003;\n}\n\n#wdbMenu {\n  padding: 3px;\n}\n\n#wdbMenu select,\n#wdbMenu span input[type=number] {\n  all: revert;\n  background: #bef6fa!important;\n  padding: 3px 5px;\n  border: 1px solid #ccc!important;\n  border-radius: 0!important;\n  border-radius: 3px!important;\n}\n\n#wdbMenu span input[type=number] {\n  width: 86px;\n}\n\n#wdbMenu select:focus {\n  color: black!important;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 45px;\n  height: 19px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  all: revert;\n  background: #ccc;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 3px;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  content: \"\";\n  position: absolute;\n  background: white;\n  height: 13px;\n  width: 13px;\n  left: 3px;\n  bottom: 3.5px;\n  border-radius: 3px;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\ninput:checked + .slider {\n  background: linear-gradient(to right, #7ec5fb, #4e98e0, #276bc3, #143ea0, #180a78);;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #ffc107;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.btn-grad {\n  all: revert;\n  cursor: pointer;\n  background-image: linear-gradient(to right, #7788f4, #6779f0, #5769ec, #465ae7, #334ae1);\n  text-align: center;\n  transition: 0.5s;\n  padding: 3px;\n  background-size: 200% auto;\n  border: #ffc107;\n  border-radius: 3px;\n}\n\n.btn-grad:hover {\n  background-position: right center;\n  text-decoration: none;\n}\n\n.btn-grad:active {\n  opacity: .65;\n}\n\n.btn-grad:disabled {\n  cursor: auto;\n  opacity: .65;\n  color: #bef6fa;\n}\n\n#wdbOpenLUAScript,\n#wdbOpenJSScript {\n  all: revert;\n}\n\n#wdbChart,\n#wdbWrapHistory {\n  height: 190px;\n  padding: 3px;\n}\n\n#wdbWrapHistory {\n  overflow-x: auto;\n}\n\n#wdbWrapHistory table {\n  border-collapse: collapse;\n}\n\n#wdbWrapHistory table thead tr th {\n  font-weight: normal;\n  text-align: left;\n  padding: 1px;\n  border: 1px solid #ccc;\n  white-space: nowrap;\n  color: #000;\n}\n\n#wdbHistory tr {\n  border-bottom: 1px solid #bef6fa;\n  color: #000!important;\n}\n\n#wdbHistory tr:last-child {\n  border-bottom: 1px solid #ccc;\n}\n\n#wdbHistory tr td {\n  all: revert;\n  white-space: nowrap;\n  padding: 1.5px;\n  border-right: 1px solid #bef6fa;\n  border-left: 1px solid #bef6fa;\n}\n\n#wdbHistory tr td:first-child {\n  border-left: 1px solid #ccc;\n}\n\n#wdbHistory tr td:last-child {\n  border-right: 1px solid #ccc;\n}\n\n#wdbHistory tr td input {\n  all: revert;\n}\n\n#wdbAdvancedMode,\n#wdbWrapLog,\n#wdbWrapVariables,\n#wdbWrapFunctions,\n#wdbWrapTips {\n  overflow: scroll;\n  height: 300px;\n}\n\n#wdbWrapVariables pre,\n#wdbWrapFunctions pre,\n#wdbWrapTips pre {\n  all: revert;\n  background: #bef6fa;\n  color: #000;\n  margin: 0;\n}\n\n#wdbWrapLog code {\n  all: revert;\n}\n\n#wdbLog li {\n  list-style: none;\n  padding-left: 0;\n}\n\n#wdbOpenScript {\n  all: revert;\n}\n\n.wdb-stats,\n.wdb-flex-container {\n  display: flex;\n  align-items: stretch;\n}\n\n.wdb-stats div {\n  flex-grow: 1;\n  padding: 2px 32px;\n}\n\n.wdb-stats div li {\n  list-style: none;\n}\n\n.wdb-advanced-item {\n  line-height: 2;\n  padding: 3px 0;\n  border-bottom: 1px solid #e7e7e7;\n}\n\n.wdb-advanced-item:last-child {\n  border: none;\n}\n\n.wdb-advanced-item input {\n  all: revert;\n}\n\n.wdb-advanced-item input[type=number] {\n  width: 86px;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.float-left {\n  float: left!important;\n}\n\n.float-right {\n  float: right!important;\n}\n\n.wdb-menu2 {\n  display: flex;\n}\n\n.wdb-menu2 span {\n  padding: 3.5px;\n  text-align: center;\n}\n\n#wdbTabMenu,\n#wdbControlMenu {\n  display: flex; flex-wrap: wrap;\n  margin-top: 3px;\n}\n\n#wdbTabMenu button,\n#wdbControlMenu button {\n  flex-basis: 0;\n  flex-grow: 1;\n  margin: 3px;\n}\n\n.CodeMirror {\n  height: 269px;\n}\n</style>\n\n<div id=\"wdb\">\n  <div id=\"wdbHeader\">\n    <div class=\"clearfix\">\n      <div class=\"float-left\" style=\"padding-left: 5px;\">\n       Free Dice-Bot | " + CASINO_GAME + " | " + WDB_MODE + "\n      </div>\n      <div class=\"float-right\">\n        <span class=\"wdb-toggle\" id=\"wdbToggleMinimal\" onclick=\"toggleMinimalBot(this)\">\u25BC</span>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"wdbMain\">\n    <div id=\"wdbMenu\">\n      <select id=\"wdbMenuMode\" class=\"wdb-select\" onchange='toggleMode(this.value)'>\n        <option value=\"lua\">LUA Mode</option>\n        <option value=\"js\">JS Mode</option>\n        <option value=\"advanced\">Advanced Mode</option>\n      </select>\n      <select id=\"wdbMenuCoin\" class=\"wdb-select\" onchange='changeCoin()'>\n        <option>Loading...</option>\n      </select>\n      <span>\n        Max Record\n        <input type=\"number\" id=\"wdbMaxRows\" value=\"200\" onchange=\"changeMaxRows()\" />\n      </span>\n      <span id=\"scriptName\"></span>\n    </div>\n\n    <div class=\"wdb-menu2\">\n      <span>\n        Theme<br />\n        <label class=\"switch\">\n          <input type=\"checkbox\" onchange=\"toggleDarkMode()\">\n          <span class=\"slider\"></span>\n        </label>\n      </span>\n\n      <span>\n        Show Stats<br />\n        <label class=\"switch\">\n        <input id=\"wdbToggleShowStats\" type=\"checkbox\" onchange=\"toggleShow('stats')\" checked=\"\">\n        <span class=\"slider\"></span>\n        </label>\n      </span>\n\n      <span>\n        Show Chart<br />\n        <label class=\"switch\">\n        <input id=\"wdbToggleShowChart\" type=\"checkbox\" onchange=\"toggleShow('chart')\" checked=\"\">\n        <span class=\"slider\"></span>\n        </label>\n      </span>\n\n      <span>\n        Show History<br />\n        <label class=\"switch\">\n        <input id=\"wdbToggleShowHistory\" type=\"checkbox\" onchange=\"toggleShow('history')\" checked=\"\">\n        <span class=\"slider\"></span>\n        </label>\n      </span>\n      \n      <span>\n        Live Chart<br />\n        <label class=\"switch\">\n        <input id=\"wdbToggleLiveChart\" type=\"checkbox\" onchange=\"toggleLive('chart')\" checked=\"\">\n        <span class=\"slider\"></span>\n        </label>\n      </span>\n\n      <span>\n        Live History<br />\n        <label class=\"switch\">\n        <input id=\"wdbToggleLiveHistory\" type=\"checkbox\" onchange=\"toggleLive('history')\" checked=\"\">\n        <span class=\"slider\"></span>\n        </label>\n      </span>\n\n      <span>\n        Live Log<br />\n        <label class=\"switch\">\n        <input id=\"wdbToggleLiveLog\" type=\"checkbox\" onchange=\"toggleLive('log')\" checked=\"\">\n        <span class=\"slider\"></span>\n        </label>\n      </span>\n      \n      <span style=\"padding-top: 19px;\">\n        <button class=\"btn-grad\" onclick=\"selectFunction('resetstats')\">Reset Stats</button>\n      </span>\n      <span style=\"padding-top: 19px;\">\n        <button class=\"btn-grad\" onclick=\"selectFunction('resetchart')\">Reset Chart</button>\n      </span>\n      <span style=\"padding-top: 19px;\">\n        <button class=\"btn-grad\" onclick=\"selectFunction('resethistory')\">Reset History</button>\n      </span>\n      <span style=\"padding-top: 19px;\">\n        <button class=\"btn-grad\" onclick=\"selectFunction('resetlog')\">Reset Log</button>\n      </span>\n      <span style=\"padding-top: 19px;\">\n        <button class=\"btn-grad\" onclick=\"selectFunction('resetseed')\">Reset Seed</button>\n      </span>\n      <span style=\"padding-top: 19px;\">\n        <button class=\"btn-grad\" onclick=\"selectFunction('resetall')\">Reset All</button>\n      </span>\n    </div>\n\n    <div class=\"wdb-stats\" id=\"wdbStats\">\n      <div>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Time:</span>\n          <span class=\"float-right\"><span id=\"wdbTime\">0:0:0:0</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Balance:</span>\n          <span class=\"float-right\"><span id=\"wdbBalance\">0.00000000</span></span>\n        </li>\n        \n        <li class=\"clearfix\">\n          <span class=\"float-left\">Min Balance:</span>\n          <span class=\"float-right\"><span id=\"wdbMinBalance\">0.00000000</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Max Balance:</span>\n          <span class=\"float-right\"><span id=\"wdbMaxBalance\">0.00000000</span></span>\n        </li>\n      </div>\n      \n      <div>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Wagered:</span>\n          <span class=\"float-right\">(<span id=\"wdbPercentWagered\">0.00</span>x) <span id=\"wdbWagered\">0.00000000</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Profit:</span>\n          <span class=\"float-right\" id=\"wdbWrapPercentProfit\">(<span id=\"wdbPercentProfit\">0.00</span>%) <span id=\"wdbProfit\">0.00000000</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Min Profit:</span>\n          <span class=\"float-right\"><span id=\"wdbMinProfit\">0.00000000</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Max Profit:</span>\n          <span class=\"float-right\"><span id=\"wdbMaxProfit\">0.00000000</span></span>\n        </li>\n      </div>\n\n      <div>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Bets:</span>\n          <span class=\"float-right\"><span id=\"wdbBets\">0</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Losses:</span>\n          <span class=\"float-right\"><span id=\"wdbLosses\">0</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Max Bet:</span>\n          <span class=\"float-right\"><span id=\"wdbHighBet\">0.00000000</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Max Lose:</span>\n          <span class=\"float-right\"><span id=\"wdbHighLose\">0.00000000</span></span>\n        </li>\n      </div>\n\n      <div>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Wins:</span>\n          <span class=\"float-right\"><span id=\"wdbWins\">0</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Current Streak:</span>\n          <span class=\"float-right\"><span id=\"wdbCurrentStreak\">0</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Max Win Streak:</span>\n          <span class=\"float-right\"><span id=\"wdbHighWinStreak\">0</span></span>\n        </li>\n        <li class=\"clearfix\">\n          <span class=\"float-left\">Max Lose Streak:</span>\n          <span class=\"float-right\"><span id=\"wdbHighLoseStreak\">0</span></span>\n        </li>\n      </div>\n    </div>\n\n    <div class=\"wdb-flex-container\" id=\"wdbWrapControl\">\n      <div style=\"flex-grow: 1; width: 50%;\">\n        <div id=\"wdbChart\"></div>\n\n        <div id=\"wdbWrapHistory\">\n          <table>\n            <thead>\n              <tr>\n                <th>Bets</th>\n                <th>Amount</th>\n                <th>High</th>\n                <th>Target Chance</th>\n                <th>Roll Chance</th>\n                <th>Profit</th>\n                <th>Target Number</th>\n                <th>Roll Number</th>\n                <th>Nonce</th>\n                <th>Bet ID</th>\n              </tr>\n            </thead>\n            <tbody id=\"wdbHistory\"></tbody>\n          </table>\n        </div>\n      </div>\n\n      <div style=\"flex-grow: 1; width: 50%; padding-left: 5px;\">\n        <div id=\"wdbTabMenu\">\n          <button class=\"btn-grad\" id=\"wdbShowMode\" onclick=\"toggleNav('mode')\">Mode</button>\n          <button class=\"btn-grad\" id=\"wdbShowLog\" onclick=\"toggleNav('log')\">Log</button>\n          <button class=\"btn-grad\" id=\"wdbShowVariables\" onclick=\"toggleNav('variables')\">Variables</button>\n          <button class=\"btn-grad\" id=\"wdbShowFunctions\" onclick=\"toggleNav('functions')\">Functions</button>\n          <button class=\"btn-grad\" id=\"wdbShowTips\" onclick=\"toggleNav('tips')\">Tips</button>\n        </div>\n\n        <div>\n          <div id=\"wdbWrapMode\">\n            <div id=\"wdbLUAMode\">\n              <div style=\"padding: 5px 2px 5px\">\n                <button class=\"btn-grad\" id=\"wdbSaveScriptButton\" onclick=\"saveScript()\">Save</button>\n                <input style=\"margin: 0 3px;\" type=\"file\" id=\"wdbOpenLUAScript\" accept=\".txt, .lua\" />\n              </div>\n              <textarea id=\"wdbScriptBoxLUA\">-- Trial version ( until serverdown or no-donation ) \n-- Donation \n-- Doge / Trx =  PM on tele / WA \n-- Continues project at least > 10$ / month any donation \n-- DONATION = 0 $ \n scriptname='Free Dice-Bot LUA script'\nchance=49.5\nbethigh=true\nbasebet=0.00000001\nnextbet=basebet\n\nfunction dobet()\n  if (win) then\n    nextbet=basebet\n  else\n    nextbet=previousbet*2\n  end\nend</textarea>\n            </div>\n\n            <div id=\"wdbJSMode\">\n              <div style=\"padding: 5px 2px 5px\">\n                <button class=\"btn-grad\" id=\"wdbSaveScriptButton\" onclick=\"saveScript()\">Save</button>\n                <input style=\"margin: 0 3px;\" type=\"file\" id=\"wdbOpenJSScript\" accept=\".txt, .js\" />\n              </div>\n              <textarea id=\"wdbScriptBoxJS\">scriptname='example JS script'\nchance=49.5\nbethigh=true\nbasebet=0.00000001\nnextbet=basebet\n// currency='trx'\n// log(casino)\n// plinkoRow=8 // depend dice site, only for plinko game\n// plinkoRisk='low' // low, medium, high; only for plinko game\n\nasync function dobet() {\n  // log('profit: ' + profit)\n  // await sleep(0.2)\n  if (win) {\n    nextbet=basebet\n  } else {\n    nextbet=previousbet*2\n  }\n}</textarea>\n            </div>\n\n            <div id=\"wdbAdvancedMode\" class=\"wdb-advanced\">\n              <div class=\"wdb-advanced-item\">\n                Chance <input type=\"number\" id=\"advancedChance\" value=\"49.5\" />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                Base bet\n                <input type=\"number\" id=\"advancedBaseBet\" value=\"0.00000001\" />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                Bethigh\n                <input type=\"checkbox\" id=\"advancedBetHigh\" checked />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedChanceOnWinCheck\" />\n                Set chance to\n                <input type=\"number\" value=\"45.5\" id=\"advancedChanceOnWin\" />\n                on\n                <input type=\"number\" value=\"1\" id=\"advancedChanceOnWinBets\" />\n                win\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedChanceOnLoseCheck\" />\n                Set chance to\n                <input type=\"number\" value=\"50.5\" id=\"advancedChanceOnLose\" />\n                on\n                <input type=\"number\" value=\"1\" id=\"advancedChanceOnLoseBets\" />\n                lose\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedMultiOnWinCheck\" />\n                Multiplier\n                <input type=\"number\" id=\"advancedMultiOnWin\" value=\"2\" />\n                on\n                <input type=\"number\" id=\"advancedMultiOnWinBets\" value=\"1\" />\n                win\n              </div>\n              \n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedMultiOnLoseCheck\" checked/>\n                Multiplier\n                <input type=\"number\" id=\"advancedMultiOnLose\" value=\"2\" />\n                on\n                <input type=\"number\" id=\"advancedMultiOnLoseBets\" value=\"1\" />\n                lose\n              </div>\n              \n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedBetHighOnBetCheck\" />\n                Switch bethigh on\n                <input type=\"number\" value=\"1\" id=\"advancedBetHighOnBet\" />\n                bet\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedBetHighOnWinCheck\" />\n                Switch bethigh on\n                <input type=\"number\" value=\"1\" id=\"advancedBetHighOnWin\" />\n                win\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedBetHighOnLoseCheck\" />\n                Switch bethigh on\n                <input type=\"number\" value=\"1\" id=\"advancedBetHighOnLose\" />\n                lose\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedBetHighOnProfitCheck\" />\n                Switch bethigh on profit\n                <input\n                  type=\"number\"\n                  value=\"0.00000010\"\n                  id=\"advancedBetHighOnProfit\"\n                  class=\"wdb--input wdb-w-40\"\n                />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"resetstatsOnProfitCheck\" />\n                Reset stats on profit\n                <input\n                  type=\"number\"\n                  value=\"0.00000010\"\n                  id=\"resetstatsOnProfit\"\n                  class=\"wdb--input wdb-w-40\"\n                />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedStopRollNumberCheck\" />\n                Stop on roll number\n                <input type=\"number\" value=\"49.5\" id=\"advancedStopRollNumber\" />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedStopAfterStreakCheck\" />\n                Stop on current streak\n                <input type=\"number\" value=\"-2\" id=\"advancedStopAfterStreak\" />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedStopOnBetsCheck\" />\n                Stop on\n                <input type=\"number\" value=\"10\" id=\"advancedStopOnBets\" /> bet\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedStopOnWinsCheck\" />\n                Stop on\n                <input type=\"number\" value=\"1\" id=\"advancedStopOnWins\" /> win\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"advancedStopOnLoseCheck\" />\n                Stop on\n                <input type=\"number\" value=\"1\" id=\"advancedStopOnLose\" /> lose\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"stopOnProfitCheck\" />\n                Stop on profit\n                <input type=\"number\" value=\"0.00000010\" id=\"stopOnProfit\" />\n              </div>\n\n              <div class=\"wdb-advanced-item\">\n                <input type=\"checkbox\" id=\"stopOnBalanceCheck\" />\n                Stop on balance\n                <input type=\"number\" value=\"0.00000010\" id=\"stopOnBalance\" />\n              </div>\n            </div>\n          </div>\n\n          <div id=\"wdbWrapLog\">\n            <code id=\"wdbLog\"></code>\n          </div>\n\n          <div id=\"wdbWrapVariables\">\n            <pre>chance : % win chance in next game\nplinkoRow : Plinko rows, only for plinko game, some site not have\nplinkoRisk : risk level for plinko game (low, medium, high)\nbethigh : Bet side in next game (true is over/above, false is under/below)\nnextbet : Amount in next game\nlastBet.amount, previousbet : Amount in previous game\nlastBet.chance : % win chance in previous game\nlastBet.roll : % roll chance in previous game\nlastBet.target : Target number in previous game (some sites have)\nlastBet.result : Result number in previous game (some sites have)\nlastBet.profit, currentprofit : Profit in previous game\nlastBet.nonce : Current seed nonce\nlastBet.id : Bet ID in previous game\ncurrency : Currency to play (some site not work)\nbalance : Current balance\nminbalance : Smallest balance in session\nmaxbalance : Biggest balance in session\nminprofit : Smallest profit in session\nmaxprofit : Biggest profit in session\nprofit : Session profit\nwagered : Session wagered\nwin : State in previous game (true is win, false is lose)\nbets : Bet count\nwins : Win count\nwinstreak  : Winning streak\nlosses : Lose count\nlosestreak : Losing streak\ncurrentstreak : Current streak (smaller 0 is losing streak and vice versa)\npartialprofit : Partial profit (same in other dicebot)\nscriptname : Name of script u use\ncasino : Name of casino (example: 500.casino = 500; bch.games = bch)</pre>\n          </div>\n\n          <div id=\"wdbWrapFunctions\">\n<pre>dobet() : Main function for betting\nstop() : Stop betting\nresume() : Resume betting with current params\nresetseed() : Reset fairness\nresetstats() : Reset statistics\nresetchart() : Reset chart\nresethistory() : Reset history\nresetlog() : Reset log\nresetall() : Reset time, statistics, chart, history, log\ncheckbalance() : Check actual balance\nching() : Alert with sound\nlog(message) : Write a message in Log area\nsleep(sec) : Pause betting system with sec\nresetpartialprofit() : Reset partialprofit</pre>\n          </div>\n\n          <div id=\"wdbWrapTips\">\n            <pre>Click \u25BC or \u25B2 on to see something change\nDisable chart, history, log to have best performance\nHold top or bottom area to move the bot around</pre>\n          </div>\n        </div>\n\n        <div id=\"wdbControlMenu\">\n          <button id=\"wdbStartButton\" class=\"btn-grad btn-control\" onclick=\"start('click')\">Start</button>\n          <button id=\"wdbStopButton\" class=\"btn-grad btn-control\" onclick=\"stop()\">Stop</button>\n          <button id=\"wdbResumeButton\" class=\"btn-grad btn-control\" onclick=\"resume('click')\" disabled>Resume</button>\n          <button id=\"wdbStopOnWinButton\" class=\"btn-grad btn-control\" onclick=\"stopOnWin()\">Stop On Win</button>\n          <button class=\"btn-grad btn-control\" onclick=\"checkbalance()\">Check Balance</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"wdbFooter\">\n    <div class=\"clearfix\">\n      <div class=\"float-left\" style=\"padding-left: 5px;\"> \n        Trial version | " + location.hostname.replace('www.', '') + "\n      </div>\n      <div class=\"float-right\">\n        Speed: <span id=\"wdbSpeed\">0</span>\n        <span class=\"wdb-toggle\" id=\"wdbToggleHideControlBot\" onclick=\"toggleHideControlBot(this)\">\u25B2</span>\n      </div>\n    </div>\n  </div>\n</div>";
function changeMaxRows() {
    maxRows = Number(document.getElementById('wdbMaxRows').value);
    toggleChart("reset");
    toggleHistory("clear");
    toggleLog("clear");
}
function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.getElementById("wdb").style.backgroundColor = '#400000';
        document.getElementById("wdb").style.color = "#bef6fa";
        chart.options.theme = "dark1";
        chart.render();
        luaEditor.setOption('theme', "darcula");
        jsEditor.setOption('theme', 'darcula');
        document.querySelector("#wdbWrapVariables pre").style.backgroundColor = '#400000';
        document.querySelector("#wdbWrapVariables pre").style.color = "#bef6fa";
        document.querySelector("#wdbWrapFunctions pre").style.backgroundColor = "#400000";
        document.querySelector("#wdbWrapFunctions pre").style.color = '#bef6fa';
        document.querySelector("#wdbWrapTips pre").style.backgroundColor = '#400000';
        document.querySelector("#wdbWrapTips pre").style.color = "#bef6fa";
        document.querySelectorAll("#wdbWrapHistory table thead tr th").forEach(_0x4514b9 => _0x4514b9.style.color = '#bef6fa');
    } else {
        document.getElementById("wdb").style.backgroundColor = "#bef6fa";
        document.getElementById("wdb").style.color = "#000";
        chart.options.theme = 'light';
        chart.render();
        luaEditor.setOption('theme', "default");
        jsEditor.setOption('theme', "default");
        document.querySelector("#wdbWrapVariables pre").style.backgroundColor = "#bef6fa";
        document.querySelector("#wdbWrapVariables pre").style.color = "#000";
        document.querySelector("#wdbWrapFunctions pre").style.backgroundColor = "#bef6fa";
        document.querySelector("#wdbWrapFunctions pre").style.color = "#000";
        document.querySelector("#wdbWrapTips pre").style.backgroundColor = "#bef6fa";
        document.querySelector("#wdbWrapTips pre").style.color = "#000";
        document.querySelectorAll("#wdbWrapHistory table thead tr th").forEach(_0x7003ca => _0x7003ca.style.color = "#000");
    }
    updateStats();
}
function toggleMinimalBot(_0x8ca9c1) {
    if (_0x8ca9c1.innerText === '▼') {
        document.getElementById('wdbMain').style.display = 'none';
        document.getElementById("wdbFooter").style.display = 'none';
        document.getElementById("wdb").style.width = "350px";
        document.getElementById("wdb").style.top = "95vh";
        document.getElementById("wdb").style.left = "0vh";
        document.getElementById("wdb").style.position = 'fixed';
        _0x8ca9c1.innerText = '▲';
    } else {
        document.getElementById('wdbMain').style.display = 'block';
        document.getElementById("wdbFooter").style.display = "block";
        document.getElementById("wdb").style.width = '1000px';
        document.getElementById("wdb").style.top = "5px";
        document.getElementById("wdb").style.left = "5px";
        _0x8ca9c1.innerText = '▼';
    }
}
function toggleHideControlBot(_0x55c5ba) {
    if (_0x55c5ba.innerText === '▲') {
        document.getElementById('wdbWrapControl').style.display = 'none';
        _0x55c5ba.innerText = '▼';
    } else {
        document.getElementById('wdbWrapControl').style.display = "flex";
        _0x55c5ba.innerText = '▲';
    }
}
function drawSelectCoin() {
    let _0x16202e = '';
    coins.map(_0x1b2b98 => {
        _0x16202e += "<option value=\"" + _0x1b2b98 + "\">" + _0x1b2b98 + "</option>";
    });
    document.getElementById("wdbMenuCoin").innerHTML = _0x16202e;
    currency = String(coin).toLowerCase();
    fengari.load("currency=\"" + currency + "\"")();
}
async function wdbCreateUI() {
    const _0x18e942 = document.createElement("div");
    _0x18e942.id = "wdbWrap";
    _0x18e942.innerHTML = wdbUI;
    document.body.prepend(_0x18e942);
    const _0x48d218 = document.getElementById('wdb');
    let _0x375873 = 0x0;
    let _0x13350d = 0x0;
    let _0x5dd70e = 0x0;
    let _0x19a1cd = 0x0;
    if (document.getElementById("wdbHeader")) {
        document.getElementById("wdbHeader").onmousedown = _0x911aa6;
    } else {
        _0x48d218.onmousedown = _0x911aa6;
    }
    if (document.getElementById("wdbFooter")) {
        document.getElementById("wdbFooter").onmousedown = _0x911aa6;
    } else {
        _0x48d218.onmousedown = _0x911aa6;
    }
    function _0x911aa6(_0x186f8d) {
        _0x186f8d = _0x186f8d || window.event;
        _0x186f8d.preventDefault();
        _0x5dd70e = _0x186f8d.clientX;
        _0x19a1cd = _0x186f8d.clientY;
        document.onmouseup = _0x30766f;
        document.onmousemove = _0x3c9046;
    }
    function _0x3c9046(_0x357faa) {
        _0x357faa = _0x357faa || window.event;
        _0x357faa.preventDefault();
        _0x375873 = _0x5dd70e - _0x357faa.clientX;
        _0x13350d = _0x19a1cd - _0x357faa.clientY;
        _0x5dd70e = _0x357faa.clientX;
        _0x19a1cd = _0x357faa.clientY;
        _0x48d218.style.top = _0x48d218.offsetTop - _0x13350d + 'px';
        _0x48d218.style.left = _0x48d218.offsetLeft - _0x375873 + 'px';
    }
    function _0x30766f() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    if (document.getElementById("wdbWrapLicenseBox")) {
        document.getElementById("wdbWrapLicenseBox").remove();
    }
    if (document.getElementById("wdbWrapInitializing")) {
        document.getElementById("wdbWrapInitializing").remove();
    }
    luaEditor = CodeMirror.fromTextArea(document.getElementById('wdbScriptBoxLUA'), {
        'theme': 'default',
        'mode': "lua",
        'lineNumbers': true
    });
    luaEditor.save();
    jsEditor = CodeMirror.fromTextArea(document.getElementById("wdbScriptBoxJS"), {
        'theme': 'default',
        'mode': "javascript",
        'lineNumbers': true
    });
    jsEditor.save();
    wdbSpeed = new MySpeed();
    wdbTimer = new easytimer.Timer();
    wdbTimer.addEventListener("secondsUpdated", () => {
        const _0x32ef57 = wdbTimer.getTimeValues().days + ':' + wdbTimer.getTimeValues().hours + ':' + wdbTimer.getTimeValues().minutes + ':' + wdbTimer.getTimeValues().seconds;
        document.getElementById("wdbTime").innerText = _0x32ef57;
    });
    document.getElementById("wdbJSMode").style.display = "none";
    document.getElementById('wdbAdvancedMode').style.display = 'none';
    document.getElementById("wdbWrapLog").style.display = 'none';
    document.getElementById("wdbWrapVariables").style.display = 'none';
    document.getElementById('wdbWrapFunctions').style.display = 'none';
    document.getElementById('wdbWrapTips').style.display = 'none';
    document.getElementById("wdbShowMode").disabled = true;
    luaFileSelector = document.getElementById("wdbOpenLUAScript");
    luaFileSelector.addEventListener("click", function () {
        luaFileSelector.value = null;
    });
    luaFileSelector.addEventListener("change", async _0x3b2ccb => {
        const _0x8fa22e = await new Response(_0x3b2ccb.target.files[0x0]).text();
        if (!_0x8fa22e) {
            return;
        }
        luaEditor.setValue(_0x8fa22e);
    });
    jsFileSelector = document.getElementById('wdbOpenJSScript');
    jsFileSelector.addEventListener("click", function () {
        jsFileSelector.value = null;
    });
    jsFileSelector.addEventListener("change", async _0xfabf46 => {
        const _0x2e2508 = await new Response(_0xfabf46.target.files[0x0]).text();
        if (!_0x2e2508) {
            return;
        }
        jsEditor.setValue(_0x2e2508);
    });
    drawChart();
}
async function wdbLoader(_0x2c3fa8, _0x4d67db) {
    await _0x2c3fa8('https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js');
    await _0x4d67db("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css");
    await _0x4d67db('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css');
    await _0x2c3fa8("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js");
    await _0x2c3fa8("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js");
    await _0x2c3fa8('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js');
    await _0x2c3fa8(WDB_API + '/' + WDB_MODE + "/lib/chart.js");
    await _0x2c3fa8(WDB_API + '/' + WDB_MODE + "/lib/easytimer.js");
    await _0x2c3fa8(WDB_API + '/' + WDB_MODE + "/lib/fengari.js");
    await _0x2c3fa8(WDB_API + '/' + WDB_MODE + "/lib/ms.js");
    await beforeWork(_0x2c3fa8);
    await wdbCreateUI();
    await getListCoin();
    initLua();
    log('Connected');
    return "wdbLoader ok";
}
function toggleNav(_0x3f9451) {
    if (_0x3f9451 === "mode") {
        document.getElementById("wdbWrapMode").style.display = "block";
        document.getElementById("wdbWrapLog").style.display = "none";
        document.getElementById('wdbWrapVariables').style.display = "none";
        document.getElementById("wdbWrapFunctions").style.display = "none";
        document.getElementById("wdbWrapTips").style.display = "none";
        document.getElementById("wdbShowMode").disabled = true;
        document.getElementById("wdbShowLog").disabled = false;
        document.getElementById("wdbShowVariables").disabled = false;
        document.getElementById("wdbShowFunctions").disabled = false;
        document.getElementById("wdbShowTips").disabled = false;
    } else {
        if (_0x3f9451 === "log") {
            document.getElementById("wdbWrapMode").style.display = "none";
            document.getElementById("wdbWrapLog").style.display = "block";
            document.getElementById('wdbWrapVariables').style.display = "none";
            document.getElementById("wdbWrapFunctions").style.display = "none";
            document.getElementById("wdbWrapTips").style.display = "none";
            document.getElementById('wdbShowMode').disabled = false;
            document.getElementById("wdbShowLog").disabled = true;
            document.getElementById("wdbShowVariables").disabled = false;
            document.getElementById("wdbShowFunctions").disabled = false;
            document.getElementById("wdbShowTips").disabled = false;
        } else {
            if (_0x3f9451 === "variables") {
                document.getElementById("wdbWrapMode").style.display = 'none';
                document.getElementById("wdbWrapLog").style.display = "none";
                document.getElementById('wdbWrapVariables').style.display = "block";
                document.getElementById("wdbWrapFunctions").style.display = "none";
                document.getElementById("wdbWrapTips").style.display = "none";
                document.getElementById("wdbShowMode").disabled = false;
                document.getElementById("wdbShowLog").disabled = false;
                document.getElementById("wdbShowVariables").disabled = true;
                document.getElementById('wdbShowFunctions').disabled = false;
                document.getElementById("wdbShowTips").disabled = false;
            } else {
                if (_0x3f9451 === "functions") {
                    document.getElementById('wdbWrapMode').style.display = "none";
                    document.getElementById("wdbWrapLog").style.display = "none";
                    document.getElementById('wdbWrapVariables').style.display = "none";
                    document.getElementById("wdbWrapFunctions").style.display = "block";
                    document.getElementById("wdbWrapTips").style.display = "none";
                    document.getElementById("wdbShowMode").disabled = false;
                    document.getElementById("wdbShowLog").disabled = false;
                    document.getElementById("wdbShowVariables").disabled = false;
                    document.getElementById("wdbShowFunctions").disabled = true;
                    document.getElementById("wdbShowTips").disabled = false;
                } else if (_0x3f9451 === "tips") {
                    document.getElementById("wdbWrapMode").style.display = "none";
                    document.getElementById("wdbWrapLog").style.display = "none";
                    document.getElementById('wdbWrapVariables').style.display = 'none';
                    document.getElementById("wdbWrapFunctions").style.display = "none";
                    document.getElementById("wdbWrapTips").style.display = "block";
                    document.getElementById("wdbShowMode").disabled = false;
                    document.getElementById("wdbShowLog").disabled = false;
                    document.getElementById("wdbShowVariables").disabled = false;
                    document.getElementById("wdbShowFunctions").disabled = false;
                    document.getElementById("wdbShowTips").disabled = true;
                }
            }
        }
    }
}
function toggleShow(_0x484f75) {
    if (_0x484f75 === 'stats') {
        if (document.getElementById("wdbToggleShowStats").checked) {
            selectFunction('showstats');
        } else {
            selectFunction("hidestats");
        }
    } else {
        if (_0x484f75 === "chart") {
            if (document.getElementById('wdbToggleShowChart').checked) {
                selectFunction("showchart");
            } else {
                selectFunction('hidechart');
            }
        } else if (_0x484f75 === "history") {
            if (document.getElementById("wdbToggleShowHistory").checked) {
                selectFunction("showhistory");
            } else {
                selectFunction("hidehistory");
            }
        }
    }
}
function toggleLive(_0x489158) {
    if (_0x489158 === "chart") {
        if (document.getElementById('wdbToggleLiveChart').checked) {
            selectFunction("startchart");
        } else {
            selectFunction('stopchart');
        }
    } else {
        if (_0x489158 === 'history') {
            if (document.getElementById('wdbToggleLiveHistory').checked) {
                selectFunction("starthistory");
            } else {
                selectFunction('stophistory');
            }
        } else if (_0x489158 === "log") {
            if (document.getElementById('wdbToggleLiveLog').checked) {
                selectFunction("startlog");
            } else {
                selectFunction('stoplog');
            }
        }
    }
}
function selectFunction(_0x5a8141) {
    if (_0x5a8141 === "resetall") {
        resetall();
    }
    if (_0x5a8141 === "resetstats") {
        resetstats();
    }
    if (_0x5a8141 === 'resetchart') {
        toggleChart("reset");
    }
    if (_0x5a8141 === "resethistory") {
        toggleHistory("clear");
    }
    if (_0x5a8141 === "resetlog") {
        toggleLog("clear");
    }
    if (_0x5a8141 === 'resetseed') {
        resetseed();
    }
    if (_0x5a8141 === "stopchart") {
        toggleChart("stop");
    }
    if (_0x5a8141 === "startchart") {
        toggleChart("start");
    }
    if (_0x5a8141 === "stophistory") {
        toggleHistory("stop");
    }
    if (_0x5a8141 === "starthistory") {
        toggleHistory("start");
    }
    if (_0x5a8141 === 'stoplog') {
        toggleLog("stop");
    }
    if (_0x5a8141 === "startlog") {
        toggleLog("start");
    }
    if (_0x5a8141 === "hidestats") {
        toggleStats("hide");
    }
    if (_0x5a8141 === "showstats") {
        toggleStats('show');
    }
    if (_0x5a8141 === "hidechart") {
        toggleChart("hide");
    }
    if (_0x5a8141 === "showchart") {
        toggleChart("show");
    }
    if (_0x5a8141 === "hidehistory") {
        toggleHistory("hide");
    }
    if (_0x5a8141 === "showhistory") {
        toggleHistory('show');
    }
}
function toggleMode(_0x342ed8) {
    mode = _0x342ed8;
    if (_0x342ed8 === "lua") {
        document.getElementById('wdbLUAMode').style.display = "block";
        document.getElementById("wdbJSMode").style.display = "none";
        document.getElementById("wdbAdvancedMode").style.display = "none";
    } else {
        if (_0x342ed8 === 'js') {
            document.getElementById('wdbLUAMode').style.display = "none";
            document.getElementById('wdbJSMode').style.display = "block";
            document.getElementById("wdbAdvancedMode").style.display = "none";
        } else if (_0x342ed8 === 'advanced') {
            document.getElementById('wdbLUAMode').style.display = "none";
            document.getElementById('wdbJSMode').style.display = 'none';
            document.getElementById("wdbAdvancedMode").style.display = 'block';
        }
    }
}
function toggleStats(_0x436d59) {
    if (_0x436d59 === 'hide') {
        document.getElementById("wdbStats").style.display = "none";
    } else if (_0x436d59 === "show") {
        document.getElementById("wdbStats").style.display = "flex";
    }
}
function toggleChart(_0x51aa1e) {
    if (_0x51aa1e === "hide") {
        document.getElementById('wdbChart').style.display = 'none';
        document.getElementById("wdbWrapHistory").style.height = '380px';
    } else {
        if (_0x51aa1e === 'show') {
            document.getElementById('wdbChart').style.display = 'block';
            document.getElementById("wdbWrapHistory").style.height = "190px";
        } else {
            if (_0x51aa1e === "stop") {
                stopChart = true;
            } else {
                if (_0x51aa1e === "start") {
                    stopChart = false;
                } else if (_0x51aa1e === "reset") {
                    betsChart = 0x0;
                    profitChart = 0x0;
                    drawChart();
                }
            }
        }
    }
}
function toggleHistory(_0x45aafb) {
    if (_0x45aafb === "hide") {
        document.getElementById("wdbWrapHistory").style.display = 'none';
        document.getElementById("wdbChart").style.height = '380px';
    } else {
        if (_0x45aafb === 'show') {
            document.getElementById("wdbWrapHistory").style.display = "block";
            document.getElementById("wdbChart").style.height = '190px';
        } else {
            if (_0x45aafb === 'stop') {
                stopHistory = true;
            } else {
                if (_0x45aafb === "start") {
                    stopHistory = false;
                } else if (_0x45aafb === "clear") {
                    document.getElementById("wdbHistory").innerHTML = '';
                }
            }
        }
    }
}
function toggleLog(_0x2f16f8) {
    if (_0x2f16f8 === "stop") {
        stopLog = true;
    } else {
        if (_0x2f16f8 === "start") {
            stopLog = false;
        } else if (_0x2f16f8 === "clear") {
            document.getElementById("wdbLog").innerHTML = '';
        }
    }
}
async function handleAdvanced() {
    chance = Number(document.getElementById('advancedChance').value);
    chanceOnWinCheck = document.getElementById("advancedChanceOnWinCheck").checked;
    if (chanceOnWinCheck) {
        chanceOnWin = Number(document.getElementById("advancedChanceOnWin").value);
    } else {
        chanceOnWin = chance;
    }
    chanceOnWinBets = Number(document.getElementById("advancedChanceOnWinBets").value);
    chanceOnLoseCheck = document.getElementById("advancedChanceOnLoseCheck").checked;
    if (chanceOnLoseCheck) {
        chanceOnLose = Number(document.getElementById('advancedChanceOnLose').value);
    } else {
        chanceOnLose = chance;
    }
    chanceOnLoseBets = Number(document.getElementById("advancedChanceOnLoseBets").value);
    multiOnWinCheck = document.getElementById("advancedMultiOnWinCheck").checked;
    if (multiOnWinCheck) {
        multiOnWin = Number(document.getElementById("advancedMultiOnWin").value);
    } else {
        multiOnWin = 0x1;
    }
    multiOnWinBets = Number(document.getElementById('advancedMultiOnWinBets').value);
    multiOnLoseCheck = document.getElementById('advancedMultiOnLoseCheck').checked;
    if (multiOnLoseCheck) {
        multiOnLose = Number(document.getElementById("advancedMultiOnLose").value);
    } else {
        multiOnLose = 0x1;
    }
    multiOnLoseBets = Number(document.getElementById('advancedMultiOnLoseBets').value);
    betHighOnBetCheck = document.getElementById("advancedBetHighOnBetCheck").checked;
    if (betHighOnBetCheck) {
        betHighOnBet = Number(document.getElementById('advancedBetHighOnBet').value);
        if (bets % betHighOnBet === 0x0) {
            bethigh = !bethigh;
        }
    }
    betHighOnProfitCheck = document.getElementById("advancedBetHighOnProfitCheck").checked;
    if (betHighOnProfitCheck) {
        betHighOnProfit = Number(document.getElementById("advancedBetHighOnProfit").value);
        if (profit >= betHighOnProfit) {
            bethigh = !bethigh;
        }
    }
    resetstatsOnProfitCheck = document.getElementById("resetstatsOnProfitCheck").checked;
    if (resetstatsOnProfitCheck) {
        resetstatsOnProfit = Number(document.getElementById('resetstatsOnProfit').value);
        if (profit >= resetstatsOnProfit) {
            resetstats();
        }
    }
    stopRollNumberCheck = document.getElementById("advancedStopRollNumberCheck").checked;
    if (stopRollNumberCheck) {
        stopRollNumber = Number(document.getElementById("advancedStopRollNumber").value);
        if (lastBet.result === stopRollNumber) {
            stop();
            log("Stop on roll number " + stopRollNumber);
        }
    }
    stopStreakCheck = document.getElementById("advancedStopAfterStreakCheck").checked;
    if (stopStreakCheck) {
        stopStreak = Number(document.getElementById('advancedStopAfterStreak').value);
        if (stopStreak > 0x0) {
            if (currentstreak >= stopStreak) {
                stop();
                log("Stop on current streak " + stopStreak);
            }
        } else {
            if (currentstreak <= stopStreak) {
                stop();
                log("Stop on current streak " + stopStreak);
            }
        }
    }
    stopOnBetsCheck = document.getElementById('advancedStopOnBetsCheck').checked;
    if (stopOnBetsCheck) {
        stopOnBets = Number(document.getElementById("advancedStopOnBets").value);
        if (bets >= stopOnBets) {
            stop();
            log("Stop on " + stopOnBets + " bet");
        }
    }
    stopOnWinsCheck = document.getElementById('advancedStopOnWinsCheck').checked;
    if (stopOnWinsCheck) {
        stopOnWins = Number(document.getElementById("advancedStopOnWins").value);
        if (winstreak >= stopOnWins) {
            stop();
            log("Stop on " + stopOnWins + " win");
        }
    }
    stopOnLoseCheck = document.getElementById('advancedStopOnLoseCheck').checked;
    if (stopOnLoseCheck) {
        stopOnLose = Number(document.getElementById("advancedStopOnLose").value);
        if (losestreak >= stopOnLose) {
            stop();
            log("Stop on " + stopOnLose + " lose");
        }
    }
    stopOnProfitCheck = document.getElementById("stopOnProfitCheck").checked;
    if (stopOnProfitCheck) {
        stopOnProfit = Number(document.getElementById("stopOnProfit").value);
        if (profit >= stopOnProfit) {
            stop();
            log("Stop on profit " + stopOnProfit);
        }
    }
    stopOnBalanceCheck = document.getElementById("stopOnBalanceCheck").checked;
    if (stopOnBalanceCheck) {
        stopOnBalance = Number(document.getElementById("stopOnBalance").value);
        if (balance >= stopOnBalance) {
            stop();
            log("Stop on balance " + stopOnBalance);
        }
    }
    if (win) {
        betHighOnWinCheck = document.getElementById("advancedBetHighOnWinCheck").checked;
        if (betHighOnWinCheck) {
            betHighOnWin = Number(document.getElementById('advancedBetHighOnWin').value);
            if (winstreak % betHighOnWin === 0x0) {
                bethigh = !bethigh;
            }
        }
        if (winstreak % chanceOnWinBets === 0x0) {
            chance = chanceOnWin;
        }
        if (multiOnWinCheck) {
            if (winstreak % multiOnWinBets === 0x0) {
                nextbet = previousbet * multiOnWin;
            }
        } else {
            nextbet = basebet;
        }
    } else {
        betHighOnLoseCheck = document.getElementById("advancedBetHighOnLoseCheck").checked;
        if (betHighOnLoseCheck) {
            betHighOnLose = Number(document.getElementById("advancedBetHighOnLose").value);
            if (losestreak % betHighOnLose === 0x0) {
                bethigh = !bethigh;
            }
        }
        if (losestreak % chanceOnLoseBets === 0x0) {
            chance = chanceOnLose;
        }
        if (multiOnLoseCheck) {
            if (losestreak % multiOnLoseBets === 0x0) {
                nextbet = previousbet * multiOnLose;
            }
        } else {
            nextbet = basebet;
        }
    }
    return "handleAdvanced ok";
}
function changeCoin() {
    coin = document.getElementById('wdbMenuCoin').value;
    currency = String(coin).toLowerCase();
    fengari.load("currency=\"" + currency + "\"")();
    checkbalance();
}
async function handleStats() {
    bets++;
    betsChart++;
    wdbSpeed.bets++;
    lastBet.target = target;
    lastBet.Target = target;
    lastBet.result = result;
    lastBet.Result = result;
    lastBet.profit = currentprofit;
    lastBet.Profit = currentprofit;
    lastBet.Nonce = lastBet.nonce;
    lastBet.Id = lastBet.id;
    balance += currentprofit;
    profit += currentprofit;
    profitChart += currentprofit;
    wagered += nextbet;
    partialprofit += currentprofit;
    if (game === "dice") {
        if (bethigh) {
            if (lastBet.result > lastBet.target) {
                win = true;
            } else {
                win = false;
            }
        } else if (lastBet.result < lastBet.target) {
            win = true;
        } else {
            win = false;
        }
    } else {
        if (game === "plinko") {
            if (lastBet.profit > 0x0) {
                win = true;
            } else {
                win = false;
            }
        } else if (lastBet.result >= lastBet.target) {
            win = true;
        } else {
            win = false;
        }
    }
    if (win) {
        color = "green";
        wins++;
        winstreak++;
        losestreak = 0x0;
        currentstreak = winstreak;
    } else {
        color = "red";
        losses++;
        losestreak++;
        winstreak = 0x0;
        currentstreak = 0x0 - losestreak;
        if (previousbet > maxLosseAmount) {
            maxLosseAmount = previousbet;
        }
    }
    if (nextbet > maxBetAmount) {
        maxBetAmount = nextbet;
    }
    if (winstreak > maxwinstreak) {
        maxwinstreak = winstreak;
    }
    if (losestreak > maxlosestreak) {
        maxlosestreak = losestreak;
    }
    if (balance < minbalance) {
        minbalance = balance;
    }
    if (balance > maxbalance) {
        maxbalance = balance;
    }
    if (profit < minprofit) {
        minprofit = profit;
    }
    if (profit > maxprofit) {
        maxprofit = profit;
    }
    const _0x371cbd = await updateStats();
    const _0x4df5b5 = await updateChart();
    const _0xa6a051 = await updateHistory();
    Promise.all([_0x371cbd, _0x4df5b5, _0xa6a051]).then(async _0x1aaa44 => {
        try {
            if (mode === 'lua') {
                await updateLua();
            } else {
                if (mode === 'js') {
                    await dobet();
                } else if (mode === 'advanced') {
                    await handleAdvanced();
                }
            }
            if (win && sOW) {
                return stop();
            }
            if (run) {
                return playBet();
            }
        } catch (_0x395850) {
            stop();
            log(_0x395850);
        }
    });
}
async function updateStats() {
    const _0x139d80 = profit === 0x0 ? darkMode ? "white" : "black" : profit < 0x0 ? "red" : "green";
    const _0x1b014a = currentstreak === 0x0 ? darkMode ? "white" : 'black' : currentstreak < 0x0 ? "red" : 'green';
    const _0x46f474 = maxwinstreak > 0x0 ? 'green' : "black";
    document.getElementById("wdbHighWinStreak").style.color = _0x46f474;
    const _0x8bd9e6 = maxlosestreak > 0x0 ? "red" : "black";
    document.getElementById("wdbHighLoseStreak").style.color = _0x8bd9e6;
    document.getElementById('wdbWagered').innerText = wagered.toFixed(decimalAmountView);
    document.getElementById("wdbBalance").innerText = balance.toFixed(decimalAmountView);
    document.getElementById("wdbProfit").style.color = _0x139d80;
    document.getElementById('wdbProfit').innerText = profit.toFixed(decimalAmountView);
    document.getElementById('wdbHighBet').innerText = maxBetAmount.toFixed(decimalAmountView);
    document.getElementById("wdbHighLose").innerText = maxLosseAmount.toFixed(decimalAmountView);
    document.getElementById("wdbBets").innerText = bets;
    document.getElementById("wdbWins").innerText = wins;
    document.getElementById("wdbLosses").innerText = losses;
    document.getElementById('wdbCurrentStreak').style.color = _0x1b014a;
    document.getElementById('wdbCurrentStreak').innerText = currentstreak;
    document.getElementById("wdbHighWinStreak").innerText = maxwinstreak;
    document.getElementById("wdbHighLoseStreak").innerText = maxlosestreak;
    document.getElementById("wdbMinBalance").innerText = minbalance.toFixed(decimalAmountView);
    document.getElementById("wdbMaxBalance").innerText = maxbalance.toFixed(decimalAmountView);
    document.getElementById("wdbMinProfit").innerText = minprofit.toFixed(decimalAmountView);
    document.getElementById("wdbMaxProfit").innerText = maxprofit.toFixed(decimalAmountView);
    percentWagered = wagered / startBalance;
    percentWagered = Math.round((percentWagered + Number.EPSILON) * 0x64) / 0x64;
    if (String(percentWagered) === "Infinity" || String(percentWagered) === "NaN") {
        percentWagered = 0x0;
    }
    document.getElementById("wdbPercentWagered").innerText = percentWagered;
    percentProfit = profit / startBalance * 0x64;
    percentProfit = Math.round((percentProfit + Number.EPSILON) * 0x64) / 0x64;
    if (String(percentProfit) === "Infinity" || String(percentProfit) === "NaN") {
        percentProfit = 0x0;
    }
    document.getElementById("wdbWrapPercentProfit").style.color = _0x139d80;
    document.getElementById("wdbPercentProfit").innerText = percentProfit;
    return "updateStats ok";
}
function drawChart() {
    dps = [{
        'x': betsChart,
        'y': profitChart
    }];
    chart = new CanvasJS.Chart('wdbChart', {
        'theme': darkMode ? "dark1" : "light1",
        'axisY': {
            'includeZero': false
        },
        'data': [{
            'type': "line",
            'markerSize': 0x0,
            'dataPoints': dps
        }]
    });
    chart.render();
}
async function updateChart() {
    if (!stopChart) {
        dps.push({
            'x': betsChart,
            'y': profitChart,
            'color': color
        });
        if (dps.length > maxRows) {
            dps.shift();
        }
        if (dps[dps.length - 0x2]) {
            dps[dps.length - 0x2].lineColor = color;
        }
        chart.render();
    }
    return "updateChart ok";
}
async function updateHistory() {
    if (!stopHistory) {
        const _0x465e7d = game === "dice" ? bethigh ? '>' : '<' : '>';
        const _0x39d764 = bethigh ? "<input id=\"bethigh" + bets + "\" type=\"checkbox\" checked />" : "<input id=\"bethigh" + bets + "\" type=\"checkbox\" />";
        const _0x360b60 = '' + (havePlinkoRows ? plinkoRow + " | " : '') + plinkoRisk;
        const _0x532548 = "<td>" + bets + "</td>\n      <td>" + Number(lastBet.amount).toFixed(decimalAmountView) + "</td>\n      <td>" + _0x39d764 + "</td>\n      <td>" + (game === "plinko" ? _0x360b60 : Number(lastBet.chance).toFixed(decimalChanceView)) + "</td>\n      <td>" + Number(lastBet.roll).toFixed(decimalChanceView) + "</td>\n      <td>" + Number(lastBet.profit).toFixed(decimalAmountView) + "</td>\n      <td>" + (game === "plinko" ? _0x360b60 : _0x465e7d + Number(target).toFixed(decimalTargetResult)) + "</td>\n      <td>" + Number(result).toFixed(decimalTargetResult) + "</td>\n      <td>" + lastBet.nonce + "</td>\n      <td>" + lastBet.id + "</td>";
        const _0x171a4c = document.createElement('tr');
        if (win) {
            _0x171a4c.style.backgroundColor = "#91f190";
        } else {
            _0x171a4c.style.backgroundColor = "#ffc0cb";
        }
        _0x171a4c.innerHTML = _0x532548;
        document.getElementById("wdbHistory").insertBefore(_0x171a4c, document.getElementById("wdbHistory").children[0x0]);
        const _0x4a3035 = document.querySelector("#wdbHistory").rows;
        if (_0x4a3035.length > maxRows) {
            document.querySelector("#wdbHistory").lastChild.remove();
        }
    }
    return "updateHistory ok";
}
function log(_0x2b11f3) {
    const _0x5529a0 = document.getElementById("wdbLog");
    const _0x38bbb1 = document.createElement('li');
    _0x38bbb1.innerText = '' + _0x2b11f3;
    document.getElementById("wdbLog").insertBefore(_0x38bbb1, _0x5529a0.children[0x0]);
    const _0x272e91 = _0x5529a0.getElementsByTagName('li');
    if (_0x272e91.length > maxRows) {
        document.getElementById("wdbLog").removeChild(_0x5529a0.lastChild);
    }
}
async function start() {
    try {
        if (!run) {
            document.getElementById('wdbTime').innerText = '0:0:0:0';
            document.getElementById('wdbMenuCoin').disabled = true;
            document.getElementById("wdbMenuMode").disabled = true;
            document.getElementById("wdbStartButton").disabled = true;
            document.getElementById("wdbResumeButton").disabled = true;
            document.querySelectorAll("#wdbSaveScriptButton").forEach(_0x5ee891 => _0x5ee891.disabled = true);
            document.querySelectorAll("#wdbOpenScript").forEach(_0x3c1208 => _0x3c1208.disabled = true);
            run = true;
            sOW = false;
            wdbTimer.stop();
            wdbTimer.start();
            wdbSpeed.stop();
            wdbSpeed.start();
            if (mode === "lua") {
                diceScript = luaEditor.getValue();
                diceScript = diceScript.replace(/!=/g, '~=').replace(/!/g, "not ").replace(/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1+$2 ").replace(/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1-$2 ").replace(/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1*$2 ").replace(/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1/$2 ");
                fengari.load(diceScript)();
            } else {
                if (mode === 'js') {
                    if (document.getElementById("wdbRunningScript") !== null) {
                        document.getElementById("wdbRunningScript").remove();
                    }
                    diceScript = jsEditor.getValue();
                    let _0x32f664 = document.createElement("script");
                    _0x32f664.id = "wdbRunningScript";
                    _0x32f664.innerHTML = diceScript;
                    document.head.appendChild(_0x32f664);
                } else if (mode === "advanced") {
                    basebet = Number(document.getElementById("advancedBaseBet").value);
                    nextbet = basebet;
                    chance = Number(document.getElementById("advancedChance").value);
                    bethigh = document.querySelector('#advancedBetHigh').checked;
                }
            }
            if (run) {
                return playBet();
            }
        }
    } catch (_0x4b525d) {
        stop();
        log(_0x4b525d);
    }
}
function stop() {
    if (run) {
        run = false;
        sOW = false;
        wdbSpeed.pause();
        wdbTimer.pause();
        document.getElementById("wdbMenuCoin").disabled = false;
        document.getElementById('wdbMenuMode').disabled = false;
        document.getElementById('wdbStartButton').disabled = false;
        document.getElementById("wdbResumeButton").disabled = false;
        document.querySelectorAll("#wdbSaveScriptButton").forEach(_0x4d793e => _0x4d793e.disabled = false);
        document.querySelectorAll("#wdbOpenScript").forEach(_0x49378d => _0x49378d.disabled = false);
        document.getElementById('wdbStopOnWinButton').disabled = false;
    }
}
async function resume(_0x3cea2c) {
    if (!run) {
        document.getElementById('wdbMenuCoin').disabled = true;
        document.getElementById('wdbMenuMode').disabled = true;
        document.getElementById("wdbStartButton").disabled = true;
        document.getElementById("wdbResumeButton").disabled = true;
        document.querySelectorAll('#wdbSaveScriptButton').forEach(_0x521993 => _0x521993.disabled = true);
        document.querySelectorAll('#wdbOpenScript').forEach(_0x4b2ec1 => _0x4b2ec1.disabled = true);
        if (!_0x3cea2c) {
            log("Call resume() by script -> betting after 5s");
            await new Promise(_0x302aeb => setTimeout(_0x302aeb, 0x1388));
        }
        run = true;
        sOW = false;
        wdbSpeed.start();
        wdbTimer.start();
        return playBet();
    }
}
function stopOnWin() {
    sOW = true;
    if (run) {
        document.getElementById("wdbStopOnWinButton").disabled = true;
    }
}
async function playBet() {
    try {
        if (mode === "lua") {
            nextbet = fengari.load("return nextbet")();
            chance = fengari.load("return chance")();
            bethigh = fengari.load("return bethigh")();
        }
        nextbet = Number(nextbet);
        chance = Number(chance);
        previousbet = nextbet;
        lastBet.amount = nextbet;
        lastBet.Amount = nextbet;
        lastBet.chance = chance;
        lastBet.Chance = chance;
        if (!stopLog) {
            if (game === 'plinko') {
                const _0x29ba27 = '' + (havePlinkoRows ? plinkoRow + " | " : '') + plinkoRisk;
                const _0x51729e = "Betting " + Number(lastBet.amount).toFixed(decimalAmountView) + " at " + _0x29ba27 + " to win";
                log(_0x51729e);
            } else {
                const _0xc2f3f4 = game === "dice" ? bethigh ? "high" : "low" : "high";
                const _0x5a3407 = "Betting " + Number(lastBet.amount).toFixed(decimalAmountView) + " at " + Number(lastBet.chance).toFixed(decimalChanceView) + "% chance to win, " + _0xc2f3f4;
                log(_0x5a3407);
            }
        }
        if (run) {
            return sendBet();
        }
    } catch (_0x55082a) {
        stop();
        log(_0x55082a);
    }
}
function resetall() {
    document.getElementById("wdbTime").innerText = "0:0:0:0";
    if (run) {
        wdbSpeed.stop();
        wdbSpeed.start();
        wdbTimer.stop();
        wdbTimer.start();
    } else {
        wdbSpeed.stop();
        wdbTimer.stop();
    }
    resetstats();
    toggleChart("reset");
    toggleHistory('clear');
    toggleLog('clear');
}
function resetchart() {
    return toggleChart("reset");
}
function resethistory() {
    return toggleHistory("clear");
}
function resetlog() {
    return toggleLog("clear");
}
function resetstats() {
    startBalance = balance;
    wagered = 0x0;
    percentWagered = 0x0;
    profit = 0x0;
    percentProfit = 0x0;
    maxBetAmount = 0x0;
    maxLosseAmount = 0x0;
    maxwinstreak = 0x0;
    maxlosestreak = 0x0;
    minbalance = balance;
    maxbalance = balance;
    minprofit = 0x0;
    maxprofit = 0x0;
    bets = 0x0;
    wins = 0x0;
    losses = 0x0;
    currentstreak = 0x0;
    return updateStats();
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x506c22) {
    return _0x506c22;
}
function ching() {
    return wdbSound.play();
}
function sleep(_0x111741) {
    return new Promise(_0x1acdf1 => setTimeout(_0x1acdf1, _0x111741 * 0x3e8));
}
function initLua() {
    fengari.load("function start()\njs.global:start()\nend")();
    fengari.load("function stop()\njs.global:stop()\nend")();
    fengari.load("function resume()\njs.global:resume()\nend")();
    fengari.load("function checkbalance()\n js.global:checkbalance()\n end")();
    fengari.load("function resetstats()\njs.global:resetstats()\nend")();
    fengari.load("function resetseed()\njs.global:resetseed()\nend")();
    fengari.load("function resetchart()\njs.global:resetchart()\nend")();
    fengari.load("function resethistory()\njs.global:resethistory()\nend")();
    fengari.load("function resetlog()\njs.global:resetlog()\nend")();
    fengari.load("function resetall()\njs.global:resetall()\nend")();
    fengari.load("function ching()\njs.global:ching()\nend")();
    fengari.load("function log(msg)\njs.global:log(msg)\nend")();
    fengari.load("function invest(amount)\njs.global:invest(amount)\nend")();
    fengari.load("function resetpartialprofit()\njs.global:resetpartialprofit()\nend")();
    fengari.load("clock = os.clock\n  function sleep(n)\n    local t0 = clock()\n    while clock() - t0 <= n do end\n  end")();
    fengari.load("table.getn = function (t)\n    local count = 0\n    for _, __ in pairs(t) do\n      count = count + 1\n    end\n    return count\n  end")();
    const _0x2863b3 = location.hostname.replace("www.", '');
    let _0x5a11bd = _0x2863b3.indexOf('.');
    casino = _0x2863b3.slice(0x0, _0x5a11bd);
    fengari.load("casino=\"" + casino + "\"")();
}
async function updateLua() {
    fengari.load("\n    win=" + win + "\n    bets=" + bets + "\n    wins=" + wins + "\n    losses=" + losses + "\n    winstreak=" + winstreak + "\n    losestreak=" + losestreak + "\n    currentstreak=" + currentstreak + "\n    balance=" + balance + "\n    minbalance=" + minbalance + "\n    maxbalance=" + maxbalance + "\n    minprofit=" + minprofit + "\n    maxprofit=" + maxprofit + "\n    chance=" + chance + "\n    bethigh=" + bethigh + "\n    nextbet=" + nextbet + "\n    previousbet=" + previousbet + "\n    profit=" + profit + "\n    currentprofit=" + currentprofit + "\n    partialprofit=" + partialprofit + "\n    wagered=" + wagered + "\n  ")();
    fengari.load("\n    lastBet={\n      amount=" + lastBet.amount + ",\n      Amount=" + lastBet.amount + ",\n      chance= " + lastBet.chance + ",\n      Chance= " + lastBet.chance + ",\n      roll=" + lastBet.roll + ",\n      Roll=" + lastBet.roll + ",\n      profit=" + lastBet.profit + ",\n      Profit=" + lastBet.profit + ",\n      target= " + lastBet.target + ",\n      Target= " + lastBet.target + ",\n      result=" + lastBet.result + ",\n      Result=" + lastBet.result + ",\n      nonce=" + lastBet.nonce + ",\n      Nonce=" + lastBet.nonce + ",\n      id=\"" + lastBet.id + "\",\n      Id=\"" + lastBet.id + "\"\n    }\n  ")();
    fengari.load("dobet()")();
    if (fengari.load("return currency")()) {
        currency = fengari.load("return currency")();
        coin = String(currency).toUpperCase();
    }
    if (fengari.load("return scriptname")()) {
        scriptname = fengari.load("return scriptname")();
        document.getElementById("scriptName").innerText = "Script Name: " + scriptname;
    } else {
        scriptname = '';
        document.getElementById("scriptName").innerText = '';
    }
    if (fengari.load("return plinkoRisk")()) {
        plinkoRisk = fengari.load("return plinkoRisk")();
    }
    if (fengari.load("return plinkoRow")()) {
        plinkoRow = fengari.load("return plinkoRow")();
    }
    return "updateLua done";
}
function randomString(_0x521f26, _0x38d926) {
    const _0x57421f = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const _0x240b08 = 'abcdefghijklmnopqrstuvwxyz'.slice(0x0, 0x6);
    let _0x4b3d4c = '';
    let _0x2b8063 = '';
    if (!_0x38d926) {
        _0x4b3d4c = "0123456789abcdefghijklmnopqrstuvwxyz" + _0x57421f;
    }
    if (_0x38d926 === "alphabet") {
        _0x4b3d4c = 'abcdefghijklmnopqrstuvwxyz' + _0x57421f;
    }
    if (_0x38d926 === "numeric") {
        _0x4b3d4c = "0123456789";
    }
    if (_0x38d926 === "hex") {
        _0x4b3d4c = "0123456789" + _0x240b08;
    }
    for (let _0x432169 = 0x0; _0x432169 < _0x521f26; _0x432169++) {
        _0x2b8063 += _0x4b3d4c.charAt(Math.floor(Math.random() * _0x4b3d4c.length));
    }
    return _0x2b8063;
}
function setCookie(_0x5ccb4d, _0x38be4d, _0x12db17) {
    const _0x2294a7 = new Date();
    _0x2294a7.setTime(_0x2294a7.getTime() + _0x12db17 * 0x18 * 0x3c * 0x3c * 0x3e8);
    let _0x3a9d1c = "expires=" + _0x2294a7.toUTCString();
    document.cookie = _0x5ccb4d + '=' + _0x38be4d + ';' + _0x3a9d1c + ';path=/';
}
function getCookie(_0x76f442) {
    _0x76f442 = _0x76f442 + '=';
    let _0x6bf81e = decodeURIComponent(document.cookie);
    let _0x1b3c6c = _0x6bf81e.split(';');
    for (let _0x58b874 = 0x0; _0x58b874 < _0x1b3c6c.length; _0x58b874++) {
        let _0x37b6d2 = _0x1b3c6c[_0x58b874];
        while (_0x37b6d2.charAt(0x0) === " ") {
            _0x37b6d2 = _0x37b6d2.substring(0x1);
        }
        if (_0x37b6d2.indexOf(_0x76f442) === 0x0) {
            return _0x37b6d2.substring(_0x76f442.length, _0x37b6d2.length);
        }
    }
    return '';
}
function saveScript() {
    let _0x3c69e1 = null;
    if (mode === 'lua') {
        _0x3c69e1 = luaEditor.getValue();
    } else {
        _0x3c69e1 = jsEditor.getValue();
    }
    let _0xb91820 = document.createElement('a');
    _0xb91820.href = window.URL.createObjectURL(new Blob([_0x3c69e1], {
        'type': "text/plain; charset=utf-8"
    }));
    _0xb91820.download = mode === "lua" ? "DiceScript" + Date.now() + ".lua" : "DiceScript" + Date.now() + '.js';
    _0xb91820.click();
}
function getErrMsg(_0x16da82) {
    const _0x4f17ec = _0x16da82.response && _0x16da82.response.data && _0x16da82.response.data.message || _0x16da82.message || _0x16da82.toString();
    return _0x4f17ec;
}
token = null;
async function beforeWork() {
    document.styleSheets[0x1].cssRules[0x1a91].style.removeProperty('background-color');
    axios.defaults.headers = {
        'x-csrf-token': document.querySelector("meta[name=\"csrf-token\"]").content
    };
    await getNewToken();
}
async function getListCoin() {
    document.querySelectorAll(".currency-items > div").forEach(_0x191479 => {
        coins.push(_0x191479.getAttribute('data-currency'));
    });
    coins = coins.sort();
    coin = coins[0x0];
    drawSelectCoin();
    return checkbalance();
}
async function checkbalance() {
    try {
        const _0x375158 = {
            'currency': coin
        };
        const {
            data: _0x315b85
        } = await axios.post("/change-currency", _0x375158);
        balance = Number(_0x315b85.result.balance);
        fengari.load("balance=" + balance)();
        startBalance = balance;
        minbalance = balance;
        fengari.load('minbalance=' + balance)();
        maxbalance = balance;
        fengari.load("maxbalance=" + balance)();
        return updateStats();
    } catch (_0x33a6da) {
        return log(getErrMsg(_0x33a6da));
    }
}
async function resetseed() {
    try {
        const _0x304037 = {
            'authorization': "Bearer " + token
        };
        const _0x3b36f6 = {
            'clientSeed': randomString(0x10)
        };
        const {
            data: _0x7b49dc
        } = await axios.post("/api/game-options/change-seeds", _0x3b36f6, {
            'headers': _0x304037
        });
        if (!_0x7b49dc.status) {
            return log("please reset seed after 5 minutes");
        }
    } catch (_0x3e21e1) {
        stop();
        return log(getErrMsg(_0x3e21e1));
    }
}
async function sendBet() {
    try {
        chance = Math.round((chance + Number.EPSILON) * 0x64) / 0x64;
        target = bethigh ? 99.99 - chance : chance;
        const _0x330ea0 = Math.round((0x63 / chance + Number.EPSILON) * 0x64) / 0x64;
        const _0x5c62c0 = {
            'authorization': "Bearer " + token
        };
        const _0x22c6c7 = "type=%3E&condition=%3" + (bethigh ? 'E' : 'C') + "&currency=" + coin + "&auto=false&autoMore=false&actionOnWin=reset&actionOnLose=reset&amount=" + nextbet.toFixed(0x8) + "&rolls-number=0&roll=" + target.toFixed(0x2) + "&payout=" + _0x330ea0.toFixed(0x4) + "&chance=" + chance.toFixed(0x2) + '&stop-profit=0.00000000&stop-loss=0.00000000&moreOptionsSelectWin=streak&number-win=2&moreOptionsSelectLose=streak&number-lose=2&speed=50&betting=250';
        const {
            data: _0x4b90ca
        } = await axios.post("/api/game/dice", _0x22c6c7, {
            'headers': _0x5c62c0
        });
        if (!_0x4b90ca.status) {
            stop();
            return log(_0x4b90ca.message);
        } else {
            return handleResult(_0x4b90ca.result);
        }
    } catch (_0x50b0c3) {
        if (run) {
            return sendBet();
        }
    }
}
async function handleResult(_0x4f9549) {
    try {
        currentprofit = _0x4f9549.profit;
        lastBet.roll = _0x4f9549.result;
        result = _0x4f9549.result;
        lastBet.id = String(_0x4f9549.id);
        return handleStats();
    } catch (_0x181311) {
        stop();
        return log(getErrMsg(_0x181311));
    }
}
async function getNewToken() {
    try {
        const {
            data: _0x5b3f95
        } = await axios.post("/token/refresh");
        token = _0x5b3f95.token;
    } catch (_0x5e0919) {
        stop();
        return log(getErrMsg(_0x5e0919));
    }
}
const allowedUsers = ['jonidip11', 'user2', 'user3'];
const userToCheck = jonidip11; // Replace with the username you want to check

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
