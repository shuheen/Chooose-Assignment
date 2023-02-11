import styled from '@emotion/styled';

const StyledTripCard = styled.div`
  margin: 10px;
  max-width: 320px;
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .content-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default StyledTripCard;
