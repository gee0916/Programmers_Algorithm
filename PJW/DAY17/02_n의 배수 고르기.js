// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n, numlist) {
  var answer = [];

  for (let i = 0; i < numlist.length; i++) {
    const item = numlist[i];
    if (item % n === 0) {
      answer.push(item);
    }
  }
  return answer;
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
