import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

const Profile = (props) => {
    return (
        <div>
            <Header
                color="transparent"
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
            />
            <Content/>
        </div>
    )
};

export default Profile;