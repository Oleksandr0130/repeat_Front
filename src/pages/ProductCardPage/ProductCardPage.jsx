
import { v4 } from "uuid";

import ProductCard from "../../components/ProduckCard/ProductCard";
import { serversData } from "../../components/ProduckCard/data";
import "./styles.css";

function ProductCardPage() {

  const productCards = serversData.map((product)=>{
    return <ProductCard key={v4()} productsData={product} />
  })

  console.log(productCards)
  return (
    <div className="productcardpage-container">
      {/* <ProductCard productsData={serversData[0]}/>
      <ProductCard productsData={productsData[1]}/>
      <ProductCard productsData={productsData[2]}/> */}
      {productCards}
</div>
)
}

export default ProductCardPage;
