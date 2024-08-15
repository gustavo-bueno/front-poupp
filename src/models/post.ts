export interface IPost {
  _id: string;
  title: string;
  image: string;
  content: string;
  author: {
    name: string;
  };
  topic: string;
  comments: [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
