<template>
  <div class="card">
    <NftImage image="/images/image-equilibrium.jpg" />
    <div class="card-content">
      <a class="card-title">Equilibrium #3429</a>
      <p class="card-paragraph">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div class="card-values">
        <div class="nft-value">
          <img src="/images/icon-ethereum.svg" alt="NFT ethereum value">
          0.041 ETH
        </div>
        <div class="nft-time">
          <img src="/images/icon-clock.svg" alt="NFT time">
          3 days left
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="nft-creator">
        <img src="/images/image-avatar.png" alt="NFT Creator">
        <p>Creation of <a class="nft-creator-name">Jules Wyvern</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import NftImage from '@/components/nft-image/nft-image.vue'

export default {
  components: {
    NftImage
  },
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 286px;
  height: fit-content;
  display: flex;
  row-gap: 24px;
  padding: 24px;
  border-radius: 16px;
  flex-direction: column;
  background-color: $card-bg-color;

  .card-content {
    .card-title {
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

    .card-paragraph {
      color: $primary;
      font-weight: 300;
      margin: 16px auto;
      font-size: $paragraph-font-size;
    }

    .card-values {
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
  }

  .card-footer {
    height: fit-content;

    &::before {
      content: "";
      display: inline-block;
      height: 1px;
      width: 100%;
      background-color: $primary;
      margin-bottom: 16px;
      opacity: 0.3;
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
  }
}
</style>
