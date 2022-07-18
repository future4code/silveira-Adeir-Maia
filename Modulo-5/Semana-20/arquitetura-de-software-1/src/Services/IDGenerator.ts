import { v4 } from "uuid"

export default class IdGenerator {
    public generator = ():string => v4()
}