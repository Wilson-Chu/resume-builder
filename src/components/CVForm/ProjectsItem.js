import React from "react";
import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";
import Button from "../Utils/Button";

const ProjectsItem = ({ id, projectsItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="projectTitle"
        placeholder="Project Title"
        value={projectsItem.projectTitle}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="Start Date"
        value={projectsItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="End Date"
        value={projectsItem.to}
      />
      <TextArea
        onChange={(e) => onChange(e, id)}
        type="text"
        name="description"
        placeholder="Description"
        value={projectsItem.description}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default ProjectsItem;
