import React from 'react';
import { Card, Button, CardTitle, CardBody } from 'reactstrap';
import Top10content from './Top10Content'
import './styles.css';

const Top10Card = (props) => {
  return (
        <Card>
          <CardBody>
            <CardTitle>Top10</CardTitle>
            <Top10content />
            <Button>Button</Button>
          </CardBody>
        </Card>
  );
};

export default Top10Card;
