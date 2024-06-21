"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isodd = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
console.log('hi there');
function isodd(num) {
    if (num % 2 == 0) {
        return false;
    }
    return true;
}
exports.isodd = isodd;
