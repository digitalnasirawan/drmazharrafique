import fs from 'fs';

const code = fs.readFileSync('src/data/routesRegistry.ts', 'utf8');

// Match all routes
const regex = /pageId:\s*'(P\d+)',[\s\S]*?pageName:\s*'([^']+)',[\s\S]*?canonicalPath:\s*'([^']+)',[\s\S]*?template:\s*'([^']+)',/g;
let match;
const routes = [];
const ids = new Set();
const paths = new Set();

while ((match = regex.exec(code)) !== null) {
  const [, pageId, pageName, canonicalPath, template] = match;
  if (ids.has(pageId)) {
    console.error(`ERROR: Duplicate Page ID: ${pageId}`);
  }
  ids.add(pageId);

  if (paths.has(canonicalPath)) {
    console.error(`ERROR: Duplicate Canonical Path: ${canonicalPath}`);
  }
  paths.add(canonicalPath);

  routes.push({ pageId, pageName, canonicalPath, template });
}

console.log('----------------------------------------------------');
console.log('ROUTE VALIDATION REPORT (D05 SPECIFICATION)');
console.log('----------------------------------------------------');
console.log(`Total Routes Found: ${routes.length} / 57`);
console.log(`Unique Page IDs: ${ids.size}`);
console.log(`Unique Canonical Paths: ${paths.size}`);

// Verify categories
const categories = [
  'joint-replacement-surgery',
  'arthroscopic-surgery',
  'sports-injury-treatment',
  'upper-limb-surgery',
  'fracture-trauma-surgery',
  'foot-ankle-paediatric-orthopaedics',
  'spine-back-pain',
  'arthritis-bone-health'
];

console.log('\nService Categories Check:');
for (const cat of categories) {
  const exists = routes.some(r => r.canonicalPath === `/${cat}/`);
  console.log(`  - /${cat}/ : ${exists ? 'VALID' : 'MISSING'}`);
}

console.log('\nCore & Education Hubs Check:');
const hubs = ['/', '/about/', '/contact/', '/services/', '/patient-education/', '/medical-education/'];
for (const hub of hubs) {
  const exists = routes.some(r => r.canonicalPath === hub);
  console.log(`  - ${hub} : ${exists ? 'VALID' : 'MISSING'}`);
}

console.log('----------------------------------------------------');
if (routes.length === 57 && ids.size === 57 && paths.size === 57) {
  console.log('RESULT: ALL 57 ROUTES SUCCESSFULLY VALIDATED (100% PASSED)');
} else {
  console.error('RESULT: VALIDATION FAILED');
  process.exit(1);
}
