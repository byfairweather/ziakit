<template>
    <ZiaApp :class="[`color-mode-${scheme}`]">
        <ZiaSection :sticky="true" padding="sm" class="color-palette-neutral">
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
                        <ZiaButton variant="tertiary">About Us</ZiaButton>
                        <ZiaButton variant="tertiary">Cart</ZiaButton>
                        <ZiaButton variant="tertiary">Sign In</ZiaButton>
                    </ZiaButtonGroup>
                </template>
            </ZiaNavigation>
        </ZiaSection>
        <ZiaSection>
            <h2>Color</h2>
            <table class="palette" style="width: 100%; text-align: center">
                <tr class="color-palette-neutral">
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
                <tr class="color-palette-tertiary">
                    <td style="background-color: var(--color-tertiary-0)">0</td>
                    <td style="background-color: var(--color-tertiary-1)">1</td>
                    <td style="background-color: var(--color-tertiary-2)">2</td>
                    <td style="background-color: var(--color-tertiary-3)">3</td>
                    <td style="background-color: var(--color-tertiary-4)">4</td>
                    <td style="background-color: var(--color-tertiary-5)">5</td>
                    <td style="background-color: var(--color-tertiary-6)">6</td>
                    <td style="background-color: var(--color-tertiary-7)">7</td>
                    <td style="background-color: var(--color-tertiary-8)">8</td>
                    <td style="background-color: var(--color-tertiary-9)">9</td>
                    <td style="background-color: var(--color-tertiary-10)">10</td>
                </tr>
                <tr class="color-palette-success">
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
                <tr class="color-palette-warning">
                    <td style="background-color: var(--color-warning-0)">0</td>
                    <td style="background-color: var(--color-warning-1)">1</td>
                    <td style="background-color: var(--color-warning-2)">2</td>
                    <td style="background-color: var(--color-warning-3)">3</td>
                    <td style="background-color: var(--color-warning-4)">4</td>
                    <td style="background-color: var(--color-warning-5)">5</td>
                    <td style="background-color: var(--color-warning-6)">6</td>
                    <td style="background-color: var(--color-warning-7)">7</td>
                    <td style="background-color: var(--color-warning-8)">8</td>
                    <td style="background-color: var(--color-warning-9)">9</td>
                    <td style="background-color: var(--color-warning-10)">10</td>
                </tr>
                <tr class="color-palette-danger">
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
        <ZiaSection :class="[`color-palette-${palette}`, `color-theme-${theme}`]">
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
                <ZiaButton :variant="palette == 'tertiary' ? 'primary' : 'secondary'" @click="palette = 'tertiary'"
                    >Tertiary</ZiaButton
                >
                <ZiaButton :variant="palette == 'success' ? 'primary' : 'secondary'" @click="palette = 'success'"
                    >Success</ZiaButton
                >
                <ZiaButton :variant="palette == 'warning' ? 'primary' : 'secondary'" @click="palette = 'warning'"
                    >Warning</ZiaButton
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
            <br />
            <hr />
            <br />
            <div style="background-color: var(--color-background)">
                <p style="color: var(--color-foreground)">Foreground</p>
                <p style="color: var(--color-midground)">Midground</p>
                <p style="color: var(--color-foreground-accent)">Foreground Accent</p>
                <p style="color: var(--color-midground-accent)">Midground Accent</p>
                <p
                    style="
                        color: var(--color-background-accent-inverted);
                        background-color: var(--color-background-accent);
                        padding: 5px;
                    "
                >
                    Background Accent Inverted
                </p>
                <p
                    style="
                        color: var(--color-foreground-accent-inverted);
                        background-color: var(--color-foreground-accent);
                        padding: 5px;
                    "
                >
                    Foreground Accent Inverted
                </p>
            </div>
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary">Primary</ZiaButton>
                <ZiaButton variant="secondary">Secondary</ZiaButton>
                <ZiaButton variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton class="color-theme-default color-palette-danger" variant="primary">Override</ZiaButton>
            </ZiaButtonGroup>
        </ZiaSection>
        <ZiaSection>
            <h1>Typography</h1>
            <p>
                The following section showcases what text looks like under various themes, schemes, and colors. Use the
                controls above to change the style of the text.
            </p>
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
useHead({
    title: "ZiaKit",
    meta: [{ name: "description", content: "Nuxt UI Toolkit" }],
});

const scheme = ref("light");
const palette = ref("neutral");
const theme = ref("default");
</script>

<style lang="css">
.palette {
    border-spacing: 0 3px;

    tr {
        td {
            color: var(--color-neutral-10);
            width: calc(100% / 11);
        }

        td:nth-child(n + 7) {
            color: var(--color-neutral-0);
        }
    }
}

.colors {
    border-spacing: 5px 8px;
    width: 100%;

    td {
        padding: 8px 12px;

        div {
            border: 2px solid black;
            border-radius: 5px;
            margin: 8px 0px;
            padding: 5px;
        }
    }

    td:nth-child(2) {
        div:nth-child(1) {
            border-color: var(--color-midground);
            color: var(--color-foreground);
        }
    }

    td:nth-child(3) {
        div:nth-child(1) {
            border-color: var(--color-midground);
            color: var(--color-accent);
        }
    }

    td:nth-child(4) {
        div:nth-child(1) {
            border-color: var(--color-muted-midground);
            color: var(--color-muted-foreground);
        }
    }

    tr:nth-child(2) {
        td:nth-child(2) {
            background-color: var(--color-default-background);
        }

        td:nth-child(3) {
            background-color: var(--color-vivid-background);
        }

        td:nth-child(4) {
            background-color: var(--color-muted-background);
        }
    }
}
</style>
