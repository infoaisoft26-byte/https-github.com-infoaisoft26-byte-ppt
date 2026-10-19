import { SlideData } from '../types/presentation';

export const GLOBAL_FINANCE_SLIDES: SlideData[] = [
  {
    id: 1,
    originalPageNumber: 1,
    title: 'WELCOME TO GLOBAL FINANCE',
    subtitle: 'Digital Finance for a Smarter Future',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'intro',
    speakerNotes:
      'Welcome everyone to the Global Finance presentation. Global Finance is building a state-of-the-art digital finance ecosystem that empowers participants worldwide, opening up transparent and sustainable financial opportunities through decentralized blockchain technology and USDT.',
    content: {
      type: 'cover',
      welcomeText: 'WELCOME TO',
      mainHeadline: 'Digital Finance for a Smarter Future',
      subHeadline:
        'We are building a global digital finance ecosystem that empowers people, creates opportunities and drives sustainable growth.',
      pillars: [
        { label: 'Trusted Solutions', icon: 'ShieldCheck' },
        { label: 'Sustainable Growth', icon: 'TrendingUp' },
        { label: 'Financial Inclusion', icon: 'Users' },
        { label: 'Customer First', icon: 'Award' },
      ],
      footerPillars: [
        'Global Vision',
        'Innovative Solutions',
        'Financial Freedom',
      ],
    },
  },
  {
    id: 2,
    originalPageNumber: 2,
    title: 'ABOUT GLOBAL FINANCE',
    subtitle: 'Empowering Modern Financial Opportunities',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'company',
    speakerNotes:
      'About Global Finance: Our mission is to bridge individuals with technological innovation and accessible wealth-generation opportunities on a secure, audited blockchain infrastructure operating entirely in USDT.',
    content: {
      type: 'about',
      leadParagraph:
        'GLOBAL FINANCE is built to bring people, digital technology and modern financial opportunities together through a clear and accessible digital platform.',
      pillars: [
        {
          title: 'GLOBAL VISION',
          description:
            'Building a connected digital finance ecosystem that breaks geographical barriers and provides accessible wealth management.',
          icon: 'Globe',
        },
        {
          title: 'DIGITAL INNOVATION',
          description:
            'Using cutting-edge blockchain technology to create simple, lightning-fast and modern financial experiences.',
          icon: 'Zap',
        },
        {
          title: 'PEOPLE & COMMUNITY',
          description:
            'Creating fair opportunities for participation, collective connection and generational financial growth.',
          icon: 'Users',
        },
        {
          title: 'TRUST & SECURITY',
          description:
            'Focusing on institutional-grade transparency, responsible practices, automated smart settlements and user confidence.',
          icon: 'ShieldCheck',
        },
      ],
    },
  },
  {
    id: 3,
    originalPageNumber: 7,
    title: 'OUR COMPANY',
    subtitle: 'PEOPLE. OPPORTUNITIES. GROWTH. COMMUNITY.',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'company',
    speakerNotes:
      'Our Company: Headquartered in London, United Kingdom, Global Finance operates with rigorous governance, bridging international markets through strategic liquidity allocations, verified fintech systems, and strict regulatory adherence.',
    content: {
      type: 'company',
      pillBadges: ['PEOPLE', 'OPPORTUNITIES', 'GROWTH', 'COMMUNITY'],
      paragraphs: [
        'GLOBAL FINANCE is a global opportunity platform headquartered in London, UK, built on the principles of trust, innovation, and sustainable growth.',
        'We are committed to creating accessible financial opportunities for people worldwide, empowering individuals and communities to achieve a brighter and more secure tomorrow.',
        'With a strong local presence and an ambitious global vision, GLOBAL FINANCE bridges markets, people, and possibilities — delivering real value through integrity, transparency, and long-term commitment.',
      ],
      quote: '“Together We Build a Brighter Future”',
      executive: {
        name: 'DAVID NIKOLAS',
        title: 'HEAD OF DEPARTMENT — GLOBAL FINANCE UK',
      },
      footerBadges: [
        { title: 'PEOPLE', subtitle: 'Empowering Individuals' },
        { title: 'OPPORTUNITIES', subtitle: 'Creating New Possibilities' },
        { title: 'GROWTH', subtitle: 'Building a Better Tomorrow' },
        { title: 'COMMUNITY', subtitle: 'Stronger Together' },
      ],
    },
  },
  {
    id: 4,
    originalPageNumber: 8,
    title: 'OUR VISION & MISSION',
    subtitle: 'Clear Strategic Roadmap for Sustainable Digital Wealth',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'company',
    speakerNotes:
      'Vision & Mission: Global Finance focuses purely on USDT-denominated stability, removing volatile currency risks for members and providing predictable, institutional-level yield distribution across transparent cycles.',
    content: {
      type: 'vision_mission',
      visionPoints: [
        'Our vision is to build a trusted and innovative digital finance platform that delivers simple, transparent, and technology-driven USDT-based financial solutions.',
        'We aim to create a global digital ecosystem where users can manage their digital assets with greater convenience, clarity, and confidence.',
        'By embracing innovation, responsible practices, and continuous improvement, we aspire to contribute meaningfully to the evolving future of decentralized finance.',
      ],
      missionPoints: [
        'Our mission is to make digital finance simple, accessible, and transparent through innovative USDT-based financial solutions.',
        'We strive to create a user-friendly digital ecosystem that enables users to manage their digital assets with confidence and ease.',
        'Through technology, innovation, and responsible growth, we are committed to continuously improving the digital finance user experience.',
      ],
      footerPillars: [
        { title: 'PEOPLE', subtitle: 'At the Core' },
        { title: 'INNOVATION', subtitle: 'For a Brighter Future' },
        { title: 'GLOBAL REACH', subtitle: 'Connecting Opportunities' },
        { title: 'SUSTAINABLE GROWTH', subtitle: 'Long-Term Value' },
      ],
    },
  },
  {
    id: 5,
    originalPageNumber: 9,
    title: 'TYPES OF INCOMES',
    subtitle: '7 Multi-Dimensional Streams of Financial Reward',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'income',
    speakerNotes:
      'Global Finance features 7 distinct income streams designed to reward both passive participants and active network builders. Every stream is calculated and paid out in USDT on a transparent cycle.',
    content: {
      type: 'types_of_incomes',
      incomes: [
        {
          number: '01',
          title: 'REFERRAL INCOME',
          icon: 'UserPlus',
          highlight: '10% Direct on every referral',
        },
        {
          number: '02',
          title: 'LEVEL INCOME',
          icon: 'Network',
          highlight: '0.25% across Levels 2 to 12',
        },
        {
          number: '03',
          title: 'DAILY WITHDRAWAL ROI INCOME',
          icon: 'Percent',
          highlight: '5% Daily (1% Profit + 4% Principal, 25-Day Cycle)',
        },
        {
          number: '04',
          title: 'DAILY COMPOUNDING ROI INCOME',
          icon: 'TrendingUp',
          highlight: 'Accelerated 25, 50 & 100 Day compounding',
        },
        {
          number: '05',
          title: 'ROI ON ROI INCOME',
          icon: 'Coins',
          highlight: '5% Level 1 + 1% across Levels 2-12',
        },
        {
          number: '06',
          title: 'FD STAKING INCOME',
          icon: 'Layers',
          highlight: '180-Day (12%) & 240-Day (20%) fixed plans',
        },
        {
          number: '07',
          title: 'SALARY INCOME',
          icon: 'Crown',
          highlight: 'Lifetime Monthly Salary up to 50,000 USDT/mo',
        },
      ],
    },
  },
  {
    id: 6,
    originalPageNumber: 10,
    title: '01 REFERRAL INCOME',
    subtitle: 'Instant Direct Affiliate Commission',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'income',
    speakerNotes:
      'Referral Income: Direct sponsors earn a generous 10% instant commission in USDT on every single referral investment, credited immediately upon package activation without any caps or lockups.',
    content: {
      type: 'referral_income',
      percentage: '10%',
      headline: 'Referral Income Every Referral',
      subheadline:
        'Earn 10% direct commission in USDT immediately credited to your account whenever your direct referral activates or repurchases an investment package.',
      features: [
        {
          title: 'Direct 10% Allocation',
          desc: '10% of the sponsored member’s package amount is credited straight to your available USDT balance.',
        },
        {
          title: 'Unlimited Direct Referrals',
          desc: 'Introduce as many personal direct members as you wish with zero artificial caps or limits.',
        },
        {
          title: 'Instant Settlement',
          desc: 'Real-time smart contract accounting ensures immediate USDT availability for withdrawal or compounding.',
        },
      ],
    },
  },
  {
    id: 7,
    originalPageNumber: 11,
    title: '02 LEVEL INCOME',
    subtitle: 'Deep Downstream Team Growth Distribution',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'income',
    speakerNotes:
      'Level Income: From Level 2 through Level 12, earn 0.25% on every qualifying referral investment. Most importantly, there are NO mandatory personal requirements or leg balance restrictions to earn Level Income.',
    content: {
      type: 'level_income',
      percentage: '0.25%',
      headline: 'LEVEL INCOME From Level 2 To Level 12',
      subtitle: 'on every qualifying referral investment across 11 deep tiers',
      disclaimerBanner: 'THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME',
      levelBreakdown: [
        {
          levelRange: 'Level 1',
          rate: '10.00%',
          note: 'Direct Referral Commission',
        },
        {
          levelRange: 'Level 2',
          rate: '0.25%',
          note: 'Automatic unconditioned team qualification',
        },
        {
          levelRange: 'Level 3 to Level 5',
          rate: '0.25% each',
          note: 'Deep team expansion reward',
        },
        {
          levelRange: 'Level 6 to Level 9',
          rate: '0.25% each',
          note: 'Mid-tier organization rewards',
        },
        {
          levelRange: 'Level 10 to Level 12',
          rate: '0.25% each',
          note: 'Leadership downstream volume rewards',
        },
      ],
    },
  },
  {
    id: 8,
    originalPageNumber: 12,
    title: '03 DAILY WITHDRAWAL ROI INCOME',
    subtitle: 'Structured 25-Day Cycle with Principal & Profit Transparency',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'income',
    speakerNotes:
      'Daily Withdrawal ROI Income: Global Finance operates on a disciplined 25-day cycle. Each day, 5% is allocated: 4% represents your daily principal allocation and 1% represents daily profit. Over 25 days, the total allocation is 125% of your original investment (100% returned principal + 25% profit). Notice that principal and profit are separately and transparently accounted for.',
    content: {
      type: 'daily_withdrawal_roi',
      totalDailyRate: '5%',
      profitRate: '1%',
      principalRate: '4%',
      cycleDays: 25,
      totalAllocationRate: '125%',
      investmentRange: '2 USDT - 10,000 USDT',
      investmentMin: 'Start with as little as 2 USDT and grow your wealth with greater potential',
      calculationExample: {
        investment: '10 USDT',
        items: [
          {
            label: 'Daily principal allocation (4%)',
            amount: '0.40 USDT',
            note: 'Capital return component per day',
          },
          {
            label: 'Daily profit allocation (1%)',
            amount: '0.10 USDT',
            note: 'Net daily profit generation',
          },
          {
            label: 'Daily total allocation (5%)',
            amount: '0.50 USDT',
            note: 'Total daily payout credited',
          },
          {
            label: '25-day principal allocation (4% × 25)',
            amount: '10.00 USDT',
            note: '100% of initial principal returned',
          },
          {
            label: '25-day profit allocation (1% × 25)',
            amount: '2.50 USDT',
            note: '25% pure profit generated',
          },
          {
            label: '25-day total allocation (5% × 25)',
            amount: '12.50 USDT',
            note: '125% total allocation over cycle',
          },
        ],
      },
      disclaimer:
        'Principal and profit components are accounted for separately. The 4% component represents principal allocation, not profit. Global Finance does not promise speculative or guaranteed investment returns.',
    },
  },
  {
    id: 9,
    originalPageNumber: 13,
    title: '04 DAILY COMPOUNDING ROI INCOME',
    subtitle: 'Daily Compounding Income Examples (5% Daily Allocation)',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'income',
    speakerNotes:
      'Daily Compounding ROI Income: By opting into automated compounding instead of daily withdrawal, members allow their daily allocation to re-enter the allocation pool, producing significant compounding power across 25, 50, and 100 day cycles in USDT.',
    content: {
      type: 'daily_compounding',
      subtitle:
        'Daily Compounding Income Examples (5% Daily Allocation: 1% Profit + 4% Principal Reinvested)',
      tableRows: [
        {
          investment: 2,
          dailyRoi: 0.1,
          figure25Days: 6.77,
          figure50Days: 22.93,
          figure100Days: 262.89,
        },
        {
          investment: 5,
          dailyRoi: 0.25,
          figure25Days: 16.93,
          figure50Days: 57.34,
          figure100Days: 657.24,
        },
        {
          investment: 10,
          dailyRoi: 0.5,
          figure25Days: 33.86,
          figure50Days: 114.67,
          figure100Days: 1314.47,
        },
        {
          investment: 20,
          dailyRoi: 1.0,
          figure25Days: 67.73,
          figure50Days: 229.35,
          figure100Days: 2628.94,
        },
        {
          investment: 50,
          dailyRoi: 2.5,
          figure25Days: 169.32,
          figure50Days: 573.37,
          figure100Days: 6572.36,
        },
        {
          investment: 100,
          dailyRoi: 5.0,
          figure25Days: 338.64,
          figure50Days: 1146.74,
          figure100Days: 13144.71,
        },
        {
          investment: 500,
          dailyRoi: 25.0,
          figure25Days: 1693.18,
          figure50Days: 5733.7,
          figure100Days: 65723.57,
        },
        {
          investment: 1000,
          dailyRoi: 50.0,
          figure25Days: 3386.35,
          figure50Days: 11467.4,
          figure100Days: 131447.14,
        },
      ],
      note: 'Compounding figures represent full reinvestment across consecutive 25-day cycles based on 5% daily allocation model. All values are denominated strictly in USDT.',
    },
  },
  {
    id: 10,
    originalPageNumber: 14,
    title: '05 ROI ON ROI INCOME',
    subtitle: '12th - Level ROI On ROI',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'income',
    speakerNotes:
      'ROI on ROI Income: When members in your downline receive their daily ROI, you earn a percentage of their daily payout every single day. 5% from your Level 1 direct team, and 1% each across Levels 2 through 12, without qualification barriers.',
    content: {
      type: 'roi_on_roi',
      levels: [
        { level: 'Level 1', rate: '5% (ROI on ROI)', isHighlight: true },
        { level: 'Level 2', rate: '1%' },
        { level: 'Level 3', rate: '1%' },
        { level: 'Level 4', rate: '1%' },
        { level: 'Level 5', rate: '1%' },
        { level: 'Level 6', rate: '1%' },
        { level: 'Level 7', rate: '1%' },
        { level: 'Level 8', rate: '1%' },
        { level: 'Level 9', rate: '1%' },
        { level: 'Level 10', rate: '1%' },
        { level: 'Level 11', rate: '1%' },
        { level: 'Level 12', rate: '1%' },
      ],
      disclaimerBanner: 'THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME',
    },
  },
  {
    id: 11,
    originalPageNumber: 15,
    title: '06 FD STAKING INCOME',
    subtitle: 'Fixed Deposit Staking Packages in USDT',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'fd',
    speakerNotes:
      'FD Staking Income: For members seeking locked tenure commitments, Global Finance offers 5 verified FD packages in USDT. Option 1 runs for 180 days on a 12% daily basis, and Option 2 runs for 240 days on a 20% daily basis.',
    content: {
      type: 'fd_staking',
      packages: [
        {
          packageAmount: 10,
          option1: {
            planDays: 180,
            dailyRatePct: 12,
            dailyReturnUsdt: 1.2,
            totalReturnUsdt: 216,
          },
          option2: {
            planDays: 240,
            dailyRatePct: 20,
            dailyReturnUsdt: 2.0,
            totalReturnUsdt: 480,
          },
        },
        {
          packageAmount: 100,
          option1: {
            planDays: 180,
            dailyRatePct: 12,
            dailyReturnUsdt: 12.0,
            totalReturnUsdt: 2160,
          },
          option2: {
            planDays: 240,
            dailyRatePct: 20,
            dailyReturnUsdt: 20.0,
            totalReturnUsdt: 4800,
          },
        },
        {
          packageAmount: 500,
          option1: {
            planDays: 180,
            dailyRatePct: 12,
            dailyReturnUsdt: 60.0,
            totalReturnUsdt: 10800,
          },
          option2: {
            planDays: 240,
            dailyRatePct: 20,
            dailyReturnUsdt: 100.0,
            totalReturnUsdt: 24000,
          },
        },
        {
          packageAmount: 1000,
          option1: {
            planDays: 180,
            dailyRatePct: 12,
            dailyReturnUsdt: 120.0,
            totalReturnUsdt: 21600,
          },
          option2: {
            planDays: 240,
            dailyRatePct: 20,
            dailyReturnUsdt: 200.0,
            totalReturnUsdt: 48000,
          },
        },
        {
          packageAmount: 5000,
          option1: {
            planDays: 180,
            dailyRatePct: 12,
            dailyReturnUsdt: 600.0,
            totalReturnUsdt: 108000,
          },
          option2: {
            planDays: 240,
            dailyRatePct: 20,
            dailyReturnUsdt: 1000.0,
            totalReturnUsdt: 240000,
          },
        },
      ],
    },
  },
  {
    id: 12,
    originalPageNumber: 16,
    title: '07 SALARY INCOME',
    subtitle: 'LIFETIME SALARY — YOUR EFFORTS. LIFETIME REWARDS.',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'salary',
    speakerNotes:
      'Salary Income: Dedicated leaders qualify for predictable Lifetime Monthly Salary paid in USDT upon reaching team milestones, ranging from 25 USDT per month for Associates up to 50,000 USDT per month for Diamond leaders.',
    content: {
      type: 'salary_income',
      tagline: 'YOUR EFFORTS. LIFETIME REWARDS.',
      ranks: [
        {
          letter: 'A',
          rankName: 'Associate',
          teamSize: 500,
          monthlySalaryUsdt: 25,
        },
        {
          letter: 'B',
          rankName: 'Bronze',
          teamSize: 1000,
          monthlySalaryUsdt: 50,
        },
        {
          letter: 'S',
          rankName: 'Silver',
          teamSize: 2000,
          monthlySalaryUsdt: 100,
        },
        {
          letter: 'G',
          rankName: 'Gold',
          teamSize: 5000,
          monthlySalaryUsdt: 250,
        },
        {
          letter: 'P',
          rankName: 'Platinum',
          teamSize: 10000,
          monthlySalaryUsdt: 500,
        },
        {
          letter: 'T',
          rankName: 'Titanium',
          teamSize: 25000,
          monthlySalaryUsdt: 1500,
        },
        {
          letter: 'PL',
          rankName: 'Pearl',
          teamSize: 50000,
          monthlySalaryUsdt: 3000,
        },
        {
          letter: 'R',
          rankName: 'Ruby',
          teamSize: 100000,
          monthlySalaryUsdt: 8000,
        },
        {
          letter: 'E',
          rankName: 'Emerald',
          teamSize: 250000,
          monthlySalaryUsdt: 25000,
        },
        {
          letter: 'D',
          rankName: 'Diamond',
          teamSize: 50000,
          monthlySalaryUsdt: 50000,
        },
      ],
      footerBanner: 'BIGGER DREAMS • HIGHER INCOME • A BRIGHTER FUTURE',
    },
  },
  {
    id: 13,
    originalPageNumber: 18,
    title: 'TERMS AND CONDITIONS',
    subtitle: 'Transparent, Direct & Zero-Friction Platform Policies',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'terms',
    speakerNotes:
      'Terms and Conditions: Minimum withdrawal is just 1 USDT. All deposits and withdrawals use BEP-20 USDT for fast, low-cost network execution. Zero admin fees (0%), 24/7 withdrawal window, and no conditions required to earn level income.',
    content: {
      type: 'terms',
      bannerHighlight: 'THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME.',
      terms: [
        {
          id: 1,
          title: 'Minimum Withdrawal',
          description: 'Minimum withdrawal amount is $1 (1 USDT).',
          icon: 'Wallet',
        },
        {
          id: 2,
          title: 'Deposit & Withdrawal',
          description:
            'All deposits and withdrawals will be processed strictly in BEP-20 USDT on the BNB Smart Chain for maximum speed and negligible network fees.',
          icon: 'Coins',
        },
        {
          id: 3,
          title: 'Lifetime Salary',
          description:
            'Eligible members can receive Salary for Lifetime, subject to the applicable plan terms and sustained team activity conditions.',
          icon: 'Infinity',
        },
        {
          id: 4,
          title: 'Special Tour Benefits',
          description:
            'International corporate travel incentive program for achieving verified team milestones:',
          subPoints: [
            '10,000 Team: Eligible for an International Fintech Leadership Summit Tour, subject to applicable criteria.',
            '50,000 Team: Eligible for an Executive Global VIP Luxury Tour, subject to applicable criteria.',
          ],
          icon: 'Plane',
        },
        {
          id: 5,
          title: 'Admin Fee',
          description: 'Admin Fee: 0% — Zero deductions on your earned balances.',
          highlight: '0%',
          icon: 'Percent',
        },
        {
          id: 6,
          title: 'Withdrawal Window',
          description:
            '24*7 Instant Withdrawal processing window available 365 days a year.',
          highlight: '24*7',
          icon: 'Clock',
        },
      ],
      footerBadges: [
        'MORE OPPORTUNITIES',
        'GREATER REWARDS',
        'A STRONGER TOMORROW',
      ],
    },
  },
  {
    id: 14,
    originalPageNumber: 19,
    title: 'GET IN TOUCH WITH US',
    subtitle: 'Global Operations & Official Communication Channels',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'closing',
    speakerNotes:
      'Contact Us: Official Global Finance platform and London UK corporate address. We provide round-the-clock multilingual assistance for all members.',
    content: {
      type: 'contact',
      channels: [
        {
          title: 'Official Website',
          details: [
            'Visit our official website for registration, account access and portal announcements:',
            'www.globalfinance.world',
          ],
          icon: 'Globe',
          link: 'https://www.globalfinance.world',
        },
        {
          title: 'Corporate Headquarters',
          details: [
            '10 Downing Street, London, SW1A 2AA',
            'United Kingdom',
            'Registered Global Finance Operations UK',
          ],
          icon: 'MapPin',
        },
        {
          title: 'Global Operations & Custody Desk',
          details: [
            'Global Finance Institutional Trade Center',
            'London & Zurich Technical Operations Hub',
            '24/7 Automated Smart Settlements',
          ],
          icon: 'Building2',
        },
      ],
      footerBadges: [
        { title: 'TRUST', subtitle: 'Our Foundation' },
        { title: 'GROWTH', subtitle: 'Your Opportunity' },
        { title: 'SECURITY', subtitle: 'Our Commitment' },
        { title: 'TOGETHER', subtitle: 'A Brighter Future' },
      ],
    },
  },
  {
    id: 15,
    originalPageNumber: 20,
    title: 'THANK YOU',
    subtitle: 'For Your Time & Support',
    tagline: 'TRUST · GROWTH · SECURITY · TOGETHER',
    category: 'closing',
    speakerNotes:
      'Thank you for your valuable time and participation. Welcome to the Global Finance family — Together, we build a smarter, wealthier, and more secure financial future!',
    content: {
      type: 'thank_you',
      lead: 'For Your Time & Support',
      mainSlogan: 'Together We Build a Smarter Financial Future',
      pillars: [
        {
          title: 'TRUST',
          subtitle: 'Our Foundation',
          icon: 'ShieldCheck',
        },
        {
          title: 'GROWTH',
          subtitle: 'Your Opportunity',
          icon: 'TrendingUp',
        },
        {
          title: 'SECURITY',
          subtitle: 'Our Commitment',
          icon: 'Lock',
        },
        {
          title: 'TOGETHER',
          subtitle: 'A Brighter Future',
          icon: 'Users',
        },
      ],
    },
  },
];
