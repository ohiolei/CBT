<template>
  <div>
    <div v-if="showRegisterCourseModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-4xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div
            class="flex text-teal-500 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Register Courses
            </h3>
          </div>
          <!--body-->
          <div class="w-full">

            <div class="my-1 text-blueGray-500 text-lg leading-relaxed p-6">
              <!-- search -->
              <div class="p-2 flex justify-end">

                <div class="flex flex-row">

                  <div>
                    <input type="text" placeholder="Search Course" v-model="course_name_code"
                      class="mx-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" />
                  </div>
                  <div>

                  </div>
                  <div>
                    <button class="bg-teal-500 p-2 rounded mx-2 text-white hover:bg-gray-100 hover:text-teal-600"
                      @click.prevent="searchCoruse">
                      Search
                    </button>
                  </div>
                </div>

              </div>
              <!-- search -->

              <div class="flex flex-col" v-if="searched_courses">
                <div class="-m-1.5 overflow-x-auto">
                  <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <caption class="py-2 text-start text-sm text-gray-600 dark:text-gray-500">Course searched for
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                              Course Title</th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                              Course Code
                            </th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                              Lecturer in charge</th>
                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                              Action</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr v-for="(searched_course, index) in searched_courses" :key="index">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-600">
                              {{ searched_course.course_title }}
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-600">
                              {{ searched_course.course_code }}
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-600">
                              {{ searched_course.lecturer.name }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <button type="button" @click="addCourse(index)"
                                class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Add
                              </button>
                            </td>
                          </tr>


                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                  <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <caption class="py-2 text-start text-sm text-gray-600 dark:text-gray-500">Course For Your
                          Department
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                              Course Title</th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                              Course Code
                            </th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                              Lecturer in charge</th>
                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                              Action</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr v-for="(course, index) in courses" :key="index">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-600">
                              {{ course.course_title }}
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-600">
                              {{ course.course_code }}
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-600">
                              {{ course.lecturer.name }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <button type="button" @click="deleteCourse(index)"
                                class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                            </td>
                          </tr>


                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="closeModal()">
              Close
            </button>
            <button v-on:click="registerCourse()"
              class="text-teal-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
              Register Course
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showRegisterCourseModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "regular-modal",
  data() {
    return {
      courses: null,
      college_id: null,
      searched_courses: null,
      course_name_code: null,
    }
  },
  props: {
    showRegisterCourseModal: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    deleteCourse(index) {
      this.courses.splice(index, 1);
    },
    addCourse(index) {

      const searchedCourse = this.searched_courses[index];

      this.courses.push(searchedCourse);
    },
    searchCoruse() {
      axios.get('course/course_for_course_form', {
        params: {
          course_name_code: this.course_name_code
        }
      }).then((res) => {
        this.searched_courses = res.data.data
        console.log(this.searched_courses)
      })
    },

    fetchCourse() {
      axios.get('/student/fetch_course').then((res) => {
        this.courses = res.data.data
      })
    },
    registerCourse() {
      const course_json = JSON.stringify(this.courses)
      axios.put('/student/register_course', {
        courses: course_json
      }).then(res => {
        this.$toast.success(res.data.message)
        this.fetchCourse()
      }).catch(err => {

        this.$toast.error(err.response.data.error)
      }).finally()
    }
  },
  mounted() {
    this.fetchCourse()
  }
}
</script>

<style scoped></style>