import { useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState('')

    const handleValue = e => {
        setValue(e.target.value)
    }

    return [value, handleValue]
}


