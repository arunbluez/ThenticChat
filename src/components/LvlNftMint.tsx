import { Button } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import React, { useContext, useEffect } from 'react'
import lvl1 from "../assets/lvl1.png"
import lvl2 from "../assets/lvl2.png"
import lvl3 from "../assets/lvl3.png"
import { ThenticApiContext } from '../context/ThenticApiProvider'

interface Props{
    lvl: number
}

export default function LvlNftMint({lvl}: Props) {
    const {account} = useEthers()
    const {mintNft} = useContext(ThenticApiContext)

const mint = async () => { 
   const data = await mintNft(lvl, account)
   console.log(data)
   if(data.result){
    console.log(data.result)
    openInNewTab(data.result.transaction_url)
   }
 }


 const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

 const getImage = () => { 
    switch (lvl) {
        case 1:
            return lvl1
        case 2:
            return lvl2
        case 3:
            return lvl3
        default:
            return ''
    }
  }
 

  return (
    <div className='lvl-mint'>
        <img src={getImage()} width={20} height={20}/>
        <Button onClick={mint} colorScheme='teal' size='xs'>Mint</Button>
    </div>
  )
}
