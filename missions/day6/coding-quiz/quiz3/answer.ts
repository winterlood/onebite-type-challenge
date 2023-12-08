/*
[ 문제 소개 ]
다음 요구사항을 만족하는 코드를 작성하세요
- CompanyMember 타입을 Boss와 Employee의 서로소 유니온 타입으로 정의하세요
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Boss = {
  type: "Boss";
  car: string;
};

type Employee = {
  type: "Employee";
  salary: number;
};

type CompanyMember = Employee | Boss;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
function test(companyMember: CompanyMember) {
  if (companyMember.type === "Boss") {
    console.log("사장님 또 차 바꿨다 : ", companyMember.car);
  } else if (companyMember.type === "Employee") {
    console.log("아직도 월급은 : ", companyMember.salary);
  }
}
