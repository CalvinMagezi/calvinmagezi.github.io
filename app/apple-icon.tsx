import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: 'linear-gradient(135deg, #7C3AED 0%, #DC2626 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: 32,
          fontWeight: 'bold',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        CM
      </div>
    ),
    {
      ...size,
    }
  )
}