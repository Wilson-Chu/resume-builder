import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const ExperienceItem = ({ experienceItem }) => {
  return (
    <ExperienceItemWrapper>
      <Period>
        {experienceItem.from} {experienceItem.from && experienceItem.to && "-"}{" "}
        {experienceItem.to}
      </Period>
      <Info>
        <Subsection title={experienceItem.position}>
          <div>
            {experienceItem.company}
            {experienceItem.company && experienceItem.city && ","}{" "}
            {experienceItem.city}
          </div>
          <p>{experienceItem.description}</p>
        </Subsection>
      </Info>
    </ExperienceItemWrapper>
  );
};

const ExperienceItemWrapper = styled.div`
  display: flex;
`;

const Period = styled.div`
  width: 20%;
  font-weight: bold;
  margin-right: 1.3rem;
`;

const Info = styled.div`
  width: 80%;
`;

export default ExperienceItem;
