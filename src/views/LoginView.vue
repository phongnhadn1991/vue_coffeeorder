<template>
  <div class="main-content">
    <div class="pt-5 w-75 mx-auto">
      <section>
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="../assets/login.webp"
                   class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-5">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Đăng nhập với</p>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="bi bi-facebook"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="bi bi-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="bi bi-linkedin"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Hoặc</p>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control form-control-md"
                         placeholder="Tên đăng nhập" />
                </div>

                <!-- Password input -->
                <div class="form-outline mb-3">
                  <input type="password" id="form3Example4" class="form-control form-control-md display-3"
                         placeholder="Mật khẩu" />
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <!-- Checkbox -->
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                      Lưu đăng nhập
                    </label>
                  </div>
                  <a href="#!" class="text-body">Quên mật khẩu?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="btn btn-primary btn-md"
                          style="padding-left: 2.5rem; padding-right: 2.5rem;">Đăng nhập</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Nếu chưa có tài khoản? <a href="#!"
                                                                                    class="link-danger">Tạo tài khoản mới</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  components: {
  },
};
</script>
<style lang="scss">
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
