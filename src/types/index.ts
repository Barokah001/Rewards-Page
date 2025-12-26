export interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  status: 'unlocked' | 'locked' | 'coming-soon';
  category: string;
}

export interface UserPoints {
  points: number;
  daily_streak: number;
  last_check_in: string | null;
  referral_code: string;
  referrals: number ;
}

export interface User {
  id: string;
  email?: string;
}