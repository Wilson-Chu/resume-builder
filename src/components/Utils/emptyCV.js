import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assets/empty_avatar.png";

const exampleCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: emptyAvatar,
    // address: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
    website: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      description: "",
    },
  ],
};

export default exampleCV;
