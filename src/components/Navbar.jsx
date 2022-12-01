import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <HStack
      justifyContent={"center"}
      bg={"blue"}
      color={"white"}
      fontSize={['0.5rem',"2xl"]}
      fontWeight={"bold"}
      py={"1rem"}
    >
      <HStack w={["90%","80%"]} justifyContent={"space-between"}>
        <Text >IMall-GetStylish</Text>
        <HStack>
          <Text
            cursor={"pointer"}
            borderRight={"2px solid white"}
            px={"3"}
            fontWeight={"normal"}
          >
            Track Order
          </Text>

          <Box
            cursor={"pointer"}
            borderRight={"2px solid white"}
            px={"3"}
            py={"1.5"}
          >
            <BsSearch />
          </Box>
          <Box
            cursor={"pointer"}
            borderRight={"2px solid white"}
            px={"3"}
            py={"1.5"}
          >
            <CgProfile />
          </Box>
          <Box cursor={"pointer"}  py={"1.5"}>
            <AiOutlineShoppingCart />
          </Box>
        </HStack>
      </HStack>
    </HStack>
  );
};
