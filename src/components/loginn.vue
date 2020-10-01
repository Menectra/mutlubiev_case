<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-md-6 login-form-1">
        <h3>Üye Girişi</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="E-Posta Adresiniz *"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Şifreniz *"
              value=""
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Giriş" />
          </div>
          <div class="form-group">
            <a href="#" class="ForgetPwd">Şifremi Unuttum</a>
          </div>
        </form>
      </div>
      <div class="col-md-6 login-form-2">
        <h3>Üye Ol</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Adınız Soyadınız *"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="E-Posta Adresiniz *"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Şifreniz*"
              value=""
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Üye Ol" />
          </div>
          <div class="form-group">
            <a href="#" class="ForgetPwd" value="Login">Şifremi Unuttum</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from"firebase"
export default {
  name: "Loginn",
};
</script>

<style scoped>
.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
}
.login-form-1 {
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3 {
  text-align: center;
  color: #333;
}
.login-form-2 {
  padding: 5%;
  background: #ef554a;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3 {
  text-align: center;
  color: #fff;
}
.login-container form {
  padding: 10%;
}
.btnSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.login-form-1 .btnSubmit {
  font-weight: 600;
  color: #fff;
  background-color: #ef554a;
}
.login-form-2 .btnSubmit {
  font-weight: 600;
  color: #ef554a;
  background-color: #fff;
}
.login-form-2 .ForgetPwd {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.login-form-1 .ForgetPwd {
  color: #ef554a;
  font-weight: 600;
  text-decoration: none;
}
</style>
