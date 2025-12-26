Flowva Rewards Hub - Technical Assessment
A high-fidelity recreation of the Flowva Rewards Hub dashboard, built with React, TypeScript, Tailwind CSS, and Supabase.

Live Demo
[Insert your Vercel/Netlify URL here]

Tech Stack
Frontend: React 18 with TypeScript

Styling: Tailwind CSS (Custom configuration for Flowva design system)

Backend/Database: Supabase (Auth & PostgreSQL)

Icons: Lucide React

Setup Instructions
1. Prerequisites
Node.js (v18 or higher)

A Supabase account

2. Environment Variables
Create a .env file in the root directory and add your Supabase credentials:

Code snippet

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
3. Database Setup
Run the following SQL in your Supabase SQL Editor to create the necessary table:

SQL

CREATE TABLE user_points (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  points INTEGER DEFAULT 5,
  referrals INTEGER DEFAULT 0,
  daily_streak INTEGER DEFAULT 1,
  last_check_in TIMESTAMPTZ,
  referral_code TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE user_points ENABLE ROW LEVEL SECURITY;

-- Create Policy (Users can only see/update their own data)
CREATE POLICY "Users can manage their own points" ON user_points
  FOR ALL USING (auth.uid() = user_id);
4. Installation
Bash

# Install dependencies
npm install

# Run the development server
npm run dev