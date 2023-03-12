import React, { useState } from "react";

function Detail() {
  const listImage = [
    {
      title: "iamge 1",
      images: [
        "https://imagevietnam.vn/images/_thumbs/restoring_brightening_creme_1.jpg",
        "https://imagevietnam.vn/images/thumbs/z3455793910663_39238ee4cecacc1e00eb38a007215cbf.jpg",
        "https://imagevietnam.vn/images/files/Thi/md/md-power-c-serum-jpeg.jpg",
      ],
    },
    {
      title: "iamge 2",
      images: [
        "https://imagevietnam.vn/images/_thumbs/vital_c_hyd…_masque_mat_na_ngu_dem_cung_cap_do_amarcho_da.jpg",
        "https://imagevietnam.vn/images/_thumbs/bo_san_pham_kit_vitalc.jpg",
        "https://imagevietnam.vn/images/_thumbs/RESTORING_OVERNIGHT_RETINOL_MASQUE.png",
      ],
    },
    {
      title: "iamge 3",
      images: [
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-image-nam.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/imag…en-eau-de-toilette-spray-2-5-oz-75-ml-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-1881-amber-nam-291x291.jpg",
      ],
    },
    {
      title: "iamge 3",
      images: [
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-image-nam.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/imag…en-eau-de-toilette-spray-2-5-oz-75-ml-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-1881-amber-nam-291x291.jpg",
      ],
    },
  ];
  const [type, setType] = useState("description");

  const handleSetType = (type) => {
    setType(type);
  };

  return (
    <section className="common-container detail">
      <div className="breadcrumb">
        <ul>
          <li>
            <a>Trang chủ</a>
          </li>
          <li>
            <a>Bộ sưu tập</a>
          </li>
          <li>
            <a className="active">Tomfort</a>
          </li>
        </ul>
      </div>
      <div className="detail__content">
        <div className="content__left">
          <div className="left__col-image">
            <div className="item">
              <img src="/images/product-1.png" />
            </div>
            <div className="item">
              <img src="/images/product-1.png" />
            </div>
            <div className="item">
              <img src="/images/product-1.png" />
            </div>
            <div className="item">
              <img src="/images/product-1.png" />
            </div>
          </div>
          <div className="left__carousel">
            <div className="item">
              <img src="/images/product-1.png" />
            </div>
          </div>
          <div className="left__info">
            <a className="links-title">Versace Eros</a>
            <h2>Nước hoa nữ Tom Ford Lost Cherry Eau de Parfum</h2>
            <p>
              12.000.000 đ <span>1.200.000 đ</span>
            </p>
            <span>Dung tích nước hoa</span>
            <div className="options">
              <div className="options__item">
                <img src="/images/product-1.png" />
                <p>Body wash 10ml</p>
              </div>
              <div className="options__item">
                <img src="/images/product-1.png" />
                <p>Body wash 10ml</p>
              </div>
              <div className="options__item">
                <img src="/images/product-1.png" />
                <p>Body wash 10ml</p>
              </div>
              <div className="options__item">
                <img src="/images/product-1.png" />
                <p>Body wash 10ml</p>
              </div>
            </div>
            <div className="count">
              <p>Số lượng: </p>
              <div className="count__quantity">
                <div className="input-group quantity__input">
                  <div className="input-group-append input__minus">
                    <button className="btn--search" type="submit">
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={5}
                  />
                  <div className="input-group-append input__plus">
                    <button className="btn--search" type="submit">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap-button">
              <a className="btn--red">Thêm giỏ hàng</a>
              <a className="btn--red-ouline">Mua ngay</a>
            </div>
          </div>
        </div>
        <div className="content__right">
          <div className="showroom-top">
            <div className="bg-title">
              <span>
                <i className="far fa-star" />
              </span>
              <p>Hệ thống showroom</p>
            </div>
            <div className="list-showroom">
              <div className="item">
                <h3>theworldperfume Hồ Chí Minh</h3>
                <p>72/1a Bạch Đằng, p24</p>
              </div>
              <div className="item">
                <h3>theworldperfume Hồ Chí Minh</h3>
                <p>72/1a Bạch Đằng, p24</p>
              </div>
            </div>
            <a>Xem tất cả hệ thống</a>
          </div>
          <div className="showroom-bottom">
            <div className="bg-title">
              <span>
                <i className="far fa-star" />
              </span>
              <p>Hệ thống showroom</p>
            </div>
            <ul>
              <li>Đổi trả miễn phí</li>
              <li>Đại lý ủy quyền chính hãng của các thương hiệu lớn</li>
              <li>Được xem sản phẩm miễn phí trước khi mua</li>
              <li>Chính hãng 100%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="detail__tab">
        <ul className="tab__header">
          <li
            onClick={() => handleSetType("same")}
            className={type === "same" ? "active" : ""}
          >
            <a>Sản phẩm tương tự</a>
          </li>
          <li
            onClick={() => handleSetType("description")}
            className={type === "description" ? "active" : ""}
          >
            <a>Mô tả sản phẩm</a>
          </li>
          <li
            onClick={() => handleSetType("use")}
            className={type === "use" ? "active" : ""}
          >
            <a>Hướng dẫn sử dụng</a>
          </li>
          <li
            onClick={() => handleSetType("review")}
            className={type === "review" ? "active" : ""}
          >
            <a>Đánh giá sản phẩm</a>
          </li>
        </ul>
        <div className="tab__content">
          <div className="conten__same-product">1</div>
          <div className="conten__description">2</div>
          <div className="conten__use">3</div>
          <div className="conten__review">4</div>
        </div>
      </div>

      {/* SEEN RECENT */}
      <div className="common-title">
        <div>
          <p>Xem gần đây</p>
        </div>
        <a>Xem thêm</a>
      </div>
      <div className="mini-size__content common-product">
        {listImage.map((item, index) => {
          return (
            <a className="item" key={index}>
              <div className="item__event">
                <p>HOT</p>
              </div>
              <img className="item__image" src="/images/product-1.png" />
              <div className="item__info">
                <h3>{item.title}</h3>
                <p>999.000đ</p>
                {/* list iamge hover */}
                <ul>
                  {item.images.map((child, childIndex) => (
                    <li key={childIndex}>
                      <a>
                        <img src={child} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Detail;
