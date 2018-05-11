"use strict";

/* 구조분해 할당과 기본 파라미터 조합 */
function addContact(_ref) {
    var name = _ref.name,
        phone = _ref.phone,
        _ref$email = _ref.email,
        email = _ref$email === undefined ? "이메일없음" : _ref$email,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 0 : _ref$age;

    console.log("이름 : " + name);
    console.log("연락처 : " + phone);
    console.log("이메일 : " + email);
    console.log("나이 : " + age);
};

addContact({
    name: "이몽룡",
    phone: "010-3434-8989"
});