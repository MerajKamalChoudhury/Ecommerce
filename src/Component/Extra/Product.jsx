// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
import { BsSearch } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi"
import React from 'react'
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
    /* width: 33%;
    height: 75.7%;
    position: absolute;
    top: 117px;
    left: 494px; */
  
  width: 65%;
  height: 80.7%;
  position: absolute;
  top: 44px;
  left: 128px;

  /* background-color: rgba(0, 0, 0, 0.2); */
  background-color: transparent;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  /* @media (max-width: 1900px) { 
    background-color: transparent;
 
  } */
`;

const ImgContainer = styled.div`
  display: grid;
  /* New Code Added */
  margin-top: 100px;
  margin-bottom: 183px;
  /* New Code Added */
  align-items: center;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  /* min-width: 280px; */
  height: 893px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Image = styled.img`
height: 75%;
z-index: 2;

/* &:hover {
      background-color: #e9f5f5;
      transform: scale(1.3);
} */
`;

// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
//   `;
const Icon = styled.div`
     width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 10px;
     transition: all 0.5s ease;
     &:hover {
       background-color: #e9f5f5;
       transform: scale(1.3);
     }
   `;

const Textcontainer = styled.div`
/* position: absolute; */
/* z-index: 2; */
  margin-top: -165px;
  margin-left: 10px;

`;

const Productname = styled.div`
position: relative;
  font-size: 20px;
  font-weight: 500;
  `;


const Price = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: -30px;
  /* position: relative; */
  font-size: 20px;
  font-weight: 500;
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}

      <ImgContainer>
        <Image src={item.img} />
        <Info>
          <Icon>
            <FiShoppingCart />
          </Icon>
          <Icon>
            <BsSearch />
          </Icon>
          <Icon>
            <IoMdHeartEmpty />
          </Icon>
        </Info>
        <Textcontainer>
          <Productname>{item.title}</Productname>
          <Price>₹{item.price}</Price>
        </Textcontainer>
      </ImgContainer>

    </Container>
  )
}

export default Product
