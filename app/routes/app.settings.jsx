import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  BlockStack,
  Box,
  Button,
  Card,
  InlineGrid,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import { useState } from "react";
import db from "../db.server";

export const loader = async () => {
  let settings = db.settings.findFirst();
  return json(settings);
};

export const action = async ({ request }) => {
  let settings = await request.formData();
  settings = Object.fromEntries(settings);

  await db.settings.upsert({
    where: {
      id: "1",
    },
    create: {
      id: "1",
      name: settings.name,
      description: settings.description,
    },
    update: {
      id: "1",
      name: settings.name,
      description: settings.description,
    },
  });

  return json(settings);
};

export default function SettingsPage() {
  const settings = useLoaderData();
  const [formState, setFormState] = useState(settings);
  return (
    <Page>
      <TitleBar title="Settings" />
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Settings
              </Text>
              <Text as="p" variant="bodyMd">
                Update app settings and app preference
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <Form method="POST">
              <BlockStack gap="400">
                <TextField
                  label="App name"
                  name="name"
                  value={formState?.name}
                  onChange={(value) =>
                    setFormState({ ...formState, name: value })
                  }
                />
                <TextField
                  label="Description"
                  name="description"
                  value={formState?.description}
                  onChange={(value) =>
                    setFormState({ ...formState, description: value })
                  }
                />
                <Button submit={true}>Save</Button>
              </BlockStack>
            </Form>
          </Card>
        </InlineGrid>
      </BlockStack>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
