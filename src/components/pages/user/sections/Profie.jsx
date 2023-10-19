import { useEffect, useState } from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import Get from "../../../lib/http/get";
const Profie = () => {
  const [user, setUser] = useState({});

  async function getUser() {
    const { data } = await Get("user");
    setUser(data.user);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
    console.log(user.id);
  }, [user]);

  return (
    <>
      <Header as="h2" icon>
        <Icon name="user" />
        User Profile
        <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
        <Segment>
          <h4>{user.first_name}</h4>
          <h4>{user.last_name}</h4>
        </Segment>
      </Header>
    </>
  );
};

export default Profie;
