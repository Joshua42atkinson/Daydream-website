
import { ARTIFACTS } from './src/data/artifacts.js';
import fs from 'fs';

console.log(`Checking ${ARTIFACTS.length} artifacts for placeholders...`);

let errors = 0;
const placeholderRegex = /\[.*?\]/;

ARTIFACTS.forEach((a, i) => {
    // Check summary
    if (placeholderRegex.test(a.summary)) {
        fs.appendFileSync('validation_errors.txt', `Artifact ${a.id} summary contains placeholder: ${a.summary.match(placeholderRegex)[0]}\n`);
        errors++;
    }
    // Check reflection
    if (placeholderRegex.test(a.reflection)) {
        fs.appendFileSync('validation_errors.txt', `Artifact ${a.id} reflection contains placeholder: ${a.reflection.match(placeholderRegex)[0]}\n`);
        errors++;
    }
});

if (errors === 0) {
    console.log("No placeholders found! All content filled.");
} else {
    console.log(`Found ${errors} artifacts with placeholders.`);
    process.exit(1);
}
