//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hackFor = require("./hack_6_for");
let hackWhile = require("./hack_6_while");
//MOCK
let arrMock = require("../mocks/mock_6");
//
let HACK_6_FOR = fnMsg("hack-6 (for)", 1, '["f","o","o","z","i","m","a","n"]');
let HACK_6_WHILE = fnMsg("hack-6 (while)", 1, '["f","o","o","z","i","m","a","n"]');
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
    }
});


//CHECKLIST
describe("HACKS-6", () => {
    test(HACK_6_FOR, () => {
        expect(hackFor).toBeEqualHackFor();
    });

    test(HACK_6_WHILE, () => {
        expect(hackWhile).toBeEqualHackWhile();
    });
});