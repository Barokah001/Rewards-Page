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

Assumptions & Trade-offs
1. Architecture Choice: Component-Based Structure
Assumption: The project needs to be scalable. Trade-off: Instead of a single large file, I organized the UI into a modular structure (Layout, Rewards, Tabs, Hooks). This adds slightly more complexity initially but makes the code significantly more readable and maintainable for a team.

2. State Management: Custom Hooks
Assumption: Local state and Supabase listeners are sufficient for this scope. Trade-off: I chose to use custom hooks (useAuth, useUserPoints) instead of Redux or Context API. This keeps the logic lightweight and avoids "over-engineering" while still separating the business logic from the UI.

3. UI/UX: Design Fidelity vs. Performance
Assumption: Pixel-perfect recreation of the provided screenshots was the priority. Trade-off: I used specific Tailwind arbitrary values (e.g., rounded-[24px]) to match the unique Flowva "soft" design language exactly, rather than sticking strictly to standard Tailwind utility classes.

4. Security: Row Level Security (RLS)
Assumption: Data integrity is paramount. Trade-off: All database queries are handled directly via the Supabase client. To ensure security without a custom backend, I assumed the implementation of Supabase RLS policies to prevent users from modifying points that don't belong to them.

5. Data Handling: Loading & Empty States
Assumption: The user might have a slow connection. Trade-off: I implemented explicit loading states for authentication and data fetching, ensuring the UI doesn't "flicker" or show empty data before the Supabase response is received.

Features Implemented
Full Authentication: Sign-up and Sign-in functionality.

Daily Check-in Logic: Prevents multiple claims per day and tracks streaks.

Responsive Dashboard: A sidebar-based layout that collapses gracefully for mobile users.

Dynamic Reward Filtering: Tabs and pill-filters for navigating unlocked/locked rewards.

Referral Logic: Automatic generation of unique referral codes for new users.