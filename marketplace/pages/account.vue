<template>
  <div>
    <div class="tabs">
      <button @click="$router.push('/account/profile')">Profile</button>
      <button @click="$router.push('/account/activity')">Activity</button>
      <button @click="$router.push('/account/storefront')">Storefront</button>
      <button @click="$router.push('/account/settings')">Settings</button>
    </div>
    <button>Logout</button>
    <nuxt-child />
  </div>
</template>
