<template>
  <main>
    <nft-card
      nft-image="/images/image-equilibrium.jpg"
      nft-name="Equilibrium #3429"
      nft-description="Our Equilibrium collection promotes balance and calm."
      nft-price="0.041 ETH"
      nft-deadline="3 days left"
      :nft-creator="{
        name: 'Jules Wyvern',
        avatar: '/images/image-avatar.png'
      }"
    ></nft-card>
  </main>
</template>

<script>
import NftCard from '@/components/nft/nft-card/nft-card.vue'

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
