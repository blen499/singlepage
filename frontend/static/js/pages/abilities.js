import GetSubElements from '../components/getSubElements.js';


const skill = {
    'HTML&CSS': "65%",
    'Product (WEBPACK, GIT)': "50%",
    'JAVASCRIPT': "75%",
    'REACT/REDUX': "35%",
};

export default class Abilities{
    constructor(){
        this.setTitle('Мои возможности');
        this.getSubElements = GetSubElements;
       
    }

    setTitle (title){
        document.title = title;
    }


    

    get template(){
        return `
        <div class = 'container__skill_bar'>
        <h1 class>Мои работы</h1>
               
        <div class = 'container__skill-experience'>
            <div class = 'container__skill-experience-first'>
            <div class = 'first-header'><h3>Bangkok express food</h3></div>
            <div class = 'first-content'>
            <a href = 'https://course-jsbasic.javascript.ru/' alt = 'Первый курс'><img src = './static/img/bangkok.jpg' target="_blank"></a>
            </div>
            </div>

            <div class = 'container__skill-experience-second'>
            <div class = 'first-header'><h3>Admin panel</h3></div>
            <div class = 'first-content'>
            <a href = 'https://course-js.javascript.ru/' alt = 'Второй курс'><img src = './static/img/adminbar.png' target="_blank"></a>
            
            </div>
            </div>
        </div> 
        
        
        </div>
             `;
    }

   

    render(){  
        const element = document.createElement('div');
        element.innerHTML = this.template;

        this.element = element.firstElementChild;

        this.subElements = this.getSubElements(this.element);

        return this.element;
        
    } 



    
    getSkillBar(){        
        const div = Object.entries(skill).map((item) => {
            return `<div class = "skill_bar" style = 'width: ${item[1]}'><p>${item[0]}</p><p>${item[1]}</p></div>`
        },{}).join('');

        return div;
    }
}