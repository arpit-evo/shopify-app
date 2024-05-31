# Shopify Learning

Shopify is a cloud-based(uses cloudflare), all-in-one commerce platform designed to help businesses of all sizes set up an online store and sell products across multiple channels, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops. It offers a range of customizable templates, a secure shopping cart, SEO and marketing tools, analytics, and a host of other features to manage and grow an e-commerce business.

## Why to use:

Because it provide functionality to manage and create online store with custom theme for store and app integration for diff features.

## Advantages:

- Easy to use
- support all size of business
- provide tools for order processing, inventory management, SEO and more.
- secure with SSL(secure socket layer) certificate and PCI(payment card industry) compliance
- Multiple selling point like social store(instagram,facebook), amazon,etc.
- customize your store with themes and app from theme store and app store for different features.
- monthly revenue

## Use cases:

- retail to online store
- small business grow
- digital products sell like art,music,images, etc.

---

## Shopify Structure for making money

1. Store

- create store for specific like clothing, shoes store like that.

2. Theme

- create your custom theme and sell it to other stores.
- create theme using `javascript, liquid, JSON and CSS`.
- In that `liquid` is template language and here it's [cheatsheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- Reference for [liquid](https://shopify.dev/docs/api/liquid)
- for create theme [reference](https://shopify.dev/docs/storefronts/themes/getting-started/create)

3. App

- create your custom app for specific feature like searching and sorting and sell for others on monthly revenue.
- more about this is below

---

# Shopify Store

- for this first we have to make **Shopify Partner Account**
- my account name is **Arpit Moliya** with email **arpit.m@evolutioncloud.in**
- Understand about themes and app and how they work

## Create Shopify store

- Make store using your [partner account](https://partners.shopify.com/3670061) link
- created store name **evolution app dev**
- get url for that store like this <https://evolution-app-dev.myshopify.com/>
- configure store using it's admin link which looks like this <https://admin.shopify.com/store/store-name>
- for theme config go to **online store** option in admin link and customize.
- for app go to **app** option in admin link and install app for customize store.

---

# Shopify App Development

- shopify app is a bundle of features to enhance the shopify store.

### Tech stack of App :

- _default template_
- _framework:_ [remix](https://remix.run/)
- _Database:_ [Prisma](https://www.prisma.io/docs)
- _Interface:_ [Polaris](https://polaris.shopify.com/?shpxid=cdc8f77c-AB1B-4BDB-F9EE-6C869AAC5E3E), [App Bridge](https://shopify.dev/docs/api/app-bridge)
- _Api:_ [GarphQl API](https://shopify.dev/docs/api/admin-graphql)

for custom template use this:

- express template
- Ruby template
- php template

# Starting Building App

### Requirement:

- Make `Shopify Partner` account and `Development Store`
- First install [shopify CLI](https://shopify.dev/docs/api/shopify-cli)
- Use `Chrome`

## Step-1 : Install Shopify CLI

Download cli using this command

```
npm install -g @shopify/cli
```
## Step-2 : [Create a new App](https://shopify.dev/docs/apps/build/scaffold-app)

Now init Shopify Store using this command: 

```
shopify app init
```
## Step-3 : Start a local development server

1. navigate to folder 
```
cd my-new-app
```
2. Run the following command to start a local server for your app
```
shopify app dev or npm run dev
```