<script setup>

import SvgCancel from "@/components/svg/Cancel.vue";</script>

<template>
  <div class="wrapper">
    <table class="users__list">
      <thead>
      <tr class="users__list__tr">
        <th class="users__list__th">
          Имя пользователя
        </th>
        <th class="users__list__th">
          E-mail
        </th>
        <th class="users__list__th">
          Дата регистрации
        </th>
        <th class="users__list__th" colspan="2">
          Рейтинг
        </th>
      </tr>
      </thead>
      <tbody>

      <tr class="users__list__tr">
        <td class="users__list__td">
          Username
        </td>
        <td class="users__list__td">
          test@test.ru
        </td>
        <td class="users__list__td">
          23.09.19
        </td>
        <td class="users__list__td">
          12
        </td>
        <td class="users__list__td text-right">
          <button class="users__list__clear-btn">
            <SvgCancel />
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style lang="scss" scoped>
.wrapper {
  padding: 0 15px;
  background: #fff;
  border-radius: 10px;
}

.users__list {
  width: 100%;

  .text-right {
    text-align: right;
  }

  &__th {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: $grey;
    text-align: left;
  }

  &__tr {
    &:last-child td {
      border-bottom: 0;
    }

    td, th {
      padding: 14px 5px 20px;
      border-bottom: 1px solid $white-bg;

    }
  }

  &__clear-btn {
    width: 28px;
    height: 28px;
    padding: 5px;

    &:hover {
      color: $primary;
    }

    svg {
      object-fit: contain;
      width: 100%;
      height: 100%;

    }
  }
}

</style>
