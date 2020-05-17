
/**
 * 
 * @param {} buffer 字节的数组
 * @param {*} mask  是长度为4的Buffer 4个字节
 */
function unmask(buffer, mask) {
    const length = buffer.length;
    for (let i = 0; i < length; i++) {
        buffer[i] ^= mask[i % 4];
    }
}

let mask = Buffer.from([1, 0, 1, 0]);
let buffer = Buffer.from([0, 1, 0, 1, 0, 1, 0, 1]);
unmask(buffer, mask);
console.log(buffer);
