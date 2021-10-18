
<template>
  <div>
    <div class="card">
      <div class="card-body">
        <p>{{ $t('current-worktime') }}: <span :class="{'success': currentWorktimeData.length}">{{currentWorktimeData.length ? currentWorktimeData : $t('none')}}</span></p>
        <div class="input-group">
          <div>
            <p class="text-center fs-20 fw-500 text-muted">{{ $t('start-work') }}</p>
            <UIKitInputMask ref="typeBox" v-model="startTime" :placeholder="'hh:mm'" class="input-field" :isError="isNameInErrorsArray('startTimeFormat')" />
          </div>
          <div>
            <p class="text-center fs-20 fw-500 text-muted">{{ $t('end-work') }}</p>
            <UIKitInputMask v-model="endTime" :placeholder="'hh:mm'" class="input-field" :isError="isNameInErrorsArray('endTimeFormat')" />
          </div>
        </div>
        <div class="errors-container">
          <p class="error-message" v-if="isNameInErrorsArray('endTimeCanNotBeLessThanStartTime')">{{ $t('end-time-cant-be-less-than-start-time') }}</p>
        </div>
        <div class="buttons-section">
          <UIKitButtonApply @click="saveRecord()" :disabled="errors.length > 0" > {{ $t('save') }} </UIKitButtonApply>
          <UIKitButtonRemove @click="clearWidgetData();" class="btn-remove"> {{ $t('clear') }} </UIKitButtonRemove>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import times from "@/helpers/times.js";
export default {
  name: 'CounterWidget',
  data () {
    return {
      startTime: '',
      endTime: '',
      errors: [],
    }
  },
  computed: {
    currentWorktimeData () {
      return this.calculateCurrentWorktimeData(this.startTime, this.endTime)
    }
  },
  watch: {
    startTime: {
      immediate: true,
      handler(newValue) {
        this.validate(newValue, 'startTimeIsEmpty')
        this.isRightTimeFormat(newValue, 'startTimeFormat')
      }
    },
    endTime: {
      immediate: true,
      handler(newValue) {
        this.validate(newValue, 'endTimeIsEmpty')
        this.isRightTimeFormat(newValue, 'endTimeFormat')
      }
    },
  },
  methods: {
    calculateCurrentWorktimeData (startTime, endTime) {
      if (startTime.length !== 5 || endTime.length !== 5) { return '' }
      
      const startSeconds = times.hoursToSeconds(startTime);
      const endSeconds = times.hoursToSeconds(endTime);

      if(endSeconds < startSeconds) {
        this.addErrorName('endTimeCanNotBeLessThanStartTime');
        return '';
      } else {
        this.removeErrorName('endTimeCanNotBeLessThanStartTime');
      }

      let totalSeconds = times.hoursToSeconds(endTime) - times.hoursToSeconds(startTime);
      return times.secondsToTime(totalSeconds);
    },
    addErrorName(name){
      if(this.errors.findIndex(el => el === name) === -1)
        this.errors = [...this.errors, name];
    },
    removeErrorName(name){
      const errorIndex = this.errors.findIndex(el => el === name);
      if(errorIndex >= 0){
        this.errors.splice(errorIndex, 1);
      }
    },
    isNameInErrorsArray(name){
      return this.errors.findIndex(el => el === name) >= 0;
    },
    saveRecord(){
      this.$store.commit('time_list/addRecordToJournal', {
        startTime: this.startTime,
        endTime: this.endTime,
        currentWorktime: this.currentWorktimeData,
      });
      this.clearWidgetData();      
      this.$nextTick(() => {
        this.$refs.typeBox.$el.focus();        
      })
    },
    clearWidgetData(){
      this.startTime = '';
      this.endTime = '';
    },
    validate(val, name){
      if(val.length !== 5)
        this.addErrorName(name)
      else this.removeErrorName(name)
    },
    isRightTimeFormat(val, name){
      if(val.length !== 5) { return }
      
      if(times.isTimeValid(val))
        this.removeErrorName(name)
      else this.addErrorName(name)
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  @include card;
  @include sticky;
  display: flex;
  max-width: fit-content;
  min-width: 280px;
  top: 20px;
}
.card-body {
  width: 100%;
}
.input-group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
}
.input-field {
  max-width: 120px;
}
.buttons-section {
  display: flex;
  align-items: center;
  .btn-remove {
    font-size: 14px;
    padding: 10px 16px;
    margin-left: 10px;
  }
}
.success {
  color: $success-color;
  font-weight: 700;
}
.errors-container {
  padding: 10px 0;
  .error-message {
    color: $danger-color;
    font-size: 13px;
  }
}
</style>
