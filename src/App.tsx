import { Button, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import { useEthers } from "@usedapp/core";
import ChatRoom from "./components/ChatRoom";
import './App.css';
import { useContext, useState } from "react";
import { ThenticApiContext } from "./context/ThenticApiProvider";
import InitTransaction from "./components/InitTransaction";
import axios from "axios";
import LinkWrapper from "./components/LinkWrapper";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account } = useEthers();
  const {initializeContract} = useContext(ThenticApiContext)
  const [iframeData, setiframeData] = useState(null)


  const initContract = async () => { 
    console.log("init")
     const data = await initializeContract()
     if(data.result){
      console.log(data.result)
      openInNewTab(data.result.transaction_url)
      setiframeData(data.result.transaction_pixel)
     }
  }

  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <div className="App">
          {console.log(iframeData)}
          <InitTransaction iframe={iframeData}/>
      <header>
        <h1>Thentic Chat! ⚛️🔥</h1>
        {/* <Button onClick={initContract} colorScheme='blue'>Button</Button> */}
        {/* <LinkWrapper link={"https://thentic.tech/request?id=3CvuNqZx2enDxzix"}/> */}
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} /> 
      </header>

      <section>
         <ChatRoom />
      </section>

    </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
