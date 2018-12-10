import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: [
      {
        date: 1,
        contains: 'Godis!',
        id: 101
      },
      {
        date: 2,
        contains: 'Godis!',
        id: 102
      },
      {
        date: 3,
        contains: 'Godis!',
        id: 103
      },
      {
        date: 4,
        contains: 'Godis!',
        id: 104
      },
      {
        date: 5,
        contains: 'Godis!',
        id: 105
      },
      {
        date: 6,
        contains: 'Godis!',
        id: 106
      },
      {
        date: 7,
        contains: 'Godis!',
        id: 107
      },
      {
        date: 8,
        contains: 'Godis!',
        id: 108
      },
      {
        date: 9,
        contains: 'Godis!',
        id: 109
      },
      {
        date: 10,
        contains: 'Godis!',
        id: 110
      },
      {
        date: 11,
        contains: 'Godis!',
        id: 111
      },
      {
        date: 12,
        contains: 'Godis!',
        id: 112
      },
      {
        date: 13,
        contains: 'Godis!',
        id: 113
      },
      {
        date: 14,
        contains: 'Godis!',
        id: 114
      },
      {
        date: 15,
        contains: 'Godis!',
        id: 115
      },
      {
        date: 16,
        contains: 'Godis!',
        id: 116
      },
      {
        date: 17,
        contains: 'Godis!',
        id: 117
      },
      {
        date: 18,
        contains: 'Godis!',
        id: 118
      },
      {
        date: 19,
        contains: 'Godis!',
        id: 119
      },
      {
        date: 20,
        contains: 'Godis!',
        id: 120
      },
      {
        date: 21,
        contains: 'Godis!',
        id: 121
      },
      {
        date: 22,
        contains: 'Godis!',
        id: 122
      },
      {
        date: 23,
        contains: 'Godis!',
        id: 123
      },
      {
        date: 24,
        contains: 'Gurka!',
        id: 124
      }
    ],
  },
  mutations: {
    test: function(state, date) {
      state.days.splice(state.days.indexOf(date), 1);
    }
  },
  actions: {
  }
})
