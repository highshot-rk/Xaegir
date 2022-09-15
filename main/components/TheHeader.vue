<template>
  <nav class="flex mobile:justify-between items-center">
    <nuxt-link to="/">
      <img src="~/assets/logos/xaegir-logo.svg" alt="xaegir logo" />
    </nuxt-link>
    <button class="flex gap-x-2.5 items-center tablet:ml-[17vw]">
      <img src="~/assets/icons/menu-icon.svg" alt="" />
      <p>Menu</p>
    </button>
    <p class="mobile:hidden tablet:hidden tv:block ml-auto mr-32">
      Vienna, 2:54 pm CEST
    </p>
    <button
      class="flex gap-x-1.5 mobile:hidden ml-auto items-center px-1.5 py-2.5 border-2 border-primary rounded-[21px] tv:ml-0"
    >
      <p>EN</p>
      <div class="circle tablet:w-3 tablet:h-3 rounded-full bg-primary"></div>
    </button>
    <!-- <ul>
      <li>
        <nuxt-link to="/learn">Learn</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/company">Company</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/marketplace">Marketplace</nuxt-link>
      </li>
      <li>
        <ul>
          <li>
            <a href="" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="" target="_blank">Discord</a>
          </li>
          <li>
            <a href="" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </li>
    </ul> -->
  </nav>
</template>
