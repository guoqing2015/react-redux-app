/**
 * 获取时间段
 * startTime 开始时间
 */
export default function getTimeDuration(startTime, endTime, page) {
  let leftSeconds = (endTime - startTime)/1000;
  if(leftSeconds < 0) return 0+'秒';

  let second = parseInt(leftSeconds % 60);//计算剩余的秒数
  let minute = parseInt(leftSeconds / 60 % 60); //计算剩余的分钟数
  let hour = parseInt(leftSeconds / 60 / 60 % 60); //计算剩余的小时数
  let day = Math.floor(leftSeconds / 60 / 60 / 24);
  let msg = "";
  if(day > 0) {
    msg += day + '天'
  }
  if(hour > 0) {
    msg += hour + '小时'
  }
  if(minute > 0) {
    msg += minute + '分钟'
  }
  if(second > 0 ) {
    msg += second + '秒'
  }

  if(page === 'examlist') { //测试页面特殊处理
    if(day>0) {
      msg = day + '天';
      msg += hour + '小时';
      return msg;
    }

    if(hour>0) {
      msg = hour + '小时';
      msg += minute + '分钟';
      return msg;
    }
  }


  return msg;

}
