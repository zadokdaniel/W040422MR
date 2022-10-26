const Product = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.name}
        <span style={{ fontSize: "0.6rem" }}>{props.category}</span>
      </h1>
      <p>{props.price}$</p>
      <img src={props.imgUrl} alt={props.name} width={200} />
    </div>
  );
};

export default Product;
