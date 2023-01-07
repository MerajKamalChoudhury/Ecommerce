import styled from "styled-components";
import { lilbee } from "../Data"
import Product from "../Extra/Product";



const Container = styled.div`
    padding: 63px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Lilbee = () => {
  return (

    <Container>
      {lilbee.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Lilbee;
