<template>
  <div>
    <div v-if="showCourseModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-4xl">
        <!-- Increase max-w-4xl or choose a value that suits your design -->
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div
            class="flex text-teal-500 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Create new course
            </h3>
          </div>
          <!--body-->
          <div class="w-full">
            <div class="my-1 text-blueGray-500 text-lg leading-relaxed p-6">

              <select v-model="college_id" @change="getAllDepartment()"
                class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200">
                <option selected> -- College --</option>
                <option v-for="(college, index) in colleges" :key="index" :value="college.id">
                  {{ college.college_name }}({{ college.college_code }})
                </option>
              </select>
              <select v-model="departmental_id"
                class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200">
                <option selected> -- Department --</option>
                <option v-for="(department, index) in departments" :key="index" :value="department.id">
                  {{ department.name }}({{ department.campus }})
                </option>
              </select>
              <input type="text" placeholder="Course Title" v-model="course_title"
                class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200" />
              <input type="text" placeholder="Course Code" v-model="course_code"
                class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200" />

            </div>

          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="closeModal()">
              Close
            </button>
            <button
              class="text-teal-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="createCourse()">
              Create Course
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showCourseModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: "regular-modal",
  data() {
    return {
      showCourseModal: false,
      colleges: null,
      departments: null,
      lecturer: null,
      departmental_id: null,
      college_id: null,
      course_code: null,
      course_title: null,
    }
  },
  props: {
    showCourseModal: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },

    getAllCollege() {
      axios.get('college/get_all_college').then(res => {
        this.colleges = res.data.data
        console.log(this.colleges)
      }).catch()
    },
    getAllDepartment() {
      if (this.college_id) {
        axios.get('department/get_department_for_college/' + this.college_id).then(res => {
          this.departments = res.data.data
          console.log(this.departments)
        }).catch()
      }
    },
    getLecturer() {
      axios.get('lecturer/get_lecturer').then(res => {
        this.lecturer = res.data.data
        console.log(this.lecturer)
      }).catch()
    },
    createCourse() {
      if (this.lecturer.id) {
        axios.post('course/create_course/', {
          lecturer_id: this.lecturer.id,
          department_id: this.departmental_id,
          course_title: this.course_title,
          course_code: this.course_code,
        }).then(res => {
          this.$toast.success(res.data.message)
          window.location.reload()
        }).finally(this.closeModal()).catch(err => {
          this.$toast.error(err.response.data.data)
        })
      }
    }
  },
  mounted() {
    this.getAllCollege()
    this.getLecturer()
  },
  beforeCreate() {

  }
}
</script>