import { v4 as uuidv4 } from "uuid";
import examplePhoto from "../../assets/empty_avatar.png";

const exampleCV = {
  personalInfo: {
    firstName: "Wilson",
    lastName: "Chu",
    title: "Software Developer",
    photo: examplePhoto,
    // address: "Example Street 10",
    phoneNumber: "647-883-7899",
    email: "wilson1.chu@gmail.com",
    linkedIn: "www.linkedin.com/in/chuwilson",
    website: "www.wilsonchu.ca",
    objective:
      "To demonstrate my aptitude for software development and my ability to learn different technologies efficiently.",
  },
  projects: [
    {
      id: uuidv4(),
      projectTitle: "MERN Project",
      from: "",
      to: "2022",
      description:
        "A fully-functional project management platform with Authorization sign-in. Technologies used: MongoDB, Express, ReactJS, NodeJS, Auth0",
    },
    {
      id: uuidv4(),
      projectTitle: "Resume Builder",
      from: "",
      to: "2022",
      description:
        "Created an ATS-friendly resume based on form-filled data. Updates data in real-time, and includes Print to PDF feature. Technologies used: ReactJS, Styled Components, ReactToPrint and uuid APIs",
    },
    {
      id: uuidv4(),
      projectTitle: "www.wilsonchu.ca",
      from: "",
      to: "2022",
      description:
        "A responsive Portfolio page used to market myself to cool employers like you. Technologies used: ReactJS with Higher-Order Components, Sanity CMS, Formspree API, Netlify",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "Your Company Here",
      city: "Anywhere",
      from: "2022",
      to: "Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you got this far, thank you for taking the time to look at my projects!",
    },
    {
      id: uuidv4(),
      position: "Insights Analyst",
      company: "Rogers Communications",
      city: "Toronto, ON",
      from: "2020",
      to: "2021",
      description:
        "As a member of the Billing and Payments Experience Team, collaborated with Product Owners, Developers, and UX professionals to reduce pain points experienced by customers at every stage of the billing process, driving a 10% reduction in call volumes in Q1 2021. Presented actionable insights to Director-level stakeholders by analyzing large data sets and translating information into PowerPoint decks.",
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
