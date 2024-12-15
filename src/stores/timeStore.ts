// src/stores/timeStore.ts
import { createId } from '@/utils/id';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface ILog {
  id: string
  startTime: string
  endTime: string
  duration: number
  durationDescription: string
}

export const useTimeStore = defineStore('timeStore', () => {
  const log = ref<ILog[]>([]);  // Store logs of time differences

  function removeLogItem(item: ILog) {
    const foundIndex = log.value.findIndex(i => i.id === item.id)
    if (foundIndex >= 0) {
      log.value.splice(foundIndex, 1)
    }
  }

  function clearAllLogs() {
    log.value.splice(0, log.value.length)
  }

  function logTime(value: ILog) {
    log.value.unshift(value)
  }

  function parseTime(time: string) {
    const [hours, minutes] = time.split(':').map(Number);
    return { hours, minutes };
  }

  function convertMinutesToHoursAndMinutes(value: number) {
    // Convert the difference back to hours and minutes
    const resultHours = Math.floor(value / 60).toString().padStart(2, '0');
    const resultMinutes = (value % 60).toString().padStart(2, '0')

    return `${resultHours}:${resultMinutes}`;
  }

  function calculateTimeDifference(time1: string, time2: string) {
    const { hours: hours1, minutes: minutes1 } = parseTime(time1);
    const { hours: hours2, minutes: minutes2 } = parseTime(time2);

    // Convert both times to total minutes
    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    // Calculate the difference in minutes
    let differenceInMinutes = Math.abs(totalMinutes2 - totalMinutes1);

    // Add to the log
    logTime({
      id: createId(),
      startTime: time1,
      endTime: time2,
      duration: differenceInMinutes,
      durationDescription: convertMinutesToHoursAndMinutes(differenceInMinutes),
    })
  };

  return {
    log,
    removeLogItem,
    clearAllLogs,
    convertMinutesToHoursAndMinutes,
    calculateTimeDifference,
  };
});
