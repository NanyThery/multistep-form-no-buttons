import styled from "styled-components";

const StyledBullet = styled.i`
  margin-right: 8px;
  display: block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  &.active {
    background-color: gray;
  }
`;

const StyledBulletContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const StepIndicator = ({ currentStep, onStepClick = () => {} }) => {
  const handleOnClick = (current) => {
    onStepClick(current);
  };

  return (
    <StyledBulletContainer>
      <StyledBullet
        className={currentStep === 0 && "active"}
        onClick={() => handleOnClick(0)}
      />

      <StyledBullet
        className={currentStep === 1 && "active"}
        onClick={() => handleOnClick(1)}
      />

      <StyledBullet
        className={currentStep === 2 && "active"}
        onClick={() => handleOnClick(2)}
      />
    </StyledBulletContainer>
  );
};

export default StepIndicator;
