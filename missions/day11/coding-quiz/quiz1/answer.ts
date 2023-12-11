/*
[ 문제 소개 ]
다음 요구사항을 만족하는 3개의 인터페이스를 정의하세요
1. Content Interface
  - name(String 타입), info(T 타입) 프로퍼티를 갖습니다.
2. Video Interface
  - playTime(Number 타입) 프로퍼티를 갖습니다. 
3. Book Interface
  - pageNumber(Number 타입) 프로퍼티를 갖습니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */

interface Video {
  playTime: number;
}

interface Book {
  pageNumber: number;
}

interface Content<T> {
  name: string;
  info: T;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
function watchVideo(content: Content<Video>) {
  console.log(`${content.info.playTime}시간의 강의를 시청함`);
}

function readBook(content: Content<Book>) {
  console.log(`${content.info.pageNumber}권의 책을 읽음`);
}

watchVideo({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  info: {
    playTime: 10.5,
  },
});

readBook({
  name: "한 입 크기로 잘라먹는 리액트",
  info: {
    pageNumber: 700,
  },
});
