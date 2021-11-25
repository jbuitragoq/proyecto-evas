export class ArticleModel {
    public id = 0;
    public title = '';
    public image = '';
    public imageTitle = '';
    public date = '';
    public author = '';
    public paragraphs: string[] = [];

    constructor(json: any = null) {
        if (json !== null) {
            this.id = json.id;
            this.title = json.title;
            this.image = json.image;
            this.imageTitle = json.imageTitle;
            this.date = json.date;
            this.author = json.author;
            this.paragraphs = json.paragraphs;
        };
    }
}