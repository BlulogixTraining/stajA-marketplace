import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "../api/axios";
const url = "https://staja-marketplace.onrender.com";
const UserProfile = ({}) => {
  // fetch user data from the server
  // display user data
  // const { auth } = useContext(AuthContext);
  // const { token, userID } = auth;
  // console.log("Token:", token);
  // console.log("UserID:", userID);
  // console.log(userID);
  // const [userData, setUserData] = useState([]);
  // console.log("Auth Context:", auth);
  const userToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMwOWMzOTgwOGMwOWUzNDIzOWNhYTgiLCJpYXQiOjE3MTQ1ODk0OTksImV4cCI6MTcxNDU5MzA5OX0.82ww-JIlw8peIlcBIRHxEmzRHfLo4KnGzQdRpJg06wA";
  console.log("User Token22:", userToken);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${url}/dashoard`);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const UserProfile = {
    name: "John Doe",
    email: "john@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio vitae elit dignissim tempor.",
    avatar: "https://api.dicebear.com/8.x/adventurer/svg?seed=Harley",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
    },
    phone: "555-555-5555",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  };
  return (
    <div className="container mt-4">
      <h1>User Profile</h1>

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="d-flex align-items-center gap-3">
              <img
                src={UserProfile.avatar}
                className="card-img-top rounded-circle w-25 h-25 mx-left "
                alt="..."
              />
              <h3 className="card-title">{UserProfile.name}</h3>
            </div>

            <div className="card-body">
              <p className="card-text">{UserProfile.bio}</p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong className="mr-2">Email: </strong> {UserProfile.email}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {UserProfile.address.street},{" "}
                  {UserProfile.address.city}, {UserProfile.address.state}{" "}
                  {UserProfile.address.zip}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
