import { Col, Row } from "antd";
import "../../styles/footer.scss";
import { FaYoutube } from "react-icons/fa";

const SectionFooter = () => {
  return (
    <>
      <div className="footer-container">
        <Row gutter={[10, 10]}>
          <Col span={6}>
            <div className="footer-content-wraper">
              <div className="footer-content-include">
                <div className="footer-title">Customer Support</div>
                <div className="footer-text">Search</div>
                <div className="footer-text">About</div>
                <div className="footer-text">Return Policy</div>
                <div className="footer-text">Privacy Policy</div>
                <div className="footer-text">Terms of Service</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer-content-wraper">
              <div className="footer-content-include">
                <div className="footer-title">About Garden Book</div>
                <div className="footer-text">Search</div>
                <div className="footer-text">About</div>
                <div className="footer-text">Return Policy</div>
                <div className="footer-text">Privacy Policy</div>
                <div className="footer-text">Terms of Service</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer-content-wraper">
              <div className="footer-content-include">
                <div className="footer-title">Category</div>
                <div className="footer-text">Promotional products</div>
                <div className="footer-text">Featured Products</div>
                <div className="footer-text">All products</div>
                <div className="footer-text">Business - Enterprise</div>
                <div className="footer-text">Love - Happiness</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer-content-wraper">
              <div className="footer-content-include">
                <div className="footer-title">Social networking</div>
                <div className="footer-social-wrapper">
                  <div className="footer-social-item ">
                    <img
                      className="footer-social-item-iamge"
                      src="../../../public/images/Icon/icon-facebook.png"
                      alt="error-facebook"
                    />
                  </div>
                  <div className="footer-social-item">
                    <img
                      className="footer-social-item-iamge"
                      src="../../../public/images/Icon/icon-telegram.png"
                      alt="error-telegram"
                    />
                  </div>
                  <div className="footer-social-item ">
                    <img
                      className="footer-social-item-iamge"
                      src="../../../public/images/Icon/icon-google.png"
                      alt="error-google"
                    />
                  </div>
                  <div className="footer-social-item ">
                    <img
                      className="footer-social-item-iamge"
                      src="../../../public/images/Icon/icon-youtube.png"
                      alt="error-youtube"
                    />
                  </div>
                  <div className="footer-social-item ">
                    <img
                      className="footer-social-item-iamge"
                      src="../../../public/images/Icon/icon-twitter.png"
                      alt="error-twitter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row gutter={10}>
          <Col span={12}>
            <div className="footer-content-wraper">
              <div className="footer-content-include">
                <div className="footer-title">
                  Gadent Book JOINT STOCK COMPANY
                </div>
                <div className="footer-adderss">
                  Address: Mai Dịch - Cầu Giấy - Hà Nội
                </div>
                <div className="footer-phone">SĐT: 0354122419</div>
                <div className="footer-email">
                  Email: gardenbook203@gmail.com
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="footer-content-wraper">
              <div className="footer-content-include">
                <div className="footer-title">Sign up for news</div>
                <div className="footer-text-content">
                  Hãy nhập địa chỉ email của bạn vào ô dưới đây để có thể nhận
                  được tất cả các kiến thức, ebooks hay và các chương trình
                  khuyến mãi hấp dẫn.Garden Book xin đảm bảo sẽ không gửi mail
                  rác, mail spam tới bạn.
                </div>
              </div>
            </div>
            <div className="footer-input-containnner">
              <div className="footer-input-wrapper">
                <div className="footer-input-include">
                  <input
                    className="footer-input-item"
                    type="text"
                    placeholder="Enter your email here..."
                  />
                </div>
                <button className="footer-input-btn" type="submit">
                  Register
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SectionFooter;
