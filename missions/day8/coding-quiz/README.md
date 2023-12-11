### Quiz 1.

---

다음 요구사항을 만족하는 구현 시그니쳐를 완성하세요(매개변수 타입만 정의하면 됩니다)

- 이미 작성되어 있는 3개의 오버로드 시그니쳐를 모두 만족해야 합니다.
- a, b, c의 값을 모두 더한 값을 반환합니다.
- 만약 매개변수의 값이 undefined일 경우 모두 0으로 취급합니다.
  - a가 없을 경우 : 0
  - b가 없을 경우 : 0
  - c가 없을 경우 : 0

```typescript
function add(): number;
function add(a: number): number;
function add(a: number, b: number, c: number): number;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAYCBrUgO0OAftYBNNgCzOA+nVEAiY4EZB2oA5BvAApAJ53JAAz2AMIaiABhcCh45SiBUCcAa47UAuXVECULV0wBKMAFoogF3HAH91RAiePDAGC2AW0aiAI8cYBmZNqiAJGOAIT2AOh2AOy3s3PxQgBVdgAotVNSALquAPqNQgJarJgB0llAAhgA0UABGRQDG-oBINRTxUIAqzYA6q1DVUIAYPYAaa5mYOVaUgL6jULKKVdZQAK4AdgAmAKYAZgCWEzNTgD7jUIC9NYANY7EJAAyAPOMhUIAXs4CQdV05UFBWeYAANVCAY6MU21AAXFB7YNdWxQ-Pmx2Hy+PygZX+LyBnzAIGAYDAc0mZQALgsAPYTfJTKaSUwfCZjAC2xRmACcANwIpGojFYnF5fFEkmkvFQAnEsmUxETFHozF5bGSBlsplkorFRkc0nlSXM1ns5mUsCgKAQACKYwWAC80ExWJxeAIROI8FBYVSeTT+YLCiVyqYoABvb5QUkzZFjUmYoVQAD8vs+DoA1FBJMU-QG9sHQ2UI4HKQBfMBAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAYCBrUgO0OAftYBNNgCzOA+nVEAiY4EZB2oA5BvGAC0UQC7jgD+6ogRPHhgDBbALaNRAEeOMAzMkAa41EAkY4BCewDodgHZb23flEAVXYAUWqtUAuq4B9RqIEtVrpgB00lAAhgA0UABGYQDGRoBINRROUIAqzYA6q1DxUIAYPYAaaz7+gZSAvqNQgCedyIADPYAYQ3GyUACuAHYAJgCmAGYAlg0tTYA+41CAvTWADWMOzgAMgDzj5lCAF7OAkHV5AVBQMkGAADVQgGOjFMNQAFxQY2DLMuEb24MjB0cnUFHnO1eHYCDAYGBtjVEALh0A9g1gk0mgAKACUBwadQAtuEWgAnADcHy+vwBQNBQUhMLh8IhUChsIRyM+DR+-0BQWBIKxBJxCLC4WxRPh0WZuPxhNxyLAoCgEAAinUOgAvNBMVicXgCETiPBQV4osloynUoIAfnZDIimrpLOiuq5CLBUAA3scoPCWt86vDATSoOr1YcTQBqKAg8KO51jN0eqLel3IgC+YCAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

다음 요구사항을 만족하도록 사용자 정의 타입 가드를 완성하세요

- isGuest 함수가 true를 반환하면 매개변수로 전달된 user는 Guest 타입임이 보장됩니다.
- isMember 함수가 true를 반환하면 매개변수로 전달된 user는 Member 타입임이 보장됩니다.

```typescript
type Guest = {
  visitCount: number;
};

type Member = {
  id: string;
};

type User = Guest | Member;

function isGuest(user: User) {}

function isMember(user: User) {}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodURglWOAJ41IKgTgGuNSADC4FDxqIAAawDstgH06ogETHAjIO1AHIN4wAWigBLAM4BxAK4BTTQBcogC1XAGEMioRgE4GpgDB7AGmu1ALl1RAJ53JAAz3nAOh1QgCATgDdNgDgtULqa+jaAKU1QeoYmQoAh44Au41CALz2ApeOAlC2AE02YAHSqGpoAsvoAtgBG0WaW1nb6ji7uXr4BIeGR0XEVNXUp6dn5RWAgwGBgoFAQAIq66gBeaCwc3HxC4lJyingAFEJQ5lxQABoAlFATYEYAngAO+vEGxlAAvFAA3mBQUABuWnURgAwgB7XQAOyMAC4oJDdAMbABuMAAX1Rt0ez36tRsH2+vw0ABM4cYbOpIQBzVEYqb3J5QACqUXxnwSbwAPlBcdFMQAzKEAYyM6jBkNKHKM+x6NjhLOiVy+aKmgshIrFEq0vJsMtZ8tZSpV0xAswAKolVoAb0cADHWAAN7AAyLcS4gFemiiAFpnADYLtBtUEAIOOAHVWoKx6AETrRAAOTUEAUqOAVqGCtdJmA1RrxRpIYCjPoFbrZQbFYS-up+VB9lopXrFUqiX8heLNGCADb6QqNsFU-YAAwAJF9ZYVAZpgeCoUY0YAInsAH5NQQCUPTBBAVOxdUX80VB9I2ohoS2XylU8ZWbBdq39a-Wmy22x2e33WYV1MS0YANpqggAlRwCqjXsAIRLldQFUqkAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodURglWOAJ41IKgTgGuNSADC4FDxqIAAawDstgH06ogETHAjIO1AHIN4wAWigBLAM4BxAK4BTTQBcogC1XAGEMioRgE4GpgDB7AGmu1ALl1RAJ53JAAz3nAOh1QgCATgDdNgDgtULqa+jaAKU1QeoYmQoAh44Au41CALz2ApeOAlC2AE02YAHSqGpoAsvoAtgBG0WaW1nb6ji7uXr4BIeGR0XEVNXUp6dn5RWAgwGBgoFAQAIq66gBeaCwc3HxC4lJyingAFEJQ5lxQABoAlFATYEYAngAO+vEGxlAAvFAA3mBQUABuWnURgAwgB7XQAOyMAC4oJDdAMbABuMAAX1Rt0ez36tRsH2+vw0ABM4cYbOpIQBzVEYqb3J5QACqUXxnwSbwAPlBcdFMQAzKEAYyM6jBkNKHKM+x6NjhLOiFzhstKL0ShL+Nn0Rl0NglMtZUAAhpo1cYLoVAZpgeCoSYAITvT5Q4n6fmU-TE2lTQWQkViiVaXk2A3ReWspURQ1aHlVPEaqBanV6qCh-Em2NIi3qYlQR3OyGu92Qz3e6YgWYAFUSq0AN6OABjrAAG9gAZFuJcQCvTRRAC0zgBsF2j1qCAEHHADqrUFY9ACJ1ogAHJqCAKVHAK1DBWukzAvv94o0kMBRn0CpDsvDioT6n5qa0UrTFyuPz+fyF4s0YIANvpCs+wVT9gADAAkX1lS0gVBCFoTRQAInsAD8moEASh6YEEApvwuVE-jRKB9GfKINDPfYgzjaIrxvIl70fF83w-L8-wA1lChzNFAA2mqBAAlRwBVRr2e0kJQqA0XRMAgA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 3.

---

다음 조건을 만족하는 3가지 인터페이스를 추가로 구현하세요

- 모든 인터페이스는 Person 인터페이스를 확장합니다(extends).
  1. Student 인터페이스는 grade 프로퍼티를 갖습니다.
  - grade 프로퍼티에는 "A", "B", "C"만 저장할 수 있습니다.
  2. Developer 인터페이스는 skills 프로퍼티를 갖습니다.
  - skills 프로퍼티에는 문자열 배열을 저장할 수 있습니다.
  3. Boss 인터페이스는 company 프로퍼티를 갖습니다.
  - company 프로퍼티에는 문자열을 저장할 수 있습니다.

```typescript
interface Person {
  name: string;
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAzIAA1gA5NSAe44AyLgGcuAu44CVDgPp1RAKbMNAOh1RANrWAQNcqAOQcApY2AC0UQBVdgA5a2XPrQAKAUwBOAZwD2AOy08BUQKprgUvHAlquAJpswAKfQA8ALvvMATYwBKADowKCgARhCoAGVvAFd-P28rHSgAc0MAQ2SoQBBV0UAfZcAHpcFANBrAVqHXGPCIqBUs3P0C4pLABdHaACIAQS6AGigugCEBoYBhLtIoQAAJ+0ADVahADCGoQAjx6swwiIAmGIARfQA3fQAbUwAHIzTeWmMAawBLE5PjVtKKja36lXunl7eOrQYIAE8cAL6NQQAMPaCSHNFit1jU6nQYsNTMZXhxrLQAMamAC252y5gAngCPoj6g0oLiCUTSYVSp1YGCYQtlmtPmAQMAwGBQFAIABFBIPABeaCggBqBwCVY8CoIBUCcAGuNQQADC4BQ8YYgB2WwSAETHAIyDcnkbnVy3lUAAGkEoNywA9zL5DAAzbLYloGEwWKAAbzq5myeP0AC4oMZvIY7RkANxgAC+vP5EAAKvpQxLADejgAY6wABvexaPLAK9NJEALTOAGwXKBmoIAQccAOqtQaWAEebxEt5ZQWIApUY21p5DwJpkMqS9UAAogBHBLZE6DIeeS7Y7yDABypm8PRJUBjUEdhnxQwAAt5iZclNiABYTk5+DIp4AJbxPYxdaNgXHmUMhxLJe3B+JJFJQAC83q+v6QZDNw8qABprAx1E0yTBr00ExtGL5vskxxnJchjBgc6EXFcgE+hEfoBvB4FQf0dS-M8xjBhAXQAEr6C63hjF0iaHvosTYuG5wsWgFFIc+FhvgARmiNFQKi6IAUBREgaRkHQRENKEiS8HVmqUC8IAOUuACitgAkY4hT4HpcUDJqG4zZMYKYyRAdTTrO3gADyjuOJxOT+n7eHRsH6F0-FDH0UAAD5DKMIUTF0AB8UUUREDn6HOLljhOTk4aceGGHRVEvP5gyhuG5gZBAaAxXFw4zolzmualUnGHRKl0nl76FRkMVgGg0ZAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAzIAA1gA5NSAe44AyLgGcuAu44CVDgPp1RAKbMNAOh1RANrWAQNcqAOQcApY2AC0UQBVdgA5a2XPrQAKAUwBOAZwD2AOy08BUQKprgUvHAlquAJpswAKfQA8ALvvMATYwBKADowKCgARhCoAGVvAFd-P28rHSgAc0MAQ2SoQBBV0UAfZcAHpcFANBrAVqHXGPCIqBUs3P0C4pLABdHaACIAQS6AGigugCEBoYBhLtIoQAAJ+0ADVahADCGoQAjx6swwiIAmGIARfQA3fQAbUwAHIzTeWmMAawBLE5PjVtKKja36lXunl7eOrQYIAE8cAL6NQQAMPaCSHNFit1jU6nQYsNTMZXhxrLQAMamAC252y5gAngCPoj6g0oLiCUTSYVSp1YGCYQtlmtPmAQMAwGBQFAIABFBIPABeaCggBqBwCVY8CoIBUCcAGuNQQADC4BQ8YYgB2WwSAETHAIyDcnkbnVy3lUAAGkEoNywA9zL5DAAzbLYloGEwWKAAbzq5myeP0AC4oMZvIY7RkANxgAC+vLtDudrriiWS9qgXl8AVe7rMlh9ESayWDvS6UAAPkNRhWJl1o3HbfajEmWgdjmdLoYMz4-IEoLnPQWQ49nsZg6Hw+YMhA0PX402nS6Wqj0d2s32B-m6jTCSTx2GI3O+SABQAVfShiWAG9HAAx1gADe9i0eWAV6aSIAWmcANguUG9QQAg44AdVagaVABHm8QlnlSgWEAKVGNmtHkHgJUxDFSL0oAAUQARwSbITkGNDPEubFvEGAA5UxvB6EkoBjKBHUMfEhgAAW8YlLiUbEAAscJOPwMgvYAEm8J5jDrXlcXMUMQ1TFJg3iJIUigABeb1fX9IMhm4eVAA01gY6iLdTS36WNo3EyTknbC4jGDNtTksrtlKHP0AxLTSdKMiJflHYMIC6AAlfQXW8MYulPVj9FibFw3OIK0CMmMTIsSSACM0THKAV1eBzVOcjTtN0iIdzpEt-zVKBeEAHKXABRWwASMd0+LeRYy4oHPUNxmyYwLyUgU6nwwjvAAHkw7CTn6uS028Hz9K6WKhj6GsRjLSsukmAA+Fb3PQgj9CIwasJw-qbI7IwfM8l5psGCcIxnNaNt67aBqG-aMp8wqSXOqTJwyNawFnMAgA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
