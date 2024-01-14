<template>
    <div class="flex">
        <div class="bg-white p-6 rounded m-5">
            <span>click here to set up a </span>
            <span>
                <button @click="openModal()" class="text-red-500">
                    course
                </button>
            </span>
        </div>
        <div class="bg-white p-6 rounded m-5">
            we are lecturer

        </div>
        <div class="bg-white p-6 rounded m-5">
            we are lecturer

        </div>
    </div>
    <createCourse :showModal="showModal" @close="closeModal()"/>
</template>

<script>
import createCourse from './course/create.vue'
export default {
    components: {
        createCourse,
    }, 
    data() {
        return{
            showModal: false, 
        }
    },
    methods:{ 
        openModal: function(){
        this.showModal = true;
      },
      closeModal: function(){
        this.showModal = false;
      }
    },
    mounted(){

    }
}
</script>