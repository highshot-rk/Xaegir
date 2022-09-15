import { defineStore } from 'pinia';

export interface IIdentityState {
  firstName: string;
  lastName: string;
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'First',
    lastName: 'Last',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName;
    },
    setLastName(lastName: string) {
      this.lastName = lastName;
    },
    reset() {
      this.firstName = 'First';
      this.lastName = 'Last';
    },
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
});
