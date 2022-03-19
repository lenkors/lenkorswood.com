<template>
    <div :class="params.class">
        {{params.title}} <slot />
    </div>
</template>
<script lang="ts">
export default {
    name: 'textWrapper',
    props: {
        params: {
            type: Object,
            default () {
                return {
                    class: '',
                    title: ''
                }
            }
        }
    }
}
</script>