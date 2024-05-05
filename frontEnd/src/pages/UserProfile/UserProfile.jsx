import { useEffect } from "react";
import classes from "./userProfile.module.css";
const url = "https://staja-marketplace.onrender.com";
import axios from "../../api/axios";

const UserProfile = () => {
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`${url}/userprofile`);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);
  return (
    <div className="user-profile">
      <div className={classes.userHeader}>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">This is some text within a card body.</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
