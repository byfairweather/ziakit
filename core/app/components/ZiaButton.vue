<template>
    <button class="zia-button" :class="[`variant-${variant}`]" @mousedown.prevent>
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: "primary" | "secondary" | "tertiary";
}

withDefaults(defineProps<Props>(), { theme: "neutral", variant: "primary" });
</script>

<style lang="css">
.zia-button {
    --button-animation-duration-enter: var(--animation-duration-slow);
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
    white-space: nowrap;

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
        --button-background-color: var(--color-theme-stark-background-1);
        --button-border-color: transparent;
        --button-color: var(--color-theme-stark-foreground-1);

        &:hover {
            --button-background-color: var(--color-theme-stark-background-2);
            --button-border-color: transparent;
            --button-color: var(--color-theme-stark-foreground-2);
        }

        &:active {
            --button-background-color: var(--color-theme-stark-background-3);
            --button-border-color: transparent;
            --button-color: var(--color-theme-stark-foreground-3);
        }

        &:focus {
            /* TODO */
        }
    }

    &.variant-secondary {
        --button-background-color: transparent;
        --button-border-color: var(--color-theme-muted-foreground-1);
        --button-color: var(--color-theme-muted-foreground-1);

        &:hover {
            --button-background-color: var(--color-theme-muted-background-1);
            --button-border-color: var(--color-theme-muted-foreground-2);
            --button-color: var(--color-theme-muted-foreground-2);
        }

        &:active {
            --button-background-color: var(--color-theme-muted-background-2);
            --button-border-color: var(--color-theme-muted-foreground-3);
            --button-color: var(--color-theme-muted-foreground-3);
        }

        &:focus {
            /* TODO */
        }
    }

    &.variant-tertiary {
        --button-background-color: transparent;
        --button-border-color: transparent;
        --button-color: var(--color-theme-muted-foreground-1);

        &:hover {
            --button-background-color: var(--color-theme-muted-background-1);
            --button-border-color: transparent;
            --button-color: var(--color-theme-muted-foreground-2);
        }

        &:active {
            --button-background-color: var(--color-theme-muted-background-2);
            --button-border-color: transparent;
            --button-color: var(--color-theme-muted-foreground-3);
        }

        &:focus {
            /* TODO */
        }
    }
}
</style>
