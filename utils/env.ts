import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string().min(1),
  NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: z.string().min(1),
  NEXT_PUBLIC_NEXTAUTH_URL: z.string().min(1),
  NEXT_PUBLIC_NEXTAUTH_SECRET: z.string().min(1),
});

export const env = envSchema.parse(process.env);
