<template>
    <div class="zia-section" :class="{ sticky: props.sticky }">
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    sticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), { sticky: false });
</script>

<style lang="css">
.zia-section {
    --section-background-color: transparent;
    --section-width: clamp(300px, 1080px, 80%);

    background-color: var(--section-background-color);
    display: flex;
    justify-content: center;

    > .content {
        width: var(--section-width);
    }

    &[class*="theme-"] {
        --section-background-color: var(--color-theme-1);

        &.bold {
            --section-background-color: var(--color-theme-5);
        }
    }

    &.sticky {
        position: sticky;
        top: 0;
    }
}
</style>
