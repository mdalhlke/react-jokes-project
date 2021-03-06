import React from 'react';
import { Button } from 'react-bootstrap';

export default function GenerateButton() {
  return (
    <div class='d-flex justify-content-center'>
      <Button variant='outline-warning' size='lg'>
        Get Jokes!
      </Button>{' '}
    </div>
  );
}
