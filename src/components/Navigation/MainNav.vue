<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none first:ml-0">
            <li v-for="item in menuItems" :key="item" class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <ActionButton v-if="!isLoggedIn" text="Sign in" type="primary" @click="loginUser" />
          <ProfileImage v-else />
        </div>
      </div>

      <TheSubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '../Shared/ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
import TheSubNav from './TheSubNav.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubNav
  },
  data() {
    return {
      company: 'Google Carrers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Location', 'Benefits', 'Jobs', 'Students'],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>

<style></style>
