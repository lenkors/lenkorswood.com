<template>
    <div :class="`app-input__container ${uiStyle}`">
        <div class="app-input--label mb-[5px]">{{label}}</div>
        <div class="app-input--input__wrapper">
            <input
                :class="{['app-input p-[9px] w-full']: true, 'is-error': errors.length}"
                :type="handlerShowPassword"
                :value="modelValue"
                v-bind="$attrs"
                :placeholder="placeholder"
                @input="emitInput"
            >
        </div>
    </div>
</template>
<script setup="{props}" lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: String
    },
    placeholder: {
        type: String
    },
    label: {
        type: String
    },
    uiStyle: {
        type: String,
        default: () => 'contact'
    },
    type: {
        type: String,
        default: () => 'text'
    },
    specialStyle: {
        type: String,
        default: () => ''
    },
    errors: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['update:modelValue'])

const emitInput = (event:any) => emit('update:modelValue', event.target.value) 

const isShowPassword = ref(false)

const toggleShowPassword = () => {
    isShowPassword.value = !isShowPassword.value
};

const handlerShowPassword = computed(() => {
    if (props.type == 'password') {
        return isShowPassword.value ? 'text' : 'password';
    }
    return props.type
})

</script>

<style scoped lang="scss">
    .app-input {
        outline: none;
        &__container {
            &.auth {
                .app-input--label {
                    font-size: 14px;
                    line-height: 22px;
                    font-weight: 600;
                }
                .app-input {
                    &--input__wrapper {
                        border: 1px solid #ececec;
                        border-radius: 3px;
                        margin-block-end: 8px;
                    }
                }
            }
        }
        
    }
</style>