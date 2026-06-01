import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const { company, email, description } = await req.json();

  if (!company || !email || !description) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  await pool.query(
    'INSERT INTO strategy_sessions (company, email, description) VALUES ($1, $2, $3)',
    [company.trim(), email.trim(), description.trim()]
  );

  return NextResponse.json({ ok: true });
}
