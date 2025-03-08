import { Card, Col, Container, Row } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-sm bg-gradient-grings shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">ATÉ LOGO 👋</h2>
              <p className="lead text-white mt-3">
                Estou à disposição para mostrar como minha trajetória e
                habilidades podem contribuir para o seu sucesso.
              </p>
              <p className="text-white mt-3">{bio}</p>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
