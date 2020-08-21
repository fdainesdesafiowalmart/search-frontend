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
        <div style="width: 100%; margin: 0px 3%;">
          <div class="search-width">
            <div class="search-box-container-header" style="padding-top: 10px;">
              <section>
                <div class="ais-InstantSearch__root">
                  <div class="ais-InstantSearch__root">
                    <div class="ais-SearchBox">
                      <form class="ais-SearchBox-form" role="search">
                        <input type="search" placeholder="¿Qué estás buscando?" maxlength="512" class="ais-SearchBox-input" value="">
                        <button type="submit" title="Submit your search query." class="ais-SearchBox-submit search-input-icons">
                          <svg class="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
                            <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

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
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
