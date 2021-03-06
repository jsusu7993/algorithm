// 배열의 사이즈를 제한할 때 사용한다.
// ex) 5개의 요소를 가진 배열에서 2개만 남기고 싶을 때
// 배열.length = 2 로 지정하여 배열의 크기를 2로 줄일 수 있다.
// (const 일때에도 적용된다.)

const arr = [1, 2, 3, 4, 5];

console.log(arr);
// => [1,2,3,4,5]

arr.length = 2;

console.log(arr);
// => [1,2]
