import "./styles.css";

function ProductCard({
  productsData
}) {
  return (
    <div className="product-card">
      <img src={productsData.image} alt="product avatar" />
      <div className="product-name">{productsData.nameProduct}</div>
      <div className="product-description">{productsData.descriptionProduct}</div>
      <div className="product-description">{productsData.descriptionProduct2}</div>
      <div className="product-price">{productsData.price} €</div>
    </div>
  );
}

export default ProductCard;
