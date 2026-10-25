export type ContentType = 'movie' | 'series';
export type Role = 'Super Admin'|'Admin'|'Owner'|'Team Lead'|'Employee'|'General User';
export interface EntertainmentItem { id:string; title:string; type:ContentType; year:number; genres:string[]; description:string; poster:string; backdrop:string; rating:number; runtime?:string; cast:string[]; featured?:boolean; }
export interface MusicItem { id:string; title:string; artist:string; genre:string; mood:string; artwork:string; playable?:boolean; }
export interface User { id:string; email:string; role:Role; displayName:string; }
