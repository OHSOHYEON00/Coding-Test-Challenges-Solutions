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

    const arr = s.split('')

    const stack: string[] = [];

    for(let read=0; read<arr.length; read++) {
        if (stack.length === 0) {
            stack.push(arr[read]);
        } else {
            if (map.get(stack[stack.length - 1]) === arr[read]) {
                stack.pop();
            } else {
                stack.push(arr[read]);
            }
        }
    }

    return stack.length === 0;
};