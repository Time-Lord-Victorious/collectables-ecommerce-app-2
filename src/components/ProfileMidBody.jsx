import { Button, Col, Image, Nav, Row, Spinner } from "react-bootstrap";

export default function ProfileMidBody() {
    const url = "https://sm.ign.com/t/ign_ap/feature/w/what-the-h/what-the-hell-is-godzillas-problem-the-greatest-injustice-of_uraj.1280.jpg";
    const pic = "https://toysnowman.com/cdn/shop/files/2_38792655-3842-47c2-83bb-96101a20fb30_700x700.png?v=1705796176";

    // useEffect(() => {
    //   const token = localStorage.getItem("authToken");
    //   if (token) {
    //     const decodedToken = jwtDecode(token);
    //     const userId = decodedToken.id;
    //     console.log(userId);
    //     dispatch(fetchPostsByUser(userId));
    //   }
    // }, [dispatch]);

    return (
        <Col sm={6} className="bg-light" style={{ border: "1px solid lightgrey" }}>
            <Image src={url} fluid />
            <br />

            <Image
                src={pic}
                roundedCircle
                style={{
                    position: "absolute",
                    top: "140px",
                    marginLeft: 15,
                    width: 150,
                    border: "4px solid #F8F9FA",
                }}
            />
            <Row className="justify-content-end">
                <Col xs="auto">
                    <Button className="rounded-pill mt-2" variant="outline-secondary">
                        Edit ur profile bro
                    </Button>
                </Col>
            </Row>
            <p
                className="mt-5"
                style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}
            >
                JS Lee
            </p>
            <p style={{ marginBottom: "2px" }}>@js_lee</p>
            <p>Figure collector</p>
        </Col>
    );
}