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
            <span>click here to view </span>
            <span>
                <button @click="viewCourseModal()" class="text-red-500">
                    course
                </button>
                <span> you teach</span>
            </span>

        </div>
    </div>
    <createCourse :showCourseModal="showCourseModal" @close="closeCourseModal()"/>
    <viewCourse  :showViewCourseModal=" showViewCourseModal" @close="closeViewCourseModal" />
</template>

<script>
import createCourse from './course/create.vue'
import viewCourse from './course/view.vue'
export default {
    components: {
        createCourse,
        viewCourse,
    }, 
    data() {
        return{
            showCourseModal: false, 
            showViewCourseModal: false,
        }
    },
    methods:{ 
        openCourseModal(){
        this.showCourseModal = true;
      },
      closeCourseModal(){
        this.showCourseModal = false;
      },
      viewCourseModal(){
        this.showViewCourseModal = true;
      },
      closeViewCourseModal(){
        this.showViewCourseModal = false;
      }
    },
    mounted(){

    }
}
</script>