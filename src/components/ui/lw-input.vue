<template>
    <div class="lw__ui-input">
        <label class="lw__ui-input-label" :for="key">{{label}}</label>
        <input 
        class="lw__ui-input-field"
        v-bind:value="value"
        v-bind="$attrs"
        v-on:input="updateValue($event.target.value)"
        v-bind:type="type" 
        :id="key">
    </div>
</template>
<script>
export default {
    props: {
        key: {
            required: false,
            type: String
        },
        type: {
            type: String
        },
        latin:{
            type: Boolean,
            required: false
        },
        value: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            default: false
        },
        label: {
            type: String
        }
    },
    data: () => ({
        
    }),
    methods: {
        updateValue: function (value) {
        // this.validateField();
        // console.log(value)
        if (value !== undefined || typeof value !== 'undefined') this.$emit('input', value)
      },
    }
}
</script>
<style lang="scss">
    
</style>