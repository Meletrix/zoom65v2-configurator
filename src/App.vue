<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <div class="header" data-main-header="header">
        <div class="main-header-wrapper">
          <div class="main-header" role="banner" data-header-content="">
            <div class="branding alternate-logo-in-drawer has-logo">
              <a class="branding-logo-link" href="https://meletrix.com/">
                <img
                  src="./assets/logo-1_200x45.png"
                  alt="Meletrix"
                  data-rimg=""
                  srcset="
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_200x45.png?v=1639192042  1x,
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_400x90.png?v=1639192042  2x,
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_600x135.png?v=1639192042 3x,
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_800x180.png?v=1639192042 4x
                  "
                  class="branding-logo-image logo-regular"
                  data-header-logo=""
                />

                <img
                  src="./assets/logo-1_022d14ab-b13c-46e3-b814-b9ca00cbb76e_200x45.png"
                  alt="Meletrix"
                  data-rimg=""
                  srcset="
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_022d14ab-b13c-46e3-b814-b9ca00cbb76e_200x45.png?v=1639192091  1x,
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_022d14ab-b13c-46e3-b814-b9ca00cbb76e_400x90.png?v=1639192091  2x,
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_022d14ab-b13c-46e3-b814-b9ca00cbb76e_600x135.png?v=1639192091 3x,
                    //cdn.shopify.com/s/files/1/0607/2474/0287/files/logo-1_022d14ab-b13c-46e3-b814-b9ca00cbb76e_800x180.png?v=1639192091 4x
                  "
                  class="branding-logo-image logo-alternate"
                  data-header-logo=""
                  style=""
                />
              </a>
            </div>

            <div class="header-tools">
              <nav class="navigation" id="header-navigation">
                <ul class="header-navigation-list clearfix">
                  <li class="header-navigation-list-item primary-list-item">
                    <a
                      class="header-navigation-link primary-link"
                      href="https://meletrix.com/"
                    >
                      HOME
                    </a>
                  </li>

                  <li
                    class="header-navigation-list-item primary-list-item has-dropdown"
                  >
                    <a
                      class="header-navigation-link primary-link"
                      href="https://meletrix.com/collections/zoom65"
                    >
                      PRODUCTS
                    </a>

                    <a
                      class="icon icon-angle-down header-navigation-list-arrow"
                      data-dropdown-toggle=""
                      tabindex="0"
                      aria-controls="header-navigation-menu-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="show-for-sr"> Toggle Dropdown </span>
                    </a>
                    <ul
                      class="header-navigation-list secondary-list clearfix"
                      id="header-navigation-menu-2"
                      data-is-dropdown=""
                    >
                      <li
                        class="header-navigation-list-item secondary-list-item"
                      >
                        <a
                          class="header-navigation-link secondary-link"
                          href="https://meletrix.com/collections/zoom-tkl-essential-edition"
                        >
                          [GB] ZOOM TKL Essential Edition
                        </a>
                      </li>

                      <li
                        class="header-navigation-list-item secondary-list-item"
                      >
                        <a
                          class="header-navigation-link secondary-link"
                          href="https://meletrix.com/collections/zoom65-essential-edition"
                        >
                          Zoom65 Essential Edition R2
                        </a>
                      </li>

                      <li
                        class="header-navigation-list-item secondary-list-item"
                      >
                        <a
                          class="header-navigation-link secondary-link"
                          href="https://meletrix.com/collections/zoom65"
                        >
                          Zoom65 Olivia Edition Drop #2
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="header-navigation-list-item primary-list-item">
                    <a
                      class="header-navigation-link primary-link"
                      href="https://meletrix.com/pages/vendors"
                    >
                      VENDOR
                    </a>
                  </li>

                  <li class="header-navigation-list-item primary-list-item">
                    <a
                      class="header-navigation-link primary-link"
                      href="https://meletrix.com/pages/about-us"
                    >
                      ABOUT US
                    </a>
                  </li>

                  <li class="header-navigation-list-item primary-list-item">
                    <a
                      class="header-navigation-link primary-link"
                      href="https://meletrix.com/pages/contact"
                    >
                      CONTACT US
                    </a>
                  </li>

                  <li class="header-navigation-list-item primary-list-item">
                    <a
                      class="header-navigation-link primary-link"
                      href="https://discord.gg/2n2ns354wc"
                      target="_blank"
                    >
                      DISCORD
                    </a>
                  </li>

                  <li class="header-navigation-list-item primary-list-item">
                    <a
                      class="header-navigation-link primary-link"
                      href="https://meletrix.com/pages/zoom65-user-manual"
                    >
                      Zoom65 Guide
                    </a>
                  </li>
                </ul>
              </nav>

              <div class="header-actions">
                <div class="header-actions-list">
                  <div
                    class="header-actions-list-item header-currency-switcher currency-switcher coin-container"
                  ></div>

                  <a
                    class="header-actions-list-item icon-cart header-cart-link"
                    href="https://meletrix.com/cart"
                    tabindex="0"
                  >
                    <span class="header-cart-count">0</span>
                  </a>

                  <a
                    class="header-actions-list-item header-account-link icon-head"
                    href="https://meletrix.com/account"
                  ></a>

                  <a
                    class="header-actions-list-item drawer-toggle"
                    href="https://meletrix.com/collections/zoom-tkl-essential-edition#header-drawer-popout"
                    tabindex="0"
                    data-drawer-toggle=""
                    aria-controls="header-drawer-popout"
                    aria-label="Menu"
                    aria-expanded="false"
                  >
                    <span class="icon-menu"></span>
                    <span class="icon-cross"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="header-drawer"
          tabindex="-1"
          data-header-drawer=""
          id="header-drawer-popout"
        >
          <nav class="navigation" id="drawer-navigation">
            <ul class="header-navigation-list clearfix">
              <li class="header-navigation-list-item primary-list-item">
                <a
                  class="header-navigation-link primary-link"
                  href="https://meletrix.com/"
                >
                  HOME
                </a>
              </li>

              <li
                class="header-navigation-list-item primary-list-item has-dropdown"
              >
                <a
                  class="header-navigation-link primary-link"
                  href="https://meletrix.com/collections/zoom65"
                >
                  PRODUCTS
                </a>

                <a
                  class="icon icon-angle-down header-navigation-list-arrow"
                  data-dropdown-toggle=""
                  tabindex="0"
                  aria-controls="drawer-navigation-menu-2"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="show-for-sr"> Toggle Dropdown </span>
                </a>
                <ul
                  class="header-navigation-list secondary-list clearfix"
                  id="drawer-navigation-menu-2"
                  data-is-dropdown=""
                >
                  <li class="header-navigation-list-item secondary-list-item">
                    <a
                      class="header-navigation-link secondary-link"
                      href="https://meletrix.com/collections/zoom-tkl-essential-edition"
                    >
                      [GB] ZOOM TKL Essential Edition
                    </a>
                  </li>

                  <li class="header-navigation-list-item secondary-list-item">
                    <a
                      class="header-navigation-link secondary-link"
                      href="https://meletrix.com/collections/zoom65-essential-edition"
                    >
                      Zoom65 Essential Edition R2
                    </a>
                  </li>

                  <li class="header-navigation-list-item secondary-list-item">
                    <a
                      class="header-navigation-link secondary-link"
                      href="https://meletrix.com/collections/zoom65"
                    >
                      Zoom65 Olivia Edition Drop #2
                    </a>
                  </li>
                </ul>
              </li>

              <li class="header-navigation-list-item primary-list-item">
                <a
                  class="header-navigation-link primary-link"
                  href="https://meletrix.com/pages/vendors"
                >
                  VENDOR
                </a>
              </li>

              <li class="header-navigation-list-item primary-list-item">
                <a
                  class="header-navigation-link primary-link"
                  href="https://meletrix.com/pages/about-us"
                >
                  ABOUT US
                </a>
              </li>

              <li class="header-navigation-list-item primary-list-item">
                <a
                  class="header-navigation-link primary-link"
                  href="https://meletrix.com/pages/contact"
                >
                  CONTACT US
                </a>
              </li>

              <li class="header-navigation-list-item primary-list-item">
                <a
                  class="header-navigation-link primary-link"
                  href="https://discord.gg/2n2ns354wc"
                  target="_blank"
                >
                  DISCORD
                </a>
              </li>

              <li class="header-navigation-list-item primary-list-item">
                <a
                  class="header-navigation-link primary-link"
                  href="https://meletrix.com/pages/zoom65-user-manual"
                >
                  Zoom65 Guide
                </a>
              </li>
            </ul>
          </nav>

          <div class="coin-container"></div>

          <a
            href="https://meletrix.com/account"
            class="drawer-account-link button"
            >My Account</a
          >
        </div>
      </div>
      <el-main> <RouterView /></el-main>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
@import "./assets/theme.scss.css"; /*引入公共样式*/
</style>
