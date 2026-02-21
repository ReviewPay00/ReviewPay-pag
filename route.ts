import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      error: 'Stripe nao configurado.'
    },
    { status: 501 }
  );
}
