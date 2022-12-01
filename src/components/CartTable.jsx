import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import Product from "./Product";
import { useSelector } from "react-redux";
import ProductMobile from "./ProductMobile";

const CartTable = () => {
  const products = useSelector((state) => state.products);
  
  return (
    <>
      <TableContainer w={"100%"} className="laptop">
        <Table variant="simple" border={"2px solid grey"} borderRadius={"50px"}>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Subtotal</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, i) => {
              return <Product key={i} product={product} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box className="mobile" px={'3'} w={'100%'} border={'2px solid grey'}>
      {products.map((product, i) => {
              return <ProductMobile key={i} product={product} />;
            })}
      </Box>
    </>
  );
};

export default CartTable;
