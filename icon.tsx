import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2dfcff, #7c4dff)',
          color: '#0b0f1a',
          fontSize: 32,
          fontWeight: 700
        }}
      >
        R
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
