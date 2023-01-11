import {computed, ref} from 'vue'

export const usePagination = (users) => {
    const page = ref(1);
    const perPage = ref(5);

    const paginateUsers = computed(() => {
        const start = (page.value - 1) * perPage.value
        const end = start + perPage.value
        return users.value.slice(start, end)
    })

    const prevPage = () => {
        if (page.value > 1) {
            page.value -= 1
        }
    }

    const nextPage = () => {
        if (page.value * perPage.value < users?.value?.length) {
            page.value += 1
        }
    }

    const setPageByIndex = (index) => {
        page.value = index
    }


    return {page, perPage, paginateUsers, prevPage, nextPage, setPageByIndex}
}
