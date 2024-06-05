import { Client } from 'pg';

export async function getClient() {
  const client = new Client(
    'postgresql://neondb_owner:5yZTBqtJWF0Q@ep-muddy-lab-a59avjx0.us-east-2.aws.neon.tech/neondb?sslmode=require'
  );
  await client.connect();
  return client;
}
