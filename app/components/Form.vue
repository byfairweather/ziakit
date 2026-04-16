<template>
    <form class="form" @blur="submit" @change="submit" @input="submit">
        <slot />
    </form>
</template>

<script lang="ts">
import { validate, type ValidationIssues, type ValidationSchema } from "../utils/validation/validator";

export interface FormProps<T> {
    schema?: ValidationSchema<T>;
    labelLayout?: FormLabelLayout;
}

export interface FormInjection {
    labelLayout?: FormLabelLayout;
}

export type FormLabelLayout = "vertical" | "horizontal";
export const FormInjectionKey = Symbol() as InjectionKey<FormInjection>;
</script>

<script setup lang="ts" generic="T">
const { schema, labelLayout } = defineProps<FormProps<T>>();
const model = defineModel<T>();
const issues = defineModel<ValidationIssues<T>>("issues");

provide(FormInjectionKey, { labelLayout });

function submit() {
    if (!schema) return;

    issues.value = validate(model.value, schema);
}
</script>

<style lang="css">
.form {
    background-color: transparent;
}
</style>
