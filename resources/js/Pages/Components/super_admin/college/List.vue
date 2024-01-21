<template>
    <div>
        <table class="w-full">
            <thead>
                <tr
                    class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th class="px-4 py-3">S/N</th>
                    <th class="px-4 py-3">College</th>
                    <th class="px-4 py-3">College Code</th>
                    <th class="px-4 py-3">Campus</th>
                    <th class="px-4 py-3">Action</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr class="text-gray-700" v-for="(college, index) in colleges" :key="index">
                    <td class="px-4 py-3 border">
                        {{ index + 1 }}
                    </td>
                    <td class="px-4 py-3 border">
                        {{ college.college_name }}
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">{{ college.college_code }}</td>
                    <td class="px-4 py-3 text-xs border">
                        {{ college.campus }}
                    </td>
                    <td class="px-4 py-3 text-center text-sm border">
                        <div class="relative inline-block text-left">
                            <button @click="toggleDropdown(college.id)"
                                class="px-2 py-1 rounded-md bg-gray-200 hover:bg-teal-500 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>

                            </button>
                            <div v-if="openDropdown === college.id"
                                class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <!-- Dropdown options for this item -->
                                <a :href="'/department/get_department/' + college.id"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    @click="getDepartmentOfCollege(college.id)">
                                    Departments
                                </a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                            </div>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
import sidebar from '../../../../Layouts/sidebar.vue';

export default {
    layout: (h, page) => h(sidebar, [page]),
    components: {

    },
    data() {
        return {
            colleges: null,
            openDropdown: null,
            closeDropdown: null,
        }
    },
    methods: {
        fetchColleges() {
            axios.get('get_all_college').then(res => {
                this.colleges = res.data.data
            }).catch()
        },
        toggleDropdown(userId) {
            if (this.openDropdown === userId) {
                this.openDropdown = null;
            } else {
                this.openDropdown = userId;
                this.closeDropdownOnBodyClick(); // Listen for body click
            }
        },
        closeDropdownOnBodyClick() {
            // Attach a click event listener to the document body
            document.body.addEventListener('click', this.closeDropdown);
        },
        closeDropdown(event) {
            // Check if the click event target is outside of the dropdown
            if (!this.$refs.dropdown.contains(event.target)) {
                this.openDropdown = null;
                document.body.removeEventListener('click', this.closeDropdown);
            }
        },
        getDepartmentOfCollege(college_id) {
            axios.get().then().catch()
            console.log(college_id)
        },
    },
    mounted() {
        this.fetchColleges()
    }

}

</script>