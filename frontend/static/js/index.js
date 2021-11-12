import Routes from './routes.js';

const navigateTo = url =>{
    history.pushState(null,null,url);
    router();
};
const router = async () => {
  
  const potencialMatches = Routes.map((item) => {
    return {
      item,
      isMatches: location.pathname === item.path,
    };
  });

  let match = potencialMatches.find((item) => item.isMatches);

  if (!match) {
    match = {
      item: Routes[0],
      isMatches: true,
    };
  }
  const view = new match.item.view();
  
  const root = document.querySelector('.root');

  root.innerHTML = "";
  root.append(await view.render());

};



window.addEventListener('popstate', router);



document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener('click', (event) => {
        if(event.target.matches('[data-link]')){
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });
  router();
});
