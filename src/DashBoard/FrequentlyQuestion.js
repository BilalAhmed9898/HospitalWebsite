import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1.5)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
      }`,
  },
}));

export default function FrequentlyQuestion() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper} >
      <span className='title1'>
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>
      </span>

      <Accordion theme={{
        colorScheme: 'dark',
        colors: {
          dark: [
            '#01010a',
          ],
        },
      }} variant="separated">
        <Accordion.Item className={classes.item} value="Online-Consultation">
          <Accordion.Control>What is an online doctor consultation?</Accordion.Control>
          <Accordion.Panel>An online doctor consultation takes place when you speak to a doctor about your health concerns through a virtual platform. It is an alternative for times when a patient cannot visit a doctor physically at the hospital or clinic. Online doctor consultation works the same way as a physical consultation where a patient gets a prescription after the consultation is complete. One of the benefits of the online doctor consultation is that you can consult a doctor on the dawaai app at the convenience of your home at any time.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="Online-appointment">
          <Accordion.Control>How do I book an online appointment with the doctor?
          </Accordion.Control>
          <Accordion.Panel>
            Follow these 4 easy steps to book an online appointment: <br />
            (1) Download the app <br />
            (2) Browse through our range or doctors or specializations <br />
            (3) Choose your desired time slot <br />
            (4) Begin your consultation!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="qualified">
          <Accordion.Control>Are your online doctors qualified?</Accordion.Control>
          <Accordion.Panel>
            Yes, all our doctors on board are experienced, qualified and registered with their respective Councils.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="services">
          <Accordion.Control>What type of services are available?
          </Accordion.Control>
          <Accordion.Panel>  Dawaai offers two types of services:
            Free Chat Consultation: Avail our free doctors helpline chat and talk to our doctors anytime for free!
            Paid Video Consultation: Have a real-life experience with our premium video call feature and avail online doctor consultations.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="pre-booked">
          <Accordion.Control>What if I need to cancel my pre-booked appointment?
          </Accordion.Control>
          <Accordion.Panel>   If you need to cancel your appointment either call on the following number - (021) 111-329-224 and you will be asked to provide your contact details or email your contact details to pharmacy@dawaai.pk.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}