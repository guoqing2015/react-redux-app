/**
 * 获取两个日期之间的天数
 * @param startDay
 * @param endDay
 * @returns {number}
 */
export default function getDayDuration(startDay, endDay) {
  var date1, date2;
  if(typeof startDay == 'string') {
    date1 = new Date(startDay.replace(/-/g, '/'));
  } else {
    date1 = startDay
  }
  if(typeof endDay == 'string') {
     date2 = new Date(endDay.replace(/-/g, '/'));
  } else {
    date2 = endDay;
  }
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}
