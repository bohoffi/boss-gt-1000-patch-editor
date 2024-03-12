import { Observable } from 'rxjs';
import { Liveset, FileLiveset, FilePatch, Patch } from '@bgtpe/shared/api';

export function loadTslFile(file: File): Observable<Liveset> {
  return new Observable((observer) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const { name, formatRev, device, data } = JSON.parse(
        fileReader.result?.toString() || '{}'
      ) as FileLiveset;
      const [filePatches] = data;
      const liveset: Liveset = {
        name,
        revision: formatRev,
        device,
        patches: processPatchData(filePatches),
      };
      observer.next(liveset);
      observer.complete();
    };
    fileReader.onerror = (error) => {
      observer.error(error);
    };
    fileReader.readAsText(file, 'UTF-8');
  });
}

function processPatchData(data: FilePatch[]): Patch[] {
  return data.map((patch, index) => {
    const { memo, paramSet } = patch;

    const metadata = Object.entries(paramSet).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: hexDataToString(value),
      }),
      {}
    );

    return {
      id: `U01-${index + 1}`,
      name: hexDataToString(paramSet['User_patch%common']),
      // metadata: {
      //   stompBox: hexDataToString(paramSet['User_patch%stompBox']),
      //   led: hexDataToString(paramSet['User_patch%led']),
      //   assign_1: hexDataToString(paramSet['User_patch%assign(1)']),
      //   assign_2: hexDataToString(paramSet['User_patch%assign(2)']),
      //   assign_3: hexDataToString(paramSet['User_patch%assign(3)']),
      //   assign_4: hexDataToString(paramSet['User_patch%assign(4)']),
      //   assign_5: hexDataToString(paramSet['User_patch%assign(5)']),
      //   assign_6: hexDataToString(paramSet['User_patch%assign(6)']),
      //   assign_7: hexDataToString(paramSet['User_patch%assign(7)']),
      //   assign_8: hexDataToString(paramSet['User_patch%assign(8)']),
      //   assign_9: hexDataToString(paramSet['User_patch%assign(9)']),
      //   assign_10: hexDataToString(paramSet['User_patch%assign(10)']),
      //   assign_11: hexDataToString(paramSet['User_patch%assign(11)']),
      //   assign_12: hexDataToString(paramSet['User_patch%assign(12)']),
      //   assign_13: hexDataToString(paramSet['User_patch%assign(13)']),
      //   assign_14: hexDataToString(paramSet['User_patch%assign(14)']),
      //   assign_15: hexDataToString(paramSet['User_patch%assign(15)']),
      //   assign_16: hexDataToString(paramSet['User_patch%assign(16)']),
      // },
      metadata,
    };
  });
}

/**
 * TODO simple hex to string decoding is working somehow for the patch names but does not for patch data
 */
function hexDataToString(hexData: string[]): string {
  return hexData.map((hex) => String.fromCharCode(parseInt(hex, 16))).join('');
}
