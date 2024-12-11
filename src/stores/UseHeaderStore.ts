import { defineStore } from "pinia";

export const useHeaderStore  = defineStore('useHeaderStore', ({
  state: () => ({
    showMenu : false,
  }),
  getters:{
   isMenuToggled(state):boolean{
    return state.showMenu;
   }
  },
  actions:{
    toggleMenu():void{
      this.showMenu = !this.showMenu;
    }
  }
}))
