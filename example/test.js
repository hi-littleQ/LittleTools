// 方法1
// import * as LittleTools from '../src/index.js';
// LittleTools.common.date.fn1()
// // 方法2
// import { common } from '../src/index.js';
// common.date.fn2()
// // 方法3
// import LittleTools3 from  '../src/index.js';
// LittleTools3.common.date.fn3()


import LittleTools3 from  '../src/index.js';


console.log(LittleTools3.common.date.formatDate(new Date()));
console.log(LittleTools3.common.date.formatDate(new Date(), "yyyy-MM-dd"));
console.log(LittleTools3.common.date.formatDate("2022-10-21", "yyyy年MM月dd日 hh时mm分ss秒"));
console.log(LittleTools3.common.date.formatDate("2021-06-05 08:29:05", "yy-M-d h:m:s"));

