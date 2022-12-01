import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ImPhone } from "react-icons/im";
import "../index.css"

const Footer = () => {
  // const mobile = {
  //   display: 'none'
  // }
  return (
    <>
      <HStack
        bg={"black"}
        color={"white"}
        w={"100%"}
        justifyContent={"space-around"}
        p={"5"}
        
      >
            <VStack className="laptop">
              <Text fontSize={"1.3rem"} fontWeight={"bold"}>
                LOREM
              </Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
            </VStack>
            <VStack className="laptop">
              <Text fontSize={"1.3rem"} fontWeight={"bold"}>
                LOREM
              </Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
            </VStack>
            <VStack className="laptop">
              <Text fontSize={"1.3rem"} fontWeight={"bold"}>
                LOREM
              </Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
              <Text>Dummy Text</Text>
            </VStack>
            <VStack className="laptop">
              <Text fontSize={"1.3rem"} fontWeight={"bold"}>
                LOREM
              </Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
              <Text>Dummy</Text>
            </VStack>
            <VStack
              borderLeft={"2px solid white"}
              alignItems={"flex-start"}
              p={"3"}
              pl={"7"}
              className="laptop"
            >
              <Text fontWeight={"bold"} fontSize={"1.5rem"}>
                Call Us
              </Text>
              <HStack fontSize={"0.7rem"}>
                <Text>
                  Monday-Friday <br /> 8am to 9am CST
                </Text>
                <Text>
                  Saturaday-Sunday <br /> 10am to 6am CST
                </Text>
              </HStack>
              <HStack
                w={"100%"}
                borderBottom={"1px solid white"}
                fontWeight={"bold"}
                letterSpacing={"0.5rem"}
              >
                <ImPhone />
                <Text>1800-123-1234</Text>
              </HStack>

              <Text>support.us@test.com</Text>
            </VStack>
        
            <VStack alignItems={'center'} justifyContent={'center'} className="mobile"> 
              <HStack alignItems={'center'} justifyContent={'center'}>
                <Text
                  // fontSize={"1.1rem"}
                  fontWeight={"bold"}
                  borderRight={"2px solid white"}
                  px={"2"}
                >
                  LOREM
                </Text>
                <Text
                  // fontSize={"1.3rem"}
                  fontWeight={"bold"}
                  borderRight={"2px solid white"}
                  px={"2"}
                >
                  LOREM
                </Text>
                <Text  fontWeight={"bold"} px={'2'}>
                  LOREM
                </Text>
              </HStack>
              <Text textAlign={'center'}>Lorem epsum is dummy text for printing </Text>
            </VStack>
      </HStack>
    </>
  );
};

export default Footer;
