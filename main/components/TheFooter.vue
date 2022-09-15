<template>
  <footer>
    <ul>
      <li>
        <p>Resources</p>
        <ul>
          <li><router-link to="/system-status">System Status</router-link></li>
          <li>
            <router-link to="/marketplace-and-fees">
              Marketplace &amp; Fees
            </router-link>
          </li>
          <li>
            <router-link to="/newsletter">Newsletter</router-link>
          </li>
        </ul>
      </li>
      <li>
        <p>Company</p>
        <ul>
          <li><router-link to="/company">Company</router-link></li>
          <li><router-link to="/learn">Learn</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/announce">Announce</router-link></li>
          <li><router-link to="/careers">Careers</router-link></li>
        </ul>
      </li>
      <li>
        <p>Legal</p>
        <ul>
          <li>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
          </li>
          <li>
            <router-link to="/terms-of-service">Terms of Service</router-link>
          </li>
          <li><router-link to="/compliance">Compliance</router-link></li>
          <li><router-link to="/cookies">Cookies</router-link></li>
        </ul>
      </li>
      <li>
        <p>Support</p>
        <ul>
          <li><router-link to="/support">Support</router-link></li>
          <li>
            <router-link to="/supported-countries">
              Supported Countries
            </router-link>
          </li>
          <li><router-link to="/security">Security</router-link></li>
        </ul>
      </li>
      <li>
        <p>Social Media</p>
        <ul>
          <li>
            <a href="https://twitter.com/xaegir_" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://discord.gg/EhmxUVtncr" target="_blank">Discord</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/xaegir/about/">
              LinkedIn
            </a>
          </li>
        </ul>
        <!-- or social links component here -->
      </li>
    </ul>
    <div>
      <nuxt-link to="/" class="logo">
        <img src="" alt="" />
      </nuxt-link>
      <p>&copy; {{ new Date().getFullYear() }} Xaegir. All rights reserved.</p>
    </div>
  </footer>
</template>
