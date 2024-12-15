<template>
    <div class="row g-3 mb-3">
        <div class="col-md-6">
            <label for="time1" class="form-label">Початок праці:</label>
            <input id="time1" v-model="time1" type="time" class="form-control" autofocus
                @keyup.enter="handleInputKeyupEnter" />
        </div>

        <div class="col-md-6">
            <label for="time2" class="form-label">Кінець праці:</label>
            <input id="time2" v-model="time2" type="time" class="form-control" @keyup.enter="handleInputKeyupEnter" />
        </div>

        <div class="col-12">
            <button @click="onCalculateTimeDifferenceButtonClick" class="btn btn-primary w-100">
                <span class="d-flex gap-2 align-items-center justify-content-center">
                    <IconPlusCircle />
                    <span>Додати запис</span>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTimeStore } from '@/stores/timeStore';
import { ref } from 'vue';
import IconPlusCircle from './icons/IconPlusCircle.vue';

const { calculateTimeDifference } = useTimeStore();

const time1 = ref<string>('08:00');  // User input for first time
const time2 = ref<string>('17:00');  // User input for second time

function onCalculateTimeDifferenceButtonClick() {
    calculateTimeDifference(time1.value, time2.value)
}

function handleInputKeyupEnter() {
    onCalculateTimeDifferenceButtonClick()
}

</script>