<template>
    <button class="zia-button" :class="[`variant-${variant}`, `color-${color}`]">
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: "primary" | "secondary" | "tertiary";
    color?: "neutral" | "brand" | "success" | "danger";
}

const { variant = "primary", color = "brand" } = defineProps<Props>();
</script>

<style lang="css">
.zia-button {
    --button--animation-duration-enter: var(--animation-duration-smooth);
    --button--animation-duration-exit: var(--animation-duration-smooth);
    --button--border-radius: var(--forms-control-border-radius);
    --button--border-width: var(--forms-control-border-width);
    --button--disabled-opacity: 30%;
    --button--height: var(--forms-control-height);
    --button--padding: var(--forms-control-padding);

    --button-primary-neutral-default--background-color: light-dark(var(--color-neutral-2), var(--color-neutral-8));
    --button-primary-neutral-default--border-color: transparent;
    --button-primary-neutral-default--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-neutral-hover--background-color: light-dark(var(--color-neutral-1), var(--color-neutral-9));
    --button-primary-neutral-hover--border-color: transparent;
    --button-primary-neutral-hover--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-neutral-active--background-color: light-dark(var(--color-neutral-0), var(--color-neutral-10));
    --button-primary-neutral-active--border-color: transparent;
    --button-primary-neutral-active--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));

    --button-primary-brand-default--background-color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --button-primary-brand-default--border-color: transparent;
    --button-primary-brand-default--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-brand-hover--background-color: light-dark(var(--color-brand-4), var(--color-brand-6));
    --button-primary-brand-hover--border-color: transparent;
    --button-primary-brand-hover--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-brand-active--background-color: light-dark(var(--color-brand-3), var(--color-brand-7));
    --button-primary-brand-active--border-color: transparent;
    --button-primary-brand-active--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));

    --button-primary-success-default--background-color: light-dark(var(--color-success-5), var(--color-success-5));
    --button-primary-success-default--border-color: transparent;
    --button-primary-success-default--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-success-hover--background-color: light-dark(var(--color-success-4), var(--color-success-6));
    --button-primary-success-hover--border-color: transparent;
    --button-primary-success-hover--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-success-active--background-color: light-dark(var(--color-success-3), var(--color-success-7));
    --button-primary-success-active--border-color: transparent;
    --button-primary-success-active--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));

    --button-primary-danger-default--background-color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --button-primary-danger-default--border-color: transparent;
    --button-primary-danger-default--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-danger-hover--background-color: light-dark(var(--color-danger-4), var(--color-danger-6));
    --button-primary-danger-hover--border-color: transparent;
    --button-primary-danger-hover--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));
    --button-primary-danger-active--background-color: light-dark(var(--color-danger-3), var(--color-danger-7));
    --button-primary-danger-active--border-color: transparent;
    --button-primary-danger-active--color: light-dark(var(--color-neutral-white), var(--color-neutral-black));

    --button-secondary-neutral-default--background-color: transparent;
    --button-secondary-neutral-default--border-color: light-dark(var(--color-neutral-5), var(--color-neutral-5));
    --button-secondary-neutral-default--color: light-dark(var(--color-neutral-2), var(--color-neutral-8));
    --button-secondary-neutral-hover--background-color: light-dark(var(--color-neutral-10), var(--color-neutral-0));
    --button-secondary-neutral-hover--border-color: light-dark(var(--color-neutral-2), var(--color-neutral-8));
    --button-secondary-neutral-hover--color: light-dark(var(--color-neutral-1), var(--color-neutral-9));
    --button-secondary-neutral-active--background-color: light-dark(var(--color-neutral-9), var(--color-neutral-1));
    --button-secondary-neutral-active--border-color: light-dark(var(--color-neutral-2), var(--color-neutral-8));
    --button-secondary-neutral-active--color: light-dark(var(--color-neutral-0), var(--color-neutral-10));

    --button-secondary-brand-default--background-color: transparent;
    --button-secondary-brand-default--border-color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --button-secondary-brand-default--color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --button-secondary-brand-hover--background-color: light-dark(var(--color-brand-10), var(--color-brand-0));
    --button-secondary-brand-hover--border-color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --button-secondary-brand-hover--color: light-dark(var(--color-brand-4), var(--color-brand-6));
    --button-secondary-brand-active--background-color: light-dark(var(--color-brand-9), var(--color-brand-1));
    --button-secondary-brand-active--border-color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --button-secondary-brand-active--color: light-dark(var(--color-brand-3), var(--color-brand-7));

    --button-secondary-success-default--background-color: transparent;
    --button-secondary-success-default--border-color: light-dark(var(--color-success-5), var(--color-success-5));
    --button-secondary-success-default--color: light-dark(var(--color-success-5), var(--color-success-5));
    --button-secondary-success-hover--background-color: light-dark(var(--color-success-10), var(--color-success-0));
    --button-secondary-success-hover--border-color: light-dark(var(--color-success-5), var(--color-success-5));
    --button-secondary-success-hover--color: light-dark(var(--color-success-4), var(--color-success-6));
    --button-secondary-success-active--background-color: light-dark(var(--color-success-9), var(--color-success-1));
    --button-secondary-success-active--border-color: light-dark(var(--color-success-5), var(--color-success-5));
    --button-secondary-success-active--color: light-dark(var(--color-success-3), var(--color-success-7));

    --button-secondary-danger-default--background-color: transparent;
    --button-secondary-danger-default--border-color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --button-secondary-danger-default--color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --button-secondary-danger-hover--background-color: light-dark(var(--color-danger-10), var(--color-danger-0));
    --button-secondary-danger-hover--border-color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --button-secondary-danger-hover--color: light-dark(var(--color-danger-4), var(--color-danger-6));
    --button-secondary-danger-active--background-color: light-dark(var(--color-danger-9), var(--color-danger-1));
    --button-secondary-danger-active--border-color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --button-secondary-danger-active--color: light-dark(var(--color-danger-3), var(--color-danger-7));

    --button-tertiary-neutral-default--background-color: transparent;
    --button-tertiary-neutral-default--border-color: transparent;
    --button-tertiary-neutral-default--color: light-dark(var(--color-neutral-2), var(--color-neutral-8));
    --button-tertiary-neutral-hover--background-color: light-dark(var(--color-neutral-10), var(--color-neutral-0));
    --button-tertiary-neutral-hover--border-color: transparent;
    --button-tertiary-neutral-hover--color: light-dark(var(--color-neutral-1), var(--color-neutral-9));
    --button-tertiary-neutral-active--background-color: light-dark(var(--color-neutral-9), var(--color-neutral-1));
    --button-tertiary-neutral-active--border-color: transparent;
    --button-tertiary-neutral-active--color: light-dark(var(--color-neutral-0), var(--color-neutral-10));

    --button-tertiary-brand-default--background-color: transparent;
    --button-tertiary-brand-default--border-color: transparent;
    --button-tertiary-brand-default--color: light-dark(var(--color-brand-5), var(--color-brand-5));
    --button-tertiary-brand-hover--background-color: light-dark(var(--color-brand-10), var(--color-brand-0));
    --button-tertiary-brand-hover--border-color: transparent;
    --button-tertiary-brand-hover--color: light-dark(var(--color-brand-4), var(--color-brand-6));
    --button-tertiary-brand-active--background-color: light-dark(var(--color-brand-9), var(--color-brand-1));
    --button-tertiary-brand-active--border-color: transparent;
    --button-tertiary-brand-active--color: light-dark(var(--color-brand-3), var(--color-brand-7));

    --button-tertiary-success-default--background-color: transparent;
    --button-tertiary-success-default--border-color: transparent;
    --button-tertiary-success-default--color: light-dark(var(--color-success-5), var(--color-success-5));
    --button-tertiary-success-hover--background-color: light-dark(var(--color-success-10), var(--color-success-0));
    --button-tertiary-success-hover--border-color: transparent;
    --button-tertiary-success-hover--color: light-dark(var(--color-success-4), var(--color-success-6));
    --button-tertiary-success-active--background-color: light-dark(var(--color-success-9), var(--color-success-1));
    --button-tertiary-success-active--border-color: transparent;
    --button-tertiary-success-active--color: light-dark(var(--color-success-3), var(--color-success-7));

    --button-tertiary-danger-default--background-color: transparent;
    --button-tertiary-danger-default--border-color: transparent;
    --button-tertiary-danger-default--color: light-dark(var(--color-danger-5), var(--color-danger-5));
    --button-tertiary-danger-hover--background-color: light-dark(var(--color-danger-10), var(--color-danger-0));
    --button-tertiary-danger-hover--border-color: transparent;
    --button-tertiary-danger-hover--color: light-dark(var(--color-danger-4), var(--color-danger-6));
    --button-tertiary-danger-active--background-color: light-dark(var(--color-danger-9), var(--color-danger-1));
    --button-tertiary-danger-active--border-color: transparent;
    --button-tertiary-danger-active--color: light-dark(var(--color-danger-3), var(--color-danger-7));

    align-items: center;
    border-radius: var(--button--border-radius);
    border-style: solid;
    border-width: var(--button--border-width);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    outline: none;
    padding: var(--button--padding);
    transition: all var(--button--animation-duration-exit) ease-in-out;
    user-select: none;
    white-space: nowrap;

    &:hover,
    &:active,
    &:focus-visible {
        transition: all var(--button--animation-duration-enter) ease-in-out;
    }

    &:disabled {
        opacity: var(--button--disabled-opacity);
        pointer-events: none;
    }

    &.variant-primary {
        &,
        &.color-neutral {
            background-color: var(--button-primary-neutral-default--background-color);
            border-color: var(--button-primary-neutral-default--border-color);
            color: var(--button-primary-neutral-default--color);

            &:hover {
                background-color: var(--button-primary-neutral-hover--background-color);
                border-color: var(--button-primary-neutral-hover--border-color);
                color: var(--button-primary-neutral-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-primary-neutral-active--background-color);
                border-color: var(--button-primary-neutral-active--border-color);
                color: var(--button-primary-neutral-active--color);
            }
        }

        &.color-brand {
            background-color: var(--button-primary-brand-default--background-color);
            border-color: var(--button-primary-brand-default--border-color);
            color: var(--button-primary-brand-default--color);

            &:hover {
                background-color: var(--button-primary-brand-hover--background-color);
                border-color: var(--button-primary-brand-hover--border-color);
                color: var(--button-primary-brand-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-primary-brand-active--background-color);
                border-color: var(--button-primary-brand-active--border-color);
                color: var(--button-primary-brand-active--color);
            }
        }

        &.color-success {
            background-color: var(--button-primary-success-default--background-color);
            border-color: var(--button-primary-success-default--border-color);
            color: var(--button-primary-success-default--color);

            &:hover {
                background-color: var(--button-primary-success-hover--background-color);
                border-color: var(--button-primary-success-hover--border-color);
                color: var(--button-primary-success-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-primary-success-active--background-color);
                border-color: var(--button-primary-success-active--border-color);
                color: var(--button-primary-success-active--color);
            }
        }

        &.color-danger {
            background-color: var(--button-primary-danger-default--background-color);
            border-color: var(--button-primary-danger-default--border-color);
            color: var(--button-primary-danger-default--color);

            &:hover {
                background-color: var(--button-primary-danger-hover--background-color);
                border-color: var(--button-primary-danger-hover--border-color);
                color: var(--button-primary-danger-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-primary-danger-active--background-color);
                border-color: var(--button-primary-danger-active--border-color);
                color: var(--button-primary-danger-active--color);
            }
        }
    }

    &.variant-secondary {
        &,
        &.color-neutral {
            background-color: var(--button-secondary-neutral-default--background-color);
            border-color: var(--button-secondary-neutral-default--border-color);
            color: var(--button-secondary-neutral-default--color);

            &:hover {
                background-color: var(--button-secondary-neutral-hover--background-color);
                border-color: var(--button-secondary-neutral-hover--border-color);
                color: var(--button-secondary-neutral-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-secondary-neutral-active--background-color);
                border-color: var(--button-secondary-neutral-active--border-color);
                color: var(--button-secondary-neutral-active--color);
            }
        }

        &.color-brand {
            background-color: var(--button-secondary-brand-default--background-color);
            border-color: var(--button-secondary-brand-default--border-color);
            color: var(--button-secondary-brand-default--color);

            &:hover {
                background-color: var(--button-secondary-brand-hover--background-color);
                border-color: var(--button-secondary-brand-hover--border-color);
                color: var(--button-secondary-brand-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-secondary-brand-active--background-color);
                border-color: var(--button-secondary-brand-active--border-color);
                color: var(--button-secondary-brand-active--color);
            }
        }

        &.color-success {
            background-color: var(--button-secondary-success-default--background-color);
            border-color: var(--button-secondary-success-default--border-color);
            color: var(--button-secondary-success-default--color);

            &:hover {
                background-color: var(--button-secondary-success-hover--background-color);
                border-color: var(--button-secondary-success-hover--border-color);
                color: var(--button-secondary-success-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-secondary-success-active--background-color);
                border-color: var(--button-secondary-success-active--border-color);
                color: var(--button-secondary-success-active--color);
            }
        }

        &.color-danger {
            background-color: var(--button-secondary-danger-default--background-color);
            border-color: var(--button-secondary-danger-default--border-color);
            color: var(--button-secondary-danger-default--color);

            &:hover {
                background-color: var(--button-secondary-danger-hover--background-color);
                border-color: var(--button-secondary-danger-hover--border-color);
                color: var(--button-secondary-danger-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-secondary-danger-active--background-color);
                border-color: var(--button-secondary-danger-active--border-color);
                color: var(--button-secondary-danger-active--color);
            }
        }
    }

    &.variant-tertiary {
        &,
        &.color-neutral {
            background-color: var(--button-tertiary-neutral-default--background-color);
            border-color: var(--button-tertiary-neutral-default--border-color);
            color: var(--button-tertiary-neutral-default--color);

            &:hover {
                background-color: var(--button-tertiary-neutral-hover--background-color);
                border-color: var(--button-tertiary-neutral-hover--border-color);
                color: var(--button-tertiary-neutral-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-tertiary-neutral-active--background-color);
                border-color: var(--button-tertiary-neutral-active--border-color);
                color: var(--button-tertiary-neutral-active--color);
            }
        }

        &.color-brand {
            background-color: var(--button-tertiary-brand-default--background-color);
            border-color: var(--button-tertiary-brand-default--border-color);
            color: var(--button-tertiary-brand-default--color);

            &:hover {
                background-color: var(--button-tertiary-brand-hover--background-color);
                border-color: var(--button-tertiary-brand-hover--border-color);
                color: var(--button-tertiary-brand-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-tertiary-brand-active--background-color);
                border-color: var(--button-tertiary-brand-active--border-color);
                color: var(--button-tertiary-brand-active--color);
            }
        }

        &.color-success {
            background-color: var(--button-tertiary-success-default--background-color);
            border-color: var(--button-tertiary-success-default--border-color);
            color: var(--button-tertiary-success-default--color);

            &:hover {
                background-color: var(--button-tertiary-success-hover--background-color);
                border-color: var(--button-tertiary-success-hover--border-color);
                color: var(--button-tertiary-success-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-tertiary-success-active--background-color);
                border-color: var(--button-tertiary-success-active--border-color);
                color: var(--button-tertiary-success-active--color);
            }
        }

        &.color-danger {
            background-color: var(--button-tertiary-danger-default--background-color);
            border-color: var(--button-tertiary-danger-default--border-color);
            color: var(--button-tertiary-danger-default--color);

            &:hover {
                background-color: var(--button-tertiary-danger-hover--background-color);
                border-color: var(--button-tertiary-danger-hover--border-color);
                color: var(--button-tertiary-danger-hover--color);
            }
            &:active,
            &:focus-visible {
                background-color: var(--button-tertiary-danger-active--background-color);
                border-color: var(--button-tertiary-danger-active--border-color);
                color: var(--button-tertiary-danger-active--color);
            }
        }
    }
}
</style>
