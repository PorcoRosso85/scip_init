import fs from 'fs';
import path from 'path';
import { scip } from '../../external/scip-typescript/src/scip';

const buffer: Buffer = fs.readFileSync(path.join(__dirname, './index.scip'));
const byteArray: Uint8Array = new Uint8Array(buffer);

const consoleLog = (obj: any, methods: string[]) => {
  for (const method of methods) {
    if (typeof obj[method] === 'function') {
      console.log(`${method}:`, obj[method]());
    } else if (obj.hasOwnProperty(method)) {
      console.log(`${method}:`, obj[method]);
    } else {
      console.log(`${method} does not exist on the object.`);
    }
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  describe('SCIP', () => {
    it('Indexクラスの出力', () => {
      const scipIndex: scip.Index = scip.Index.deserializeBinary(byteArray);
      consoleLog(scipIndex, [
        'metadata',
        'documents',
        'external_symbols',
        'has_metadata',
        'toObject',
        // 'serialize',
        // 'serializeBinary',
      ]);
    });
    // it('Metadataクラスの出力', () => {
    //   const scipMetadata: scip.Metadata =
    //     scip.Metadata.deserializeBinary(byteArray);
    //   consoleLog(scipMetadata, [
    //     'version',
    //     'tool_info',
    //     'has_tool_info',
    //     'project_root',
    //     'text_document_encoding',
    //     // 'toObject',
    //     // 'serialize',
    //     // 'serializeBinary',
    //   ]);
    // });
    it('Symbolクラスの出力', () => {
      const scipSymbol: scip.Symbol = scip.Symbol.deserializeBinary(byteArray);
      consoleLog(scipSymbol, [
        'scheme',
        'package',
        'has_package',
        'descriptors',
        'toObject',
        // 'serialize',
        // 'serializeBinary',
      ]);
    });
    // it('Documentクラスの出力', () => {
    //   const scipDocument: scip.Document =
    //     scip.Document.deserializeBinary(byteArray);
    //   consoleLog(scipDocument, [
    //     'language',
    //     'relative_path',
    //     'occurrences',
    //     'symbols',
    //     'text',
    //     'toObject',
    //     'serialize',
    //     'serializeBinary',
    //   ]);
    // });
    it('SymbolInformationクラスの出力', () => {
      const scipSymbolInformation: scip.SymbolInformation =
        scip.SymbolInformation.deserializeBinary(byteArray);
      consoleLog(scipSymbolInformation, [
        // 'language',
        // 'relative_path',
        // 'occurrences',
        // 'symbols',
        // 'text',
        'toObject',
        // 'serialize',
        // 'serializeBinary',
      ]);
    });
    // it('Relationshipクラスの出力', () => {
    //   const scipRelationship: scip.Relationship =
    //     scip.Relationship.deserializeBinary(byteArray);
    //   consoleLog(scipRelationship, ['toObject']);
    // });
  });
}
