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
        {personalInfo.phoneNumber && (
          <Subsection title="Phone Number">
            <a href={`tel:${personalInfo.phoneNumber}`}>
              {personalInfo.phoneNumber}
            </a>
          </Subsection>
        )}
        {personalInfo.email && (
          <Subsection title="Email">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </Subsection>
        )}
        {personalInfo.linkedIn && (
          <Subsection title="LinkedIn">
            <a
              href={`https://${personalInfo.linkedIn}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {personalInfo.linkedIn}
            </a>
          </Subsection>
        )}{" "}
        {personalInfo.website && (
          <Subsection title="Website">
            <a
              href={`https://${personalInfo.website}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {personalInfo.website}
            </a>
          </Subsection>
        )}{" "}
      </Section>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 1.2rem;
`;

export default Sidebar;
