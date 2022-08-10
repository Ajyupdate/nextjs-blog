import { useRouter } from 'next/router'
function ProductDetail(){
    const router = useRouter()
    const productId = router.query.productId

    return <h2>Details about productss {productId}</h2>

}
export default ProductDetail