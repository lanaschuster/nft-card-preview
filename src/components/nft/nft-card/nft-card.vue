<template>
  <Card>
    <template #image>
      <NftImage :image="nftImage" />
    </template>
    <template #content>
      <a class="nft-title">Equilibrium #3429</a>
      <p class="nft-description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div class="nft-values">
        <div class="nft-value">
          <img src="/images/icon-ethereum.svg" alt="NFT ethereum value">
          0.041 ETH
        </div>
        <div class="nft-time">
          <img src="/images/icon-clock.svg" alt="NFT time">
          3 days left
        </div>
      </div>
    </template>
    <template #footer>
      <div class="nft-creator">
        <img src="/images/image-avatar.png" alt="NFT Creator">
        <p>Creation of <a class="nft-creator-name">Jules Wyvern</a></p>
      </div>
    </template>
  </Card>
</template>

<script>
import { computed } from 'vue'
import Card from '@/components/utils/Card/card.vue'
import NftImage from '@/components/nft/nft-image/nft-image.vue'

export default {
  components: {
    Card,
    NftImage
  },
  setup() {
    const nftImage = computed(() => {
      return `${import.meta.env.VITE_BASE}/images/image-equilibrium.jpg`
    })

    return { nftImage }
  }
}
</script>

<style lang="scss" scoped>
.nft-title {
  color: $white;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 20px;
  line-height: 120%;
  font-weight: 600;

  &:hover {
    color: $secondary;
  }
}

.nft-description {
  color: $primary;
  font-weight: 300;
  margin: 16px auto;
  font-size: $paragraph-font-size;
}

.nft-values {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .nft-value {
    display: flex;
    column-gap: 8px;
    font-weight: 600;
    color: $secondary;
    align-items: center;
    letter-spacing: 0.025rem;

    img {
      width: 12px;
    }
  }

  .nft-time {
    display: flex;
    color: $primary;
    column-gap: 8px;
    font-weight: 300;
    align-items: center;
    letter-spacing: 0.025rem;

    img {
      width: 16px;
    }
  }

}

.nft-creator {
  display: flex;
  align-items: center;
  column-gap: 16px;
  letter-spacing: 0.025rem;

  .nft-creator-name {
    cursor: pointer;
    color: $white;
    font-weight: 400;

    &:hover {
      color: $secondary;
    }
  }

  img {
    width: 32px;
    border: 1px solid $white;
    border-radius: 500px;
  }

  p {
    color: $primary;
    font-weight: 300;
  }
}
</style>
