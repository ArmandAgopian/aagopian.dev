'use client';
import {Button, Container, Spacer} from '@nextui-org/react';
import {RxGithubLogo, RxLinkedinLogo} from 'react-icons/all';

export default function App() {
  return (
    <>
      <Spacer />
      <Container fluid display="flex" justify="space-between">
        <Button
          onPress={() => {
            window.open('https://github.com/ArmandAgopian');
          }}
          color={'gradient'}
          size="lg"
          auto
          rounded
          ghost
          icon={<RxGithubLogo />}
        >
          Github
        </Button>
        <Button
          onPress={() => {
            window.open('https://www.linkedin.com/in/armandagopian/');
          }}
          color={'gradient'}
          size="lg"
          auto
          rounded
          ghost
          icon={<RxLinkedinLogo />}
        >
          Linkedin
        </Button>
        <Button size="lg" auto rounded ghost disabled>
          Resume
        </Button>
      </Container>
    </>
  );
}
