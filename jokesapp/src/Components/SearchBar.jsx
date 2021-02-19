import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <div>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Search'
          aria-label='Search'
          aria-describeby='basic-addon2'
        />
        <InputGroup.Append>
          <Button variant='outline-secondary'>Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
