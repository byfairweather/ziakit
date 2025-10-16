<template>
    <button class="zia-button" :class="[`theme-${theme}`, `variant-${variant}`]" @mousedown.prevent>
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    theme?: "neutral" | "primary" | "success" | "warning" | "danger" | string;
    variant?: "primary" | "secondary" | "tertiary" | string;
}

withDefaults(defineProps<Props>(), { theme: "neutral", variant: "primary" });
</script>

<style lang="css">
.zia-button {
    --button-animation-duration-enter: var(--animation-duration-fast);
    --button-animation-duration-exit: var(--animation-duration-slow);
    --button-background-color: unset;
    --button-border-radius: var(--forms-control-border-radius);
    --button-border-color: unset;
    --button-border-width: var(--forms-control-border-width);
    --button-color: unset;
    --button-disabled-opacity: 30%;
    --button-height: var(--forms-control-height);
    --button-horizontal-padding: var(--forms-control-horizontal-padding);

    align-items: center;
    background-color: var(--button-background-color);
    border-color: var(--button-border-color);
    border-radius: var(--button-border-radius);
    border-style: solid;
    border-width: var(--button-border-width);
    box-sizing: border-box;
    color: var(--button-color);
    cursor: pointer;
    display: flex;
    height: var(--button-height);
    justify-content: center;
    outline: none;
    padding: 0 var(--button-horizontal-padding);
    transition: all var(--button-animation-duration-exit) ease-in-out;

    &:hover,
    &:active,
    &:focus {
        transition: all var(--button-animation-duration-enter) ease-in-out;
    }

    &:disabled {
        opacity: var(--button-disabled-opacity);
        pointer-events: none;
    }

    &.variant-primary {
        --button-background-color: var(--color-theme-5);
        --button-border-color: transparent;
        --button-color: var(--color-white);

        &:hover {
            --button-background-color: var(--color-theme-6);
            --button-border-color: transparent;
            --button-color: var(--color-white);
        }

        &:active {
            --button-background-color: var(--color-theme-7);
            --button-border-color: transparent;
            --button-color: var(--color-white);
        }

        &:focus {
            --button-background-color: var(--color-theme-6);
            --button-border-color: var(--color-theme-7);
            --button-color: var(--color-white);
        }
    }

    &.variant-secondary {
        --button-background-color: transparent;
        --button-border-color: var(--color-theme-5);
        --button-color: var(--color-theme-5);

        &:hover {
            --button-background-color: transparent;
            --button-border-color: var(--color-theme-6);
            --button-color: var(--color-theme-6);
        }

        &:active {
            --button-background-color: var(--color-theme-0);
            --button-border-color: var(--color-theme-7);
            --button-color: var(--color-theme-7);
        }

        &:focus {
            --button-background-color: var(--color-theme-0);
            --button-border-color: var(--color-theme-6);
            --button-color: var(--color-theme-6);
        }
    }

    &.variant-tertiary {
        --button-background-color: transparent;
        --button-border-color: transparent;
        --button-color: var(--color-theme-5);

        &:hover {
            --button-background-color: transparent;
            --button-border-color: transparent;
            --button-color: var(--color-theme-7);
        }

        &:active {
            --button-background-color: var(--color-theme-0);
            --button-border-color: transparent;
            --button-color: var(--color-theme-7);
        }

        &:focus {
            --button-background-color: var(--color-theme-0);
            --button-border-color: var(--color-theme-6);
            --button-color: var(--color-theme-6);
        }
    }
}
</style>
