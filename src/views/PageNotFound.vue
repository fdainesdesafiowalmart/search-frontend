<template>
  <section class="content">
    <div class="error">
      <div class="error-code m-b-10 m-t-20">404 <i class="fa fa-warning"></i></div>
      <h3 class="font-bold">La página no se ha encontrado.</h3>
      <div class="error-desc">
        Lo sentimos, pero la página solicitada no existe.<br/>
        Intente acceder a otra opción del menú, o utilice el siguiente link para volver a la página inicial.
        <div>
          <router-link
            to="/"
            v-slot="{ href, route, navigate }"
          >
            <a :href="href" @click="navigate">
              <i class="fa fa-arrow-left"></i>
              Volver al Inicio
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
.error {
  margin: 0 auto;
  text-align: center;
}

.error-code {
  bottom: 60%;
  color: #2d353c;
  font-size: 96px;
  line-height: 100px;
}

.error-desc {
  font-size: 12px;
  color: #647788;
}

.m-b-10 {
  margin-bottom: 10px!important;
}

.m-b-20 {
  margin-bottom: 20px!important;
}

.m-t-20 {
  margin-top: 20px!important;
}
</style>
