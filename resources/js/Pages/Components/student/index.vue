<template>
        <div class="flex">
                <div v-if="student_department_id == null" class="flex flex-row">
                        <div class="m-3">
                                <select v-model="college_id" @change="fetchDepartments()"
                                        class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200">
                                        <option selected> -- College --</option>
                                        <option v-for="(college, index) in colleges" :key="index" :value="college.id">
                                                {{ college.college_name }}
                                        </option>
                                </select>
                        </div>
                        <div class="m-3">
                                <select v-model="department_id"
                                        class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200">
                                        <option selected> -- Departments --</option>
                                        <option v-for="(department, index) in departments" :key="index"
                                                :value="department.id">
                                                {{ department.name }}
                                        </option>
                                </select>
                        </div>
                        <div class="m-3" @click='submitCollege()'>
                                <button
                                        class="my-1 bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Submit</button>
                        </div>
                </div>

                <div v-else>
                        <div class="bg-white p-6 rounded m-5">

                                <span>
                                        Click
                                        <span>
                                                <button class="text-red-500" @click="openRegisterCourseModal()">
                                                        here
                                                </button>
                                        </span>
                                        to register your course
                                </span>
                        </div>

                        <!-- <div class="bg-white p-6 rounded m-5">

                        </div>

                        <div class="bg-white p-6 rounded m-5">

                        </div> -->
                </div>
        </div>
        <register :showRegisterCourseModal="showRegisterCourseModal" @close="closeRegisterCourseModal()" />
</template>

<script>
import axios from 'axios';
import register from './course/register.vue';
export default {
        components: {
                register
        },
        data() {
                return {
                        showRegisterCourseModal: false,
                        student_department_id: [],
                        colleges: null,
                        college_id: null,
                        departments: null,
                        department_id: null,
                        cache_data: null,
                }
        },
        methods: {
                openRegisterCourseModal() {
                        this.showRegisterCourseModal = true;
                },
                closeRegisterCourseModal() {
                        this.showRegisterCourseModal = false;
                },
                fetchStudentDepartmentID() {
                        axios.get('/student/student_department_id').then((res) => {
                                this.student_department_id = res.data.student_department_id
                        }).catch()
                },
                fetchCollege() {
                        axios.get('/college/get_all_college').then((res) => {
                                this.colleges = res.data.data
                                console.log(this.colleges)
                        }).catch()
                },
                fetchDepartments() {
                        axios.get('/department/get_department_for_college/' + this.college_id).then((res) => {
                                this.departments = res.data.data
                                console.log(this.departments)
                        }).catch()
                },
                submitCollege() {
                        axios.patch('/student/register_department', {
                                department_id: this.department_id
                        }).then(res => {
                                this.$toast.success(res.data.message)
                        }).catch().finally()
                }
        },
        mounted() {
                this.fetchStudentDepartmentID()
                this.fetchCollege()
        }
}
</script>