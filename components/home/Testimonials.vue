<template>
  <section class="bg-primary" v-if="testimonials && testimonials.length > 0">
    <div class="section-can-top">
      <img src="/section-can-top.png" class="w-100 d-block" />
    </div>
    <div class="section-can-bottom">
      <img src="/section-can-bottom.png" class="w-100 d-block" />
    </div>
    <div class="shape-1"><img src="/shape-1.svg" class="d-block" /></div>
    <div class="shape-2"><img src="/shape-2.svg" class="d-block" /></div>
    <div class="dot-shape dot-shape-1"></div>
    <div class="dot-shape dot-shape-2"></div>
    <div class="container">
      <div class="testimonial-title">
        <h2>Testimonials</h2>
        <p>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
      </div>
      <div class="testimonial-carousel-wrap">
        <div class="testimonial-carousel owl-carousel owl-theme">
          <div class="item" 
            v-for="(testimonial, index) in testimonials"
            :key="index">
            <div class="testimonial-box">
              <p>
                {{testimonial.feedback}}
              </p>
              <div class="testi-user">
                <div class="inner">
                  <div class="img">
                    <img :src="testimonial.cust_image ? cust_image : '/avtar.jpg'" class="d-block" />
                  </div>
                  <h4>{{testimonial.customer_name}}</h4>
                  <h5>{{testimonial.customer_description}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters  } from 'vuex'

export default {
  name: 'Testimonials',
  computed: {
    ...mapGetters({
      testimonials: 'global/getTestimonials'
    })
  }
  
};
</script>
