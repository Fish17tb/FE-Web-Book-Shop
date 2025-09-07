import { Button } from "antd";
import "../../styles/header.scss";
import "../../library_css/antd.css";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const SectionHeader = () => {
  return (
    <>
      <div className="grid">
        <div className="header-container">
          <div className="header-nav">
            <ul className="header-nav-list">
              <li>
                <img
                  className="header-logo"
                  src="../../../public/images/Logo/logo-sach.png"
                  alt=""
                />
              </li>
              <li className="header-name-web">Book Garden</li>
              <li>
                <span className="header-wrapper-search">
                  <input
                    className="header-search"
                    type="text"
                    placeholder="what are you looking for?"
                  />
                  <Button color="default" variant="text">
                    <FiSearch />
                  </Button>
                </span>
              </li>
            </ul>
            <ul className="header-nav-list">
              <li className="header-nav-item">Home</li>
              <li className="header-nav-item">Category</li>
              <li className="header-nav-item">Offer/Promotion</li>
              <li className="header-nav-item">Blog</li>
              <li className="header-nav-item">Introduce</li>
              <li className="header-nav-item">Contact</li>
            </ul>
            <ul className="header-nav-list">
              <li className="header-nav-item no-hover">
                <FaShoppingCart className="header-item-cart" />
              </li>
              <li className="header-nav-item auth-group no-hover">
                <span className="auth-link">Sign in</span>
                <span className="divider">/</span>
                <span className="auth-link">Sign up</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
