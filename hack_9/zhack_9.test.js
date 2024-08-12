//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hack = require("./hack_9");
//MOCK
let mock = require("../mocks/mock_9");
//
let HACK_9 = fnMsg("hack-9", 1, '2');
let successMsg = fnSuccess(1);
let rejectMsg = fnReject();


//MACTHER
expect.extend({
    toBeEqualHack(received) {
        let isValid = (typeof received === "number" && received == mock) ? true : false;
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
describe("HACK-9", () => {
    test(HACK_9, () => {
        expect(hack).toBeEqualHack();
    });
});