<template>
  <div class="hello">
    <h1>{{ dump }}</h1>
  </div>
</template>

<script>
import { fireDB } from '../main';

export default {
  name: 'Playground',
  data() {
    return {
      dump: []
    };
  },

  firestore() {
    return {
      dump: fireDB.collection('dump')
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
