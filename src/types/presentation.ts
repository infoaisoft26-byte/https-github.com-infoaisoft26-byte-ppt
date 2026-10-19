export interface SlideData {
  id: number;
  originalPageNumber: number;
  title: string;
  subtitle?: string;
  tagline?: string;
  category: 'intro' | 'company' | 'income' | 'fd' | 'salary' | 'terms' | 'closing';
  content: SlideContent;
  speakerNotes: string;
}

export type SlideContent =
  | CoverSlideContent
  | AboutSlideContent
  | CompanySlideContent
  | VisionMissionSlideContent
  | TypesOfIncomesSlideContent
  | ReferralIncomeSlideContent
  | LevelIncomeSlideContent
  | DailyWithdrawalRoiSlideContent
  | DailyCompoundingSlideContent
  | RoiOnRoiSlideContent
  | FdStakingSlideContent
  | SalaryIncomeSlideContent
  | TermsSlideContent
  | ContactSlideContent
  | ThankYouSlideContent;

export interface CoverSlideContent {
  type: 'cover';
  welcomeText: string;
  mainHeadline: string;
  subHeadline: string;
  pillars: { label: string; icon: string }[];
  footerPillars: string[];
}

export interface AboutSlideContent {
  type: 'about';
  leadParagraph: string;
  pillars: { title: string; description: string; icon: string }[];
}

export interface CompanySlideContent {
  type: 'company';
  pillBadges: string[];
  paragraphs: string[];
  quote: string;
  executive: { name: string; title: string };
  footerBadges: { title: string; subtitle: string }[];
}

export interface VisionMissionSlideContent {
  type: 'vision_mission';
  visionPoints: string[];
  missionPoints: string[];
  footerPillars: { title: string; subtitle: string }[];
}

export interface TypesOfIncomesSlideContent {
  type: 'types_of_incomes';
  incomes: { number: string; title: string; icon: string; highlight?: string }[];
}

export interface ReferralIncomeSlideContent {
  type: 'referral_income';
  percentage: string;
  headline: string;
  subheadline: string;
  features: { title: string; desc: string }[];
}

export interface LevelIncomeSlideContent {
  type: 'level_income';
  percentage: string;
  headline: string;
  subtitle: string;
  disclaimerBanner: string;
  levelBreakdown: { levelRange: string; rate: string; note: string }[];
}

export interface DailyWithdrawalRoiSlideContent {
  type: 'daily_withdrawal_roi';
  totalDailyRate: string;
  profitRate: string;
  principalRate: string;
  cycleDays: number;
  totalAllocationRate: string;
  investmentRange: string;
  investmentMin: string;
  calculationExample: {
    investment: string;
    items: { label: string; amount: string; note: string }[];
  };
  disclaimer: string;
}

export interface CompoundingRow {
  investment: number;
  dailyRoi: number;
  figure25Days: number;
  figure50Days: number;
  figure100Days: number;
}

export interface DailyCompoundingSlideContent {
  type: 'daily_compounding';
  subtitle: string;
  tableRows: CompoundingRow[];
  note: string;
}

export interface RoiOnRoiSlideContent {
  type: 'roi_on_roi';
  levels: { level: string; rate: string; isHighlight?: boolean }[];
  disclaimerBanner: string;
}

export interface FdPackage {
  packageAmount: number;
  option1: {
    planDays: number;
    dailyRatePct: number;
    dailyReturnUsdt: number;
    totalReturnUsdt: number;
  };
  option2: {
    planDays: number;
    dailyRatePct: number;
    dailyReturnUsdt: number;
    totalReturnUsdt: number;
  };
}

export interface FdStakingSlideContent {
  type: 'fd_staking';
  packages: FdPackage[];
}

export interface SalaryRank {
  letter: string;
  rankName: string;
  teamSize: number;
  monthlySalaryUsdt: number;
}

export interface SalaryIncomeSlideContent {
  type: 'salary_income';
  tagline: string;
  ranks: SalaryRank[];
  footerBanner: string;
}

export interface TermItem {
  id: number;
  title: string;
  description: string;
  subPoints?: string[];
  highlight?: string;
  icon: string;
}

export interface TermsSlideContent {
  type: 'terms';
  terms: TermItem[];
  bannerHighlight: string;
  footerBadges: string[];
}

export interface ContactSlideContent {
  type: 'contact';
  channels: { title: string; details: string[]; icon: string; link?: string }[];
  footerBadges: { title: string; subtitle: string }[];
}

export interface ThankYouSlideContent {
  type: 'thank_you';
  lead: string;
  mainSlogan: string;
  pillars: { title: string; subtitle: string; icon: string }[];
}
