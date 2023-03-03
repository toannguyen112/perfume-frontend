import React from "react";
import Image from "next/image";
export default function Brand() {
  return (
    <section className="common-container brand">
      <div className="common-title">
        <div>
          <p>Thương hiệu</p>
        </div>
      </div>
      <div className="brand__content">
        <div className="content__top">
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="top__item">
            <img src="/images/brand.png" alt="" />
          </div>
        </div>
        <div className="content_bottom">
          <div className="bottom_item">
            <img src="/images/brand-banner1.png" alt="" />
          </div>
          <div className="bottom_item">
            <img src="/images/brand-banner2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
