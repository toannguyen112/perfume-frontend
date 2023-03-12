import React, { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <header>
      <div className="nav">
        <div className="nav__top">
          <p>Miễn phí vẫn chuyển đơn hàng trên 300k</p>
        </div>
        <div className="nav__midle common-container">
          <a className="nav__midle__brand">perfume</a>
          <div className="input-group midle__input">
            <div className="input-group-append">
              <button className="btn--search" type="submit">
                <i className="fa-regular fa-magnifying-glass" />
              </button>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="tìm kiếm"
            />
          </div>
          <a className="btn--write midle__btn-cart">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.87449 3.27714V4.38745H14.9891V6.58536L13.808 10.4942H4.53951L3.20863 0.5H0.0833359V1.61031H2.28154L3.61242 11.6045H14.5888L16.0538 6.75614V3.27714H4.87449Z"
                fill="black"
              />
              <path
                d="M5.43957 12.7254C4.87502 12.7261 4.33377 12.9602 3.93457 13.3766C3.53537 13.7929 3.31082 14.3573 3.31017 14.946C3.31017 15.535 3.53452 16.0998 3.93386 16.5163C4.3332 16.9327 4.87482 17.1667 5.43957 17.1667C6.00433 17.1667 6.54595 16.9327 6.94529 16.5163C7.34463 16.0998 7.56898 15.535 7.56898 14.946C7.56834 14.3573 7.34379 13.7928 6.94459 13.3765C6.54539 12.9602 6.00413 12.7261 5.43957 12.7254ZM5.43957 16.0563C5.229 16.0563 5.02315 15.9912 4.84806 15.8692C4.67297 15.7472 4.5365 15.5738 4.45592 15.3709C4.37533 15.168 4.35425 14.9448 4.39533 14.7294C4.43641 14.514 4.53782 14.3162 4.68672 14.1609C4.83562 14.0056 5.02533 13.8999 5.23186 13.8571C5.43839 13.8142 5.65247 13.8362 5.84702 13.9202C6.04157 14.0043 6.20785 14.1466 6.32484 14.3292C6.44183 14.5118 6.50427 14.7264 6.50427 14.946C6.50394 15.2404 6.39166 15.5226 6.19206 15.7308C5.99246 15.9389 5.72185 16.056 5.43957 16.0563Z"
                fill="black"
              />
              <path
                d="M12.8925 12.7254C12.3279 12.7261 11.7867 12.9602 11.3875 13.3766C10.9883 13.7929 10.7637 14.3573 10.7631 14.946C10.7631 15.535 10.9874 16.0998 11.3868 16.5163C11.7861 16.9327 12.3277 17.1667 12.8925 17.1667C13.4572 17.1667 13.9989 16.9327 14.3982 16.5163C14.7975 16.0998 15.0219 15.535 15.0219 14.946C15.0212 14.3573 14.7967 13.7928 14.3975 13.3765C13.9983 12.9602 13.457 12.7261 12.8925 12.7254ZM12.8925 16.0563C12.6819 16.0563 12.4761 15.9912 12.301 15.8692C12.1259 15.7472 11.9894 15.5738 11.9088 15.3709C11.8282 15.168 11.8072 14.9448 11.8482 14.7294C11.8893 14.514 11.9907 14.3162 12.1396 14.1609C12.2885 14.0056 12.4782 13.8999 12.6848 13.8571C12.8913 13.8142 13.1054 13.8362 13.2999 13.9202C13.4945 14.0043 13.6608 14.1466 13.7777 14.3292C13.8947 14.5118 13.9572 14.7264 13.9572 14.946C13.9568 15.2404 13.8446 15.5226 13.645 15.7308C13.4454 15.9389 13.1748 16.056 12.8925 16.0563Z"
                fill="black"
              />
            </svg>

            <p>Giỏ Hàng</p>
            <span>69</span>
            <div className="list-cart">
              <h3>Sản phẩm mới thêm</h3>
              <div className="wrap-item">
                <a className="item">
                  <div className="item__image">
                    <img src="/images/product-1.png" />
                  </div>
                  <div className="item__content">
                    Son môi Rouge Dior Refillable Lipstick
                  </div>
                  <p className="item__price">12.000.000 d</p>
                </a>
                <a className="item">
                  <div className="item__image">
                    <img src="/images/product-1.png" />
                  </div>
                  <div className="item__content">
                    Son môi Rouge Dior Refillable Lipstick
                  </div>
                  <p className="item__price">12.000.000 d</p>
                </a>
                <a className="item">
                  <div className="item__image">
                    <img src="/images/product-1.png" />
                  </div>
                  <div className="item__content">
                    Son môi Rouge Dior Refillable Lipstick
                  </div>
                  <p className="item__price">12.000.000 d</p>
                </a>
              </div>

              <div className="list-cart__footer">
                <p>1 san pham</p>
                <a className="btn--red">Thêm giỏ hàng</a>
              </div>
            </div>
          </a>
          <a className="btn--write midle__btn">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9375 8.51137C19.8568 8.1542 19.6339 7.82418 19.3796 7.6856C19.2989 7.64059 18.7989 7.58773 18.2631 7.56487C17.3659 7.52487 17.2673 7.50701 16.9816 7.34129C16.5309 7.0777 16.4101 6.79196 16.4059 6.02405C16.4016 4.55038 15.7894 3.18029 14.58 1.94806C13.7185 1.06872 12.7542 0.474391 11.6555 0.140082C11.3919 0.0593626 10.8026 0.0329322 8.82962 0.0107878C5.73084 -0.0249289 5.04365 0.0372182 3.99 0.457247C2.04773 1.22516 0.654777 2.85955 0.146171 4.94827C0.0525932 5.34115 0.0297345 5.97048 0.00759015 9.58715C-0.0188402 14.1189 0.0118762 14.7839 0.293324 15.6811C0.9898 17.8956 2.96779 19.5343 4.95436 19.8914C5.61512 20.0122 13.7628 20.0386 14.5979 19.9271C16.0487 19.7307 17.1873 19.1457 18.2545 18.0563C19.0267 17.2662 19.5089 16.4133 19.8261 15.284C20.0447 14.4982 20.0268 8.90854 19.9375 8.51137ZM5.55654 5.67189C5.90514 5.31901 6.003 5.30543 8.18172 5.30543C10.1419 5.30543 10.2083 5.30972 10.4947 5.45759C10.9098 5.6676 11.0926 5.96191 11.0926 6.43551C11.0926 6.85983 10.9226 7.15842 10.5433 7.39986C10.3383 7.52916 10.2176 7.53844 8.29744 7.54702C7.1145 7.55559 6.16801 7.52916 6.02943 7.49344C5.28795 7.28343 5.0115 6.22121 5.55583 5.67189H5.55654ZM14.12 14.5918L13.4549 14.6989L9.9947 14.7389C6.95449 14.7747 6.09729 14.7211 5.93657 14.6496C5.6194 14.5111 5.3201 14.1275 5.27152 13.7839C5.22223 13.4581 5.38724 13.0117 5.63726 12.7838C5.95442 12.4981 6.09229 12.4895 9.98113 12.4845C13.9814 12.4802 13.9593 12.4802 14.3386 12.8331C14.8786 13.3374 14.7629 14.226 14.12 14.5918Z"
                fill="black"
              />
            </svg>

            <p>Blog</p>
          </a>
          <a className="btn--write midle__btn">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8319 14.7488C16.165 16.9169 16.9988 18.7494 17.585 19.6681C17.8319 20 17.5 20 17.3344 20C15.9569 19.7494 14.7463 18.9325 14.0013 17.7506C13.8356 17.6656 13.7506 17.585 13.5844 17.6656C12.415 18.0013 11.25 18.2481 10 18.1675C4.49812 18.1675 0 14.1669 0 9.16687C0 4.16687 4.49812 0 10 0C15.5019 0 20 4.08187 20 9.16687C20 11.25 19.1669 13.1669 17.8319 14.7488ZM10 11.6663L12.6656 13.4988C12.9062 13.6419 13.2063 13.4438 13.1675 13.1669L12.1681 9.99937L14.7487 8.00125C14.8694 7.81875 14.7881 7.57125 14.5831 7.49937H11.335L10.2506 4.33188C10.1175 4.1825 9.8825 4.1825 9.74875 4.33188L8.66438 7.49937H5.33125C5.08125 7.59 5.03188 7.92625 5.25063 8.08187L7.75063 10.0844L6.9175 13.1669C6.91062 13.3875 7.11937 13.5544 7.33437 13.4988L10 11.6663Z"
                fill="black"
              />
            </svg>

            <p>Câu hỏi thường gặp</p>
          </a>
        </div>
        <ul className="nav__bottom common-container">
          <li>
            <a className="nav__links"> Deal thơm</a>
            <div className="dropdown">
              <div className="dropdown__content common-container">
                <div className="content_left">
                  <h2>Thương hiệu</h2>
                  <div className="info">
                    <div className="info__left">
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                    </div>
                    <div className="info__right">
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <img src="/images/header-1.png" />
                  <div className="right__bottom">
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="nav__links">Nước hoa nam</a>
            <div className="dropdown">
              <div className="dropdown__content common-container"></div>
            </div>
          </li>
          <li>
            <a className="nav__links">Nước hoa nữ</a>
            <div className="dropdown">
              <div className="dropdown__content common-container">
                <div className="content_left">
                  <h2>Thương hiệu</h2>
                  <div className="info">
                    <div className="info__left">
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                    </div>
                    <div className="info__right">
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <img src="/images/header-1.png" />
                  <div className="right__bottom">
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            {/* <img src="assets/img/icon-hear.png" alt /> */}
            <a className="nav__links">Nước hoa mini</a>
            <div className="dropdown">
              <div className="dropdown__content common-container"></div>
            </div>
          </li>
          <li>
            {/* <img src="assets/img/icon-home.png" alt /> */}
            <a className="nav__links">Gift</a>
            <div className="dropdown">
              <div className="dropdown__content common-container"></div>
            </div>
          </li>
          <li>
            <a className="nav__links">Thương hiệu</a>
            <div className="dropdown">
              <div className="dropdown__content common-container">
                <div className="content_left">
                  <h2>Thương hiệu</h2>
                  <div className="info">
                    <div className="info__left">
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                    </div>
                    <div className="info__right">
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                      <a className="left__link">gucci</a>
                    </div>
                  </div>
                </div>
                <div className="content_right">
                  <img src="/images/header-1.png" />
                  <div className="right__bottom">
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                    <div className="wrap-image">
                      <img src="/images/header-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            {/* <div>
              <img src="assets/img/icon-question.png" alt />
            </div> */}
            <a className="nav__links">Quà tặng</a>
            <div className="dropdown">
              <div className="dropdown__content"></div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="nav-scroll"
        style={scrolled ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="common-container nav-scroll__content">
          <a className="nav__scroll__brand">perfume</a>
          <div className="input-group scroll__input">
            <input
              type="text"
              className="form-control"
              placeholder="tìm kiếm"
            />
          </div>
          <a className="btn--write">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.87449 3.27714V4.38745H14.9891V6.58536L13.808 10.4942H4.53951L3.20863 0.5H0.0833359V1.61031H2.28154L3.61242 11.6045H14.5888L16.0538 6.75614V3.27714H4.87449Z"
                fill="black"
              />
              <path
                d="M5.43957 12.7254C4.87502 12.7261 4.33377 12.9602 3.93457 13.3766C3.53537 13.7929 3.31082 14.3573 3.31017 14.946C3.31017 15.535 3.53452 16.0998 3.93386 16.5163C4.3332 16.9327 4.87482 17.1667 5.43957 17.1667C6.00433 17.1667 6.54595 16.9327 6.94529 16.5163C7.34463 16.0998 7.56898 15.535 7.56898 14.946C7.56834 14.3573 7.34379 13.7928 6.94459 13.3765C6.54539 12.9602 6.00413 12.7261 5.43957 12.7254ZM5.43957 16.0563C5.229 16.0563 5.02315 15.9912 4.84806 15.8692C4.67297 15.7472 4.5365 15.5738 4.45592 15.3709C4.37533 15.168 4.35425 14.9448 4.39533 14.7294C4.43641 14.514 4.53782 14.3162 4.68672 14.1609C4.83562 14.0056 5.02533 13.8999 5.23186 13.8571C5.43839 13.8142 5.65247 13.8362 5.84702 13.9202C6.04157 14.0043 6.20785 14.1466 6.32484 14.3292C6.44183 14.5118 6.50427 14.7264 6.50427 14.946C6.50394 15.2404 6.39166 15.5226 6.19206 15.7308C5.99246 15.9389 5.72185 16.056 5.43957 16.0563Z"
                fill="black"
              />
              <path
                d="M12.8925 12.7254C12.3279 12.7261 11.7867 12.9602 11.3875 13.3766C10.9883 13.7929 10.7637 14.3573 10.7631 14.946C10.7631 15.535 10.9874 16.0998 11.3868 16.5163C11.7861 16.9327 12.3277 17.1667 12.8925 17.1667C13.4572 17.1667 13.9989 16.9327 14.3982 16.5163C14.7975 16.0998 15.0219 15.535 15.0219 14.946C15.0212 14.3573 14.7967 13.7928 14.3975 13.3765C13.9983 12.9602 13.457 12.7261 12.8925 12.7254ZM12.8925 16.0563C12.6819 16.0563 12.4761 15.9912 12.301 15.8692C12.1259 15.7472 11.9894 15.5738 11.9088 15.3709C11.8282 15.168 11.8072 14.9448 11.8482 14.7294C11.8893 14.514 11.9907 14.3162 12.1396 14.1609C12.2885 14.0056 12.4782 13.8999 12.6848 13.8571C12.8913 13.8142 13.1054 13.8362 13.2999 13.9202C13.4945 14.0043 13.6608 14.1466 13.7777 14.3292C13.8947 14.5118 13.9572 14.7264 13.9572 14.946C13.9568 15.2404 13.8446 15.5226 13.645 15.7308C13.4454 15.9389 13.1748 16.056 12.8925 16.0563Z"
                fill="black"
              />
            </svg>

            <p>Giỏ Hàng</p>
            <span>69</span>
          </a>
          <a className="btn--write midle__btn">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9375 8.51137C19.8568 8.1542 19.6339 7.82418 19.3796 7.6856C19.2989 7.64059 18.7989 7.58773 18.2631 7.56487C17.3659 7.52487 17.2673 7.50701 16.9816 7.34129C16.5309 7.0777 16.4101 6.79196 16.4059 6.02405C16.4016 4.55038 15.7894 3.18029 14.58 1.94806C13.7185 1.06872 12.7542 0.474391 11.6555 0.140082C11.3919 0.0593626 10.8026 0.0329322 8.82962 0.0107878C5.73084 -0.0249289 5.04365 0.0372182 3.99 0.457247C2.04773 1.22516 0.654777 2.85955 0.146171 4.94827C0.0525932 5.34115 0.0297345 5.97048 0.00759015 9.58715C-0.0188402 14.1189 0.0118762 14.7839 0.293324 15.6811C0.9898 17.8956 2.96779 19.5343 4.95436 19.8914C5.61512 20.0122 13.7628 20.0386 14.5979 19.9271C16.0487 19.7307 17.1873 19.1457 18.2545 18.0563C19.0267 17.2662 19.5089 16.4133 19.8261 15.284C20.0447 14.4982 20.0268 8.90854 19.9375 8.51137ZM5.55654 5.67189C5.90514 5.31901 6.003 5.30543 8.18172 5.30543C10.1419 5.30543 10.2083 5.30972 10.4947 5.45759C10.9098 5.6676 11.0926 5.96191 11.0926 6.43551C11.0926 6.85983 10.9226 7.15842 10.5433 7.39986C10.3383 7.52916 10.2176 7.53844 8.29744 7.54702C7.1145 7.55559 6.16801 7.52916 6.02943 7.49344C5.28795 7.28343 5.0115 6.22121 5.55583 5.67189H5.55654ZM14.12 14.5918L13.4549 14.6989L9.9947 14.7389C6.95449 14.7747 6.09729 14.7211 5.93657 14.6496C5.6194 14.5111 5.3201 14.1275 5.27152 13.7839C5.22223 13.4581 5.38724 13.0117 5.63726 12.7838C5.95442 12.4981 6.09229 12.4895 9.98113 12.4845C13.9814 12.4802 13.9593 12.4802 14.3386 12.8331C14.8786 13.3374 14.7629 14.226 14.12 14.5918Z"
                fill="black"
              />
            </svg>

            <p>Blog</p>
          </a>
          <a className="btn--write midle__btn">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8319 14.7488C16.165 16.9169 16.9988 18.7494 17.585 19.6681C17.8319 20 17.5 20 17.3344 20C15.9569 19.7494 14.7463 18.9325 14.0013 17.7506C13.8356 17.6656 13.7506 17.585 13.5844 17.6656C12.415 18.0013 11.25 18.2481 10 18.1675C4.49812 18.1675 0 14.1669 0 9.16687C0 4.16687 4.49812 0 10 0C15.5019 0 20 4.08187 20 9.16687C20 11.25 19.1669 13.1669 17.8319 14.7488ZM10 11.6663L12.6656 13.4988C12.9062 13.6419 13.2063 13.4438 13.1675 13.1669L12.1681 9.99937L14.7487 8.00125C14.8694 7.81875 14.7881 7.57125 14.5831 7.49937H11.335L10.2506 4.33188C10.1175 4.1825 9.8825 4.1825 9.74875 4.33188L8.66438 7.49937H5.33125C5.08125 7.59 5.03188 7.92625 5.25063 8.08187L7.75063 10.0844L6.9175 13.1669C6.91062 13.3875 7.11937 13.5544 7.33437 13.4988L10 11.6663Z"
                fill="black"
              />
            </svg>

            <p>Câu hỏi thường gặp</p>
          </a>
        </div>
      </div>
      <div className="common-container mobile-header">
        <div className="nav-mobile">
          <div className="nav-mobile__bars" onClick={handleShowMenu}>
            <i className="fas fa-bars" />
          </div>
          <a className="nav__mobile__brand">perfume</a>
          <div className="nav-mobile__cart">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.87449 3.27714V4.38745H14.9891V6.58536L13.808 10.4942H4.53951L3.20863 0.5H0.0833359V1.61031H2.28154L3.61242 11.6045H14.5888L16.0538 6.75614V3.27714H4.87449Z"
                fill="black"
              />
              <path
                d="M5.43957 12.7254C4.87502 12.7261 4.33377 12.9602 3.93457 13.3766C3.53537 13.7929 3.31082 14.3573 3.31017 14.946C3.31017 15.535 3.53452 16.0998 3.93386 16.5163C4.3332 16.9327 4.87482 17.1667 5.43957 17.1667C6.00433 17.1667 6.54595 16.9327 6.94529 16.5163C7.34463 16.0998 7.56898 15.535 7.56898 14.946C7.56834 14.3573 7.34379 13.7928 6.94459 13.3765C6.54539 12.9602 6.00413 12.7261 5.43957 12.7254ZM5.43957 16.0563C5.229 16.0563 5.02315 15.9912 4.84806 15.8692C4.67297 15.7472 4.5365 15.5738 4.45592 15.3709C4.37533 15.168 4.35425 14.9448 4.39533 14.7294C4.43641 14.514 4.53782 14.3162 4.68672 14.1609C4.83562 14.0056 5.02533 13.8999 5.23186 13.8571C5.43839 13.8142 5.65247 13.8362 5.84702 13.9202C6.04157 14.0043 6.20785 14.1466 6.32484 14.3292C6.44183 14.5118 6.50427 14.7264 6.50427 14.946C6.50394 15.2404 6.39166 15.5226 6.19206 15.7308C5.99246 15.9389 5.72185 16.056 5.43957 16.0563Z"
                fill="black"
              />
              <path
                d="M12.8925 12.7254C12.3279 12.7261 11.7867 12.9602 11.3875 13.3766C10.9883 13.7929 10.7637 14.3573 10.7631 14.946C10.7631 15.535 10.9874 16.0998 11.3868 16.5163C11.7861 16.9327 12.3277 17.1667 12.8925 17.1667C13.4572 17.1667 13.9989 16.9327 14.3982 16.5163C14.7975 16.0998 15.0219 15.535 15.0219 14.946C15.0212 14.3573 14.7967 13.7928 14.3975 13.3765C13.9983 12.9602 13.457 12.7261 12.8925 12.7254ZM12.8925 16.0563C12.6819 16.0563 12.4761 15.9912 12.301 15.8692C12.1259 15.7472 11.9894 15.5738 11.9088 15.3709C11.8282 15.168 11.8072 14.9448 11.8482 14.7294C11.8893 14.514 11.9907 14.3162 12.1396 14.1609C12.2885 14.0056 12.4782 13.8999 12.6848 13.8571C12.8913 13.8142 13.1054 13.8362 13.2999 13.9202C13.4945 14.0043 13.6608 14.1466 13.7777 14.3292C13.8947 14.5118 13.9572 14.7264 13.9572 14.946C13.9568 15.2404 13.8446 15.5226 13.645 15.7308C13.4454 15.9389 13.1748 16.056 12.8925 16.0563Z"
                fill="black"
              />
            </svg>
            <span>69</span>

            <div className="list-cart">
              <h3>Sản phẩm mới thêm</h3>
              <div className="wrap-item">
                <a className="item">
                  <div className="item__image">
                    <img src="/images/product-1.png" />
                  </div>
                  <div className="item__content">
                    Son môi Rouge Dior Refillable Lipstick
                  </div>
                  <p className="item__price">12.000.000 d</p>
                </a>
                <a className="item">
                  <div className="item__image">
                    <img src="/images/product-1.png" />
                  </div>
                  <div className="item__content">
                    Son môi Rouge Dior Refillable Lipstick
                  </div>
                  <p className="item__price">12.000.000 d</p>
                </a>
                <a className="item">
                  <div className="item__image">
                    <img src="/images/product-1.png" />
                  </div>
                  <div className="item__content">
                    Son môi Rouge Dior Refillable Lipstick
                  </div>
                  <p className="item__price">12.000.000 d</p>
                </a>
              </div>

              <div className="list-cart__footer">
                <p>1 san pham</p>
                <a className="btn--red">Thêm giỏ hàng</a>
              </div>
            </div>
          </div>
          <div
            className={
              isShowMenu ? "nav-mobile__menu open-layout" : "nav-mobile__menu"
            }
          >
            <div className="mobile-filter"></div>
            <div
              className={
                isShowMenu ? "mobile__content open" : "mobile__content"
              }
            >
              <div className="nav-mobile__menu__head">
                <p>Danh mục</p>
                <div className="btn-close" onClick={handleShowMenu}>
                  <i className="fas fa-window-close" />
                </div>
              </div>
              <ul>
                <li>
                  <a>
                    Deal thơm <i className="fas fa-chevron-up"></i>
                  </a>
                  <div className="dropdown">
                    <div className="dropdown__links">
                      <a>item 1</a>
                      <a>item 1</a>
                      <a>item 1</a>
                      <a>item 1</a>
                    </div>
                    <div className="dropdown__image">
                      <img src="/images/header-2.png" />
                    </div>
                  </div>
                </li>
                <li>
                  <a>Nước hoa nam</a>
                </li>
                <li>
                  <a>Nước hoa nữ</a>
                </li>
                <li>
                  <a>Nước hoa mini</a>
                </li>
                <li>
                  <a>Gift</a>
                </li>
                <li>
                  <a>Thương hiệu</a>
                </li>
                <li>
                  <a>Quà tặng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
