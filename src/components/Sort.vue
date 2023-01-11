<script setup>
const emit = defineEmits(['setSort'])
const props = defineProps(['sort'])
</script>

<template>
  <div class="sort">
    <span class="sort__desc">
      Сортировка:
    </span>
    <button
        :class="{active: props.sort === 'date-asc' || props.sort === 'date-desc'}"
        class="sort__btn"
        @click="emit('setSort', props.sort === 'date-asc' ?  'date-desc' : 'date-asc')"
    >
      Дата регистрации
    </button>
    <button
        :class="{active: props.sort === 'rating-asc' || props.sort === 'rating-desc'}"
        class="sort__btn"
        @click="emit('setSort', props.sort === 'rating-asc' ?  'rating-desc' : 'rating-asc')"
    >
      Рейтинг
    </button>
  </div>
</template>

<style lang="scss" scoped>
.sort {
  display: flex;
  column-gap: 8px;
  margin-bottom: 16px;

  &__desc, &__btn {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: $grey;
  }

  &__btn {
    border-bottom: 1px dashed $grey;

    &.active {
      border-bottom: 1px dashed #000;
      color: #000;
    }
  }
}
</style>
