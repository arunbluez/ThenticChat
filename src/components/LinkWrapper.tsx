import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

export default function LinkWrapper(props:any) {    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const url = new URL(props.link)
    console.log(url)
    if (url.hostname === "localhost" ) return <a target="_blank" href={props.link}>{props.link}</a>
    else
    return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <iframe src={props.link} style={{width:'100%',height:'400px'}}/>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
  }