import * as S from './NavStyle';
import styled from 'styled-components';
import { NAV_DATA } from './navData';

export default function Nav() {
  return (
    <S.Nav>
      <NavContainer>
        <div>logo</div>

        <CategoryWrapper>
          {NAV_DATA?.map(data => {
            return (
              <MainCategory>
                <li key={data.id}>
                  {data.value}
                  <ul>
                    {data.list.map(data => {
                      return <li key={data.id}>{data.value}</li>;
                    })}
                  </ul>
                </li>
                <sapn>icon</sapn>
              </MainCategory>
            );
          })}
        </CategoryWrapper>
      </NavContainer>
    </S.Nav>
  );
}

const NavContainer = styled.div`
  width: 25%;
  background-color: blue;
`;

const MainCategory = styled.div`
  display: flex;
`;

const CategoryWrapper = styled.ul`
  background-color: red;
`;
