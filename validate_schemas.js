// Simple validation script to check the JSON-LD structure of product schemas
import fs from 'fs';
import { basename } from 'path';

// Read the files and extract JSON-LD content
const filesToCheck = [
  './src/pages/20ftContainerPriceKenya.tsx',
  './src/pages/40ftContainerPriceKenya.tsx',
  './src/pages/UsedContainersSale.tsx',
  './src/pages/ContainerShopsKenya.tsx',
  './src/pages/ContainerFabricationServices.tsx',
  './src/pages/ReeferContainersKenya.tsx'
];

console.log('Validating Product Schemas...\n');

filesToCheck.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Extract JSON-LD content
  const jsonLdRegex = /<script type="application\/ld\+json">\s*{([^]*?)<\/script>/g;
  const matches = [...content.matchAll(jsonLdRegex)];

  if (matches.length > 0) {
    const jsonData = '{' + matches[0][1]; // Add back the opening brace
    try {
      const parsed = JSON.parse(jsonData);

      // Basic validation checks
      const errors = [];

      if (!parsed['@context']) {
        errors.push('@context is missing');
      }

      if (!parsed['@type']) {
        errors.push('@type is missing');
      } else if (parsed['@type'] !== 'Product') {
        errors.push(`@type should be 'Product', got '${parsed['@type']}'`);
      }

      if (!parsed.name) {
        errors.push('name is missing');
      }

      if (!parsed.description) {
        errors.push('description is missing');
      }

      if (!parsed.image) {
        errors.push('image is missing');
      } else if (!Array.isArray(parsed.image)) {
        errors.push('image should be an array');
      }

      if (!parsed.offers && !parsed.aggregateRating && !parsed.review) {
        errors.push('One of offers, aggregateRating, or review should be present');
      }

      if (errors.length === 0) {
        console.log(`✓ ${basename(file)} - Schema is valid`);
      } else {
        console.log(`✗ ${basename(file)} - Schema has errors:`);
        errors.forEach(error => console.log(`  - ${error}`));
      }
    } catch (e) {
      console.log(`✗ ${basename(file)} - Invalid JSON: ${e.message}`);
    }
  } else {
    console.log(`✗ ${basename(file)} - No JSON-LD found`);
  }
});

console.log('\nValidation complete!');