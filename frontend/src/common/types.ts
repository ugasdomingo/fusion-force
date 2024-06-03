export interface Post {
    _id: string;
    date: Date;
    title: string;
    category: string;
    img: {
        public_id: string;
        secure_url: string;
    };
    body: string;
    urlVideo?: string;
    author: string;
}
