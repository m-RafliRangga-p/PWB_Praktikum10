<template>
    <div>
      <h1>Welcome to {{ profile.name }}</h1>
      <p>{{ profile.description }}</p>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      name: 'HomeComponent',
      data() {
        return {
          profile: {}
        }
      },
      created() {
        axios
          .get('http://localhost:3000/profile')
          .then((response) => {
            this.profile = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
</script>
    