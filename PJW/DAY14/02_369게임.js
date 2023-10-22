// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
  var answer = 0;
  const strOrder = String(order);
  for (let i = 0; i < strOrder.length; i++) {
    const item = strOrder[i];
    if (item === "3" || item === "6" || item === "9") {
      answer += 1;
    }
  }

  return answer;
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.5MB)
// 테스트 11 〉	통과 (0.04ms, 33.4MB)
// 테스트 12 〉	통과 (0.04ms, 33.4MB)
// 테스트 13 〉	통과 (0.04ms, 33.4MB)
// 테스트 14 〉	통과 (0.04ms, 33.4MB)
