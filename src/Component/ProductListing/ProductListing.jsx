import styled from "styled-components";
import { Alldata } from "../Alldata";
import Product from "../Extra/Product";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Heading =styled.h1`
    margin: 50px 0;
    display: flex;
    justify-content: center;

    font-size: 1.7rem;
    border-bottom: 3px solid var(--light-purple);
    text-align: center;
    align-items: center;
    color: var(--black);
`;

const ProductListing = () => {
  return (
     <>
    <Heading >
        Features Products
    </Heading>
    
    <Container>
      {Alldata.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default ProductListing;
