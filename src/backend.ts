import pocketbase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-types'
export const pb= new pocketbase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase