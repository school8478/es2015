/* 구조분해 할당과 기본 파라미터 조합 */
function addContact({name, phone, email="이메일없음", age=0}) {
    console.log("이름 : " + name);
    console.log("연락처 : " + phone);
    console.log("이메일 : " + email);
    console.log("나이 : " + age);
};

addContact({
    name : "이몽룡",
    phone : "010-3434-8989"
});