import React, { useState } from "react";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { Tr, Td } from "@chakra-ui/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { add, remove } from "../store/totalSlice";
import { removeProduct } from "../store/produtSlie";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  return (
   
    <Tr>
      <Td>
        <HStack>
          <Box mr={"3"}>
            <Image
              src={product.imageUrl}
              alt="Dan Abramov"
              // boxSize="150px"
              objectFit="cover"
            />
          </Box>
          <Box>
            {product.gift ? (
              <Text
                bg={"black"}
                color={"white"}
                w={"fit-content"}
                px={"3"}
                fontWeight={"bold"}
                fontSize={"0.7rem"}
              >
                Gift
              </Text>
            ) : null}
            {product.tagline ? (
              <Text
                bg={"#0500a3"}
                color={"white"}
                w={"fit-content"}
                px={"3"}
                fontWeight={"bold"}
                my={"2"}
                fontSize={"0.7rem"}
              >
                {" "}
                {product.tagline}
              </Text>
            ) : null}
            <Text fontWeight={"bold"}>{product.name}</Text>
            <Text>{product.desc}</Text>
          </Box>
        </HStack>
      </Td>
      <Td>{product.price}</Td>
      <Td>
        <HStack>
          <Button
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
                dispatch(remove(product.price));
              } else {
                setQuantity(0);
              }
            }}
          >
            -
          </Button>
          <Text>{quantity}</Text>
          <Button
            onClick={() => {
              setQuantity(quantity + 1);
              dispatch(add(product.price));
            }}
          >
            +
          </Button>
        </HStack>
      </Td>
      <Td>{product.price * quantity}</Td>
      <Td>
        <Button onClick={() =>{
          dispatch(removeProduct(product.id))
        }}>
          <RiDeleteBin6Fill />
        </Button>
      </Td>
    </Tr>
  );
};

export default Product;
