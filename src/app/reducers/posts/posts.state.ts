import { Post } from 'src/app/models/Post';

export const postsNode = 'posts';

export interface PostsState {
  posts: Array<Post>,
}

export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'Post 1', description: 'Description of post 1' },
    { id: '2', title: 'Post 2', description: 'Description of post 2' },
    { id: '3', title: 'Post 3', description: 'Description of post 3' },
  ]
};
