<script setup>

</script>

<template>
  <div class="sort">
    <span class="sort__desc">
      Сортировка:
    </span>
    <button class="sort__btn active">
      Дата регистрации
    </button>
    <button class="sort__btn">
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
