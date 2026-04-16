<template>
    <nav class="navigation" :class="{ 'mobile-menu': mobileMenu }">
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
        <div class="menu-mobile">
            <Button ref="mobile-menu-toggle" variant="tertiary" @click="mobileMenuOpen = !mobileMenuOpen"> = </Button>
            <Popover
                v-model="mobileMenuOpen"
                :anchor="mobileMenuToggle"
                :position="{ vertical: 'below', horizontal: 'right' }"
            >
                <slot name="mobile" />
            </Popover>
        </div>
    </nav>
</template>

<script lang="ts">
export interface NavigationProps {
    mobileMenu?: boolean;
}
</script>

<script setup lang="ts">
const { mobileMenu = true } = defineProps<NavigationProps>();
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

    & > .menu-mobile {
        display: none;
        flex-grow: 1;
        justify-content: flex-end;
    }
}

@media (max-width: 800px) {
    .navigation.menu-mobile {
        & > .menu-mobile {
            display: flex;
        }

        & > .menu {
            display: none;
        }
    }
}
</style>
