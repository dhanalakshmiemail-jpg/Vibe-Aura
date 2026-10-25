import type {MusicItem} from '../types';
const artists=['Luna Vale','Neon Atlas','Mira Sol','Velvet Static','Echo Bloom','Northstar','Sora Fields','Midnight Club','Kairo','Aster Lane'];
const tracks=['Afterglow','Parallel Hearts','Night Drive','Soft Gravity','Golden Hour','Orbiting You','City Lights','Blue Monday','Electric Bloom','Paper Moons','Slow Cinema','Violet Skies','First Light','Dream Logic','Wildfire','Homecoming','Moonlit','Static Love','Daydreamer','Final Scene'];
export const musicCatalog:MusicItem[]=tracks.map((title,i)=>({id:`music-${i+1}`,title,artist:artists[i%artists.length],genre:['Pop','Electronic','Indie','Ambient','R&B'][i%5],mood:['Happy','Relaxed','Energetic','Focused','Nostalgic'][i%5],artwork:`/music-cover-${(i%10)+1}.svg`,playable:false}));
