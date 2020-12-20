// first part :
ROUTERING(homeButton, outlayPage, settingPage, historyPage, revenuePage, homePage);
ROUTERING(outlayButton, settingPage, homePage, historyPage, revenuePage, outlayPage);
ROUTERING(settingButton, homePage, outlayPage, historyPage, revenuePage, settingPage);
ROUTERING(historyButton, outlayPage, settingPage, homePage, revenuePage, historyPage);
ROUTERING(removeButton, outlayPage, settingPage, homePage, historyPage, revenuePage);

// second part :
OUTLAY(button, inputMoney, inputText, outlayOne, countauner, outlayMessage);
DELETE(deleteButton, ErorrOutlay);
CHECK_DELETE_OUTLAYS(ErorrDelete, countauner, outlayOne, ErorrOutlay);
CHECK_CROSS_OUTLAYS(ErorrCross, ErorrOutlay);

//third part :
REVENUE(buttonRevenue, inputMoneyRevenue, inputTextRevenue, outlayOneRevenue, countaunerRevenue, revenueMessage);
DELETE_REVENUE(deleteButtonRevenue, ErorrRevenue);
CHECK_CROSS_REVENUE(ErorrCrossRevenue, ErorrRevenue);
CHECK_DELETE_REVENUE(ErorrDeleteRevenue, countaunerRevenue, outlayOneRevenue, ErorrRevenue);

// active elements :
CLICK(clicker, settingPage, homePage, historyPage, revenuePage, outlayPage)
CHANGE_NAME(changeNameInput, changeNameButton, userNameId);
CHECK(checkOutlay, outlayPage, settingPage, homePage, revenuePage, historyPage);
CHECK(buttonRevenueCheck, outlayPage, settingPage, homePage, revenuePage, historyPage);