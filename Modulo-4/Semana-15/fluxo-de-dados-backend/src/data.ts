type consoles = {
    id:string,
    name:string,
    price: number
}
export const videoGames:consoles[] = [
    {
        id: new Date('04/05/2000').getTime().toString(),
        name: 'PlayStation 2',
        price: 350
    },
    {
        id: new Date('11/11/2006').getTime().toString(),
        name: 'PlayStation 3',
        price: 800
    },
    {
        id: new Date('11/11/2013').getTime().toString(),
        name: 'PlayStation 4',
        price: 2000
    }
]