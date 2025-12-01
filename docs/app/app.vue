<template>
    <ZiaApp :class="[`color-mode-${scheme}`]">
        <ZiaSection :sticky="true" padding="sm" class="color-theme-default color-palette-neutral">
            <ZiaNavigation>
                <template #logo>
                    <ZiaButton variant="tertiary">Logo</ZiaButton>
                </template>
                <template #left>
                    <ZiaButtonGroup gap="spaced">
                        <ZiaButton variant="tertiary">Products</ZiaButton>
                        <ZiaButton variant="tertiary">News</ZiaButton>
                        <ZiaButton variant="tertiary">Blog</ZiaButton>
                        <ZiaButton variant="tertiary">Contact</ZiaButton>
                        <ZiaButton variant="tertiary">About Us</ZiaButton>
                    </ZiaButtonGroup>
                </template>
                <template #right>
                    <ZiaButtonGroup gap="spaced">
                        <ZiaButton variant="tertiary">Cart</ZiaButton>
                        <ZiaButton variant="tertiary">Sign In</ZiaButton>
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
        <ZiaSection :class="[`color-palette-${palette}`, `color-theme-${theme}`]">
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
                <tr class="color-palette-primary">
                    <th>Primary</th>
                    <td style="background-color: var(--color-primary-0)">0</td>
                    <td style="background-color: var(--color-primary-1)">1</td>
                    <td style="background-color: var(--color-primary-2)">2</td>
                    <td style="background-color: var(--color-primary-3)">3</td>
                    <td style="background-color: var(--color-primary-4)">4</td>
                    <td style="background-color: var(--color-primary-5)">5</td>
                    <td style="background-color: var(--color-primary-6)">6</td>
                    <td style="background-color: var(--color-primary-7)">7</td>
                    <td style="background-color: var(--color-primary-8)">8</td>
                    <td style="background-color: var(--color-primary-9)">9</td>
                    <td style="background-color: var(--color-primary-10)">10</td>
                </tr>
                <tr class="color-palette-secondary">
                    <th>Secondary</th>
                    <td style="background-color: var(--color-secondary-0)">0</td>
                    <td style="background-color: var(--color-secondary-1)">1</td>
                    <td style="background-color: var(--color-secondary-2)">2</td>
                    <td style="background-color: var(--color-secondary-3)">3</td>
                    <td style="background-color: var(--color-secondary-4)">4</td>
                    <td style="background-color: var(--color-secondary-5)">5</td>
                    <td style="background-color: var(--color-secondary-6)">6</td>
                    <td style="background-color: var(--color-secondary-7)">7</td>
                    <td style="background-color: var(--color-secondary-8)">8</td>
                    <td style="background-color: var(--color-secondary-9)">9</td>
                    <td style="background-color: var(--color-secondary-10)">10</td>
                </tr>
                <tr class="color-palette-success">
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
                <tr class="color-palette-danger">
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
            <table class="colors" ref="colors">
                <tr style="background-color: var(--color-background); color: var(--color-foreground)">
                    <th>Foreground</th>
                    <td>█ Lorem ipsum dolor sit amet</td>
                    <td></td>
                </tr>
                <tr style="background-color: var(--color-midground); color: var(--color-foreground)">
                    <th>Midground</th>
                    <td>█ Lorem ipsum dolor sit amet</td>
                    <td></td>
                </tr>
                <tr style="background-color: var(--color-background); color: var(--color-foreground-accent)">
                    <th>Foreground Accent</th>
                    <td>█ Lorem ipsum dolor sit amet</td>
                    <td></td>
                </tr>
                <tr
                    style="
                        background-color: var(--color-midground-accent);
                        color: var(--color-midground-accent-inverted);
                    "
                >
                    <th>Midground Accent</th>
                    <td>█ Lorem ipsum dolor sit amet</td>
                    <td></td>
                </tr>
                <tr
                    style="
                        background-color: var(--color-background-accent);
                        color: var(--color-background-accent-inverted);
                    "
                >
                    <th>Background Accent</th>
                    <td>█ Lorem ipsum dolor sit amet</td>
                    <td></td>
                </tr>
                <tr
                    style="
                        background-color: var(--color-foreground-accent);
                        color: var(--color-foreground-accent-inverted);
                    "
                >
                    <th>Foreground Accent Inverted</th>
                    <td>█ Lorem ipsum dolor sit amet</td>
                    <td></td>
                </tr>
            </table>
        </ZiaSection>
        <ZiaSection>
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton :variant="scheme == 'dark' ? 'primary' : 'secondary'" @click="scheme = 'dark'"
                    >Dark</ZiaButton
                >
                <ZiaButton :variant="scheme == 'light' ? 'primary' : 'secondary'" @click="scheme = 'light'"
                    >Light</ZiaButton
                >
            </ZiaButtonGroup>
            <br />
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton :variant="palette == 'neutral' ? 'primary' : 'secondary'" @click="palette = 'neutral'"
                    >Neutral</ZiaButton
                >
                <ZiaButton :variant="palette == 'primary' ? 'primary' : 'secondary'" @click="palette = 'primary'"
                    >Primary</ZiaButton
                >
                <ZiaButton :variant="palette == 'secondary' ? 'primary' : 'secondary'" @click="palette = 'secondary'"
                    >Secondary</ZiaButton
                >
                <ZiaButton :variant="palette == 'success' ? 'primary' : 'secondary'" @click="palette = 'success'"
                    >Success</ZiaButton
                >
                <ZiaButton :variant="palette == 'danger' ? 'primary' : 'secondary'" @click="palette = 'danger'"
                    >Danger</ZiaButton
                >
            </ZiaButtonGroup>
            <br />
            <ZiaButtonGroup orientation="horizontal">
                <ZiaButton :variant="theme == 'default' ? 'primary' : 'secondary'" @click="theme = 'default'"
                    >Default</ZiaButton
                >
                <ZiaButton :variant="theme == 'soft' ? 'primary' : 'secondary'" @click="theme = 'soft'">Soft</ZiaButton>
                <ZiaButton :variant="theme == 'bold' ? 'primary' : 'secondary'" @click="theme = 'bold'">Bold</ZiaButton>
            </ZiaButtonGroup>
        </ZiaSection>
        <ZiaSection :class="[`color-palette-${palette}`, `color-theme-${theme}`]">
            <h1>Buttons</h1>
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary">Primary</ZiaButton>
                <ZiaButton variant="secondary">Secondary</ZiaButton>
                <ZiaButton variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton class="color-theme-default color-palette-danger" variant="primary">Override</ZiaButton>
            </ZiaButtonGroup>
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
        <ZiaSection :class="[`color-palette-${palette}`, `color-theme-${theme}`]">
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
const palette = ref("neutral");
const theme = ref("default");
const colors = useTemplateRef("colors");
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

onMounted(() => {
    if (!colors.value) return;
    calculateContrastRatio();
    window.addEventListener("click", calculateContrastRatio);
});

function calculateContrastRatio() {
    if (!colors.value) return;
    for (let i = 0; i < colors.value.children.length; i++) {
        const row = colors.value.children[i]!;
        const styles = getComputedStyle(row);
        const regex = /\b\d+(\.\d+)?\b/g;

        const color = styles.color.match(regex);
        const background = styles.backgroundColor.match(regex);
        if (!color || color.length < 3) continue;
        if (!background || background.length < 3) continue;

        const colorR =
            parseFloat(color[0]) <= 0.03928
                ? parseFloat(color[0]!) / 12.92
                : Math.pow((parseFloat(color[0]) + 0.055) / 1.055, 2.4);
        const colorG =
            parseFloat(color[1]!) <= 0.03928
                ? parseFloat(color[1]!) / 12.92
                : Math.pow((parseFloat(color[1]!) + 0.055) / 1.055, 2.4);
        const colorB =
            parseFloat(color[2]!) <= 0.03928
                ? parseFloat(color[2]!) / 12.92
                : Math.pow((parseFloat(color[2]!) + 0.055) / 1.055, 2.4);

        const colorL = 0.2126 * colorR + 0.7152 * colorG + 0.0722 * colorB;

        const backgroundR =
            parseFloat(background[0]) <= 0.03928
                ? parseFloat(background[0]!) / 12.92
                : Math.pow((parseFloat(background[0]) + 0.055) / 1.055, 2.4);
        const backgroundG =
            parseFloat(background[1]!) <= 0.03928
                ? parseFloat(background[1]!) / 12.92
                : Math.pow((parseFloat(background[1]!) + 0.055) / 1.055, 2.4);
        const backgroundB =
            parseFloat(background[2]!) <= 0.03928
                ? parseFloat(background[2]!) / 12.92
                : Math.pow((parseFloat(background[2]!) + 0.055) / 1.055, 2.4);

        const backgroundL = 0.2126 * backgroundR + 0.7152 * backgroundG + 0.0722 * backgroundB;

        const contrastRatio =
            colorL >= backgroundL ? (colorL + 0.05) / (backgroundL + 0.05) : (backgroundL + 0.05) / (colorL + 0.05);

        let status = contrastRatio >= 3 ? "✅" : "❌";
        status += contrastRatio >= 4.5 ? "✅" : "❌";

        row.children[2]!.innerHTML = status + " " + contrastRatio.toFixed(3);
    }
}
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
