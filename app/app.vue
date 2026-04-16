<template>
    <App :class="[`color-mode-${scheme}`]">
        <Section :sticky="true" padding="sm">
            <Navigation>
                <template #logo>
                    <Button variant="tertiary" color="neutral">Logo</Button>
                </template>
                <template #left>
                    <ButtonGroup gap="spaced">
                        <Button variant="tertiary">Products</Button>
                        <Button variant="tertiary">News</Button>
                        <Button variant="tertiary">Blog</Button>
                        <Button variant="tertiary">Contact</Button>
                        <Button variant="tertiary">About Us</Button>
                    </ButtonGroup>
                </template>
                <template #right>
                    <ButtonGroup gap="spaced">
                        <Button variant="tertiary">Cart</Button>
                        <Button variant="primary">Sign In</Button>
                    </ButtonGroup>
                </template>
                <template #mobile>
                    <Button variant="primary">Sign In</Button>
                </template>
                <template #mobile-popover>
                    <ButtonGroup gap="spaced" orientation="vertical">
                        <Button variant="tertiary">Products</Button>
                        <Button variant="tertiary">News</Button>
                        <Button variant="tertiary">Blog</Button>
                        <Button variant="tertiary">Contact</Button>
                        <Button variant="tertiary">About Us</Button>
                    </ButtonGroup>
                </template>
            </Navigation>
        </Section>
        <Section>
            <h2>Color</h2>
            <table class="palette" style="width: 100%; text-align: center">
                <tbody>
                    <tr>
                        <th>Neutral</th>
                        <td style="background-color: var(--colors--neutral-0)">0</td>
                        <td style="background-color: var(--colors--neutral-1)">1</td>
                        <td style="background-color: var(--colors--neutral-2)">2</td>
                        <td style="background-color: var(--colors--neutral-3)">3</td>
                        <td style="background-color: var(--colors--neutral-4)">4</td>
                        <td style="background-color: var(--colors--neutral-5)">5</td>
                        <td style="background-color: var(--colors--neutral-6)">6</td>
                        <td style="background-color: var(--colors--neutral-7)">7</td>
                        <td style="background-color: var(--colors--neutral-8)">8</td>
                        <td style="background-color: var(--colors--neutral-9)">9</td>
                        <td style="background-color: var(--colors--neutral-10)">10</td>
                    </tr>
                    <tr>
                        <th>Primary</th>
                        <td style="background-color: var(--colors--brand-0)">0</td>
                        <td style="background-color: var(--colors--brand-1)">1</td>
                        <td style="background-color: var(--colors--brand-2)">2</td>
                        <td style="background-color: var(--colors--brand-3)">3</td>
                        <td style="background-color: var(--colors--brand-4)">4</td>
                        <td style="background-color: var(--colors--brand-5)">5</td>
                        <td style="background-color: var(--colors--brand-6)">6</td>
                        <td style="background-color: var(--colors--brand-7)">7</td>
                        <td style="background-color: var(--colors--brand-8)">8</td>
                        <td style="background-color: var(--colors--brand-9)">9</td>
                        <td style="background-color: var(--colors--brand-10)">10</td>
                    </tr>
                    <tr>
                        <th>Success</th>
                        <td style="background-color: var(--colors--success-0)">0</td>
                        <td style="background-color: var(--colors--success-1)">1</td>
                        <td style="background-color: var(--colors--success-2)">2</td>
                        <td style="background-color: var(--colors--success-3)">3</td>
                        <td style="background-color: var(--colors--success-4)">4</td>
                        <td style="background-color: var(--colors--success-5)">5</td>
                        <td style="background-color: var(--colors--success-6)">6</td>
                        <td style="background-color: var(--colors--success-7)">7</td>
                        <td style="background-color: var(--colors--success-8)">8</td>
                        <td style="background-color: var(--colors--success-9)">9</td>
                        <td style="background-color: var(--colors--success-10)">10</td>
                    </tr>
                    <tr>
                        <th>Warning</th>
                        <td style="background-color: var(--colors--warning-0)">0</td>
                        <td style="background-color: var(--colors--warning-1)">1</td>
                        <td style="background-color: var(--colors--warning-2)">2</td>
                        <td style="background-color: var(--colors--warning-3)">3</td>
                        <td style="background-color: var(--colors--warning-4)">4</td>
                        <td style="background-color: var(--colors--warning-5)">5</td>
                        <td style="background-color: var(--colors--warning-6)">6</td>
                        <td style="background-color: var(--colors--warning-7)">7</td>
                        <td style="background-color: var(--colors--warning-8)">8</td>
                        <td style="background-color: var(--colors--warning-9)">9</td>
                        <td style="background-color: var(--colors--warning-10)">10</td>
                    </tr>
                    <tr>
                        <th>Danger</th>
                        <td style="background-color: var(--colors--danger-0)">0</td>
                        <td style="background-color: var(--colors--danger-1)">1</td>
                        <td style="background-color: var(--colors--danger-2)">2</td>
                        <td style="background-color: var(--colors--danger-3)">3</td>
                        <td style="background-color: var(--colors--danger-4)">4</td>
                        <td style="background-color: var(--colors--danger-5)">5</td>
                        <td style="background-color: var(--colors--danger-6)">6</td>
                        <td style="background-color: var(--colors--danger-7)">7</td>
                        <td style="background-color: var(--colors--danger-8)">8</td>
                        <td style="background-color: var(--colors--danger-9)">9</td>
                        <td style="background-color: var(--colors--danger-10)">10</td>
                    </tr>
                </tbody>
            </table>
        </Section>
        <Section>
            <h1>Color Mode</h1>
            <ButtonGroup orientation="horizontal">
                <Button :variant="scheme == 'dark' ? 'primary' : 'secondary'" @click="scheme = 'dark'">Dark </Button>
                <Button :variant="scheme == 'light' ? 'primary' : 'secondary'" @click="scheme = 'light'">Light </Button>
            </ButtonGroup>
        </Section>
        <Section>
            <h1>Buttons</h1>
            <ButtonGroup orientation="horizontal" gap="spaced">
                <Button variant="primary" color="neutral">Primary</Button>
                <Button variant="secondary" color="neutral">Secondary</Button>
                <Button variant="tertiary" color="neutral">Tertiary</Button>
                <Button variant="primary" color="danger">Override</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup orientation="horizontal" gap="spaced">
                <Button variant="primary" color="brand">Primary</Button>
                <Button variant="secondary" color="brand">Secondary</Button>
                <Button variant="tertiary" color="brand">Tertiary</Button>
                <Button variant="primary" color="danger">Override</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup orientation="horizontal" gap="spaced">
                <Button variant="primary" color="success">Primary</Button>
                <Button variant="secondary" color="success">Secondary</Button>
                <Button variant="tertiary" color="success">Tertiary</Button>
                <Button variant="primary" color="danger">Override</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup orientation="horizontal" gap="spaced">
                <Button variant="primary" color="warning">Primary</Button>
                <Button variant="secondary" color="warning">Secondary</Button>
                <Button variant="tertiary" color="warning">Tertiary</Button>
                <Button variant="primary" color="danger">Override</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup orientation="horizontal" gap="spaced">
                <Button variant="primary" color="danger">Primary</Button>
                <Button variant="secondary" color="danger">Secondary</Button>
                <Button variant="tertiary" color="danger">Tertiary</Button>
                <Button variant="primary" color="danger">Override</Button>
            </ButtonGroup>
            <br /><br />
        </Section>
        <Section>
            <h1>Popovers</h1>
            <ButtonGroup orientation="horizontal">
                <Button
                    :variant="popoverPosition.vertical == 'above' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'above'"
                    >Above</Button
                >
                <Button
                    :variant="popoverPosition.vertical == 'top' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'top'"
                    >Top</Button
                >
                <Button
                    :variant="popoverPosition.vertical == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'center'"
                    >Center</Button
                >
                <Button
                    :variant="popoverPosition.vertical == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'fill'"
                    >Fill</Button
                >
                <Button
                    :variant="popoverPosition.vertical == 'bottom' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'bottom'"
                    >Bottom</Button
                >
                <Button
                    :variant="popoverPosition.vertical == 'below' ? 'primary' : 'secondary'"
                    @click="popoverPosition.vertical = 'below'"
                    >Below</Button
                >
            </ButtonGroup>
            <ButtonGroup v-if="popoverPosition.fallback" orientation="horizontal">
                <Button
                    :variant="popoverPosition.fallback.vertical == 'above' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'above'"
                    >Above</Button
                >
                <Button
                    :variant="popoverPosition.fallback.vertical == 'top' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'top'"
                    >Top</Button
                >
                <Button
                    :variant="popoverPosition.fallback.vertical == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'center'"
                    >Center</Button
                >
                <Button
                    :variant="popoverPosition.fallback.vertical == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'fill'"
                    >Fill</Button
                >
                <Button
                    :variant="popoverPosition.fallback.vertical == 'bottom' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'bottom'"
                    >Bottom</Button
                >
                <Button
                    :variant="popoverPosition.fallback.vertical == 'below' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.vertical = 'below'"
                    >Below</Button
                >
            </ButtonGroup>
            <br />
            <ButtonGroup orientation="horizontal">
                <Button
                    :variant="popoverPosition.horizontal == 'outside-left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'outside-left'"
                    >Outside Left</Button
                >
                <Button
                    :variant="popoverPosition.horizontal == 'left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'left'"
                    >Left</Button
                >
                <Button
                    :variant="popoverPosition.horizontal == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'center'"
                    >Center</Button
                >
                <Button
                    :variant="popoverPosition.horizontal == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'fill'"
                    >Fill</Button
                >
                <Button
                    :variant="popoverPosition.horizontal == 'right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'right'"
                    >Right</Button
                >
                <Button
                    :variant="popoverPosition.horizontal == 'outside-right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.horizontal = 'outside-right'"
                    >Outside Right</Button
                >
            </ButtonGroup>
            <ButtonGroup v-if="popoverPosition.fallback" orientation="horizontal">
                <Button
                    :variant="popoverPosition.fallback.horizontal == 'outside-left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'outside-left'"
                    >Outside Left</Button
                >
                <Button
                    :variant="popoverPosition.fallback.horizontal == 'left' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'left'"
                    >Left</Button
                >
                <Button
                    :variant="popoverPosition.fallback.horizontal == 'center' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'center'"
                    >Center</Button
                >
                <Button
                    :variant="popoverPosition.fallback.horizontal == 'fill' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'fill'"
                    >Fill</Button
                >
                <Button
                    :variant="popoverPosition.fallback.horizontal == 'right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'right'"
                    >Right</Button
                >
                <Button
                    :variant="popoverPosition.fallback.horizontal == 'outside-right' ? 'primary' : 'secondary'"
                    @click="popoverPosition.fallback.horizontal = 'outside-right'"
                    >Outside Right</Button
                >
            </ButtonGroup>
            <br /><br />
            <ButtonGroup orientation="horizontal">
                <Button :variant="popoverShade == true ? 'primary' : 'secondary'" @click="popoverShade = true"
                    >Shade
                </Button>
                <Button :variant="popoverShade == false ? 'primary' : 'secondary'" @click="popoverShade = false"
                    >No Shade
                </Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup orientation="horizontal">
                <Button :variant="popoverDismiss == true ? 'primary' : 'secondary'" @click="popoverDismiss = true">
                    Light Dismiss</Button
                >
                <Button :variant="popoverDismiss == false ? 'primary' : 'secondary'" @click="popoverDismiss = false">
                    Hard Dismiss</Button
                >
            </ButtonGroup>
            <br /><br />
            <Button ref="popoverButton" @click="popoverOpen = !popoverOpen">Toggle Popover</Button>
            <Popover v-model="popoverOpen" :anchor="popoverButton" :shade="popoverShade" :position="popoverPosition">
                <h1>Heading 1</h1>
            </Popover>
            <br /><br />
        </Section>
        <Section>
            <h1>Forms</h1>
            <Form v-model="formState" :schema="formSchema" v-model:issues="formIssues">
                <Input placeholder="Text" v-model="formState.one.onepointone" />
                <Input placeholder="Text" v-model="formState.two" />
            </Form>
        </Section>
        <Section>
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
        </Section>
    </App>
</template>

<script setup lang="ts">
import type { PopoverPosition } from "../app/components/Popover.vue";
import { type ValidationIssues, type ValidationSchema } from "../app/utils/validation/validator";

useHead({
    title: "Kit",
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

interface FormState {
    one: {
        onepointone: string;
    };
    two: string;
}

const formState = ref<FormState>({
    one: {
        onepointone: "a",
    },
    two: "fuck",
});

const formIssues = ref<ValidationIssues<FormState>>({});

const formSchema: ValidationSchema<FormState> = {
    one: {
        onepointone: (value: string) => {
            if (value.length <= 5) {
                return "string should be longer than 5 chars long";
            }
        },
    },
    two: (value: string) => {
        if (value.length >= 3) {
            return "string should be less than 3 chars long";
        }
    },
};
</script>

<style lang="css">
.palette {
    border-spacing: 0 5px;

    th {
        text-align: left;
    }

    tr {
        td {
            color: var(--colors--neutral-10);
            font-weight: bold;
            width: calc(100% / 11);
        }

        td:nth-child(n + 8) {
            color: var(--colors--neutral-0);
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
