import {useMemo, useState} from 'react';
import {Box} from '@mui/material';

function escapeXml(value:string){return value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#39;');}

function makeFallback(title:string, backdrop:boolean){
  const safe=escapeXml(title);
  const width=backdrop?1280:500;
  const height=backdrop?720:750;
  const label=backdrop?'VYBORA • FEATURED':'VYBORA';
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#120b2b"/><stop offset="0.55" stop-color="#4c1d95"/><stop offset="1" stop-color="#0b1020"/></linearGradient><radialGradient id="r"><stop stop-color="#a855f7" stop-opacity=".45"/><stop offset="1" stop-color="#0b1020" stop-opacity="0"/></radialGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/><circle cx="${width*0.78}" cy="${height*0.18}" r="${Math.min(width,height)*0.45}" fill="url(#r)"/><circle cx="${width*0.12}" cy="${height*0.88}" r="${Math.min(width,height)*0.38}" fill="url(#r)"/>
  <text x="${width*0.08}" y="${height*0.13}" fill="#d8b4fe" font-family="Arial,Helvetica,sans-serif" font-size="${backdrop?28:24}" font-weight="700" letter-spacing="5">${label}</text>
  <text x="${width*0.08}" y="${height*0.62}" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="${backdrop?58:42}" font-weight="800">${safe}</text>
  <text x="${width*0.08}" y="${height*0.70}" fill="#ddd6fe" font-family="Arial,Helvetica,sans-serif" font-size="${backdrop?22:18}">Entertainment discovery • ${backdrop?'Cinematic backdrop':'Demo poster'}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function PosterImage({src,alt,title,backdrop=false}:{src:string;alt:string;title:string;backdrop?:boolean}){
  const[failed,setFailed]=useState(false);
  const fallback=useMemo(()=>makeFallback(title,backdrop),[title,backdrop]);
  return <Box component="img" src={failed?fallback:src} alt={alt} loading="lazy" onError={()=>setFailed(true)} sx={{width:'100%',height:'100%',minHeight:backdrop?280:260,objectFit:'cover',display:'block',background:'#111827'}}/>;
}
