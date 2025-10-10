import recordStatus from '../components/RecordStatus';
import moment from 'moment';

export function recordStatusFormat(status, defaultValue = '-'){
  if(!status || status === '' || status === undefined || status === null){
    return defaultValue;
  }

  for(const rs of recordStatus){
    if(rs.code === status){
      return rs.description;
    }
  }

  return defaultValue;
}

export function timestampFormat(timestamp, defaultValue = '-', pattern = 'DD-MMM-YYYY HH:mm:ss'){
  if(!timestamp || timestamp === '' || timestamp === undefined || timestamp === null){
    return defaultValue;
  }

  return moment(timestamp).format(pattern);
}