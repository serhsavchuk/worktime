export const state = () => ({
  timeJournal: []
})

export const mutations = {
  addRecordToJournal(state, record) {
    state.timeJournal = [record, ...state.timeJournal]
  },
  removeRecordByIndex(state, index){
    state.timeJournal.splice(index, 1);
  },
  clearJournalRecords(state) {
    state.timeJournal = []
  }
}

export const getters = {
  getJournalRecords(state) {
    return state.timeJournal;
  }
}