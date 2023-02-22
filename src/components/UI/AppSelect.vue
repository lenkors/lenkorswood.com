<template>
    <div :class="`ui-select-container flex flex-col ${uiStyle} ${specialStyle}`" 
    v-on-click-outside="closeSelect">
        <label class="ui-select__label">
            {{label}}
        </label>
        <div class="ui-select__select-wrapper pb-[9px]">
            <div class="ui-select__select--button
            ui-select__select flex w-full relative cursor-pointer bg-white text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            @click="isOpen = !isOpen"
            v-if="!!showCurrentActive"
            >   
                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                <img v-if="isImg" v-lazy="{ src: `/images/${showCurrentActive[imgKey]}`, loading: '/images/flags/flag-empty.svg'}" :class="`${imgStyle} mr-[8px] transition-opacity`" :alt="showCurrentActive.iso2">
                </transition>
                <span class="flex items-center">{{ showCurrentActive[displayKey] }}</span>
            </div>
            <div class="ui-select__select--button ui-select__select flex w-full relative cursor-pointer bg-white text-left"
            @click="isOpen = !isOpen"
             v-else>
                {{ t(placeholder) }}
            </div>
            <div class="ui-select__select--options__wrapper">
                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                <div v-if="isOpen"
                :class="`ui-select__select--options-container ${dropdownStyle}
                absolute mt-1 max-h-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-w-[370px] w-full z-10`">
                    <div class="empty-option ui-select__select--option">
                        <div class="relative cursor-pointer select-none p-[12px] flex items-center">
                            {{ t(placeholder) }}
                        </div>
                    </div>
                    <div class="ui-select__select--option"
                    v-for="(item, index) in (itemList as any)"
                    v-bind:value="item[valueKey]"
                    :key="`${item[displayKey]}-${index}`"
                    @click="emitSelect(item)">
                        <div
                          :class="[
                            'relative cursor-pointer select-none p-[12px] flex items-center hover:bg-[#315efbb0]',
                          ]"
                        >
                            <transition
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <img v-if="isImg" v-lazy="{src:`/images/${item[imgKey]}`, loading: '/images/flags/flag-empty.svg'}" 
                                :class="`${imgStyle} mr-[8px] transition-opacity`" :alt="item?.iso2 ?? `image`">
                            </transition>
                            <span
                            class="block truncate flex items-center">{{item[displayKey]}}</span>
                        </div>
                    </div>
                </div>  
                </transition>
            </div>
        </div>
    </div>

</template> 
<script setup="{context, props}" lang="ts">
import { computed, ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { useI18n } from 'vue-i18n';

const selected = ref();
const isOpen = ref(false);

const { t } = useI18n();

const props = defineProps({
    modelValue: {
        type: [Number, String],
        default: () => 0
    },
    value: {
        type: [Number, String],
        default: () => 0
    },

    /**
     * есть ли в списке выборка иконка\картинка и тд
     */
    isImg: {
        type: Boolean,
        default: () => false
    },

    /**
     * Ключ по которому доступна иконка в объекте
     */
    imgKey: {
        type: String,
    },
    /**
     * Дополнительный класс для блока с картинкой
     */
    imgStyle: {
        type: String,
        default: () => 'w-[16px]'
    },
    /**
     * Принимает ссылку на локаль
     */
    placeholder: {
        type: String,
        default: () => 'I18N_1032'
    },
    label: {
        type: String
    },
    /**
     * Ключ отвечающий за показ выбранного элемента (так же элемента в списке)
     */
    displayKey: {
        type: String,
        default: () => 'name'
    },
    /**
     * Ключ отвечающий за value
     */
    valueKey: {
        type: String,
        default: () => 'id'
    },
    uiStyle: {
        type: String,
        default: () => 'contact'
    },
    itemList: {
        type: Array,
        default: () => [
            {title: 'Select Item'}
        ]
    },
    specialStyle: {
        type: String,
        default: () => ''
    },
    /**
     * Стиль выпадающего списка
     */
    dropdownStyle: {
        type: String,
        default: () => ''
    },
    /**
     * id или иное значение value (не может быть объектом) 
     * @important Ключ должен соответствовать полю valueKey
     */
    currentActive: {
        type: [Number, String],
        default: () => 0
    }
})

const closeSelect = () => {
    isOpen.value = false;
}

const emit = defineEmits(['update:modelValue', 'update:id'])

const emitSelect = (event:any) => {
    emit('update:modelValue', event[props.valueKey].toString())
    emit('update:id', event[props.valueKey].toString())
    selected.value = event;
    closeSelect()
}

/**
 * Ставит флаг "выбрано" для данных которые приходят до того как выбраны какие либо данные в самом select 
 */
const showCurrentActive = computed(() => {
    if (props.currentActive.toString() && !!!selected.value) {
        let foundedItem = props.itemList.find(el => el[props.valueKey] == props.currentActive);
        if (!!!foundedItem && !!props.value) return props.itemList.find(el => el[props.valueKey] == props.value);
        else return props.itemList[0]
    } else{ 
        return selected.value 
    }
})
</script>
<style scoped lang="scss">
    .ui-select {
        &__select {
            background-repeat: no-repeat !important;
            background-position-x: 98% !important;
            background-position-y: 7px !important;
            background-image: url('data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgMTAuNUwxMiAxNUw3LjUgMTAuNSIgc3Ryb2tlPSIjNkI3MjgwIiBzdHJva2Utd2lkdGg9IjEuMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K') !important ;
            -webkit-appearance: none;
        }

        &-container {
            &.contact {
                padding-bottom: 20px;
                .ui-select__label {
                    margin-bottom: 10px;
                    font-weight: 500;
                }
                .ui-select__select {
                    border-bottom: 1px solid #D1D5DB;
                    outline: none;
                    background: transparent;
                    
                }
            }

            &.auth {
                .ui-select__label {
                    margin-bottom: 8px;
                }
                .ui-select__select {
                    border: 1px solid #D1D5DB;
                    outline: none;
                    background: transparent;
                    padding: 10px 12px;
                    border-radius: 6px;
                    &--button {
                        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
                    }
                }
            }

            &.payouts {
                .ui-select__label {
                    margin-bottom: 0px;
                }
                .ui-select__select {
                    border: 1px solid #D1D5DB;
                    outline: none;
                    background: transparent;
                    padding: 8px 16px;
                    border-radius: 6px;
                }
            }
        }
    }
</style>