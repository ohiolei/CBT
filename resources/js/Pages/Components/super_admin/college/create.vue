<template>
    <div>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
  <div class="relative w-auto my-6 mx-auto max-w-4xl"> <!-- Increase max-w-4xl or choose a value that suits your design -->
    <!--content-->
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <!--header-->
      <div class="flex text-teal-500 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 class="text-3xl font-semibold">
          Create new course
        </h3>
      </div>
      <!--body-->
      <div class="w-full">
          <div class="my-1 text-blueGray-500 text-lg leading-relaxed p-6">
            <input type="text" placeholder="College Name" v-model="college_name" class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200" />
            <input type="text" placeholder="College Code" class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200" />
            <input type="text" placeholder="Campus" class="w-full my-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200" />
          </div>
       
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="closeModal()">
          Close
        </button>
        <button class="text-teal-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="closeModal()">
          Create Course
        </button>
      </div>
    </div>
  </div>
</div>
<div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

    </div>
</template>
  
<script>
export default {
    name: "regular-modal",
    data() {
        return {
            showModal: false,
            college_name: null
        }
    },
    props: {
        showModal: Boolean
    },
    methods: {
        closeModal: function () {
            this.$emit('close');
        },
        createCollege(){
            
        }
    }
}
</script>