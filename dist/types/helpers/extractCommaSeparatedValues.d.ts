export declare function extractCommaSeparatedValues(string: string | null | undefined, compareSource?: undefined, defaultValue?: undefined, filterEmpty?: boolean): string[];
export declare function extractCommaSeparatedValues<SourceKey extends string, DefaultKey extends SourceKey>(string: string | null | undefined, compareSource: readonly SourceKey[], defaultValue?: DefaultKey | undefined, filterEmpty?: boolean): SourceKey[];