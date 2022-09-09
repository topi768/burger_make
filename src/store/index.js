import { createStore } from 'vuex'

export default createStore({
  state: {//исходные  значение
    burgerComposition: [
        {name:'bun_bottom', count:0, price: 0, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 1,id: 'bun_bottom'},
        {name:'bun_top', count:0, price: 0, kcal: 249, time: 4, oz: 0.2, negativeMargin: -75, maxInLayer: 1, id: 'bun_top'},
    ],
    burgerCompositionWithLayot: [],
    totalPrice:0,
    totalTime: 0,
    totalOz: 0,
    totalKcal: 0,
    giftShow: false,

  },
  getters: {//изменения computed свойства, обязательно возвращают что то
    burgerCompositionWithLayot(state) {
      state.burgerCompositionWithLayot = []
      for (let i = 0; i < state.burgerComposition.length ;) {
          
          if (state.burgerComposition[i+2] != undefined && state.burgerComposition[i].maxInLayer >= 3  && state.burgerComposition[i].name == state.burgerComposition[i+1].name && state.burgerComposition[i].name == state.burgerComposition[i+2].name )  {
              state.newLayer = state.burgerComposition.slice(i, i+3, );
              state.burgerCompositionWithLayot.push(state.newLayer);
              i+= 3
          }else if (state.burgerComposition[i+1] != undefined && state.burgerComposition[i].maxInLayer >= 2  && state.burgerComposition[i].name == state.burgerComposition[i+1].name){
              state.newLayer = state.burgerComposition.slice(i, i+2, );
              state.burgerCompositionWithLayot.push( state.newLayer);
              i += 2 
          }else {
              state.newLayer = state.burgerComposition.slice(i ,i+1 );
              state.burgerCompositionWithLayot.push(state.newLayer);
              i += 1
          }
      }
      return state.burgerCompositionWithLayot

    },
    totalPrice(state) {
       state.totalPrice = state.burgerComposition.reduce((totalPrice, ingredient ) => {
        return totalPrice + ingredient.price
      }, 0)
      return state.totalPrice.toFixed(2)
    },
    totalTime(state) {
      state.totalTime = state.burgerComposition.reduce((totalTime, ingredient ) => {
       return totalTime + ingredient.time
     }, 0)
     return state.totalTime.toFixed(0)
   },
    totalOz(state) {
      state.totalOz = state.burgerComposition.reduce((totalOz, ingredient ) => {
      return totalOz + ingredient.oz 
    }, 0)
    if (state.giftShow) {
      state.totalOz += 1.2
      return state.totalOz.toFixed(1)
    }else {
      return state.totalOz.toFixed(1)
    }
    

    
  },
  totalKcal(state) {
    state.totalKcal = state.burgerComposition.reduce((totalKcal, ingredient ) => {
    return totalKcal + ingredient.kcal
  }, 0)
  return state.totalKcal.toFixed(0)
  
  },
  giftShow(state) {
    if (state.totalPrice >= 10) {
      return state.giftShow = true
      
    }else {
      return state.giftShow = false
    }
  }
},
  mutations: {//изменения состояний
    incrementBurgerComposition(state, ingredient) {
      state.burgerComposition.splice(-1, 0, ingredient)
      ingredient.id = Date.now()
    },
    decrementBurgerComposition(state, ingredient) {
      state.burgerComposition.splice(state.burgerComposition.findIndex(n => n.name == ingredient.name),1 )
    }
  },
  actions: {//функции с мутациями
    

  },
  modules: {

  }
})
