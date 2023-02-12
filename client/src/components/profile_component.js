import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";


const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && (
        // <div>
        //   <h1>In profile page.</h1>
        //   <header className="jumbotron">
        //     <h3>
        //       <strong>{currentUser.user.name}</strong>
        //     </h3>
        //   </header>
        //   <p>
        //     <strong>Token: {currentUser.token}</strong>
        //   </p>
        //   <p>
        //     <strong>ID: {currentUser.user._id}</strong>
        //   </p>
        //   <p>
        //     <strong>email: {currentUser.user.email}</strong>
        //   </p>
        //   <p>
        //     <strong>community: {currentUser.user.community}</strong>
        //   </p>
        // </div>
        <div class="card">
        <div class="card-header">
        <h3>
        <strong>{currentUser.user.name}</strong>
        </h3>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p><strong>Email:</strong> {currentUser.user.email}</p>
            <p><strong>Community:</strong> {currentUser.user.community}</p>
            </blockquote>
        </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
