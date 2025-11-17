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
    font-weight: 600;
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
        --button-background-color: var(--color-foreground-accent);
        --button-border-color: transparent;
        --button-color: var(--color-foreground-accent-inverted);

        &:hover {
            --button-background-color: var(--color-foreground-accent);
            --button-border-color: transparent;
            --button-color: var(--color-foreground-accent-inverted);
            opacity: 0.9;
        }

        &:active,
        &:focus {
            --button-background-color: var(--color-foreground-accent);
            --button-border-color: transparent;
            --button-color: var(--color-foreground-accent-inverted);
            opacity: 0.8;
        }
    }

    &.variant-secondary {
        --button-background-color: transparent;
        --button-border-color: var(--color-foreground-accent);
        --button-color: var(--color-foreground-accent);

        &:hover {
            --button-background-color: var(--color-background-accent);
            --button-border-color: var(--color-foreground-accent);
            --button-color: var(--color-background-accent-inverted);
        }

        &:active,
        &:focus {
            --button-background-color: var(--color-background-accent);
            --button-border-color: var(--color-foreground-accent);
            --button-color: var(--color-background-accent-inverted);
            opacity: 0.9;
        }
    }

    &.variant-tertiary {
        --button-background-color: transparent;
        --button-border-color: transparent;
        --button-color: var(--color-foreground-accent);

        &:hover {
            --button-background-color: var(--color-background-accent);
            --button-border-color: transparent;
            --button-color: var(--color-background-accent-inverted);
        }

        &:active,
        &:focus {
            --button-background-color: var(--color-background-accent);
            --button-border-color: transparent;
            --button-color: var(--color-background-accent-inverted);
            opacity: 0.9;
        }
    }
}
</style>
