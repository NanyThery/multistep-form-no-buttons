import styled from "styled-components";
import { useState, useEffect } from "react";
import Step0 from "../components/Step0";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import StepIndicator from "../components/StepIndicator";
import Fade from "../components/swipeAnimation";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 500px;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  > div {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const WAIT_INTERVAL = 750;
let progressTimer = null;
const bestGame = [
  "The Last of Us II",
  "Ghost of Tsushima",
  "Fall Guys",
  "Call of Duty Warzone",
];
const FormContainer = () => {
  const [step, setStep] = useState({ current: 0, previous: null });
  const [formData, setFormData] = useState({
    userName: "",
    color: "",
    animal: "",
    bestGame: "",
  });
  const [completedSteps, setCompletedSteps] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const [isComplete, setIsComplete] = useState(false);
  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    setStep(3);
  };
  useEffect(() => {
    if (formData.userName.length > 0) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step0: true,
      }));
    }
    if (formData.color.length > 0 && formData.animal.length > 0) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step1: true,
      }));
    }
    if (formData.bestGame) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step2: true,
      }));
    }
  }, [formData]);

  useEffect(() => {
    if (completedSteps.step0 && !completedSteps.step1) {
      clearTimeout(progressTimer);
      progressTimer = setTimeout(() => {
        return setStep({ previous: step.current, current: 1 });
      }, WAIT_INTERVAL);
    }
    if (completedSteps.step0 && completedSteps.step1) {
      clearTimeout(progressTimer);
      progressTimer = setTimeout(() => {
        return setStep({ previous: step.current, current: 2 });
      }, WAIT_INTERVAL);
    }
    if (completedSteps.step0 && completedSteps.step1 && completedSteps.step2) {
      setIsComplete(true);
    }
  }, [completedSteps]);

  const calculateDirection = () => {
    if (step.current > step.previous) return "onwards";
    if (step.current < step.previous) return "reverse";
    return null;
  };

  const handleChangeStep = (newStep) => {
    setStep({ previous: step.current, current: newStep });
    console.log(step);
  };

  return (
    <StyledContainer>
      <Container>
        {step !== 3 && (
          <>
            <StepIndicator
              currentStep={step.current}
              onStepClick={handleChangeStep}
            />
            <ContentWrapper>
              <Fade show={step.current === 0} direction={calculateDirection()}>
                <Step0 onChange={handleChange} userName={formData.userName} />
              </Fade>
              <Fade show={step.current === 1} direction={calculateDirection()}>
                <Step1
                  onChange={handleChange}
                  animal={formData.animal}
                  color={formData.color}
                />
              </Fade>
              <Fade show={step.current === 2} direction={calculateDirection()}>
                <Step2
                  bestGame={formData.bestGame}
                  options={bestGame}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  isComplete={isComplete}
                />
              </Fade>
            </ContentWrapper>
          </>
        )}
        {step === 3 && <Step3 sentData={formData} />}
      </Container>
    </StyledContainer>
  );
};

export default FormContainer;
