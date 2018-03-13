declare var importScripts: Function;
interface BinaryenModule {
    optimize(): any;
    validate(): any;
    emitBinary(): ArrayBuffer;
    emitText(): string;
    emitAsmjs(): string;
    runPasses(passes: string[]): any;
}
declare var Binaryen: {
    readBinary(data: Uint8Array): BinaryenModule;
    parseText(data: string): BinaryenModule;
    print(s: string): void;
    printErr(s: string): void;
};
declare var wabt: {
    ready: Promise<any>;
    readWasm: Function;
    parseWat: Function;
};
declare function loadBinaryen(): Promise<void>;
declare function loadWabt(): Promise<void>;
declare function optimizeWasmWithBinaryen(data: ArrayBuffer): ArrayBuffer;
declare function validateWasmWithBinaryen(data: ArrayBuffer): number;
declare function createWasmCallGraphWithBinaryen(data: ArrayBuffer): string;
declare function convertWasmToAsmWithBinaryen(data: ArrayBuffer): string;
declare function disassembleWasmWithBinaryen(data: ArrayBuffer): string;
declare function assembleWatWithBinaryen(data: string): ArrayBuffer;
declare function disassembleWasmWithWabt(data: ArrayBuffer): string;
declare function assembleWatWithWabt(data: string): ArrayBuffer;
