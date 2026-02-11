<template>
    <form class="zia-form" @blur="submit" @change="submit" @input="submit">
        <slot />
    </form>
</template>

<script lang="ts">
import { validate, type ValidationIssues, type ValidationSchema } from "../utils/validation/validator";

export interface ZiaFormProps<T> {
    schema?: ValidationSchema<T>;
    labelLayout?: ZiaFormLabelLayout;
}

export interface ZiaFormInjection {
    labelLayout?: ZiaFormLabelLayout;
}

export type ZiaFormLabelLayout = "vertical" | "horizontal";
export const ZiaFormInjectionKey = Symbol() as InjectionKey<ZiaFormInjection>;
</script>

<script setup lang="ts" generic="T">
const { schema, labelLayout } = defineProps<ZiaFormProps<T>>();
const model = defineModel<T>();
const issues = defineModel<ValidationIssues<T>>("issues");

provide(ZiaFormInjectionKey, { labelLayout });

function submit() {
    if (!schema) return;

    issues.value = validate(model.value, schema);
}
</script>

<style lang="css">
.zia-form {
    background-color: transparent;
}
</style>
