<template>
    <div class="flex">
        <div class="bg-white p-6 rounded m-5">
            <span>click here to set up a </span>
            <span>
                <button @click="openCollegeModal()" class="text-red-500">
                    college
                </button>
            </span>
        </div>
        <div class="bg-white p-6 rounded m-5">
            <span>click here to set up a </span>
            <span>
                <button @click="openDepartmentModal()" class="text-red-500">
                    department
                </button>
            </span>

        </div>
        <div class="bg-white p-6 rounded m-5">
            <span>click here to see the list of all </span>
            <span>
                <a href="college/list_all_college" class="text-red-500">
                    colleges
                </a>
                <span>of the school</span>
            </span>

        </div>
    </div>
    <createCollege :showCollegeModal="showCollegeModal" @close="closeCollegeModal()"/>
    <createDepartment :showDepartmentModal="showDepartmentModal" @close="closeDepartmentModal()"/>
</template>

<script>
import axios from 'axios';
import createCollege from './college/create.vue'
import createDepartment from './department/create.vue'
export default {
    components: {
        createCollege,
        createDepartment,
    }, 
    data() {
        return{
            showCollegeModal: false, 
            showDepartmentModal: false,
            departments: null,
        }
    },
    methods:{
        openCollegeModal(){
        this.showCollegeModal = true;
      },
      closeCollegeModal(){
        this.showCollegeModal = false;
      },
      openDepartmentModal(){
        this.showDepartmentModal = true
      },
      closeDepartmentModal(){
        this.showDepartmentModal = false
      },
      getAllDepartments(){
            axios.get('department/get_all_department').then(res => {
                this.departments = res.data.data
                console.log(this.departments)
            })
      }
    },
    mounted(){
        this.getAllDepartments()
    }
}
</script>