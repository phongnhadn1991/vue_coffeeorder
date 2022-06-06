<template>
  <div class="c-news">
    <div class="container">
      <div class="c-title_box">
        <h2><i class="bi bi-balloon-heart"></i> Tin tức & khuyến mãi</h2>
      </div>
      <div class="box_wrap">
        <div class="box_list_news">
            <div class="item" v-for="item in news" :key="item.id">
              <div class="item__thumb">
                <img :src="item.srcImg" alt="" />
              </div>
              <div class="item__content">
                <div class="title">
                  MỪNG NHÀ ĐÀ NẴNG LÊN 5 - NGUYỄN CHÍ THANH "KHOÁC ÁO MỚI
                </div>
                <div class="box_footer">
                    <p class="date_post">Admin | 6/2/2022</p>
                  <a>Đọc tiếp</a>
                </div>
              </div>
            </div>
          </div>
          <div class="box_button text-center mt-5" v-if="this.$route.name == 'home'">
            <a href="" class="btn_showAll">Xem tất cả <i class="bi bi-arrow-right"></i></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNews",

  data() {
    return {
      news: [
        {id: 1, title: "MỪNG NHÀ ĐÀ NẴNG LÊN 5 - NGUYỄN CHÍ THANH KHOÁC ÁO MỚI", srcImg: require('@/assets/news/news_1.jpg')},
        {id: 2, title: "ĐẠI TIỆC TRÀ - CÀ PHÊ ĐỒNG GIÁ CHỈ 39K", srcImg: require('@/assets/news/news_2.jpg')},
        {id: 3, title: "TIẾP BƯỚC RÔM RẢ - NHÀ TẶNG LIỀN 15%", srcImg: require('@/assets/news/news_3.jpg')},
        {id: 4, title: "VUI NGÀY HỘI NGỘ - RẦM RỘ DEAL TO", srcImg: require('@/assets/news/news_4.jpg')},
        {id: 5, title: "SÁNG NĂNG LƯỢNG - CÀ PHÊ THÊM TỈNH TÁO CHỈ 19K", srcImg: require('@/assets/news/news_5.jpg')},
        {id: 6, title: "VẪN DEAL ĐỀU ĐẶN - VẪN NHÀ YÊU THƯƠNG", srcImg: require('@/assets/news/news_6.jpg')},
      ]
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.box_list_news {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  .item {
    box-shadow: var(--product-box-shadow);
    border-radius: 8px;
    padding: 10px 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__content {
      margin-top: 15px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .box_footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          .date_post {
              margin-bottom: 0;
              font-size: 14px;
              color: gray;
          }
          a {
              display: inline-block;
              background: var(--orange-2);
              color: #fff;
              padding: 7px 20px;
              font-size: 14px;
              border-radius: 100px;
              cursor: pointer;
          }
      }
    }
  }
}
</style>
