import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import urlshortner from "../../Assets/Projects/urlshortner.jpeg";
import railway from "../../Assets/Projects/railway.webp";
import chatify from "../../Assets/Projects/chatify.png";
import learntube from "../../Assets/Projects/learntube.png";
import comment from "../../Assets/Projects/comment.png";
import blog from "../../Assets/Projects/blog.webp"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Next.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages as like google meet."
              ghLink="https://github.com/Mukesh015/Videocall-Application"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learntube}
              isBlog={false}
              title="Learntube"
              description="You can post course videos to the same course and organise your course with this programme. Users can purchase your course through the Stripe payment mechanism. You can also post videos to the public domain for free views, and subscribers will be tallied. In essence, it is a mix of YouTube and Unacademy made with numerous technologies such as Next.js, Firebase, Redux, Node (Server), Tailwind, and many more. There are 23 routes offered in total."
              ghLink="https://github.com/Mukesh015/learntube-1.0"
              demoLink="https://learntube-8cmt.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comment}
              isBlog={false}
              title="YouTube Comment Analyzer"
              description="This Chrome extension uses an artificial intelligence (AI) sentiment analysis system built in Python. It automatically retrieves the comments and compares the counts of favourable, negative, and neutral remarks whenever it detects a YouTube video tab open in Chrome."
              ghLink="https://github.com/Mukesh015/YouTube-Comment-Analyzer"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Railway Monitoring System"
              description="This is a Python AI project based on CCTV. CCTV constantly scans the area for unlawful activity, such as smoking, odd behaviours, crowd control, and staff job monitoring. It will alert and sound the alarm if any of the above are found."
              ghLink="https://github.com/Mukesh015/Railway-monitoring-system"
              demoLink="https://vimeo.com/893119312"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlshortner}
              isBlog={false}
              title="URL Shortner"
              description="Just Paste the link and click on generate button your link will be shortened and a QR code will generated you can go with either link or QR. Authentication is implemented, your data is sheparated here, All the data will be shown as tabular form for better experience."
              ghLink="https://github.com/Mukesh015/Url-Shortner-2.0"
              demoLink="https://url-shortner-xgln.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Application"
              description="Once a person has authenticated, they can post questions and receive responses from knowledgeable individuals. Here, a stunning user interface is used, along with a dashboard that shows the chronological order of all questions and the number of responders. People can view all of the suggested blogs relevant to their interests under the blog tab. To regulate traffic, Next.js, Tailwind, Redux, Node Server, and Nginx were used in its creation."
              ghLink="https://github.com/Mukesh015/Blog-Application"
              demoLink="https://communityblog.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
