import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  margin-top: 35px;
  padding: 40px 20px;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363f5f')};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 16px;
    }

    img {
      width: 27px;
      height: 27px;
    }
  }
  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.table`

    margin-top: 64px;
    width: 100%;
    border-spacing: 0 8px;

    th {
      padding: 20px 32px;
      text-align: left;
      color: #969cb3;
      font-size: 16px;
      font-weight: normal;
      line-height: 24px;
    }
    td {
      background: #fff;
      padding: 20px 32px;
      border-radius: 5px;
      font-size: 16px;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }
      &.income {
        color: #12a454;
      }
      &.outcome {
        color: #e83f5b;
      }

      td:first-child {
        border-radius: 8px 0 0 8px;
      }

      td:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;
