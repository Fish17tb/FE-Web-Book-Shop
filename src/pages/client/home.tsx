/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FilterTwoTone, ReloadOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Row, FloatButton, Divider, Rate } from "antd";
// import type { FormProps } from 'antd';
import "../../styles/home.scss";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import CountdownTimer from "@/components/shared/CountDownTimer/countDown";
import { IoMdArrowRoundUp } from "react-icons/io";

import MultiCarousel from "react-multi-carousel";
import ReactPlayer from "react-player";
import "react-multi-carousel/lib/styles.css";
import "../../library_css/react.css";

// import img1 from "../../assets/images/img1.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FieldType = {
  fullName: string;
  password: string;
  email: string;
  phone: string;
};

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "200px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const HomePage = () => {
  const banners = [
    { id: 1, src: "../../../public/images/Banner/banner1.jpg" },
    { id: 2, src: "../../../public/images/Banner/banner2.jpg" },
    { id: 3, src: "../../../public/images/Banner/banner3.jpg" },
    { id: 4, src: "../../../public/images/Banner/banner4.png" },
  ];

  const promotions = [
    {
      title: "Combo 2 cuốn sách về chiến thắng Điệp Biên Phủ ",
      price: "451,000₫",
      img: "../../../public/images/Book/Combo/combo1.jpg",
    },
    {
      title: "Combo 2 cuốn sách về chiến thắng Điệp Biên Phủ",
      price: "451,000₫",
      img: "../../../public/images/Book/Combo/combo1.jpg",
    },
    {
      title: "Combo 2 cuốn sách về chiến thắng Điệp Biên Phủ",
      price: "451,000₫",
      img: "../../../public/images/Book/Combo/combo1.jpg",
    },
    {
      title: "Combo 2 cuốn sách về chiến thắng Điệp Biên Phủ",
      price: "451,000₫",
      img: "../../../public/images/Book/Combo/combo1.jpg",
    },
    {
      title: "Combo 2 cuốn sách về chiến thắng Điệp Biên Phủ",
      price: "451,000₫",
      img: "../../../public/images/Book/Combo/combo1.jpg",
    },
    {
      title: "Combo 2 cuốn sách về chiến thắng Điệp Biên Phủ",
      price: "451,000₫",
      img: "../../../public/images/Book/Combo/combo1.jpg",
    },
  ];

  const kols = [
    {
      img: "../../../public/images/Kols/kols1.png",
      comment:
        "Tôi thật sự ấn tượng với cuốn sách này. Nội dung vừa sâu sắc vừa gần gũi, giúp tôi có thêm nhiều góc nhìn mới. Đây không chỉ là một cuốn sách để đọc, mà còn là một trải nghiệm đáng để chia sẻ cùng mọi người.",
      name: "Jack Edwards",
    },
    {
      img: "../../../public/images/Kols/kols1.png",
      comment:
        "Tôi thật sự ấn tượng với cuốn sách này. Nội dung vừa sâu sắc vừa gần gũi, giúp tôi có thêm nhiều góc nhìn mới. Đây không chỉ là một cuốn sách để đọc, mà còn là một trải nghiệm đáng để chia sẻ cùng mọi người.",
      name: "Jack Edwards",
    },
    {
      img: "../../../public/images/Kols/kols1.png",
      comment:
        "Tôi thật sự ấn tượng với cuốn sách này. Nội dung vừa sâu sắc vừa gần gũi, giúp tôi có thêm nhiều góc nhìn mới. Đây không chỉ là một cuốn sách để đọc, mà còn là một trải nghiệm đáng để chia sẻ cùng mọi người.",
      name: "Jack Edwards",
    },
    {
      img: "../../../public/images/Kols/kols1.png",
      comment:
        "Tôi thật sự ấn tượng với cuốn sách này. Nội dung vừa sâu sắc vừa gần gũi, giúp tôi có thêm nhiều góc nhìn mới. Đây không chỉ là một cuốn sách để đọc, mà còn là một trải nghiệm đáng để chia sẻ cùng mọi người.",
      name: "Jack Edwards",
    },
    {
      img: "../../../public/images/Kols/kols1.png",
      comment:
        "Tôi thật sự ấn tượng với cuốn sách này. Nội dung vừa sâu sắc vừa gần gũi, giúp tôi có thêm nhiều góc nhìn mới. Đây không chỉ là một cuốn sách để đọc, mà còn là một trải nghiệm đáng để chia sẻ cùng mọi người.",
      name: "Jack Edwards",
    },
  ];

  const video_review = [
    {
      title: "Góc Nhìn Truyền Cảm Hứng Về Sách Từ Jack Edwards",
      videoUrl: "../../../public/video/video1.mp4",
    },
    {
      title: "Góc Nhìn Truyền Cảm Hứng Về Sách Từ Jack Edwards",
      videoUrl: "../../../public/video/video1.mp4",
    },
    {
      title: "Góc Nhìn Truyền Cảm Hứng Về Sách Từ Jack Edwards",
      videoUrl: "../../../public/video/video1.mp4",
    },
    {
      title: "Góc Nhìn Truyền Cảm Hứng Về Sách Từ Jack Edwards",
      videoUrl: "../../../public/video/video1.mp4",
    },
    {
      title: "Góc Nhìn Truyền Cảm Hứng Về Sách Từ Jack Edwards",
      videoUrl: "../../../public/video/video1.mp4",
    },
  ];

  const articles = [
    {
      heading: "Khám Phá Thế Giới Sách – Tri Thức Trong Tầm Tay Bạn",
      img: "../../../public/images/Article/article1.jpg",
      content: ` Trong thời đại công nghệ số, khi thông tin tràn ngập trên
                      Internet, sách vẫn giữ nguyên giá trị đặc biệt – đó là sự
                      chắt lọc, tinh hoa và chiều sâu. Một cuốn sách không chỉ
                      mang đến kiến thức, mà còn là người bạn đồng hành, truyền
                      cảm hứng, nuôi dưỡng tâm hồn và mở ra những chân trời mới.`,
    },
    {
      heading: "Khám Phá Thế Giới Sách – Tri Thức Trong Tầm Tay Bạn",
      img: "../../../public/images/Article/article1.jpg",
      content: ` Trong thời đại công nghệ số, khi thông tin tràn ngập trên
                      Internet, sách vẫn giữ nguyên giá trị đặc biệt – đó là sự
                      chắt lọc, tinh hoa và chiều sâu. Một cuốn sách không chỉ
                      mang đến kiến thức, mà còn là người bạn đồng hành, truyền
                      cảm hứng, nuôi dưỡng tâm hồn và mở ra những chân trời mới.`,
    },
    {
      heading: "Khám Phá Thế Giới Sách – Tri Thức Trong Tầm Tay Bạn",
      img: "../../../public/images/Article/article1.jpg",
      content: ` Trong thời đại công nghệ số, khi thông tin tràn ngập trên
                      Internet, sách vẫn giữ nguyên giá trị đặc biệt – đó là sự
                      chắt lọc, tinh hoa và chiều sâu. Một cuốn sách không chỉ
                      mang đến kiến thức, mà còn là người bạn đồng hành, truyền
                      cảm hứng, nuôi dưỡng tâm hồn và mở ra những chân trời mới.`,
    },
    {
      heading: "Khám Phá Thế Giới Sách – Tri Thức Trong Tầm Tay Bạn",
      img: "../../../public/images/Article/article1.jpg",
      content: ` Trong thời đại công nghệ số, khi thông tin tràn ngập trên
                      Internet, sách vẫn giữ nguyên giá trị đặc biệt – đó là sự
                      chắt lọc, tinh hoa và chiều sâu. Một cuốn sách không chỉ
                      mang đến kiến thức, mà còn là người bạn đồng hành, truyền
                      cảm hứng, nuôi dưỡng tâm hồn và mở ra những chân trời mới.`,
    },
  ];

  const testimonials = [
    {
      avatar: "../../../public/images/Article/article1.jpg",
      comment: `Tôi đã sử dụng sản phẩm của garden book và cảm thấy rất hài lòng về chất lượng cũng như dịch vụ của garden book mang lại`,
      customer:"Thanh Hằng"
    },
    {
      avatar: "../../../public/images/Article/article1.jpg",
      comment: `Tôi đã sử dụng sản phẩm của garden book và cảm thấy rất hài lòng về chất lượng cũng như dịch vụ của garden book mang lại`,
      customer:"Thanh Hằng"
    },
    {
      avatar: "../../../public/images/Article/article1.jpg",
      comment: `Tôi đã sử dụng sản phẩm của garden book và cảm thấy rất hài lòng về chất lượng cũng như dịch vụ của garden book mang lại`,
      customer:"Thanh Hằng"
    },
    {
      avatar: "../../../public/images/Article/article1.jpg",
      comment: `Tôi đã sử dụng sản phẩm của garden book và cảm thấy rất hài lòng về chất lượng cũng như dịch vụ của garden book mang lại`,
      customer:"Thanh Hằng"
    },
    {
      avatar: "../../../public/images/Article/article1.jpg",
      comment: `Tôi đã sử dụng sản phẩm của garden book và cảm thấy rất hài lòng về chất lượng cũng như dịch vụ của garden book mang lại`,
      customer:"Thanh Hằng"
    },
  ];

  // responsive
  const responsive_promotion = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsive_kols = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsive_video = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsive_article = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsive_testimonials = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="home-container">
        {/* Banner Start */}
        <div className="home-banner-wrapper home-padding-common home-space-common">
          <Carousel
            autoplay
            autoplaySpeed={2000}
            adaptiveHeight
            dots={true}
            draggable
            arrows={true}
            infinite
          >
            {banners.map((item) => (
              <div className="home-banner" key={item.id}>
                <img
                  src={item.src}
                  alt={`banner-${item.id}`}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>

          <div className="home-cta">
            <ul className="home-list-cta">
              <li className="home-item-cta">
                <h4 className="home-title-cta">Mã Giảm Giá</h4>
                <img
                  className="home-img-cta"
                  src="../../../public/images/CTA/discount.png"
                  alt=""
                />
              </li>
              <li className="home-item-cta">
                <h4 className="home-title-cta">Tham Gia Hội Sách</h4>
                <img
                  className="home-img-cta"
                  src="../../../public/images/CTA/group-books.png"
                  alt=""
                />
              </li>
              <li className="home-item-cta">
                <h4 className="home-title-cta"> Nhận Ebook Miễn Phí</h4>
                <img
                  className="home-img-cta"
                  src="../../../public/images/CTA/ebook.png"
                  alt=""
                />
              </li>
              <li className="home-item-cta">
                <h4 className="home-title-cta"> Tích điểm đổi quà</h4>
                <img
                  className="home-img-cta"
                  src="../../../public/images/CTA/coin.png"
                  alt=""
                />
              </li>
              <li className="home-item-cta">
                <h4 className="home-title-cta">Nhận voucher độc quyền</h4>
                <img
                  className="home-img-cta"
                  src="../../../public/images/CTA/voucher.png"
                  alt=""
                />
              </li>
              <li className="home-item-cta">
                <h4 className="home-title-cta">
                  {" "}
                  Đặt sách hôm nay, nhận quà liền tay
                </h4>
                <img
                  className="home-img-cta"
                  src="../../../public/images/CTA/order.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        {/* Banner End */}

        {/* Introduce Start */}
        <div className="home-introduce home-padding-common home-space-common">
          <h2 className="hom-introduce-title">a little about us</h2>
          <h4 className="home-introduce-paragraph">
            “Chúng tôi không chỉ bán sách, chúng tôi mang đến trải nghiệm đọc
            trọn vẹn. Với bộ sưu tập sách phong phú, giao hàng nhanh, dịch vụ
            tận tâm – <span className="home-introduce-text">Book Garden </span>{" "}
            là người bạn đồng hành cùng tri thức của bạn.
            <br />
            Tại đây, bạn có thể dễ dàng tìm thấy những tác phẩm kinh điển, sách
            kỹ năng, truyện thiếu nhi hay những cuốn sách mới nhất từ các tác
            giả nổi tiếng. Chúng tôi cam kết mang lại mức giá hợp lý, nhiều ưu
            đãi hấp dẫn và một hành trình mua sắm tiện lợi, an toàn.
            <br />
            Hãy để mỗi trang sách bạn chọn tại{" "}
            <span className="home-introduce-text">Book Garden </span> trở thành
            nguồn cảm hứng, nuôi dưỡng tâm hồn và mở rộng tri thức mỗi ngày.”
          </h4>
        </div>
        {/* Introduce End */}

        {/* Categories Start */}
        <div className="home-categories home-padding-common home-space-common">
          <div className="home-categories-wrapper">
            <h2 className="home-categories-title">categories Book</h2>
            <div className="home-categories-group-btn">
              <Button className="home-categories-item-btn">All</Button>
              <Button className="home-categories-item-btn">Thiếu nhi</Button>
              <Button className="home-categories-item-btn">Giáo dục</Button>
              <Button className="home-categories-item-btn">Công nghệ</Button>
              <Button className="home-categories-item-btn">Nấu ăn</Button>
            </div>
          </div>

          <Row gutter={[16, 16]}>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-categories-container">
                <div className="home-categories-image">
                  <img
                    className="home-categories-item-image"
                    src="../../../public/images/Book/img1.jpg"
                    alt=""
                  />
                </div>
                <h4 className="home-categories-name">Tiểu thuyết</h4>
                <Button className="home-categories-item-buy">Mua ngay</Button>
              </div>
            </Col>
          </Row>
        </div>
        {/* Categories End */}

        {/* Best Sellrer Start */}
        <div className="hone-best-seller home-padding-common home-space-common">
          <Row gutter={16}>
            <Col span={6}>
              <div className="home-title-best-seller">Best seller</div>
              <Row className="home-list-best-seller">
                <Col span={24}>
                  <div className="home-item-best-seller">
                    <div className="home-image-best-seller">
                      <img
                        className="home-item-image-best-seller"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-best-seller">
                      <div className="home-name-best-seller">
                        Nghệ thuật giao tiếp để thành công
                      </div>
                      <h5 className="home-author-best-seller">Ngô Đình Diệm</h5>
                      <div className="home-price-best-seller">250.000đ</div>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="home-item-best-seller">
                    <div className="home-image-best-seller">
                      <img
                        className="home-item-image-best-seller"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-best-seller">
                      <div className="home-name-best-seller">
                        Nghệ thuật giao tiếp để thành công
                      </div>
                      <h5 className="home-author-best-seller">Ngô Đình Diệm</h5>
                      <div className="home-price-best-seller">250.000đ</div>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="home-item-best-seller">
                    <div className="home-image-best-seller">
                      <img
                        className="home-item-image-best-seller"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-best-seller">
                      <div className="home-name-best-seller">
                        Nghệ thuật giao tiếp để thành công
                      </div>
                      <h5 className="home-author-best-seller">Ngô Đình Diệm</h5>
                      <div className="home-price-best-seller">250.000đ</div>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="home-item-best-seller">
                    <div className="home-image-best-seller">
                      <img
                        className="home-item-image-best-seller"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-best-seller">
                      <div className="home-name-best-seller">
                        Nghệ thuật giao tiếp để thành công
                      </div>
                      <h5 className="home-author-best-seller">Ngô Đình Diệm</h5>
                      <div className="home-price-best-seller">250.000đ</div>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="home-item-best-seller">
                    <div className="home-image-best-seller">
                      <img
                        className="home-item-image-best-seller"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-best-seller">
                      <div className="home-name-best-seller">
                        Nghệ thuật giao tiếp để thành công
                      </div>
                      <h5 className="home-author-best-seller">Ngô Đình Diệm</h5>
                      <div className="home-price-best-seller">250.000đ</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
              <div className="home-wrapper-new-book">
                <div className="home-new-book-title">New book</div>
                <div className="home-list-btn-new-book">
                  <Button className="home-item-btn-new-book">
                    Sản phẩm mới
                  </Button>
                  <Button className="home-item-btn-new-book">
                    Giá thấp đến cao
                  </Button>
                  <Button className="home-item-btn-new-book">
                    Giá cao đến thấp
                  </Button>
                </div>
              </div>
              <Row gutter={[20, 20]} className="home-list-new-book">
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-item-new-book">
                    <div className="home-image-new-book">
                      <img
                        className="home-item-image-new-book"
                        src="../../../public/images/Book/img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="home-content-new-book">
                      <h4 className="home-name-new-book">
                        Nghệ thuật giao tiếp để thành công
                      </h4>
                      <div className="home-price-new-book">250.000đ</div>
                      <div className="home-desc-new-book">
                        Cuốn sách “14 nguyên tắc bất biến khiến sự nghiệp thăng
                        tiến cuộc đời thăng hoa” là một cuốn sách giúp bạn có
                        được nghị lực phi thường giống như...
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Best Seller End */}

        {/* Promotion Start */}
        <div className="home-promotion">
          <div className="home-wraper-count-time">
            <div className="home-title-promotion">
              PERFECT COMBO - HOT DEAL EVERYDAY
            </div>
            <div className="home-container-count-time">
              <CountdownTimer targetDate="2025-08-31T24:00:00" />
              <div className="home-desc-promotion">
                Một cuốn sách hay giống như người bạn tri kỷ – có thể chưa cần
                ngay nhưng chắc chắn sẽ có lúc đồng hành cùng bạn. Đừng bỏ lỡ cơ
                hội sở hữu những bộ sách tinh tuyển với ưu đãi hấp dẫn và quà
                tặng đặc biệt dành riêng cho bạn.
              </div>
            </div>
            <div className="home-container-carousel">
              <MultiCarousel
                responsive={responsive_promotion}
                infinite
                autoPlay
                autoPlaySpeed={4000}
                keyBoardControl
                showDots={false}
                arrows
                itemClass="carousel-item"
              >
                {promotions.map((promotion, idx) => (
                  <div className="home-wrapper-carousel" key={idx}>
                    <div className="home-card-carousel">
                      <div className="home-image-carousel">
                        <img
                          src={promotion.img}
                          alt={promotion.title}
                          className="home-item-image-carousel"
                        />
                      </div>
                      <h4 className="home-name-carousel">{promotion.title}</h4>
                      <p className="home-price-carousel">{promotion.price}</p>
                    </div>
                  </div>
                ))}
              </MultiCarousel>
            </div>
          </div>
        </div>
        {/* Promotion End */}

        {/* Social Proof Start */}
        <div className="home-social-proof home-padding-common home-space-common">
          <div className="home-title-social-proof">Reviews & Experiences</div>

          {/* Kols */}
          <div className="home-kols-container">
            <MultiCarousel
              responsive={responsive_kols}
              infinite
              autoPlaySpeed={4000}
              keyBoardControl
              showDots={false}
              arrows
              itemClass="kols-item"
            >
              {kols.map((kols, idx) => (
                <div className="home-wrapper-kols" key={idx}>
                  <div className="home-card-kols">
                    <div className="home-image-kols">
                      <img
                        src={kols.img}
                        alt=""
                        className="home-item-image-kols"
                      />
                    </div>
                    <div className="home-comment-kols">{kols.comment}</div>
                    <h4 className="home-name-kols">{kols.name}</h4>
                  </div>
                </div>
              ))}
            </MultiCarousel>
          </div>
          <Divider style={{ borderColor: "#cccccca9" }}></Divider>
          {/* Review Video */}
          <div className="home-video-container">
            <MultiCarousel
              responsive={responsive_video}
              infinite
              autoPlaySpeed={4000}
              keyBoardControl
              showDots={false}
              arrows
              itemClass="kols-item"
            >
              {video_review.map((video_review, idx) => (
                <div className="home-wrapper-video" key={idx}>
                  <div className="home-card-video">
                    <div className="home-image-video">
                      <ReactPlayer
                        src={video_review.videoUrl}
                        width="100%"
                        height="100%"
                        playing={false}
                        controls={true}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h4 className="home-name-video">{video_review.title}</h4>
                  </div>
                </div>
              ))}
            </MultiCarousel>
          </div>
        </div>
        {/* Social Proof End */}

        {/* Article Start */}
        <div className="home-article home-space-common home-padding-common">
          <div className="home-title-article">Article</div>
          <div className="home-article-container">
            <MultiCarousel
              responsive={responsive_article}
              infinite
              autoPlaySpeed={4000}
              keyBoardControl
              showDots={false}
              arrows
              itemClass="article-item"
            >
              {articles.map((article, idx) => (
                <div className="home-wrapper-article" key={idx}>
                  <div className="home-card-article">
                    <h4 className="home-heading-article">{article.heading}</h4>
                    <div className="home-image-article">
                      <img
                        src={article.img}
                        alt=""
                        className="home-item-iamge-article"
                      />
                    </div>
                    <div className="home-content-article">
                      {article.content.length > 240
                        ? article.content.substring(0, 240) + "..."
                        : article.content}
                    </div>
                  </div>
                </div>
              ))}
            </MultiCarousel>
          </div>
        </div>
        {/* Article End */}

        {/* Partners Start */}
        <div className="home-partners">
          <div className="home-partners-title">Business partners</div>
          <Row>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner2.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner3.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner4.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner5.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner6.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner7.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="home-partners-wrapper">
                <div className="home-partners-image">
                  <img
                    className="home-partners-item-img"
                    src="../../../public/images/Partners/partner9.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* Partners End */}

        {/* Development Team Start */}
        <div className="home-development-team home-space-common home-padding-common">
          <div className="home-development-team-title">Development Team</div>
          <Row gutter={[0, 16]}>
            <Col span={6}>
              <div className="home-development-team-warpper">
                <div className="home-development-team-card">
                  <div className="home-development-team-card-inner">
                    {/* Mặt trước */}
                    <div className="home-development-team-card-front">
                      <img
                        className="home-development-team-item-image"
                        src="../../../public/images/Teams/team1.jpg"
                        alt="Team member"
                      />
                    </div>
                    {/* Mặt sau */}
                    <div className="home-development-team-card-back">
                      <h3>Nguyên Vũ</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="home-development-team-warpper">
                <div className="home-development-team-card">
                  <div className="home-development-team-card-inner">
                    {/* Mặt trước */}
                    <div className="home-development-team-card-front">
                      <img
                        className="home-development-team-item-image"
                        src="../../../public/images/Teams/team2.png"
                        alt="Team member"
                      />
                    </div>
                    {/* Mặt sau */}
                    <div className="home-development-team-card-back">
                      <h3>Huy Hoàng</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="home-development-team-warpper">
                <div className="home-development-team-card">
                  <div className="home-development-team-card-inner">
                    {/* Mặt trước */}
                    <div className="home-development-team-card-front">
                      <img
                        className="home-development-team-item-image"
                        src="../../../public/images/Teams/team3.png"
                        alt="Team member"
                      />
                    </div>
                    {/* Mặt sau */}
                    <div className="home-development-team-card-back">
                      <h3>Ngọc Bảo</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="home-development-team-warpper">
                <div className="home-development-team-card">
                  <div className="home-development-team-card-inner">
                    {/* Mặt trước */}
                    <div className="home-development-team-card-front">
                      <img
                        className="home-development-team-item-image"
                        src="../../../public/images/Teams/team4.png"
                        alt="Team member"
                      />
                    </div>
                    {/* Mặt sau */}
                    <div className="home-development-team-card-back">
                      <h3>Nguyễn Quân</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* Development Team End */}

        {/* Testimonials Start */}
        <div className="home-testimonials">
          <h3 className="home-testimonials-title">Testimonials</h3>
          <div className="home-testimonials-container">
            <MultiCarousel
              responsive={responsive_testimonials}
              infinite
              autoPlaySpeed={4000}
              keyBoardControl
              showDots={false}
              arrows
              itemClass="testimonials-item"
            >
              {testimonials.map((testimonial, idx) => (
                <div className="home-testimonials-wrapper" key={idx}>
                  <div className="home-testimonials-card">
                    <div className="home-testimonials-image">
                      <img
                        src={testimonial.avatar}
                        alt=""
                        className="home-testimonials-item-image"
                      />
                    </div>
                    <div className="home-testimonials-content">
                      <div className="home-testimonials-comment">
                        {testimonial.comment}
                      </div>
                      <div className="home-testimonials-rating">
                        <h4 className="home-testimonials-name-customer">{testimonial.customer}</h4>
                        <Rate
                          style={{ fontSize: "13px", display: "flex", gap:2 }}
                          disabled
                          defaultValue={5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </MultiCarousel>
          </div>
        </div>
        {/* Testimonials End */}
      </div>
      <FloatButton.BackTop icon={<IoMdArrowRoundUp />} />
    </>
  );
};

export default HomePage;
