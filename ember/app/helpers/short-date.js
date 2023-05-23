import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function([date, startTime, endTime]) {
  let newDate = moment(date, 'YYYY-MM-DD').format('MMM D');
  let newStartTime = moment(startTime, 'HH:mm').format('h:mm a');
  let newEndTime = moment(endTime, 'HH:mm').format('h:mm a');
  return `${newDate} | ${newStartTime}-${newEndTime}`;
});
