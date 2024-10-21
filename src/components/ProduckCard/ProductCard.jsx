import "./styles.css";

function ProductCard({
  avatar,
  nameProduct,
  descriptionProduct,
  descriptionProduct2,
  priceProduct,
  // children,
}) {
  return (
    <div className="product-card">
      <img src={avatar} alt="product avatar" />
      <div className="product-name">{nameProduct}</div>
      <div className="product-description">{descriptionProduct}</div>
      <div className="product-description">{descriptionProduct2}</div>
      <div className="product-price">{priceProduct} €</div>
      {/* {children} */}
    </div>
  );
}

export default ProductCard;
