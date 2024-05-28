# Flagship-Frontend-Coding-Test-V2

# Shopify Product Metafield Creation Script

This Node.js script allows you to create a product metafield in a Shopify store using the Shopify Admin API.

## Prerequisites
- Node.js installed on your machine
- Admin API access token generated in your Shopify development store

## Installation
1. Clone this repository to your local machine.
2. Install the necessary dependencies using npm:

```
npm install axios
```

## Usage
1. Open the `createProductMetafield.js` file.
2. Replace `YOUR_SHOP_URL` and `YOUR_ACCESS_TOKEN` with your actual Shopify store URL and admin API access token.
3. Replace `PRODUCT_ID` in the API endpoint with the actual product ID you want to target.
4. Save the file.

```
YOUR_SHOP_URL : "ecomdev31.myshopify.com"
YOUR_ACCESS_TOKEN : "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"
PRODUCT_ID = "8703789826304"
```

## Running the Script
1. Open your terminal and navigate to the project directory.
2. Run the following command to execute the script:

```
Node createProductMetafield.js
```

## Output
- If successful, the script will create a product metafield in the specified Shopify store.
- If an error occurs, the script will log the error message.

## Notes
- Make sure to handle errors and edge cases specific to your Shopify store setup.
- This script is a basic example and may require modifications based on your requirements.
