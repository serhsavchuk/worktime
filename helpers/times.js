export default {
  hoursToSeconds(time){
    const newTime = time.split(':');
    return parseInt(newTime[0] * 60) + parseInt(newTime[1]);
  },
  secondsToTime(seconds){
    const remainder = seconds % 60;
    const hours = (seconds - remainder) / 60;

    return `${hours > 9 ? hours : '0' + hours}:${remainder > 9 ? remainder : '0' + remainder}`;
  },
}