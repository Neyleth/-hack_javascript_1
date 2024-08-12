//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hack = require("./hack_7");
//MOCK
let arrMock = require("../mocks/mock_7");
//
let HACK_7 = fnMsg("hack-7", 1, '["Foo", "Bar", "Baz", "Qux", "Echo"]');
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
describe("HACK-7", () => {
    test(HACK_7, () => {
        expect(hack).toBeEqualHack();
    });
});