<template>
  <div id="share-btn" :class="`offcanvas offcanvas-bottom share-offcanvas ${showoffcanvas ? 'show' : ''}`" tabindex="-1" aria-labelledby="shareBottomLabel">
    <div class="offcanvas-header">
      <h5 id="shareBottomLabel" class="offcanvas-title">Share</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" @click="closeoffcanvas"></button>
    </div>
    <div class="offcanvas-body small">
      <div class="d-flex flex-wrap align-items-center">
        <div class="text-center me-3 mb-3">
          <img src="/assets/images/brands/08.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
          <h6>Facebook</h6>
        </div>
        <div class="text-center me-3 mb-3">
          <img src="/assets/images/brands/09.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
          <h6>Twitter</h6>
        </div>
        <div class="text-center me-3 mb-3">
          <img src="/assets/images/brands/10.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
          <h6>Instagram</h6>
        </div>
        <div class="text-center me-3 mb-3">
          <img src="/assets/images/brands/11.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
          <h6>Google Plus</h6>
        </div>
        <div class="text-center me-3 mb-3">
          <img src="/assets/images/brands/13.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
          <h6>In</h6>
        </div>
        <div class="text-center me-3 mb-3">
          <img src="/assets/images/brands/12.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
          <h6>YouTube</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareOffcanvas',
  props: {
    showoffcanvas: { type: Boolean, default: false }
  },
  emits: ['closeoffcanvas'],
  methods: {
    closeoffcanvas() {
      this.$emit('closeoffcanvas', !this.showoffcanvas)
    },
    checkActive(route) {
      if (this.$route.name === route) {
        return true
      }
    }
  }
}
</script>
