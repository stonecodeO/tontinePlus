import home from "./pages/home";
import tontines from "./pages/tontines";
import loginPage from "./pages/login";
import register from "./pages/register";
import about from "./pages/about"
import contact from "./pages/contact"
import page404  from "./pages/404";
import tontine from "./pages/tontine";


const routes = {
    "/": home,
    "/tontines": tontines,
    "/login": loginPage,
    "/register": register,
    "/about": about,
    "/contact": contact,
    "/tontine": tontine,
    "/404": page404,
}
/**
 * Deal with call and auto-render of Functional Components following click events
 * on Navbar, Load / Refresh operations, Browser history operation (back or next) or redirections.
 * A Functional Component is responsible to auto-render itself : Pages, Header...
 */

const Router = () => {
    window.routes = routes
    const navbarWrapper = document.querySelector('#navbar_app');
    navbarWrapper.addEventListener('click', event => {
        event.preventDefault();
        let uri = event.target.dataset.uri;
        if (uri){
            event.preventDefault();
            /* use Web History API to add current page URL to the user's navigation history
            & set right URL in the browser (instead of "#") */
            window.history.pushState({},uri,window.location.origin + uri);
            /* render the requested component
            NB : for the components that include JS, we want to assure that the JS included
            is not runned when the JS file is charged by the browser
            therefore, those components have to be either a function or a class*/
            renderComponent(uri);
        }
    });
    /* Route the right component when the page is loaded / refreshed */
    window.addEventListener('load', event =>{
        renderComponent(window.location.pathname);
    });
  // Route the right component when the user use the browsing history
    window.addEventListener('popstate', () => {
        renderComponent(window.location.pathname)
    });

}
/**
 * display the component inside dom
 */
function renderComponent(uri){
    if(!uri){
        componentToRender = routes[404]
    }
    let tontineExpression = /\/tontine\/[0-9]+/
    let regex = new RegExp(tontineExpression)
    let componentToRender = null
    if(uri.match(regex)){
        componentToRender = routes['/tontine']
    }else{
        componentToRender = routes[uri]
    }

    componentToRender()
}
/**
 * Call and auto-render of Functional Components associated to the given URL
 * @param {*} uri - Provides an URL that is associated to a functional component in the
 * routes array of the Router
 */
function RedirectToRightUrl(uri){
  // use Web History API to add current page URL to the user's navigation history & set right URL in the browser (instead of "#")
    window.history.pushState({},uri, window.location.origin + uri);
  // render the requested component
    renderComponent(uri)
}


export {Router, RedirectToRightUrl} ;
