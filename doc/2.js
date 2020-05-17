/**
 * 1.一个字节是8个位 一个字节表示的数字是0~255 00000000~11111111
 * 1.大端序和小端序
 */
let buffer = Buffer.from([0b00000001, 0b00000000]);
//console.log(buffer);// 0b10 010 10  0x10 
console.log(Math.pow(2, 8));

console.log(buffer.readUInt16BE(0));// 000000001000000000
console.log(buffer.readUInt16LE(0));// 000000000000000001

function getLength(buffer) {
    debugger
    //如果 x<=125 x就是数据的长度
    //如果 x===126 后面的2个字节才是真正的数据长度
    //如果说x===127 后面的8个字节表示真正的数据长度
    const byte = buffer.readUInt8(0);//变成10进制
    const str = byte.toString(2);//变成2进制
    let length = parseInt(str.substring(1), 2);
    if (length === 126) {
        length = buffer.readUInt16BE(1);
    } else if (length === 127) {
        length = buffer.readBigUInt64BE(1);
    }
    return length;

}
console.log(getLength(Buffer.from([0b11111111,
    0b00000000, 0b00000000,
    0b00000000, 0b00000000,
    0b00000000, 0b00000001,
    0b00000000, 0b00000000])));


