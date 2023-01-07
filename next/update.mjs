import fs from 'fs';

switch (process.argv.at(-1)) {
  case 'leaf':
    fs.writeFileSync('app/comp0.tsx', `export function Comp0() {
      return <div>{Date.now() - ${Date.now()}}</div>
    }`);
    break;
  case 'root':
    let page = fs.readFileSync('app/page.tsx', 'utf8');
    fs.writeFileSync('app/page.ts', page.replace(/root: (.+)/, `root: {Date.now() - ${Date.now()}}`));
    break;
  default:
    throw new Error('Run with "leaf" or "root" as an argument');
}
