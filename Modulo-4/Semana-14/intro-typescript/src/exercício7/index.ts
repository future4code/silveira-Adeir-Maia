const RNA = (DNA: string): string => {
    return DNA.replace(/A/g, 'U').replace(/T/g, 'A').replace(/C/g, 'Z').replace(/G/g, 'C').replace(/Z/g, 'G')
}
console.log(RNA('ATTGCTGCGCATTAACGACGCGTA'))