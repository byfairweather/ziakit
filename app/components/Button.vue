<template>
    <button class="button" :class="[`color-${color}`, `variant-${variant}`]">
        <slot />
    </button>
</template>

<script lang="ts">
export interface ButtonProps {
    color?: "neutral" | "brand" | "success" | "warning" | "danger";
    variant?: "primary" | "secondary" | "tertiary";
}
</script>

<script setup lang="ts">
const { color = "neutral", variant = "primary" } = defineProps<ButtonProps>();
</script>

<style lang="css">
.button {
    --background-color: ;
    --border-color: ;
    --border-radius: var(--forms--border-radius);
    --border-style: solid;
    --border-width: var(--forms--border-width);
    --color: ;
    --padding: var(--forms--padding);
    --transition: var(--transitions--default);

    align-items: center;
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-style: var(--border-style);
    border-radius: var(--border-radius);
    border-width: var(--border-width);
    box-sizing: border-box;
    color: var(--color);
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    padding: var(--padding);
    transition: var(--transition);
    user-select: none;
    white-space: nowrap;

    &:disabled {
        opacity: 0.5;
    }

    &.color-neutral {
        &.variant-primary {
            --background-color: light-dark(var(--colors--neutral-0), var(--colors--neutral-10));
            --border-color: transparent;
            --color: light-dark(var(--colors--neutral-white), var(--colors--neutral-black));

            &:hover {
                --background-color: light-dark(var(--colors--neutral-1), var(--colors--neutral-9));
            }

            &:active {
                --background-color: light-dark(var(--colors--neutral-2), var(--colors--neutral-8));
            }
        }

        &.variant-secondary {
            --background-color: transparent;
            --border-color: light-dark(var(--colors--neutral-0), var(--colors--neutral-10));
            --color: light-dark(var(--colors--neutral-black), var(--colors--neutral-white));

            &:hover {
                --background-color: light-dark(var(--colors--neutral-10), var(--colors--neutral-0));
            }

            &:active {
                --background-color: light-dark(var(--colors--neutral-9), var(--colors--neutral-1));
            }
        }

        &.variant-tertiary {
            --background-color: transparent;
            --border-color: transparent;
            --color: light-dark(var(--colors--neutral-black), var(--colors--neutral-white));

            &:hover {
                --background-color: light-dark(var(--colors--neutral-10), var(--colors--neutral-0));
            }

            &:active {
                --background-color: light-dark(var(--colors--neutral-9), var(--colors--neutral-1));
            }
        }
    }

    &.color-brand {
        &.variant-primary {
            --background-color: light-dark(var(--colors--brand-5), var(--colors--brand-5));
            --border-color: transparent;
            --color: light-dark(var(--colors--neutral-white), var(--colors--neutral-black));

            &:hover {
                --background-color: light-dark(var(--colors--brand-4), var(--colors--brand-4));
            }

            &:active {
                --background-color: light-dark(var(--colors--brand-3), var(--colors--brand-3));
            }
        }

        &.variant-secondary {
            --background-color: transparent;
            --border-color: light-dark(var(--colors--brand-5), var(--colors--brand-5));
            --color: light-dark(var(--colors--brand-4), var(--colors--brand-6));

            &:hover {
                --background-color: light-dark(var(--colors--brand-10), var(--colors--brand-0));
                --color: light-dark(var(--colors--brand-3), var(--colors--brand-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--brand-9), var(--colors--brand-1));
                --color: light-dark(var(--colors--brand-2), var(--colors--brand-8));
            }
        }

        &.variant-tertiary {
            --background-color: transparent;
            --border-color: transparent;
            --color: light-dark(var(--colors--brand-4), var(--colors--brand-6));

            &:hover {
                --background-color: light-dark(var(--colors--brand-10), var(--colors--brand-0));
                --color: light-dark(var(--colors--brand-3), var(--colors--brand-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--brand-9), var(--colors--brand-1));
                --color: light-dark(var(--colors--brand-2), var(--colors--brand-8));
            }
        }
    }

    &.color-success {
        &.variant-primary {
            --background-color: light-dark(var(--colors--success-5), var(--colors--success-5));
            --border-color: transparent;
            --color: light-dark(var(--colors--neutral-white), var(--colors--neutral-black));

            &:hover {
                --background-color: light-dark(var(--colors--success-4), var(--colors--success-4));
            }

            &:active {
                --background-color: light-dark(var(--colors--success-3), var(--colors--success-3));
            }
        }

        &.variant-secondary {
            --background-color: transparent;
            --border-color: light-dark(var(--colors--success-5), var(--colors--success-5));
            --color: light-dark(var(--colors--success-4), var(--colors--success-6));

            &:hover {
                --background-color: light-dark(var(--colors--success-10), var(--colors--success-0));
                --color: light-dark(var(--colors--success-3), var(--colors--success-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--success-9), var(--colors--success-1));
                --color: light-dark(var(--colors--success-2), var(--colors--success-8));
            }
        }

        &.variant-tertiary {
            --background-color: transparent;
            --border-color: transparent;
            --color: light-dark(var(--colors--success-4), var(--colors--success-6));

            &:hover {
                --background-color: light-dark(var(--colors--success-10), var(--colors--success-0));
                --color: light-dark(var(--colors--success-3), var(--colors--success-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--success-9), var(--colors--success-1));
                --color: light-dark(var(--colors--success-2), var(--colors--success-8));
            }
        }
    }

    &.color-warning {
        &.variant-primary {
            --background-color: light-dark(var(--colors--warning-5), var(--colors--warning-5));
            --border-color: transparent;
            --color: light-dark(var(--colors--neutral-white), var(--colors--neutral-black));

            &:hover {
                --background-color: light-dark(var(--colors--warning-4), var(--colors--warning-4));
            }

            &:active {
                --background-color: light-dark(var(--colors--warning-3), var(--colors--warning-3));
            }
        }

        &.variant-secondary {
            --background-color: transparent;
            --border-color: light-dark(var(--colors--warning-5), var(--colors--warning-5));
            --color: light-dark(var(--colors--warning-4), var(--colors--warning-6));

            &:hover {
                --background-color: light-dark(var(--colors--warning-10), var(--colors--warning-0));
                --color: light-dark(var(--colors--warning-3), var(--colors--warning-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--warning-9), var(--colors--warning-1));
                --color: light-dark(var(--colors--warning-2), var(--colors--warning-8));
            }
        }

        &.variant-tertiary {
            --background-color: transparent;
            --border-color: transparent;
            --color: light-dark(var(--colors--warning-4), var(--colors--warning-6));

            &:hover {
                --background-color: light-dark(var(--colors--warning-10), var(--colors--warning-0));
                --color: light-dark(var(--colors--warning-3), var(--colors--warning-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--warning-9), var(--colors--warning-1));
                --color: light-dark(var(--colors--warning-2), var(--colors--warning-8));
            }
        }
    }

    &.color-danger {
        &.variant-primary {
            --background-color: light-dark(var(--colors--danger-5), var(--colors--danger-5));
            --border-color: transparent;
            --color: light-dark(var(--colors--neutral-white), var(--colors--neutral-black));

            &:hover {
                --background-color: light-dark(var(--colors--danger-4), var(--colors--danger-4));
            }

            &:active {
                --background-color: light-dark(var(--colors--danger-3), var(--colors--danger-3));
            }
        }

        &.variant-secondary {
            --background-color: transparent;
            --border-color: light-dark(var(--colors--danger-5), var(--colors--danger-5));
            --color: light-dark(var(--colors--danger-4), var(--colors--danger-6));

            &:hover {
                --background-color: light-dark(var(--colors--danger-10), var(--colors--danger-0));
                --color: light-dark(var(--colors--danger-3), var(--colors--danger-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--danger-9), var(--colors--danger-1));
                --color: light-dark(var(--colors--danger-2), var(--colors--danger-8));
            }
        }

        &.variant-tertiary {
            --background-color: transparent;
            --border-color: transparent;
            --color: light-dark(var(--colors--danger-4), var(--colors--danger-6));

            &:hover {
                --background-color: light-dark(var(--colors--danger-10), var(--colors--danger-0));
                --color: light-dark(var(--colors--danger-3), var(--colors--danger-7));
            }

            &:active {
                --background-color: light-dark(var(--colors--danger-9), var(--colors--danger-1));
                --color: light-dark(var(--colors--danger-2), var(--colors--danger-8));
            }
        }
    }
}
</style>
