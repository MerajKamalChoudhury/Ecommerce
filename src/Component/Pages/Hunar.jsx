import styled from "styled-components";
import { hunar } from "../Data"
import Product from "../Extra/Product";



const Container = styled.div`
    padding: 63px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Hunar = () => {
  return (

    <Container>
      {hunar.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Hunar;
