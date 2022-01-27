import Nav from '../Component/Nav/Nav';
import Add from '../Component/Add/Add';
import Header from '../Component/Header/Header';
import styled from 'styled-components';

export default function Main() {
  return (
    <>
      <Container>
        <Nav />
        <Wrapper>
          <Header />
          <Add />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
`;
