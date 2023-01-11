<script setup>
import Search from "@/components/Search.vue";
import Sort from "@/components/Sort.vue";
import UsersList from "@/components/UsersList.vue";
import Pagination from "@/components/Pagination.vue";
import {usePagination} from "@/composables/pagination";
import {useUsers} from "@/composables/users";
import {watch} from "vue";

const {
  sortedUsers,
  activeClearBtn,
  clearFilters,
  removeUser,
  searchTerm,
  loading,
  error,
  sort
} = useUsers()

const {
  page,
  perPage,
  paginateUsers,
  prevPage,
  nextPage,
  setPageByIndex
} = usePagination(sortedUsers)

watch(searchTerm, () => {
  page.value = 1
})
</script>

<template>
  <main>
    <div class="users">
      <div class="container">
        <h1 class="users__title">Список пользователей</h1>
        <Search
            v-model="searchTerm"
            :active-clear-btn="activeClearBtn"
            @clearFilters="clearFilters"
        />
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <template v-else>
          <Sort :sort="sort" @setSort="sort = $event" />
          <UsersList
              :filtered-users="paginateUsers"
              @removeUser="removeUser"
          />
          <Pagination
              v-if="sortedUsers.length > perPage"
              :current-page="page"
              :pages-length="Math.ceil(sortedUsers.length / perPage)"
              @nextPage="nextPage"
              @prevPage="prevPage"
              @setPageByIndex="setPageByIndex"
          />
        </template>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.users {
  background: $light-grey;
  padding: 50px 0;
  min-height: 100vh;

  &__title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
