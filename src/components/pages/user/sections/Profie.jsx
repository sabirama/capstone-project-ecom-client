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
      <Header as="h2" icon className="user-card">
        <Segment className="container">
          <div className="container usesr-icons px-1 py-0">
            <div>
              <Icon name="user" className="height-100" />
            </div>
            <div>
              <Icon name="man" />
            </div>
          </div>
          <Segment className="container flex-col text-right user-detail px-1 mt-0">
            <div className="container">
              <h4 className="m-0">Name: {user.first_name}</h4>
              <h4 className="mp-0 px-1">{user.last_name}</h4>
            </div>
            <h4 className="mt-1 mb-1">Username: {user.username}</h4>
            <h4 className="mt-0 mb-1">Email: {user.email}</h4>
            <h4 className="mt-0">Birthday: {user.birthdate}</h4>
          </Segment>
        </Segment>
        <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
      </Header>
    </>
  );
};

export default Profie;
