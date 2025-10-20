<template>
    <div class="zia-section" :class="[sticky && `sticky`, `padding-${padding}`]">
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    sticky?: boolean;
    padding?: "xl" | "lg" | "md" | "sm" | "xs" | "none";
}

withDefaults(defineProps<Props>(), { sticky: false, padding: "sm" });
</script>

<style lang="css">
.zia-section {
    --section-background-color: transparent;
    --section-padding-xs: 10px;
    --section-padding-sm: 15px;
    --section-padding-md: 20px;
    --section-padding-lg: 40px;
    --section-padding-xl: 60px;
    --section-width: clamp(300px, 1080px, 80%);

    background-color: var(--section-background-color);
    display: flex;
    justify-content: center;

    & > .content {
        width: var(--section-width);
    }

    &[class*="theme-"] {
        --section-background-color: var(--color-white);

        &.bold {
            --section-background-color: var(--color-theme-5);
        }
    }

    &.sticky {
        box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    &.padding-xs {
        padding: var(--section-padding-xs) 0;
    }

    &.padding-sm {
        padding: var(--section-padding-sm) 0;
    }

    &.padding-md {
        padding: var(--section-padding-md) 0;
    }

    &.padding-lg {
        padding: var(--section-padding-lg) 0;
    }

    &.padding-xl {
        padding: var(--section-padding-xl) 0;
    }
}
</style>
