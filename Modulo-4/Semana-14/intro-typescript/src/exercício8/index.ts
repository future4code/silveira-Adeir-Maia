const ReverseString = (String: string): string => {
    return String.split('').reverse().join('')
}

console.log(ReverseString('Adeir Moreira Maia'))