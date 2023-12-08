### Quiz 1.

---

다음 요구사항을 만족하는 4개의 타입을 정의하세요

- Any 타입은 사용할 수 없습니다.
- Nums 타입은 숫자만 담을 수 있는 배열 타입입니다.
- Colors 타입은 문자열만 담을 수 있는 배열 타입입니다.
- Coords 타입은 [숫자, 숫자] 형태의 배열만 허용하는 타입입니다.
- Info 타입은 [숫자, 문자열] 형태의 배열만 허용하는 타입입니다.

```typescript
type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAIIB2AlgLYCGANlIAMLgUPGKgETHAjIO1AHIN4wAWmbtufIYAFxqABEA9gHMBgwD7jUQBhDgEeaoAYS4AXPYdNRAEeOBWocATTZgB0YEMDBhQUCABFAFc2AC80KEARUcAM9sANcahAFXnAHZbAH06ocUAXVahAEjHADU70uEAHGqk8KG8wKwBPAAcAUw0dKABeKABvMCgoFi4OOoAuKABnKwAnNhZtAG5OqABjTR5NUcGR8cmZgF8ZytqGyxtWjq6evtWxienZrm0B7uCOACM60a2d6vqFTl4W7rqANxeO38EAAKnURpFADejgAY6wABvYAGRcYgFQJwCvTRRAC0zgBsF2gwqCAEHHADqrUEAlWMmQA6HcZkbRAAOTUEAUqOuTDlHwLFgjKBcRS8IaDVjfHgQSKtCCzY5dbq9O4AIkABYuASW7AC7j0oANLMugslisoNLHqNNAB3Fiq2abNVdcUnKWDaWAGTrALudyvNEpudwALM6zWL1ZKzjrADfLgBlFhUmiXzRbLG16w3Gz3Oy2+mWAFCnAB-doZdt0GAEYAAxxsBoGZAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVACzKAa41IAMLgoeMWCoE67UAcg3jBgAtFACCAOwCenLoAFxqEUCVY4ANVqIAwhqIDHRwK1DgCabMAOnFQAcgFcAtgGcFywNRDgBPHKUQC9NFHYAjxxoAYewBfRhS5jMwkAYQB7ABsogCcHbmUYF0D3L20oPyggkLDzaISAEySlKAhXABooVzQoQFQ1wB2F9iD3QAnV1QZ803MASWkAMyjHCurYNPrm1vSoTu7uUN6QYFFQCoBFKwBLAC96wBFRwAz29kAVecAdlsAfTqhAETHARkHAF1WoQBIxwA1O67hABxqhPCgVsAALrIAA4AU0stgcAF4oNJbAAjUHxCBoADcgJB4OicUSUBhdgB8W20gA5ij0UCwVAivFSniKnCbIj4jVGcy0RiqQNhvSIASiaTWQikRywOsIAAVUEE+qAG9HAAx1gADewAMi4xeIBXpoogBaZwA2C7R5VBACDjgB1VqCqQAjzYAdDu0vFogAHJqCAKVGjJg-qttjZgQkAVAAN5QACiAEcrABDGI1AMADzBAGMATULFEATJ5ABfKCDeJRGxQABEAAFKaCxLGABbhmKg0nS4BWAHbGJ2PPosCxqLSAmw4WJABcEPsvIAjDUAEw1ADMNSYNQArBz252fe2cXZ+9iEtCKnn4qDinmanmSbvqwf8-CYlZQXmFx2u+2SsTQwDpeuoiUtxAp1B5+jF13iWGftuRGGEIDzQAXcd4QANNbPUcAHZRWLKBY1DOxpV5MAoEDGNQXjAAeJMUzkQjISgAAfalYk3CiqI-WiQIAPkYqosJwuMAXw4MwxiUj7CFJkkRRZjWOw6MOK4kNw3wjdEhqfliTJNARLY8S8M47jpJpUoaggNkkQE9kVLE3CCM03iQN0hTBW7QT4mUxiwA5IA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

다음 요구사항을 만족하는 Course 타입을 정의하세요  
(이 타입은 마치 인프런에서 활용할 것 같군요?)

- Any 타입은 사용할 수 없습니다.
- Course 타입은 온라인 강의 정보를 포함하는 객체 타입을 정의합니다.
- 문자열을 저장하는 name 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 price 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 student_cnt 프로퍼티를 가져야 합니다.
- 문자열을 저장하는 author 프로퍼티를 가져야 합니다.
- 문자열 배열을 저장하는 related_courses 프로퍼티를 가져야 합니다.

```typescript
type Course = {
  name: string;
  price: number;
  student_cnt: number;
  author: string;
  related_courses: string[];
};
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAMID2ArgE4DOAplIAMLgUPGKgVAnAGuO1AHIN4oYABSAXcYGDAAuNRAE52ANOaiAPccAgq4Af2wAujgHEGogHTXAlWOADVaiBgmqiBMGsAOtXgD8ASjBgAtFACCAHYAnspqRDZQgBhDUIBjo4CtQ4ATTZgAdL7M7Nx8QmqAFGOAPu06UICoNWJQIoAvPYA+nVCAN8uAFqsMUIC4NYAtM8qiYoCWq8lpfjCACeOAL6MUgAATgKXjTYEAhgC2fHqAOh2APsuAD0s1gAA1gBwTgD6jUD2p6YDUQwM1E00ADhwAlgDGCyvrUNt7B31QJ2eTjFwALmwAEx4gV+AH1biCoEs1ptdvteulBiMoOdGNM2L8ABYsDhQx6w14I-rDKCABh7kaioBweAAbaa-HgA8GZXhcPEw55wt5gEDAbygKAQACKbGuAC80FBACKjgAz2sqAFXnADstNUAImOARkHAC6rUEAJGOADU6anBAA41UhkvLAv2CFz4rE4vCgAF4oIEeAA3HgcADc-JAgoAKjw-pLADejgAY6wABvYAGRcYIkAr00UVqAGwXaCGoIAQccAOqtQSyAEebFtERLRAAOTUEAUqNJTBQM3XWYXHG-KAAbygAFEAI5saY0gA0LYAHlbbr8ewA5Fi-IKhAC+UAAZhwWLMoAAiAACFqtPlumM7NOBAHMA8AMdcaVwl16wLcWIE-lAr7aeAAuDIPh2NsBQJ1zJ-LzOCKAJiGeaABnj+SAJxdjBCIAJUMJoAvZ2AB1LS5dh+UBXHcP4AKwYQADLhyGfn8gLAmCEK-M+ACM2EABwAJz4VA6JYjiz5LgoIiABprUAAD5QAA6tcILujSLAsACSEodSdIMky95ZFwz4QChn5Ln+AFAVAoEQVAgA1nYAhqOIfRymAJ9jUKAAYd8GACujypppmAyACg9MEIVAgDVM1AgAeNdg4mfmgyGThe658P6fxMNMrJvopn7Nv2PCDgAPKO44hLFNpZAAfKl9FRQOvyxUpLbtp2sUANY8MELAzi+WQ9kuMzzEu3HLmh9z1TxS6EUCILgiCLXLox2IcD1S6SfSjLMg+Z6pShGUoVlMU5W2HY0slLI8BANXfkuPlQH8NyBHu6WZdFcULYVKW8GtTU8JtPaBGwswAEbugdM1HfNBVLWdq1tf8HUkd1W23Q9T3TZFr2xSdH0rWtfU4td22-Lt+0g322Xg+9y0Pmtw3SWNclwztAl7hAaDpWAaBekAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAMID2ArgE4DOAplIAMLgUPGKgVAnAGuO1AHIN4oYABSAXcYGDAAuNRAE52ANOaiAPccAgq4Af2wAujgHEGogHTXAlWOADVaiBgmqiBMGsAOtXgD8ASjBgAtFACCAHYAnspqRDZQgBhDUIBjo4CtQ4ATTZgAdL7M7Nx8QmqAFGOAPu06UICoNWJQIoAvPYA+nVCAN8uAFqsMUIC4NYAtM8qiYoCWq8lpfjCACeOAL6MUgAATgKXjTYEAhgC2fHqAOh2APsuAD0s1gAA1gBwTgD6jUD2p6YDUQwM1E00ADhwAlgDGCyvrUNt7B31QJ2eTjFwALmwAEx4gV+AH1biCoEs1ptdvteulBiMoOdGNM2L8ABYsDhQx6w14I-rDKCABh7kaioBweAAbaa-HgA8GZXhcPEw55wt5gEDAbygKAQACKbGuAC80FBACKjgAz2sqAFXnADstNUAImOARkHAC6rUEAJGOADU6anBAA41UhkvLAv2CFz4rE4vCgAF4oABvMBQKAzeYALigfxugQA5gBuV1QK53HjewJsWYAIx4HGDbr+gOBYIhv0j0bjCZD6KxOO9vuuAcTVNp9MZzNtPC4hd+fv9EDQwYAvsGwAKIAAVGu-SWAG9HAAx1gADewAMi4wRIBXpoorUANgu0QdQQAg44AdVaglkAI82LaIiWiAAcmoIApUaSmCgZuuswuON+zqgAFEAI5saY0gA094AHlbbr93wA5FhfiCUIWygAAzDgWFmKAACIAAELStHxbkxF8aWBf0a2ADFrhpLgYPbW4WECP4oCI6tvRtLIHWdEMPQjWC10EKBZ0HbdAAzx-JAE4uxghEAEqHZ0AXs7AA6lmDXxDMN7m9ABWaSAAYFPEpN-iBEFwRBb0AEY5IADgATiUqA82xDhvRghQREADTWoAAHygAB1YsGQ4GkWBYAExJDak6QZJlyKyWtBRDN0YKYli2KgTieKgQAazsAQ1HRMMkLAE+xqFAAMO4TABXR5VlzXAZABQegSRKgQBqmagQAPGuwTy3TQcS228RC+B7P4mGmVkaIgEM7y-HgfwAHgAoCQj6qjeAAPjGwzuu-X4+uC+8nxfPqAGseGCFgwIyat3xg+iYNs2DJJ4fa7Jg5NVLTEETtg4ycWumDvIrPyWRrGCxpDSaup6-rH2fGkRpeiBdrmY7ap9eti39Capu+2bfqW0aeCBo6YLBqNY3jaGvpmvr4f+xGgfO1N1N+VH33R7Msbdaberhxb8cBmDbo4MnwYbKnPxxvGAerIHHt8qsAtZosAybCawGbMAgA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 3.

---

다음 요구사항을 만족하는 User 타입을 구현하세요

- Any 타입은 사용할 수 없습니다.
- 객체 타입이어야 합니다.
- String 타입의 name 프로퍼티가 있어야 합니다.
- String 타입의 email 프로퍼티가 있어야 합니다.
- 그 외의 String 타입의 동적 프로퍼티들도 추가할 수 있어야 합니다.

```typescript
type User = never;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAKoDOApgE5SADC4KHjFBQCBrtQByDeMGAC0UAIIA7AJ49egAXGoRQJVjgA1WogDCGogMdHArUOAJpswA6KVEC4NYBaZ5YBdxwC2jgH1GogS1Wzl6QGUALhwAlnIA5sqAGuNQcgCGALZsUIAgq4A6HYA+y4APS4AANVCAEeOuHl5W-kGhEVBssdGBADZJaVm5+Z4WVoAftVCAHmORxcFhfJGAm82AgBN1GYAnLYAjzVCAKbOZOvp5bs2WIMASoFAQAIoAroEAXmhQgCKjgBntkYAq84A7LYA+nVCAImOAjIOALqtQgCRjgBqdd3CADjWieFBVmA-AoAA4JVicKAAXiibAAbpwANzrECbAAqbBYfiOgBvRwAMdYAA3sADIuMQCoE4BXpootkANgu0fFQQAg44AdVagGgmyT0ZNogAHJqCAKVHTJhAWsAMYAezk2KgO3YHAAXMw5TCoABvMBQKJxNiKgBEAClxQALOS6gA0GvKlRqeoAVsa5AABNgADzioOqbHMEti5stroC0QAjHq-Fi-H7NQGONEAEx6kLi8UAEz9AF8UUA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAKoDOApgE5SADC4KHjFBQCBrtQByDeMGAC0UAIIA7AJ49egAXGoRQJVjgA1WogDCGogMdHArUOAJpswA6KVEC4NYBaZ5YBdxwC2jgH1GogS1Wzl6QGUALhwAlnIA5sqAGuNQcgCGALZsUIAgq4A6HYA+y4APS4AANVCAEeOuHl5W-kGhEVBssdGBADZJaVm5+Z4WVoAftVCAHmORxcFhfJGAm82AgBN1GYAnLYAjzVCAKbOZOvp5bs2WIMASoFAQAIoAroEAXmhQgCKjgBntkYAq84A7LYA+nVCAImOAjIOALqtQgCRjgBqdd3CADjWieFBVmA-AoAA4JVicKAAXigAG8wFAonE2AAuKAsAK9ADciPKlRq6MxJRCuKREAA1mwFESsaE0LSSbiAL64sAbCAAFTYmKOgBvRwAMdYAA3sADIuMQCoE4BXpootkANgu0AVQQAg44AdVagGgmyT04togAHJqCAKVHTJhAWsAMYAezkmKgO3YHHRkK4sIRSJi8XRACIAFIWgAWck9ABo8RUqtUvQArf1yAACbAAHnFQdU2OZLbFg6GEwFogBGL2J3N5rNIoscaIAJkLOYrldL5Vr0QAzDXc82G+XogAWNsV7udpsAVj70SHg9zADZR5OG8BgFBACM1gFjBmbZQAELVAfoAF0fErLAQA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
