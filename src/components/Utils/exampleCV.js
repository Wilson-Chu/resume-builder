import { v4 as uuidv4 } from "uuid";
import examplePhoto from "../../assets/empty_avatar.png";

const exampleCV = {
  personalInfo: {
    firstName: "John",
    lastName: "Smith",
    title: "Software Developer",
    photo: examplePhoto,
    // address: "Example Street 10",
    phoneNumber: "123456789",
    email: "john.smith@gmail.com",
    linkedIn: "www.linkedin.com",
    website: "www.wilsonchu.ca",
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus.",
  },
  projects: [
    {
      id: uuidv4(),
      projectTitle: "Resume Builder",
      from: "2021",
      to: "2022",
      description: "Generated this resume you're seeing!",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "Facebook Inc.",
      city: "Menlo Park",
      from: "2015",
      to: "Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: uuidv4(),
      position: "Junior Web Developer",
      company: "Tesla Inc.",
      city: "Palo Alto",
      from: "2012",
      to: "2015",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName:
        "Toronto Metropolitan University (formerly Ryerson University)",
      city: "Toronto, ON",
      degree: "BEng",
      subject: "Mechanical Engineering",
      from: "2012",
      to: "2017",
      description: "Specialization: Mechatronics; Minor: Mathematics",
    },
  ],
};

export default exampleCV;
