<script setup>
import SvgCancel from "@/components/svg/Cancel.vue";
import DeleteUser from "@/components/modals/DeleteUser.vue";
import {ref} from "vue";

const emit = defineEmits(['removeUser'])
const props = defineProps({
  filteredUsers: {
    type: Array,
    default: () => []
  }
})

const showDeleteModal = ref(false)
const deleteUserId = ref('')

function showModal(id) {
  showDeleteModal.value = true
  deleteUserId.value = id
}

function deleteUser() {
  emit('removeUser', deleteUserId.value)
  showDeleteModal.value = false
}

function closeModal() {
  showDeleteModal.value = false
  deleteUserId.value = ''
}

function getDate(date) {
  const fullDate = new Date(date)
  const days = ('0' + fullDate.getDate()).slice(-2)
  const month = ('0' + fullDate.getMonth()).slice(-2)
  const years = fullDate.getFullYear()

  return `${days}.${month}.${years}`
}
</script>

<template>
  <div class="wrapper">
    <DeleteUser v-if="showDeleteModal" @cancel="closeModal" @confirm="deleteUser" />
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

      <tr v-for="user in props.filteredUsers" :key="user.id" class="users__list__tr">
        <td class="users__list__td username">
          {{ user.username }}
        </td>
        <td class="users__list__td">
          {{ user.email }}
        </td>
        <td class="users__list__td">
          {{ getDate(user.registration_date) }}
        </td>
        <td class="users__list__td">
          {{ user.rating }}
        </td>
        <td class="users__list__td text-right">
          <button class="users__list__clear-btn" @click="showModal(user.id)">
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
  overflow-x: auto;
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

      &.username {
        font-weight: 700;
        color: $primary;
      }
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
