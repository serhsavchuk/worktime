<template>
  <div>
    <div class="card">
      <div class="total-section">
        <p>Total worktime: <span :class="{'success': totalWorktime !== '00:00'}">{{ totalWorktime }}</span> hr.</p>
        <div>
          <UIKitButtonRemove @click="clearJournal()"> Wipe </UIKitButtonRemove>
        </div>
      </div>
      <table id="journal">
        <thead>
          <tr>
            <th>#</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Worked time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in journalRecordsData" :key="`record-${index}`">
            <td>{{index + 1}}</td>
            <td>{{record.startTime}}</td>
            <td>{{record.endTime}}</td>
            <td>{{record.currentWorktime}}</td>
            <td>
              <UIKitButtonRemove @click="deleteRecord(index)">
                <IconRemove />
              </UIKitButtonRemove>
            </td>
          </tr>
          <tr v-if="journalRecordsData.length === 0">
            <td colspan="5" class="text-center text-muted fw-500">Enter data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import times from "@/helpers/times.js";
export default {
  name: 'HoursLog',
  data() {
    return {
      totalWorktime: '00:00'
    }
  },
  computed: {
    journalRecordsData() {
      return this.$store.getters['time_list/getJournalRecords']
    }
  },
  watch: {
    journalRecordsData: {
      immediate: true,
      deep: true,
      handler(newData){
        this.sumJournalRecordsCurrentTime(newData);
      }
    }
  },
  methods: {
    deleteRecord(index) {
      this.$store.commit('time_list/removeRecordByIndex', index)
      console.log('del', index)
    },
    sumJournalRecordsCurrentTime(recordsData){
      const timesData = recordsData.map(el => el.currentWorktime);
      let total = 0;
      timesData.forEach(el => { total += times.hoursToSeconds(el) });
      this.totalWorktime = times.secondsToTime(total);
    },
    clearJournal(){
      this.$store.commit('time_list/clearJournalRecords');
    }
  },
}
</script>

<style lang="scss" scoped>
#journal {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  th {
    @include sticky;
    top: 36px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: $green-color;
    color: white;
  }
  tr:nth-child(even){background-color: #f2f2f2;}
  tr:hover {background-color: rgba(221, 221, 221, 0.233);}
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }
}
.total-section {
  @include sticky;
  background-color: $light-color;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.success {
  color: $green-color;
  font-weight: 700;
}
.card {
  @include card;
}
</style>
