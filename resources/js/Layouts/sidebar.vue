<template>
    <div class="relative flex min-h-screen w-full">
        <!-- side bar -->
        <div class="bg-teal-500 text-cyan-200 w-64 absolute overflow-auto inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 easein-out" :class="{ 'relative -translate-x-0' : show}" v-if="show == true">
            <a href="/" class="flex items-center space-x-2 sidebar-header-bg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                <span class="text-2xl font-extrabold mx-3">CBT</span>
            </a>
            <nav>
                <a href="/dashboard" class="flex item-center px-4 py-3 m-2 rounded m-5 hover:bg-white hover:text-teal-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Dashboard</span>
                </a>
                <a href="/user_manager"
                    class="flex item-center px-4 py-3 m-2 rounded m-5 hover:bg-white hover:text-teal-700"
                    v-if="$page.props.user_role == 'admin' || $page.props.user_role == 'super_admin'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>


                    User Manager
                </a>
                <a href="/" class="flex item-center px-4 py-3 m-2 rounded m-5 hover:bg-white hover:text-teal-700"
                    v-if="$page.props.user_role == 'student' || $page.props.user_role == 'super_admin'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>

                    Test
                </a>
                <a href="/" class="flex item-center px-4 py-3 m-2 rounded m-5 hover:bg-white hover:text-teal-700"
                    v-if="$page.props.user_role == 'lecturer' || $page.props.user_role == 'super_admin'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>

                    Questions
                </a>

                <a href="/" class="flex item-center px-4 py-3 m-2 rounded m-5 hover:bg-white hover:text-teal-700"
                    v-if="$page.props.user_role == 'student' || $page.props.user_role == 'super_admin'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>

                    Calender
                </a>
                <a href="/" class="flex item-center px-4 py-3 m-2 rounded m-5 hover:bg-white hover:text-teal-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <span>Settings</span>
                </a>
                <a href="" @click="logout()"
                    class="flex item-center m-2 px-4 py-3 rounded m-5 hover:bg-white hover:text-teal-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                    <span>
                        Logout
                    </span>
                </a>
            </nav>
        </div>
        <!-- end side bar -->

        <!-- main content -->
        <div class="flex-1">
            <!-- header -->
            <div class="bg-white shadow header-bg">
                <div class="container mx-auto flex justify-between items-center">
                    <button @click="showSideBar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 mx-4 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>

                    <!-- LOGO -->
                    <span class="text-2xl font-extrabold text-teal-300">CBT</span>

                    <!-- user dropdown -->
                    <div class="relative mx-10">
                        <div class="relative inline-flex align-middle">
                            <button class="flex row text-white bg-teal-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 ease-linear transition-all duration-150
                                    font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize
                                    w-full" type="button" v-on:click="toggleDropdown()" ref="btnDropdownRef">
                                <span class="mx-1">
                                    {{ $page.props.user.name }}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </button>
                            <div v-bind:class="{ 'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow }"
                                class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                                style="min-width:12rem" ref="popoverDropdownRef">
                                <a href="#pablo"
                                    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700">
                                    Action
                                </a>
                                <a href="#pablo"
                                    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700">
                                    Another action
                                </a>
                                <a href="#pablo"
                                    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700">
                                    Something else here
                                </a>
                                <div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25">
                                </div>
                                <a @click="logout" href=""
                                    class="text-sm py-2 px-4 flex row font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                                    </svg>
                                    <span>
                                        Logout
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- end user dropdown -->
                </div>
            </div>
            <!-- end header -->

            <!-- content -->
            <div class="p-8 text-teal-700">
                <slot />
            </div>
            <!-- end content -->

        </div>
        <!-- end main content -->
    </div>
</template>
<script>
import axios from 'axios';
import { createPopper } from "@popperjs/core";

export default {

    components: {

    },
    data() {
        return {
            show: true,
            dropdownPopoverShow: false,

        }
    },
    methods: {
        showSideBar() {
            this.show = !this.show

        },
        logout() {
            axios.post('/logout')
        },
        toggleDropdown() {
            if (this.dropdownPopoverShow) {
                this.dropdownPopoverShow = false;
            } else {
                this.dropdownPopoverShow = true;
                createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
                    placement: "bottom-start"
                });
            }
            if(window.document.click){
                this.dropdownPopoverShow = false;
            }
        }
    }
}
</script>
<style scoped>
.sidebar-header-bg {
    background-color: white;
    padding: 2.1rem;
}

.header-bg {
    background-color: white;
    padding: 1.7rem;
}
</style>