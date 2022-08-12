import React from "react";
import ProjectsItem from "./ProjectsItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Projects = ({ projects, onChange, onAdd, onDelete }) => {
  const projectsItems = projects.map((projectsItem) => (
    <ProjectsItem
      key={projectsItem.id}
      id={projectsItem.id}
      educationItem={projectsItem}
      onChange={onChange}
      onDelete={onDelete}
    ></ProjectsItem>
  ));

  return (
    <Section title="Projects" titlePadding="0.5rem" direction="column">
      {projectsItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Projects;
