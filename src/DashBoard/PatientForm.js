import { useState } from 'react';
import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { Project } from './firebase';
import {
    TextInput,
    Paper,
    Title,
    Container,
    Button,
    Textarea
} from '@mantine/core';
import './App.css';
import { InfinitySpin } from 'react-loader-spinner'


const db = getDatabase(Project)
export default function PatientForm() {

const [values, setValue] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
})
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const handleSubmit = () => {
    if (!values.name || !values.email || !values.age || !values.address) {
        setError("fill all Fields")
        return;
    }
   else{
    set(ref(db, 'users' ), {
        name: values.name ,
        email: values.email,
        age:values.age,
        address:values.address,
    });
    console.log(values)
    setError("")
    setValue("")
   }
};
setTimeout(function () {
    setIsLoading(false);
}, 4000);

return (
    <div className='main'>

        <Container size={380} my={20}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 750, fontSize: 18 })}
            >
                <h1>
                    Patient Requirement!
                </h1>
            </Title>
            <Paper withBorder shadow="xl" p={22} mt={37} radius="sm" >
                <TextInput label="Patient Name" placeholder="Patient Name" required radius="sm" onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))} />
                <TextInput label="Email" placeholder="Email" required radius="sm" onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))} />
                <TextInput type="number" label="Age" onChange={(event) => setValue((prev) => ({ ...prev, age: event.target.value }))} />
                <Textarea
                    placeholder="House Number , Street Number , Town !"
                    label="Address"
                    autosize
                    minRows={3}
                    onChange={(event) => setValue((prev) => ({ ...prev, address: event.target.value }))}
                />
                <div className='Error'>{error}</div>
                {isLoading ? <InfinitySpin
                    width='150'
                    color="#4fa94d"
                /> : <Button onClick={handleSubmit} fullWidth mt="xl">Sign In</Button>}
            </Paper>
        </Container>
    </div>
);
}