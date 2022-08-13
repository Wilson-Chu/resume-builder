import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const ProjectsItem = ({ projectsItem }) => {
  return (
    <ProjectsItemWrapper>
      <Period>
        {projectsItem.from} {projectsItem.from && projectsItem.to && "-"}{" "}
        {projectsItem.to}
      </Period>
      <Info>
        <Subsection title={projectsItem.projectTitle}>
          <p>{projectsItem.description}</p>
        </Subsection>
      </Info>
    </ProjectsItemWrapper>
  );
};

const ProjectsItemWrapper = styled.div`
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

export default ProjectsItem;
