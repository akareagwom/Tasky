import { Button, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoIosClose } from "react-icons/io";

interface Props {
  
}

const Save: React.FC<Props> = ({  }) => {
  return (
    <Flex pr={4} justifyContent={'space-between'}>
        <Icon fontSize={20}  as={IoIosClose} />
        <Button borderRadius={20} h={6} bg={'#e53756'} color={'white'}>Save</Button>
    </Flex>
  );
};

export default Save;