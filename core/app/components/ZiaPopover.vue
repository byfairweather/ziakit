<template>
    <Transition>
        <div
            v-if="open"
            ref="popover"
            class="zia-popover"
            :class="[`vertical-${finalPosition.vertical}`, `horizontal-${finalPosition.horizontal}`]"
            :style
        >
            <slot />
        </div>
    </Transition>
    <ZiaShade v-if="shade" v-model="open" :light-dismiss />
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

type PopoverVerticalPosition = "above" | "top" | "center" | "fill" | "bottom" | "below";
type PopoverHorizontalPosition = "outside-left" | "left" | "center" | "fill" | "right" | "outside-right";

export interface PopoverPosition {
    vertical: PopoverVerticalPosition;
    horizontal: PopoverHorizontalPosition;
    fallback?: {
        vertical: PopoverVerticalPosition;
        horizontal: PopoverHorizontalPosition;
        minHeight: number;
        minWidth: number;
    };
}

interface Props {
    anchor?: ComponentPublicInstance | HTMLElement | null;
    shade?: boolean;
    lightDismiss?: boolean;
    position?: PopoverPosition;
}

const {
    anchor = null,
    shade = true,
    lightDismiss = true,
    position = { vertical: "below", horizontal: "left" },
} = defineProps<Props>();
const open = defineModel<boolean>();
const popover = useTemplateRef("popover");
const finalPosition = ref({ ...position });
const style = ref<CSSProperties>({});
const padding = 50;
const anchorElement = computed(() => {
    if (!anchor) return document.body;
    return anchor instanceof HTMLElement ? anchor : (anchor.$el as HTMLElement);
});

watch(() => [open.value, anchor, position], updatePosition, { flush: "post", deep: true });

watchPostEffect(() => {
    if (open.value == true) {
        anchorElement.value.style.zIndex = "1000";
        anchorElement.value.style.position = "relative";
    } else {
        anchorElement.value.style.zIndex = "";
        anchorElement.value.style.position = "";
    }
});

watchPostEffect(() => {
    if (lightDismiss == true) {
        window.addEventListener("scroll", close);
        window.addEventListener("resize", close);
    } else {
        window.addEventListener("scroll", updatePosition);
        window.addEventListener("resize", updatePosition);
    }
});

onUnmounted(() => {
    if (lightDismiss == true) {
        window.removeEventListener("scroll", close);
        window.removeEventListener("resize", close);
    } else {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
    }
});

function close(): void {
    open.value = false;
}

function calculateMaxHeight(position: PopoverVerticalPosition): number {
    if (!anchor) return 0;
    const anchorRect = anchorElement.value.getBoundingClientRect();

    switch (position) {
        case "above":
            return anchorRect.top - padding;
        case "top":
            return window.innerHeight - anchorRect.top - padding;
        case "center":
            return Math.min(
                (window.innerHeight - anchorRect.top - padding) * 2,
                (anchorRect.bottom - anchorRect.height / 2 - padding) * 2,
            );
        case "fill":
            return anchorRect.height;
        case "bottom":
            return anchorRect.bottom - padding;
        case "below":
            return window.innerHeight - anchorRect.bottom - padding;
    }
}

function calculateMaxWidth(position: PopoverHorizontalPosition): number {
    if (!anchor) return 0;
    const anchorRect = anchorElement.value.getBoundingClientRect();

    switch (position) {
        case "outside-left":
            return anchorRect.left - padding;
        case "left":
            return window.innerWidth - anchorRect.left - padding;
        case "center":
            return Math.min(
                (window.innerWidth - anchorRect.left - padding) * 2,
                (anchorRect.right - anchorRect.width / 2 - padding) * 2,
            );
        case "fill":
            return anchorRect.width;
        case "right":
            return anchorRect.right - padding;
        case "outside-right":
            return window.innerWidth - anchorRect.right - padding;
    }
}

function updatePosition() {
    if (anchor == null || popover.value == null) return;
    const anchorRect = anchorElement.value.getBoundingClientRect();
    const popoverRect = popover.value.getBoundingClientRect();
    style.value = {};

    finalPosition.value.vertical =
        position.fallback && position.fallback.minHeight > calculateMaxHeight(position.vertical)
            ? position.fallback.vertical
            : position.vertical;

    finalPosition.value.horizontal =
        position.fallback && position.fallback.minWidth > calculateMaxWidth(position.horizontal)
            ? position.fallback.horizontal
            : position.horizontal;

    switch (finalPosition.value.vertical) {
        case "above":
            style.value.bottom = window.innerHeight - anchorRect.top + "px";
            style.value.maxHeight = calculateMaxHeight("above") + "px";
            break;
        case "top":
            style.value.top = anchorRect.top + "px";
            style.value.maxHeight = calculateMaxHeight("top") + "px";
            break;
        case "center":
            style.value.top =
                anchorRect.top -
                (Math.min(calculateMaxHeight("center"), popoverRect.height) - anchorRect.height) / 2 +
                "px";
            style.value.maxHeight = calculateMaxHeight("center") + "px";
            break;
        case "fill":
            style.value.top = anchorRect.top + "px";
            style.value.height = anchorRect.height + "px";
            break;
        case "bottom":
            style.value.bottom = window.innerHeight - anchorRect.bottom + "px";
            style.value.maxHeight = calculateMaxHeight("bottom") + "px";
            break;
        case "below":
            style.value.top = anchorRect.top + anchorRect.height + "px";
            style.value.maxHeight = calculateMaxHeight("below") + "px";
            break;
    }

    switch (finalPosition.value.horizontal) {
        case "outside-left":
            style.value.right = window.innerWidth - anchorRect.left + "px";
            style.value.maxWidth = calculateMaxWidth("outside-left") + "px";
            break;
        case "left":
            style.value.left = anchorRect.left + "px";
            style.value.maxWidth = calculateMaxWidth("left") + "px";
            break;
        case "center":
            style.value.left =
                anchorRect.left -
                (Math.min(calculateMaxWidth("center"), popoverRect.width) - anchorRect.width) / 2 +
                "px";
            style.value.maxWidth = calculateMaxWidth("center") + "px";
            break;
        case "fill":
            style.value.left = anchorRect.left + "px";
            style.value.width = anchorRect.width + "px";
            break;
        case "right":
            style.value.right = window.innerWidth - anchorRect.right + "px";
            style.value.maxWidth = calculateMaxWidth("right") + "px";
            break;
        case "outside-right":
            style.value.left = anchorRect.left + anchorRect.width + "px";
            style.value.maxWidth = calculateMaxWidth("outside-right") + "px";
            break;
    }
}
</script>

<style lang="css">
.zia-popover {
    --popover-background-color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --popover-border-radius: var(--forms-control-border-radius);
    --popover-gap: 10px;
    --popover-scale: 0.98;

    background-color: var(--popover-background-color);
    border: 1px solid light-dark(var(--color-neutral-10), var(--color-neutral-0));
    border-radius: var(--popover-border-radius);
    overflow: scroll;
    padding: 12px;
    position: fixed;
    text-align: center;
    z-index: 1000;

    &.vertical-above {
        margin-bottom: var(--popover-gap);
    }

    &.vertical-below {
        margin-top: var(--popover-gap);
    }

    &.horizontal-outside-left {
        margin-right: var(--popover-gap);
    }

    &.horizontal-outside-right {
        margin-left: var(--popover-gap);
    }

    &.v-enter-active,
    &.v-leave-active {
        transition:
            margin 300ms ease,
            opacity 160ms ease,
            transform 300ms ease;
    }

    &.v-enter-from,
    &.v-leave-to {
        margin: 0;
        opacity: 0;

        &.vertical-top,
        &.vertical-bottom,
        &.vertical-center,
        &.horizontal-left,
        &.horizontal-right,
        &.horizontal-center {
            transform: scale(var(--popover-scale));
        }
    }
}
</style>
