//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hackFor = require("./hack_2_for");
let hackWhile = require("./hack_2_while");
//MOCK
let arrMock = require("../mocks/mock_2");
//
let HACK_2_FOR = fnMsg("hack-2 (for)", 1, "[1, 2, 3, 4, 5]");
let HACK_2_WHILE = fnMsg("hack-2 (while)", 1, "[1, 2, 3, 4, 5]");
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
describe("HACKS-2", () => {
    test(HACK_2_FOR, () => {
        expect(hackFor).toBeEqualHackFor();
    });

    test(HACK_2_WHILE, () => {
        expect(hackWhile).toBeEqualHackWhile();
    });
});