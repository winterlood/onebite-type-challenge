/*
[ 문제 소개 ]
다음 요구사항을 만족하도록 사용자 정의 타입 가드를 완성하세요
- isGuest 함수가 true를 반환하면 매개변수로 전달된 user는 Guest 타입임이 보장됩니다.
- isMember 함수가 true를 반환하면 매개변수로 전달된 user는 Member 타입임이 보장됩니다.
*/

/* [Quiz] 사용자 정의 타입가드를 완성하세요(타입 수정 X) */
type Guest = {
  visitCount: number;
};

type Member = {
  id: string;
};

type User = Guest | Member;

function isGuest(user: User): user is Guest {
  return (user as Guest).visitCount !== undefined;
}

function isMember(user: User): user is Member {
  return (user as Member).id !== undefined;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */

function inviteUser(user: User) {
  if (isGuest(user)) {
    console.log(`${user.visitCount}번째 방문입니다`);
  } else if (isMember(user)) {
    console.log(`${user.id}님 안녕하세요!`);
  }
}
