import {IAuth, ITokens, IUser} from "../interfaces";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {urls} from "../constants";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    registr(user:IAuth):IRes<IUser>{
        return apiService.post(urls.auth.register, user)
    },
    me(): IRes<IUser>{
        return apiService.get(urls.auth.me)
    },
    setToken({access, refresh}: ITokens): void {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens():void{
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey)
    }

}