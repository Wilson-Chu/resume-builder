import { v4 as uuidv4 } from "uuid";
import examplePhoto from "../../assets/empty_avatar.png";

const exampleCV = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Senior Web Developer",
    photo: examplePhoto,
    address: "Example Street 10",
    phoneNumber: "123456789",
    email: "john.doe@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Senior Web Developer",
      company: "Facebook Inc.",
      city: "Menlo Park",
      from: "2015",
      to: "Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum.",
    },
    {
      id: uuidv4(),
      position: "Junior Web Developer",
      company: "Tesla Inc.",
      city: "Palo Alto",
      from: "2012",
      to: "2015",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum.",
    },
    {
      id: uuidv4(),
      position: "UI / UX Designer",
      company: "Google LLC",
      city: "Mountain View",
      from: "2010",
      to: "2012",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum.",
    },
    {
      id: uuidv4(),
      position: "Position",
      company: "Company name",
      city: "City name",
      from: "From",
      to: "To",
      description: "Description",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "Toronto Metropolitan University (formerly Ryerson)",
      city: "Toronto, ON",
      degree: "BEng",
      subject: "Mechanical Engineering",
      from: "2012",
      to: "2017",
      description: "Specialization: Mechatronics; Minor: Mathematics",
    },
    {
      id: uuidv4(),
      universityName: "University name",
      city: "City name",
      degree: "",
      subject: "",
      from: "From",
      to: "To",
      description: "Description",
    },
  ],
};

export default exampleCV;
