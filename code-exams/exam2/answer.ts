/**
 * [ 퀴즈 ]
 * 여기에 코드를 작성해주세요
 * 아래 정답 체크 영역의 오류가 사라져야 합니다!
 */

type User = {
  name: string;
  email: string;
  [key: string]: string;
};

/**
 * [ 정답 체크 ]
 * 여기부터는 정답을 체크하기 위한 용도로 직접 수정하실 필요 없습니다.
 * 아래의 코드에 오류가 사라지면 정답, 오류가 있으면 오답입니다!
 */
const user: User = {
  name: "John",
  email: "john@example.com",
  extra1: "extra1",
  extra2: "extra2",
  extra3: "extra3",
  extra4: "extra4",
  extra5: "extra5",
  extra6: "extra6",
  // 계속 추가 될 거에요
};
