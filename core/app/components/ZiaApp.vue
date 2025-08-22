<template>
    <div class="zia-app">
        <slot />
    </div>
</template>

<style lang="css">
.zia-app {
    background-color: red;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    width: 100vw;
}
</style>
