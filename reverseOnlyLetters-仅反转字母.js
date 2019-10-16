/*
示例 1：

输入："ab-cd"
输出："dc-ba"
示例 2：

输入："a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
示例 3：

输入："Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
 

提示：

S.length <= 100
33 <= S[i].ASCIIcode <= 122 
S 中不包含 \ or "
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
	let todo = -1;
	let listArr = S.replace(/[^a-zA-Z]/g, '').split('').reverse();

	return S.split('').map(item => {
		if(item.toLowerCase() >= 'a' && item.toLowerCase() <= 'z') {
			todo++;
			return listArr[todo];
		} else {
			return item;
		}
	}).join('');
};

// let str = 'ab-cd';
// let str = 'a-bC-dEf-ghIj';
let str = 'Test1ng-Leet=code-Q!';

let res = reverseOnlyLetters(str);

console.log(res);