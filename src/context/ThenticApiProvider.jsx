import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import lvlData from "../lvlchats.json"


export const ThenticApiContext = createContext();

const THENTIC_BASE_URL = "https://thentic.tech/api/"
const THENTIC_HEADERS = {'Content-Type': 'application/json'}
const THENTIC_API_KEY = "xRa3TCvKpVeIlZCAV7Q01fSIPvnCg8r5"





export default function ThenticApiProvider(props) {

  const [contract, setContract] = useState(null)

useEffect(() => {
  ;(async()=>{
    await getNFTContracts()
  })()
}, [])


const getNFTContracts = async () => { 
  const url = `${THENTIC_BASE_URL}contracts?key=${THENTIC_API_KEY}&chain_id=${97}`
  try{
    const response = await axios.get(url,{headers: THENTIC_HEADERS})
    console.log(response.data)
    const liveContract = response.data.contracts.filter(x => x.status === "success")
    console.log(liveContract[0])
    setContract(liveContract[0])
     }catch(err){
         return {result: null, error: err} 
     }
 }



const initializeContract = async () => { 
        console.log("init contract")
if(!contract){
  const url = THENTIC_BASE_URL + "contract"
  const data = {'key': THENTIC_API_KEY,
      'chain_id': 97,
      'name': 'ThenticChatNfts', 
      'short_name': 'TCHAT',
      // 'redirect_url': new URL("http://localhost:3001/")
  }
  try{
    const response = await axios.post(url,data,{headers: THENTIC_HEADERS})
    return {result: response.data, error: null} 
}catch(err){
    return {result: null, error: err} 
}
}else{
  return {result: contract, error: null} 
}
  
}

const mintNft = async (lvl, account) => { 
  console.log(contract)
  if(contract){
    const url = THENTIC_BASE_URL + "nfts/mint"
    const data = {'key': THENTIC_API_KEY,
        'chain_id': 97,
        'contract': contract.contract, 
        'nft_id': new Date().valueOf(),
        'nft_data': JSON.stringify(lvlData[`lvl${lvl}`]),
        'to': account,
        // 'redirect_url': new URL("http://localhost:3001/")
    }
    console.log(data)
    try{
      const response = await axios.post(url,data,{headers: THENTIC_HEADERS})
      return {result: response.data, error: null} 
  }catch(err){
      return {result: null, error: err} 
  }
  }else{
    return {result: null, error: "No contract found"} 
  }
}



  return (
    <ThenticApiContext.Provider value={{
        initializeContract:initializeContract,
        mintNft:mintNft
    }}>
        {props.children}
    </ThenticApiContext.Provider>
  )
}
