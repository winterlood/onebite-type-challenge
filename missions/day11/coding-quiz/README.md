### Quiz 1.

---

다음 요구사항을 만족하는 3개의 인터페이스를 정의하세요


1. Video Interface

   - playTime(Number 타입) 프로퍼티를 갖습니다.

2. Book Interface

   - pageNumber(Number 타입) 프로퍼티를 갖습니다.

3. Content Interface

   - name(String 타입), info(T 타입) 프로퍼티를 갖습니다.

```typescript
interface Video {}

interface Book {}

interface Content {}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAMzKAa41IB7jgDIuAZy4C7jgEqHAPp1RAqBOtagDkG8YAIwA6KAGEA9gDsALgFNNUAJKatAJwBmAQwDGWsFCgBaKGrMBbLQAoAyhqMBLNQHMoQAGFwFDxgEoAGig-ExU3ABVg8KhAEFXAHQ7AH2XAB6WRQDQawFahwAmmzHkwACZFADUfABMtFX1DU0trWwcABwAbMwBPeJ9XNwA5AFdnACNjJLDUzJyoAuLFMCZFACEVFQBrRu1mqxt7KHazfy1RieNhscmjadnsvKKSsBBgMDBQKAgARRGfABeaCggBFRwAZ7exACrzgB2WkSADCHRFI8FA3h8-HtzFYoNU6g0AN4AXzRTUxWigG22UEJxIxLWU6m0umpnxA33iWgAzhpgYAb0cADHWAAN6uIxRIBXpoogBaZwA2C7Q+VBACDjgB1VqCASrHACPNaSgCNogAHJqCAKVHnij3iYRmoLBofOooAB3MwaCwACxx9TcFgZOg0AC56YZNAAeF0qAB8Mzxh3dag5Kk6WnknRU-jcAAMACR4yOMjTyGIqeRdXr9VwEwA7Q4AQGvYgFQa1giEuAWpnABarybCAG4wESwKbzZbrUYtGYahStm6PZofao-Rp-UPQ1SI+po7H44mU+nM56c2pYvnTucbsYCYAY2vYgFEZiiAX3HsM22x27Q7nbVXeHbE5XD6AETKkJQKV8zWADPHAB92wBOLsYUIBClQBezsADqX3wiQ5cx9Z9bGObo+gGLQfVkAAGeQAFZ4NsAl4IJVsPj7AchzcZDX0wqBPygb9fwAkDGEAGs7AENR2DCOiLcVCQw5bBOM4LluH0AHZsOwnjiPbMigA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAMzKAa41IB7jgDIuAZy4C7jgEqHAPp1RAqBOtagDkG8YAIwA6KAGEA9gDsALgFNNUAJKatAJwBmAQwDGWsFCgBaKGrMBbLQAoAyhqMBLNQHMoQAGFwFDxgEoAGig-ExU3ABVg8KhAEFXAHQ7AH2XAB6WRQDQawFahwAmmzHkwACZFADUfABMtFX1DU0trWwcABwAbMwBPeJ9XNwA5AFdnACNjJLDUzJyoAuLFMCZFACEVFQBrRu1mqxt7KHazfy1RieNhscmjadnsvKKSsBBgMDBQKAgARRGfABeaCggBFRwAZ7exACrzgB2WkSADCHRFI8FA3h8-HtzFYoNU6g0AN6HLq9fquABcjhuxgA3GAAL5opqYrRQDbbKAE2wnM4XW7ktSUow0+lgdHGJnKdTaTQAHniAD52YcnGSoABnbx+fw02wxFTk+JCj5fCDxLTq4GAG9HAAx1gADeriMUSAV6aKIAWmcANgu0K1QQAg44AdVaggEqxwAjzWkoAjaIAByaggClR54o94mEZqCwaHzqKAAdzMGgsAAscfU3BZJToNOTVIYZQWVHKZhyoMW1KqVJ0tPJOip-G4AAYAEjxjalGnkuvkRL6Ay0tMAO0OAEBr2IBUGtYImngFqZwAWq92woawInk6n00YtGYaqytkWS5py5eNNKz7XFbZG83W+3Oz3+4PSyO1LEx6dzgFWlABja9hAFEZihAF9x7Atx3LMc3zWpC3rZUtHJAAif0QigN0rVDQAM8cAH3bAE4uxhQgEN1AF7OwAOpfQiJDl1cl605boJxVWQAAZ5AAVno2xaXo2ltw+I8TzPNwUJcNCoEwqBsNwgiSMYQAazsAQ1HaL46Jfz1R9bGOACeWMckAHYOI4zSBLpYSgA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

getComments 함수의 적절한 반환값 타입을 정의 하세요

- getComments 함수는 여러개의 Comment 타입 객체를 담는 배열을 비동기적으로 반환하는 함수입니다.
- 반환값 타입이 Promise<unknown>이 아닌 좀 더 정확한 타입으로 추론되게 하여도 정답으로 인정합니다.

```typescript
interface Comment {
  id: number;
  author: string;
  content: string;
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          author: "이정환 & 김효빈",
          content: "한입 FE 챌린지! 완강까지 화이팅!",
        },
      ]);
    }, 2000);
  });
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0wHMCmAXAwgPYC2x2AdrgM5SAWq4BhDgGuNSCAE4BATgOqtSAYPYBprgSDVRAAwuBQ8cAi41ECoE80Aaq4A5BwCljYALRQcBEmUo0GgFKaogG9HAN+3JmRUhVzCRUQLg1gFpnAPp1RAL037ADD2AX0YmARPsCbzYAMdSyAPOOAOh08vDL6DCKAE02AJ00AdCoRgqKALuNQAAoATiQAllTYADwAruQA1uSEAO7kAHyZgCKjgDNNUIABE1CAKs1SgKprXKJhUIAps4AGHYAYLYAxNVAyBoAjzVKAr01DgB7jkoCWqwnJIMBgYKBQEACKpfkAXmhQTYAZ7cyAKvOAOy3O9JLyClA7YPmU2DkAZgBDADG2Cg5i0VgA3mAoFB8gATABcUHIpWIACNfgBuGFQAGlXAAC0IOWRVFwOW+mBxsKBhB+lDJFKpOIAvns-uUgbh8vS1HhwZYqAAKACUUGhsJyeFKOXIKOwNWyeWIhWwwuF0qohAANgA3bDigC89QluNhRVwABV8mRCASNcbTZLYa6tbqDcKIObXbCXb7fQjkQBGAA0PoDeIJxNJUAAROlJLwoAAyKCAATrABVrgAk+uPhyO+ukM3DIuMcGwAMQAolBADIzgAbOwADkwBCKCAETHAKg1gBk6xtQQAqa+lAKDLzbzEddrPzAbQopp49DUAATAAGFcz3Gstfs-YgQ5W7Dky4GAKAAN7AAyL+kkiwk9kANgsyAJQQAg41xAJVjc3CLxkvcAUqOAVqGEh8uy2gADiSUJQFWACOpQAjq85VgAHsB2DcvOAByhC4FBME6lArJQH8KrxgAArgACeyHKEChKwTqFA4FQwAEvkOpUHGOJgORyFQHu5L4ACRQ0Eahy4ohyHcsUGFYdBsHFAASjKcpWhRJRcdghB-PyGgWNo9TzrkBRFMUALkGR9TmZOYkobgkmYdhskKbgsrkMpyHFGpGlaYKun6SqaplJU1R1OZemiUh1m2dJOHyYpLkqe5Kmeeo3nUHpyqGSU5DYAaOQhZZ4USfZOoxU5SnxR5mnJZoQppQZqpGSlEBoCFYBoDiQA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0wHMCmAXAwgPYC2x2AdrgM5SAWq4BhDgGuNSCAE4BATgOqtSAYPYBprgSDVRAAwuBQ8cAi41ECoE80Aaq4A5BwCljYALRQcBEmUo0GgFKaogG9HAN+3JmRUhVzCRUQLg1gFpnAPp1RAL037ADD2AX0YmARPsCbzYAMdSyAPOOAOh08vDL6DCKAE02AJ00AdCoRgqKALuNQAAoATiQAllTYADwAruQA1uSEAO7kAHyZgCKjgDNNUIABE1CAKs1SgKprXKJhUIAps4AGHYAYLYAxNVAyBoAjzVKAr01DgB7jkoCWqwnJIMBgYKBQEACKpfkAXmhQTYAZ7cyAKvOAOy3O9JLyClA7YPmU2DkAZgBDADG2Cg5i0VgA3mAoFB8gATABcUHIpWIACNfgBuGFQAGlXAAC0IOWRVFwOW+mBxsKBhB+lDJFKpOIAvns-uUgbh8vS1HhwZYqAAKACUyNyBSKxUFlAgaHqUGhsJyeFKOXIKOwNWyeWIhWwwuFqqohAANgA3bCiqAAXkVythUCKuAAKvkyIQCUabfalbinVATearcKIAHA-7I5GEciAIwAGgj0fxRJJyIAROlJLwoAAyKCAATrABVrgAk+jNJ6OBukM3CZjg2ABiAFEoIAZGcADZ2AAcmAIRQQAiY4BUGsAMnVdqCAFTX0oBQZZ7FeTTtZlcjaFFNIXCagACYAAy71e41n79n7ECHV3YcmXAwBQABvYAGRf0kkWEnsgBsFmQBKCAEHGuIBKsbm4QvDIY6AFKjgCtQwkHy7B6AAOJJQlAzYAI6lACZobs2AAeMHYNyG4AHKELgyGoWaUCslAfx6lAGYAAK4AAnjhyhAoSaFmhQOBUMABL5GaVAZjiYCMThUDnuS+AAkUNC2ocuJYTh3LFIRxEoWhxQAEpqhqrpMSUInYIQfz8hoFjaPUG6Svq0oAuQDH1A5S4KbhuDKURJHqVpuDquQuk4cUBlGSZsrUBZupSiU5RVLUDSOfJ2EuW5qmkZp2m+XpAV6UF6ghVQYVWQaxTkNgVo5A5FnxYprkeWaqXeTpGWBcZOWaEK+V6oVIXyuVYBoDiQA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
