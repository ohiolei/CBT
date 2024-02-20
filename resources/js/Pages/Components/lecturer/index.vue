<template>
    <div class="flex">
        <div class="bg-white p-6 rounded m-5">
            <span>click here to set up a </span>
            <span>
                <button @click="openCourseModal()" class="text-red-500">
                    course
                </button>
            </span>
        </div>
        <div class="bg-white p-6 rounded m-5">
           Click <a href="/course/get_course_page" class="text-red-500">Here</a> to view courses
        </div>
        <div class="bg-white p-6 rounded m-5">
            we are lecturer

        </div>
    </div>
    <createCourse :showCourseModal="showCourseModal" @close="closeCourseModal()"/>
</template>

<script>
import createCourse from './course/create.vue'
export default {
    components: {
        createCourse,
    }, 
    data() {
        return{
            showCourseModal: false, 
        }
    },
    methods:{ 
        openCourseModal: function(){
        this.showCourseModal = true;
      },
      closeCourseModal: function(){
        this.showCourseModal = false;
      }
    },
    mounted(){

    }
}
</script>