import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#0f0f1a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
      }}
    >
      <p style={{ color: '#d0bcff', fontSize: 28, margin: 0 }}>
        sohailshrestha.com.np
      </p>
      <h1 style={{ color: 'white', fontSize: 72, margin: '16px 0 8px' }}>
        Sohail Shrestha
      </h1>
      <p style={{ color: '#c0c1ff', fontSize: 36, margin: 0 }}>
        Senior Software Engineer
      </p>
      <p style={{ color: '#888', fontSize: 24, marginTop: 32 }}>
        Nepal · Remote · Available for hire
      </p>
    </div>
  )
}
