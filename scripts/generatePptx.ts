import { exportGlobalFinancePresentation } from '../src/services/pptxExporter';

async function main() {
  console.log('Generating pre-built PPTX file...');
  // Note: in Node environment, pptxgenjs will write directly to disk if called with writeFile
  try {
    await exportGlobalFinancePresentation((step, percent) => {
      console.log(`[${percent}%] ${step}`);
    });
    console.log('Successfully generated PPTX presentation.');
  } catch (err) {
    console.error('Error generating prebuilt pptx:', err);
  }
}

main();
