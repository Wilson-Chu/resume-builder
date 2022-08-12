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
  width: 25%;
  font-weight: bold;
  margin-right: 2rem;
`;

const Info = styled.div`
  width: 75%;
`;

export default ProjectsItem;
