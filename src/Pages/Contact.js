import React, { useState } from 'react'
import styled from 'styled-components';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // I will Add form submission logic here
    console.log(formData);
  };

    return (
      <>
      <Header>
        <Title>GET IN TOUCH</Title>
        <p>Feel free to drop us a line below</p>
      </Header>
  
      <Container>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <TextArea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </Form>
          <ContactInfo>
            <ContactItem>
              <Icon>📍</Icon>
              <span>Dome-Born Again, Near GCB</span>
            </ContactItem>
            <ContactItem>
              <Icon>📞</Icon>
              <span>+233 303 970 456 - Office</span>
            </ContactItem>
            <ContactItem>
              <Icon>📞</Icon>
              <span>+233 577 482 311 - Home</span>
            </ContactItem>
            <ContactItem>
              <Icon>✉️</Icon>
              <span>info@radofconsult.com</span>
            </ContactItem>
            <ContactItem>
              <Icon>✉️</Icon>
              <span>radofconsult@yahoo.com</span>
            </ContactItem>
            <p>Mon – Fri . 8.00 – 17.00</p>
            <p>Sat . 9.00 – 15.00</p>
          </ContactInfo>
        </FormWrapper>
    </Container>
    </>
    );
  }

  export default Contact;

  const Header = styled.div`
  text-align:center ;
  color: #fff;
  p {
    color: #000;
    font-size: 1.2em;
  }
`;

  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #fc466b, #3f5efb);
  margin-bottom: 120px;
`;

const FormWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  width: 85%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #fc466b, #3f5efb);
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px ;
  background: white;
  border-radius: 25px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6c63ff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #5753c9;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  width: 100%;
  color: #fff;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;