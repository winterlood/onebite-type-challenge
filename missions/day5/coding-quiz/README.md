### Quiz 1.

---

아래 코드의 변수 a,b,c,d,e의 타입은 각각 어떻게 추론될까요?

```typescript
let a = 10;
const b = 20;
const c = [1, 2];
const d = [1, "hello", true];
const e = [1, 2, 3] as const;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBFRwGe1UCrzgOy2Aa41ACzImADPYBhDUAhgDQBGDAxgwCYmADC4KHjgAuNRAgDVCogFtHA3a2AYmqiAU2cAGHYAIWwDJ1gFLGA-FChgAtFBr0SCqIAaawD81gH06oAQSh9AC6NRAqBNFALquAficAcg6t37aTI3lTSygAITteRxcPb18DVkDgqwBhCKi3Lx89Ay45IPMrABE05wzY7NoAU0SCqABREujMsBBgMDAAG0qAF3ooAF4oAEYABgBuMFYAewA7AGdepgGoACZxydmFqFZliCGGVbQJ6fnejl39qAAiAAtKjo6pq4PugCcAV0qjjdOoSouDisDgBmND0ObbTbdCZgUBQCAARXeAEsAF5ggx0HgCKCAFm7AOOjgB5xwA6HXkVBooK0wN0AJ4AB3+tkGdBmNJhcMRKPRfigAQiggJJLJak0VNpDLCyxZbPaHKRaIxtAS-LxRNJCnJora4v+qWZrPZIHh8u5OWxArVwopYvp-2K+plsKNnIVPOqKsF6qUIsp2tt9SlBtlzoAKpUFmDADejgAY6wABvYAGRcAKU3OQCvTYARcaggBaZwA2C4ANVejUEAIOOAHVWoIBKscAI82k6hOXOAAcmoIApUcArUOACabACdNvrAyIAtnSpq9egBveoAR3edA6BzqAA8GaxugcAHJTbrWVlQAC+UAAZq8pj3rgABHU6Vg3SddGYAc3DwHe3WRHTmVxhOqgYYWyToc3DuzAWizvO3QADx1OOk4gdYBwzO8PZMJUrwAHxIQwAH1HOlQLmBEEdCBoSAiMKFoYBmHYeBE54ckMFwQhrwQGgxHoUBWGgRRkGFAcAAUsHwYhUAAD5QAsrzIjegm8lMUxdCyACUDFMaRwE4ZRYEHHsgIgoxSFgN8QA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBFRwGe1UCrzgOy2Aa41ACzImADPYBhDUAhgDQBGDAxgwCYmADC4KHjgAuNRAgDVCogFtHA3a2AYmqiAU2cAGHYAIWwDJ1gFLGA-FChgAtFBr0SCqIAaawD81gH06oAQSh9AC6NRAqBNFALquAficAcg6t37aTI3lTSygAITteRxcPb18DVkDgqwBhCKi3Lx89Ay45IPMrABE05wzY7NoAU0SCqABREujMsBBgMDAAG0qAF3ooAF4oAEYABgBuMFYAewA7AGdepgGoACZxydmFqFZliCGGVbQJ6fnejl39qAAiAAtKjo6pq4PugCcAV0qjjdOoSouDisDgBmND0ObbTbdCZgUBQCAARXeAEsAF5ggx0HgCKCAFm7AOOjgB5xwA6HXkVBooK0wN0AJ4AB3+tkGM3eAFsmJVXjC4YiUei-FAAhFBASSWS1JoqbSGWFlmtuSB4Ui0RjaAlhXiiaSFOTJW1pf9Usy2RzXhBvrDFbyVQLcnwRVrxRSpfT-sVBgAKFnszlQAA+UAWr2RMwA5v7BVMpl06DMAJTmhVKvmqv7Yh1inUSyn6131AGrEEWnkAFUqCzBgBvRwAMdYAA3sADIuAFKbnIBXpsAIuNQQAtM4AbBcAGqvVqCAEHHADqrUEAlWOAEebSdQnL3AAOTUEAUqOAVqHABNNgBOmnNgZGsulTV69ADe9QAju86B0DnUAB4M1jdA4AOSm3WsMxpUAAvlAAGavKastcAACBo6KwNwXl0YblsA7zdMiHRzFcMIGlAZYLMkdBzOWuxgFoN53t0AA8dRnheRHWAc3qmgAfDRDB4fUt6VPeJFkR0RGhICIx0Qx+HMaxpHnhxyRUSanLmrxjEESxxFCeRhQHF64mvBGQYhuGAZMFGMbxpJ9HSQJcnsSRBx7ICRZ0WA3xAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

다음 요구사항을 만족하는 Animal, DogCat(개냥이) 타입을 완성하세요

- Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
- DogCat 타입은 Dog이자 Cat입니다.

```typescript
type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

type Animal = never;
type DogCat = never;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAIIB2AlgLYCGANgDRQAIgHsA5gGEuAFwAUyQKcNgF3GAlFEADC4FDxioBExwIyDtQByDeMAFpm7bj3UbAAuNCx1wD7jUQBhDgEeaokqU9cfAEeOArUOAE02YAHSm9hLS1nYiooqACeOe0hoh4SDAYGCgUBAAigCubABeaFCAIqOAGe2AGuNQgCrzgDstgD6dUHqALqtQgCRjgBqdLXCADjWGeFAZYFIAngAOAKaRUAC8UADeYFBQLFwc0wBcUADOUgBObCyiANyrUADGwjzCh7sHx6cXAL4XY1OzXgvLlxtbR5HE7nS5cUQ7dYFDgAI2mhzeHwmM3MnF4vxY0wAbvCLsjZnEfotMTiEVkchAACrTA5lQA3o4AGOsAAb2ABkXGIBUCcAr00UQAtM4AbBdoDKggBBxwA6q1BAJVjbkAOh2udm0QADk1BAFKjwUwI0yNxYBygXAsvD2u1YaJ4EDKiwglxWazWAMhACJAAWLgEluxT2viXNY3O4PKD2mGHYQAdxY7surw9a2tNrtu3tgBQpwAf3WGbbqIbsAIwABkjUAjYDQHy1OoAJmIvLtCdFFtHY36FG7c+DIQAmXPe+5xwAac4AIycAkwNh95gIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAIIB2AlgLYCGANgDRQAIgHsA5gGEuAFwAUyQKcNgF3GAlFEADC4FDxioBExwIyDtQByDeMAFpm7bj3UbAAuNCx1wD7jUQBhDgEeaokqU9cfAEeOArUOAE02YAHSm9hLS1nYiooqACeOe0hoh4SDAYGCgUBAAigCubABeaFCAIqOAGe2AGuNQgCrzgDstgD6dUHqALqtQgCRjgBqdLXCADjWGeFAZYFIAngAOAKaRUAC8UADeYFBQLFwc0wBcUADOUgBObCyiANyrUADGwjzCh7sHx6cXAL4XY1OzXgvLlxtbR5HE7nS5cUQ7dYFDgAI2mhzeHwmM3MnF4vziUAAPskpBdkbM4j9FpiAGS4j45CAAFWmBzKgBvRwAMdYAA3sADIuMQCoE4BXpoogBaZwA2C7QmVBACDjgB1VqCASrG3IAdDtcnNogAHJqCAKVHgpgRpkbiwDlAuBZeHtdqw0TwIGVFhBLis1msAZCAESAAsXAJLdikdfEuaxudweUEdMMOwgA7ixPZdXl61ra7Q7do7AChTgA-uiN2-UQ3YARgADNGoFGwGgPjq9QATMReXZE6KLWPxgMKD358GQgBM+d99wTgA05wARk4BJgYj7zAQA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
