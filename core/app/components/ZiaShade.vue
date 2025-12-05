<template>
    <Transition>
        <div v-if="open" class="zia-shade" @click="dismiss">
            <slot />
        </div>
    </Transition>
</template>

<script setup lang="ts">
const open = defineModel<boolean>();
interface Props {
    lightDismiss?: boolean;
}

const { lightDismiss = true } = defineProps<Props>();

function dismiss() {
    if (lightDismiss) {
        open.value = false;
    }
}
</script>

<style lang="css">
.zia-shade {
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.25);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition:
        opacity 300ms ease,
        backdrop-filter 300ms ease;
    z-index: 100;

    &.v-enter-from,
    &.v-leave-to {
        backdrop-filter: blur(0);
        opacity: 0;
    }
}
</style>