<template>
    <div style="width: 100%; margin: 0px 3%;">
        <div class="search-width">
        <div class="search-box-container-header" style="padding-top: 10px;">
            <section>
                <div class="ais-InstantSearch__root">
                    <div class="ais-InstantSearch__root">
                    <div class="ais-SearchBox">
                        <form class="ais-SearchBox-form" role="search" v-on:submit.prevent="doSearch">
                        <input type="search" placeholder="¿Qué estás buscando?" maxlength="512" class="ais-SearchBox-input" v-model="searchPattern">
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
</template>

<script>
export default {
  name: 'SearchBar',
  props: [
      "searchCallback"
  ],
  methods: {
      doSearch: function() {
          this.searchCallback(this.searchPattern);
      }
  },
  data() {
    return {
      searchPattern: ''
    }
  }
}
</script>

<style scoped>
</style>
