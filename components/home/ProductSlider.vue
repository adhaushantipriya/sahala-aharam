<template>
  <section class="mini-section pt-0">
    <div class="container">
      <div class="sub-title-wrap sub-title-with-nav">
        <h2 class="sub-title" v-if="title">{{ title }}</h2>
        <a href="#" class="title-btn"
          >See All
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.92367 0.164778L9.61163 0.496184C9.40484 0.715841 9.40484 1.072 9.61163 1.2917L13.3153 5.20314H0.529554C0.237108 5.20314 0 5.455 0 5.76564V6.23439C0 6.54503 0.237108 6.79689 0.529554 6.79689H13.3153L9.61163 10.7083C9.40484 10.928 9.40484 11.2841 9.61163 11.5039L9.92367 11.8353C10.1305 12.0549 10.4658 12.0549 10.6725 11.8353L15.813 6.39775C16.0198 6.1781 16.0198 5.82194 15.813 5.60224L10.6725 0.164778C10.4658 -0.0549258 10.1305 -0.0549258 9.92367 0.164778Z"
              fill="white"
            /></svg
        ></a>
      </div>
      <div class="product-carousel owl-carousel owl-theme title-nav">
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/1.jpg" class="d-block" />
              </a>
              <div class="offer-label">20% Off</div>
              <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div>
            </div>
            <div class="text">
              <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
              <div class="price">
                <span>$7.25</span>
                <del>$8.50</del>
              </div>
              <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div>
              <div class="more-link">
                <a href="#"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.63867 9.3999H17.8053"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.72266 1.31665L9.72266 17.4833"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/2.jpg" class="d-block" />
              </a>
              <div class="offer-label">20% Off</div>
              <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div>
            </div>
            <div class="text">
              <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
              <div class="price">
                <span>$7.25</span>
                <del>$8.50</del>
              </div>
              <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div>
              <div class="more-link">
                <a href="#"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.63867 9.3999H17.8053"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.72266 1.31665L9.72266 17.4833"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/3.jpg" class="d-block" />
              </a>
              <div class="offer-label">20% Off</div>
              <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div>
            </div>
            <div class="text">
              <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
              <div class="price">
                <span>$7.25</span>
                <del>$8.50</del>
              </div>
              <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div>
              <div class="more-link">
                <a href="#"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.63867 9.3999H17.8053"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.72266 1.31665L9.72266 17.4833"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/4.jpg" class="d-block" />
              </a>
              <div class="offer-label">20% Off</div>
              <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div>
            </div>
            <div class="text">
              <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
              <div class="price">
                <span>$7.25</span>
                <del>$8.50</del>
              </div>
              <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div>
              <div class="more-link">
                <a href="#"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.63867 9.3999H17.8053"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.72266 1.31665L9.72266 17.4833"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/5.jpg" class="d-block" />
              </a>
              <div class="offer-label">20% Off</div>
              <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div>
            </div>
            <div class="text">
              <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
              <div class="price">
                <span>$7.25</span>
                <del>$8.50</del>
              </div>
              <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div>
              <div class="more-link">
                <a href="#"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.63867 9.3999H17.8053"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.72266 1.31665L9.72266 17.4833"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/1.jpg" class="d-block" />
              </a>
              <div class="offer-label">20% Off</div>
              <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div>
            </div>
            <div class="text">
              <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
              <div class="price">
                <span>$7.25</span>
                <del>$8.50</del>
              </div>
              <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div>
              <div class="more-link">
                <a href="#"
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.63867 9.3999H17.8053"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.72266 1.31665L9.72266 17.4833"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductSlider',
  props: {
    title: {
      type: String,
      default: '',
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
