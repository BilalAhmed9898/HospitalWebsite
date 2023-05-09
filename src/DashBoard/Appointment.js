import React, { useState } from 'react';
import '../App.css';
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';

export default function Appointment() {

  document.title = "Appointment | Al-Shams Hospital";
  const [values, setValue] = useState({
    age: '',
    name: '',
    type: '',
    time: '',
    date: '',
  })
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    if (!values.age || !values.name || !values.type || !values.time || !values.date) {
      return alert("Fill all Feilds")
    }
    else {
      console.log(values)
      alert("Appointment Submitted")
    }
  };

  setTimeout(function () {
    setIsLoading(false)
  }, 3000);



  return (

    <React.Fragment>
      <Container size={410} my={40}>
        <Title className='title1'
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 800 })}
        >
          Get Appointment
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput type="number" label="Patient Age" placeholder='23'
            onChange={(event) => setValue((prev) => ({ ...prev, age: event.target.value }))}
          />
          <TextInput label="Name" type='text' placeholder="Patient Name"
            onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))}
          />
          <TextInput label="Disease Type" type='text' placeholder="Disease Name"
            onChange={(event) => setValue((prev) => ({ ...prev, type: event.target.value }))}
          />

          <TextInput type='time' label="Time"
            onChange={(event) => setValue((prev) => ({ ...prev, time: event.target.value }))}
          />
          <TextInput type='date' label="Appointment Date"
            onChange={(event) => setValue((prev) => ({ ...prev, date: event.target.value }))}
          />
          <Button onClick={handleSubmit} fullWidth mt="xl">Sign In</Button>
        </Paper>
      </Container>
    </React.Fragment>
  );
}