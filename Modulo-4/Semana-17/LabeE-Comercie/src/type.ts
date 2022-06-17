export type Product = {
    id : string,
    name: string,
    price : number,
    image_url: string
}

export type User = {
    name: string,
    email: string,
    password: string,
    id: string,
}

export type UserPurchase = {
    product_name: string,
    quantity: number,
    price: number,
    total_price: number
}

export type UserWithYourPurchases = {
    name: string,
    email: string,
    password: string,
    id: string,
    purchases: UserPurchase[] | []
}