import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Quote = ({quote}) => {

    return(
        <CardCont>
            <Col sm="6">
                <Card body>
                    <CardTitle>{quote.quoteText}</CardTitle>
                    <CardText>Wrote by: {quote.quoteAuthor}</CardText>
                    <Button>Add to Favorites</Button>
                </Card>
            </Col>
        </CardCont>
    )
}

export default Quote

const CardCont = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;