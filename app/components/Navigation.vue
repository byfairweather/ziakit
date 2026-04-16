<template>
    <nav class="navigation">
        <div class="logo">
            <slot name="logo" />
        </div>
        <div class="menu">
            <div class="left">
                <slot name="left" />
            </div>
            <div class="right">
                <slot name="right" />
            </div>
        </div>
        <div class="mobile-menu">
            <slot name="mobile" />
            <Button
                class="toggle"
                ref="mobile-menu-toggle"
                variant="tertiary"
                @click="mobileMenuOpen = !mobileMenuOpen"
            >
                =
            </Button>

            <Popover
                v-model="mobileMenuOpen"
                :anchor="mobileMenuToggle"
                :position="{ vertical: 'below', horizontal: 'right' }"
            >
                <slot name="mobile-popover" />
            </Popover>
        </div>
    </nav>
</template>

<script setup lang="ts">
const mobileMenuToggle = useTemplateRef("mobile-menu-toggle");
const mobileMenuOpen = ref(false);
</script>

<style lang="css">
.navigation {
    --gap: 20px;

    align-items: center;
    column-gap: var(--gap);
    display: flex;

    & > .menu {
        display: flex;
        flex-grow: 1;

        & > .left {
            flex-grow: 1;
        }
    }

    & > .mobile-menu {
        display: none;
        flex-grow: 1;
        justify-content: flex-end;

        & > .toggle {
            margin-left: 12px;
        }
    }

    @media (max-width: 800px) {
        & > .mobile-menu {
            display: flex;
        }

        & > .menu {
            display: none;
        }
    }
}
</style>
