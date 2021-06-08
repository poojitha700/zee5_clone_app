import React, { Fragment, useState } from "react";
import SideBar from "../../SideBarMenu/SideBar";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Rightmenu = (props) => {
  let [toggle, setToggle] = useState(false);
  let { displayName, photoURL } = props.userData;
  let Logout = () => {
    firebase
      .auth()
      .signOut()
      .then((_) => {
        toast.info("succesfully logout");
        props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };
  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );
  };
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="/">
            <img src={photoURL} alt={displayName} />
          </Link>
        </li>
        <li>
          <a href="/" onClick={Logout}>
            Logout
          </a>
        </li>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <div className="rightMenu">
        <ul>
          <li>
            <a href="/">A</a>
          </li>

          <li>
            <a href="/">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </li>
          {props.userData ? <AuthenticatedUser /> : <AnonymousUser />}

          <li>
            <a href="/" className="buyPlan">
              <i class="fas fa-crown"></i>
              Buy plan
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setToggle(!toggle)}>
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <section id="sideBarWrapper">
          <article>
            <SideBar toggle={toggle} />
          </article>
        </section>
      </div>
    </Fragment>
  );
};

export default withRouter(Rightmenu);
