const env = process.argv[2];

if (!env || !['prod', 'test'].includes(env)) {
  console.error('Please specify environment: prod or test');
  process.exit(1);
}

const siteId = process.env.NETLIFY_SITE_ID;

if (!siteId) {
  console.error('Missing NETLIFY_SITE_ID environment variable');
  process.exit(1);
}

const artifact = {
  type: 'deploy',
  provider: 'netlify',
  deployId: siteId,
  build: {
    command: env === 'prod' ? 'npm run build' : 'npm run build:test',
    output: 'dist'
  }
};

console.log(JSON.stringify(artifact, null, 2));