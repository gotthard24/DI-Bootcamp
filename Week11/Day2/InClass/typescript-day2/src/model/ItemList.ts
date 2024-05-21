import Item from "./Item";

interface ListInterface {
    list: Item[];
    clearList(): void;
    addItem(item: Item): void;
    removeItem(id: string): void;
    save(): void;
    load(): void;
}

export default class List implements ListInterface{
    private _list: Item[]

    constructor(list: Item[] = [] ){
        this._list = list
    }

    get list(): Item[]{
        return this._list
    }

    clearList(): void {
        this._list = [];
        this.save()
    }

    addItem(item: Item): void {
        this._list.push(item)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id)
        this.save()
    }

    save(): void {
        window.localStorage.setItem('list', JSON.stringify(this._list))
    }

    load(): void {
        const list: {_id: string, _body: string, _isChecked: boolean}[] = JSON.parse(window.localStorage.getItem('list')!) || []

        if (list.length === 0) return
        list.forEach((item) =>{
            this.addItem(new Item(item._id, item._body, item._isChecked))
        })
    }
}