function isValid(s: string): boolean {
    const match = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const stack: string[] = [];
    let read = 0;

    while(read < s.length) {
        if (stack.length === 0) {
            stack.push(s[read]);
        } else {
            if (match[stack[stack.length - 1]] === s[read]) {
                stack.pop();
            } else {
                stack.push(s[read]);
            }
        }
        read++;
    }

    return read === s.length && stack.length === 0;
};