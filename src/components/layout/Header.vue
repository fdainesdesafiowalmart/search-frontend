<template>
<section>
  <div class="d-flex">
    <div id="header" class="header-info">
      <div class="header-wrapper header-info-expanded">
        <span>
          Servicio al cliente de Lider.cl: WhatsApp <a href="#">+56957211492</a>
          | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
        </span>
      </div>
    </div>
    <div class="site-header compact" style="background-color: rgb(0, 113, 206);">
      <div class="header-wrapper">
        <div class="logo">
          <a href="#">
            <img alt="Lider Logo" src="https://www.lider.cl/catalogo/images/lider-logo.svg" style="width: 152px; height: 35px; margin-top: 12px; margin-bottom: 6px;">
          </a>
        </div>
        <div class="menu-icon-container">
          <div style="cursor: pointer;">
            <i class="zmdi zmdi-menu menu-icon"></i>
            <div class="show-category">Categorías</div>
          </div>
        </div>
       <search-bar />

        <div class="cart-supermarket-width">
          <div class="cart-container" style="background-color: rgb(4, 30, 66);">
            <li class="list-inline-item cart-dropdown dropdown nav-item">
              <a aria-haspopup="true" href="#" class="p-0 nav-link" aria-expanded="false">
                <div id="shoppingCart" class="d-flex justify-content-between shopping-cart-images">
                  <img alt="cart" src="https://www.lider.cl/catalogo/images/lider-cart.svg" width="29" height="25">
                  <div class="cart-quantity">
                    <div id="quantityNumber" class="quantity-number">0</div>
                  </div>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import SearchBar from '../searchbar/SearchBar.vue'

export default {
  name: 'Header',
  components: {
    SearchBar
  }
}
</script>

<style scoped>
</style>
