"use strict";

/* let과 const 변수의 중복선언이 불가능함 */
var msg1 = "GLOBAL";
function outer(a) {
    var msg1 = "OUTER";
    console.log(msg1);
    if (true) {
        var msg = "BLOCK";
        console.log(msg1);
    }
}

var msg2 = "GLOBAL";
function outer(a) {
    var msg2 = "OUTER";
    console.log(msg2);
    if (true) {
        var _msg = "BLOCK";
        console.log(_msg);
    }
}