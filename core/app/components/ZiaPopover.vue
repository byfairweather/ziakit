<template>
    <Transition>
        <div
            v-if="open"
            ref="popover"
            class="zia-popover"
            :class="[`vertical-${position.vertical}`, `horizontal-${position.horizontal}`]"
            :style="{ top: top + 'px', left: left + 'px' }"
        >
            <slot />
        </div>
    </Transition>
</template>

<script setup lang="ts">
interface Props {
    anchor?: ComponentPublicInstance | HTMLElement | null;
    open: boolean;
    position?: {
        vertical: "above" | "top" | "center" | "bottom" | "below";
        horizontal: "outside-left" | "left" | "center" | "right" | "outside-right";
    };
}

const { anchor = undefined, open, position = { vertical: "below", horizontal: "outside-left" } } = defineProps<Props>();

const popover = useTemplateRef("popover");
const top = ref(0);
const left = ref(0);

watchEffect(updatePosition);

onMounted(() => {
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
});

function updatePosition() {
    if (anchor == null || popover.value == null) return;
    const anchorElement = anchor instanceof HTMLElement ? anchor : (anchor.$el as HTMLElement);
    const anchorRect = anchorElement.getBoundingClientRect();
    const popoverRect = popover.value.getBoundingClientRect();

    switch (position.vertical) {
        case "above":
            top.value = anchorRect.top - popoverRect.height;
            break;
        case "top":
            top.value = anchorRect.top;
            break;
        case "center":
            top.value = anchorRect.top + (anchorRect.height - popoverRect.height) / 2;
            break;
        case "bottom":
            top.value = anchorRect.top + anchorRect.height - popoverRect.height;
            break;
        case "below":
            top.value = anchorRect.top + anchorRect.height;
            break;
    }

    switch (position.horizontal) {
        case "outside-left":
            left.value = anchorRect.left - popoverRect.width;
            break;
        case "left":
            left.value = anchorRect.left;
            break;
        case "center":
            left.value = anchorRect.left + (anchorRect.width - popoverRect.width) / 2;
            break;
        case "right":
            left.value = anchorRect.left + anchorRect.width - popoverRect.width;
            break;
        case "outside-right":
            left.value = anchorRect.left + anchorRect.width;
            break;
    }
}
</script>

<style lang="css">
.zia-popover {
    --popover-background-color: var(--color-background);
    --popover-border-radius: var(--forms-control-border-radius);

    background-color: var(--popover-background-color);
    border: 1px solid var(--color-midground);
    border-radius: var(--popover-border-radius);
    box-shadow: 0 0 14px light-dark(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
    padding: 12px;
    position: fixed;

    &.vertical-above {
        margin-top: -10px;
    }

    &.vertical-below {
        margin-top: 10px;
    }

    &.horizontal-outside-left {
        margin-left: -10px;
    }

    &.horizontal-outside-right {
        margin-left: 10px;
    }

    &.v-enter-active,
    &.v-leave-active {
        transition:
            margin 300ms ease,
            opacity 160ms ease;
    }

    &.v-enter-from,
    &.v-leave-to {
        margin: 0;
        opacity: 0;
    }
}
</style>
