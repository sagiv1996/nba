<template lang="pug">
    v-card( hover max-width="500" )
        v-card-title form to contact
        v-card-text 
            v-form( name="contact" netlify data-netlify-honeypot='bot-field' action="/" method="post")
                v-text-field( v-model="email" name="email" )
        v-card-actions
            v-btn( type="submit"  ) submit
                
        
    

</template>
<script>
export default {
    data:()=>({
        email: null
    })
}
</script>