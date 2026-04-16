<template>
    <div class="input">
        <label :for="id">{{ label }}</label>
        <div class="input">
            <input :id="id" v-model="model" :placeholder :type />
            <div v-if="hasSuffix" class="suffix">
                {{ suffix }}
                <slot name="suffix" />
            </div>
        </div>
        <span v-if="error">{{ error }}</span>
    </div>
</template>

<script lang="ts">
export interface InputProps {
    label?: string;
    type?: InputType;
    placeholder?: string;
    suffix?: string;
    required?: boolean;
    formatter?: (value: string) => undefined;
    validator?: () => string | undefined;
}

export type InputType = "text" | "password" | "number" | "date" | "datetime" | "time" | "search" | "select";
</script>

<script setup lang="ts">
const id = useId();
const error = ref<string>();

const { type = "text", placeholder, suffix } = defineProps<InputProps>();
const model = defineModel<string>();

const hasSuffix = computed(() => {
    const slots = useSlots();
    return !!slots.suffix || !!suffix;
});
</script>

<style lang="css">
.input {
    --input--background: transparent;
    --input--border-radius: var(--form-control--border-radius);
    --input--border-width: var(--form-control--border-width);
    --input--outline-width: var(--form-control--outline-width);
    --input--padding: var(--form-control--padding);

    --input-default--background: transparent;
    --input-default--border-color: light-dark(var(--colors--neutral-5), var(--colors--neutral-5));
    --input-default--color: light-dark(var(--colors--neutral-0), var(--colors--neutral-10));

    --input-hover--background: transparent;
    --input-hover--border-color: light-dark(var(--colors--neutral-0), var(--colors--neutral-10));
    --input-hover--color: light-dark(var(--colors--neutral-0), var(--colors--neutral-10));

    --input-active--background: transparent;
    --input-active--border-color: light-dark(var(--colors--brand-5), var(--colors--brand-5));
    --input-active--color: light-dark(var(--colors--neutral-0), var(--colors--neutral-10));
    --input-active--outline-color: light-dark(var(--colors--brand-5), var(--colors--brand-5));

    --input-error--background: light-dark(var(--colors--danger-10), var(--colors--danger-0));
    --input-error--border-color: light-dark(var(--colors--danger-5), var(--colors--danger-5));
    --input-error--color: light-dark(var(--colors--danger-5), var(--colors--neutral-5));

    & > .input {
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
}
</style>
