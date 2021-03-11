import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function SearchBar(props) {
  const { updateSearch } = props;

  return (
    <div>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Search'
          aria-label='Search'
          aria-describedby='basic-addon2'
          type='text'
          onChange={(e) => updateSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
