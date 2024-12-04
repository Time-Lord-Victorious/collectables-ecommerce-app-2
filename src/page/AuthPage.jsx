import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { Button, Col, Form, Image, Modal, Row, Container } from "react-bootstrap";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const loginImage = "https://images.bigbadtoystore.com/images/p/full/2024/06/b9f8c3cf-a098-49fd-ba11-503290847142.jpg";
    // values: null (no modal show), "login", "signup"
    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow("signup");
    const handleShowLogin = () => setModalShow("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    if (currentUser) navigate("/profile");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                username,
                password
            );
            console.log(res.user);
        } catch (error) {
            console.error(error);
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
        } catch (error) {
            console.error(error);
        }
    };
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => setModalShow(null);

    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Image src={loginImage} fluid />
                </Col>
                <Col sm={6} className="p-4">
                    <i
                        className="bi bi-twitter"
                        style={{ fontSize: 50, color: "dodgerblue" }}
                    ></i>

                    <p className="mt-5" style={{ fontSize: 60 }}>
                        Big discounts happening now mate!!!
                    </p>
                    <h2 className="my-5" style={{ fontSize: 30 }}>
                        Sign up today.
                    </h2>
                    <Col sm={5} className="d-grid gap-2">
                        <Button
                            className="rounded-pill"
                            variant="outline-dark"
                            onClick={handleGoogleLogin}
                        >
                            <i className="bi bi-google"></i> Sign up with Google
                        </Button>
                        <p style={{ textAlign: "center" }}>or</p>
                        <Button className="rounded-pill" onClick={handleShowSignUp}>
                            Create an acc~
                        </Button>
                        <p style={{ fontSize: "12px" }}> Agree to terms</p>
                        <p className="mt-5" style={{ fontWeight: "bold" }}>
                            Already have an acc?
                        </p>
                        <Button
                            className="rounded-pill"
                            variant="outline-primary"
                            onClick={handleShowLogin}
                        >
                            Sign in!
                        </Button>
                    </Col>
                    <Modal
                        show={modalShow !== null}
                        onHide={handleClose}
                        animation={false}
                        centered
                    >
                        <Modal.Body>
                            <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                                {modalShow === "signup"
                                    ? "Create your account"
                                    : "Log in to your account"}
                            </h2>

                            <Form
                                className="d-grid gap-2 px-5"
                                onSubmit={modalShow === "signup" ? handleSignUp : handleLogin}
                            >
                                <Form.Group className="mb-3" controlId="formBasicEmai">
                                    <Form.Control
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <p style={{ fontSize: 12 }}>
                                    By signing up, you agree to the Terms of Service and Privacy
                                    Policy, including Cookie Use. JS Collectables may use your contact
                                    information, including your email address and phone number for
                                    purposes outlined in our Privacy Policy, like keeping your
                                    account secure and personalising our services, including ads.
                                    Learn more. Others will be able to find you by email or phone
                                    number, when provided, unless you choose otherwise here.
                                </p>
                                <Button className="rounded-pill" type="submit">
                                    {modalShow === "signup" ? "Sign up" : "Log in"}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}