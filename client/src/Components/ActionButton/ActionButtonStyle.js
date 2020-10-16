import styled from 'styled-components/macro';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;

  @media screen and (min-device-width: 780px) {
    /* width: 300px; */
    width: 200px;
  }
`;

export const ActionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #303030;

  @media screen and (min-device-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Icon = styled.div``;

export const IconText = styled.div`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  @media screen and (min-device-width: 780px) {
    /* margin-top: 0.5rem; */
    display: none;
    ${ActionButton}:hover & {
      display: inline;
    }
  }
`;