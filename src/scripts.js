// code :
const FIRST_DRAWING = (outlay, userName) => {
    ROOT.innerHTML = DRAWING(outlay, userName);
};

// ROUTERING
const ROUTERING = (button, noneOne, noneTwo, noneThree, noneFour, block) => {
    button.addEventListener('click', () => {
        block.style.display = 'block';
        noneOne.style.display = 'none';
        noneTwo.style.display = 'none';
        noneThree.style.display = 'none';
        noneFour.style.display = 'none';
    });
};

// ACTIVE FUNCTIONS
const CLEAR_INPUT = (one, two) => {
    one.value = '';
    two.value = '';
}

const OUTLAY = (button, inputMoney, inputText, outlayOne, countauner, outlayMessage) => {
    button.addEventListener('click', () => {
        ID++;
        outlayArr.push(inputMoney.value);
        countauner.innerHTML += ToDo(inputText.value, inputMoney.value, ID, 'red')
        CLEAR_INPUT(inputText, inputMoney)
        outlayOne.innerHTML = date.outlay();
        outlayMessage.style.display = 'block';
        setTimeout(() => {
            outlayMessage.style.display = 'none';
        }, 3000);
    });
};

const REVENUE = (buttonRevenue, inputMoneyRevenue, inputTextRevenue, outlayOneRevenue, countaunerRevenue, revenueMessage) => {
    buttonRevenue.addEventListener('click', () => {
        REVENUE_ID--;
        revenueArr.push(inputMoneyRevenue.value);
        countaunerRevenue.innerHTML += ToDo(inputTextRevenue.value, inputMoneyRevenue.value, REVENUE_ID, 'green')
        CLEAR_INPUT(inputTextRevenue, inputMoneyRevenue)
        outlayOneRevenue.innerHTML = date.revenue();
        revenueMessage.style.display = 'block';
        setTimeout(() => {
            revenueMessage.style.display = 'none';
        }, 3000);
    });
};

const CHECK_DELETE_OUTLAYS = (ErorrDelete, countauner, spanOutlayOne, ErorrOutlay) => {
    ErorrDelete.addEventListener('click', () => {
        while (outlayArr.length > 0) {
            outlayArr.pop();
            spanOutlayOne.innerHTML = date.outlay();
        }
        countauner.innerHTML = '';
        ErorrOutlay.style.display = 'none';
    });
};

const CHECK_CROSS_OUTLAYS = (ErorrCross, ErorrOutlay) => {
    ErorrCross.addEventListener('click', () => {
        ErorrOutlay.style.display = 'none';
    });
};

const DELETE = (deleteButton, ErorrOutlay) => {
    deleteButton.addEventListener('click', () => {
        ErorrOutlay.style.display = 'block';
    });
};

const DELETE_REVENUE = (deleteButton, ErorrRevenue) => {
    deleteButton.addEventListener('click', () => {
        ErorrRevenue.style.display = 'block';
    });
};

const CHECK_CROSS_REVENUE = (ErorrCrossRevenue, ErorrRevenue) => {
    ErorrCrossRevenue.addEventListener('click', () => {
        ErorrRevenue.style.display = 'none';
    });
};

const CHECK_DELETE_REVENUE = (ErorrDeleteRevenue, countauner, spanOutlayOne, ErorrRevenue) => {
    ErorrDeleteRevenue.addEventListener('click', () => {
        while (revenueArr.length > 0) {
            revenueArr.pop();
            spanOutlayOne.innerHTML = date.revenue();
        }
        countauner.innerHTML = '';
        ErorrRevenue.style.display = 'none';
    }); 
};

const CLICK = (button, noneOne, noneTwo, noneThree, noneFour, block) => {
    return ROUTERING(button, noneOne, noneTwo, noneThree, noneFour, block);
};

const CHANGE_NAME = (changeNameInput, changeNameButton, userNameId) => {
    changeNameButton.addEventListener('click', () => {
        if (changeNameInput.value !== '') {
            date.userName = changeNameInput.value;
            userNameId.innerHTML = date.name();
            changeNameInput.value = '';
        }
    });
};

const CHECK = (button, noneOne, noneTwo, noneThree, noneFour, block) => {
    return ROUTERING(button, noneOne, noneTwo, noneThree, noneFour, block)
};

const LANGUAGE = (arrKey, arrValue, button) => {
    button.addEventListener('click', () => {
        for (let i = 0; i < arrKey.length; i++) {
            document.getElementById(arrKey[i]).innerHTML = arrValue[i];
        };
    });
};