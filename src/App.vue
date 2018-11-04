<template>
  <div id="app">
    <loading
      :show="showLoading"
      :text="loadingText"
    />
    <router-view/>
  </div>
</template>
<script>
    import Loading      from '@/components/Loading';
    import { mapState } from 'vuex';

    export default {
        components: {
            Loading,
        },
        data () {
            return {};
        },
        computed: {
            ...mapState({
                showLoading: state => state.showLoading,
                loadingText: state => state.text,
            }),
        },
        mounted () {

        },
        methods: {}
    };
</script>
<style lang="less">
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #121212;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  *:not(input,textarea) {
    user-select: none;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    line-height: 1;
    background-color: #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif
  }

  html, body, div, span, iframe,
  h1, h2, h3, h4, h5, h6,
  p, a, big, em, img, i,
  dl, dt, dd,
  ol, ul, li,
  form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  ul,
  ol {
    list-style: none;
  }

  input,
  textarea,
  select {
    border: 0;
    outline: none;
    background: #fff;
  }

  textarea {
    resize: none;
  }

  em,
  i {
    font-style: normal;
  }

  a img {
    border: 0
  }

  a {
    background: transparent;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  a:active {
    outline: 0;
  }

  button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input::-webkit-input-placeholder,
  select::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #999;
    font-size: 18px;
  }

  input.black-placeholder::-webkit-input-placeholder {
    color: #121212;
    font-size: 18px;
  }

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
    -webkit-appearance: none;
  }
</style>
