export default function idGenerator():string {
    const CHARACTERS = "QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm0123456789"
    let id = ""
    for(let i = 0; i <= 20; i++) {
        const index = Math.floor(Math.random() * (CHARACTERS.length - 1))
        id += CHARACTERS[index]
    }
    return id
}