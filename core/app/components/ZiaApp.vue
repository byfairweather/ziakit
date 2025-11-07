<template>
    <div class="zia-app palette-neutral theme-default">
        <slot />
    </div>
</template>

<style lang="css">
.zia-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    width: 100vw;
}
</style>
