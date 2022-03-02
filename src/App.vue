<template>
  <main>
    <nft-card></nft-card>
  </main>
</template>

<script>
import NftCard from './components/nft-card/nft-card.vue'

export default {
  components: {
    NftCard
  },
  setup() {
    
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: $font-family;
}
body, #app {
  height: 100vh;
  background-color: $main-bg-color;
}
main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
