import UserProfile from "../features/authentication/UserProfile";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function User() {
  return (
    <>
      <Row>
        <Heading as="h2">Profile Settings</Heading>
      </Row>
      <UserProfile />
    </>
  );
}

export default User;
