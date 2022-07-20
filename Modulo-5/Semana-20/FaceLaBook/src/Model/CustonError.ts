export default class CustomError extends Error{
    constructor(private statusCode: number, message: string) {
        super(message)
    }
}