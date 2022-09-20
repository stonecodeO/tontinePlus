import { tontinesApi } from "../api/tontinesApi";
import { RedirectToRightUrl } from "../router";
import { getSessionObject } from "../utils.js/session";
let content = `
<!-- Card List Section -->
<section class="bg-gray-100 dark:bg-gray-900 py-10 px-5">
    <!-- Card Grid -->
    <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
`
const Tontines = () => {
    const main = document.querySelector("#main");
    main.innerHTML = content;
    const token = getSessionObject('token')
    if (token === false) RedirectToRightUrl('/login')
    const createTontinesDom= async () => {
       let data =  await tontinesApi(token);
       if(data){
            data.data.map(tontine => {
               content += `
               <a href="#" data-key="${tontine.id}" class="flex flex-col tontine_elt items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="storage/images/tontine_no_img.jpg" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${tontine.name}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${tontine.description}</p>
                        <h3 class="mb-3 font-normal dark:text-gray-400">Members : ${tontine.total_member}</h3>
                    </div>
                </a>`
           })
       }

           main.innerHTML = content
           return "ok";
    };
    const handleTontineClick = async () => {
        const value = await createTontinesDom()
        if (value === "ok"){
            const tontinesElts = document.querySelectorAll('.tontine_elt');
            tontinesElts.forEach(tontineElt => {
                tontineElt.addEventListener('click', e => {
                    e.preventDefault()
                    const url = "/tontine/" + String(tontineElt.dataset.key)
                    RedirectToRightUrl(url)
                })
            } )
        }
    }

    handleTontineClick()
    /* updateTontines().then(result => {
        content += `</div>
        </section>`
    }); */


}

export default Tontines;






