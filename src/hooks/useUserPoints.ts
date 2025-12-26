import { useState } from "react";
import { supabase } from "../lib/supabase";
import { type UserPoints } from "../types";

export const useUserPoints = (userId: string | undefined) => {
  const [userPoints, setUserPoints] = useState<UserPoints>({
    points: 5,
    referrals: 0,
    daily_streak: 1,
    last_check_in: null,
    referral_code: "",
  });

  const loadUserPoints = async () => {
    if (!userId) return;

    const { data, error } = await supabase
      .from("user_points")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (data) {
      setUserPoints(data);
    } else if (error && error.code === "PGRST116") {
      await initializeUserPoints();
    }
  };

  const initializeUserPoints = async () => {
    if (!userId) return;

    const referralCode = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    const { data } = await supabase
      .from("user_points")
      .insert([
        {
          user_id: userId,
          points: 5,
          referrals: 0,
          daily_streak: 1,
          referral_code: referralCode,
        },
      ])
      .select()
      .single();

    if (data) setUserPoints(data);
  };

  const checkIn = async () => {
    if (!userId) return;

    const today = new Date().toISOString().split("T")[0];
    const lastCheckIn = userPoints.last_check_in?.split("T")[0];

    if (lastCheckIn === today) return;

    const newStreak =
      lastCheckIn ===
      new Date(Date.now() - 86400000).toISOString().split("T")[0]
        ? userPoints.daily_streak + 1
        : 1;

    const { data } = await supabase
      .from("user_points")
      .update({
        points: userPoints.points + 5,
        daily_streak: newStreak,
        last_check_in: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (data) setUserPoints(data);
  };

  const isCheckedIn = () => {
    const today = new Date().toISOString().split("T")[0];
    return userPoints.last_check_in?.split("T")[0] === today;
  };

  return { userPoints, loadUserPoints, checkIn, isCheckedIn };
};
