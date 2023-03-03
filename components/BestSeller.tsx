import React, { useEffect, useState } from "react";

export default function BestSeller() {
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
        "https://muoimuoi.vn/static/2138/2022/06/24/Dior%20Blush%20028.webp?w=500",
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
        "https://muoimuoi.vn/static/2138/2022/06/24/Dior%20Blush%20028.webp?w=500",
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
    <section className="common-container best-seller">
      <div className="common-title">
        <div>
          <p>Bestsellers</p>
        </div>
        <a>Xem thêm</a>
      </div>
      <div className="bestseller__content common-product">
        {listImage.map((item, index) => {
          return (
            <a className="item" key={index}>
              <div className="item__event">
                <p>HOT</p>
              </div>
              <img className="item__image" src={item.images[0]} />
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
