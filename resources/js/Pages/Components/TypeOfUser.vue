<template>
    <div>
        <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
            <div class="bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
                <div v-if="!this.$page.props.user_role[0]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            class="w-6 h-6 stroke-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h2 class="ml-3 text-xl font-semibold text-gray-900">
                            <p>Student</p>
                        </h2>
                    </div>

                    <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                        Click here to register yourself as a student and start taking tests today
                    </p>

                    <p class="mt-4 text-sm">
                        <button @click.prevent="createStudent()"
                            class="inline-flex items-center font-semibold text-indigo-700">
                            Registration

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                class="ml-1 w-5 h-5 fill-indigo-500">
                                <path fill-rule="evenodd"
                                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </p>
                </div>

                <div v-if="!this.$page.props.user_role[0]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            class="w-6 h-6 stroke-gray-400">
                            <path stroke-linecap="round"
                                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <h2 class="ml-3 text-xl font-semibold text-gray-900">
                            <a href="https://laracasts.com">Lecturer</a>
                        </h2>
                    </div>

                    <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                        Click here to register yourself as a lecturer and start setting tests today
                    </p>

                    <p class="mt-4 text-sm">
                        <button @click.prevent="createLecturer()"
                            class="inline-flex items-center font-semibold text-indigo-700">
                            Registration

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                class="ml-1 w-5 h-5 fill-indigo-500">
                                <path fill-rule="evenodd"
                                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </p>
                </div>
            </div>
            
            <div class="flex justify-end" v-if="student && student.matric_number">
                Matric No: {{ student.matric_number }}
            </div>
            <div v-else>

            </div>
            <h1 class="mt-8 text-2xl font-medium text-gray-900" v-if="this.$page.props.user_role[0] == 'student'">
                As a student you can chose the kind of test you wanna take
            </h1>
            <h1 class="mt-8 text-2xl font-medium text-gray-900" v-if="this.$page.props.user_role[0] == 'super_admin' || this.$page.props.user_role[0] == 'admin'">
                Welcome <span class="text-teal-500"> {{ this.$page.props.user.name }} </span>
            </h1>
            <h1 class="mt-8 text-2xl font-medium text-gray-900" v-if="this.$page.props.user_role[0] == 'lecturer'">
                As a Lecturer you can set courses and exams
            </h1>
        </div>


        <div class="">
            <div v-if="this.$page.props.user_role[0] == 'student'">
                <StdIndex>

                </StdIndex>
            </div>
            <div v-if="this.$page.props.user_role[0] == 'lecturer'">
                <ltrIndex>

                </ltrIndex>
            </div>
            <div v-if="this.$page.props.user_role[0] == 'super_admin' || this.$page.props.user_role[0] == 'admin'">
                <super_admin>

                </super_admin>
            </div>
        </div>
    </div>
</template>
<script>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import StdIndex from './student/index.vue'
import ltrIndex from './lecturer/index.vue'
import super_admin from './super_admin/index.vue'
import axios from 'axios';

export default {
    props: {

    },
    components: {
        StdIndex,
        ltrIndex,
        super_admin,
    },
    data() {
        return {
            error: null,
            student: null,
        }
    },
    methods: {
        createStudent() {
            axios.post('user_manager/create_student').then(response => {
                this.$toast.success(response.data.message);
            }).catch(err => this.$toast.error(err.response.data.error))
        },
        createLecturer() {
            axios.post('user_manager/create_lecturer', this.$page.props.auth.user.id).then(response => {
                this.$toast.success(response.data.message);
            }).catch(err => this.$toast.error(err.response.data.error))
        },
        getStudentData() {
            axios.get('user_manager/fetch_student_matric').then((res) => {
                this.student = res.data.data
            })
        }
    },
    mounted() {
        this.getStudentData();
    }
}
</script>