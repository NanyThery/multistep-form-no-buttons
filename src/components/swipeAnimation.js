import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledAnimation = styled.div`
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(20%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-20%);
    }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(20%);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(-20%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

const Fade = ({ show, children, direction }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  const returnAnimation = () => {
    switch (direction) {
      case "onwards":
        return (
          <StyledAnimation
            style={{
              animation: `${show ? "fadeInLeft" : "fadeOutLeft"} 1s `,
            }}
            onAnimationEnd={onAnimationEnd}
          >
            {children}
          </StyledAnimation>
        );
      case "reverse":
        return (
          <StyledAnimation
            style={{
              animation: `${show ? "fadeInRight" : "fadeOutRight"} 1s `,
            }}
            onAnimationEnd={onAnimationEnd}
          >
            {children}
          </StyledAnimation>
        );
      default:
        return <StyledAnimation>{children}</StyledAnimation>;
    }
  };

  return shouldRender && returnAnimation();
};

export default Fade;
