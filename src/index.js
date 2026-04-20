function partition(s) {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    function backtrack(start, path) {
        if (start === s.length) {
            result.push(path);
        } else {
            for (let end = start; end < s.length; end++) {
                let substr = s.substring(start, end + 1);
                if (isPalindrome(substr)) {
                    backtrack(end + 1, [...path, substr]);
                }
            }
        }
    }

    let result = [];
    backtrack(0, []);
    return result;
}

let s = "aab";
console.log(partition(s));
