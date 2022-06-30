import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../Model/Types';

export default class Authentication {
    generateToken = (id: AuthenticationData):string => {
        const token = jwt.sign(
        {
            id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.EXPIRES_IN as string
        }
        );
        return token;
    }

    getTokenData = (token:string):AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as any
        return data.id
    }
} 