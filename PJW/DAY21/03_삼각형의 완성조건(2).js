// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  let cnt = 0;
  const maxNum = Math.max(...sides);
  const minNum = Math.min(...sides);
  //가장 긴 변이 이미 나와있는 경우
  for (let i = maxNum - minNum + 1; i <= maxNum; i++) {
    cnt++;
  }
  //가장 긴 변이 아직 안나와있는 경우
  for (let i = maxNum + 1; i < maxNum + minNum; i++) {
    cnt++;
  }
  return cnt;
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.12ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.11ms, 33.6MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.13ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
