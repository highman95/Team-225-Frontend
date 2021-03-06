import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutSection from "./aboutSection";
import RoomSection from "./roomSection";
import FacilitiesSection from "./facilitiesSection";

const HomePage = () => {
    return (
        <>
            <section className="row landing-section">
                <Container className="mt-3">
                    <Row>
                        <Col sm={6} xs={6} className="landing-header">
                            <div>
                                <h1 className="mt-4">Sparkle, Aluxury Hotel</h1>
                                <p className="mt-4">This is the space for Home page</p>
                                <Button size="md" className="mt-4">BOOK NOW</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <AboutSection />
            <RoomSection />
            <FacilitiesSection />
        </>
    )
}

export default HomePage;
