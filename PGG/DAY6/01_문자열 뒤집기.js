function solution(my_string) {
    return my_string.split("").reverse().join("");
}

/*
var splitStr = str.split("");
var revArr = splitStr.reverse();
var joinArr = revArr.join("");
return joinArr;
*/

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)