import pocketbase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-types'
export const pb= new pocketbase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export async function allBatiments() {
    const records = await pb.collection('Batiment').getFullList()
    return records
  }
  
  export async function infoEvents(id:string) {
      const record = await pb.collection('Events').getOne(id)
      return record
  }

  export async function infoDefis(id:string) {
    const record = await pb.collection('Defis').getOne(id)
    return record
}