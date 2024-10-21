<template>
    <div>
        <div>
            <div class="p-2">
                <div class="p-5 flex justify-end">
                    <div>
                        <select
                            class="mx-2 px-7 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
                            v-model="college_id" @change="getDepartment()">
                            <option :value=null selected>-- college --</option>
                            <option v-for="(college, index) in colleges" :key="index" :value="college.id">
                                {{ college.college_name }}({{ college.college_code }})
                            </option>
                        </select>
                    </div>
                    <select
                        class="mx-2 px-7 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
                        v-model="department_id" @change="getCourses(); getLecturer()">
                        <option :value=null selected>-- departments --</option>
                        <option v-for="(department, index) in departments" :key="index" :value="department.id">
                            {{ department.name }}
                        </option>
                    </select>

                </div>

                <table class="w-full">
                    <thead>
                        <tr
                            class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th class="px-4 py-3">S/N</th>
                            <th class="px-4 py-3">Course Title</th>
                            <th class="px-4 py-3">Course Code</th>
                            <th class="px-4 py-3">Lecturer in Charge</th>
                            <th class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="text-gray-700" v-for="(course, index) in courses" :key="index">
                            <td class="px-4 py-3 border">
                                {{ index + 1 }}
                            </td>
                            <td class="px-4 py-3 border">
                                {{ course.course_title }}
                            </td>
                            <td class="px-4 py-3 text-xs border">
                                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                    {{ course.course_code }}
                                </span>
                            </td>
                            <td class="px-4 py-3 border">
                                {{ course.lecturer.name }}
                            </td>
                            <td class="px-4 py-3 text-center text-sm border">
                                <div class="relative inline-block text-left">
                                    <button @click="toggleDropdown(course.id)"
                                        class="px-2 py-1 rounded-md bg-gray-200 hover:bg-teal-500 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="0.8" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>

                                    </button>
                                    <div v-if="openDropdown === course.id"
                                        class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <!-- Dropdown options for this item -->
                                        <NavLink href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Edit
                                        </NavLink>
                                        <NavLink href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</NavLink>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '../../../../Layouts/sidebar.vue';
import axios from 'axios';
import NavLink from '@/Components/NavLink.vue';

export default {
    layout: (h, page) => h(sidebar, [page]),
    components: {

    },

    data() {
        return {
            openDropdown: null,
            closeDropdown: null,
            colleges: null,
            college_id: null,
            departments: null,
            department_id: null,
            courses: null,
            lecturers: null,
        }
    },

    methods: {
        toggleDropdown(courseId) {
            if (this.openDropdown === courseId) {
                this.openDropdown = null;
            } else {
                this.openDropdown = courseId;
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
        getAllCollge() {
            axios.get('/college/get_all_college').then(res => {
                this.colleges = res.data.data
            }).catch()
        },
        getDepartment() {
            axios.get('/department/get_department_for_college/' + this.college_id).then(res => {
                this.departments = res.data.data
            })
        },
        getCourses() {
            axios.get('/course/get_course/' + this.department_id).then(res => {
                this.courses = res.data.course
            }).catch()
        },
    },
    mounted() {
        this.getAllCollge()
    }

}
</script>