<template>
    <div class="zia-form-field">
        <label :for="id">{{ label }}</label>
        <slot />
        <span v-if="error">{{ error }}</span>
    </div>
</template>

<script lang="ts">
export interface ZiaFormFieldProps {
    label?: string;
    error?: string;
}

export interface ZiaFormFieldInjection {
    id: string;
}

export const ZiaFormFieldInjectionKey = Symbol() as InjectionKey<ZiaFormFieldInjection>;
</script>

<script setup lang="ts" generic="T">
import { ZiaFormInjectionKey } from "./ZiaForm.vue";

const { label, error } = defineProps<ZiaFormFieldProps>();
const id = useId();

const form = inject(ZiaFormInjectionKey);

provide(ZiaFormFieldInjectionKey, {
    id: id,
});
</script>

<style lang="css">
.zia-form-field {
    background-color: transparent;
}
</style>
