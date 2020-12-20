// html :

const App = (outlay, userName) => {
    return (`
        ${Header(userName)}
        <div class="Menu__Context">
            ${Menu()}
            ${Context(outlay)}
        </div>
    `);
};

const Header = (userName) => {
    return (` 
        <div class="Header">
            <div class="Header__logo">
                <img class="Header__logo__img" src="https://www.flaticon.com/svg/static/icons/svg/59/59660.svg"/>
            </div>
            <div class="Header__name">
                <span id="userNameId">${userName}</span>
            </div>
        </div>
    `);
};

const Context = (outlay) => {
    return (`
        <div class="Context">
            ${Home(outlay)}
            ${Outlay()}
            ${History()}
            ${Revenue()}
            ${Settings()}
        </div>
    `);
};

const Home = (outlay) => {
    return (` 
        <div class="Home" id="homePage">
            <div>
                <div class="Home__outlay">
                    <span id="ln__Home__outlay">Family's outlay:</span> <span id="spanOutlayOne">${outlay}</span>
                    <hr/>
                </div>
                <div class="Home__outlay__two">
                    <span id="ln__Home__revenue">Family's revenue:</span> <span id="spanOutlayTwo">0p</span>
                    <hr/>
                </div>
            </div>
            <div class="Home__div" id="click">
                <img class="Home__div__img" src="https://www.flaticon.com/svg/static/icons/svg/748/748113.svg"/>
            </div>
        </div>
    `);
};

const Outlay = () => {
    return (` 
        <div class="Outlay" id="outlayPage">
            <div class="Outlay__message" id="outlayMessage">
                <b><span id="messageOutlayText">Attention!</span></b>
                <span id="messageOutlay">You Create the outlay</span>
            </div>
            <div class="Outlay__inputs">
                <span id="ln__Outlay__create">Create outlay</span>
                <input placeholder="Text" type="text" class="Outlay__inputOne" id="inputPushText"/>
                <input placeholder="Money" type="text" class="Outlay__inputTwo" id="inputPushMoney"/>
                <button id="button" class="Outlay__button"><span id="ln__Outlay__add">Create</span></button>
                <button id="checkOutlay" class="Outlay__button__check"><span id="ln__Outlay__check">Check</span></button>
            </div>
        </div>
    `);
};

const Revenue = () => {
    return (` 
        <div class="Revenue" id="revenuePage">
            <div class="Revenue__message" id="revenueMessage">
                <b><span id="messageRevenueText">Attention!</span></b>
                <span id="messageRevenue">You Create the revenue</span>
            </div>
            <div class="Revenue__inputs">
                <span id="ln__Revenue">Create revenue</span>
                <input placeholder="Text" type="text" class="Revenue__inputOne" id="inputPushTextRevenue"/>
                <input placeholder="Money" type="text" class="Revenue__inputTwo" id="inputPushMoneyRevenue"/>
                <button id="buttonRevenue" class="Revenue__button"><span id="ln__Revenue__add">Create</span></button>
                <button id="buttonRevenueCheck" class="Revenue__button__check"><span id="ln__Revenue__check">Check</span></button>
            </div>
        </div>
    `);
};

const History = () => {
    return (` 
        <div class="History" id="historyPage">
            <div class="Revenue__left">
                <div class="History__name" >
                    <span id="ln__History__registration">Outlay</span>
                </div>
                <div class="History__box" id="countauner"></div>
            </div>
            <div class="Revenue__right">
                <div class="History__name__revenue">
                    <span id="ln__History__registration__revenue">Revenue</span>
                </div>
                <div class="History__box__revenue" id="countaunerRevenue"></div>
            </div>
        </div>
    `);
};

const ToDo = (text, money, id, color) => {
    return (` 
        <div id='${id}' class="box">
            <div class="box__text">
                ${text}
            </div>
            <div class="box__money ${color}">
                ${money}
            </div>
        </div>
    `)
};

const Settings = () => {
    return (` 
        <div class="Settings" id="settingPage">
            <div class="Settings__name">
                <b><span class="Settings__userName" id="Settings__changeName">User name</span></b>
                <br/>
                <input type="text" class="Settings__change__name" id="changeNameInput"/>
                <button class="Settings__button__name" id="changeNameButton">
                    <span id="Settings__buttonName">Rename</span>
                </button>
            </div>
            <span class="Normal__zone" id="normal__zone">Normal Zone</span>
            <div class="Normal">
                ${Normal(
                    'English', 
                    'You can change your language, be careful.', 
                    'englishButton', 
                    'Settings__language__text', 
                    'div__english',
                    'languageEnglish'
                )}
                ${Normal(
                    'Русский', 
                    'You can change your language, be careful.', 
                    'russianButton', 
                    'Settings__language__text__two', 
                    'div__english__two',
                    'languageRussian'
                )}
            </div>

            <div class="margin"></div>

            <span class="Danger__zone" id="danger__zone">Danger Zone</span>
            <div class="Danger">
                ${Danger(
                    'Delete outlays', 
                    'You can delete your outlays, be careful.', 
                    'deleteButton', 
                    'Settings__text', 
                    'div',
                    'span__delete__outlay',
                    'span__text__outlay'
                )}
                ${Danger(
                    'Delete revenues', 
                    'You can delete your revenues, be careful.', 
                    'deleteLastButton',
                    'Settings__text__two', 
                    'div__two',
                    'span__delete__revenue',
                    'span__text__revenue'
                )}
            </div>
            <div class="Settings__Error" id="ErorrOutlay">
                <div class="Error__textDeleteOutlay">
                    <span id="ErrorDeleteOutlays">Do you want to delete outlays</span>
                </div>
                <div class="Erorr__stopOutlay" id="ErorrCross">
                    &times;
                </div>
                <button class="Error__button" id="ErorrDelete">
                    <span id="ErrorDeleteDelete">Delete</span>
                </button>
            </div>
            
            <div class="Settings__ErrorRevenue" id="ErorrRevenue">
                <div class="Error__textDeleteRevenue">
                    <span id="ErrorDeleteRevenue">Do you want to delete revenues</span>
                </div>
                <div class="Erorr__stopRevenue" id="ErorrCrossRevenue">
                    &times;
                </div>
                <button class="Error__buttonRevenue" id="ErorrDeleteRevenue">
                    <span id="ErrorDeleteDelete">Delete</span>
                </button>
            </div>
        </div>
    `);
};

const Danger = (nameButton, text, deleteButton, Settings__text, div, span, spanText) => {
    return (`
        <div class=${div}>
            <div class=${Settings__text}>
                <span id=${spanText}>${text}</span>
            </div>
            <div>
                <button class='Settings__delete' id=${deleteButton}><span id=${span}>${nameButton}</span></button>
            </div>
        </div>
    `);
};

const Normal = (nameButton, text, deleteButton, Settings__text, div, spanText) => {
    return (`
        <div class=${div}>
            <div class=${Settings__text}>
                <span id=${spanText}>${text}</span>
            </div>
            <div>
                <button class='Settings__english' id=${deleteButton}>${nameButton}</button>
            </div>
        </div>
    `);
};

const Menu = () => {
    return (`
        <div class="Menu">
            <div class="Menu__home" id="homeClick">
                <b><span id="home">Home</span></b>
            </div>
            <div class="Menu__history" id="historyClick">
                <b><span id="history">History</span></b>
            </div>
            <div class="Menu__outlay" id="outlayClick">
                <b><span id="outlay">Outlay</span></b>
            </div>
            <div class="Menu__revenue" id="revenueClick">
                <b><span id="revenue">Revenue</span></b>
            </div>
            <div class="Menu__settings" id="settingsClick">
                <b><span id="setting">Settings</span></b>
            </div>
        </div>
    `)
};
