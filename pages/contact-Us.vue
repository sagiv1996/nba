<template lang="pug">
v-card(elevation="14")
  v-card-title.justify-center form to contact
  v-card-text.align-center 
    v-form(
      lazy-validation,
      ref="form",
      data-netlify="true",
      name="contact",
      method="POST",
      data-netlify-honeypot="bot-field",
      @submit.prevent="handleSubmit"
    )
      v-text-field(
        v-model="form.email",
        name="contact",
        clearable,
        :rules="[emptyRules, emailRules, counterRules(25, form.email)]",
        required,
        label="email field",
        autofocus,
        counter="25",
        filled,
        hint="for exmple: john@gmail.com",
        shaped,
        type="email",
        prepend-icon="mdi-email-check-outline",
        outlined,
        validate-on-blur,
        value="email"
      )
      v-textarea(
        v-model="form.text",
        clearable,
        rows="1",
        auto-grow,
        :rules="[emptyRules, counterRules(255, form.text)]",
        required,
        label="test field",
        counter="255",
        hint="the body messege.",
        filled,
        shaped,
        outlined,
        prepend-icon="mdi-message-text-outline mdi-flip-h",
        name="text",
        ref="e",
        value="text"
      )
    v-divider 
  v-card-actions
    v-btn(@click="restForm") rest the form
    v-spacer 
    v-btn(@click="handleSubmit", type="submit") submit the form
</template>
<script>
export default {
  data: () => ({
    form: {
      email: null,
      text: null,
    },

    emptyRules: (v) => !!v || "Field is required",
    emailRules: (v) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "E-mail must be valid",
  }),
  methods: {
    counterRules(maxChart, value) {
      return value && value.length <= maxChart
        ? true
        : `the max charter this field is ${maxChart}`;
    },
    restForm() {
      this.$refs.form.reset();
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() =>
          this.$swal(
            "we got your messege",
            `we back to ${this.form.email} mail`,
            'success'
          )
        )
        .catch((error) => this.$swal("error", error, 'error'));
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
  },
};
</script>