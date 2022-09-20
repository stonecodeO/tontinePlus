import auth from '../api/auth';
import { RedirectToRightUrl} from '../router';
import { loader } from '../components/loader';
import { refresh_navbar } from '../components/navbar';
const content = `
<div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form id="login_app" class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>`;
let alertMessage = (name, severity) => {
    let message = `
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
            <p class="font-bold">${name}</p>
            <p class="text-sm">${severity}</p>
            </div>
        </div>
    </div>`
    return message
} ;

const loginPage = () => {
    const main = document.querySelector("#main");
    main.innerHTML = content;

    const form = document.getElementById('login_app')
    form.addEventListener('submit', e => {
        e.preventDefault();
        getApiResponse(e)
    })
    const getApiResponse = async (evt) => {
        const loginUser = new auth()
        const response = await loginUser.handleLogin(evt.target.email.value, evt.target.password.value)
        if (response === true ){
            main.innerHTML = alertMessage(" Auth success ! ", "waiting for redirection ...") + loader
            setTimeout(() => {
                RedirectToRightUrl('/');
                refresh_navbar();

            },500)
        }else {
            main.innerHTML = alertMessage(" Auth failed ", "Bad credentails, try again") + content

        }
    }
}


export default loginPage;
