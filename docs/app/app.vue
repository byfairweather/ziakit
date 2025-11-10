<template>
    <ZiaApp :class="[`scheme-${scheme}`]">
        <ZiaSection :sticky="true" padding="sm" class="theme-default">
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
        <ZiaSection background="default">
            <h2>Color</h2>
            <table style="width: 100%; text-align: center">
                <tr class="palette-neutral">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
                <tr class="palette-primary">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
                <tr class="palette-secondary">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
                <tr class="palette-tertiary">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
                <tr class="palette-success">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
                <tr class="palette-warning">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
                <tr class="palette-danger">
                    <td style="background-color: var(--color-palette-0)">0</td>
                    <td style="background-color: var(--color-palette-1)">1</td>
                    <td style="background-color: var(--color-palette-2)">2</td>
                    <td style="background-color: var(--color-palette-3)">3</td>
                    <td style="background-color: var(--color-palette-4)">4</td>
                    <td style="background-color: var(--color-palette-5)">5</td>
                    <td style="background-color: var(--color-palette-6)">6</td>
                    <td style="background-color: var(--color-palette-7)">7</td>
                    <td style="background-color: var(--color-palette-8)">8</td>
                    <td style="background-color: var(--color-palette-9)">9</td>
                    <td style="background-color: var(--color-palette-10)">10</td>
                </tr>
            </table>
        </ZiaSection>
        <ZiaSection :class="[`palette-${palette}`, `theme-${theme}`]">
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
                <ZiaButton :variant="theme == 'bold' ? 'primary' : 'secondary'" @click="theme = 'bold'">Bold</ZiaButton>
                <ZiaButton :variant="theme == 'soft' ? 'primary' : 'secondary'" @click="theme = 'soft'">Soft</ZiaButton>
            </ZiaButtonGroup>
            <br />
            <hr />
            <br />
            <ZiaButtonGroup orientation="horizontal" gap="spaced">
                <ZiaButton variant="primary">Primary</ZiaButton>
                <ZiaButton variant="secondary">Secondary</ZiaButton>
                <ZiaButton variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton class="theme-default palette-danger" variant="primary">Override</ZiaButton>
            </ZiaButtonGroup>
        </ZiaSection>
        <ZiaSection>
            <h1>Typography</h1>
            <p>
                The following section showcases what text looks like under various themes, schemes, and palettes. Use
                the controls above to change the style of the text.
            </p>
        </ZiaSection>
        <ZiaSection :class="[`palette-${palette}`, `theme-${theme}`]">
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
tr {
    td {
        color: var(--color-palette-10);
        width: calc(100% / 11);
    }

    td:nth-child(n + 7) {
        color: var(--color-palette-0);
    }
}
</style>
