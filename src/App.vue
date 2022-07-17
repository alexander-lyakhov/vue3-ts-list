<template>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  -->
  <header>
    <h1>
      <span>Vue feature list</span>
    </h1>
    <nav class="nav">
    </nav>
  </header>
</template>

<script lang="ts">

import '@/styles/reset.css'
import '@/styles/global.scss'

import { defineComponent } from 'vue'
import headerNav from '@/components/header-nav.vue'
import { pages } from '@/defs/index.ts'

interface Page {
  title: string,
  value: string,
  description: string,
}

export default defineComponent({
  name: 'App',

  components: {
    headerNav,
  },

  data: () => ({
    selectedPageIndex: null,
    pages: pages as Page[]
  }),
})
</script>

<style lang="scss">
header {
  color: $fc-header;
  background: $bg-header;
  border-bottom: 1px solid lighten($bg-header, 16%);
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    span {
      color: $fc-header;
      padding: .5rem;
    }
  }

  .nav {
    background: darken($bg-header, 6%);
    display: flex;
    justify-content: center;
    height: 32px;
    position: relative;
  }

  .steps {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;

    li {
      color: darken($grey-02, 12%);
      text-align: center;
      line-height: 2rem;
      margin: 0 1px;
      padding: 0 1rem;
      position: relative;
      cursor: pointer;

      &:not(:last-child):after {
        content: '/';
        color: $grey-03;
        position: absolute;
        right: -4px;
      }

      &.selected {
        color: $accent-01;
      }
    }
  }
}
</style>
