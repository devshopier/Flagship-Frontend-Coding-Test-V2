const axios = require('axios');

const shopifyStoreUrl = "YOUR_SHOP_URL"; 
const accessToken = "YOUR_ACCESS_TOKEN"; 
const productId = "PRODUCT_ID"; 
const apiDate = "2024-04"; //API_DATE

const createProductMetafield = async () => {
    try {
      const response = await axios.get(`https://${shopifyStoreUrl}/admin/api/${apiDate}/products/${productId}/metafields.json`, {
        headers: {
          'X-Shopify-Access-Token': accessToken,
        },
      });
  
      const metafields = response.data.metafields;
  
      const existingMetafield = metafields.find(metafield => metafield.namespace === 'global' && metafield.key === 'test');
  
      if (existingMetafield) {
        // Metafield exists, update the value
        const updatedValue = parseInt(existingMetafield.value) + 1;
        await axios.put(`https://${shopifyStoreUrl}/admin/api/${apiDate}/metafields/${existingMetafield.id}.json`, {
          metafield: {
            id: existingMetafield.id,
            value: updatedValue.toString(),
          },
        }, {
          headers: {
            'X-Shopify-Access-Token': accessToken,
          },
        });
      } else {
        // Metafield does not exist, create a new one
        await axios.post(`https://${shopifyStoreUrl}/admin/api/${apiDate}/products/${productId}/metafields.json`, {
          metafield: {
            namespace: 'global',
            key: 'test',
            value: '0',
            type: 'integer',
          },
        }, {
          headers: {
            'X-Shopify-Access-Token': accessToken,
          },
        });
      }
  
      console.log('Product metafield created/updated successfully.');
    } catch (error) {
      console.error('Error creating/updating product metafield:', error.response.data);
    }
  };
  
  createProductMetafield();