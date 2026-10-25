export async function mockAuthenticate(email:string){await Promise.resolve();return{id:'demo-user',email,displayName:email.split('@')[0],role:'General User' as const}}
