import GetSubElements from '../components/getSubElements.js';
const unsplashAPI = 'https://api.unsplash.com/photos1/random?count=4&client_id=sOgjl7yRKjwOKjzbVmbb9vueyddfeJBlam75D_eenCQ'; // 4 рандомных фотки
//const unsplashWidth = '&w=750&dpr=2'; для нужного размера по ширине фотографии

const staticPhoto = [
    "photo-1437196665084-494faaa775a7.jpg",
    "photo-1630225734620-1c3caaf65a17.jpg",
    "photo-1631295156305-6afe3f42b767.jpg",
    "photo-1628326036318-9af1614d6584.jpg"
];



export default class DashBoard {

    onClick = (event) => {
        const imageTarget = event.target.closest('.main__content_img');
        const arr = this.subElements.image.children;
        
        if (!imageTarget){
            return;
        }

        
        for (const value of Object.values(arr)){
                if (value.classList.contains('active')){
                    value.classList.remove('active');
                }
            }

            imageTarget.classList.add('active')
           
    }

    constructor() {
        this.setTitle('Главное меню');
        this.getSubElements = GetSubElements;
    }

    setTitle(title) {
        document.title = title;
    }


    async render() {
       const element = document.createElement('div');
       element.innerHTML = await this.getData();

       this.element = element.firstElementChild;
       
       this.subElements = this.getSubElements(element);

       this.initEventListener();
       
       return this.element;

    }


    async getData(){
        const response = await fetch(unsplashAPI);
        
        if (!response.ok) {
            const data = staticPhoto
                .map((item, i) => {
                    return ` <div class = 'main__content_img' style = 'background-image: url("./static/img/${item}")'>
                                 <h3>Картинка №${i + 1}</h3>
                             </div>`;

                })
                .join('');
                
            return this.template(data);

        }

    const json = await response.json(); // массив-

    const data = json
        .map(item => {
            return ` <div class = 'main__content_img' style = 'background-image: url("${item.urls.regular}")'>
            <h3>${item.user.username}</h3>
        </div>`;
        })
        .join('');
      
    return this.template(data);

    }

    template(data) {

        return `<div class = 'main'>
                        <div class = 'main__text'>
                            <h1>Welcome to my page!</h1>
                            <p>Ты находишься на моей странице.</p>
                            <p>Сайт предназначен для ознакомления c моими возможностями</p>
                        </div>
                        <div class = 'main__content' data-element = "image">
                                    ${data}                      
                        </div>
                       
                        <div class = 'main__section2'>
                           <a href = "/abilities" data-link>Подробнее</a>
                        </div>
                </div> `;
    }

      initEventListener() {
          const subElement = this.subElements.image; 
         
          subElement.addEventListener('click', this.onClick);
    }

}