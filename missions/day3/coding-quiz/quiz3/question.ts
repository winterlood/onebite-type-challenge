/*
[ 문제 소개 ]
다음 요구사항을 만족하는 User 타입을 구현하세요

- Any 타입은 사용할 수 없습니다.
- 객체 타입이어야 합니다.
- String 타입의 name 프로퍼티가 있어야 합니다.
- String 타입의 email 프로퍼티가 있어야 합니다.
- 그 외의 String 타입의 동적 프로퍼티들도 추가할 수 있어야 합니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type User = never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const user: User = {
  name: "John",
  email: "john@example.com",
  extra1: "test",
  extra2: "good",
};
