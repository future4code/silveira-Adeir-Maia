import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../Model/types';

export default class Authentication {
    generateToken = (payload: AuthenticationData):string => {
        const token = jwt.sign(
        {
            payload
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: '5h'
        }
        );
        return token;
    }

    getTokenData = (token:string):AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as any
        return data.payload
    }
} 