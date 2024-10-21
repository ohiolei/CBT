<template>
    test

    <div class="min-h-min">
        <div class="flex items-center space-x-4 m-20">
            <div class="flex-1">
                <NavLink href="#"
                    class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-white dark:bg-white dark:hover:bg-white">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="/docs/images/blog/image-4.jpg" alt="">
                    <div class="p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                    </div>
                </NavLink>
            </div>
            <div class="flex-1">
                <NavLink href="#"
                    class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-white dark:bg-white dark:hover:bg-white">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="/docs/images/blog/image-4.jpg" alt="">
                    <div class="p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>

</template>

<script>
import sidebar from '../../../Layouts/sidebar.vue';
import NavLink from '@/Components/NavLink.vue';

export default {
    layout: (h, page) => h(sidebar, [page]),
    components: {
        NavLink,
    },
    props: {

    },
    data() {
        return {

        };
    },

    methods: {

    },
    mounted() {

    },

}
</script>