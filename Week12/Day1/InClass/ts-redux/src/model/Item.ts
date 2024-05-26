export interface ItemInterface {
    id: string;
    body: string;
    isChecked: boolean;
    isEditing: boolean;
}

export default class Item implements ItemInterface {
    private _id: string;
    private _body: string;
    private _isChecked: boolean;
    private _isEditing: boolean;

    constructor(id: string, body: string, isChecked: boolean = false, isEditing: boolean = false) {
        this._id = id;
        this._body = body;
        this._isChecked = isChecked;
        this._isEditing = isEditing;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get body(): string {
        return this._body;
    }

    set body(body: string) {
        this._body = body;
    }

    get isChecked(): boolean {
        return this._isChecked;
    }

    set isChecked(isChecked: boolean) {
        this._isChecked = isChecked;
    }

    get isEditing(): boolean {
        return this._isChecked;
    }

    set isEditing(isEditing: boolean) {
        this._isEditing = isEditing;
    }

    public serialize(): ItemInterface {
        return {
            id: this._id,
            body: this._body,
            isChecked: this._isChecked,
            isEditing: this._isEditing
        }
    }

    public static deserialize(data: ItemInterface):Item {
        return new Item(data.id, data.body, data.isChecked, data.isEditing);
    }
}
