import React from 'react'
import Header from '../../components/header';
import Inputelement from '../../components/ui/input';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import LoginIcon from '@mui/icons-material/Login';
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function signup() {
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
                    <h2  >    <AddCircleOutlineIcon fontSize="large" /> Register</h2>

                  </Col>
                </Row>
                <Card>
                  <CardContent>
                    <Form>
                      <Row className="mb-3">

                        <Inputelement name="name" Label="User Name" type="text" placeholder="Enter User Name" />
                      </Row>
                      <Row className="mb-3">

                        <Inputelement name="email" Label="Email Address" type="email" placeholder="Enter Email " />

                      </Row>
                      <Row className="mb-3">
                        <Inputelement name="password" Label="Password" type="password" placeholder="Enter Password" />
                      </Row>

                      <Row className="mb-3">
                        <Button variant="contained" >
                          <h5> <AddCircleOutlineIcon /> Register</h5>
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

export default signup