<script setup>
import SvgClean from "@/components/svg/Clean.vue";
import {ref} from "vue";

const emit = defineEmits(['search'])
const timer = ref(null)

function debounce(event) {
  if (timer.value) {
    clearTimeout(timer.value)
  }
  timer.value = setTimeout(() => {
    emit('search', event.target.value.trim().toLowerCase())
  }, 700)
}
</script>

<template>
  <div class="search">
    <div class="wrapper">
      <img alt="search" class="search__input__img" src="/images/search.svg">
      <input
          class="search__input"
          placeholder="Поиск по имени или e-mail"
          type="text"
          @input="debounce"
      />
    </div>
    <button class="search__clear-btn">
      <SvgClean class="search__clear-btn__ico" />
      <span class="search__clear-btn__text">Очистить фильтр</span>
    </button>
  </div>
</template>


<style lang="scss" scoped>
.search {
  background: #fff;
  padding: 12px 16px;
  width: 100%;
  box-shadow: 0 18px 15px rgba(148, 148, 148, 0.15);
  border-radius: 7px;
  margin-bottom: 72px;

  .wrapper {
    position: relative;
  }

  &__input {
    font-weight: 500;
    padding: 9px 32px;
    background: $light-grey;
    width: 100%;
    border: 0;
    border-radius: 4px;
    margin-bottom: 24px;

    &:focus {
      outline: 1px solid $primary;
    }

    &::placeholder {
      font-weight: 500;
      color: $grey;
    }

    &__img {
      position: absolute;
      left: 6px;
      top: 5px;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }

  &__clear-btn {
    display: flex;
    align-items: center;
    padding: 4px 0;

    &:hover {
      color: $primary;
    }

    &__ico {
      width: 16px;
      height: 16px;
      object-fit: contain;
      margin-right: 6px;
    }

    &__text {
      font-weight: 500;
    }
  }
}
</style>
