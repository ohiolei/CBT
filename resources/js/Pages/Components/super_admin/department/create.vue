<template>
    <div>
      <div v-if="showDepartmentModal"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-4xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div
              class="flex text-teal-500 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 class="text-3xl font-semibold">
                Create new department
              </h3>
            </div>
            <!--body-->
            <div class="w-full">
              <div class="my-1 text-blueGray-500 text-lg leading-relaxed p-6">
                  <select v-model="college_id" class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200">
                        <option selected> -- College --</option>
                    <option v-for="(college,index) in colleges" :key="index" :value="college.id">
                                {{ college.college_name }}({{ college.college_code }})
                        </option>
                  </select>
                <input type="text" placeholder="Department Name" v-model="department_name"
                  class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200" />
                <input type="text" placeholder="Campus" v-model="campus"
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
                type="button" v-on:click="createDepartment()">
                Create Department
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showDepartmentModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  
    </div>
  </template>
    
  <script>
  import axios from 'axios';
  export default {
    name: "regular-modal",
    data() {
      return {
        college_id: null,
        department_name: null,
        campus: null,
        colleges: null,
      }
    },
    props: {
        showDepartmentModal: Boolean
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      fetchColleges(){
         axios.get('college/get_all_college').then(res =>{
            this.colleges = res.data.data
         }).catch()
      },
      createDepartment(){
        axios.post('department/create_department',
          {
            college_id: this.college_id,
            department_name: this.department_name,
            campus: this.campus
          } 
        ).then(res => {
          this.$toast.success(res.data.message)
          window.location.reload()
        }).catch(err => {
          this.$toast.error(err.response.data.data)
        })
        this.closeModal()
      }
    },
    mounted(){
        this.fetchColleges()
    }
  }
  </script>