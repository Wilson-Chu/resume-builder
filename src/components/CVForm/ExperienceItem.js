import React from "react";
import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";
import Button from "../Utils/Button";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Position Title"
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Company Name"
        value={experienceItem.company}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City, Province"
        value={experienceItem.city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="Start Date"
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="End Date"
        value={experienceItem.to}
      />
      <TextArea
        onChange={(e) => onChange(e, id)}
        type="text"
        name="description"
        placeholder="Description"
        value={experienceItem.description}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default ExperienceItem;
