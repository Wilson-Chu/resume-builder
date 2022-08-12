import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const EducationItem = ({ educationItem }) => {
  return (
    <EducationItemWrapper>
      <Period>
        {educationItem.from} {educationItem.from && educationItem.to && "-"}{" "}
        {educationItem.to}
      </Period>
      <Info>
        <Subsection
          title={`${educationItem.universityName}${
            educationItem.universityName && educationItem.city && ","
          } ${educationItem.city}`}
        >
          <p>
            {educationItem.degree}
            {educationItem.degree && educationItem.subject && ","}{" "}
            {educationItem.subject}
          </p>
          <p>{educationItem.description}</p>
        </Subsection>
      </Info>
    </EducationItemWrapper>
  );
};

const EducationItemWrapper = styled.div`
  display: flex;
`;

const Period = styled.div`
  width: 20%;
  font-weight: bold;
  margin-right: 1.5rem;
`;

const Info = styled.div`
  width: 80%;
`;

export default EducationItem;
