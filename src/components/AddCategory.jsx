import { useState } from "react"
export const AddCategory=({onNewValue})=>{
    const [inputValue, setinputValue] = useState('');
    const onInoutValue=({target})=>{
        setinputValue(target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        if(inputValue.trim().length<=1)return

        
        // changeI(Arr=> [...Arr,inputValue])
        onNewValue(inputValue.trim()) 
        setinputValue('')
    }
    return(
       
        <form onSubmit={ onSubmit}>
        <input value={inputValue}   name="inputValue" onChange={onInoutValue} placeholder="Buscar gif"/>
        <button onClick={onSubmit}>Agregar</button>
        </form>
    )
}