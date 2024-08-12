//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hackFor = require("./hack_3_for");
let hackWhile = require("./hack_3_while");
//MOCK
let arrMock = require("../mocks/mock_3");
//
let HACK_3_FOR = fnMsg("hack-3 (for)", 1, "[5,4,3,2,1]");
let HACK_3_WHILE = fnMsg("hack-3 (while)", 1, "[5,4,3,2,1]");
let successMsg = fnSuccess(1);
let rejectMsg = fnReject();


//MACTHER
expect.extend({
    toBeEqualHackFor(received) {
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
    },
    toBeEqualHackWhile(received) {
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
    },
});


//CHECKLIST
describe("HACKS-3", () => {
    test(HACK_3_FOR, () => {
        expect(hackFor).toBeEqualHackFor();
    });

    test(HACK_3_WHILE, () => {
        expect(hackWhile).toBeEqualHackWhile();
    });
});