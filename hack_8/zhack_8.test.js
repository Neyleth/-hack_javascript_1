//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hack = require("./hack_8");
//MOCK
let arrMock = require("../mocks/mock_8");
//
let HACK_8 = fnMsg("hack-8", 1, '["b@r", "b@z", "QUX"]');
let successMsg = fnSuccess(1);
let rejectMsg = fnReject();


//MACTHER
expect.extend({
    toBeEqualHack(received) {
        let isValid = received.join("") == arrMock.join("") ? true : false;
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
describe("HACK-8", () => {
    test(HACK_8, () => {
        expect(hack).toBeEqualHack();
    });
});