<template>
    <div class="no-result-container">
        <div class="no-result-body">
            <img alt="exploding-icon" class="image" src="https://www.lider.cl/catalogo/images/explodingIcon.png">
            <div class="no-result-header">¡Lo sentimos!</div>
            <div class="no-result-title">No encontramos resultados para tu búsqueda de 
                <span>"blablabla"</span>
            </div>
            <div class="separator"></div>
            <div class="no-result-description">
                <b>Algunos tips</b>: Revisa si escribiste correctamente lo que buscas. Puedes probar nuevamente usando términos menos específicos.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NoResults'
}
</script>

<style scoped>
.no-result-container {
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: rgb(66, 66, 66);
    font-size: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 13px 0px, rgba(0, 0, 0, 0.07) 0px 1px 3px 0px;
    border-radius: 4px;
    padding: 15px;
    margin: 10px 5px 25px 10px;
}

.no-result-body {
    text-align: center;
    margin-bottom: 30px;
    background-color: rgba(0, 113, 206, 0.08);
    padding-top: 10px;
    border-radius: 8px;
}

.image {
    width: 100px;
    margin-top: 15px;
}

.no-result-header {
    font-size: 34px;
    font-weight: bold;
    color: rgb(4, 30, 66);
}

.no-result-title {
    font-size: 28px;
    font-weight: bold;
    color: rgb(0, 113, 206);
}

.separator {
    width: 100px;
    height: 5px;
    background: rgb(255, 194, 32);
    margin: 15px auto;
}

.no-result-description {
    font-size: 16px;
    color: rgb(65, 64, 66);
    padding: 0px 15px 20px;
}
</style>
