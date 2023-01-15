import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0); // ref and reactive is starte
  const doubleCount = computed(() => count.value * 2);  // computed is getters
  function increment() { // function is actions
    count.value++;
  }

  return { count, doubleCount, increment };
});
