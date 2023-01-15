import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
  const posts = reactive([
    {
      id: 1,
      content: "Post 1",
    },
    {
      id: 2,
      content: "Post 2",
    },
  ]); // ref and reactive is starte
  const getPosts = computed(() => posts); // computed is getters

  return { posts, getPosts };
});
