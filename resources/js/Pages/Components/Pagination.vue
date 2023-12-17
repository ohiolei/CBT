<template>
    <nav aria-label="Page navigation example" v-if="showPagination">
      <ul class="flex justify-ends">
        <li class="p-1" v-for="(link, key) in links" :key="key" v-bind:class="isActive(link)">
          <a
            href="javascript:void(0);"
            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500"
            @click="onEmitEvent(link.url)"
            v-if="link.url"
          >{{ link.label }}</a>
          <!-- <a class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500" v-else @click.prevent="handleNoLink">{{ link.label }}</a> -->
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      links: Array,
    },
    computed: {
      showPagination() {
        return true; //this.links.length > 2;
      },
    },
    methods: {
      isActive(link) {
        return link.active === true ? "active" : "normal";
      },
      handleNoLink() {
        return false;
      },
      onEmitEvent(arg1) {
        this.$emit("fetchDataFrom", arg1);
      },
    },
    mounted: function () {},
  };
  </script>