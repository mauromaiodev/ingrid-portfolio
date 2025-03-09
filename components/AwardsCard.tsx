import Fade from 'react-reveal/Fade';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import { AwardsType } from '../types/sections';

interface AwardsCardProps extends AwardsType {
  centerLastItem?: boolean;
}

const AwardsCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
  centerLastItem,
}: AwardsCardProps) => {
  return (
    <Col
      lg={centerLastItem ? { size: 6, offset: 3 } : '6'}
      className={centerLastItem ? 'mx-auto' : ''}
    >
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={companyLogo}
              style={{
                objectFit: 'cover',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
              }}
              className="shadow mb-3"
              alt={companyLogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {company}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {role}
            </CardSubtitle>
            <CardSubtitle>{date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {desc}
              <ul>
                {descBullets
                  ? descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default AwardsCard;
