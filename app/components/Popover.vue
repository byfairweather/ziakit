<template>
    <Transition @before-enter="liftAnchor" @after-leave="dropAnchor">
        <div class="popover" v-if="open">
            <div
                class="content"
                ref="popover"
                :class="[`vertical-${finalPosition.vertical}`, `horizontal-${finalPosition.horizontal}`]"
                :style
            >
                <slot />
            </div>
            <div class="backdrop" :class="{ shade, blur }" @click="lightDismiss">
                <div v-if="dismiss == 'manual'">
                    <Button variant="tertiary" @click="manualDismiss">X</Button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
export interface PopoverProps {
    anchor?: ComponentPublicInstance | HTMLElement | null;
    shade?: boolean;
    blur?: boolean;
    dismiss?: "light" | "manual" | "none";
    position?: PopoverPosition;
}

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

type PopoverVerticalPosition = "above" | "top" | "center" | "fill" | "bottom" | "below";
type PopoverHorizontalPosition = "outside-left" | "left" | "center" | "fill" | "right" | "outside-right";
</script>

<script setup lang="ts">
import type { CSSProperties } from "vue";

const {
    anchor = null,
    shade = true,
    blur = true,
    position = { vertical: "below", horizontal: "left" },
    dismiss = "light",
} = defineProps<PopoverProps>();

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

function liftAnchor() {
    anchorElement.value.style.zIndex = "1000";
    anchorElement.value.style.position = "relative";
}
function dropAnchor() {
    anchorElement.value.style.zIndex = "";
    anchorElement.value.style.position = "";
}

function lightDismiss() {
    if (dismiss == "light") {
        open.value = false;
    }
}

function manualDismiss() {
    if (dismiss == "manual") {
        open.value = false;
    }
}

watchPostEffect(() => {
    if (dismiss === "light") {
        window.addEventListener("scroll", close);
        window.addEventListener("resize", close);
    } else {
        window.addEventListener("scroll", updatePosition);
        window.addEventListener("resize", updatePosition);
    }
});

onUnmounted(() => {
    if (dismiss === "light") {
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
.popover {
    --popover--background-color: light-dark(var(--colors--neutral-white), var(--colors--neutral-black));
    --popover--border: 1px solid light-dark(var(--colors--neutral-10), var(--colors--neutral-0));
    --popover--border-radius: var(--forms--border-radius);
    --popover--padding: 12px;
    --popover--gap: 10px;
    --popover--scale: 0.98;

    & > .content {
        background-color: var(--popover--background-color);
        border: var(--popover--border);
        border-radius: var(--popover--border-radius);
        overflow: scroll;
        padding: var(--popover--padding);
        position: fixed;
        z-index: 1000;

        &.vertical-above {
            margin-bottom: var(--popover--gap);
        }

        &.vertical-below {
            margin-top: var(--popover--gap);
        }

        &.horizontal-outside-left {
            margin-right: var(--popover--gap);
        }

        &.horizontal-outside-right {
            margin-left: var(--popover--gap);
        }
    }

    & > .backdrop {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 100;

        &.shade {
            background-color: rgba(0, 0, 0, 0.25);
        }

        &.blur {
            backdrop-filter: blur(3px);
        }
    }

    &.v-enter-active,
    &.v-leave-active {
        & > .content {
            transition: var(--transitions--default);
            transition-property: margin, opacity, transform;
        }

        & > .backdrop {
            transition: var(--transitions--default);
        }
    }

    &.v-enter-from,
    &.v-leave-to {
        & > .content {
            margin: 0;
            opacity: 0;
            transform: scale(var(--popover--scale));
        }

        & > .backdrop {
            backdrop-filter: blur(0);
            background-color: rgba(0, 0, 0, 0);
        }
    }
}
</style>
