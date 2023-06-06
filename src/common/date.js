export function fn1(){
    console.log(1);
};

export function fn2(){
    console.log(2);
}

export function fn3(){
    console.log(3);
}

/**
 * 时间格式化
 * @param {*} time 13位时间戳 || date字符串（能转化成new Date的数据均可）
 * @param {*} fmt 格式化的格式 'yyyy', 'yyyy-MM-dd', 'yy-MM-dd', 'yyyy-MM-dd hh:mm:ss', ...(按需求自己定义格式)
 *       fmt给一个默认参数
 * @returns {String}
 */
export function formatDate(time, fmt="yyyy-MM-dd hh:mm:ss") {
    if (!time) {
        return "";
      }
      const date = new Date(time);
      const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").slice(4 - RegExp.$1.length)
        );
      }
      for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          const str = o[k] + "";
          fmt = fmt.replace(
            RegExp.$1,
            str.padStart(RegExp.$1.length,"0")
          );
        }
      }
      return fmt;
}