import PropTypes from "prop-types";

export default function Product({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) {
  return (
    <div className="product">
      <img src={imgUrl} alt={name} width="240" />
      <h2>{name}</h2>
      <p>Price: {price} credits</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
