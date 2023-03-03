import React from "react";

function Footer() {
  return (
    <footer className="common-container">
      <div className="footer">
        <div className="item">
          <h2>perfume</h2>
          <div>
            <a>Giới thiệu</a>
            <a>Tuyển dụng</a>
            <a>Liên hệ</a>
          </div>
        </div>
        <div className="item">
          <h2>Hỗ trợ khách hàng</h2>
          <div>
            <a>Giới thiệu</a>
            <a>Tuyển dụng</a>
            <a>Liên hệ</a>
          </div>
        </div>
        <div className="item">
          <h2>Địa chỉ</h2>
          <div>
            <p>72/1a Bạch Đằng</p>
          </div>
        </div>
        <div className="item">
          <h2>Kết nối</h2>
          <div>
            <a>
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a>
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
