import { defineStore } from "pinia";

export const useUserValues = defineStore("useUserValues", {
  state: () => ({
    isUserAuthenticated: false,  // Renombrado la propiedad del estado
    userName: "",
    showWelcome: false,
    firstAnimation: false,
    maintenanceMode: false,
  }),
  getters: {
    isUserAuth(state): boolean {
      return state.isUserAuthenticated;  // Refleja el cambio en el nombre
    },
    getUserName(state): string {
      return state.userName;
    },
    getShowWelcome(state): boolean {
      return state.showWelcome;
    },
    getFirstAnimation(state): boolean {
      return state.firstAnimation;
    },
    getMaintenanceMode(state): boolean {
      return state.maintenanceMode;
    }
  },
  actions: {
    setUserAuth(): void {
      this.isUserAuthenticated = true;  // Refleja el cambio en el nombre
    },
    setUserName(userName: string): void {
      this.userName = userName;
    },
    setShowWelcome(showWelcome: boolean): void {
      this.showWelcome = showWelcome;
    },
    setFirstAnimation(firstAnimation: boolean): void {
      this.firstAnimation = firstAnimation;
    }
  }
});
