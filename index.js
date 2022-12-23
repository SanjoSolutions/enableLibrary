import { execSync as exec } from '@sanjo/exec'
import * as fs from 'fs/promises'

await makeDirectory('libs')
exec('git submodule add https://github.com/SanjoSolutions/Library.git libs/Library')

async function makeDirectory(path) {
  try {
    await fs.mkdir(path, { recursive: true })
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error
    }
  }
}
