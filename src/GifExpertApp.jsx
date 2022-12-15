import { useState } from "react"
import { AddCategory ,GifGrid} from "./components"


export const GifExpertApp = ()=>{
    const[categoria,setCategoria]=useState(['One Punch'])
    const onAddCategory = (value)=>{
        const NewArray=categoria.map(val=>{
            return val.toLowerCase()
        })
        if(NewArray.includes(value.toLowerCase()))return
        setCategoria([...categoria,value])
    }
    return(
        <>
        {/* titulo */}
        <h1>GifExpertAPP</h1>
        {/* Input */}
        <AddCategory 
        // changeI={setCategoria} mandar la funcion al componente
        onNewValue={value => onAddCategory(value)}
        ></AddCategory>
        {/* Listado de gif */}
            {categoria.map(categori=>
                (
                    <GifGrid key={categori} category={categori}></GifGrid>
                ) 
                
            )}
        
            {/* gif Item */}
        </>
        
    )
        
    
}