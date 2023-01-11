import {computed, onMounted, ref} from 'vue'

export const useUsers = () => {
    const users = ref([]);
    const error = ref(null);
    const loading = ref(true);
    const searchTerm = ref('');
    const sort = ref(null);

    onMounted(async () => {
        try {
            const response = await fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users');
            users.value = await response.json();
            loading.value = false;
        } catch (err) {
            error.value = err;
            loading.value = false;
        }
    });

    const filteredUsers = computed(() => {
        if (!searchTerm.value) return users.value;

        return users.value.filter((user) => {
            return (
                user.username.toLowerCase().includes(searchTerm.value) ||
                user.email.toLowerCase().includes(searchTerm.value)
            );
        });
    });

    const removeUser = (userId) => {
        users.value = users.value.filter((user) => user.id !== userId);
    }

    const sortedUsers = computed(() => {
        if (!sort.value) return filteredUsers.value
        if (sort.value.includes('rating')) {
            const sortedArray = [...filteredUsers.value].sort((a, b) => b.rating - a.rating);
            return sort.value === 'rating-asc' ?
                sortedArray :
                sortedArray.reverse()
        }
        if (sort.value.includes('date')) {
            const sortedArray = [...filteredUsers.value].sort((a, b) => new Date(b.registration_date) - new Date(a.registration_date));
            return sort.value === 'date-asc' ?
                sortedArray :
                sortedArray.reverse()
        }
    });

    const activeClearBtn = computed(() => {
        return !!(searchTerm.value || sort.value)
    })

    function clearFilters() {
        searchTerm.value = '';
        sort.value = null
    }

    return {sortedUsers, activeClearBtn, clearFilters, removeUser, searchTerm, loading, error, sort}
}
