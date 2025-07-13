import { useEffect, useRef, useState } from "react"
import Product from "./Product"

export default function ProductList(){
    const [products, setProducts] = useState([])
    const loaded = useRef(false)
    useEffect(() => {
        console.log("Call use effect")
        if(loaded.current === false) {
            fetch("/product.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .then(() => loaded.current = true)
        }
        return () => {
            console.log("Product List Component Unmounted ")
        }
    })

    return (
        <>
            <h1>Product List</h1>
            {products.map((product) => {
                return <Product  product={product} key={product.id} />
            })}
        </>
    )
}