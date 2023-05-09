import { useState } from 'react';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 100,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-10deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][4]
      } 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 3.9)`,

    [theme.fn.smallerThan('lg')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.black,
    lineHeight: 3,
    fontSize: 40,
  },

  description: {
    color: theme.black,
    fontSize: 19,
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,
    '&:hover': {
      color: theme.colors[theme.primaryColor][2],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][4],
  },
}));

const social = [IconBrandTwitter, IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram];

export default function Contact() {
  document.title = "Contact | Al-Shams Hospital";

  const [values, setValue] = useState({
    name: '',
    email: '',
    address: '',
  })
  const handleSubmit = () => {
    if (!values.name || !values.email || !values.address) {
      return alert("Fill all Feilds")
    }
    else {
      console.log(values)
      alert("Message Submitted")
      setValue("")
    }
  };


  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={40} className={classes.social} variant="transparent">
      <Icon size="1.7rem" stroke={1.4} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>
          <Group mt="sm">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))}
          />
          <TextInput
            label="Name"
            placeholder="Ajmal Ahmed"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))}
          />
          <Textarea
            required
            label="Your message"
            placeholder="Ask Any thing About Healthcare related!"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            onChange={(event) => setValue((prev) => ({ ...prev, address: event.target.value }))}
          />
          <Group position="center" mt="md">
            <Button className={classes.control} onClick={handleSubmit} >Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}