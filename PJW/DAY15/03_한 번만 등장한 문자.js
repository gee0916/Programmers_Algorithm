// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  return [
    ...new Set(
      [...s].filter((char) => s.indexOf(char) === s.lastIndexOf(char))
    ),
  ]
    .sort()
    .join("");
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.3MB)
// 테스트 5 〉	통과 (0.07ms, 32.9MB)
// 테스트 6 〉	통과 (0.05ms, 33MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 31.2MB)
// 테스트 10 〉	통과 (0.07ms, 31.2MB)
