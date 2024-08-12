//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hackFor = require("./hack_1_for");
let hackWhile = require("./hack_1_while");
//MOCK
let arrMock = require("../mocks/mock_1");
//
let HACK_1_FOR = fnMsg("hack-1 (for)", 1, "[0, 1, 2, 3, 4, 5]");
let HACK_1_WHILE = fnMsg("hack-1 (while)", 1, "[0, 1, 2, 3, 4, 5]");
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
describe("HACKS-1", () => {
    test(HACK_1_FOR, () => {
        expect(hackFor).toBeEqualHackFor();
    });

    test(HACK_1_WHILE, () => {
        expect(hackWhile).toBeEqualHackWhile();
    });
});