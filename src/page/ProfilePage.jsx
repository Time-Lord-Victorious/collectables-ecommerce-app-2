import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import Navbar from "../components/Navbar"

export default function ProfilePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) navigate("/login");
    const handleLogout = () => auth.signOut();
    return (
        <>
            <Navbar />
            <Container>
                <Row>
                    <ProfileSideBar handleLogout={handleLogout} />
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    );
}