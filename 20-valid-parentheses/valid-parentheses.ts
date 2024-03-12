function isValid(s: string): boolean {

    // !! edge case
    if (s.length % 2 !== 0) return false;

    const match = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');

    const stack: string[] = [];

    for(let read=0; read<s.length; read++) {
        if (stack.length === 0) {
            stack.push(s[read]);
        } else {
            if (map.get(stack[stack.length - 1]) === s[read]) {
                stack.pop();
            } else {
                stack.push(s[read]);
            }
        }
    }

    return stack.length === 0;
};