<template>
  <b-modal
    id="overview-modal"
    :title="$t('overviewModal.title')"
    header-class="justify-content-center"
    title-class="position-absolute text-primary"
    hide-footer
    scrollable
    centered
    size="md"
  >
    <b-container fluid>
      <div
        id="unfound-text"
        class="text-center text-primary"
      >
        <!-- {{ foundCount }} {{ $t('overviewModal.foundCountText') }} -->
        {{ $tc('overviewModal.imagesFound', foundCount) }}
      </div>
      <b-row :class="{'justify-content-center': livingImages.length <= 2}">
        <b-col
          v-for="livingImage in livingImages"
          :key="livingImage.id"
          cols="6"
          sm="4"
          class="text-primary my-3 px-2"
        >
          <div class="position-relative mb-2">
            <img
              :src="livingImage.imageUrl"
              :alt="livingImage.name"
              class="w-100"
            >
            <div v-if="livingImage.found" class="found-box">
              <icon-base
                color="#37a967"
                width="12"
                height="12"
              >
                <icon-check />
              </icon-base>
              {{ $t('overviewModal.found') }}
            </div>
          </div>
          <span class="living-image-title">{{ livingImage.title }}</span>
        </b-col>
      </b-row>
      <!-- <div
        v-if="foundCount == 0"
        id="unfound-text"
        class="text-center"
      >
        {{ $t('overviewModal.noImagesFoundYet') }}
      </div> -->
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'OverviewModal',
  props: {
    livingImages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    foundCount() {
      return this.livingImages.filter(li => li.found).length
    }
  }
}
</script>

<style scoped>
#unfound-text {
  font-size: 0.8rem;
}
.living-image-title {
  font-size: 0.9rem;
}
.found-box {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3px 5px 2px;
  color: #37a967;
  font-size: 0.6rem;
  position: absolute;
  bottom: 0;
  left: 5px;
  border-radius: 7px 7px 0 0;
}
</style>
