#!/usr/bin/env node

//执行示例：node bin/index.js abc 123
//其它包引入执行示例： cjscmd abc 123
//变为全局命令：切换到当前项目根目录，执行 npm install . -g 命令即可
const pa = process.argv;
const argv = pa[pa.length - 1];

const CWD = process.cwd();

console.log("所有参数",pa)
console.log("最后一个参数：",argv)
console.log("当前命令执行目录cwd=", CWD)

