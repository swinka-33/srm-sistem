// variables :
const ROOT = document.getElementById('root');
const outlayArr = [];
const revenueArr = [];
let ID = 1;
let REVENUE_ID = -1;
const DRAWING = App;
const date = {
    userName: 'user',
    outlay() {
        let outlay = 0;
        for(let i = 0; i < outlayArr.length; i++) {
            outlayArr[i] = parseInt(outlayArr[i]);
            outlay += outlayArr[i];
        };
        return outlay + 'р';
    },
    revenue() {
        let revenue = 0;
        for(let i = 0; i < revenueArr.length; i++) {
            revenueArr[i] = parseInt(revenueArr[i]);
            revenue += revenueArr[i];
        };
        return revenue + 'р';
    },
    name() {
        return this.userName;
    }
};