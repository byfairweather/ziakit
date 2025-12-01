<template>
    <div class="zia-button-group" :class="[`orientation-${orientation}`, `gap-${gap}`]">
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    orientation?: "horizontal" | "vertical";
    gap?: "collapsed" | "spaced" | "none";
}

const { orientation = "horizontal", gap = "collapsed" } = defineProps<Props>();
</script>

<style lang="css">
.zia-button-group {
    --button-group-spaced-margin: 10px;

    display: flex;

    &.orientation-horizontal {
        flex-direction: row;

        &.gap-collapsed {
            & > .zia-button:first-child {
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
            }

            & > .zia-button:not(:first-child) {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }

            & > .zia-button:not(:last-child) {
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
                margin-right: calc(var(--button-border-width) * -1);
            }
        }

        &.gap-spaced {
            column-gap: var(--button-group-spaced-margin);
        }
    }

    &.orientation-vertical {
        flex-direction: column;
        height: 200px;

        &.gap-collapsed {
            & > .zia-button:first-child {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            & > .zia-button:not(:first-child) {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }

            & > .zia-button:not(:last-child) {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                margin-bottom: calc(var(--button-border-width) * -1);
            }
        }

        &.gap-spaced {
            row-gap: var(--button-group-spaced-margin);
        }
    }
}
</style>
