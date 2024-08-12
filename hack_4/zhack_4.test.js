//MESSAGES
let {
    fnMsg,
    fnSuccess,
    fnReject
} = require("../utils/message");
//CHALLENGE
let hackFor = require("./hack_4_for");
let hackWhile = require("./hack_4_while");
let hackMap = require("./hack_4_map");
//MOCK
let arrMock = require("../mocks/mock_4");
//
let HACK_4_FOR = fnMsg("hack-4 (for)", 1, "[1,3,5,7]");
let HACK_4_WHILE = fnMsg("hack-4 (while)", 1, "[1,3,5,7]");
let HACK_4_MAP = fnMsg("hack-4 (map)", 1, "[1,3,5,7]");
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
describe("HACKS-4", () => {
    test(HACK_4_FOR, () => {
        expect(hackFor).toBeEqualHackFor();
    });

    test(HACK_4_WHILE, () => {
        expect(hackWhile).toBeEqualHackWhile();
    });

    test(HACK_4_MAP, () => {
        expect(hackMap).toBeEqualHackMap();
    });
});