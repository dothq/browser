export class Tab {
    public id: number;
    public url: string;
    public title: string;
    public status: 'loading' | 'idle' | 'crashed' | 'suspended';

    constructor({ id, url }) {
        this.id = id;
        this.url = url;
    }
}