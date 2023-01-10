<script setup>
import Search from "@/components/Search.vue";
import Sort from "@/components/Sort.vue";
import UsersList from "@/components/UsersList.vue";
import {reactive} from "vue";

const state = reactive({
  users:
      [
        {
          "id": "1",
          "username": "Sister_Swift",
          "email": "Vicente48@hotmail.com",
          "registration_date": "2020-03-28T19:50:24.665Z",
          "rating": 72
        },
        {
          "id":
              "2",
          "username":
              "Tate_Stokes82",
          "email":
              "Adonis_Bashirian18@yahoo.com",
          "registration_date":
              "2020-06-06T07:01:15.412Z",
          "rating":
              68
        }
        ,
        {
          "id":
              "3",
          "username":
              "Verner_Greenholt",
          "email":
              "Jude20@yahoo.com",
          "registration_date":
              "2019-07-24T16:14:25.290Z",
          "rating":
              34
        }
        ,
        {
          "id":
              "4",
          "username":
              "Quinton_Feeney",
          "email":
              "Estella54@hotmail.com",
          "registration_date":
              "2019-08-02T06:12:51.484Z",
          "rating":
              42
        }
        ,
        {
          "id":
              "5",
          "username":
              "Federico41",
          "email":
              "Ramon.Hilll87@hotmail.com",
          "registration_date":
              "2019-08-15T20:02:41.884Z",
          "rating":
              29
        }
        ,
        {
          "id":
              "6",
          "username":
              "Beryl.Lowe92",
          "email":
              "Vida_Crist@yahoo.com",
          "registration_date":
              "2020-01-11T02:26:08.771Z",
          "rating":
              59
        }
        ,
        {
          "id":
              "7",
          "username":
              "Reta.Schuppe",
          "email":
              "Jordy.Cormier65@hotmail.com",
          "registration_date":
              "2019-11-02T10:01:42.880Z",
          "rating":
              81
        }
        ,
        {
          "id":
              "8",
          "username":
              "Antonina82",
          "email":
              "Blaze_Effertz82@gmail.com",
          "registration_date":
              "2020-01-13T04:16:16.601Z",
          "rating":
              89
        }
        ,
        {
          "id":
              "9",
          "username":
              "Terrell_Auer93",
          "email":
              "Ben.Boyer@yahoo.com",
          "registration_date":
              "2019-09-09T08:25:08.027Z",
          "rating":
              87
        }
        ,
        {
          "id":
              "10",
          "username":
              "Brigitte72",
          "email":
              "Brook.Reilly@hotmail.com",
          "registration_date":
              "2019-07-21T06:25:43.192Z",
          "rating":
              50
        }
        ,
        {
          "id":
              "11",
          "username":
              "Francesca40",
          "email":
              "Iva27@yahoo.com",
          "registration_date":
              "2019-11-24T16:14:57.441Z",
          "rating":
              34
        }
        ,
        {
          "id":
              "12",
          "username":
              "Newell34",
          "email":
              "Leann_Kohler0@yahoo.com",
          "registration_date":
              "2019-07-30T06:44:20.063Z",
          "rating":
              49
        }
        ,
        {
          "id":
              "13",
          "username":
              "Khalid.Crona56",
          "email":
              "Norberto6@hotmail.com",
          "registration_date":
              "2020-05-06T08:00:19.799Z",
          "rating":
              6
        }
        ,
        {
          "id":
              "14",
          "username":
              "Mckenna_Treutel86",
          "email":
              "Madalyn.Murazik@yahoo.com",
          "registration_date":
              "2019-11-11T03:28:12.418Z",
          "rating":
              6
        }
        ,
        {
          "id":
              "15",
          "username":
              "Mittie.Casper",
          "email":
              "Asia.Ankunding@gmail.com",
          "registration_date":
              "2019-12-24T02:12:37.811Z",
          "rating":
              60
        }
        ,
        {
          "id":
              "16",
          "username":
              "Burdette20",
          "email":
              "Kiley_Pollich@gmail.com",
          "registration_date":
              "2019-12-16T18:15:47.998Z",
          "rating":
              27
        }
        ,
        {
          "id":
              "17",
          "username":
              "Tavares.Hansen",
          "email":
              "Sherman_Schoen53@yahoo.com",
          "registration_date":
              "2020-05-07T17:34:09.949Z",
          "rating":
              1
        }
        ,
        {
          "id":
              "18",
          "username":
              "Reyes.Rutherford",
          "email":
              "Arthur55@yahoo.com",
          "registration_date":
              "2019-11-21T08:06:48.199Z",
          "rating":
              26
        }
        ,
        {
          "id":
              "19",
          "username":
              "Federico13",
          "email":
              "Amos62@yahoo.com",
          "registration_date":
              "2020-02-29T01:57:24.434Z",
          "rating":
              77
        }
        ,
        {
          "id":
              "20",
          "username":
              "Shad.Herzog0",
          "email":
              "Kiera54@yahoo.com",
          "registration_date":
              "2019-06-20T21:38:38.525Z",
          "rating":
              48
        }
        ,
        {
          "id":
              "21",
          "username":
              "Jerrod71",
          "email":
              "Napoleon55@yahoo.com",
          "registration_date":
              "2020-04-20T11:28:09.492Z",
          "rating":
              60
        }
        ,
        {
          "id":
              "22",
          "username":
              "Damien71",
          "email":
              "Camilla32@hotmail.com",
          "registration_date":
              "2019-11-21T15:47:27.792Z",
          "rating":
              69
        }
        ,
        {
          "id":
              "23",
          "username":
              "Javon_Homenick4",
          "email":
              "Jarret62@yahoo.com",
          "registration_date":
              "2019-07-26T04:49:23.842Z",
          "rating":
              83
        }
        ,
        {
          "id":
              "24",
          "username":
              "Jaden94",
          "email":
              "Mallie.Harber@yahoo.com",
          "registration_date":
              "2019-10-28T09:09:55.245Z",
          "rating":
              96
        }
        ,
        {
          "id":
              "25",
          "username":
              "Daniella8",
          "email":
              "Eda_Collier@hotmail.com",
          "registration_date":
              "2019-12-20T00:23:03.766Z",
          "rating":
              57
        }
      ],
  searchedUsers: []
})

// onMounted(() => {
//   fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users', {method: 'GET'}).then((res) => {
//     state.users = res
//   })
// })

function searchUsers(val) {
  console.log(val)
  state.searchedUsers = state.users.filter((item) => {
    console.log(item.email.includes(val))
    return item.email.toLowerCase().includes(val) || item.username.toLowerCase().includes(val)
  })
  console.log(state.users)
}

</script>

<template>
  <main>
    <div class="users">
      <div class="container">
        <h1 class="users__title">Список пользователей</h1>
        <Search @search="searchUsers" />
        <Sort />
        <UsersList />
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
