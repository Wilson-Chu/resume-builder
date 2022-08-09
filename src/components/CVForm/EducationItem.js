import React from "react";
import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";
import Button from "../Utils/Button";

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="universityName"
        placeholder="College/University Name"
        value={educationItem.universityName}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City, Province"
        value={educationItem.city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="degree"
        placeholder="Degree Type"
        value={educationItem.degree}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationItem.subject}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="Start Date"
        value={educationItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="End Date"
        value={educationItem.to}
      />
      <TextArea
        onChange={(e) => onChange(e, id)}
        type="text"
        name="description"
        placeholder="Description"
        value={educationItem.description}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default EducationItem;
