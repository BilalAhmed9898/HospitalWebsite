import { Avatar, Text, Paper, Container } from '@mantine/core';
import Button from 'react-bootstrap/Button';
import Doctor1 from './Assests/Doctor1.jpg';
import Doctor2 from './Assests/Doctor2.webp';
import Doctor3 from './Assests/Doctor3.jpg';
import Doctor22 from './Assests/Doctor2.jpg';
import Doctor4 from './Assests/Doctor4.jpg';
import Doctor5 from './Assests/Doctor5.jfif';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Doctor = (props) => {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.dark,
      })}
    >

      <Avatar src={props.image} alt='' size={130} radius={120} mx="auto" />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {props.intro}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {props.description}
      </Text>
      <Text>
        <b>{props.time}</b>
      </Text>
      <br />
      <NavLink to="/Doctors/Appointment">
        <Button variant="primary" >Book Appointment</Button>
      </NavLink>
    </Paper>

  )
}

export default function Doctors({ avatar }) {
  document.title = "Find Doctors | Al-Shams Hospital";

  return (
    <div className='Doctors'>
      <Container size="md" py="lg">

        <Doctor
          image={Doctor1}
          intro={' Dr Dur Muhammad is a Neurologist with over 20 years of experience.'}
          time={'Timing : 12:00 Pm To 05:00 Pm'}
          description={'He is a renowned specialist in diagnosing and treating complex neurological conditions, including Parkinsons disease, multiple sclerosis, and stroke.'}
        />
        <br />
        <Doctor
          image={Doctor2}
          intro={'Dr. Emily Chen is a who pediatrician who has been practicing for 15 years.'}
          time={'Timing : 08:00 Pm To 11:00 Pm'}
          description={' She is passionate about helping children and their families navigate through various health.She specializes in developmental disorders, such as ADHD and autism.'}
        />
        <br />
        <Doctor
          image={Doctor22}
          intro={'Dr. Nisar Lee is a Cardiologist with over 30 years of experience.'}
          time={'Timing : 10:00 Am To 01:00 Pm'}
          description={'He has a particular interest in preventative cardiology and works closely with his patients to develop customized treatment plans to reduce the risk of heart disease.'}
        />
        <br />
        <Doctor
          image={Doctor3}
          intro={'Dr. Jennifer Wong is an Ophthalmologist with over 10 years of experience.'}
          time={'Timing : 6:00 Pm To 12:00 Am'}
          description={'She is passionate about womens health and has helped numerous women with various gynecological issues.She specializes in high-risk pregnancies and minimally invasive surgeries.'}
        />
        <br />
        <Doctor
          image={Doctor4}
          intro={'Dr. Sarah Thompson is an with Obstetrician/Gynecologist with over 15 years of experience.'}
          time={'Timing : 11:00 Am To 02:00 Pm'}
          description={'She specializes in the diagnosis and treatment of eye diseases, such as glaucoma, cataracts, and macular degeneration. She also performs refractive surgery, such as LASIK.'}
        />
        <br />
        <Doctor
          image={Doctor5}
          intro={' Dr. James Lee is a Pulmonologist with over 20 years of experience.'}
          time={'Timing : 10:00 Am To 01:00 Pm'}
          description={'  He is an expert in diagnosing and treating respiratory disorders, such as asthma, COPD, and sleep apnea.He is also a pioneer in the field of interventional pulmonology.'}
        />
        <br />
      </Container>
    </div>
  );
}