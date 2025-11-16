import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Calvin Magezi - Fullstack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1F2937 0%, #7C3AED 50%, #DC2626 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 24,
            padding: '20px 40px',
            marginBottom: 40,
            border: '2px solid rgba(255,255,255,0.2)',
          }}
        >
          CM
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Calvin Magezi
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Fullstack Developer • Mobile App Developer • Blockchain Developer
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.7,
            marginTop: 30,
            textAlign: 'center',
          }}
        >
          Based in Dubai 🇦🇪 • From Uganda 🇺🇬
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}