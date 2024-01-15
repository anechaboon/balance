// src/store/modules/checkList/index.js
const state = {
  checkList: null, // หรือข้อมูลเริ่มต้นของคุณ
};



  // getters
  const getters = {};
  

 // src/store/modules/checkList/index.js
const actions = {
  setCheckList({ commit }, payload) {
    commit("SET_CHECK_LIST", payload);
  },
  // อื่น ๆ ที่คุณต้องการจะใช้ในโมดูลนี้
};

  
const mutations = {
  SET_CHECK_LIST(state, payload) {
    state.checkList = payload;
  },
};
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  