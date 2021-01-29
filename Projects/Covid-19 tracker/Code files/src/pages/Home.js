import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import NumberFormat from "react-number-format";
import Loader from "react-spinners/PulseLoader";

function Home() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .all([
        axios.get("https://disease.sh/v3/covid-19/all"),
        axios.get("https://disease.sh/v3/covid-19/countries"),
      ])
      .then((res) => {
        setLatest(res[0].data);
        setResults(res[1].data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  const cardStyle = {
    margin: "30px auto",
    width: "18rem",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#e3e3e3",
    height: "38rem",
  };

  const countries = filterCountries.map((data, i) => {
    return (
      <Card key={i} className="text-center shadow" style={cardStyle}>
        <Card.Img variant="top" src={data.countryInfo.flag} height="180" />
        <Card.Body>
          <Card.Header className="font-weight-bold">
            {data.country.toUpperCase()}
          </Card.Header>
          <ListGroup variant="flush" className="bg-transparent">
            <ListGroup.Item className="bg-transparent">
              Cases:{" "}
              <NumberFormat
                value={data.cases}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Deaths:{" "}
              <NumberFormat
                value={data.deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Recoveries:{" "}
              <NumberFormat
                value={data.recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Today's cases:{" "}
              <NumberFormat
                value={data.todayCases}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Today's deaths:{" "}
              <NumberFormat
                value={data.todayDeaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Active:{" "}
              <NumberFormat
                value={data.active}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent">
              Critical:{" "}
              <NumberFormat
                value={data.critical}
                displayType={"text"}
                thousandSeparator={true}
              />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  });

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  return (
    <div class="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader size={50} color={"green"} loading={loading} />
      </div>
      <br />
      <h2
        className="font-weight-bold"
        style={{
          textAlign: "center",
          textShadow:
            "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee,3px 2px 1px #ccc, 2px 3px 1px #eee,4px 3px 1px #ccc, 3px 4px 1px #eee,5px 4px 1px #ccc, 4px 5px 1px #eee,6px 5px 1px #ccc, 5px 6px 1px #eee,7px 6px 1px #ccc;",
        }}
      >
        Recent COVID Updates
      </h2>
      <CardDeck>
        <Card
          text="white"
          className="text-center border-none shadow rounded-0"
          style={{ margin: "10px", backgroundColor: "#424242" }}
        >
          <Card.Body>
            <Card.Title>Total Cases</Card.Title>
            <NumberFormat
              value={latest.cases}
              displayType={"text"}
              thousandSeparator={true}
              style={{ fontSize: "30px" }}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          text={"white"}
          className="text-center border-none shadow rounded-0"
          style={{ margin: "10px", backgroundColor: "#424242" }}
        >
          <Card.Body>
            <Card.Title>Total Deaths</Card.Title>
            <Card.Text>
              {" "}
              <NumberFormat
                value={latest.deaths}
                displayType={"text"}
                thousandSeparator={true}
                style={{ fontSize: "30px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          text={"white"}
          className="text-center border-none shadow rounded-0"
          style={{ margin: "10px", backgroundColor: "#424242" }}
        >
          <Card.Body>
            <Card.Title>Total Recoveries</Card.Title>
            <Card.Text>
              {" "}
              <NumberFormat
                value={latest.recovered}
                displayType={"text"}
                thousandSeparator={true}
                style={{ fontSize: "30px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          text="white"
          className="text-center border-none shadow rounded-0"
          style={{ margin: "10px", backgroundColor: "#424242" }}
        >
          <Card.Body>
            <Card.Title>Total Tests</Card.Title>
            <NumberFormat
              value={latest.tests}
              displayType={"text"}
              thousandSeparator={true}
              style={{ fontSize: "30px" }}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <Form className="mx-auto d-block" style={{ outline: "none !important" }}>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            type="text"
            placeholder="Search Country here... Ex. USA"
            onChange={(e) => setSearchCountries(e.target.value)}
            className="border-bottom border-top-0 border-right-0 border-left-0 rounded-0 mx-auto d-block"
            style={{ color: "blue", width: "50%" }}
            size={"sm"}
            autoComplete="off"
          />
        </Form.Group>
      </Form>
      <Columns queries={queries}>{countries}</Columns>
    </div>
  );
}

export default Home;
