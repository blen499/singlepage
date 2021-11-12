import getSubElements from "./getSubElements.js";


export default class SortableTable {

   onChange = (event) => {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
         const data = reader.result;

         const parser = new DOMParser();
         const doc = parser.parseFromString(data, 'application/xml');


         const xmlDataElement = doc.getElementsByTagName('Элемент');


         console.log(xmlDataElement);



         const table = document.createElement("table");
         const thead = document.createElement("thead");
         const tbody = document.createElement("tbody");
         table.append(thead);



         // Заголовок
         for (let j = 0; j < xmlDataElement[0].children.length; j++) {

            const th = document.createElement('th');
            const b = xmlDataElement[0].children[j].localName;
            
               th.innerHTML += `<th>${b}</th>`;
              
            thead.append(th);
         }

         // Содержимое
         for (let i = 0; i < xmlDataElement.length; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < xmlDataElement[i].children.length; j++) {
               const data = xmlDataElement[i].children[j].innerHTML; 
    
                  row.innerHTML += `<td>${data}</td>`;

            }      
            tbody.append(row);
         }

      
         table.append(tbody);
         this.subElements['xml__table'].append(table);
         
      };
      reader.onerror = () => {
         this.subElements['xml__table'].error();
      };

   };

   remove() {
      this.subElements['xml__table'].remove();
   }



   constructor() {
      this.getSubElements = getSubElements;

   }

   render() {
      const element = document.createElement('div');
      element.innerHTML = this.template();

      this.element = element.firstElementChild;

      this.subElements = this.getSubElements(this.element);

      this.getData();

      return this.element;

   }

   template() {
      return `<div class="input__wrapper">
        <div class = 'input__button'>
        <input name="file" type="file" name="file" id="input__file" class="input input__file input__file-button" multiple data-element = 'input' >
        <label for="input__file" class="input__file-label">
           Загрузите файл
        </label>
        </div>
        <div class = 'sortable__table_xml' data-element = 'xml__table'>
        </div>
   
     </div>`;
   }

   getData() {
      const inputs = this.subElements.input;

      inputs.addEventListener('change', this.onChange);

   }
}
