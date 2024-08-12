//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hackFor = require("./hack_5_for");
let hackWhile = require("./hack_5_while");
let hackMap = require("./hack_5_map");
//MOCK
let arrMock = require("../mocks/mock_5");
//
let HACK_5_FOR = fnMsg("hack-5 (for)", 1, "[7,5,3,1]");
let HACK_5_WHILE = fnMsg("hack-5 (while)", 1, "[7,5,3,1]");
let HACK_5_MAP = fnMsg("hack-5 (map)", 1, "[7,5,3,1]");
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
    toBeEqualHackMap(received) {
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
describe("HACKS-5", () => {
    test(HACK_5_FOR, () => {
        expect(hackFor).toBeEqualHackFor();
    });

    test(HACK_5_WHILE, () => {
        expect(hackWhile).toBeEqualHackWhile();
    });

    test(HACK_5_MAP, () => {
        expect(hackMap).toBeEqualHackMap();
    });
});