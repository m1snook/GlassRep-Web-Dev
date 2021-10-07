import React from "react";
/**
 *
 * @param {Object} props
 * @param {Object} props.profile
 * @param {string} props.profile.name
 * @param {string} props.profile.email
 * @param {string} props.profile.address
 * @param {string | number} props.profile.phoneNumber
 * @param {string | number} props.profile.pincode
 * @returns
 */
const ProfilePage = ({ profile }) => {
  return (
    <div>
      <div className="p">WELCOME {profile.name ?? "AMIT KUMAR!"}</div>
      <a className="one" href="#feedback">
        CLICK HERE
      </a>
      <div className="p1">TO CHANGE YOUR PROFILE NAME</div>
      <div className="image">
        <img
          src="https://nozzle.s3-ap-southeast-1.amazonaws.com/shop_82752/81pn9K0aUGL_1508401149__UX385_.jpg"
          alt="hasta admi"
          style={{
            borderRadius: "100%",
            height: 250,
            width: 250,
            position: "absolute",
            top: "11vw",
            right: "70vw",
          }}
        />
        <button className="button" />
        <i
          className="material-icons"
          style={{
            color: "white",
            position: "absolute",
            left: "19.8vw",
            top: "25.8vw",
          }}
        >
          edit
        </i>
      </div>
      <div className="P2">EMAIL</div>
      <div className="P12">{profile.email ?? "name123@gmail.com"}</div>
      <div className="P3">ADDRESS</div>
      <div className="P8">
        {profile.address ??
          `Lorem ipsum dolor sit amet
        <br />
        consectetur adipisicing elit
        <br />
        Temporibus voluptatibas
        <br />
        necessitatibus id{" "}`}
      </div>
      <div className="P4">PHONE NUMBER</div>
      <div className="together">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round" />
        </label>
        <div className="NOTIFICATIONS">NOTIFICATION</div>
        <div className="NOTIFICATIONS1">
          NOTIFY UPDATES VIA EMAIL AND PHONE NUMBER
        </div>
        <br />
        <i
          className="material-icons"
          style={{
            color: "#d19c97",
            position: "absolute",
            top: "29vw",
            left: "18.3vw",
          }}
        >
          shopping_cart
        </i>
        <div className="P13">MY ORDERS</div>
        <div className="P14">WALLET</div>
        <br />
        <i
          className="material-icons"
          style={{
            color: "#d19c97",
            position: "absolute",
            top: "32vw",
            left: "18.3vw",
          }}
        >
          account_balance_wallet
        </i>
      </div>
      <div className="P6">{profile.phoneNumber ?? "91+4567987435"}</div>
      <div className="P5">PINCODE</div>
      <div className="P7">{profile.pincode ?? "380058"}</div>
    </div>
  );
};

export default ProfilePage;
