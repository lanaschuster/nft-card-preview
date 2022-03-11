<template>
  <div class="card">
    <slot name="image"></slot>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
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
  box-shadow: 0 20px 14px 14px rgba(7, 15, 26, 0.6), 0 0 52px 52px rgba(7, 15, 26, 0.45);

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
  }
}
</style>
