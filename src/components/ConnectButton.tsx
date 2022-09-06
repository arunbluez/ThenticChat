import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const {firestore, setUser} = useContext(FirebaseContext)
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const usersRef = firestore.collection('users');

  useEffect(() => {
    ;(async()=>{
      if(account){
        const userSnapshot = await usersRef.doc(account).get()
        if(userSnapshot.exists){
          setUser(userSnapshot.data())
        }else{
          usersRef.doc(account).set({
            account: account,
            messages: 0,
            nfts: []
          })
          setUser({
            account: account,
            messages: 0,
            nfts: []
          })
        }
      }
    })()
  }, [account])
  

  function handleConnectWallet() {
    activateBrowserWallet();
  }



  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} BNB
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon account={account}/>
      </Button>
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="blue.800"
      color="blue.300"
      fontSize="lg"
      fontWeight="medium"
      borderRadius="xl"
      border="1px solid transparent"
      _hover={{
        borderColor: "blue.700",
        color: "blue.400",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect to a wallet
    </Button>
  );
}
