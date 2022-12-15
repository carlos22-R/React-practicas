import { useEffect,useState } from "react"
// import { GetGif } from "../helpers/GetGif"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
export const GifGrid=({category})=>{
    const{images,isLoadinag}=useFetchGifs(category)
    // const[images,setImages]=useState([])
    // const getImages= async()=>{
    //     const newImages=await GetGif(category)
    //     setImages(newImages)
    //     setIsLoading(false)
    // }
    // useEffect(()=>{
    //     getImages()
    // },[])
    return(
        <>
            <h3>{category}</h3>
            {
                isLoadinag && (<h2>Cargando...</h2>)
            }
           <div className="card-grid">
                {images.map(img =>{
                    return <GifItem key={img.id}
                    {...img}></GifItem>
                })}
           </div>
        </>
    )
}