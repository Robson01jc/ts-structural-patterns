import fs from 'fs';
import os from 'os';
import path from 'path';
import { File } from './model/File';
import { FileSystemItem } from './model/FileSystemItem';
import { Folder } from './model/Folder';

const IGNORED_DIRS = ['node_modules', '.git', 'target', 'ref'];

const etcDir: FileSystemItem = new Folder('/etc', [
  new Folder('acpi', [
    new File('asus-keyboard-backlight.sh'),
    new File('asus-wireless.sh'),
    new Folder('events', [
      new Folder('asus-keyboard-backlight-down', []),
      new Folder('asus-keyboard-backlight-up', []),
    ]),
    new File('ibm-wireless.sh'),
    new File('tosh-wireless.sh'),
    new File('undock.sh'),
  ]),
  new File('adduser.conf'),
  new File('aliases'),
  new Folder('alsa', [
    new Folder('conf.d', [
      new File('10-samplerate.conf'),
      new File('10-speexrate.conf'),
    ]),
  ]),
  new Folder('xml', [
    new File('catalog'),
    new File('catalog.old'),
    new File('xml-core.xml.old'),
  ]),
  new Folder('zsh', [
    new File('newuser.zshrc.recommended'),
    new File('zlogin'),
    new File('zshenv'),
    new File('zshrc'),
  ]),
  new Folder('zsh_command_not_found', []),
]);

function createCompositeFromFile(file: string): FileSystemItem {
  if (!fs.lstatSync(file).isDirectory()) return new File(file);

  if (IGNORED_DIRS.includes(path.basename(file))) return new Folder(file, []);

  const childen: FileSystemItem[] = fs.readdirSync(file).map((it) => {
    return createCompositeFromFile(path.join(file, it));
  });

  return new Folder(file, childen);
}

export const compositeApp = {
  main(): void {
    etcDir.print(0, '', false);

    const fromDisk: FileSystemItem = createCompositeFromFile(
      path.join(os.homedir(), 'workspace')
    );
    fromDisk.print(0, '', false);
  },
};
