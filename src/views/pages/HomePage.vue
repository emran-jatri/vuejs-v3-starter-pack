<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { usePostStore } from "../../stores/post";

onMounted(() => {
  console.log(`the component is now mounted.`);
});

const countOne = ref(0);
// console.log("🚀 ~ file: HomePage.vue:5 ~ countOne", countOne.value);
const counter = reactive({ countTwo: 0 });
const postStore = usePostStore();
console.log("----------------->", postStore.getPosts);
// console.log("🚀 ~ file: HomePage.vue:7 ~ counter", counter);
</script>

<template>
  <div>
    <p class="text-center text-2xl">Home Page</p>
    <div>
      <p>Count One: {{ countOne }}</p>
      <p>Count One: {{ counter.countTwo }}</p>
    </div>
    <div class="space-x-2 mt-5">
      <button class="bg-blue-500 p-2 text-white" @click="countOne++">
        CountOne
      </button>
      <button class="bg-blue-500 p-2 text-white" @click="counter.countTwo++">
        CountTwo
      </button>
    </div>
  </div>
</template>
