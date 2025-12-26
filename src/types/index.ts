export interface User {
  id: string;
  email: string;
}

export interface UserPoints {
  points: number;
  referrals: number;
  daily_streak: number;
  last_check_in: string | null;
  referral_code: string;
}
