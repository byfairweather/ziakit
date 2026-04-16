<template>
    <div class="button-group" :class="[`gap-${gap}`, `orientation-${orientation}`]">
        <slot />
    </div>
</template>

<script lang="ts">
export interface ButtonGroupProps {
    gap?: "collapsed" | "spaced" | "none";
    orientation?: "horizontal" | "vertical";
}
</script>

<script setup lang="ts">
const { gap = "collapsed", orientation = "horizontal" } = defineProps<ButtonGroupProps>();
</script>

<style lang="css">
.button-group {
    --gap: 10px;

    display: flex;

    &.orientation-horizontal {
        flex-direction: row;

        &.gap-collapsed {
            & > .button:not(:last-child) {
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
                margin-right: calc(var(--border-width) * -1);
            }

            & > .button:not(:first-child) {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }
        }

        &.gap-spaced {
            column-gap: var(--gap);
        }
    }

    &.orientation-vertical {
        flex-direction: column;

        &.gap-collapsed {
            & > .button:not(:last-child) {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                margin-bottom: calc(var(--border-width) * -1);
            }

            & > .button:not(:first-child) {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }

        &.gap-spaced {
            row-gap: var(--gap);
        }
    }
}
</style>
