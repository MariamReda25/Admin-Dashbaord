import AccountsForm from "../features/authentication/AccountsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Row>
        <Heading as="h2">Accounts Management</Heading>
      </Row>
      <AccountsForm />
    </>
  );
}

export default Account;
