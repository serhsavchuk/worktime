<template>
  <div>
    <main class="main">
      <div class="content">
        <div class="site-logo">
          <div  class="title-container">
            <h1 class="mx-2 mb-2 title">Worktime</h1>
          </div>
        </div>
        <div class="content-sheets">
          <IndexCounterWidget class="mx-2 my-3 counter-widget" />
          <IndexHoursLog class="mx-2 my-3" />
        </div>
      </div>
    </main>
    <div class="footer py-3">
      <h4 class="text-center text-muted">{{ $t('serhii-savchuk') }} | {{ new Date().getFullYear() }}</h4>
      <div class="locales">
        <NuxtLink to="/" class="mx-2">укр</NuxtLink> | <NuxtLink to="/en/" class="mx-2">en</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
    font-family: sans-serif;  
  }
  .main {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
  .content {
    width: 100%;
    max-width: 1440px;
    padding: 10px 25px;
  }
  .text-center {
    text-align: center;
  }
  .fs-18 {
    font-size: 18px;
  }
  .fw-500 {
    font-weight: 500;
  }
  .w-100 {
    width: 100%;
  }
  .text-muted {
    color: $muted-color;
  }
  .content-sheets {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .mx-2 {
    margin-left: 10px;
    margin-right: 10px;
  }
  .mb-2 {
    margin-bottom: 10px;
  }
  .my-3 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .py-3 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .main {
    .site-logo {
      display: flex;
      justify-content: flex-start;
      background-color: $green-color;
      width: fit-content;
      .title-container {
        .title {
          color: $light-color;
          padding: 5px 10px;
          margin-bottom: 0;
        }
      }
    }
  }
  .main, .footer {
    background-color: $soft-white;
  }
  .locales {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: $muted-color;
  }
</style>
