<template>
  <b-modal
    id="info-modal"
    :title="$t('infoModal.title')"
    header-class="justify-content-center"
    title-class="position-absolute text-primary"
    body-class="px-md-4"
    footer-class="py-1"
    scrollable
    centered
    size="md"
  >
    <p class="mt-2 bold-text">{{ $t('infoModal.p1') }}</p>
    <p>{{ $t('infoModal.p2') }}</p>
    <img
      src="@/assets/img/example-living-image.jpg"
      :alt="$t('infoModal.imageAlt')"
    >
    <p class="image-caption">{{ $t('infoModal.imageCaption') }}</p>
    <hr class="my-4">
    <i18n path="infoModal.reportErrors" tag="p">
      <template #link>
        <a
          :href="`mailto:${ $t('infoModal.reportErrorsLinkValue') }`"
          target="_blank"
        >{{ $t('infoModal.reportErrorsLinkValue') }}</a>
      </template>
    </i18n>
    <template #modal-footer>
      <div class="text-right">
        <span id="version"> {{ $t('infoModal.version') }} {{ version }} </span>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'InfoModal',
  props: {
    version: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.bold-text {
  font-weight: 500;
}
img {
  max-width: 260px;
  display: block;
  border: 1px solid #ccc;
  margin: 30px auto 20px;
}
.image-caption {
  color: #869094;
  font-size: 0.8em;
  text-align: center;
}
#version {
  color: #a3a3a3;
  font-size: 0.7rem;
}
</style>
