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
            <ZiaButton ref="mobile-menu-button" variant="tertiary" @click="mobileMenuOpen = !mobileMenuOpen">= </ZiaButton
                > 
            <ZiaPopover v-model="mobileMenuOpen" :anchor="mobileMenuButton"
                :position="{ vertical: 'below', horizontal: 'right' }">
                <slot name="mobile" />
            </ZiaPopover> 
        </div>
    </nav>
</template>

<script setup lang="ts">
const mobileMenuButton = useTemplateRef("mobile-menu-button");
const mobileMenuOpen = ref(false);
</script>

<style lang="css">
.zia-navigation {
    align-items: center;
    column-gap: 20px;
    display: flex;

    &>.logo {}

    &>.items {
        display: flex;
        flex-grow: 1;

        &>.left {
            flex-grow: 1;
        }

        &>.right {}
    }

    &>.items-collapsed {
        display: none;
        flex-grow: 1;
        justify-content: flex-end;

        &>.popover {
            display: none;
        }
    }
}

@media (max-width: 800px) {
    .zia-navigation {
        &>.items-collapsed {
            display: flex;
        }

        &>.items {
            display: none;
        }
    }
}
</style>