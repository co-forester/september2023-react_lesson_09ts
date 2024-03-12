import {IAuth, IUser} from "../interfaces";
import {IRes} from "../types";

const baseURL = 'owu.linkpc.net/carsAPI/v2';

const auth = '/auth';
const cars = '/cars';
const users = '/users';

const urls = {
    cars:{
        base: cars,
        byId: (id: number): string => `${cars}/${id}`
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        register: users,
        me: `${auth}/me`
    }
}

export {baseURL, urls}