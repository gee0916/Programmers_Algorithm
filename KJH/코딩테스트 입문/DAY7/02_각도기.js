// DAY7
// 각도기

function solution(angle) {
    if(angle === 180) {
        return 4
    } else if (angle > 90) {
        return 3
    } else if (angle === 90) {
        return 2
    } else
        return 1
}

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.02ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.02ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.6MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.02ms, 33.3MB)
*/