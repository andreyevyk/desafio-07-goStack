import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 40px;
    color: #363f5f;
  }
`;

export const ImportFileContainer = styled.div`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 21px;

    div {
      display: flex;
      align-items: center;

      svg {
        color: #ff872c;
      }
      span {
        margin-left: 12px;
        font-size: 12px;
        line-height: 18px;
        color: #969cb3;
      }
    }

    button {
      color: #fff;
      border-radius: 5px;
      padding: 15px 82px;
      background: #ff872c;
      border: 0;
    }
  }
`;
