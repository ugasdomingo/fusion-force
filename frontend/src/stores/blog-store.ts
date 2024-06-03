//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/services/axios';
import { type Post } from '@/common/types';
import { useUserStore } from '@/stores/user-store';

//Define Stores
export const useBlogsStore = defineStore('Blog', () => {
    const userStore = useUserStore();

    //Serve Blogs data
    const allBlogs = ref();
    const oneBlog = ref<Post | null>(null);

    //Logics
    const getAllBlogs = async (showPost: number) => {
        try {
            const response = await axiosInstance.get('/post/all', {
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            const posts = response.data;

            if (showPost === 0) {
                allBlogs.value = posts;
            } else {
                const finalArray = posts.slice(-showPost);
                allBlogs.value = finalArray;
            }
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createBlog = async (formData: any) => {
        try {
            const res = await axiosInstance({
                url: '/post',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            });

            oneBlog.value = res.data.blog;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getBlogByID = async (id: string) => {
        try {
            const res = await axiosInstance({
                url: '/post/' + id,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                }
            });

            oneBlog.value = res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const updateBlog = async (id: string) => {
        try {
            const res = await axiosInstance({
                url: '/post/' + id,
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                }
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const deleteBlog = async (id: string) => {
        try {
            const res = await axiosInstance({
                url: '/post/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                }
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allBlogs,
        oneBlog,
        createBlog,
        getAllBlogs,
        getBlogByID,
        updateBlog,
        deleteBlog
    };
});
