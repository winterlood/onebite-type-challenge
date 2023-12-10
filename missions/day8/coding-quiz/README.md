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
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUAlgHYAuATgPYAmAVwDGAUyiALVcAYQ4A1xqIBPO5IAGemVEADC4FDxioFQJ6bUAcg3jABaKGwCGAWzELlgFKaoAZW7sA5mvWAXccAOXQBooAIg8tQA01-ygPQB92+0AGOsAPnsAkGo8oQBJBrUBKFsAJpswAOmMoDjMAG0L5JUl7ADkBCwAjES53bz9AAkHAXYXAQAnS5Sh1LNyQYDAwUCgIAEUBFgAvNChAEVHADPbZQBV5wB2WwB9OqEARMcBGQcAXVahAEjHADU7NuEAHGv08KAGwADMBNiEOFh42Vk5eQVEACnMrPwFYoASigAG8wFBWHcoD8AIRAwqgiFQqFCN4AZx4hRE2UKPBcPwABoAJUcAqo1XKAAEjB-xEAF9epg4UTgQBuSFQelQESFDFiFGo9FsLE4vEE4nkyk0umMvpQQAlC-YaYi5ZhWRyofSwNrhiBRgAVEQYjizQA3o9FAAG9gAZF+xaQCvTRRAC0zgBsF2jRKCAEHHADqrUEAlWP0QA6HVBJFpaIAByaggClRwCtQ1kboN2Nx+MIRD92WAk19Uz9AiF-BmsynfnnQn4AIwAdgArBmgA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUAlgHYAuATgPYAmAVwDGAUyiALVcAYQ4A1xqIBPO5IAGemVEADC4FDxioFQJ6bUAcg3jABaKGwCGAWzELlgFKaoAZW7sA5mvWAXccAOXQBooAIg8tQA01-ygPQB92+0AGOsAPnsAkGo8oQBJBrUBKFsAJpswAOmMoDjMAG0L5JUl7ADkBCwAjES53bz9AAkHAXYXAQAnS5Sh1LNyQYDAwUCgIAEUBFgAvNChAEVHADPbZQBV5wB2WwB9OqEARMcBGQcAXVahAEjHADU7NuEAHGv08KAGwADMBNiEOFh42Vk5eQVEACnMrKAAXgCQVCfgKxQA-AAuUzVOpcACUUAA3mAoKw7lAfgBCCGFZFojEYoRvADOPEKImyhR4Lh+AANABKjgFVGq5QAAkKP+IgAvr1MDiGYiANzoqC8qAiQpksRE4mktgUqk0umM1nsrk8-l9KCAEoX7Fz8TrMMKxRjeWBLcMQKMACoiMkcWaAG9HooAA3sADIv2LSAV6aKIAWmcANgu0aJQQAg44AdVaggEqx+iAHQ6oJItLRAAOTUEAUqOAVqGsjdBuxuPxhCIfqKwAWvsWfoEQv4yxWi78a2CoABGADsAFYy0A" target="_blank">
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
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAtVwGENUAMLgoeNSA6K4CBrgu0OAi41IC7jglWOAuq1ICdNgMuNSApY4Da1gNQOC2q9UAznYEcJwBqrgFKb8RAGIBXAHYBjQD6dUQKgTgDXHRgDkGOYALRQATMg1RAJ53JAAz24AhoAExqACNVgbB7ArUOAJpuYA6Axes7SQA5WQBbJwBTACcAGmdJAGUAF2iAS3kAcykCbz9DQAwewA01wCQaqUABcecAeyqAG0jbeShc3zAQYDAwUCgIAEVZNIAvNChAEVHADPazQBV5wB2W1UARMcBGQaZAEjHADU7VOEAHGp0OKHawZIBPAAdIqDklKABeKEajgG5O7ogAFUiAZ2SRwBvRwAY6wABvYAGRckakAr03UQAtM4AbBdEfyggBBxwA6q1A6IAR5sAOh1QbBqUSAAcmoIApUa8zH2HUUVXkXygADMFIoAFwXek3KAACls8ScAEobgA+KAAbzAUCgFKpdUiPlqVUyHJ8ySq0jSAA9IgATNnc7lPUXij6S6WytlOBVVAAyVUUtnqloA7jEAMK2D6RLU6kVQaKRZKyaJNVKySJPAC+TzAaTCJyq0WSQqgAFEAI6yG3xBMqs6KZLxYJVZIAQXkRygIdp0SqYSgACIAALHM76RQACxt9Syn2AsmSaVqH2r4Yb53eX2dro+rIgnozWeSAB484Xi3PLoo+XzYtPM5Fs3Pk6nanOAAq2aK2MI+mIfFf0vkQAAMaHi8nCUWi683opnO-n+5tx9Pc9L2ia9VzvABGJ8oC+dIsnXMA0CeIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAtVwGENUAMLgoeNSA6K4CBrgu0OAi41IC7jglWOAuq1ICdNgMuNSApY4Da1gNQOC2q9UAznYEcJwBqrgFKb8RAGIBXAHYBjQD6dUQKgTgDXHRgDkGOYALRQATMg1RAJ53JAAz24AhoAExqACNVgbB7ArUOAJpuYA6Axes7SQA5WQBbJwBTACcAGmdJAGUAF2iAS3kAcykCbz9DQAwewA01wCQaqUABcecAeyqAG0jbeShc3zAQYDAwUCgIAEVZNIAvNChAEVHADPazQBV5wB2W1UARMcBGQaZAEjHADU7VOEAHGp0OKHawZIBPAAdIqDklKABeKAAKWwAuKHlwqLjnZ4BnVIzMgEobgA+ap1BryADcnW6EAAKpEfiNADejgAY6wABvYAGRckakAr03UQAtM4AbBdEKKggBBxwA6q1A6IAR5sAOh1QbBqUSAAcmoIApUa8zH2HUUVXkPygADMFIpnpdFDd7rZ4k5AdcQQBvMBQKB8gVgny1KqZB4+ZJVaRpAAekQAJnd-v8oar1V9NdrdU59VUADJVRS2erugDuMQAwrYvpFLdaVVBopFkrJok1UrJIlCAL5QsBpMInKrRZJQRVQACiAEdZF74vnjWdFMl4sEqskAILyI5QJPC6JVMJQABEAAFjmd9IoABZe+pZBHAWTJNK1L5d1P987wn6B4NfKUQcPlyvJAA8tYbTd3EqBQNiW4rkSru6LJdqu4ACrZorYwlGYl9j6KgRAAAxoeJXgiGJT3PVVtyvPdby9R9n1fd9ok-E8IAARgAqAfnSLJTzANAoSAA" target="_blank">
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
