<script setup lang="ts"></script>

<template>
  <div class="bg-blue-500 p-5">
    <div class="flex justify-between items-center">
      <RouterLink to="/" class="text-white text-2xl font-bold uppercase">Logo</RouterLink>
      <div class="flex space-x-4">
        <RouterLink to="/" class="text-white" >Services</RouterLink>
        <RouterLink to="/" class="text-white" >Products</RouterLink>
        <RouterLink to="/about" class="text-white" >About</RouterLink>
      </div>
    </div>
  </div>
</template>
