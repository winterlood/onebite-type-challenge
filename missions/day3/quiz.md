# Day 3 Quiz

오늘은 드디어 코딩 퀴즈입니다!  
강의와 똑같은 환경에서 타입스크립트 코드 실습을 해볼 수 있는  
**TypeScript Playground**를 활용해 코드 퀴즈를 준비해 봤어요!

아래의 퀴즈를 확인하시고, 조건에 맞는 코드를 작성하셨다면  
작성하신 코드를 캡쳐해서 댓글로 달아주세요! 그럼 미션 성공!

### Quiz 1.

---

다음 요구사항을 만족하는 **4개의 타입을 정의하세요**

- Any 타입은 사용할 수 없습니다.
- Nums 타입은 숫자만 담을 수 있는 배열 타입입니다.
- Colors 타입은 문자열만 담을 수 있는 배열 타입입니다.
- Coords 타입은 [숫자, 숫자] 형태의 배열만 허용하는 타입입니다.
- Info 타입은 [숫자, 문자열] 형태의 배열만 허용하는 타입입니다.

```typescript
type Nums = never;
type Colors = never;
type Coords = never;
type Info = never;
// 위 4개의 타입을 각각 어떻게 구현해야 할까요?
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAcgFcAtgGdIAXkgA7WwDdbACcAbgsbewBhAHsAG2igj28-QNDwu0gYhIATJN8A4LCrDIBJHwAzaK981LDwUAhoOG4+ITQWHEAA3sAGRcAUppbAEXGBQUANVexIQBBxwB1VyEBKscAR5sAdDshAQcnARAnIQAwhrhHAE6HIQBFVxkhAMdHAVqGDADoWDilifDlFVUABycAXLpaAGhkFSEAI8cAecfe0h4gFDxgzGaCmcAASxc1gS5kgAG9IABRACOTgAhrEvqiAB52ADG5i+Dmi5gAgj5LJAAL6QcpBaIuSAAIgAAsVbABaIkACxxsVsPgA5rY3MAnOZobE3Gy6kToj43IifK4AEbBNwALkcrjysAAjF8AExfADMXwALF8AKyoMJKlWIpXxRJ6mLuw1soK2bJsr5s0V+kWB9ka2JOWxsx3gZ2qyBKnLQnxY8wSz3RHKGq2QB1O5WJ1OVPVlSrVWBswAu41xABpr4dNAHY4+l7ESsW4JZWoGjCbYSQAeclUmnDg2QAA+mTiCQ806yQVyU8g5eiAD51x9ewTieZBxjsbFx+4vuqXFqgrBUJvt5A+3uD5icYOvXOvqqgqnRdfbzv+0Oh4vouuRfLA56XmemrBDeW7-o+QHHmuYGft+UEXjBm7gHGQA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAcgFcAtgGdIAXkgA7VwCNbACdYVABuCxt7AGEAewAbWKCPbzdzIIBLHwBzUIirO0g4pIATFLg-F0CggBpfAODwyMKASR8AM1ivODTMnLrK6qbwUAhoOG4+ITQWHEAA3sAGRcAUpsnAEXGBQUANVexIQBBxwB1VyEBKscAR5sAdDshAQcnARAnIQAwhrk3AE6HIQBFVxkhAMdHAVqGDADoWBwpMR8HJFKpAAOTgBcuyZ1MGQQAR44AecZh0h4gFDxgzGaCmcAZFzWJLmSAAb0gAFEAI5OACG8Tq5IAHnYAMbmOoOWLmACCPkskAAvpB2kFYi5IAAiAACBVsAFoWQALOnxWw5WxuYBOcwZeJuCURcAs2I+NL1KrBNwALkcrnKsAAjHUAEx1ADMdQALHUAKxNY2m4nGxLJG1xEP2iVBWwlCV1CXZaNquOS-zxJy2CX+k1m42lLI08wasOxUr2j2QP0RANmrKdG1tTrdWASwAu41xABprKedAHZhrLICyaW4Nc2oBTmbY2QAeTk8vmzu2QAA+RQSSQ8q+KQTKK8gjdiAD5DzVx0zWeZp1TafFF+4Bg0Qqhj6fIBOL1fqXTp+GN3VelkuTPieZ6TjO17ftuZR1LAgzBA+FpBMBr7vlOl4QbeB4wQB-TmkMx7gE0QA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 2.

---

다음 요구사항을 만족하는 **Course 타입을 정의하세요**  
(이 타입은 마치 인프런에서 활용할 것 같군요?)

- Any 타입은 사용할 수 없습니다.
- Course 타입은 온라인 강의 정보를 포함하는 객체 타입을 정의합니다.
- 문자열을 저장하는 name 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 price 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 student_cnt 프로퍼티를 가져야 합니다.
- 문자열을 저장하는 author 프로퍼티를 가져야 합니다.
- 문자열 배열을 저장하는 related_courses 프로퍼티를 가져야 합니다.

```typescript
type Course = never;
// Course 타입을 어떻게 구현해야 할까요?
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAwgHsArgCcAzvYC8kAHa2AG62bgDcZqAQ0HDcfEJoLDiAAb2ADIuAKU2xgCLjAoKAGqvYkIAg44A6q5CAlWOAI82AOh2QgIOTgIgTkIAYQ1y5gCdDkIAiq4yQgGOjgK1DBgB0LBxSxPhyiqqAA5OALl2xADQyCpCAEeOAPOML0jyAoeMGxtCmAJYAttZObuaQAN6QAKIAji4AhgA2y-cAHnYAxubLAByTnMAEE-JZIABfSAAMzcTlOkAARAABKx2AC0vwAFu83rY-ABzWweYAuczHN4eZHhcC-Jx+DzXBnuLwALkcrk8PluUH8L1Otk5yNKu0ggmwNUAGeMqQCcXRlAAMLu0AJUOCQC9nYAOpeRi351jcx1+wsgAFYTQAGS26yCQZkuAAmhPMAH1fn5zJyAIzmgAcAE5rZAXhScZcRYAXca4gA01yAAH0gAHVju6Qm8nE57Tr+W5bG8XuZbPbXdyvB5ObB+TbRZBxZKZfKMoAazsAhqPawNVwCfY5BACCrgAMOzWAFdHSEVSoAE8cAKD1qrWQQDVM5BAB41gBlxrM21C6qF0jH2AAqpPMDhepcgvgrNu+f3MAB5gWCIZfnGzbAA+J+B8+2f6XysPZ7vS8Aa1sSwnFhLlH2WZE-EFWxkTjFF9UNGC4ORO1HXdV13Vg+NkWDcxQzcLCURzPMCyLVkeRpJ9+Vffl30-J5Xjee8S1sWBIOg5E11tcwDWJF83x+D8rwYv8Hx5NiEKNTjlj8FxTgAIxCfjaME+jfyYsSvDY1CnQw8xpP8OTFLcZSz1U4T1OYx82Nw-CDOZXiiVMh5zMvESNJYtjiPzQti0fGkuIc5MiVgVAX3AVBwiAA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAwgHsArgCcAzvYC8kAN5QkAB2AIYAtrYAXJAe5m4AlkEA5gDcgdYJAMZRwS5hAEa2bmmQMeYuACa2QeYA+pk10UF5hcWBIS7mABZObtGxCcklkG62ADYh5rYV9a6eth79cYlJsKhpAL5p4KAQ0HDcfEJoLDiAAb2ADIuAKU2HgCLjAoKAGqvYkIAg44A6q5CAlWOAI82AOh2QQCDk4BECcggAwhriPQAnQ5BACKrjEggDHRwCtQwYAHQsDhSYj4OSKVSAAcnAC5dhwANDIFJBABHjgB5xknSHiAUPGDMZoKZwPEwtZeuZ-JAAKIARxcITG5P5AA87JlzOSAHJOcwAQSClkgG0gADM3E4wpAAEQAASsdgAtJkuqKxtUkgtgJ14mMPPrtpknEFYpA3e4vNFnD6fP5AqEItF9Z9GZBBNgAYAM8ZUgE4um6AAYXGYASocEgF7OwAdS-rSeksjkAKxFgAM5fzpVilWqdQa5miAEZSwAOACclcgHW6vTDgBdxriADTXIAAfSAAdUSUzcYycTgqecCowmUxm3vmizggVK4cgkejccTN0ANZ2AQ1Hc52d4BPscggBBVwAGHdnACujpDen0ACeOAFB6MznIIBqmcgQAPGsAGXHF1KVB8y2MwTXsAAVBZzAcEIvA8SBfFgQJJWlcwAB4FWVVUcP9eYAD4SM7LDbBlHDtwFYVRRwgBrWxLCcTVHDmLxyX1ENbH1UcDQyeJsn4sd9WrKoanqGpRINbsejcWT9WXSZplmANnRIwJyMwqUqNwoURTGIjONsWAePCPiILKQYkjIii9OowyGOIrxzKEkTrOaAoins3TsJw5zjNcszxPKSS6xkryWl8nTSkopz6OC0zzPk3p9WsgYVj8+LHIMpKTIDcyVNXdSNwy8ksuSNYyPAdZwCAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### Quiz 3.

---

다음 요구사항을 만족하는 **User** 타입을 구현하세요

- Any 타입은 사용할 수 없습니다.
- 객체 타입이어야 합니다.
- String 타입의 name 프로퍼티가 있어야 합니다.
- String 타입의 email 프로퍼티가 있어야 합니다.
- 그 외의 String 타입의 동적 프로퍼티들도 추가할 수 있어야 합니다.

```typescript
type User = never;
// User 타입을 어떻게 구현해야 할까요?
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAqgGdbAJ0gBeSADtbANzcAbjNQCGg4bj4hNBYcQADewAZFwBSmyMARcYFBQA1V7EhAEHHAHVXIQEqxwBHmwB0OyEBBycBECchADCGuTMATochAEVXGSEAx0cBWoYMAOhYOKWJ8OUVVQAHJwBcuyIAaGQVIQAjxwB5xmekeQFDxg2NoUwBjAHtvJ3NIAFcXVwAuRyvPSABvKB8AQwBbW1uAIgApQ4AFt5vrMXrZ3q8AJYAGx+ACtAd4AAK2AAeH2s0NsfSO7xBYNR5lcrwAjD9zLZTvjIJA0UTXgAmH4Ac0OhwAJviAL7BIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAqgGdbAJ0gBeSAG8okAHYAhgC2tgBckE7mrgCW-gDmANx+tsGBMQA2EVGxCcmQcADWtpbZ0XHxqGW5SeAAvsngoBDQcNx8QmgsOIABvYAMi4ApTe2AIuMCgoAaq9iQgCDjgDqrkICVY4AjzYA6HZCAg5OAiBOQgBhDXOOAJ0OQgCKrjJCAY6OArUMGAHQsHFLE+HKKqoADk4AuXe0ANDIKkIAI8cAPONfaQ8QCh4wZjNBTABjAD2-iikAAri5XBFnG5PD4-EFQhEAEQAKXhAAt-ITvik0pkiQArcn+AACtgAHiFrBlbDcEcEqSk2dFAgBGIns4UigUFCWuQIAJnFQrl8ulkFlgQAzErhZq1RqACw6uUG-XKwIAVmNlrNwoAbNa7WrgMBIIARmsAsYOQQAps4pAAQtkEADjW4ZgNcBAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
