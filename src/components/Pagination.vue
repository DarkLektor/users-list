<script setup>
const props = defineProps({
  pagesLength: Number,
  currentPage: Number
})
const emit = defineEmits(['nextPage', 'prevPage', 'setPageByIndex'])

</script>

<template>
  <div class="pagination">
    <button class="pagination__item" @click="emit('prevPage')">
      {{ `<` }}
    </button>
    <button
        v-for="i in props.pagesLength"
        :key="i"
        :class="{active: i === props.currentPage}"
        class="pagination__item"
        @click="emit('setPageByIndex', i)"
    >
      {{ i }}
    </button>
    <button class="pagination__item" @click="emit('nextPage')">
      >
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  padding: 20px;
  width: 100%;

  &__item {
    background: #fff;
    border-radius: 3px;
    padding: 6px 10px;

    &.active, &:hover {
      background: $primary;
    }
  }
}
</style>
