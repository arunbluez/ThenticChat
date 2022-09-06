import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Progress,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";
import LvlNftMint from "./LvlNftMint";

type Props = {
  isOpen: any;
  onClose: any;
};

const lvl1 = 5
const lvl2 = 15
const lvl3 = 30

export default function AccountModal({ isOpen, onClose }: Props) {
  const { account, deactivate } = useEthers();
  const [isLvl1, setIsLvl1] = useState(false)
  const [isLvl2, setIsLvl2] = useState(false)
  const [isLvl3, setIsLvl3] = useState(false)
  const {user} = useContext(FirebaseContext)
  const [percent, setPercent] = useState(0)
  function handleDeactivateAccount() {
    deactivate();
    onClose();
  }


  useEffect(() => {
    let per = 0
    if(user){
      if(user.messages < lvl1){
        per = parseInt(((user.messages/lvl1)*100).toFixed(0))
      }else  if(user.messages >= lvl1 && user.messages < lvl2){
        per = parseInt(((user.messages/lvl2)*100).toFixed(0))
        setIsLvl1(true)
      }else if(user.messages >= lvl2 && user.messages < lvl3){
        per = parseInt(((user.messages/lvl3)*100).toFixed(0))
        setIsLvl2(true)
      }else{
        setIsLvl3(true)
      }
      setPercent(per)
    }
  }, [user])
  

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        background="gray.900"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
          Account
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: "whiteAlpha.700",
          }}
        />
        <ModalBody pt={0} px={4}>
          <Box
            borderRadius="3xl"
            border="1px"
            borderStyle="solid"
            borderColor="gray.600"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="gray.400" fontSize="sm">
                Connected with MetaMask
              </Text>
              <Button
                variant="outline"
                size="sm"
                borderColor="blue.800"
                borderRadius="3xl"
                color="blue.500"
                fontSize="13px"
                fontWeight="normal"
                px={2}
                height="26px"
                _hover={{
                  background: "none",
                  borderColor: "blue.300",
                  textDecoration: "underline",
                }}
                onClick={handleDeactivateAccount}
              >
                Change
              </Button>
            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <Identicon account={account}/>
              <Text
                color="white"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
              >
                {account &&
                  `${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length
                  )}`}
              </Text>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Button
                variant="link"
                color="gray.400"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                  textDecoration: "none",
                  color: "whiteAlpha.800",
                }}
              >
                <CopyIcon mr={1} />
                Copy Address
              </Button>
              <Link
                fontSize="sm"
                display="flex"
                alignItems="center"
                href={`https://ropsten.etherscan.io/address/${account}`}
                isExternal
                color="gray.400"
                ml={6}
                _hover={{
                  color: "whiteAlpha.800",
                  textDecoration: "underline",
                }}
              >
                <ExternalLinkIcon mr={1} />
                View on Explorer
              </Link>
              
              
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter
          justifyContent="center"
          background="gray.700"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          p={6}
        >
          <Text
            color="white"
            textAlign="left"
            fontWeight="medium"
            fontSize="md"
          >
            Total number of messages sent: {user?.messages}
            <Progress hasStripe value={percent} />
                <div className="lvl-mint-div">
                  {isLvl1 && <LvlNftMint lvl={1}/>}
                  {isLvl2 && <LvlNftMint lvl={2}/>}
                  {isLvl3 && <LvlNftMint lvl={3}/>}
                </div>
          </Text>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
