import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { ImLocation } from "react-icons/im";
import CartTable from "./CartTable";
import { useSelector } from "react-redux";

import data from "../data";

const CartContainer = () => {
  const totalAmount = useSelector((state) => state.total);
  const { discount, pincode } = data;
  const pinCodes = Object.keys(pincode);
  const [deliveryCode, setDiliveryCode] = useState(pinCodes[0]);
  let totalDiscount =
    totalAmount > discount.minTotal
      ? totalAmount * (discount.discountPercentage / 100)
      : 0;

  const handleDeliveryChange = (e) => {
    setDiliveryCode(e.target.value);
  };
  const { products } = data;
  return (
    <Stack w={"100%"} justifyContent={"center"} py={"6"}>
      <VStack m={"auto"} w={["100%", "80%"]}>
        <Box textAlign={"center"} w={"100%"} bg={"#9ea2e6"} py={"3"}>
          <Text fontWeight={"semibold"} color={"white"} fontSize={['0.7rem', '1rem']}>
            Shop for $5000 or more and get 10% discount on your order
          </Text>
        </Box>
        <Text w={"100%"} fontWeight={"bold"} fontSize={"3rem"}>
          Shopping Cart
        </Text>

        <CartTable products={products} />
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flexWrap={'wrap'}
          px={['3', '0']}
        >
          <VStack w={["100%","40%"]} border={['1px solid black', 'none']} p={['3', '0']} marginBottom={['5', '0']}>
            <Text w={"100%"} textAlign={"left"}>
              Delivery Availability
            </Text>
            <Stack position={"relative"} w={'100%'}>
              <Box position={"absolute"} left={0} bottom={"1"} fontSize={"2xl"}>
                <ImLocation />
              </Box>
            <FormControl position={"relative"}>
              <Input
                border={"none"}
                type={"text"}
                borderBottom={"2px solid black"}
                borderRadius={"none"}
                value={deliveryCode}
                px={"2rem"}
                fontWeight={"bold"}
                isDisabled = {true}
              />
              
            </FormControl>
            <Button
                right={"0"}
                position={"absolute"}
                fontWeight={"bold"}
                color={"#0500a3"}
                bg={"transparent"}
                bottom={"1"}
                zIndex={'100'}
              >
                <Menu isLazy>
                  <MenuButton>Change</MenuButton>
                  <MenuList zIndex={'1000'}>
                    {pinCodes.map((pincode, i) => (
                      <MenuItem
                        key={i}
                        onClick={handleDeliveryChange}
                        value={pincode}
                      >
                        {pincode}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Button>
              </Stack>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <HStack w={"30%"}>
                <TiTick />
                <Text>{pincode[deliveryCode].deliveryPrice? `Delivey Charge ${pincode[deliveryCode].deliveryPrice}`:'Free Delivery'}</Text>
              </HStack>

              {pincode[deliveryCode].cashOnDelivery ? (
                <HStack w={"30%"}>
                  <TiTick />
                  <Text>Cash On Delivery</Text>
                </HStack>
              ) : null}
              <HStack w={"40%"}>
                <TiTick fontSize={"2rem"} />
                <Text>
                  Estimated Delivery time is{" "}
                  {pincode[deliveryCode].estimatedDays.min} -{" "}
                  {pincode[deliveryCode].estimatedDays.max} days
                </Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack w={["100%","30%"]} px={['3', '0']} py={['5', '0']} border={['1px solid black', 'none']}>
            <Text w={"100%"} textAlign={"left"} fontWeight={'bold'}>
              Order Summary
            </Text>
            <HStack
              w={"100%"}
              justifyContent={"space-between"}
              fontWeight={"medium"}
            >
              <Text>Subtotal</Text>
              <Text>${totalAmount}</Text>
            </HStack>
            <HStack
              w={"100%"}
              justifyContent={"space-between"}
              fontWeight={"medium"}
            >
              <Text>Discount</Text>
              <Text>-{totalDiscount}$ </Text>
            </HStack>
            <HStack
              w={"100%"}
              justifyContent={"space-between"}
              fontWeight={"medium"}
            >
              <Text>Standard Shipping</Text>
              <Text>Free</Text>
            </HStack>
            <HStack
              w={"100%"}
              justifyContent={"space-between"}
              fontWeight={"medium"}
            >
              <Text>Order Total</Text>
              <Text fontSize={"2rem"} fontWeight={"bold"}>
                {totalAmount - totalDiscount} $
              </Text>
            </HStack>
            <HStack
              w={"100%"}
              justifyContent={"space-between"}
              fontWeight={"medium"}
              flexWrap = {'wrap'}
            >
              <Text color={"#0500a3"} fontWeight={"bold"} pb={['4', '0']}>
                Continue Shopping
              </Text>
              <Button
                color={"white"}
                bg={"#0500a3"}
                borderRadius={"100px"}
                fontSize={"12px"}
                px={"7"}
              >
                CHECKOUT
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default CartContainer;
