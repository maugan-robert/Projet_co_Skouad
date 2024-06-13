/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Defis = "Defis",
	Events = "Events",
	Shop = "Shop",
	Sports = "Sports",
	Utilisateur = "Utilisateur",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum DefisSportsOptions {
	"Course à pied" = "Course à pied",
	"Ski" = "Ski",
	"Escalade" = "Escalade",
	"Fitness" = "Fitness",
}
export type DefisRecord = {
	Date_de_fin?: string
	Favoris?: boolean
	Image?: string
	Monnaie_recompense_basique?: number
	Monnaie_recompense_premium?: number
	Nom?: string
	Sports?: DefisSportsOptions
	description_defis?: string
	img_full?: string
	relation_sport?: RecordIdString
}

export enum EventsCategorieOptions {
	"Fitness" = "Fitness",
	"Escalade" = "Escalade",
	"Ski" = "Ski",
	"Course à pied" = "Course à pied",
	"Karting" = "Karting",
	"Randonnée" = "Randonnée",
	"Vélo" = "Vélo",
	"VTT" = "VTT",
	"Natation" = "Natation",
	"Paintball" = "Paintball",
	"Snowboard" = "Snowboard",
}

export enum EventsDifficulteEventOptions {
	"Débutant" = "Débutant",
	"Amateur" = "Amateur",
	"Intermédiaire" = "Intermédiaire",
	"Pro" = "Pro",
	"Expert" = "Expert",
}
export type EventsRecord = {
	Categorie?: EventsCategorieOptions
	Date_Events?: IsoDateString
	Favoris?: boolean
	Image?: string
	Image_full?: string
	Localisation?: string
	Nom?: string
	adresse_event?: string
	description_events?: string
	difficulte_event?: EventsDifficulteEventOptions
	duree_event?: string
	img_createur?: string
	img_participants1?: string
	nom_createur?: string
	nom_participants1?: string
	relation_sport?: RecordIdString
}

export type ShopRecord = {
	Nom_reduction?: string
	Prix?: number
}

export type SportsRecord = {
	Nom?: string
	Nombre_inscris?: number
	Photo_illustration?: string
	favori?: boolean
	img_full?: string
}

export enum UtilisateurSportFavorisOptions {
	"Course à pied" = "Course à pied",
	"Paintball" = "Paintball",
	"Fitness" = "Fitness",
	"Natation" = "Natation",
	"Vélo" = "Vélo",
	"Marche/Randonnée" = "Marche/Randonnée",
	"Ski" = "Ski",
	"Snowboard" = "Snowboard",
	"Escalade" = "Escalade",
	"VTT" = "VTT",
	"Karting" = "Karting",
}
export type UtilisateurRecord = {
	Age?: number
	Description?: string
	Nom?: string
	Note_attribuee?: number
	Photo_de_profil?: string
	Prenom?: string
	Sport_favoris?: UtilisateurSportFavorisOptions[]
	Ville?: string
}

export type UsersRecord = {
	age?: number
	avatar?: string
	description?: string
	name?: string
	ville?: string
}

// Response types include system fields and match responses from the PocketBase API
export type DefisResponse<Texpand = unknown> = Required<DefisRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type ShopResponse<Texpand = unknown> = Required<ShopRecord> & BaseSystemFields<Texpand>
export type SportsResponse<Texpand = unknown> = Required<SportsRecord> & BaseSystemFields<Texpand>
export type UtilisateurResponse<Texpand = unknown> = Required<UtilisateurRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Defis: DefisRecord
	Events: EventsRecord
	Shop: ShopRecord
	Sports: SportsRecord
	Utilisateur: UtilisateurRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Defis: DefisResponse
	Events: EventsResponse
	Shop: ShopResponse
	Sports: SportsResponse
	Utilisateur: UtilisateurResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Defis'): RecordService<DefisResponse>
	collection(idOrName: 'Events'): RecordService<EventsResponse>
	collection(idOrName: 'Shop'): RecordService<ShopResponse>
	collection(idOrName: 'Sports'): RecordService<SportsResponse>
	collection(idOrName: 'Utilisateur'): RecordService<UtilisateurResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
