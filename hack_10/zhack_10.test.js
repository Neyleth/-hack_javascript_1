//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hack = require("./hack_10");
//MOCK
let arrMock = require("../mocks/mock_10");
//
let HACK_10 = fnMsg("hack-10", 1, '["bar","qux","octo","foobar"]');
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
describe("HACK-10", () => {
    test(HACK_10, () => {
        expect(hack).toBeEqualHack();
    });
});