import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';
import { greetings } from '../portfolio';
import { GithubUserType } from '../types';

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
        </section>
      </div>
    </main>
  );
};

export default Greetings;
