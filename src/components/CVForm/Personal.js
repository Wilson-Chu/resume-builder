import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import TextArea from "../Utils/TextArea";
import FileInput from "../Utils/FileInput";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <Section
      title="Personal Information"
      titlePadding="0.5rem"
      direction="column"
    >
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First Name"
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={personalInfo.lastName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Job Title (optional)"
        value={personalInfo.title}
      />
      <FileInput
        onChange={(e) => onChange(e)}
        name="photo"
        label="Photo (optional)"
        value={personalInfo.photo}
      />
      {/* <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
      /> */}
      <Input
        onChange={(e) => onChange(e)}
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={personalInfo.phoneNumber}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="email"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="url"
        name="linkedIn"
        placeholder="LinkedIn"
        value={personalInfo.linkedIn}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="url"
        name="website"
        placeholder="Website"
        value={personalInfo.website}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="objective"
        placeholder="Objective (optional)"
        value={personalInfo.objective}
      />
    </Section>
  );
};

export default Personal;
