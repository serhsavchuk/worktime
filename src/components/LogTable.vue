<template>
    <table class="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th colspan="5">
                    <div class="row g-3">
                        <div class="col-12 col-md-6">Всього відпрацьовано: <span class="text-success">{{ logTotalTime }}</span></div>
                        <div class="col-12 col-md-6 text-md-end">
                            <button type="button" class="btn btn-sm btn-outline-danger"
                                @click="onClearAllLogsButtonClick">
                                <span class="d-flex gap-2 align-items-center justify-content-center">
                                    <IconTrash />
                                    <span>Очистити таблицю</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </th>
            </tr>
            <tr>
                <th scope="col" class="col text-center">№</th>
                <th scope="col" class="col-4">Початок</th>
                <th scope="col" class="col-4">Завершення</th>
                <th scope="col" class="col-4">Відпрацьовано</th>
                <th scope="col" class="col" style="min-width: 51px;"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="log.length" v-for="(item, index) in log" :key="item.id">
                <th scope="row" class="text-center">{{ index + 1 }}</th>
                <td>{{ item.startTime }}</td>
                <td>{{ item.endTime }}</td>
                <td>{{ item.durationDescription }}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-danger"
                        @click="onDeleteItemButtonClick(item, index)">
                        <IconTrash />
                    </button>
                </td>
            </tr>
            <tr v-else>
                <td colspan="5" class="text-center">
                    Немає даних
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useTimeStore, type ILog } from '@/stores/timeStore';
import { computed } from 'vue';
import IconTrash from './icons/IconTrash.vue';
const { log, convertMinutesToHoursAndMinutes, clearAllLogs, removeLogItem } = useTimeStore();

const logTotalMinutes = computed(() => log.map(i => i.duration).reduce((acc, curr) => acc + curr, 0))
const logTotalTime = computed(() => convertMinutesToHoursAndMinutes(logTotalMinutes.value))

function onDeleteItemButtonClick(item: ILog, index: number) {
    const confirmed = confirm(`Видалити запис №${index + 1} ${item.startTime} - ${item.endTime} (${item.durationDescription})?`);
    if (confirmed) {
        removeLogItem(item)
    }
}

function onClearAllLogsButtonClick() {
    if (log.length === 0) { return }

    const confirmed = confirm("Видалити всі записи з таблиці?");
    if (confirmed) {
        clearAllLogs()
    }
}

</script>