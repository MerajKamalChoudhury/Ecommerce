import styled from "styled-components";
import {Happpy} from "../Data"
import Product from "../Extra/Product";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Pants = () => {
  return (
    
    <Container>
      {Happpy.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Pants;