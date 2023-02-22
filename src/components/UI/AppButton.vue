<template>
    <div class="app-button__wrapper">
        <component 
        :class="`app-button flex justify-center items-center w-full ${size}`"
        v-bind="$attrs"
        :is="tag"
        v-on="$attrs">
            <div class="app-button--title">
                <slot name="title"></slot>
            </div>
        </component>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    tag: {
        type: String,
        default: 'button',
    },

    size: {
        type: String,
        default: 'normal'
    },

    /**
     * Как параметр принимает цвет в виде hex для текста
     */
    color: {
        type: String,
        default: ''
    },

    /**
     * как параметр принимает цвет в формате hex который указывает цвет заднего фона 
     */
    styleColor: {
        type: String,
        default: ''
    }
})
</script>
<style scoped lang="scss">
    .app-button {
        &.normal {
            
        }
    }
</style>