#!/usr/bin/env node

import { writeFileSync, mkdirSync, existsSync, readFileSync, appendFileSync } from 'fs';
import { join } from 'path';

const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const reset = '\x1b[0m';

const [,, cmd, type, nameRaw] = process.argv;

if (cmd !== 'create' || !['component', 'service'].includes(type) || !nameRaw) {
  console.log(`${red}Usage: yaff create component <Name>  ${reset}OR${red}  yaff create service <Name>${reset}`);
  process.exit(1);
}

// Hilfsfunktionen für Namensvarianten
const name = nameRaw.trim();
const lcName = name.toLowerCase();
const ucName = name.charAt(0).toUpperCase() + name.slice(1);

// create component
if (type === 'component') {
  const base = join('src/components', lcName);
  if (!existsSync(base)) mkdirSync(base, { recursive: true });

  writeFileSync(join(base, `${lcName}.component.ts`), 
`import { Component, YComponent } from 'yaffry';
import './${lcName}.component.style.css';

@YComponent({
  selector: '${lcName}',
  templateUrl: './${lcName}.component.template.html',
  styleUrls: ['./${lcName}.component.style.css']
})
export class ${ucName}Component extends Component {
  onInit() {}
  onUpdate() {}
  onDestroy() {}
}
`);
  writeFileSync(join(base, `${lcName}.component.template.html`), `<div>${lcName} works!</div>\n`);
  writeFileSync(join(base, `${lcName}.component.style.css`), `/* styles for ${lcName} */\n`);
  console.log(`${green}Component ${lcName} created in ${base}${reset}`);

  // === Registry automatisch ergänzen ===
  const registryPath = 'src/components/registry.component.ts';
  const importLine = `import './${lcName}/${lcName}.component';\n`;

  let registryContent = '';
  if (existsSync(registryPath)) {
    registryContent = readFileSync(registryPath, 'utf8');
    if (!registryContent.includes(importLine)) {
      appendFileSync(registryPath, importLine);
      console.log(`${green}Registry updated: ${importLine.trim()}${reset}`);
    } else {
      console.log(`${red}Component already registered.${reset}`);
    }
  } else {
    writeFileSync(registryPath, importLine);
    console.log(`${green}Registry created and component registered.${reset}`);
  }
}

// create service
if (type === 'service') {
  const base = 'src/services';
  if (!existsSync(base)) mkdirSync(base, { recursive: true });
  writeFileSync(join(base, `${lcName}.service.ts`), 
`import { Service, ReactiveSystem } from 'yaffry';

export class ${ucName}Service extends Service {
  // Service logic here
}

export const ${lcName}Service = ReactiveSystem.makeReactive(new ${ucName}Service());
`);
  console.log(`${green}Service ${name} created in ${base}${reset}`);
}