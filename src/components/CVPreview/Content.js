import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Section from "../Utils/Section";

const Content = ({ personalInfo, experience, education }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrapper>
      {personalInfo.objective && (
        <Section title="Objective" contrastTitle>
          <Objective>{personalInfo.objective}</Objective>
        </Section>
      )}
      <Section title="Experience" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" direction="column" contrastTitle>
        {educationItems}
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Objective = styled.div`
  font-style: italic;
`;

export default Content;
