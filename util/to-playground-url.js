import lzs from "lz-string";
import fs from "fs";
export const TYPESCRIPT_PLAYGROUND = "https://www.typescriptlang.org/play";

const playgroundOptions = {
  strict: true,
  ts: "5.1.6",
};

export function toPlaygroundUrl(code, config = playgroundOptions) {
  return `${TYPESCRIPT_PLAYGROUND}?${Object.entries(config)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&")}#code/${lzs.compressToEncodedURIComponent(code)}`;
}

const MISSION_DIR = "missions";
function main() {
  const dayDirs = fs.readdirSync(MISSION_DIR);

  dayDirs.forEach((dayDir) => {
    const files = fs.readdirSync(`${MISSION_DIR}/${dayDir}`);
    const isCodingQuizExist = files.includes("coding-quiz");
    if (!isCodingQuizExist) {
      return;
    }

    const quizDirs = fs
      .readdirSync(`${MISSION_DIR}/${dayDir}/coding-quiz`)
      .filter((it) => !["quiz.md", "README.md"].includes(it));

    const playGroundUrls = quizDirs.map((quizDir) => {
      const questionFile = fs.readFileSync(
        `${MISSION_DIR}/${dayDir}/coding-quiz/${quizDir}/question.ts`
      );
      const answerFile = fs.readFileSync(
        `${MISSION_DIR}/${dayDir}/coding-quiz/${quizDir}/answer.ts`
      );

      const questionCode = questionFile.toString();
      const answerCode = answerFile.toString();

      const questionPlaygroundURL = toPlaygroundUrl(questionCode);
      const answerPlaygroundURL = toPlaygroundUrl(answerCode);

      return {
        questionPlaygroundURL,
        answerPlaygroundURL,
      };
    });

    const Text = `
${playGroundUrls
  .map(
    (v, idx) => `
### Quiz ${idx + 1}.
---
**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="${v.questionPlaygroundURL}" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="${v.answerPlaygroundURL}" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

`
  )
  .join("")}
`;

    fs.writeFileSync(`${MISSION_DIR}/${dayDir}/coding-quiz/quiz.md`, Text);
  });

  return;

  examDirs.forEach((examDir) => {
    const questionFile = fs.readFileSync(`${ROOT_DIR}/${examDir}/question.ts`);
    const answerFile = fs.readFileSync(`${ROOT_DIR}/${examDir}/answer.ts`);

    const questionCode = questionFile.toString();
    const answerCode = answerFile.toString();

    const questionPlaygroundURL = toPlaygroundUrl(questionCode);
    const answerPlaygroundURL = toPlaygroundUrl(answerCode);

    const README = `
**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="${questionPlaygroundURL}" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="${answerPlaygroundURL}" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>
`;

    fs.writeFileSync(`${ROOT_DIR}/${examDir}/README.md`, README);
  });
}

main();
