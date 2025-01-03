import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

import ProfileMidBody from "../components/ProfileMidBody";
import Navbar from "../components/navbar";

export default function ProfilePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) navigate("/login");
    const handleLogout = () => auth.signOut();
    return (
        <>
            <Navbar handleLogout={handleLogout} />
            <Container>
                <Row>
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    );
}