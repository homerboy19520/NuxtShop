import axios from 'axios'
export const state = () => {
  return {
    url: '#',
    isPopUpShow: false,
    isBrandsPopUp: false,
    isCityModal: false,
    isFooterInput: false,
    isForm: true,
    calcContent: {
      slides: [
        {
          title: 'Выберите тип устройства:',
          buttons: [
            { chosen: false, text: 'Смартфоны' },
            { chosen: false, text: 'Планшеты' },
            { chosen: false, text: 'Ноутбуки' },
            { chosen: false, text: 'Компьютеры' },
            { chosen: false, text: 'Моноблоки' },
            { chosen: false, text: 'Телевизоры' },
            { chosen: false, text: 'Другие устройства' },
          ],
        },
        {
          title: 'Выберите поломку:',
          buttons: [
            { chosen: false, text: 'Разбит экран' },
            { chosen: false, text: 'Вздулся аккамулятор' },
            { chosen: false, text: 'Полосы на экране' },
            { chosen: false, text: 'Нет звука' },
            { chosen: false, text: 'Запала кнопка' },
            { chosen: false, text: 'Не включается' },
            { chosen: false, text: 'Треснул корпус' },
          ],
        },
        {
          title: 'Где с вами удобно связаться?',
          buttons: [
            { chosen: false, text: 'СМС' },
            { chosen: false, text: 'Whats App' },
            { chosen: false, text: 'По телефону' },
          ],
        },
        {
          title: 'Оставьте контакты для связи:',
          subtitle:
            'Наш сотрудник подготовит решение по вашей проблеме и свяжется с вами в ближайшее время',
          buttons: [{ chosen: false }],
        },
      ],
    },
    isNextButtonError: false,
    isPrevButtonError: false,
    activePage: 0,
    user: {
      name: null,
      phone: null,
      device: null,
      breaking: null,
      callback: null,
    },
    userData: [{ data: null }, { data: null }, { data: null }, { data: null }],
  }
}

export const getters = {
  isBrandsPopUp(state) {
    return state.isBrandsPopUp
  },

  isForm(state) {
    return state.isForm
  },

  isPopUpShow(state) {
    return state.isPopUpShow
  },

  isCityModal(state) {
    return state.isCityModal
  },

  isFooterInput(state) {
    return state.isFooterInput
  },

  calcContent(state) {
    return state.calcContent
  },

  isNextButtonError(state) {
    return !!state.userData[state.activePage].data === false
  },

  isPrevButtonError(state) {
    return state.activePage === 0
  },

  activePage(state) {
    return state.activePage
  },

  userTel(state) {
    return state.user.phone
  },

  userName(state) {
    return state.user.name
  },

  isSubmit(state) {
    return !(!!state.user.name === true && !!state.user.phone === true)
  },
}

export const mutations = {
  togglePopUp(state) {
    state.isPopUpShow = !state.isPopUpShow
  },
  toggleCityModal(state) {
    state.isCityModal = !state.isCityModal
  },
  toggleFooterInput(state) {
    state.isFooterInput = !state.isFooterInput
  },
  toggleIsForm(state) {
    state.isForm = !state.isForm
  },
  toggleBrandsPopUp(state) {
    state.isBrandsPopUp = !state.isBrandsPopUp
  },

  showGratitude(state) {
    state.isPopUpShow = true
    state.isForm = false
  },

  closeIsForm(state) {
    state.isForm = true
  },

  toNextPage(state) {
    ++state.activePage
  },
  toPastPage(state) {
    --state.activePage
  },

  setButton(state, index) {
    state.calcContent.slides[state.activePage].buttons[index].chosen = true
  },

  saveInformation(state, index) {
    state.userData[state.activePage].data =
      state.calcContent.slides[state.activePage].buttons[index].text
  },
  saveUserPhone(state, value) {
    state.user.phone = value
    state.userData[state.activePage].data = state.user.phone
  },
  saveUserName(state, name) {
    state.user.name = name
  },
  saveUserNumber(state, phone) {
    state.user.phone = phone
  },
  saveCalcData(state) {
    state.user.device = state.userData[0].data
    state.user.phone = state.userData[3].data
    state.user.breaking = state.userData[1].data
    state.user.callback = state.userData[0].data
  },

  resetCalcData(state) {
    state.user.name = null
    state.user.device = null
    state.user.phone = null
    state.user.breaking = null
    state.user.callback = null
    state.userData.forEach((item) => {
      item.data = null
    })
  },
  resetActivePage(state) {
    state.activePage = 0
  },
  resetValues(state) {
    state.calcContent.slides[state.activePage].buttons.forEach((item) => {
      item.chosen = false
    })
  },
  resetAllValues(state) {
    state.calcContent.slides.forEach((item) => {
      item.buttons.forEach((item) => {
        item.chosen = false
      })
    })
  },
}

export const actions = {
  choseItem({ commit }, index) {
    commit('resetValues')
    commit('setButton', index)
    commit('saveInformation', index)
  },

  submit({ commit, dispatch }) {
    commit('saveCalcData')
    dispatch('request')
  },

  async request({ state, commit, dispatch }) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      data: state.user,
      url: state.url,
    }

    axios(options)
      .then(() => {
        commit('resetCalcData')
      })
      .then(() => {
        commit('resetAllValues')
      })
      .then(() => {
        dispatch('resetActivePage')
      })
      .then(() => {
        commit('showGratitude')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
}
