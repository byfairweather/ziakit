export type ValidationSchema<T> = {
    [K in keyof T]?: T[K] extends object ? ValidationSchema<T[K]> : ValidationFunction;
};

export type ValidationIssues<T> = {
    [K in keyof T]?: T[K] extends object ? ValidationIssues<T[K]> : string;
};

export type ValidationFunction = (value: any) => string | undefined;

export function validate<T>(model: T, schema: ValidationSchema<T>): ValidationIssues<T> {
    const result: ValidationIssues<T> = {};

    for (const key in schema) {
        switch (typeof schema[key]) {
            // TODO: Don't love the type assertations below. Can we do better?
            case "function":
                (result[key] as string | undefined) = schema[key](model[key]);
                break;

            case "object":
                (result[key] as object) = validate(model[key], schema[key]);
                break;
        }
    }

    return result;
}
