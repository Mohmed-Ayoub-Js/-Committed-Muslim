import React from 'react';
import { Card, CardHeader, CardTitle } from '../shadcn/ui/card';

const CardDirk = ({ index, dikr }) => {
  setTimeout(() => {
    console.log(index);
  }, 9999999999999999999999999999999);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{`${dikr}`}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardDirk;
