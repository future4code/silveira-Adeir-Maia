import { v4 } from "uuid"

export default class IdGenerator {
    public generate = ():string => v4()
}