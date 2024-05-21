import './style.css';
// import { v4 as uuidv4 } from 'uuid';

// interface TaskInterface {
//   id: string;
//   body: string;
// }

// class Task implements TaskInterface {
//   public id: string;
//   public isCompleted: boolean;

//   constructor(public body: string) {
//     this.id = uuidv4();
//     this.isCompleted = false
//   }
// }

// class List {
//   constructor(public tasks: TaskInterface[]) {}

//   addTask(body: string) {
//     this.tasks.push(new Task(body));
//   }

//   removeTask(id: string){
//     const index = this.tasks.findIndex(item => item.id === id)
//     console.log(index);
//     console.log(this.tasks[index]);
    
//     this.tasks.splice(index, 1)
//     console.log(this.tasks);
//   }

//   removeAll(){
//     this.tasks = []
//   }
// }

// let list = new List([])

// let ul = document.getElementById('listItems') as HTMLUListElement
// let addButton = document.getElementById('addItem') as HTMLButtonElement
// let addInput = document.getElementById('newItem') as HTMLInputElement
// let clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement

// addButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   const taskBody = addInput.value.trim();
  
//   if (taskBody) {
//     list.addTask(taskBody)

//     let newLi = document.createElement('li');
//     newLi.classList.add('item');

//     let checkboxInput = document.createElement('input');
//     checkboxInput.type = 'checkbox';
//     checkboxInput.id = list.tasks[length].id
//     newLi.appendChild(checkboxInput);

//     let taskLabel = document.createElement('label');
//     taskLabel.htmlFor = checkboxInput.id;
//     taskLabel.textContent = taskBody;
//     newLi.appendChild(taskLabel);

//     let deleteButton = document.createElement('button');
//     deleteButton.classList.add('button');
//     deleteButton.textContent = 'X';
//     newLi.appendChild(deleteButton);

//     deleteButton.addEventListener('click', (e) =>{
//       e.preventDefault()
//       list.removeTask(checkboxInput.id)
//       newLi.remove()
//     })

//     ul.appendChild(newLi);
//   }
//   console.log(list);
// });

// clearButton.addEventListener('click', (e) =>{
//   e.preventDefault()
//   list.removeAll()
//   ul.innerHTML = ''
// })

import List from "./model/ItemList";
import ListTemplate from "./model/ListTemplate";
import Item from "./model/Item";

const init = () => {
  const list = new List();
  const template = new ListTemplate();

  //add listener
  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
  const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement

  itemEntryForm.addEventListener('submit', (e: SubmitEvent): void =>{
    e.preventDefault()

    // get a new item value
    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryValue:string = input.value.trim()
    console.log(newEntryValue);
    
    if(!newEntryValue) return

    // create a new item
    const newItem = new Item(Date.now().toString(), newEntryValue)
    console.log(newItem);
    
    list.addItem(newItem)
    console.log(list);
    
    template.render(list)
  })

  clearButton.addEventListener('click', () =>{
    list.clearList()
    template.render(list)
  })

  list.load()
  template.render(list)
}

document.addEventListener('DOMContentLoaded', init)

// window.localStorage.setItem('myList', JSON.stringify(['Mmm','Dan', 'On']))
// const item = window.localStorage.getItem('myList')
// if(item) console.log(JSON.parse(item))