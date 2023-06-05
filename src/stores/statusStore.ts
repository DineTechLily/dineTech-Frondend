import { defineStore } from 'pinia';

export const useStatusStore =  defineStore('status', {
  state: () => ({
    isLoading: false,
  }),
});