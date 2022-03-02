<template>
  <div class="card">
    <img src="../../assets/images/image-equilibrium.jpg" alt="NFT image">
    <div class="card-content">
      <h3 class="card-title">Equilibrium #3429</h3>
      <p class="card-paragraph">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div class="card-values">
        <div class="nft-value">
          <img src="../../assets/images/icon-ethereum.svg" alt="NFT ethereum value">
          0.041 ETH
        </div>
        <div class="nft-time">
          <img src="../../assets/images/icon-clock.svg" alt="NFT time">
          3 days left
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="nft-creator">
        <img src="../../assets/images/image-avatar.png" alt="NFT Creator">
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
    </div>
  </div>
</template>

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

  img {
    width: 100%;
    border-radius: 8px;
  }

  .card-content {
    .card-title {
      color: $white;
      margin-bottom: 16px;
    }

    .card-paragraph {
      color: $primary;
      font-weight: 300;
      font-size: $paragraph-font-size;
    }

    .card-values {
      padding: 24px 0 0 0;
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

      img {
        width: 32px;
        border: 1px solid $white;
        border-radius: 500px;
      }

      p {
        color: $primary;
        font-weight: 300;

        span {
          color: $white;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
