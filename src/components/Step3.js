import styled from "styled-components";

const StyledContainer = styled.div``;

const Step3 = ({ sentData }) => {
  return (
    <StyledContainer>
      <p>Thank you</p>

      <p>This is the info you entered:</p>
      <div>
        <h2>Your Name</h2>
        <p>{sentData.userName}</p>
      </div>
      <div>
        <h2>Your Color</h2>
        <p>{sentData.color}</p>
      </div>
      <div>
        <h2>Your pet's name</h2>
        <p>{sentData.animal}</p>
      </div>
      <div>
        <h2>The best game of all times...</h2>
        <p>{sentData.bestGame}</p>
      </div>
      <p>
        This data was not sent anywhere, this will remain in the secret of your
        browser...
      </p>
    </StyledContainer>
  );
};

export default Step3;
