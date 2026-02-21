function solution(numbers) {
    return answer = numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0) / numbers.length;
}