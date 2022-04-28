import "../App.css";
import useFetch from "../API/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import LoadingScreen from "./LoadingScreen";

import { Link } from "react-router-dom";

const Entertainment = () => {
  const {
    data: start,
    loading,
    error,
  } = useFetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=712a8c0fa12d406c8f710f1d01b47dd8`
  );


  if (loading) return <h1>{<LoadingScreen />}</h1>;

  if (error) return console.log(error);

  const styles = {
    cardImage: {
      objectFit: "cover",
    },
  };

  return (
    <div className="TopHeadlinesUS">
      <Container fluid>
        {/*Row1*/}
        <Row>
          <Col>
            <Link to={{ pathname: start?.articles[0].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[0].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[0].url }} target="_blank">
              <h2>{start?.articles[0].title.replace(/-[^,]+$/, "")}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[1].url }} target="_blank">
              <center>
                <img alt="" variant="top" src={start?.articles[1].urlToImage} />
              </center>
            </Link>
            <Link>
              <h2>{start?.articles[1].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[2].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[2].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[2].url }} target="_blank">
              <h2>{start?.articles[2].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[3].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[3].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[3].url }} target="_blank">
              <h2>{start?.articles[3].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>
        </Row>

        {/*Row2*/}

        <Row>
          <Col>
            <Link to={{ pathname: start?.articles[4].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[4].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[4].url }} target="_blank">
              <h2>{start?.articles[4].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[5].url }} target="_blank">
              <center>
                <img alt="" variant="top" src={start?.articles[5].urlToImage} />
              </center>
            </Link>
            <Link>
              <h2>{start?.articles[5].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[6].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[6].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[2].url }} target="_blank">
              <h2>{start?.articles[6].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[7].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[7].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[3].url }} target="_blank">
              <h2>{start?.articles[7].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>
        </Row>

        {/*Row3*/}

        <Row>
          <Col>
            <Link to={{ pathname: start?.articles[8].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[8].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[0].url }} target="_blank">
              <h2>{start?.articles[8].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[9].url }} target="_blank">
              <center>
                <img alt="" variant="top" src={start?.articles[9].urlToImage} />
              </center>
            </Link>
            <Link>
              <h2>{start?.articles[9].title.split("-")[0]}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[10].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[10].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[2].url }} target="_blank">
              <h2>{start?.articles[10].title.replace(/-[^,]+$/, "")}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>

          <Col>
            <Link to={{ pathname: start?.articles[11].url }} target="_blank">
              <center>
                <img variant="top" src={start?.articles[11].urlToImage} />
              </center>
            </Link>
            <Link to={{ pathname: start?.articles[3].url }} target="_blank">
              <h2>{start?.articles[11].title.replace(/-[^,]+$/, "")}</h2>
            </Link>
            <hr />
            <p>{start?.articles[4].description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Entertainment;
