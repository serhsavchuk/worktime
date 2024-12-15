<template>
  <main class="p-3 p-md-5">
    <h2>Worktime</h2>

    <TimeForm />
    <HistoryTable />
  </main>
</template>

<script setup lang="ts">
import HistoryTable from './components/LogTable.vue';
import TimeForm from './components/TimeForm.vue';

</script>
