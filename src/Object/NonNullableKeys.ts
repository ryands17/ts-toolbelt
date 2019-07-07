import {FilterKeys} from './FilterKeys'
import {Filter} from './Filter'

/** Get the keys of **`O`** that are non-nullable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<O extends object> =
    FilterKeys<O, undefined, 'l-extends'>
    & FilterKeys<O, null, 'l-extends'>
