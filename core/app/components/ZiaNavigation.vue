<template>
    <nav class="zia-navigation">
        <div class="logo">
            <slot name="logo" />
        </div>
        <div class="items">
            <div class="left">
                <slot name="left" />
            </div>
            <div class="right">
                <slot name="right" />
            </div>
        </div>
        <div class="items-collapsed">
            <ZiaButton variant="tertiary">=</ZiaButton>
            <div class="popover">
                <!-- TODO -->
                <slot name="mobile" />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
interface Props {
    sticky?: boolean;
}
withDefaults(defineProps<Props>(), { sticky: false });
</script>

<style lang="css">
.zia-navigation {
    align-items: center;
    column-gap: 20px;
    display: flex;

    & > .logo {
    }

    & > .items {
        display: flex;
        flex-grow: 1;
        opacity: 1;
        overflow-x: scroll;

        & > .left {
            flex-grow: 1;
        }

        & > .right {
        }
    }

    & > .items-collapsed {
        display: none;
        flex-grow: 1;
        justify-content: flex-end;

        & > .popover {
            display: none;
        }
    }

    &.loading {
        & > .items {
            opacity: 0;
        }
    }
}

@media (max-width: 1200px) {
    .zia-navigation {
        & > .items-collapsed {
            display: flex;
        }

        & > .items {
            display: none;
        }
    }
}
</style>
