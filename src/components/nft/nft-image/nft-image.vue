<template>
  <div class="nft-image-container">
    <img
      :src="image" 
      alt="NFT image"
    >
    <div class="view-overlay">
      <img
        src="/images/icon-view.svg" 
        alt="view nft"
      >
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const image = ref(props.image)

    return {
      image
    }
  }
}
</script>

<style lang="scss" scoped>
.nft-image-container {
  position: relative;
  height: 286px;
  width: 286px;

  img {
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
  }
  
}
.nft-image-container .view-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $secondary-transparent;
  transition: opacity 0.3s ease;
  opacity: 0;

  img {
    height: 48px;
    width: 48px;
  }
}

.nft-image-container:hover .view-overlay {
  opacity: 1;
}
</style>
