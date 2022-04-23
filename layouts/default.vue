<template>
  <div>
    <HeaderApp></HeaderApp>
    <main>
      <nuxt />
    </main>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import FooterApp from '@/components/Footer'
import HeaderApp from '@/components/Header'
import MainPage from '@/pages/main'
import Contacts from '@/pages/contacts'

export default {
  name: 'default',
  components: { Contacts, MainPage, HeaderApp, FooterApp },
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/main.css';

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-black);
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-black);
}
</style>
