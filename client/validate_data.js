
import { ARTIFACTS } from './src/data/artifacts.js';

console.log(`Checking ${ARTIFACTS.length} artifacts...`);

let errors = 0;
ARTIFACTS.forEach((a, i) => {
    if (!a.id) {
        console.error(`Artifact at index ${i} missing id`);
        errors++;
    }
    if (!a.category) {
        console.error(`Artifact ${a.id || i} missing category`);
        errors++;
    } else if (typeof a.category !== 'string') {
        console.error(`Artifact ${a.id || i} category is not a string`);
        errors++;
    }

    if (!a.challenge) {
        console.error(`Artifact ${a.id || i} missing challenge`);
        errors++;
    } else if (typeof a.challenge !== 'string') {
        console.error(`Artifact ${a.id || i} challenge is not a string`);
        errors++;
    }
});

if (errors === 0) {
    console.log("All artifacts valid!");
} else {
    console.log(`Found ${errors} errors.`);
    process.exit(1);
}
