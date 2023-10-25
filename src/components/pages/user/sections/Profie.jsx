import { useEffect, useState } from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Get from "../../../lib/http/get";
import Post from "../../../lib/http/post";

const Profie = () => {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(true);
  const [editImage, setEditImage] = useState(false);
  const [dropDown, setDropDown] = useState("close");
  const [notif, setNotif] = useState("turn on");
  const [paymentType, setPaymentType] = useState("");
  const navigate = useNavigate();

  async function getUser() {
    try {
      const data = await Get("user");
      setUser(data.user);
    } catch {
      navigate("/");
    }
  }

  function toggleDropDown() {
    if (dropDown == "close") {
      setDropDown("open");
    } else if (dropDown == "open") {
      setDropDown("close");
    }
  }

  function toggleNotif() {
    if (notif == "turn on") {
      setNotif("turn off");
    }
    if (notif == "turn off") {
      setNotif("turn on");
    }
  }

  async function imageUpload() {
    await Post("images", { image_type: "user_image", associated_id: user.id, image: "" });
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {}, [user]);

  return (
    <>
      <Segment className="container flex-col">
        <Header as="h2" icon className="user-card ">
          <Segment className="container">
            <div className="container flex-col usesr-icons px-1 py-0 ">
              <Segment className="flex white-container">
                <div className="profile-pic-container">
                  {user.image ? <img src="" /> : <Icon name="user" className="profie=pic" />}
                </div>
                <Icon name="man" className="bottom-0 right-0 absolute" />
              </Segment>
              {editImage == true ? (
                <></>
              ) : (
                <button className="change-img-btn" onClick={setEditImage(!editImage)}>
                  Change Profile Image
                </button>
              )}
            </div>
            <Segment className="container flex-col text-right user-detail px-1 mt-0 white-container">
              <div className="container">
                <h2>Name:</h2>
                <h2 className="mp-0 px-1">{user.first_name}</h2>
                <h2 className="m-0">{user.last_name}</h2>
              </div>
              <h2 className="mt-1 mb-1">Username: {user.username}</h2>
              <h2 className="mt-0 mb-1">Email: {user.email}</h2>
              <h2 className="mt-0">Birthday: {user.birthdate}</h2>
            </Segment>
          </Segment>
          <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
        </Header>

        <Segment>
          <h4>Set up Additional Details</h4>
        </Segment>

        <Segment>
          <button onClick={() => setEdit(!edit)}>Edit Settings</button>
          <Segment className="white-container">
            <div className="flex place-center">
              <h4 className="m-0">Prefered Payment Type: </h4>
              <h3 className="m-0 ml-1">{paymentType}</h3>
            </div>
            <div>
              <input
                type="button"
                onClick={toggleDropDown}
                value={dropDown == "close" ? "Set Up Payment" : "Close"}
                className="mx-1 input"
                disabled={edit}
              />
              <div className={dropDown}>
                <ul>
                  <input
                    type="button"
                    className="mx-1 payment-button"
                    value="Cash on Delivery"
                    name={1}
                    onClick={(e) => setPaymentType(e.target.value)}
                  />

                  <input
                    type="button"
                    className="mx-1 payment-button"
                    value="Credit Card"
                    name={2}
                    onClick={(e) => setPaymentType(e.target.value)}
                  />
                  <input
                    type="button"
                    className="mx-1 payment-button"
                    value="G-cash"
                    name={3}
                    onClick={(e) => setPaymentType(e.target.value)}
                  />
                </ul>
              </div>
            </div>
          </Segment>
          <Segment className="my-1 flex flex-col  white-container">
            <h3 className="content-center">Address</h3>
            <div>
              <input type="text" readOnly={edit} placeholder="street" className="mx-1 input" />
              <input type="text" readOnly={edit} placeholder="city" className="mx-1 input" />
              <input type="text" readOnly={edit} placeholder="province" className="mx-1 input" />
            </div>
            <div>
              <input type="button" readOnly={edit} value="Add Address" className="mx-1 input" />
            </div>
          </Segment>
        </Segment>

        <Segment>
          <h3>Notifications and Subscriptions</h3>

          <Segment className="flex white-container">
            <Container className="place-center">
              <p className="px-1">Newsletter</p>
              <button className="notif-button" onClick={toggleNotif}>
                {notif}
              </button>
            </Container>
            <Container className="place-center">
              <p className="px-1">Email notifications</p>
              <button className="notif-button" onClick={toggleNotif}>
                {notif}
              </button>
            </Container>
            <Container className="place-center ">
              <p className="px-1">Phone notifications</p>
              <button className="notif-button" onClick={toggleNotif}>
                {notif}
              </button>
            </Container>
          </Segment>
        </Segment>
      </Segment>
    </>
  );
};

export default Profie;
