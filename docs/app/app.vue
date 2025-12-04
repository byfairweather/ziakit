<template>
    <ZiaApp :class="[`color-mode-${scheme}`]">
        <ZiaSection :sticky="true" padding="sm">
            <ZiaNavigation>
                <template #logo>
                    <ZiaButton variant="tertiary" color="neutral">Logo</ZiaButton>
                </template>
                <template #left>
                    <ZiaButtonGroup gap="spaced">
                        <ZiaButton variant="tertiary">Products</ZiaButton>
                        <ZiaButton variant="tertiary">News</ZiaButton>
                        <ZiaButton variant="tertiary">Blog</ZiaButton>
                        <ZiaButton variant="tertiary">Contact</ZiaButton>
                        <ZiaButton
                            variant="tertiary"
                            @click="
                                () => {
                                    console.log('wow');
                                }
                            "
                            >About Us</ZiaButton
                        >
                    </ZiaButtonGroup>
                </template>
                <template #right>
                    <ZiaButtonGroup gap="spaced">
                        <ZiaButton variant="tertiary">Cart</ZiaButton>
                        <ZiaButton variant="primary">Sign In</ZiaButton>
                    </ZiaButtonGroup>
                </template>
                <template #mobile>
                    <ZiaButtonGroup gap="spaced" orientation="vertical">
                        <ZiaButton variant="tertiary">Products</ZiaButton>
                        <ZiaButton variant="tertiary">News</ZiaButton>
                        <ZiaButton variant="tertiary">Blog</ZiaButton>
                        <ZiaButton variant="tertiary">Contact</ZiaButton>
                        <ZiaButton variant="tertiary">About Us</ZiaButton>
                    </ZiaButtonGroup>
                </template>
            </ZiaNavigation>
        </ZiaSection>
        <ZiaSection>
            <h2>Color</h2>
            <table class="palette" style="width: 100%; text-align: center">
                <tr>
                    <th>Neutral</th>
                    <td style="background-color: var(--color-neutral-0)">0</td>
                    <td style="background-color: var(--color-neutral-1)">1</td>
                    <td style="background-color: var(--color-neutral-2)">2</td>
                    <td style="background-color: var(--color-neutral-3)">3</td>
                    <td style="background-color: var(--color-neutral-4)">4</td>
                    <td style="background-color: var(--color-neutral-5)">5</td>
                    <td style="background-color: var(--color-neutral-6)">6</td>
                    <td style="background-color: var(--color-neutral-7)">7</td>
                    <td style="background-color: var(--color-neutral-8)">8</td>
                    <td style="background-color: var(--color-neutral-9)">9</td>
                    <td style="background-color: var(--color-neutral-10)">10</td>
                </tr>
                <tr>
                    <th>Primary</th>
                    <td style="background-color: var(--color-brand-0)">0</td>
                    <td style="background-color: var(--color-brand-1)">1</td>
                    <td style="background-color: var(--color-brand-2)">2</td>
                    <td style="background-color: var(--color-brand-3)">3</td>
                    <td style="background-color: var(--color-brand-4)">4</td>
                    <td style="background-color: var(--color-brand-5)">5</td>
                    <td style="background-color: var(--color-brand-6)">6</td>
                    <td style="background-color: var(--color-brand-7)">7</td>
                    <td style="background-color: var(--color-brand-8)">8</td>
                    <td style="background-color: var(--color-brand-9)">9</td>
                    <td style="background-color: var(--color-brand-10)">10</td>
                </tr>
                <tr>
                    <th>Success</th>
                    <td style="background-color: var(--color-success-0)">0</td>
                    <td style="background-color: var(--color-success-1)">1</td>
                    <td style="background-color: var(--color-success-2)">2</td>
                    <td style="background-color: var(--color-success-3)">3</td>
                    <td style="background-color: var(--color-success-4)">4</td>
                    <td style="background-color: var(--color-success-5)">5</td>
                    <td style="background-color: var(--color-success-6)">6</td>
                    <td style="background-color: var(--color-success-7)">7</td>
                    <td style="background-color: var(--color-success-8)">8</td>
                    <td style="background-color: var(--color-success-9)">9</td>
                    <td style="background-color: var(--color-success-10)">10</td>
                </tr>
                <tr>
                    <th>Danger</th>
                    <td style="background-color: var(--color-danger-0)">0</td>
                    <td style="background-color: var(--color-danger-1)">1</td>
                    <td style="background-color: var(--color-danger-2)">2</td>
                    <td style="background-color: var(--color-danger-3)">3</td>
                    <td style="background-color: var(--color-danger-4)">4</td>
                    <td style="background-color: var(--color-danger-5)">5</td>
                    <td style="background-color: var(--color-danger-6)">6</td>
                    <td style="background-color: var(--color-danger-7)">7</td>
                    <td style="background-color: var(--color-danger-8)">8</td>
                    <td style="background-color: var(--color-danger-9)">9</td>
                    <td style="background-color: var(--color-danger-10)">10</td>
                </tr>
            </table>
        </ZiaSection>
        <ZiaSection>
            <h1>Color Mode</h1>
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton :variant="scheme == 'dark' ? 'primary' : 'secondary'" @click="scheme = 'dark'"
                    >Dark</ZiaButton
                >
                <ZiaButton :variant="scheme == 'light' ? 'primary' : 'secondary'" @click="scheme = 'light'"
                    >Light</ZiaButton
                >
            </ZiaButtonGroup>
        </ZiaSection>
        <ZiaSection>
            <h1>Buttons</h1>
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary" color="neutral">Primary</ZiaButton>
                <ZiaButton variant="secondary" color="neutral">Secondary</ZiaButton>
                <ZiaButton variant="tertiary" color="neutral">Tertiary</ZiaButton>
                <ZiaButton variant="primary" color="danger">Override</ZiaButton>
            </ZiaButtonGroup>
            <br /><br />
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary" color="brand">Primary</ZiaButton>
                <ZiaButton variant="secondary" color="brand">Secondary</ZiaButton>
                <ZiaButton variant="tertiary" color="brand">Tertiary</ZiaButton>
                <ZiaButton variant="primary" color="danger">Override</ZiaButton>
            </ZiaButtonGroup>
            <br /><br />
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary" color="success">Primary</ZiaButton>
                <ZiaButton variant="secondary" color="success">Secondary</ZiaButton>
                <ZiaButton variant="tertiary" color="success">Tertiary</ZiaButton>
                <ZiaButton variant="primary" color="danger">Override</ZiaButton>
            </ZiaButtonGroup>
            <br /><br />
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary" color="danger">Primary</ZiaButton>
                <ZiaButton variant="secondary" color="danger">Secondary</ZiaButton>
                <ZiaButton variant="tertiary" color="danger">Tertiary</ZiaButton>
                <ZiaButton variant="primary" color="danger">Override</ZiaButton>
            </ZiaButtonGroup>
            <br /><br />
        </ZiaSection>
        <ZiaSection>
            <h1>Popovers</h1>
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton
                    :variant="popoverPosition.vertical == 'above' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'above'"
                    >Above</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.vertical == 'top' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'top'"
                    >Top</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.vertical == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'center'"
                    >Center</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.vertical == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'fill'"
                    >Fill</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.vertical == 'bottom' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'bottom'"
                    >Bottom</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.vertical == 'below' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'below'"
                    >Below</ZiaButton
                >
            </ZiaButtonGroup>
            <ZiaButtonGroup v-if="popoverPosition.fallback" orientation="horizontal">
                <ZiaButton
                    :variant="popoverPosition.fallback.vertical == 'above' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'above'"
                    >Above</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.vertical == 'top' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'top'"
                    >Top</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.vertical == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'center'"
                    >Center</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.vertical == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'fill'"
                    >Fill</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.vertical == 'bottom' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'bottom'"
                    >Bottom</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.vertical == 'below' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'below'"
                    >Below</ZiaButton
                >
            </ZiaButtonGroup>
            <br />
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton
                    :variant="popoverPosition.horizontal == 'outside-left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'outside-left'"
                    >Outside Left</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.horizontal == 'left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'left'"
                    >Left</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.horizontal == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'center'"
                    >Center</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.horizontal == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'fill'"
                    >Fill</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.horizontal == 'right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'right'"
                    >Right</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.horizontal == 'outside-right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'outside-right'"
                    >Outside Right</ZiaButton
                >
            </ZiaButtonGroup>
            <ZiaButtonGroup v-if="popoverPosition.fallback" orientation="horizontal">
                <ZiaButton
                    :variant="popoverPosition.fallback.horizontal == 'outside-left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'outside-left'"
                    >Outside Left</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.horizontal == 'left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'left'"
                    >Left</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.horizontal == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'center'"
                    >Center</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.horizontal == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'fill'"
                    >Fill</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.horizontal == 'right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'right'"
                    >Right</ZiaButton
                >
                <ZiaButton
                    :variant="popoverPosition.fallback.horizontal == 'outside-right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'outside-right'"
                    >Outside Right</ZiaButton
                >
            </ZiaButtonGroup>
            <br /><br />
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton :variant="popoverShade == true ? 'primary' : 'secondary'" @click="popoverShade = true"
                    >Shade</ZiaButton
                >
                <ZiaButton :variant="popoverShade == false ? 'primary' : 'secondary'" @click="popoverShade = false"
                    >No Shade</ZiaButton
                >
            </ZiaButtonGroup>
            <br /><br />
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton :variant="popoverDismiss == true ? 'primary' : 'secondary'" @click="popoverDismiss = true"
                    >Light Dismiss</ZiaButton
                >
                <ZiaButton :variant="popoverDismiss == false ? 'primary' : 'secondary'" @click="popoverDismiss = false"
                    >Hard Dismiss</ZiaButton
                >
            </ZiaButtonGroup>
            <br /><br />
            <ZiaButton ref="popoverButton" @click="popoverOpen = !popoverOpen">Toggle Popover</ZiaButton>
            <ZiaPopover
                v-model="popoverOpen"
                :anchor="popoverButton"
                :shade="popoverShade"
                :position="popoverPosition"
                :light-dismiss="popoverDismiss"
            >
                <h1>Heading 1</h1>
            </ZiaPopover>
            <br /><br />
        </ZiaSection>
        <ZiaSection>
            <h1>Input</h1>
            <ZiaInput placeholder="Text" style="width: 200px" /><br /><br />
            <ZiaInput placeholder="Password" type="password" style="width: 200px" /><br /><br />
            <ZiaInput placeholder="Password" type="password" style="width: 200px">
                <template #prefix>$</template>
            </ZiaInput>
            <br /><br />
            <ZiaInput type="number" style="width: 200px">
                <template #suffix>ft</template>
            </ZiaInput>
            <br /><br />
            <ZiaInput type="text" style="width: 200px">
                <template #prefix>$</template>
                <template #suffix>.00</template>
            </ZiaInput>
            <br /><br />
        </ZiaSection>
        <ZiaSection>
            <h1>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio.
            </h1>
            <h2>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio.
            </h2>
            <h3>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio.
            </h3>
            <h1>Heading 1</h1>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <h2>Heading 2</h2>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <h3>Heading 3</h3>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <h1>Title</h1>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <h2>First Section</h2>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <h2>Second Section</h2>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <p>
                Cras accumsan accumsan est vel sodales. Praesent id odio nec orci accumsan consequat. Mauris nec blandit
                risus, quis viverra odio. Aliquam eu dignissim eros. Nunc vitae elementum lorem.
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Cras accumsan accumsan est vel sodales.</li>
                <li>Praesent id odio nec orci accumsan consequat.</li>
                <li>Mauris nec blandit risus, quis viverra odio.</li>
                <li>liquam eu dignissim eros.</li>
            </ul>
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Cras accumsan accumsan est vel sodales.</li>
                <li>Praesent id odio nec orci accumsan consequat.</li>
                <li>Mauris nec blandit risus, quis viverra odio.</li>
                <li>liquam eu dignissim eros.</li>
            </ol>
        </ZiaSection>
    </ZiaApp>
</template>

<script setup lang="ts">
import type { PopoverPosition } from "../../core/app/components/ZiaPopover.vue";

useHead({
    title: "ZiaKit",
    meta: [{ name: "description", content: "Nuxt UI Toolkit" }],
});

const scheme = ref("light");
const popoverButton = useTemplateRef("popoverButton");
const popoverOpen = ref(false);
const popoverShade = ref(false);
const popoverDismiss = ref(false);
const popoverPosition = ref<PopoverPosition>({
    vertical: "below",
    horizontal: "left",
    fallback: {
        vertical: "above",
        horizontal: "right",
        minHeight: 200,
        minWidth: 200,
    },
});
</script>

<style lang="css">
.palette {
    border-spacing: 0 5px;

    th {
        text-align: left;
    }

    tr {
        td {
            color: var(--color-neutral-10);
            font-weight: bold;
            width: calc(100% / 11);
        }

        td:nth-child(n + 8) {
            color: var(--color-neutral-0);
        }
    }
}

.colors {
    width: 100%;

    th {
        text-align: left;
    }
}
</style>
