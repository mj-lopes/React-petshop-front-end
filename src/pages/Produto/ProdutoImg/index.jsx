import Img from "../../../asserts/Ração_Seca_Nestlé_Purina_Friskies_Frango_para_Gatos_Adultos_3104249-removebg-preview.png";

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
      <img src={imgUrl || Img} width={300} alt={`imagem produto ${imgAlt}`} />
    </div>
  );
};

export default ProdutoImg;
