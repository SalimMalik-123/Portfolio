import React from "react";
import { MdDesignServices ,} from "react-icons/md";
import { FiCodesandbox,FiDatabase,FiServer } from "react-icons/fi";
import { CgWebsite ,CgDatabase,CgServer} from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Frontend"}
            disc={`React JS, React Native, Redux, JavaScript, TypeScript, HTML, CSS, Bootstrap, SASS, MUI, Ant Design, Ag-Grid,`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Backend"}
            disc={`C#, ASP.NET Core Web API, Java Spring Boot,Node, Python, AWS, Cloud, Micro Services, Firebase`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiDatabase}
            title={"Database"}
            disc={`Microsoft SQL Server, MySQL, Postgres SQL`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
