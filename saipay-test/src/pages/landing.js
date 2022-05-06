import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Modal } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import "../style/landing.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Start from "../assets/start.jpg";

export default function Landing() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="landing">
      <Modal className="modalll" show={show} onHide={() => setShow(false)}>
        <Modal.Title className="mx-4 py-4">Register</Modal.Title>
        {/* {message && message} */}
        <Form className="px-3">
          <Form.Group className="modalInput" controlId="inputregister">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              name="email"
              // value={email}
              //   onChange={handleChange}
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              name="password"
              // value={password}
              //   onChange={handleChange}
            />
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Full Name"
              name="fullname"
              // value={fullname}
              //   onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="buttSignUp fw-bold"
            style={{ height: "40px", width: "465px", marginBottom: "1em" }}
            variant="contained"
            type="submit"
          >
            <p style={{ paddingTop: "1em" }}> Register </p>
          </Button>
        </Form>
      </Modal>

      <Modal className="modalll" show={login} onHide={() => setLogin(false)}>
        <Modal.Title className="mx-4 py-4">Login</Modal.Title>
        {/* {message && message} */}
        <Form className="px-3">
          <Form.Group className="modalInput" controlId="inputInSignUp">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              name="email"
              //   onChange={handleChangeLogin}
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              name="password"
              //   onChange={handleChangeLogin}
            />
          </Form.Group>
          <Button
            className="buttSignUp fw-bold"
            style={{ height: "40px", width: "465px", marginBottom: "1em" }}
            variant="contained"
            type="submit"
            // onClick={() => navigate("/home")}
          >
            <p> Login </p>
          </Button>
        </Form>
      </Modal>

      <div className="navigate">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand style={{ marginLeft: "5em" }} href="#">
              <h3>Front End Games</h3>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100%" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex me-5">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Games</Nav.Link>
                <Nav.Link href="#action2">Discover</Nav.Link>
                <Nav.Link href="#action2">Global Rank</Nav.Link>
                <Button
                  onClick={() => setLogin(true)}
                  style={{ borderRadius: "50px" }}
                  variant="light"
                >
                  Sign In
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="preview">
        <div className="captions">
          <h5>Hello Gamers</h5>
          <h2 style={{ marginBottom: "2em" }}>Topup Gaming</h2>
          <p style={{ marginBottom: "2em" }}>
            Kami menyediakan juaan cara untuk membantu players menjadi pemenang
            sejati
          </p>
          <Button
            onClick={() => setShow(true)}
            style={{ marginRight: "2em" }}
            variant="contained"
          >
            Get Started
          </Button>
          <a style={{ color: "black" }} href="">
            learn More
          </a>
        </div>
        <div className="games">
          <Grid className="right" container component="main">
            <Box sx={{ width: 400, minHeight: 300 }}>
              <Masonry columns={2} spacing={3}>
                {itemData.map((item, index) => (
                  <div key={index}>
                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderRadius: 10,
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </Masonry>
            </Box>
          </Grid>
        </div>
      </div>
      <div className="options">
        <h3>Enjoy With Game</h3>
        <div className="optionCard">
          <div className="card1">
            <Card sx={{ maxWidth: 200, minHeight: 250 }}>
              <img src={Start} alt="" />
              <CardContent style={{ textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  1. Start
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pilih salah satu game yang ingin kamu top up
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="card2">
            <Card sx={{ maxWidth: 200, minHeight: 250 }}>
              <img src={Start} alt="" />
              <CardContent style={{ textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  2. Play
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Top up sesuai dengan nominal yang sudah tersedia
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="card3">
            <Card sx={{ maxWidth: 200, minHeight: 250 }}>
              <img src={Start} alt="" />
              <CardContent style={{ textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div">
                  3. Winner
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Siap digunakan untuk improve permainan kamu
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5em" }} className="category">
        <h3>Games Category</h3>
        <div className="genre ">
          {categories.map((item, index) => {
            return (
              <div key={index} className="listBookkk">
                <img
                  style={{ width: "10em", height: "15em" }}
                  src={item.image}
                  alt=""
                />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://media.suara.com/pictures/653x366/2022/02/09/39136-genshin-impact-25.jpg",
    title: "Fern",
  },
  {
    img: "https://wallpapercave.com/wp/wp6874651.jpg",
    title: "Tower",
  },
  {
    img: "https://wallpapercave.com/wp/wp4205163.jpg",
    title: "Mushrooms",
  },
  {
    img: "https://cdn.popculture.id/wp-content/uploads/2021/12/moba1.png",
    title: "Snacks",
  },
];

const categories = [
  {
    image:
      "https://www.xtrafondos.com/wallpapers/vertical/pokemon-unite-8705.jpg",
    title: "Actions",
  },
  {
    image: "https://wallpapercave.com/wp/wp6120246.jpg",
    title: "Adventure",
  },
  {
    image: "https://wallpapercave.com/wp/wp3946762.jpg",
    title: "Arcade",
  },
  {
    image:
      "https://i.pinimg.com/originals/99/09/19/9909198258a732017d9a38b462ce8772.jpg",
    title: "Strategies",
  },
  {
    image:
      "https://i02.appmifile.com/images/2019/01/11/0b899425-da00-42e2-a58a-55112b4939f0.jpg",
    title: "Racing",
  },
];
