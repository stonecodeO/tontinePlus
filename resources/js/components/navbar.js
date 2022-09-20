import { getSessionObject } from "../utils.js/session";

const content = `
<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
<nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
  <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
    <div class="flex items-center justify-between w-full md:w-auto">
      <a href="#">
        <span class="sr-only">Workflow</span>
        <img alt="Workflow" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600">
      </a>
      <div class="-mr-2 flex items-center md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
    <a href="/" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/">Home</a>

    <a href="#" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/tontines">Tontines</a>

    <a href="#" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/market">Marketplace</a>

    <a href=""" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/about">About</a>

    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500" data-uri="/login">Log in</a>
  </div>
 </nav>
</div>

<!--
Mobile menu, show/hide based on menu open state.

Entering: "duration-150 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
-->
<div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
  <div class="px-5 pt-4 flex items-center justify-between">
    <div>
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
    </div>
    <div class="-mr-2">
      <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span class="sr-only">Close main menu</span>
        <!-- Heroicon name: outline/x-mark -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  <div class="px-2 pt-2 pb-3 space-y-1">
    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" data-uri="/">Home</a>

    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"data-uri="/tontines">Tontines</a>

    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"data-uri="/market">Marketplace</a>

    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"data-uri="/about">About</a>
  </div>
  <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"data-uri="/login"> Log in </a>
</div>
</div>
`
const connectedContent = `
<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
<nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
  <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
    <div class="flex items-center justify-between w-full md:w-auto">
      <a href="#">
        <span class="sr-only">Workflow</span>
        <img alt="Workflow" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600">
      </a>
      <div class="-mr-2 flex items-center md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
    <a href="/" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/">Home</a>

    <a href="#" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/tontines">Tontines</a>

    <a href="#" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/market">Marketplace</a>

    <a href=""" class="font-medium text-gray-500 hover:text-gray-900" data-uri="/about">About</a>
  </div>
  <div class="overflow-hidden app_user_icon relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
  </div>
 </nav>

</div>

<!--
Mobile menu, show/hide based on menu open state.

Entering: "duration-150 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
-->
<div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
  <div class="px-5 pt-4 flex items-center justify-between">
    <div>
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
    </div>
    <div class="-mr-2">
      <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span class="sr-only">Close main menu</span>
        <!-- Heroicon name: outline/x-mark -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  <div class="px-2 pt-2 pb-3 space-y-1">
    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" data-uri="/">Home</a>

    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"data-uri="/tontines">Tontines</a>

    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"data-uri="/market">Marketplace</a>

    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"data-uri="/about">About</a>
  </div>
  <div class="overflow-hidden app_user_icon relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
  </div>
</div>

</div>
`
const navbar = () =>{
    const container = document.getElementById('navbar_app')
    if (getSessionObject("token")){
        container.innerHTML = connectedContent
        const user_icons = document.querySelectorAll('.app_user_icon')
        //console.log(user_icons)
        user_icons.forEach( user_icon => {
            user_icon.addEventListener('click', () => {
                console.log('click sur l\'icone');
            })
        })
        return
    }
    container.innerHTML = content;

}
const refresh_navbar = () => {
    document.location.reload(true)
}

export { navbar, refresh_navbar} ;
