import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';
import { greetings } from '../portfolio';
import { GithubUserType } from '../types';

// Modificando o componente para aceitar o githubProfileData como prop
const Greetings = ({
  githubProfileData,
}: {
  githubProfileData: GithubUserType;
}) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-grings">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greetings.title ?? undefined}
                  </h1>
                  <p
                    className="lead text-white"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {greetings.description}
                  </p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">
                          Acesse meu currículo!
                        </span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6">
                  {githubProfileData && githubProfileData.avatar_url && (
                    <img
                      src={githubProfileData.avatar_url}
                      style={{
                        width: '300px',
                        height: '300px',
                        objectFit: 'cover',
                      }}
                      alt="Avatar"
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    />
                  )}
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
