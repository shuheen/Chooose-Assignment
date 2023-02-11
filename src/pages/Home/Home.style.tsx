import styled from '@emotion/styled';

const StyledHome = styled.div`
  height: 100%;
  background-color: #f6f7f9;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  .container {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      width: 90%;
      flex-wrap: wrap;
    }

    @media (max-width: 1200px) {
      width: 85%;
      flex-wrap: wrap;
    }
  }
`;

export default StyledHome;
