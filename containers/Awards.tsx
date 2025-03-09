import { Container, Row } from 'reactstrap';
import AwardsCard from '../components/AwardsCard';
import { awards } from '../portfolio';

const Awards = () => {
  return (
    awards && (
      <section className="section section-lg bg-gradient-grings">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-trophy text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info text-white">
                Reconhecimentos e prêmios
              </h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {awards.map((data, i) => {
              const isLastItem = i === awards.length - 1;
              const isOddTotal = awards.length % 2 !== 0;
              const centerLastItem = isLastItem && isOddTotal;

              return (
                <AwardsCard key={i} {...data} centerLastItem={centerLastItem} />
              );
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Awards;
