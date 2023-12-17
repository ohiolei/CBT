<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>This is a modal!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['showModal'],
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your modal styles here */
  .modal {
    /* Styles for the modal overlay */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    /* Styles for the modal content */
    background: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  
  .close {
    /* Styles for the close button */
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
  }
  </style>
  