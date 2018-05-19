import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + ~~time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'https://github.com/icodeajk/icodeajk.github.io/raw/master/images/mePhoto.png';

    state.list.push(
      Object.assign({ name: 'icodeajk', avatar: avatar }, plan)
    )
  },
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
