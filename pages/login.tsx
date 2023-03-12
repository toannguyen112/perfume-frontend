import React from "react";

export default function Login() {
  return (
    <section className="common-container login">
      <div className="login__item banner"></div>
      <div className="login__item register__info">
        <h3>Khách hàng mới</h3>
        <p>
          Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn và nhiều
          chương trình mua sắm ưu đãi hơn dành riêng cho khách hàng thân thiết.
        </p>
        <a className="btn--red">Đăng kí</a>
      </div>
      <div className="login__item form">
        <h3>Thông tin đăng nhập</h3>
        <div>
          <div className="form-group custom-form">
            {/* <label htmlFor="email">Email / SĐT</label> */}
            <input
              type="email"
              className="form-control"
              placeholder="Nhập Email hoặc số điện thoại"
            />
          </div>
          <div className="form-group custom-form">
            {/* <label htmlFor="pwd">Mật khẩu</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu từ 6 đến 32 ký tự"
            />
          </div>
        </div>

        <form>
          <a className="btn--red-ouline">Đăng nhập</a>
        </form>
      </div>
      <div className="login__item banner"></div>
    </section>
  );
}
