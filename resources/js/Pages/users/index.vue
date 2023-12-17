<template>
    <!-- component -->
    <section class="container mx-auto p-6 font-mono">
        <Loading :active.sync="isLoading"/>
        <div>

            <div class="flex">
                <div>
                    
                    <div href="#" class="block max-w-sm p-6 mr-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-200 dark:hover:bg-gray-100">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Lecturers</h5>
                    <div class="flex">
                        <p class="font-normal text-gray-700 dark:text-gray-600">male: 10</p> | <p class="font-normal text-gray-700 dark:text-gray-600">female: 5</p>
                    </div>
                    
                    </div>

                </div>
                <div>
                    
                    <div href="#" class="block max-w-sm mx-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-200 dark:hover:bg-gray-100">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Students</h5>
                    <div class="flex">
                        <p class="font-normal text-gray-700 dark:text-gray-600">male: 10</p> | <p class="font-normal text-gray-700 dark:text-gray-600">female: 5</p>
                    </div>
                    
                    </div>

                </div>
                

            </div>
        
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-10">
            <div class="w-full overflow-x-auto">
                <div>
                    <div class="p-2">
                        <div class="p-5 flex justify-end">
                            <div>
                                <input type="text" placeholder="Name" v-model="filter.name"
                                    class="mx-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" />
                            </div>
                            <div>
                            
                                <select v-model="filter.role" @change.prevent="getAllUsers"
                                    class="mx-2 px-7 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ">
                                    <option value="" selected>-- Roles --</option>
                                    <option v-for="(role, index) in roles" :key="index" :value="role.name">{{ role.name }}
                                    </option>
                                </select>
                                
                            </div>
                            <div>
                                <button
                                    class="bg-teal-500 p-2 rounded mx-2 text-white hover:bg-gray-100 hover:text-teal-600"
                                    @click="getAllUsers()">
                                    Search
                                </button>
                            </div>
                        </div>

                        <table class="w-full">
                            <thead>
                                <tr
                                    class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-3">S/N</th>
                                    <th class="px-4 py-3">Name</th>
                                    <th class="px-4 py-3">Email</th>
                                    <th class="px-4 py-3">Role</th>
                                    <th class="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr class="text-gray-700" v-for="(user, index) in users.data" :key="index">
                                    <td class="px-4 py-3 border">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="px-4 py-3 border">
                                        {{ user.name }}
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{{ user.email }}</td>
                                    <td class="px-4 py-3 text-xs border">
                                        <span
                                            class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                            {{ user.roles[0].name }} </span>
                                    </td>
                                    <td class="px-4 py-3 text-center text-sm border">
                                        <div class="relative inline-block text-left">
                                            <button @click="toggleDropdown(user.id)"
                                                class="px-2 py-1 rounded-md bg-gray-200 hover:bg-teal-500 hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="0.8" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                                </svg>

                                            </button>
                                            <div v-if="openDropdown === user.id"
                                                class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <!-- Dropdown options for this item -->
                                                <a href="#"
                                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Edit
                                                </a>
                                                <a href="#"
                                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <pagination
                  :links="users.links"
                  v-on:fetchDataFrom="getNextPage($event)"
                ></pagination>
            </div>
        </div>
        <div>
       
        </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import sidebar from '../../Layouts/sidebar.vue'
import Pagination from '../Components/Pagination.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default {
    layout: (h, page) => h(sidebar, [page]),
    components: {
        Pagination,
        Loading,
    },
    props: {

    },
    data() {
        return {
            isLoading: false,
            users: {},
            openDropdown: null,
            closeDropdown: null,
            filter: {
                name: null,
                role: null,
            },
            roles: null,
            fullPage: null,
        }
    },
    methods: {
        getAllUsers(url = null) {
            this.isLoading = true;
            let uri = url
            ? url
            : this.route("user_manager.get_all_users");
            axios.get(uri,
                {
                    params: {
                        filters: this.filter
                    }
                }).then((res) => {
                    this.users = res.data
                    console.log(this.users)
                }).catch((error) => {
                    console.log(error)
                }).finally(this.isLoading = false);
        },
        getNextPage(k) {
        this.getAllUsers(k);
        },
        getAllRoles() {
            this.loading = true,
            axios.get('user_manager/get_all_roles').then((res) => {
                this.roles = res.data
            }).catch((err)=> {
                console.log(err)   
            }).finally(this.loading = false)
        },
        getUserAnalytic(){
            axios.get('user_manager/user_analytic').then((res) => {
                console.log(res)
            })
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
        }

    },
    mounted() {
        this.getAllUsers(this.current)
        this.getAllRoles()
        this.getUserAnalytic()
    }
}
</script>