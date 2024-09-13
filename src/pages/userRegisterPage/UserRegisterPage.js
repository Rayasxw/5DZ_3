import React, { useState } from "react"
import { Container, Form, Row, Col, Button, Spinner, Alert } from "react-bootstrap"
import { useDispatch} from "react-redux"
import { addUserAction } from "../../redux/action"

const UserRegisterPage = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const formValue = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const dispatch = useDispatch()

  const addUser = async (event) => {
    event.preventDefault()
    setLoading(true)
    const success = await dispatch(addUserAction(user))
    setLoading(false)

    if (success) {
      setMessage('Запрос успешно отправлен')
    } else {
      setMessage('Запрос не отправлен')
    }
  }

  return (
    <Container>
      {message && <Alert variant={message.includes('успешно') ? 'success' : 'danger'}>{message}</Alert>}

      <Form onSubmit={addUser}>
        <Row>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="name"
                name="name"
                onChange={formValue}
              />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Control
                type="text"
                placeholder="username"
                name="username"
                onChange={formValue}
              />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="email"
                name="email"
                onChange={formValue}
              />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Button type="submit" variant="success" className="w-100" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Register User'}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default UserRegisterPage
