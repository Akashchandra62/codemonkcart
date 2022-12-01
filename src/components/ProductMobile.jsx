import {
  Box,
  Button,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/totalSlice";

const ProductMobile = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  return (
    <HStack
      my={"5"}
      border={'1px solid black'}
      borderRadius={'5px'}
      p={'3'}
    >
      <Box mr={'5'} w={'fit-content'}>
        <Image src={product.imageUrl} alt="Dan Abramov" objectFit="cover" />
      </Box>
      <Box w={"fit-content"} px={"5"}>
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
      </Box>
    </HStack>
  );
};

export default ProductMobile;
