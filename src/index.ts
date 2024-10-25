import { isObject, isArray } from "@halvaradop/ts-utility-types/utils"

export const deepClone = <T>(source: T): T => {
    if (!isObject(source) && !isArray(source)) return source;
    const cloned: any = isArray(source) ? [] : {}
    for (const key in source) {
        if (!isObject(source[key]) && !isArray(source[key])) {
            cloned[key] = source[key];
        } else {
            cloned[key] = deepClone(source[key]);
        }
    }
    return cloned as T;
}
