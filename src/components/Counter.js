/* eslint-disable react/jsx-no-duplicate-props */
import { memo } from 'react';

import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter();

  const handleChange = (event) => setCount(event.target.value);

  if (count <= 0) {
    setCount(1);
  }

  const styled = {
    marginLeft: 100,
    marginTop: 100,
  };

  return (
    <div style={styled}>
      {count === 1 ? (
        <Button disabled>-</Button>
      ) : (
        <Button
          colorScheme='teal'
          variant='outline'
          colorScheme='blue'
          onClick={decrement}
        >
          -
        </Button>
      )}
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
        +
      </Button>
    </div>
  );
};

export default memo(Counter);
