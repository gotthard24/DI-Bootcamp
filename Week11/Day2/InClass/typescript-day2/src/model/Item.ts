export interface ItemInterface {
    id: string;
    body: string;
    isChecked: boolean;
}

export default class Item implements ItemInterface {
    private _id: string;
    private _body: string;
    private _isChecked: boolean;

    constructor(id: string, body: string, isChecked: boolean = false) {
        this._id = id;
        this._body = body;
        this._isChecked = isChecked;
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
}
