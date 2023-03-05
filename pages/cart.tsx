import React from "react";

export default function Cart() {
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
      title: "iamge 4",
      images: [
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-club-de-nuit-intense-nam-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-disney-frozen-ii-elsa-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-disney-frozen-ii-elsa-291x291.jpg",
      ],
    },
    {
      title: "iamge 5",
      images: [
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-versace-eros-nam-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-balenciaga-paris-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-1881-amber-nam-291x291.jpg",
      ],
    },
    {
      title: "iamge 6",
      images: [
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-ed-hardy-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-ed-hardy-hearts-daggers-nam-291x291.jpg",
        "https://nuochoa.vn/wp-content/uploads/2022/10/nuoc-hoa-bentley-black-edition-nam-291x291.jpg",
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
  ];
  return (
    <section className="common-container cart">
      <div className="cart__top">
        <a>
          <i className="fa-solid fa-chevron-left"></i>
          Tiếp tục mua sắm
        </a>
        <h2>Giỏ hàng</h2>
      </div>
      <div className="cart__midle">
        <div className="cart__midle_left">
          <div className="left__content">
            <ul className="content__title">
              <li>Sản phẩm</li>
              <li>Giá</li>
              <li>Số lượng</li>
              <li></li>
            </ul>
            <div className="content__products">
              <div className="products__item">
                <div className="item__image">
                  <img src="https://imagevietnam.vn/images/thumbs/z3455793910663_39238ee4cecacc1e00eb38a007215cbf.jpg" />
                  <div>
                    <p>Thực Phẩm Chức Năng Viên Sủi Bổ Sung Vitamin</p>
                    <a>12.000.000 đ</a>
                  </div>
                </div>
                <div className="item__price">
                  <p>200.000đ</p>
                </div>
                <div className="item__quantity">
                  <div className="input-group quantity__input">
                    <div className="input-group-append input__minus">
                      <button className="btn--search" type="submit">
                        <span>-</span>
                      </button>
                    </div>
                    <input type="text" className="form-control" />
                    <div className="input-group-append input__plus">
                      <button className="btn--search" type="submit">
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <a className="item__remove">
                  <img src="/images/remove.png" />
                </a>
              </div>
              <div className="products__item">
                <div className="item__image">
                  <img src="https://imagevietnam.vn/images/thumbs/z3455793910663_39238ee4cecacc1e00eb38a007215cbf.jpg/assets/img/cart/p-2.pnghttps://imagevietnam.vn/images/thumbs/z3455793910663_39238ee4cecacc1e00eb38a007215cbf.jpg" />
                  <div>
                    <p>Thực Phẩm Chức Năng Viên Sủi Bổ Sung Vitamin</p>
                    <a>12.000.000 đ</a>
                  </div>
                </div>
                <div className="item__price">
                  <p>200.000đ</p>
                </div>
                <div className="item__quantity">
                  <div className="input-group quantity__input">
                    <div className="input-group-append input__minus">
                      <button className="btn--search" type="submit">
                        <span>-</span>
                      </button>
                    </div>
                    <input type="text" className="form-control" />
                    <div className="input-group-append input__plus">
                      <button className="btn--search" type="submit">
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <a className="item__remove">
                  <img src="/images/remove.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cart__midle_right">
          <div className="right__content">
            <div className="content__price">
              <p>Tạm tính:</p>
              <p>1.000.000đ</p>
            </div>
            <div className="content__total">
              <p>Thành tiền:</p>
              <div>
                <p>1.000.000đ</p>
                <span>(đã bao gôm VAT nếu có)</span>
              </div>
            </div>
          </div>
          <div className="right__button">
            <a className="btn--red">TIẾN HÀNH ĐẶT HÀNG</a>
          </div>
        </div>
      </div>
      <div className="cart__bottom">
        {/* MINISIZE */}
        <div className="common-title">
          <div>
            <p>Mini & Travel Size</p>
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
        {/* END MINISIZE */}

        {/* BESTSELLER */}
        <div className="common-title">
          <div>
            <p>Mini & Travel Size</p>
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
        {/* END BESTSELLER */}
      </div>
    </section>
  );
}
