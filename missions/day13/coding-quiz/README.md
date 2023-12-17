### Quiz 1.

---

다음 요구사항을 만족하도록 getSellersFromProducts 함수의 매개변수와 반환값 타입을 정의하세요

- getSellersFromProducts 함수는 매개변수로 받은 Product 배열로부터, seller 객체만 추출해 새로운 배열로 반환하는 함수입니다.
- 반환값을 명시적으로 설정해야 합니다 (인덱스드 엑세스 타입)

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

function getSellersFromProducts(products: any): any {
  return products.map((product) => product.seller);
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUA5gKYAuAymwDa9sATgGcAYoID2AWwAKkgCYBXAMYdhUQBargDCHAGuNRAJ53JAAz1bAAmNRAGD2ANNcBINVEADC4FDxioFQJnbUAcg3jABaVpx5+ITFJWQUVNU0tQBSmg2MtQB0OqEBsHsABcag5CSVVKEAGHsAX0YTAAN7ABkWAGihhPgFBKEBcGsAWmcooQBTZwBzZwBdVqEAJgYTAFrG8wssrWljtR0AJpswAOl9hmwpAUK7AHaHAQAnAHnGkwBJBlw7AH1GoQEtVqagACkAPccBHZsASocAdlqhARdGPa4dHAEowEGAwMFAoCAAiooAJYALzQUEAIqOADPa9IAVedugB9OqBaFyePBQL4-YEAOw4QgAZgBDZRsDLhHIAbzAUCgwPkAC4oDjFFIAEZCADcNOZRKkbCZwg4glxLG5tIADiLSUyWeyuTyqkFBEzqbTafTZayOYJxeqcXyBZVhaK9bTlNIJUScQBPQUmnFinkAX25zp+BMUONUwIkOP83GqwXE0ky2TUpylWQiwiZ1ptbzjtqgaqggk4ikE-qj4eE0ykRIlp0jFI4bygAF4AHxQHMRaZKmpvN0-P4QAAqbCFEMAN6OABjrSrEXIBXpooDUANgu0PtQQAg44AdVaggEqx+hJVG0QADk1BAFKjgFahk5Y4FSCUSQQcFNQACiAEdFETeBULwAPCVsHLOqAE0JQABEAAEODaL4+MoAAWd4CI6XbAIoHDArwwjftyYAAS+UCdkKADCRJVOoFb-DyT4vqoAA8163rwxEyESgiGviIjEShbASASAaBDUIShqWwhVhAAAMaAVGGEQQGgVZVmUBHPq+HCkTed7EQAShmWbtoBbAMWpzGsUGIghmE0aqNxgmlhA36NkI35oCJYlgGg3JAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUA5gKYAuAymwDa9sATgGcAYoID2AWwAKkgCYBXAMYdhUQBargDCHAGuNRAJ53JAAz1bAAmNRAGD2ANNcBINVEADC4FDxioFQJnbUAcg3jABaVpx5+ITFJWQUVNU0tQBSmg2MtQB0OqEBsHsABcag5CSVVKEAGHsAX0YTAAN7ABkWAGihhPgFBKEBcGsAWmcooQBTZwBzZwBdVqEAJgYTAFrG8wssrWljtR0AJpswAOl9hmwpAUK7AHaHAQAnAHnGkwBJBlw7AH1GoQEtVqagACkAPccBHZsASocAdlqhARdGPa4dHAEowEGAwMFAoCAAiooAJYALzQUEAIqOADPa9IAVedugB9OqBaFyePBQL4-YEAOw4QgAZgBDZRsDLhHIAbzAUCgwPkAC4oDjFFIAEZCADcNOZRKkbCZwg4glxLG5tIADiLSUyWeyuTyqkFBEzqbTafTZayOYJxeqcXyBZVhaK9bTlNIJUScQBPQUmnFinkAX25zp+BMUONUwIkOP83GqwXE0ky2TUpylWQiwiZYYiEDQbzjFI4EAAREqaum0ImoGqoIJOIpBP6o+HhNMpESJadI6m3lAALwAPig5Yi0yzQjebp+fwgABU2EKIYAb0cADHWlWIuQCvTRQGoAbBdoE6ggBBxwA6q1BAJVj9CSqNogAHJqCAKVHAK1DJyxwKkEokgg4+agAFEAI6KIm8CpPgAeErYOWdKACVCKB0wAAQ4G0-x8ZQAAsPwER0R2ARQOGBXhhHTbkwEgv8oGHIUAGEiSqdQm3+Hkfz-VQAB5X3fXgaJkIlBENfERBo3C2AkAkA0CGoQlDVNhBbCAAAY0AqeNVETFsWzKSjf3-Dg6LfD8aIAJWLUtBygthOL0ni+KDEQQzCaNVBEqTUwzbtBBzWSWzANBuSAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

다음 조건을 만족하는 3개의 타입을 추가로 정의하세요

- PartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.
- ReadonlyProduct 타입은 Product 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.
- ReadonlyPartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type PartialProduct = any;

type ReadonlyProduct = any;

type ReadonlyPartialProduct = any;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAzMoBrjUgAwuCh4yYCmzgADWA6HVIFQJxpUAcg4BSxsAFooABQCGAJwAuASzkAbGQoD2AEwCuAYyWs2gAXHZOg8dPNAFV2ADlqiAQVd6AfZcAPS4B9OqJiiACQcBdhcBACZd3D35AFB7AHvrTNkAJpswAOikoACUAUzldbQA7dQBPLT0jE3YLYusytnsnV08fP0BfccAGOqhAEAnASrGwzyjY9gTk1MzsvML5ZTVNK1LTCpmbdlqe718AkIAaKFaO7vqIqBi4xJSQYDAwUCgIAEV9FQAvNChAEVHADPbmQBV5wB2Wn0AMIYEojEUDOYBUuSUGQUADM5IYMpYSjYAN5gKBQFS6ABcUFy+gAtgAjKEAbjRuLk+IyOIAzkoFOCAOZk9EABwZ8JxeKJpPJNIy6nUUJxqPR6MxXIJxIULLFuUp1KgdIZuWZ5PRhm0+NZclyBVp9KZsoAvmTjRclAVWQiJqoNJVZgBeKC6gpksCW63pLI5fJFBYmZ2u92ehEjX3jRR26ZIwMuvXuq4QAAqGTpz0AN6MtQABvYAGRdoAkAr00kQAtM4AbBcobUAIOOAHVWoJ1ACPN-ABlEAA5NQQBSo4BWocSIPOKm12mUUGRUAAogBHfQaLZjgAe1uMWwActolJPp+ooMaoNCdPioAAiAACockhgAFhohaq08B9Kp1DTDyGrQjU3SAMJyfk0qDOiByXnRclAAHg3DRQNtKYHSXWQoymKCAwAPlQjYgIXDJjHAqdIPDMZ-VjLZ8L9JDY1Q5D0PRYCsLAiD1FAkjI0me0A2In0CKghDINgpQKOQsA0DJIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAzMoBrjUgAwuCh4yYKgTjlgHIOApY2AC0UAAoBDAE4AXAJbiANqMkB7ACYBXAMbTWbQALjY1Zp17mgCq7ABy1RAIKuAdDsA+y4AelwD6dUTFEAEg4F2FwIATtxyc7KEAUHsAe+r02QAmmzAA6YSgAJQBTcTUVADsFAE9ldW1ddkM8k0K2C2t7ZzcPQF9xwAY6qEAQCcBKsYDnYPDImPiRFLTMnIkZeSVjAr1i8dN2CvbXdy8-ABooBua2qqDQiPZouLAQYDAwUCgIAEUNWQAvNChAEVHADPbmQBV5wB2Wt0AMIc4+figjmBZBlpMlJAAzcRaZJGfKmADeYCgUFkagAXFAMhoALYAIzBAG4kZjxNjkhiAM7SSTAgDmRORAAcadCMVi8YTiRTkgoFGCMYjkcjUWycfjJAyhRlSeSoFSaRl6cTkVoVNjGeIMtlKdS6ZKAL5E-UnaTZRkw4ZyRQlCYAXiggvOAGtktkURkoC7sipwbDSmgAPwYm06CBetBGolgU3mpKpdJZXLTXT2x2SeODN1h13uz2un1+gpoYPJ7PZCNgQ0ms0w-oJoZSK1jOEph3E9MDRPOnPAvPe30h6SBkstssVqunEDnAAqySp90AN6P1QABvYAGRdonEAr00kQAtM4AbBcojUAIOOAHVWoC1ACPNwR+lEAA5NQQBSo4BWoZiAOOsnVKhkDqgAFEAI4aIoqy-gAHuaOirAAcio0gAUBChQPqUDgqo2JQAARAAAjGyRCFoAAWih8oqc7ABocgKBSGFRrhUCzlSADC4jchSUD2hAxJgRB0gADzwYovGWqMg6rMJgmDgAfNJyxceByQ6PxgGCXWmaiXGnY5EJybSZJsnItxCl8QJCi8apibic2pSrOZWmWdpLa6ZJYAVkAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 3.

---

다음 조건을 만족하는 Score 타입을 구현하세요

- Score 타입은 점수를 나타내기 위한 문자열 타입으로 '${숫자}-${숫자}'형식을 갖습니다'
  - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
  - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=true&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAygMYD2ATgKZSADC4KHjJgNrWAQNcqAOQcApY2AC09Zuy7dAAuNRACBOAMIcA+nVEAZDZ0AtDYAY6qIBBxwDqrsQAnjgF9G5gHnHAOh1QA5ABIA3gAZAAb2AGRagBGN4AydYADk4Aa41CAqBMqAL4Srp4+-sFhkVEOgKhrgLtDJIBoNYCtQ4ATTZgOYFBQUmwAHgCUUABEvhJutQA0dQDMEgBMLXVuEgAstVCALuOAD+1QaYA7C2EwlnLchQB0JWVQlTWALaOACU2AvVNhqoALo4AjzVCACi1QZoA1nSq0gDRjUCpQgGOjBZjLIMBgYKBQEACKAFcAJYALzQUEAIqOADPawoAVecAOy0aFThESiKAfL4-CAAFTYAGcAC7gwA3o3pvLRwoBXppIgBaZwA2C5QDCYoIBKsaO9mRlCCUEAUqOvdGfIEAWwADqwCVAXFAAKIARwBAEMADataUVEVsBgE1XqzUEtUEtgAOwAJnidRqtQAxZV4jhRKAAMxYTCFdQAAgSAJ4aiQMAAWyqVxoA5vjgACCUClXjagBuL7MI2EqAEhi+KAAXjqvgAnI142Akym050s3UAKwSXy+QvFiVptrl2r52sJ+uphj9ZudCQADjrTGTDYYFebAHYuoWwN6NVBcYSAMIKu148sQFZqy0Em0xtgAHi3eoNxrN+8YrDYrVnbCYjs7vgAfI-mpvddbbQej1qT6a8eeZCvVMfVve9S2fV9Sm-AlD3ffUKkNP8AMva8QLvTs2ggt9t1g7dfzPC92FQjV0LTfosKguDcOPBDT3-QigJvUjR2fMA0ATIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=true&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAygMYD2ATgKZSADC4KHjJgNrWAQNcqAOQcApY2AC09Zuy7dAAuNRACBOAMIcA+nVEAZDZ0AtDYAY6qIBBxwDqrsQAnjgF9G5gHnHAOh1QA5ABIA3gAZAAb2AGRagBGN4AydYADk4Aa41CAqBMqAL4Srp4+-sFhkVEOgKhrgLtDJIBoNYCtQ4ATTZgOYFBQUmwAHgCUUABEvhJutQA0dQDMEgBMLXVuEgAstVCALuOAD+1QaYA7C2EwlnLchQB0JWVQlTWALaOACU2AvVNhqoALo4AjzVCACi1QZoA1nSq0gDRjUCpQgGOjBZjLIMBgYKBQEACKAFcAJYALzQUEAIqOADPawoAVecAOy0aFThESiKAfMAAFwAngAHDgAOSgAF4oG4oAAfPyUqCdGltGn9GkAVhpADYaQB2GkADhpAE4ANxYvEcRisDikgAGrgJMVlUSlwu+IF+ABU2ABnTHgwA3o3pvLRwoBXppIgBaZwA2C5QDCYoIBKsaO9mRlCCUEAUqOvdGfIEAW1xrExUBcUAAogBHAEAQwANq0QxV8QxMXGE2wk-HMWwAHYAE01KcTmIAYjHNRwolAAGYsJg+uoAARx+IkDAAFjHo9mAOZa4AAzFA6Oa2rK5hZ7VQTEMXwkuq+fmNEdgMcTqd00m1ZkSXy+JcrwNThkbhe74X7ycMJkbzoSHl7pjjg8MVkbzldJci-FQDXagDCkbLTVZwgFZ40LEshzYAAeMC00xDNszzKDxXYVomzYJhKwvXwAD4cOaUDUyTCCyxgoj4IqTNc01ZCZDYNDRUwi9OjwgjSlgpMyMLBDqNoiUGPxJjD1YwjCy4uCeKQlD6MnRisKnfoRPY8jxPTSjEJo6SBIw+TnzwsA0GFIA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
