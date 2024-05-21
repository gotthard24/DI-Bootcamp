import List from "./ItemList";

interface DOMList {
    render(list: List): void
}

export default class ListTemplate implements DOMList{
    public ul: HTMLUListElement

    constructor(){
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }

    clear():void{
        this.ul.innerHTML = "";
    }

    render(list: List): void {
        this.clear()
        list.list.forEach((item) => {
            const li = document.createElement('li') as HTMLLIElement
            li.className = 'item'

            const checkbox = document.createElement('input') as HTMLInputElement
            checkbox.type = 'checkbox'
            checkbox.id = item.id
            checkbox.checked = item.isChecked
            li.appendChild(checkbox)

            checkbox.addEventListener('change', () =>{
                item.isChecked = !item.isChecked
            })

            const label = document.createElement('label') as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.body
            li.appendChild(label)

            const delButton = document.createElement('button') as HTMLButtonElement
            delButton.textContent = 'X'
            delButton.className = 'button'
            li.appendChild(delButton)
            
            delButton.addEventListener('click', ()=>{
                list.removeItem(item.id)
                this.render(list)
            })
            
            this.ul.appendChild(li)
        })
    }
}