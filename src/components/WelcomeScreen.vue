<template>
  <div id="welcome-screen">
    <!-- MOBILE -->
    <div v-if="!accepted && !camRejected" class="welcome-wrapper">
      <h2 class="mt-3">{{ $t('welcomeScreen.title') }}</h2>
      <div id="logo-wrapper" class="mb-4">
        <img id="logo" src="@/assets/img/living-image-illu.svg">
      </div>
      <p id="description-text">{{ $t('welcomeScreen.description') }}</p>
      <p class="step mt-2">
        {{ $t('welcomeScreen.step1') }}
      </p>
      <p class="step">{{ $t('welcomeScreen.step2') }}</p>
      <p class="step">{{ $t('welcomeScreen.step3') }}</p>
      <b-button
        id="accept-button"
        variant="primary"
        pill
        class="my-3"
        @click="accepted = true"
      >
        {{ $t('welcomeScreen.button') }}
      </b-button>
    </div>

    <!-- LOADING -->
    <div v-if="accepted && !loaded && !camRejected" class="welcome-wrapper">
      <b-spinner
        id="loading-spinner"
        variant="primary"
        :label="$t('loading.spinnerLabel')"
        class="mb-5 mx-auto"
      />
      <span class="text-center">{{ $t('loading.text') }}</span>
    </div>

    <!-- CAM PERMISSION REJECTED -->
    <div v-if="camRejected" class="welcome-wrapper">
      <icon-base
        class="mx-auto mb-3"
        width="50%"
        height="auto"
        color="#efce0d"
      >
        <icon-warning />
      </icon-base>
      <h5 class="text-center">
        {{ $t('camRejected.text') }}
      </h5>
      <b-button
        id="accept-button"
        variant="primary"
        pill
        class="my-3"
        @click="onRestartButton()"
      >
        {{ $t('camRejected.restartButton') }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen',
  props: {
    camRejected: Boolean
  },
  data() {
    return {
      accepted: false,
      loaded: false
    }
  },
  methods: {
    onRestartButton() {
      window.location.reload()
    }
  },
  mounted() {
    // fade out loading screen
    window.addEventListener('loaded', () => {
      this.loaded = true
      this.$emit('loaded')
      this.$emit('remove-screen')
    })
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: $primary;
  margin-bottom: 24px;
  font-size: 2.5rem;
  text-align: center;
}
@media (max-height: 625px) and (max-width: 385px) {
  h2 {
    color: $primary;
    margin-bottom: 24px;
    font-size: 2rem;
    text-align: center;
  }
}

#welcome-screen {
  color: #333;
  font-weight: bold;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: auto;
  background-color:  #fff;
  z-index: 101;
}
.welcome-wrapper {
  width: 314px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
#logo {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
#logo-wrapper {
  width: 240px;
  height: 190px;
  margin-left: auto;
  margin-right: auto;
  background-color: #aaa;
}
#description-text {
  font-weight: normal;
}
.step {
  margin-left: 15px;
}
#accept-button {
  padding: 10px 70px;
}
#loading-spinner {
  width: 5rem;
  height: 5rem;
  border-width: .5rem;
}
</style>
