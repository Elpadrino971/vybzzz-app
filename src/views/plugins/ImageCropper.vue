<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.cropperjs') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding Cropper JS Plugin refer
            <a href="https://github.com/Agontuk/vue-cropperjs#readme">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <section class="cropper-area">
          <input ref="input" type="file" name="image" accept="image/*" @change="setImage" />
          <div class="content"></div>
          <div class="img-cropper">
            <vue-cropper ref="cropper" :aspect-ratio="16 / 9" :src="imgSrc" preview=".preview" />
          </div>
          <div class="actions">
            <a href="#" role="button" @click.prevent="zoom(0.2)"> Zoom In </a>
            <a href="#" role="button" @click.prevent="zoom(-0.2)"> Zoom Out </a>
            <a href="#" role="button" @click.prevent="move(-10, 0)"> Move Left </a>
            <a href="#" role="button" @click.prevent="move(10, 0)"> Move Right </a>
            <a href="#" role="button" @click.prevent="move(0, -10)"> Move Up </a>
            <a href="#" role="button" @click.prevent="move(0, 10)"> Move Down </a>
            <a href="#" role="button" @click.prevent="rotate(90)"> Rotate +90deg </a>
            <a href="#" role="button" @click.prevent="rotate(-90)"> Rotate -90deg </a>
            <a ref="flipX" href="#" role="button" @click.prevent="flipX"> Flip X </a>
            <a ref="flipY" href="#" role="button" @click.prevent="flipY"> Flip Y </a>
            <a href="#" role="button" @click.prevent="cropImage"> Crop </a>
            <a href="#" role="button" @click.prevent="reset"> Reset </a>
            <a href="#" role="button" @click.prevent="getData"> Get Data </a>
            <a href="#" role="button" @click.prevent="setData"> Set Data </a>
            <a href="#" role="button" @click.prevent="getCropBoxData"> Get CropBox Data </a>
            <a href="#" role="button" @click.prevent="setCropBoxData"> Set CropBox Data </a>
            <a href="#" role="button" @click.prevent="showFileChooser"> Upload Image </a>
          </div>
          <textarea v-model="data" class="form-control" />
        </section>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <section class="preview-area">
          <p>{{ $t('sidebar.preview') }}</p>
          <div class="preview" />
          <p>{{ $t('sidebar.cropped-image') }}</p>
          <div class="cropped-image">
            <img v-if="cropImg" :src="cropImg" alt="Cropped Image" />
            <div v-else class="crop-placeholder" />
          </div>
        </section>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
  name: 'ImageCroper',
  components: {
    VueCropper
  },
  data() {
    return {
      imgSrc: '/assets/images/plugins/01.jpg',
      cropImg: ''
      // data: null
    }
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    flipX() {
      const dom = this.$refs.flipX
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleX(scale)
      dom.setAttribute('data-scale', scale)
    },
    flipY() {
      const dom = this.$refs.flipY
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleY(scale)
      dom.setAttribute('data-scale', scale)
    },
    getCropBoxData() {
      this.data = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4)
    },
    getData() {
      this.data = JSON.stringify(this.$refs.cropper.getData(), null, 4)
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY)
    },
    reset() {
      this.$refs.cropper.reset()
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg)
    },
    setCropBoxData() {
      if (!this.data) return
      this.$refs.cropper.setCropBoxData(JSON.parse(this.data))
    },
    setData() {
      if (!this.data) return
      this.$refs.cropper.setData(JSON.parse(this.data))
    },
    setImage(e) {
      const file = e.target.files[0]
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    showFileChooser() {
      this.$refs.input.click()
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* body {
  font-family: Arial, Helvetica, sans-serif;
  width: 1024px;
  margin: 0 auto;
} */
input[type='file'] {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}
.header h2 {
  margin: 0;
}
.header a {
  text-decoration: none;
  color: black;
}
.content {
  display: flex;
  justify-content: space-between;
}
.cropper-area {
  width: 614px;
}
.actions {
  margin-top: 1rem;
}
.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062cc;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  height: 100px;
}
.preview-area {
  width: 307px;
}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}
.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}
.cropped-image img {
  max-width: 100%;
}
</style>
