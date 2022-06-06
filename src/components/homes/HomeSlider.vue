<template>
  <div class="c-slider">
    <div class="container">
      <div class="box-slider">
        <TransitionGroup name="fade" tag="div" class="slide">
        <div class="item" v-for="item in getSliderIndex" :key="item">
          <img :src="item">
        </div>
        </TransitionGroup>
        <div class="arrowControl">
          <button @click="prevSlider"><i class="bi bi-arrow-left"></i></button>
          <button @click="nextSlider"><i class="bi bi-arrow-right"></i></button>
        </div>
        <div class="dotControl">
          <ul>
            <li
              v-for="i in sliders.length"
              :key="i"
              @click="dotSlider(i)"
              :class="{active : (i-1) === sliderIndex}"
            ><button></button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeSlider',
  data(){
    return {
      sliders:[
        {srcImg: require('@/assets/banner_1.jpg')},
        {srcImg: require('@/assets/banner_2.jpg')},
        {srcImg: require('@/assets/banner_3.jpg')},
      ],
      sliderIndex: 0,
    }
  },
  components: {
  },
  mounted: function() {
      this.startSlide();
  },
  computed: {
    getSliderIndex(){
      return this.sliders[this.sliderIndex]
    }
  },
  methods: {
    nextSlider(){
      if(this.sliderIndex == (this.sliders.length -1)){
        this.sliderIndex = 0  
      }else {
        this.sliderIndex++
      }
    },
    prevSlider(){
      if(this.sliderIndex == 0 ){
        this.sliderIndex = this.sliders.length -1
      }else {
        this.sliderIndex--
      }
    },
    dotSlider(number){
      this.sliderIndex = number - 1
    },
    startSlide: function() {
      setInterval(this.nextSlider, 4000);
    },
  }
}
</script>

<style lang="scss">
.c-slider {
  background: var(--radial-gradient-orange-2);
  padding: 20px 0 10px;
  margin-bottom: 30px;
  .box-slider {
    position: relative;
    .slide {
      min-height: 439px;
      overflow: hidden;
    }
  }
  .arrowControl {
    button {
      background: rgba(255,255,255,.2);
      border: 0;
      color: #fff;
      font-size: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-top: -30px;
      &:hover {
        color: var(--orange-2);
      }
      &:first-child {
        left: 0;        
      }
      &:last-child {
        right: 0;
      }
    }
  }
  .dotControl {
    ul {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      gap: 20px;
      margin: 0;
      li {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 10px 0 10px;
        button {
          background: #fff;
          border: 0;
          width: 50px;
          height: 4px;
          opacity: .5;
        }
        &.active {
          button {
            opacity: 1;
          }
        }
      }
    }
  }
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
  }
}
</style>
