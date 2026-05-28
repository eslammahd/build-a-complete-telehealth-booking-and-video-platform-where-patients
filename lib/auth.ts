import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'telehealth-jwt-secret-2024';

export interface DoctorPayload {
  id: string;
  email: string;
  name: string;
}

export function signToken(payload: DoctorPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): DoctorPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as DoctorPayload;
  } catch {
    return null;
  }
}

export async function getDoctor(): Promise<DoctorPayload | null> {
  const cookieStore = cookies();
  const token = cookieStore.get('doctor_token')?.value;
  if (!token) return null;
  return verifyToken(token);
}
