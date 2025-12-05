<template>
    <div class="zia-form-field" :class="{ error: !!error }">
        <span class="label">{{ label }}</span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    label?: string;
}

const { label = "text" } = defineProps<Props>();
const error = ref<string>();
</script>

<style lang="css">
.zia-form-field {
    display: flex;
    flex-direction: column;
}
</style>