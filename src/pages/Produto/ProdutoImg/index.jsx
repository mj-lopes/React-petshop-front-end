import ImgPlaceholder from "../../../asserts/imgPlaceholder.png";

const ProdutoImg = ({ imgUrl, imgAlt }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "80%",
        padding: "1rem 0",
        borderRadius: "12px",
      }}
    >
      <img
        src={imgUrl || ImgPlaceholder}
        width={300}
        alt={`imagem produto ${imgAlt}`}
      />
    </div>
  );
};

export default ProdutoImg;
