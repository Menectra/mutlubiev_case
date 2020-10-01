<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light static-top">
      <div class="container">
        <router-link class="navbar-brand" to="/" >
          <img src="https://mutlubiev.com/images/mbe-logo-svg.svg" alt="" />
        </router-link>
        <div class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hizmetler
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <h5 class="dropdown-header">Hizmetler</h5>
            <a class="dropdown-item" href="#">Ev Temizliği</a>
            <a class="dropdown-item" href="#">Ofis Temizliği</a>
            <a class="dropdown-item" href="#">Yarım Gün Ev Temizliği</a>
            <a class="dropdown-item" href="#">Boş Ev Temizliği</a>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="text" href="#">Hakkımızda</a>
            </li>

            <li class="nav-item ml-3">
              <a class="text" href="#">İletişim</a>
            </li>
            <li class="nav-item ml-3">
              <router-link class="text" to="/login" >Giriş Yap</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-nav {
  color: black;
}
.navbar {
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
.text {
  color: black;
  text-decoration: none;
}
.dropdown-header {
  font-weight: bold;
}
</style>
