import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/authOperations';
import {
  Container,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AddIcon, StarIcon, AtSignIcon, ViewOffIcon } from '@chakra-ui/icons';

export const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registrationThunk(user));
  };
  return (
    <Container mb="40px" mt="20px">
      <form onSubmit={handleSubmit}>
        <Heading textAlign="center" color="white" mb="20px">
          Registration form
        </Heading>
        <InputGroup mb="20px" mt="20px">
          <InputLeftElement pointerEvents="none">
            <StarIcon color="white" />
          </InputLeftElement>
          <Input
            _focus={{
              borderColor: 'pink.500',
              boxShadow: '0 0 0 1px #D53F8C',
            }}
            size="md"
            mb="10px"
            w="100%"
            name="name"
            type="text"
            placeholder="Name..."
          />
        </InputGroup>
        <InputGroup mb="20px" mt="20px">
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="white" />
          </InputLeftElement>
          <Input
            _focus={{
              borderColor: 'pink.500',
              boxShadow: '0 0 0 1px #D53F8C',
            }}
            size="md"
            mb="10px"
            w="100%"
            name="email"
            autoComplete="off"
            type="text"
            placeholder="Email..."
          />
        </InputGroup>
        <InputGroup mb="20px" mt="20px">
          <InputLeftElement pointerEvents="none">
            <ViewOffIcon color="white" />
          </InputLeftElement>
          <Input
            mb="10px"
            _focus={{
              borderColor: 'pink.500',
              boxShadow: '0 0 0 1px #D53F8C',
            }}
            size="md"
            w="100%"
            name="password"
            type="password"
            placeholder="Password..."
            minLength="7"
          />
        </InputGroup>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="pink"
          variant="solid"
          type="submit"
          mr="auto"
          ml="auto"
          display="flex"
          mt="20px"
        >
          Sign UP
        </Button>
      </form>
    </Container>
  );
};
