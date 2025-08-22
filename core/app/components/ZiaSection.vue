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
    --width: clamp(300px, 1080px, 80%);

    display: flex;
    justify-content: center;

    > .content {
        width: var(--width);
    }

    &.sticky {
        position: sticky;
        top: 0;
    }
}
</style>
