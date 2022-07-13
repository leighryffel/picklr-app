import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function SignUpList() {
  const [signups, setSignUps] = useState([]);

  useEffect(() => {
    fetch("/signups")
      .then((r) => r.json())
      .then(setSignUps);
  }, []);

  return (
    <Wrapper>
      {signups.length > 0 ? (
        signups.map((signup) => (
          <SignUp key={signup.id}>
            <Box>
              <h2>{signup.title}</h2>
              <p>
                <em>Time: {signup.time}</em>
                &nbsp;·&nbsp;
                <cite>Date: {signup.date}</cite>
              </p>
              <ReactMarkdown>Signup Information here</ReactMarkdown>
            </Box>
          </SignUp>
        ))
      ) : (
        <>
          <h2>No Signups Found</h2>
          <Button as={Link} to="/new">
            Reserve a Court Time
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const SignUp = styled.article`
  margin-bottom: 24px;
`;

export default SignUpList;
