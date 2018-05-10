/* let과 const 변수의 중복선언이 불가능함 */
let msg1 = "GLOBAL";
function outer(a) {
    let msg1 = "OUTER";
    console.log(msg1);
    if (true) {
        let msg ="BLOCK";
        console.log(msg1);
    }
}

const msg2 = "GLOBAL";
function outer(a) {
    const msg2 = "OUTER";
    console.log(msg2);
    if (true) {
        const msg2 ="BLOCK";
        console.log(msg2);
    }
}