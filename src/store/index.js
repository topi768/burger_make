import { createStore } from 'vuex'

export default createStore({
  state: {//исходные  значение
      burgerComposition: [
        {name:'bun_bottom', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 1,id: 'bun_bottom'},
        {name:'bun_top', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -75, maxInLayer: 1, id: 'bun_top'},
    ],
    burgerCompositionWithLayot: []
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
