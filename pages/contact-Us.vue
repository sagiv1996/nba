<template lang="pug">
    v-form( name="contact" netlify data-netlify-honeypot='bot-field' action="/" method="post")
        v-text-field( v-model="email" name="email" )
</template>
<script>
export default {
    data:()=>({
        email: null
    })
}
</script>