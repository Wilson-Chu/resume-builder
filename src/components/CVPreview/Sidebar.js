import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Sidebar = ({ personalInfo }) => {
  return (
    <SidebarWrapper>
      {personalInfo.photo && <Photo src={personalInfo.photo} />}
      <Section title="Personal Details" contrastTitle direction="column">
        {/* <Subsection title="Address">{personalInfo.address}</Subsection> */}
        <Subsection title="Phone Number">
          <a href={`tel:${personalInfo.phoneNumber}`}>
            {personalInfo.phoneNumber}
          </a>
        </Subsection>
        <Subsection title="Email">
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </Subsection>
        {personalInfo.linkedIn && (
          <Subsection title="LinkedIn">
            <a href={`https://${personalInfo.linkedIn}`}>
              {personalInfo.linkedIn}
            </a>
          </Subsection>
        )}{" "}
        {personalInfo.website && (
          <Subsection title="Website">
            <a href={`https://${personalInfo.website}`}>
              {personalInfo.website}
            </a>
          </Subsection>
        )}{" "}
      </Section>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;

export default Sidebar;
