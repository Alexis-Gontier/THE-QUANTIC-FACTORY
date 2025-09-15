import { z } from 'zod'

// Schémas communs
const GeoPoint2DSchema = z.object({
  lon: z.number(),
  lat: z.number()
})

const GeoShapeSchema = z.object({
  type: z.string(),
  coordinates: z.array(z.any())
}).optional()

// Schéma pour les espaces verts
export const EspaceVertSchema = z.object({
  identifiant: z.string(),
  nsq_espace_vert: z.number().optional(),
  nom: z.string(),
  type: z.string(),
  arrondissement: z.string(),
  geo_shape: GeoShapeSchema,
  geo_point_2d: GeoPoint2DSchema,
  adresse: z.string().optional(),
  p_vegetation_h: z.number().optional(),
  proportion_vegetation_haute: z.number().optional(),
  surf_veget_sup8m_2024: z.number().optional(),
  indice_veget_sup8m_2024: z.number().optional(),
  ouvert_24h: z.string().optional(),
  canicule_ouverture: z.string().optional(),
  horaires_lundi: z.string().optional(),
  horaires_mardi: z.string().optional(),
  horaires_mercredi: z.string().optional(),
  horaires_jeudi: z.string().optional(),
  horaires_vendredi: z.string().optional(),
  horaires_samedi: z.string().optional(),
  horaires_dimanche: z.string().optional()
})

// Schéma pour les équipements/activités
export const EquipementSchema = z.object({
  identifiant: z.string(),
  id_dicom: z.string().optional(),
  nom: z.string(),
  type: z.string(),
  adresse: z.string().optional(),
  arrondissement: z.string(),
  payant: z.string().optional(),
  geo_shape: GeoShapeSchema,
  geo_point_2d: GeoPoint2DSchema,
  horaires_periode: z.string().optional(),
  horaires_lundi: z.string().optional(),
  horaires_mardi: z.string().optional(),
  horaires_mercredi: z.string().optional(),
  horaires_jeudi: z.string().optional(),
  horaires_vendredi: z.string().optional(),
  horaires_samedi: z.string().optional(),
  horaires_dimanche: z.string().optional(),
  statut_ouverture: z.string().optional(),
  proposition_usager: z.string().optional()
})

// Schéma pour les fontaines
export const FontaineSchema = z.object({
  gid: z.number(),
  type_objet: z.string(),
  modele: z.string().optional(),
  no_voirie_pair: z.number().optional(),
  no_voirie_impair: z.number().optional(),
  voie: z.string().optional(),
  commune: z.string(),
  geo_shape: GeoShapeSchema,
  geo_point_2d: GeoPoint2DSchema,
  dispo: z.string().optional(),
  debut_ind: z.string().optional(),
  fin_ind: z.string().optional(),
  motif_ind: z.string().optional()
})

// Schémas de réponse API
export const EspacesVertsResponseSchema = z.object({
  total_count: z.number(),
  results: z.array(EspaceVertSchema)
})

export const EquipementsResponseSchema = z.object({
  total_count: z.number(),
  results: z.array(EquipementSchema)
})

export const FontainesResponseSchema = z.object({
  total_count: z.number(),
  results: z.array(FontaineSchema)
})

// Schéma unifié pour l'affichage dans la table
export const FreshPlaceSchema = z.object({
  id: z.string(),
  nom: z.string(),
  type: z.string(),
  adresse: z.string().optional(),
  arrondissement: z.string(),
  horaires: z.string().optional(),
  prix: z.string().optional(),
  geo_point_2d: GeoPoint2DSchema,
  source: z.enum(['espaces-verts', 'equipements', 'fontaines'])
})

// Types TypeScript dérivés
export type EspaceVert = z.infer<typeof EspaceVertSchema>
export type Equipement = z.infer<typeof EquipementSchema>
export type Fontaine = z.infer<typeof FontaineSchema>
export type EspacesVertsResponse = z.infer<typeof EspacesVertsResponseSchema>
export type EquipementsResponse = z.infer<typeof EquipementsResponseSchema>
export type FontainesResponse = z.infer<typeof FontainesResponseSchema>
export type FreshPlace = z.infer<typeof FreshPlaceSchema>

// Paramètres de requête API
export const ApiParamsSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  where: z.string().optional(),
  search: z.string().optional(),
  select: z.string().optional()
})

export type ApiParams = z.infer<typeof ApiParamsSchema>