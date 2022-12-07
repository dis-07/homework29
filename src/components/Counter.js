/* eslint-disable react/jsx-no-duplicate-props */
import { memo } from 'react';

import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import {  AddIcon, MinusIcon } from '@chakra-ui/icons'

import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { count, increment, decrement, setCount, initialValue } = useCounter(1);

  const handleChange = ({target: {value}}) => setCount(value);

  if (count !== '' && count < initialValue) {
    setCount(1);
  }

  const styled = {
    marginLeft: 100,
    marginTop: 100,
  };

  return (
    <div style={styled}>
        <Button
          colorScheme='teal'
          variant='outline'
          colorScheme='blue'
          onClick={decrement}
          disabled={count === 1}
        >
          <MinusIcon boxSize={6}/>
        </Button>
      <Input
        htmlSize={4}
        width='auto'
        variant='outline'
        onChange={handleChange}
        value={count}
      />
      <Button
        colorScheme='teal'
        variant='outline'
        colorScheme='blue'
        onClick={increment}
      >
        <AddIcon boxSize={6} />
      </Button>
    </div>
  );
};

export default memo(Counter);