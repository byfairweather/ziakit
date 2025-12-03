<template>
    <div class="zia-input">
        <label v-if="label">{{ label }}</label>
        <input :placeholder />
        <p class="color-palette-danger" style="color: var(--color-foreground-accent)">Error message</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    type?: "text";
    placeholder?: string;
    label?: string;
}

const { type = "text", placeholder = "", label = "Label" } = defineProps<Props>();
const value = defineModel<string>();
</script>

<style lang="css">
.zia-input {
    --input--padding: var(--forms-control-padding);
    --input--background: var(--color-neutral-10);
    --input--border-radius: var(--forms-control-border-radius);
    --input--border-width: var(--forms-control-border-width);

    display: flex;
    flex-direction: column;

    input {
        background-color: var(--input--background);
        border: var(--input--border-width) solid var(--color-neutral-9);
        border-radius: var(--input--border-radius);
        padding: var(--input--padding);

        &:active,
        &:focus,
        &:focus-within {
            border-color: var(--color-neutral-5);
            outline: none;
        }
    }
}
</style>
