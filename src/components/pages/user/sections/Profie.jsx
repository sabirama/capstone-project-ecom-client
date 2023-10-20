import { useEffect, useState } from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import Get from "../../../lib/http/get";
import { useNavigate } from "react-router-dom";
const Profie = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  async function getUser() {
    try {
      const { data } = await Get("user");
      setUser(data.user);
    } catch {
      console.log("Error getting user");
      navigate("/");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {}, [user]);

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
