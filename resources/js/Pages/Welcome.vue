<template>
    <div class="flex justify-end items-center space-x-4 m-5" v-if="!$page.props.user">
        <a
            href="/login"
            class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Login
        </a>
        <a
            href="/register"        
            class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Register
        </a>
    </div>
    <div class="flex justify-end items-center space-x-4 m-5" v-else>
        <a
            href="/dashboard"
            class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
           Dashboard
        </a>
      
    </div>

    <div
        class="w-100 h-full m-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-200">
        <center>
            <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                School Of Online Test
            </p>
        </center>
        <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                <!-- Column -->
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    GNS 101
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

                <!-- Column -->
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    GNS 201
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

                <!-- Column -->
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    GNS 301
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

                <!-- Column -->
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    GNS 401
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

                <!-- Column -->
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    ENT 201
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

                <!-- Column -->
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    ENT 401
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

            </div>
        </div>
    </div>
    <footer class="bg-black p-10">
            <div class="text-white">
                copy-right
            </div>
        </footer>
</template>

<script>

export default {

}
</script>