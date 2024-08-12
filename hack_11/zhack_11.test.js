//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hack = require("./hack_11");
//MOCK
let arrMock = require("../mocks/mock_11");
//
let HACK_11 = fnMsg("hack-11", 1, '["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]');
let successMsg = fnSuccess(1);
let rejectMsg = fnReject();


//MACTHER
expect.extend({
    toBeEqualHack(received) {
        let _toString = Object.prototype.toString;
        let isValid = (_toString.call(received) == "[object Array]" && received.join("") == arrMock.join(""))? true : false;
        if (isValid) {
            return {
                message: () => successMsg,
                pass: true
            }
        } else {
            return {
                message: () => rejectMsg,
                pass: false
            }
        }
    }
});


//CHECKLIST
describe("HACK-11", () => {
    test(HACK_11, () => {
        expect(hack).toBeEqualHack();
    });
});