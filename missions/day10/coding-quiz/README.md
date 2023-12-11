### Quiz 1.

---

다음 요구사항을 만족하는 func 함수의 타입을 정의하세요

- func 함수는 매개변수를 그대로 반환하는 함수입니다.
- 매개변수 value에는 모든 타입의 값이 들어올 수 있습니다.
- 반환값의 타입은 매개변수로 전달된 값의 타입과 같습니다.
  - ex) value의 값이 1일 경우 반환값은 number 타입입니다.
  - ex) value의 값이 'hi'일 경우 반환값은 string 타입입니다.
  - ex) value의 값이 [1,2]일 경우 반환값은 number[] 타입입니다.

```typescript
function func(value: any) {
  return value;
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAGYCuAdgMZSAWq4BhDgGuNRAAwuBQ8YqBUCf61AHIN4wAWmbsufRoBPO5IAGe3oB9OqIA-awADNgHQ6ogDB7AGmsMevEYAmmzADoFUDdqgA3AIYAbFgFNABdHGQAquwAOW4RFBQCQawBdxqEATlsAW0cAaMaheKEAI8cBWoYdnRUtowVFAAXHXLV5TQBAJwBumwBwWqCLIwB+aqEBMGtynMCgoRX8ADwBKT18AmPiARkAfcahAXprABrHzC2iythYAWwAjfwAnSPsunr6hkb9-cagAcgALAEtLmYWllagAZwAXHdu2AHN9vO6vSgA2G3jOFwgEwANAAmNCPRaFVYbbY7CBof5dEDAMBgUBQCAARRYtwAXhjACKjgAz2wSAFXnADstel44hkeCg2LArE471uAHs2EpOAAKMEBABcUC8bAAnsMAN6Anb+d4sHYC0X+ADcYAAvrj8RAACr+D4YwA3o4AGOsAAb2ABkXGOJAK9NFEALTOAGwXaBaoIAQccAOqtQQCVY4AR5tMzNogAHJqCAKVHOuycWBbusAA68nbvKByqAAUQAjixfFCs-1E-4OO8CwA5XnvACCMqgOuYO156ygACIAALvaXF+Qca6+Hz+X4m4AsHk+V6t7VgDj8j5Qd4cCYStZbXZQAC8go4Qomg21s7Y88XMIlHy+v0326Freu-h8Pl5rf3M7nacXAGYJZtebzB1Kry5HdPgCSVXigH8-38KUX0PY8OAAFhXFFdnRQDlCFSECxhAsPzQF8wC7YsoGND4AGEvFeE0rwgQFMyLEt3gAHkrGsZSYgAFLwdi8dZlV2V4mKI-xeSYbcAD4IAABjQcTxILYBgCgQBqmcACJ7AA-JqBABhlwAfdsAD+6bUAABrJTrUR4gpQAFpqgQBgmrohjSyYnM8x8ITuxEsTF2hKBV1ROSoTs4sHKc3xXOLUSFw4HC3k+b4fj8gLGMc3MQuE8LPwLSD-zYeKenowLmOClzUo8xCCx81DZPEsA0G1IA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAGYCuAdgMZSAWq4BhDgGuNRAAwuBQ8YqBUCf61AHIN4wAWmbsufRoBPO5IAGe3oB9OqIA-awADNgHQ6ogDB7AGmsMevEYAmmzADoFUDdqgA3AIYAbFgFNABdHGQAquwAOW4RFBQCQawBdxqEATlsAW0cAaMaheKEAI8cBWoYdnRUtowVFAAXHXLV5TQBAJwBumwBwWqCLIwB+aqEBMGtynMCgoRX8ADwBKT18AmPiARkAfcahAXprABrHzC2iythYAWwAjfwAnSPsunr6hkb9-cagAcgALAEtLmYWllagAZwAXHdu2AHN9vO6vSgA2G3jOFwgEwANAAmNCPRaFVYbbY7CBof5dEDAMBgUBQCAARRYtwAXhjACKjgAz2wSAFXnADstel44hkeCg2LArE471uAHs2EpOAAeAAqAD4ABRggIALigIsGcpFUAA3oCdv53iwdgLpf4ANxgAC+uPxEBF-g+GMAN6OABjrAAG9gAZFxjiQCvTRRAC0zgBsF2i2qCAEHHADqrUEAlWOAEebTMzaIAByaggClRzrsnFgW7rAAOvJ271VUAAogBHFi+KF5-pp-wcd4lgByvPeAEE2ABPKBG5g7XnrKAAIgAAu8m+X5Bxrr4fP5fpbgCweT5Xt3DWAOPyPlB3hwJnK1ltdlAALyCjgSiaDQ3Ltir9cwuUfL6-feHiXd67+Hw+Xnd09LlfZ9cAZjlTZeV5ccvAFA8uSPT4AigLxXigICQP8MCv3PS8OAAFi3FFdnRB9IIlSESxhEs-zQL8wAHct5Utd4AGE4MtB8IEBXMywrd4hVrBtmyFAAFLwdi8dZNV2V4hSo-xeSYQ8xQgAAGNAxTFEtgGAKBAGqZwAInsAD8moEAGGXAB92wAP7sdQAAGtg5tIniClAAWmqBAGCa1j2MrIUCyLHwJMHKSZPXaEoG3VFlKhZzy1c9zfC88tpLXDgSLeT5vh+YLQo4tzC0iySYv-EtENAtgUp6Niws4iLPKy3zMJLQLcKUsUwDQQ0gA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

다음 요구사항을 만족하는 getLastValue 함수의 타입을 정의하세요

- getLastValue 함수는 매개변수로 배열을 받아 배열의 마지막 값을 반환하는 함수입니다.
- 매개변수 data에는 빈 배열을 제외한 모든 배열이 들어올 수 있습니다.
- 반환값의 타입은 매개변수 data 배열의 마지막 요소의 타입이어야 합니다.
  - ex) data 배열의 값이 [1, "hello"] 일 경우 반환값은 string 타입입니다.
  - ex) data 배열의 값이 ["hello", 1] 일 경우 반환값은 number 타입입니다.

```typescript
function getLastValue(data: any) {
  return data[data.length - 1];
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAOYCmALgDICGAzmwGpcANgFcWUQBargDCHAGuNRAAwuBQ8YqBUCZm1AHIN4wAWmbtufQaPHTGgE87kgAZ6pgHQ6ogBh7AL6MVA2D2ARUcdO5gCc7AA5OAk51QgEg1FIAYPYAaawySUoqAE02YAHS6UJY2UAAmXGxcgAujjIASfV4UcIAeY4A6q1CAFV2ABy1egC7jUIAnLYAto4A0Y1BSUIAR44CtQwnJepHBckqAAuOp1l1ZOV6+gfiIo4r1LYA+o1CAlqsDYFBQeiwAHgCUmdlccyGNEACMADRQAEQAFixCQgD2j2hQgD7jUIBemsADWNQYYTPgAJwAlgA7JgKRTxJK7fZQI6nGYXZxyYLXF5vT6PB43H7-YGgiLBCYwkQAWwARiwIQikckQMAwGBQFAIABFERQgBeP3cgAz2uSAFXnADstgB9OzoqTR4KDssAAMxEMIAxmwoR8YfpOLwBMIxAAKTEALigXBhAE9TgBvFEQ9giCH6zEQTGJIQsOFsZ6okkAbjAAF9OdyIAAVFh8H6AG9HAAx1gADewAMi4wVIBXpoogBaZwA2C7Qk1BACDjlUAlWOAEeb7FIFX4oIApUf6mGVHM1er41qtkNh8IAvAbDMaTKbbg8AEwPR4AZm+x1D7ZhnfpVvpHw+vptUAHrENRhNLFH9ygk6gbAhYjQ885UNpAAcPhC2FAHVAAKIARxEwgeb8Od5YbUHgAOQ+NgAEE7SgMMoFVCEPlpJ4AAE2FtACdE1Z5hF9OE42AEQdSEHhHlDMBF07NhNRubdByNYwzTHKASWvcjn0o8caN3Id6MPRjHnHOcFw7NjNWnTiDDog8jwec9LxY4Sz01AAWcS92HBjjw1DIWFVWEWAyK9SNQgCoFjPgAGFeDjGiIBRP8AO1AAeUCILtRyAAUuAhLhaXYJkeEc4yWA+VVaP3EwAD4IAABjQCKIoeYBgCgQBqmcACJ7AA-JqBABhlwAfdsAD+600AABrrSgpRGncQAFpqgQBgmrs-9ALYRzP2-IRArQ4LQso48aQZJl4rueqHKalrhHagCQsU08ezhAahsa5qvzGoLJso6cHjXDcWBtOa9nshbRralauuUh4tJ0vSMnisA0FDIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAOYCmALgDICGAzmwGpcANgFcWUQBargDCHAGuNRAAwuBQ8YqBUCZm1AHIN4wAWmbtufQaPHTGgE87kgAZ6pgHQ6ogBh7AL6MVA2D2ARUcdO5gCc7AA5OAk51QgEg1FIAYPYAaawySUoqAE02YAHS6UJY2UAAmXGxcgAujjIASfV4UcIAeY4A6q1CAFV2ABy1egC7jUIAnLYAto4A0Y1BSUIAR44CtQwnJepHBckqAAuOp1l1ZOV6+gfiIo4r1LYA+o1CAlqsDYFBQeiwAHgCUmdlccyGNEACMADRQAEQAFixCQgD2j2hQgD7jUIBemsADWNQYYTPgAJwAlgA7JgKRTxJK7fZQI6nGYXZxyYLXF5vT6PB43H7-YGgiLBCYwkQAWwARiwIQikckQMAwGBQFAIABFERQgBeP3cgAz2uSAFXnADstgB9OzoqTR4KDssAAMxEMIAxmwoR8YfpOLwBMIxAAeAAqAD4ABSYgBcPMSTq4MIAng9zWhjg7zVAAN4oiHsEQQ-WYiCYxJCFhwtjPVEkgDcYAAvpzuRBzSw+D9ADejgAY6wABvYAGRcYKkAr00UQAtM4AbBdo+aggBBxyqASrHACPN9ikCr8UEAUqP9TDKjmavV8KBcB2Q2HwgC8BsMxpM1tuDwATA9HgBmb7HZMjmFj+kO+kfD7Rl1QOesQ1GE0sZf3KDrqBsCFiL3JsBQ2kABw+ELYf0oAAUQARxEYQHmAw4fxYbUHgAOQ+NgAEE3SgFMoFVCEPlpJ4AAE2FdWCdE1Z5hGjOFs2AEQdSEHhHk-fcxzYTUbkvecjWMMQH2JD8wGYwDWNXDjrwXbj7xXJ5Vx3PdRyEzVN1EgwuLvXiXzfFh+MEl9NQAFmUm9Fx4qSNQyFhVVhFgMn4sAiNgqAsz4ABhXhsw4iAUWg2DtVNJDULdU0AAUuAhLhaXYJkeFNeyWA+VVONvExLQgAAGNBLUtB5gGAKBAGqZwAInsAD8moEAGGXAB92wAP7uLQAAGvHdClEadxAAWmqBAGCaryYLgthTTAiChBi4i4oS1jHxpBkmUyu5Op8nq+uEQbYPi3TnynOEppm7revAhbYuW1jNweE8zxYF0Nr2bytvmga9pG-SHjMiyrIyTKwDQZMgA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 3.

---

다음 요구사항을 만족하는 map 함수의 타입을 구현하세요

- map 함수는 자바스크립트 배열 메서드 map을 본따 만든 함수입니다.
- 2개의 매개변수 arr과 callback을 받습니다.
- arr 배열의 모든 요소에 callback 함수를 수행한 결과를 배열로 모아 반환합니다.

```typescript
function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVALYCGADlIBargGEOAa41IAGFwKHjFAoBA12oA5BvGAC0zdl26NACeOAUHsAlQ4BsFwL2dgDqWogBh7AL6NRAKl2AcQcA7LQrYVAHz2AGVqqADlqVDAE02YAdHKgAmZH5AE87kQAGe7igWACdowB+aqABjFgAbFIAjFkSAawpAbB7AVqGvX3kY6KNjfkAKrrc8REAF0aTUjKzspUAfTqhuQEjVwB1VqEAGmrjOk0AdDqgqwBFRqEAMHsANNcBLVeKwEGAwMFAoCABFAFcASwAvNChJwAz2-kAVeatO7kBUCak8KFWwADNdgDtEgBd9gHsPrYABRlAA0TTSmRyAEooABvMBQKApACm3yg0RRAGddil0QBeLZoADciKgrz+5SBqPR+yghIADMSoHSADxRWLeVEfADm3wAFsz9gBqYWwhFIpGYnF47xsXZY-lA5KQ1og2IQfZoaHQ0lIgC+ZMx3120UB0tx31Jho2IC2ABVsd8ToAb0cADHWAAN7AAyLjDugFemiiAFpmtLQ3VBACDj-UAlWOAEebxvdaIAByaggClRoqYZ5rfZMNiU9FwqAAUQAjrtUuDCwAPNgon7ggByf2+AEEPgBPKD68nRP5MKAAIgAAt82zXZIl+c0UbzscBdr8Ulj+6TEgCsejvokAIwALigH12THSKOiEBOhNYbCBEC34P84IAzGhwUD9t8UUxYfiAHws9+flc1w3RJ-D3ddon2Xkz3pYEbzvR9nygV9-y-X83w-bxvj+ABlb4IN5IEdVJMARxrKBHXXABhFgsWxGCIDJKsax+VlGxbdtWQABRiFgmDRE8sVZUiUT+V5bG-CAGTQb9v1BRjq1rb5WKbVs2y4ni+PfaJBOE0TxJvaTZPk5ilJLMsUiE0cRLEzdb33Q9j1PQy5KRJjFNZMzUksms9M3e8oHAyCeTPGSwBJMAgA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVALYCGADlIBargGEOAa41IAGFwKHjFAoBA12oA5BvGAC0zdl26NACeOAUHsAlQ4BsFwL2dgDqWogBh7AL6NRAKl2AcQcA7LQrYVAHz2AGVqqADlqVDAE02YAdHKgAmZH5AE87kQAGe7igWACdowB+aqABjFgAbFIAjFkSAawpAbB7AVqGvX3kY6KNjfkAKrrc8REAF0aTUjKzspUAfTqhuQEjVwB1VqEAGmrjOk0AdDqgqwBFRqEAMHsANNcBLVeKwEGAwMFAoCABFAFcASwAvNChJwAz2-kAVeatO7kBUCak8KFWwADNdgDtEgBd9gHsPrYADwAFQANFAAKoAPgAFGUAFxQEEQNAQ5JpTI5JGw-bfACmTCRIIAlFAALzQqEkpGQ1FQADeYCgUBS+O+UGi+IAzrsUhzyVs0ABuZlQV5-cqwtkc-YUqAABmFUDlQKisW8bI+AHNvgALZX7ADURrJTJZLK5vP53jYu25ethGJaOXhsQg+zQJJJopZAF8xVzvrtooCrXzvqKAxsQFsQTzvidADejgAY6wABvYAGRcYd0Ar00UQAtM1paCmoIAQcf6gEqxwAjzeN7rRAAOTUEAUqNFTDPNb7JhsSUchlQACiAEddqkIf2AB5sfE-CEAOT+3wAgh8AJ5QP3i6J-JhQABEAAFviup7JEnrmvidTzgLtfilubvRYkAdyOd9EgBGJEfXZMdL46J6UFVg2FhCAPwhfwIQAZjRKBcQJJgyUpFVEJ9MBnw+V8oHffwkVfaJ9h1IDbDAiCAhguCEMJZCqTxQlvG+P4AGVvkInVYW9UUwCPKdkQTABhFhuR5eUIDFCcpx+IF5yXVcgQABRiFgmHZADuSBXj8T+V5bGhCAFTQaFoTBCTJ2nb4ZIXZcV0U5TVIJaINK0nS9PAoyTLMqTLKHEcUk049tN099yJ-P8ANRYzTJZSSLKBXzUgCqdXNwiECKI7VIuhMARTAIA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
