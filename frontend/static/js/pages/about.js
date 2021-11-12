// import Tooltip from '../components/tooltip.js';
// Tooltip.initialize();
export default class About {
    constructor() {
        this.setTitle('About');

    }

    setTitle(title) {
        document.title = title;
    }


    render() {
        const element = document.createElement('div');
        element.innerHTML = this.template;
        this.element = element.firstElementChild;
        return this.element;
    }

    get template() {
        return `
        <div class = 'container__skill_bar'>
            <h1>Свяжись со мной!</h1>
         
            <form action="https://formsubmit.co/a7ee331b59d671cd8c80ba5335c53584 " method="POST" class = 'form__post'>
             <div class = 'form__group' data-tooltip = 'Введите свое имя'>
                <input type="text" name="name"required class = 'form__input-css' placeholder = 'Имя'>
             </div>
             <div class = 'form__group' data-tooltip = 'Введите свою эл.почту'>
                <input type="email" name="email" required class = 'form__input-css' placeholder = 'Почта' >
             </div>
             <div class = 'form__group' data-tooltip = 'Введите свой текст'>
             <textarea name ="text" class = 'form__input-text' placeholder = 'Текст'></textarea>
            </div>
        <input type="text" name="_honey" style="display:none">
        <input type="hidden" name="_template" value="table">
        <button type="submit" class = 'form-btn'>Отправить</button>
        </form>
        <h3>Весь код  данного SPA лежит в моем репозитории по ссылке <a  href = "https://github.com/blen499/singlepage" target="_blank">*КЛИКНИ*</a></h3>

        </div>
        `;
    }
}