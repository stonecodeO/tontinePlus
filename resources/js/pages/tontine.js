import { tontineApi } from '../api/tontinesApi';
import { getSessionObject } from '../utils.js/session';
const tontine = () => {
    let content = `
<!-- Card Grid -->
<div class="grid grid-flow-row text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
`
let contacts =
`
<!-- contacts component -->
<div class="w-full max-w-screen-xl mx-auto p-6 col-span-1">
     <div class="relative h-96 ounded overflow-scroll border border-grey-light mb-8 bg-white min-h-0 ms:min-h-full">
         <div class="border-b border-grey-light p-4 bg-grey-lighter py-8">
             <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
             <div class="sm:flex sm:items-center px-2 py-4">
                 <div class="flex-grow">
                    <h3 class="font-bold px-2 py-3 leading-tight">Members</h3>
                    <input type="text" placeholder="Search teams or members"
                        class="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none" />
`
    const main = document.getElementById('main')
    const id = window.location.pathname.split('/')[2]
    const token = getSessionObject('token')
    if (!token || !id){
        return
    }
    const getTontine = async () => {
        main.innerHTML = "<div>loading.....</div>";
        const data = await tontineApi(token, id)

        if (data){
            const createdAt = new Date(data.createdAt)
            const startedAt = new Date(data.startedAt)
            const endedAt = new Date(data.endedAt)
            data.users.forEach(member => {
                contacts += `
                <div class="w-full">
                    <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                        <div class="w-8 h-10 text-center py-1">
                            <p class="text-3xl p-0 text-green-dark">&bull;</p>
                        </div>
                        <div class="w-3/5 h-10 py-3 px-1">
                            <p class="hover:text-blue-dark">${member.name}</p>
                        </div>
                        <div class="w-2/5 h-10 text-right p-3">
                            <p class="text-sm text-grey-dark">Member</p>
                        </div>
                    </div>
                </div>
                `
            });
            contacts += `
            </div>
            </div>
            <div class="sm:flex bg-grey-light sm:items-center px-2 py-4">
                <div class="flex-grow text-right">
                <button class="text-grey-darkest hover:text-grey-dark py-2 px-4 rounded">
                    Cancel
                </button>
                <button class="bg-blue hover:bg-blue-dark py-2 px-4 rounded">
                    Invite
                </button>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    `
            content = content + contacts + `
            <!-- tontine component-->
            <section class="text-gray-700 w-full h-96 max-w-screen-xl mx-auto p-6 body-font overflow-hidden bg-white col-span-2 min-h-0 ms:min-h-full">
            <div class="container mx-auto">
                <div class="mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">${data.id}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${data.name}</h1>
                    <div class="flex mb-4">
                    <span class="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span class="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        </a>
                    </span>
                    </div>
                    <p class="leading-relaxed">${data.description}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div class="flex">
                        <span class="mr-3">Date</span>
                        <button class="border-2 border-gray-300 rounded-full focus:outline-none">${startedAt.toLocaleDateString("fr")}</button>
                        <button class="border-2 border-gray-300 ml-1 bg-gray-400 rounded-full decoration-white focus:outline-none"> ${endedAt.toLocaleDateString("fr")}</button>
                    </div>
                    </div>
                    <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900">${new Intl.NumberFormat().format(data.cotisation)} FCFA </span>
                    <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">S'inscrire</button>
                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
             ` ;

        }



        main.innerHTML = content
    }
    getTontine()

}


export default tontine;
