import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";

function Collection() {
  const [typeFilter, setTypeFilter] = useState<any>([]);
  const [valueRanger, setValueRanger] = useState<any>([1, 100]);
  const [isShowFilter, setIsShowFilter] = useState<any>(false);

  const handleShowFilter = () => {
    setIsShowFilter(!isShowFilter);
  };
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
  const handleSetType = (type: string): void => {
    // e.stopPropagation();
    let arrTmp = [...typeFilter];
    if (typeFilter.includes(type)) {
      arrTmp = arrTmp.filter((item) => item !== type);
      setTypeFilter(arrTmp);
    } else {
      arrTmp.push(type);
      setTypeFilter(arrTmp);
    }
  };

  const handleRange = (value: any, userInteraction: any) => {
    setValueRanger(value);
  };

  return (
    <section className="common-container collection">
      <div className="collection__left">
        <ul className="left__breadcrumn">
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
        <div className="left__filter">
          <h2>Nước hoa nữ</h2>
          <p>Bộ lọc</p>
          <ul className="filter-bar">
            {/* FILLTER BRAND */}
            <li>
              <div
                className={
                  typeFilter.includes("brand")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("brand")}
              >
                <a>Thương hiệu</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <label className="custom-checkbox">
                  Paris hilton
                  <input type="checkbox" />
                  <span></span>
                </label>
                <label className="custom-checkbox">
                  Paris hilton
                  <input type="checkbox" />
                  <span></span>
                </label>
                <label className="custom-checkbox">
                  Paris hilton
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
            </li>

            {/* FILTER SORT */}
            <li>
              <div
                className={
                  typeFilter.includes("sort")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("sort")}
              >
                <a>Sắp xếp giá rẻ</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <div
                  className="wrap-ranger"
                  onClick={(e) => e.stopPropagation()}
                >
                  <RangeSlider
                    min={0}
                    max={100}
                    step={5}
                    onInput={handleRange}
                  />
                </div>
              </div>
            </li>

            {/* FILTER SIZE */}
            <li>
              <div
                className={
                  typeFilter.includes("size")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("size")}
              >
                <a>Size</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <div className="content__check">
                  <label className="custom-checkbox">
                    10ml
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    20ml
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    50ml
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </li>

            {/* FILTER REVIEW */}
            <li>
              <div
                className={
                  typeFilter.includes("star")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("star")}
              >
                <a>Đánh giá</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <div className="content__check">
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="collection__right">
        <div className="right__top">
          <p>12 kết quả</p>
          <a className="filter" onClick={handleShowFilter}>
            <i class="fas fa-filter"></i>
            <span>Bộ lọc</span>
          </a>
          <div className="form-group custom-form">
            <div className="custom-select">
              <select className="form-control">
                <option>Sắp xếp theo</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="rigth__bottom common-product-3">
          {listImage.map((item: any, index: any) => {
            return (
              <a href className="item" key={index}>
                <div className="item__event">
                  <p>HOT</p>
                </div>
                <img className="item__image" src="/images/product-1.png" alt />
                <div className="item__info">
                  <h3>{item.title}</h3>
                  <p>999.000đ</p>
                  {/* list iamge hover */}
                  <ul>
                    {item.images.map((child: any, childIndex: any) => (
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
        <ul className="rigth__bottom-paginate common-paginate">
          <li>
            <a href>
              <i class="fas fa-chevron-left"></i>
            </a>
          </li>
          <li className="active">
            <a href>1</a>
          </li>
          <li>
            <a href>2</a>
          </li>
          <li>
            <a href>3</a>
          </li>
          <li>
            <a href>4</a>
          </li>
          <li>
            <a href>5</a>
          </li>
          <li>
            <a href>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={
          isShowFilter
            ? "collection__mobile-filter show-mobile-filter-layout"
            : "collection__mobile-filter"
        }
      >
        <div className="mobile-filter" onClick={handleShowFilter}></div>
        <div
          className="mobile-content"
          className={
            isShowFilter
              ? "mobile-content show-mobile-filter-content"
              : "mobile-content"
          }
        >
          <h2>Nước hoa nữ</h2>
          <p>Bộ lọc</p>
          <ul className="filter-bar">
            {/* FILLTER BRAND */}
            <li>
              <div
                className={
                  typeFilter.includes("brand")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("brand")}
              >
                <a>Thương hiệu</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <label className="custom-checkbox">
                  Paris hilton
                  <input type="checkbox" />
                  <span></span>
                </label>
                <label className="custom-checkbox">
                  Paris hilton
                  <input type="checkbox" />
                  <span></span>
                </label>
                <label className="custom-checkbox">
                  Paris hilton
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
            </li>

            {/* FILTER SORT */}
            <li>
              <div
                className={
                  typeFilter.includes("sort")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("sort")}
              >
                <a>Sắp xếp giá rẻ</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <div
                  className="wrap-ranger"
                  onClick={(e) => e.stopPropagation()}
                >
                  <RangeSlider
                    min={0}
                    max={100}
                    step={5}
                    onInput={handleRange}
                  />
                </div>
              </div>
            </li>

            {/* FILTER SIZE */}
            <li>
              <div
                className={
                  typeFilter.includes("size")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("size")}
              >
                <a>Size</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <div className="content__check">
                  <label className="custom-checkbox">
                    10ml
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    20ml
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    50ml
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </li>

            {/* FILTER REVIEW */}
            <li>
              <div
                className={
                  typeFilter.includes("star")
                    ? "wrap-links active"
                    : "wrap-links"
                }
                onClick={() => handleSetType("star")}
              >
                <a>Đánh giá</a>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="dropdown-content">
                <div className="content__check">
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <label className="custom-checkbox">
                    <div className="checkbox__star">
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Collection;
