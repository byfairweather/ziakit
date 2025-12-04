<template>
    <div class="zia-input" :class="{ error: !!error }">
        <div v-if="hasPrefix" class="prefix">
            <slot name="prefix" />
        </div>
        <input v-model="value" :placeholder :type />
        <div v-if="hasSuffix" class="suffix">
            <slot name="suffix" />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    type?: "text" | "password" | "number";
    placeholder?: string;
}

const { type = "text", placeholder = "" } = defineProps<Props>();

const value = defineModel<string>();
const error = ref<string>();

const hasPrefix = computed(() => {
    const slots = useSlots();
    return !!slots.prefix;
});

const hasSuffix = computed(() => {
    const slots = useSlots();
    return !!slots.suffix;
});
</script>

<style lang="css">
.zia-input {
    --input--background: transparent;
    --input--border-radius: var(--form-control--border-radius);
    --input--border-width: var(--form-control--border-width);
    --input--outline-width: var(--form-control--outline-width);
    --input--padding: var(--form-control--padding);

    --input-default--background: transparent;
    --input-default--border-color: light-dark(var(--color-neutral-5), var(--color-neutral-5));
    --input-default--color: light-dark(var(--color-neutral-0), var(--color-neutral-10));

    --input-hover--background: transparent;
    --input-hover--border-color: light-dark(var(--color-neutral-0), var(--color-neutral-10));
    --input-hover--color: light-dark(var(--color-neutral-0), var(--color-neutral-10));

    --input-active--background: transparent;
    --input-active--border-color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --input-active--color: light-dark(var(--color-neutral-0), var(--color-neutral-10));
    --input-active--outline-color: light-dark(var(--color-brand-5), var(--color-brand-5));

    --input-error--background: light-dark(var(--color-danger-10), var(--color-danger-0));
    --input-error--border-color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --input-error--color: light-dark(var(--color-danger-5), var(--color-neutral-5));

    background-color: var(--input-default--background);
    border: var(--input--border-width) solid var(--input-default--border-color);
    border-radius: var(--input--border-radius);
    color: var(--input-default--color);
    display: flex;
    overflow: hidden;

    & > input {
        background-color: transparent;
        border: none;
        color: inherit;
        flex: 1 0 0;
        outline: none;
        padding: var(--input--padding);
        width: 100%;
    }

    & > .prefix {
        padding: var(--input--padding);
        padding-right: 0;
    }

    & > .suffix {
        padding: var(--input--padding);
        padding-left: 0;
    }

    &:hover {
        background-color: var(--input-hover--background);
        border-color: var(--input-hover--border-color);
        color: var(--input-hover--color);
    }

    &:active,
    &:focus-within {
        background-color: var(--input-active--background);
        border-color: var(--input-active--border-color);
        color: var(--input-active--color);
        outline: 1px solid var(--input-active--outline-color);
    }

    &.error {
        background-color: var(--input-error--background);
        border-color: var(--input-error--border-color);
        color: var(--input-error--color);
    }
}
</style>
