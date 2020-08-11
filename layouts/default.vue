<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
@font-face {font-family: "Calibre Web";
  src: url("/assets/fonts/4a0c1d6164df2c0aa88da1437cd38ef1.eot"); /* IE9*/
  src: url("/assets/fonts/4a0c1d6164df2c0aa88da1437cd38ef1.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("/assets/fonts/4a0c1d6164df2c0aa88da1437cd38ef1.woff2") format("woff2"), /* chrome、firefox */
  url("/assets/fonts/4a0c1d6164df2c0aa88da1437cd38ef1.woff") format("woff"), /* chrome、firefox */
  url("/assets/fonts/4a0c1d6164df2c0aa88da1437cd38ef1.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("/assets/fonts/4a0c1d6164df2c0aa88da1437cd38ef1.svg#Calibre Web") format("svg"); /* iOS 4.1- */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Calibre Web', sans-serif;
}

input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

body {
  background: #F5F9FC;
  padding-bottom: 150px;
}

</style>
