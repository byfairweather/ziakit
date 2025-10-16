<template>
    <ZiaApp>
        <ZiaSection>
            <h1>Color</h1>
            <table style="width: 100%; text-align: center">
                <tr>
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
                <tr>
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
                <tr>
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
            <div style="display: flex; align-items: flex-start">
                <ZiaButton theme="primary" variant="primary">Primary</ZiaButton>
                <ZiaButton theme="primary" variant="secondary">Secondary</ZiaButton>
                <ZiaButton theme="primary" variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton theme="primary" variant="primary" disabled>Primary</ZiaButton>
                <ZiaButton theme="primary" variant="secondary" disabled>Secondary</ZiaButton>
                <ZiaButton theme="primary" variant="tertiary" disabled>Tertiary</ZiaButton>
            </div>
            <div style="display: flex; align-items: flex-start">
                <ZiaButton theme="neutral" variant="primary">Primary</ZiaButton>
                <ZiaButton theme="neutral" variant="secondary">Secondary</ZiaButton>
                <ZiaButton theme="neutral" variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton theme="neutral" variant="primary" disabled>Primary</ZiaButton>
                <ZiaButton theme="neutral" variant="secondary" disabled>Secondary</ZiaButton>
                <ZiaButton theme="neutral" variant="tertiary" disabled>Tertiary</ZiaButton>
            </div>
            <div style="display: flex; align-items: flex-start">
                <ZiaButton theme="success" variant="primary">Primary</ZiaButton>
                <ZiaButton theme="success" variant="secondary">Secondary</ZiaButton>
                <ZiaButton theme="success" variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton theme="success" variant="primary" disabled>Primary</ZiaButton>
                <ZiaButton theme="success" variant="secondary" disabled>Secondary</ZiaButton>
                <ZiaButton theme="success" variant="tertiary" disabled>Tertiary</ZiaButton>
            </div>
            <div style="display: flex; align-items: flex-start">
                <ZiaButton theme="warning" variant="primary">Primary</ZiaButton>
                <ZiaButton theme="warning" variant="secondary">Secondary</ZiaButton>
                <ZiaButton theme="warning" variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton theme="warning" variant="primary" disabled>Primary</ZiaButton>
                <ZiaButton theme="warning" variant="secondary" disabled>Secondary</ZiaButton>
                <ZiaButton theme="warning" variant="tertiary" disabled>Tertiary</ZiaButton>
            </div>
            <div style="display: flex; align-items: flex-start" class="theme-dangwr">
                <ZiaButton theme="danger" variant="primary">Primary</ZiaButton>
                <ZiaButton theme="danger" variant="secondary">Secondary</ZiaButton>
                <ZiaButton theme="danger" variant="tertiary">Tertiary</ZiaButton>
                <ZiaButton theme="danger" variant="primary" disabled>Primary</ZiaButton>
                <ZiaButton theme="danger" variant="secondary" disabled>Secondary</ZiaButton>
                <ZiaButton theme="danger" variant="tertiary" disabled>Tertiary</ZiaButton>
            </div>
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
useHead({
    title: "ZiaKit",
    meta: [{ name: "description", content: "Nuxt UI Toolkit" }],
});
</script>
