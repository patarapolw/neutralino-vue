import path from 'path'

import fs from 'fs-extra'

const NEU_DIR = 'neutralino'

if (
  // process.env.NODE_ENV === 'development' &&
  fs.existsSync('settings.dev.json')
) {
  fs.copyFileSync('settings.dev.json', path.join(NEU_DIR, 'app/settings.json'))
} else {
  fs.copyFileSync('settings.json', path.join(NEU_DIR, 'app/settings.json'))
}

fs.copyFileSync(path.join(NEU_DIR, 'backup-app/assets/neutralino.js'), path.join(NEU_DIR, 'app/assets/neutralino.js'))
