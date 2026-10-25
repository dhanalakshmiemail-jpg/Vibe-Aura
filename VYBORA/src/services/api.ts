export interface CatalogApi{search:(query:string)=>Promise<unknown>}
export const catalogApi:CatalogApi={async search(){throw new Error('Live catalog API is not configured.')}};
