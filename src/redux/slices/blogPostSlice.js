import { createSlice } from "@reduxjs/toolkit";
import { showToast } from "../../components/utils/toast";



const fetchFromLocaleStorage = () => {
    let post = localStorage.getItem('post');
    if (post) {
        const parsedPost = JSON.parse(post);
        return Array.isArray(parsedPost) ? parsedPost : [parsedPost];
    } else {
        return [];
    }
}

const storeInLocaleStorage = (data) => {
    localStorage.setItem('post', JSON.stringify(data));
}
const initialState = {
    posts: fetchFromLocaleStorage(),
    // posts: [],
}
let idCounter = 1;
export const blogPostSlice = createSlice({
    name: 'blogPostSlice',
    initialState,
    reducers: {
        addNewBlog: (state, action) => {
            const newPost = { ...action.payload, id: idCounter };
            state.posts.push(newPost);
            storeInLocaleStorage(state.posts);
            idCounter++;
            showToast('Your blog has been shared! ')

        },
        clearAll: (state) => {
            state.posts = [];
            idCounter = 1;
            storeInLocaleStorage(state.posts);

        },
        deleteBlog: (state, action) => {
            const selectedId = state.posts.find((post) => post.id === action.payload.id);
            
            if (selectedId) {
                const selectPost = state.posts.filter(post => parseInt(post.id) !== parseInt(selectedId.id));
                state.posts = selectPost;
                showToast('Blog deleted succefuly.')
                if (state.posts.length === 0) {
                    idCounter = 1;
                    storeInLocaleStorage(state.posts);
                }
                storeInLocaleStorage(state.posts);
            } else {
                alert('ıd is not exist')
            }
        },
        updateBlog: (state, action) => {
            const findPost = state.posts.find(post => parseInt(post.id) === parseInt(action.payload.id));

            if (findPost) {
                Object.assign(findPost, action.payload);
                storeInLocaleStorage(state.posts);

            }
        }
    },
})


export const { addNewBlog, clearAll, deleteBlog, updateBlog } = blogPostSlice.actions;
export default blogPostSlice.reducer;


