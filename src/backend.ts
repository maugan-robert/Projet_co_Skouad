import pocketbase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-types'
export const pb= new pocketbase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

  
 export async function infoEvents(id:string) {
      const record = await pb.collection('Events').getOne(id)
      return record
  }

export async function infoDefis(id:string) {
    const record = await pb.collection('Defis').getOne(id)
    return record
}

export async function infoSports(id:string) {
    const record = await pb.collection('Sports').getOne(id)
    return record
}  


export async function allEventsFavori() {
    const eventsFavoris = await pb.collection('Events').getFullList({
      filter: 'Favoris=true'
    })
    return eventsFavoris
}

export async function allSportsFavori() {
    const sportsFavoris = await pb.collection('Sports').getFullList({
      filter: 'favori=true'
    })
    return sportsFavoris
}
export async function allDefisUnfavori() {
    const defisUnfavoris = await pb.collection('Defis').getFullList({
      filter: 'Favoris=false'
    })
    return defisUnfavoris
}

export async function EventsbySports(relation_sport:string) {
  const eventssports = await pb.collection('Events').getFullList({
      expand: 'relation_sport',
      filter: `relation_sport.id = "${relation_sport}"`
  });
  return eventssports;
}

export async function DefisbySports(relation_sport:string) {
  const eventssports = await pb.collection('Defis').getFullList({
      expand: 'relation_sport',
      filter: `relation_sport.id = "${relation_sport}"`
  });
  return eventssports;
}

