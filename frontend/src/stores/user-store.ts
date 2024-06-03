//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/services/axios';
import { useRouter } from 'vue-router';

const router = useRouter();

export const useUserStore = defineStore('User', () => {
    const token = ref(null);
    const expiresIn = ref(0);
    const userRole = ref('');
    const allUsers = ref();
    const user = ref();

    //User Registered
    const registered = ref(true);

    //Global cath auth form
    const name = ref('');
    const email = ref('');
    const password = ref('');

    // Login, Regiter & Logout
    const login = async (email: string, password: string) => {
        try {
            const res = await axiosInstance.post('/login', {
                email,
                password
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            userRole.value = res.data.role;
            localStorage.setItem('user', 'HGjH23');
            setTime();
        } catch (error: any) {
            if (error.response) {
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const res = await axiosInstance.post('/register', {
                name,
                email,
                password
            });
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            userRole.value = res.data.role;
            localStorage.setItem('user', 'HGjH23');
            setTime();
        } catch (error: any) {
            if (error.response) {
                // console.log(error.response.data);
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const logout = async () => {
        try {
            await axiosInstance.get('/logout');
            cleanStoreData();
            router.push('/');
        } catch (error: any) {
            console.log(error);
        } finally {
            resetStore();
            sessionStorage.removeItem('cookies');
        }
    };

    //Do de Refresh token
    const refreshToken = async () => {
        console.log('RefreshToken');
        try {
            const res = await axiosInstance.get('/refresh');
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            userRole.value = res.data.role;
            setTime();
        } catch (error: any) {
            console.log(error.message);
        }
    };

    //Get data users
    const getAllUsers = async () => {
        try {
            const res = await axiosInstance({
                url: '/',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token.value
                }
            });

            allUsers.value = res.data.user;
        } catch (error: any) {
            if (error.response) {
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const getUserById = async (id: any) => {
        try {
            const res = await axiosInstance({
                url: '/' + id,
                method: 'GET'
            });
            user.value = res.data.name;
        } catch (error: any) {
            if (error.response) {
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    const getUserByEmail = async (email: string) => {
        try {
            const res = await axiosInstance({
                url: '/user/' + email,
                method: 'GET'
            });
            user.value = res.data.name;
        } catch (error: any) {
            if (error.response) {
                throw error.response.data;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    //Utils and tools functions
    const resetStore = () => {
        token.value = null;
        expiresIn.value = 0;
    };

    const setTime = () => {
        setTimeout(() => {
            refreshToken();
        }, expiresIn.value * 1000 - 6000);
    };

    const cleanStoreData = () => {
        allUsers.value = null;
        localStorage.removeItem('user');
    };

    return {
        token,
        expiresIn,
        userRole,
        login,
        refreshToken,
        logout,
        register,
        getUserById,
        getUserByEmail,
        getAllUsers,
        allUsers,
        user,
        name,
        email,
        password,
        registered
    };
});
