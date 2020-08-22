<template>
    <div class="no-search-container">
        <div class="no-search-body">
            <div class="no-search-description">
                Ingrese un patrón de búsqueda
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NoSearch'
}
</script>

<style scoped>
.no-search-container {
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: rgb(66, 66, 66);
    font-size: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 13px 0px, rgba(0, 0, 0, 0.07) 0px 1px 3px 0px;
    border-radius: 4px;
    padding: 15px;
    margin: 10px 5px 25px 10px;
}

.no-search-body {
    text-align: center;
    margin-bottom: 30px;
    background-color: rgba(0, 113, 206, 0.08);
    padding-top: 10px;
    border-radius: 8px;
}

.no-search-description {
    font-size: 16px;
    color: rgb(65, 64, 66);
    padding: 0px 15px 20px;
}

</style>
