<template>
  <div class="video">
    <VideoHero></VideoHero>
    <div class="video-container">
      <div class="video-player">
        <div class="video-player__button">
          <img alt="workplace" src="@/assets/img/video-img/video-text.png" />
          <IconApp class="video-player__icon" name="play"></IconApp>
        </div>
        <img
          alt="grid"
          class="video-player__grid"
          src="@/assets/img/video-img/video-grid.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
import VideoHero from "@/components/modals/video-directory/VideoHero";
import IconApp from "@/components/ui/Icons";
export default {
  name: "VideoModal",
  components: { IconApp, VideoHero },
};
</script>

<style lang="scss" scoped>
.video {
  position: relative;
}
.video-container {
  position: relative;
  width: 100%;
  max-width: 1011px;
  margin: 0 auto;
}
.video-player {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 253px;
  background-image: url("@/assets/img/video-img/backgrownd-video-mobile.png");
  background-size: cover;
  border-radius: 20px;

  @media (min-width: 600px) {
    background-image: url("@/assets/img/video-img/video-backgrownd.png");
    min-height: 300px;
  }

  @media (min-width: 800px) {
    background-image: url("@/assets/img/video-img/video-backgrownd.png");
    min-height: 400px;
  }

  @media (min-width: 1000px) {
    min-height: 477px;
  }

  &__button {
    position: relative;
    width: 140px;
    height: 140px;
    cursor: pointer;

    &:hover {
      .video-player__icon {
        opacity: 0.5;
      }
    }

    & img {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 1000px) {
      width: 212px;
      height: 212px;
    }
  }

  &__icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 42px;
    height: 40px;
    transition: opacity 0.2s ease-out;

    @media (min-width: 1000px) {
      width: 58px;
      height: 58px;
    }
  }

  &__grid {
    min-width: 492px;
    min-height: auto;
    position: absolute;
    transform: translate(300px, -209px);
    top: 0;
    right: 0;
    z-index: -1;
  }
}
</style>
