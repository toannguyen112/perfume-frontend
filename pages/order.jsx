import React from "react";

export default function order() {
  return (
    <section className="common-container order">
      <div className="order__top">
        <a>
          <i className="fa-solid fa-chevron-left"></i>
          Giở hàng
        </a>
        <h2>Đặt hàng</h2>
      </div>
      <div className="order__content">
        <div className="content__left">
          <h2>Thông tin khách hàng</h2>
          <form className="content__form">
            <div className="content__info">
              <div className="form-group custom-form">
                <label htmlFor="email">Họ Tên</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập họ tên"
                />
                <span>*</span>
              </div>
              <div className="form-group custom-form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập Email"
                />
                <span>*</span>
              </div>
              <div className="form-group custom-form">
                <label htmlFor="email">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập số điện thoại"
                />
                <span>*</span>
              </div>

              <div
                className="form-group custom-form"
                style={{ height: "64px" }}
              >
                <label>Tỉnh / Thành phố</label>
                <div className="inline__wrap-select custom-select">
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div
                className="form-group custom-form"
                style={{ height: "64px" }}
              >
                <label>Quận / Huyện</label>
                <div className="inline__wrap-select custom-select">
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div
                className="form-group custom-form"
                style={{ height: "64px" }}
              >
                <label>Phường / Xã</label>
                <div className="inline__wrap-select custom-select">
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div className="form-group custom-form">
                <label htmlFor="note">Ghi chú</label>
                <textarea
                  type="note"
                  className="form-control"
                  style={{ height: "60px" }}
                  placeholder="Nhập ghi chú"
                  rows="4"
                />
                <span>*</span>
              </div>
              <p>
                <span>* </span> Bắt buộc
              </p>
            </div>
            <div className="form__button">
              <a className="button__log">CẬP NHẬT THAY ĐỔI</a>
            </div>
          </form>
        </div>
        <div className="content__midle">
          <h2>Hình thức thanh toán</h2>
          <form action>
            <div className="form-check custom-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  defaultChecked
                />
                Thanh toán tiền mặt khi nhận hàng (COD)
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-check custom-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                Thanh toán bằng thẻ ATM nội địa
                <span className="checkmark" />
              </label>
            </div>
          </form>
        </div>
        <div className="content__right">
          <h2>Đơn hàng</h2>
          <div className="right__title">
            <p>San pham</p>
            <p>Sửa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
