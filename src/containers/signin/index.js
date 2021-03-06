import React from 'react'
import Header from '../../components/header';
import Inputelement from '../../components/ui/input';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import moment from 'moment';
import LoginIcon from '@mui/icons-material/Login';
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function signin() {
  const date = new Date();
  return (
    <>
      <Header />
      <Container style={{ paddingTop: "5%" }}>
        <Row className="justify-content-md-center">
          <Col xs={12} md={5}>
            <Card>
              <CardContent>
                <Row>

                  <Col>
                    <h2  >    <LoginIcon fontSize="large" /> Sign In</h2>
                    <Alert severity="info">
                      <div> <h4>{moment(date).format('LL')} </h4></div>

                    </Alert>
                  </Col>
                </Row>
                <Card>
                  <CardContent>
                    <Form>
                      <Row className="mb-3">
                        <Inputelement name="email" Label="User Name" type="text" placeholder="Enter User Name" />

                      </Row>
                      <Row className="mb-3">
                        <Inputelement name="password" Label="Password" type="password" placeholder="Enter Password" />
                      </Row>
                      <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Button variant="contained" >
                          <h5> <LockOpenIcon /> Sign In</h5>
                        </Button>
                      </Row>


                    </Form>

                  </CardContent>

                </Card>

              </CardContent>

            </Card>
          </Col>
        </Row >

      </Container>
    </>
  )
}

export default signin