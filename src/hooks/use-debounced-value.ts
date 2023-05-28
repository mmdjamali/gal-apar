import { useState, useEffect } from "react"

// for using this hook in the input just use
// the register function like this
// <input {...register()}/>
export const useDebouncedValue = (initialValue : string , delay : number = 500) => {
    const [value, setValue] = useState<string>(initialValue)
    const [debouncedValue, setDebouncedValue] = useState<string>(initialValue)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncedValue(value)
        },delay)

        return () => clearTimeout(timeOut)
    },[delay , value])

    const register = () => ({
            value : value,
            onChange : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setValue(e.target.value)
            }
        })

    return [debouncedValue, register] as [string, typeof register]
}