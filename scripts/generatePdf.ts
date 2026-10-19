import { jsPDF } from 'jspdf';
import fs from 'fs';
import { GLOBAL_FINANCE_SLIDES } from '../src/data/presentationData';
import { GLOBAL_FINANCE_LOGO_BASE64 } from '../src/assets/logoBase64';

export function generatePdfDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: [960, 540], // 16:9 ratio in points
  });

  const W = 960;
  const H = 540;

  // Colors
  const BG_COLOR = [7, 13, 30]; // #070d1e
  const CARD_BG = [14, 26, 56]; // #0e1a38
  const HEADER_BG = [10, 20, 47]; // #0a142f
  const GOLD = [245, 158, 11]; // #f59e0b
  const CYAN = [0, 240, 255]; // #00f0ff
  const WHITE = [255, 255, 255];
  const MUTED = [148, 163, 184]; // #94a3b8
  const SUCCESS = [16, 185, 129]; // #10b981
  const ROYAL_BLUE = [29, 78, 216]; // #1d4ed8

  const addHeaderAndFooter = (pageNum: number, title: string, subtitle?: string) => {
    // Top banner
    doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
    doc.rect(0, 0, W, 45, 'F');

    // Logo on top banner
    try {
      doc.addImage(GLOBAL_FINANCE_LOGO_BASE64, 'JPEG', 30, 5, 60, 34);
    } catch (e) {}

    // Brand Name Top Left
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('GLOBAL FINANCE', 100, 20);

    doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text('Digital Finance for a Smarter Future • USDT Platform', 100, 33);

    // Right Motto
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('TRUST · GROWTH · SECURITY · TOGETHER', W - 30, 26, { align: 'right' });

    // Slide Title
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(17);
    doc.text(title, 35, 75);

    if (subtitle) {
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(subtitle, 35, 92);
    }

    // Bottom Footer
    doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
    doc.rect(0, H - 24, W, 24, 'F');

    doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text('GLOBAL FINANCE • INVESTMENT PLATFORM • 100% BEP-20 USDT', 35, H - 9);

    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(`Slide ${pageNum} of 15`, W - 35, H - 9, { align: 'right' });
  };

  const slides = GLOBAL_FINANCE_SLIDES;

  for (let i = 0; i < slides.length; i++) {
    const s = slides[i];
    if (i > 0) doc.addPage([W, H], 'landscape');

    // Fill slide background
    doc.setFillColor(BG_COLOR[0], BG_COLOR[1], BG_COLOR[2]);
    doc.rect(0, 0, W, H, 'F');

    if (s.id === 1) {
      // COVER SLIDE
      try {
        doc.addImage(GLOBAL_FINANCE_LOGO_BASE64, 'JPEG', W / 2 - 150, 45, 300, 168);
      } catch (e) {}

      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('OFFICIAL PRESENTATION DECK', W / 2, 245, { align: 'center' });

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(26);
      doc.text('Digital Finance for a Smarter Future', W / 2, 280, { align: 'center' });

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text(
        'We are building a global digital finance ecosystem that empowers people, creates opportunities and drives sustainable growth.',
        W / 2,
        310,
        { align: 'center' }
      );

      // 4 Pillars
      const pillars = ['Trusted Solutions', 'Sustainable Growth', 'Financial Inclusion', 'Customer First'];
      pillars.forEach((p, idx) => {
        const xPos = 135 + idx * 175;
        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, 360, 160, 48, 6, 6, 'F');
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(1);
        doc.roundedRect(xPos, 360, 160, 48, 6, 6, 'S');

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.text(p, xPos + 80, 388, { align: 'center' });
      });

      // Bottom Bar
      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(0, H - 35, W, 35, 'F');
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text('Global Vision    |    Innovative Solutions    |    Financial Freedom    |    100% USDT', W / 2, H - 14, { align: 'center' });

    } else if (s.id === 2) {
      // ABOUT GLOBAL FINANCE
      addHeaderAndFooter(2, 'ABOUT GLOBAL FINANCE', 'Empowering Modern Financial Opportunities in USDT');

      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(35, 115, W - 70, 50, 6, 6, 'F');
      doc.setDrawColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setLineWidth(1);
      doc.roundedRect(35, 115, W - 70, 50, 6, 6, 'S');

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(
        'GLOBAL FINANCE is built to bring people, digital technology and modern financial opportunities together through a clear and accessible digital platform.',
        50,
        144
      );

      const aboutCards = [
        {
          title: 'GLOBAL VISION',
          desc: 'Building a connected digital finance ecosystem that breaks geographical barriers and provides accessible wealth management.',
        },
        {
          title: 'DIGITAL INNOVATION',
          desc: 'Using cutting-edge blockchain technology to create simple, lightning-fast and modern financial experiences.',
        },
        {
          title: 'PEOPLE & COMMUNITY',
          desc: 'Creating fair opportunities for participation, collective connection and generational financial growth.',
        },
        {
          title: 'TRUST & SECURITY',
          desc: 'Focusing on institutional-grade transparency, responsible practices, automated smart settlements and user confidence.',
        },
      ];

      aboutCards.forEach((c, idx) => {
        const xPos = 35 + idx * 228;
        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, 190, 215, 290, 8, 8, 'F');
        doc.setDrawColor(idx % 2 === 0 ? GOLD[0] : CYAN[0], idx % 2 === 0 ? GOLD[1] : CYAN[1], idx % 2 === 0 ? GOLD[2] : CYAN[2]);
        doc.setLineWidth(1.5);
        doc.roundedRect(xPos, 190, 215, 290, 8, 8, 'S');

        doc.setTextColor(idx % 2 === 0 ? GOLD[0] : CYAN[0], idx % 2 === 0 ? GOLD[1] : CYAN[1], idx % 2 === 0 ? GOLD[2] : CYAN[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(c.title, xPos + 107, 225, { align: 'center' });

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        const splitText = doc.splitTextToSize(c.desc, 185);
        doc.text(splitText, xPos + 15, 265);
      });

    } else if (s.id === 3) {
      // OUR COMPANY
      addHeaderAndFooter(3, 'OUR COMPANY', 'PEOPLE. OPPORTUNITIES. GROWTH. COMMUNITY.');

      // Left box
      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(35, 115, 540, 270, 8, 8, 'F');
      doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
      doc.setLineWidth(1.5);
      doc.roundedRect(35, 115, 540, 270, 8, 8, 'S');

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);

      const p1 = 'GLOBAL FINANCE is a global opportunity platform headquartered in London, UK, built on the principles of trust, innovation, and sustainable growth.';
      const p2 = 'We are committed to creating accessible financial opportunities for people worldwide, empowering individuals and communities to achieve a brighter and more secure tomorrow.';
      const p3 = 'With a strong local presence and an ambitious global vision, GLOBAL FINANCE bridges markets, people, and possibilities — delivering real value through integrity, transparency, and long-term commitment.';

      doc.text(doc.splitTextToSize(p1, 500), 55, 150);
      doc.text(doc.splitTextToSize(p2, 500), 55, 220);
      doc.text(doc.splitTextToSize(p3, 500), 55, 290);

      // Right executive box
      doc.setFillColor(15, 34, 74);
      doc.roundedRect(600, 115, 325, 270, 8, 8, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(600, 115, 325, 270, 8, 8, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('“ Together We Build a Brighter Future ”', 762, 185, { align: 'center' });

      doc.setDrawColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setLineWidth(1);
      doc.line(640, 240, 885, 240);

      // Executive Name - DAVID NIKOLAS
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.text('DAVID NIKOLAS', 762, 275, { align: 'center' });

      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('HEAD OF DEPARTMENT\nGLOBAL FINANCE UK', 762, 305, { align: 'center' });

      // 4 Badges Bottom
      const badges = [
        { t: 'PEOPLE', s: 'Empowering Individuals' },
        { t: 'OPPORTUNITIES', s: 'Creating New Possibilities' },
        { t: 'GROWTH', s: 'Building a Better Tomorrow' },
        { t: 'COMMUNITY', s: 'Stronger Together' },
      ];
      badges.forEach((b, idx) => {
        const xPos = 35 + idx * 228;
        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, 405, 215, 65, 6, 6, 'F');
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(1);
        doc.roundedRect(xPos, 405, 215, 65, 6, 6, 'S');

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text(b.t, xPos + 107, 430, { align: 'center' });
        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.setFontSize(8.5);
        doc.text(b.s, xPos + 107, 448, { align: 'center' });
      });

    } else if (s.id === 4) {
      // OUR VISION & MISSION
      addHeaderAndFooter(4, 'OUR VISION & MISSION', 'Strategic Roadmap for Sustainable Digital Wealth in USDT');

      // Vision Card
      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(35, 115, 430, 360, 8, 8, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(35, 115, 430, 360, 8, 8, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.text('OUR VISION', 60, 150);

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      const vText =
        '• Our vision is to build a trusted and innovative digital finance platform that delivers simple, transparent, and technology-driven USDT-based financial solutions.\n\n• We aim to create a global digital ecosystem where users can manage their digital assets with greater convenience, clarity, and confidence.\n\n• By embracing innovation, responsible practices, and continuous improvement, we aspire to contribute meaningfully to the evolving future of digital finance.';
      doc.text(doc.splitTextToSize(vText, 380), 60, 190);

      // Mission Card
      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(495, 115, 430, 360, 8, 8, 'F');
      doc.setDrawColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setLineWidth(2);
      doc.roundedRect(495, 115, 430, 360, 8, 8, 'S');

      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.text('OUR MISSION', 520, 150);

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      const mText =
        '• Our mission is to make digital finance simple, accessible, and transparent through innovative USDT-based financial solutions.\n\n• We strive to create a user-friendly digital ecosystem that enables users to manage their digital assets with confidence and ease.\n\n• Through technology, innovation, and responsible growth, we are committed to continuously improving the digital finance user experience.';
      doc.text(doc.splitTextToSize(mText, 380), 520, 190);

    } else if (s.id === 5) {
      // TYPES OF INCOMES
      addHeaderAndFooter(5, 'TYPES OF INCOMES', '7 Multi-Dimensional Streams of Financial Reward in USDT');

      const incomes = [
        { num: '01', title: 'REFERRAL INCOME', highlight: '10% Direct Commission on every referral' },
        { num: '02', title: 'LEVEL INCOME', highlight: '0.25% across Levels 2 to 12 (No conditions)' },
        { num: '03', title: 'DAILY WITHDRAWAL ROI INCOME', highlight: '5% Daily (1% Profit + 4% Principal, 25-Day Cycle)' },
        { num: '04', title: 'DAILY COMPOUNDING ROI INCOME', highlight: 'Accelerated 25, 50 & 100 Day Exponential Cycles' },
        { num: '05', title: 'ROI ON ROI INCOME', highlight: '5% on Level 1 + 1% across Levels 2 through 12' },
        { num: '06', title: 'FD STAKING INCOME', highlight: '180-Day (12%) & 240-Day (20%) Fixed Deposit Plans' },
        { num: '07', title: 'SALARY INCOME', highlight: 'Lifetime Monthly Salary up to 50,000 USDT/mo' },
      ];

      incomes.forEach((inc, idx) => {
        const yPos = 118 + idx * 51;
        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(50, yPos, W - 100, 42, 6, 6, 'F');
        doc.setDrawColor(idx === 2 ? GOLD[0] : ROYAL_BLUE[0], idx === 2 ? GOLD[1] : ROYAL_BLUE[1], idx === 2 ? GOLD[2] : ROYAL_BLUE[2]);
        doc.setLineWidth(1.5);
        doc.roundedRect(50, yPos, W - 100, 42, 6, 6, 'S');

        // Num badge
        doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.roundedRect(65, yPos + 7, 36, 28, 4, 4, 'F');
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(inc.num, 83, yPos + 25, { align: 'center' });

        // Title
        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(inc.title, 120, yPos + 26);

        // Highlight
        doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text(inc.highlight, W - 75, yPos + 26, { align: 'right' });
      });

    } else if (s.id === 6) {
      // 01 REFERRAL INCOME
      addHeaderAndFooter(6, '01 REFERRAL INCOME', 'Instant 10% Direct Reward Credited in USDT');

      // Left 10% Box
      doc.setFillColor(13, 32, 70);
      doc.roundedRect(35, 120, 360, 350, 12, 12, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2.5);
      doc.roundedRect(35, 120, 360, 350, 12, 12, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(72);
      doc.text('10%', 215, 235, { align: 'center' });

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Referral Income\nEvery Referral', 215, 285, { align: 'center' });

      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text('Instant USDT Settlement (BEP-20)', 215, 345, { align: 'center' });

      // Right Features
      const refFeatures = [
        {
          title: 'Direct 10% Instant Allocation',
          desc: '10% of the sponsored member’s package amount is credited straight to your available USDT balance immediately upon activation.',
        },
        {
          title: 'Unlimited Direct Referrals',
          desc: 'Introduce as many personal direct members as you wish with zero artificial caps, restrictions, or balancing conditions.',
        },
        {
          title: 'Immediate Real-Time Settlement',
          desc: 'Direct affiliate earnings are unlocked immediately for withdrawal or compounding without locking periods.',
        },
      ];

      refFeatures.forEach((feat, idx) => {
        const yPos = 120 + idx * 120;
        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(425, yPos, 500, 105, 8, 8, 'F');
        doc.setDrawColor(CYAN[0], CYAN[1], CYAN[2]);
        doc.setLineWidth(1.5);
        doc.roundedRect(425, yPos, 500, 105, 8, 8, 'S');

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.text(feat.title, 450, yPos + 35);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(doc.splitTextToSize(feat.desc, 450), 450, yPos + 60);
      });

    } else if (s.id === 7) {
      // 02 LEVEL INCOME
      addHeaderAndFooter(7, '02 LEVEL INCOME', '0.25% Level Income from Level 2 to Level 12');

      // Left 0.25% Box
      doc.setFillColor(13, 32, 70);
      doc.roundedRect(35, 120, 330, 275, 10, 10, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(35, 120, 330, 275, 10, 10, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(54);
      doc.text('0.25%', 200, 215, { align: 'center' });

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('LEVEL INCOME\nFrom Level 2 To Level 12\non every qualifying referral investment', 200, 260, { align: 'center' });

      // Right Level Table
      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(390, 120, 535, 275, 8, 8, 'F');
      doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
      doc.roundedRect(390, 120, 535, 275, 8, 8, 'S');

      // Table Header
      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(390, 120, 535, 35, 'F');
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('Level Tier', 410, 142);
      doc.text('Percentage Rate', 550, 142);
      doc.text('Condition / Qualification', 700, 142);

      const levelRows = [
        { t: 'Level 1 (Direct)', r: '10.00%', c: 'Direct Referral Commission' },
        { t: 'Level 2', r: '0.25%', c: 'No conditions required' },
        { t: 'Level 3 to Level 5', r: '0.25% each', c: 'No conditions required' },
        { t: 'Level 6 to Level 9', r: '0.25% each', c: 'No conditions required' },
        { t: 'Level 10 to Level 12', r: '0.25% each', c: 'No conditions required' },
      ];

      levelRows.forEach((row, idx) => {
        const yPos = 175 + idx * 42;
        doc.setDrawColor(30, 41, 59);
        doc.line(390, yPos - 15, 925, yPos - 15);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.text(row.t, 410, yPos + 8);

        doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
        doc.text(row.r, 550, yPos + 8);

        doc.setTextColor(SUCCESS[0], SUCCESS[1], SUCCESS[2]);
        doc.text(row.c, 700, yPos + 8);
      });

      // Bottom Banner
      doc.setFillColor(10, 30, 74);
      doc.roundedRect(35, 415, W - 70, 52, 8, 8, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(35, 415, W - 70, 52, 8, 8, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('★ THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME ★', W / 2, 447, { align: 'center' });

    } else if (s.id === 8) {
      // 03 DAILY WITHDRAWAL ROI INCOME
      addHeaderAndFooter(8, '03 DAILY WITHDRAWAL ROI INCOME', '5% Daily Allocation: 1% Profit + 4% Principal for 25 Days');

      // Left 5% Box
      doc.setFillColor(13, 32, 70);
      doc.roundedRect(35, 115, 340, 360, 10, 10, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2.5);
      doc.roundedRect(35, 115, 340, 360, 10, 10, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(60);
      doc.text('5%', 205, 195, { align: 'center' });

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.text('DAILY ALLOCATION', 205, 230, { align: 'center' });

      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text('( 1% Profit + 4% Principal for 25 Days )', 205, 255, { align: 'center' });

      doc.setFillColor(BG_COLOR[0], BG_COLOR[1], BG_COLOR[2]);
      doc.roundedRect(55, 280, 300, 70, 6, 6, 'F');
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('Investment Range: 2 - 10,000 USDT', 205, 310, { align: 'center' });
      doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
      doc.setFontSize(9);
      doc.text('Start with as little as 2 USDT and grow wealth potential', 205, 330, { align: 'center' });

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFontSize(10.5);
      doc.text('Cycle Duration: 25 Days    |    Total Allocation: 125%', 205, 410, { align: 'center' });

      // Right Verified 10 USDT Table
      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(400, 115, 525, 290, 8, 8, 'F');
      doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
      doc.roundedRect(400, 115, 525, 290, 8, 8, 'S');

      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(400, 115, 525, 35, 'F');
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.text('Global Finance 25-Day Model Example (10 USDT)', 415, 137);
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.text('USDT Only', 870, 137);

      const roiItems = [
        { label: 'Daily principal allocation (4%)', val: '0.40 USDT', note: 'Capital return component per day' },
        { label: 'Daily profit allocation (1%)', val: '0.10 USDT', note: 'Net daily profit generation' },
        { label: 'Daily total allocation (5%)', val: '0.50 USDT', note: 'Combined daily payout credited' },
        { label: '25-day principal allocation (4% × 25)', val: '10.00 USDT', note: '100% of initial principal returned' },
        { label: '25-day profit allocation (1% × 25)', val: '2.50 USDT', note: '25% pure net profit over cycle' },
        { label: '25-day total allocation (5% × 25)', val: '12.50 USDT', note: '125% total allocation (principal + profit)' },
      ];

      roiItems.forEach((item, idx) => {
        const yPos = 175 + idx * 36;
        if (idx === 5) {
          doc.setFillColor(13, 32, 70);
          doc.rect(400, yPos - 15, 525, 35, 'F');
        }

        doc.setDrawColor(30, 41, 59);
        doc.line(400, yPos - 15, 925, yPos - 15);

        doc.setTextColor(idx === 5 ? GOLD[0] : WHITE[0], idx === 5 ? GOLD[1] : WHITE[1], idx === 5 ? GOLD[2] : WHITE[2]);
        doc.setFont('helvetica', idx === 5 ? 'bold' : 'normal');
        doc.setFontSize(10);
        doc.text(item.label, 415, yPos + 6);

        doc.setTextColor(idx === 5 ? GOLD[0] : (idx === 1 || idx === 4 ? SUCCESS[0] : CYAN[0]), idx === 5 ? GOLD[1] : (idx === 1 || idx === 4 ? SUCCESS[1] : CYAN[1]), idx === 5 ? GOLD[2] : (idx === 1 || idx === 4 ? SUCCESS[2] : CYAN[2]));
        doc.setFont('helvetica', 'bold');
        doc.text(item.val, 665, yPos + 6);

        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.text(item.note, 745, yPos + 6);
      });

      // Disclaimer Bottom
      doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
      doc.setFontSize(8.5);
      const disc = '* Notice: Principal and profit components are accounted for separately. The 4% component represents principal allocation, not profit. Global Finance does not promise guaranteed returns.';
      doc.text(doc.splitTextToSize(disc, 520), 405, 435);

    } else if (s.id === 9) {
      // 04 DAILY COMPOUNDING ROI INCOME
      addHeaderAndFooter(9, '04 DAILY COMPOUNDING ROI INCOME', 'Daily Compounding Income Examples (5% Daily Allocation)');

      const compContent = s.content as any;
      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(35, 115, W - 70, 360, 8, 8, 'F');
      doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
      doc.roundedRect(35, 115, W - 70, 360, 8, 8, 'S');

      // Header row
      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(35, 115, W - 70, 36, 'F');
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.text('Investment (USDT)', 80, 138);
      doc.text('5% Daily ROI', 250, 138);
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.text('25-Day Figure', 430, 138);
      doc.text('50-Day Figure', 610, 138);
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.text('100-Day Figure', 790, 138);

      compContent.tableRows.forEach((row: any, idx: number) => {
        const yPos = 175 + idx * 36;
        if (idx % 2 === 1) {
          doc.setFillColor(13, 26, 56);
          doc.rect(35, yPos - 14, W - 70, 34, 'F');
        }
        doc.setDrawColor(30, 41, 59);
        doc.line(35, yPos - 14, W - 35, yPos - 14);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text(`${row.investment} USDT`, 80, yPos + 6);

        doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
        doc.text(`${row.dailyRoi.toFixed(2)} USDT`, 250, yPos + 6);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'normal');
        doc.text(`${row.figure25Days.toFixed(2)} USDT`, 430, yPos + 6);
        doc.text(`${row.figure50Days.toFixed(2)} USDT`, 610, yPos + 6);

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFont('helvetica', 'bold');
        doc.text(`${row.figure100Days.toFixed(2)} USDT`, 790, yPos + 6);
      });

    } else if (s.id === 10) {
      // 05 ROI ON ROI INCOME
      addHeaderAndFooter(10, '05 ROI ON ROI INCOME', '12th - Level ROI On ROI Matrix');

      const roiLevels = [
        { lvl: 'Level 1', r: '5% (ROI on ROI)', hl: true },
        { lvl: 'Level 2', r: '1%' },
        { lvl: 'Level 3', r: '1%' },
        { lvl: 'Level 4', r: '1%' },
        { lvl: 'Level 5', r: '1%' },
        { lvl: 'Level 6', r: '1%' },
        { lvl: 'Level 7', r: '1%' },
        { lvl: 'Level 8', r: '1%' },
        { lvl: 'Level 9', r: '1%' },
        { lvl: 'Level 10', r: '1%' },
        { lvl: 'Level 11', r: '1%' },
        { lvl: 'Level 12', r: '1%' },
      ];

      roiLevels.forEach((item, idx) => {
        const col = idx % 4;
        const row = Math.floor(idx / 4);
        const xPos = 40 + col * 222;
        const yPos = 125 + row * 90;

        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, yPos, 210, 75, 8, 8, 'F');
        doc.setDrawColor(item.hl ? GOLD[0] : ROYAL_BLUE[0], item.hl ? GOLD[1] : ROYAL_BLUE[1], item.hl ? GOLD[2] : ROYAL_BLUE[2]);
        doc.setLineWidth(item.hl ? 2 : 1);
        doc.roundedRect(xPos, yPos, 210, 75, 8, 8, 'S');

        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.text(item.lvl, xPos + 105, yPos + 24, { align: 'center' });

        doc.setTextColor(item.hl ? GOLD[0] : CYAN[0], item.hl ? GOLD[1] : CYAN[1], item.hl ? GOLD[2] : CYAN[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text(item.r, xPos + 105, yPos + 48, { align: 'center' });

        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.setFontSize(7.5);
        doc.text('Daily on Downline ROI', xPos + 105, yPos + 64, { align: 'center' });
      });

      // Bottom Banner
      doc.setFillColor(10, 30, 74);
      doc.roundedRect(35, 415, W - 70, 52, 8, 8, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(35, 415, W - 70, 52, 8, 8, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('★ THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME ★', W / 2, 447, { align: 'center' });

    } else if (s.id === 11) {
      // 06 FD STAKING INCOME
      addHeaderAndFooter(11, '06 FD STAKING INCOME', 'Fixed Deposit Staking Packages & Summary (All in USDT)');

      const fdRows = [
        { pkg: '10 USDT', d1: '1.20 USDT', t1: '216 USDT', d2: '2.00 USDT', t2: '480 USDT' },
        { pkg: '100 USDT', d1: '12.00 USDT', t1: '2,160 USDT', d2: '20.00 USDT', t2: '4,800 USDT' },
        { pkg: '500 USDT', d1: '60.00 USDT', t1: '10,800 USDT', d2: '100.00 USDT', t2: '24,000 USDT' },
        { pkg: '1,000 USDT', d1: '120.00 USDT', t1: '21,600 USDT', d2: '200.00 USDT', t2: '48,000 USDT' },
        { pkg: '5,000 USDT', d1: '600.00 USDT', t1: '108,000 USDT', d2: '1,000.00 USDT', t2: '240,000 USDT' },
      ];

      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(35, 120, W - 70, 340, 8, 8, 'F');
      doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
      doc.roundedRect(35, 120, W - 70, 340, 8, 8, 'S');

      // Table Header
      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(35, 120, W - 70, 42, 'F');
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.text('FD Package', 70, 145);
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.text('180-Day Plan: Daily (12%)', 230, 145);
      doc.text('180-Day Plan: Total Return', 420, 145);
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.text('240-Day Plan: Daily (20%)', 600, 145);
      doc.text('240-Day Plan: Total Return', 790, 145);

      fdRows.forEach((r, idx) => {
        const yPos = 195 + idx * 48;
        if (idx % 2 === 1) {
          doc.setFillColor(13, 26, 56);
          doc.rect(35, yPos - 18, W - 70, 45, 'F');
        }
        doc.setDrawColor(30, 41, 59);
        doc.line(35, yPos - 18, W - 35, yPos - 18);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(r.pkg, 70, yPos + 8);

        doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
        doc.text(r.d1, 230, yPos + 8);
        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.text(r.t1, 420, yPos + 8);

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.text(r.d2, 600, yPos + 8);
        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.text(r.t2, 790, yPos + 8);
      });

    } else if (s.id === 12) {
      // 07 SALARY INCOME
      addHeaderAndFooter(12, '07 SALARY INCOME', 'LIFETIME SALARY — YOUR EFFORTS. LIFETIME REWARDS.');

      const salaryData = [
        { r: 'A', name: 'Associate', team: '500', sal: '25 USDT/mo' },
        { r: 'B', name: 'Bronze', team: '1,000', sal: '50 USDT/mo' },
        { r: 'S', name: 'Silver', team: '2,000', sal: '100 USDT/mo' },
        { r: 'G', name: 'Gold', team: '5,000', sal: '250 USDT/mo' },
        { r: 'P', name: 'Platinum', team: '10,000', sal: '500 USDT/mo' },
        { r: 'T', name: 'Titanium', team: '25,000', sal: '1,500 USDT/mo' },
        { r: 'PL', name: 'Pearl', team: '50,000', sal: '3,000 USDT/mo' },
        { r: 'R', name: 'Ruby', team: '100,000', sal: '8,000 USDT/mo' },
        { r: 'E', name: 'Emerald', team: '250,000', sal: '25,000 USDT/mo' },
        { r: 'D', name: 'Diamond', team: '500,000', sal: '50,000 USDT/mo' },
      ];

      salaryData.forEach((row, idx) => {
        const col = idx % 5;
        const rIdx = Math.floor(idx / 5);
        const xPos = 40 + col * 178;
        const yPos = 125 + rIdx * 140;

        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, yPos, 168, 120, 8, 8, 'F');
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(1);
        doc.roundedRect(xPos, yPos, 168, 120, 8, 8, 'S');

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text(`[${row.r}]`, xPos + 18, yPos + 30);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFontSize(12);
        doc.text(row.name, xPos + 55, yPos + 30);

        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.text(`Team: ${row.team}`, xPos + 18, yPos + 60);

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.text(row.sal, xPos + 18, yPos + 95);
      });

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('BIGGER DREAMS • HIGHER INCOME • A BRIGHTER FUTURE', W / 2, 440, { align: 'center' });

    } else if (s.id === 13) {
      // TERMS AND CONDITIONS
      addHeaderAndFooter(13, 'TERMS AND CONDITIONS', 'Direct, Transparent and Unconditional Policies in USDT');

      const terms = [
        { num: '1', title: 'Minimum Withdrawal', desc: 'Minimum withdrawal amount is $1 (1 USDT).' },
        { num: '2', title: 'Deposit & Withdrawal', desc: 'All deposits and withdrawals processed strictly in BEP-20 USDT on BNB Smart Chain.' },
        { num: '3', title: 'Lifetime Salary', desc: 'Eligible members receive Salary for Lifetime, subject to applicable plan terms.' },
        { num: '4', title: 'Special Tour Benefits', desc: '10k Team: International Fintech Leadership Tour. 50k Team: Executive Global VIP Luxury Tour.' },
        { num: '5', title: 'Admin Fee: 0%', desc: 'Admin Fee is 0%. Zero deductions on your earned balances.' },
        { num: '6', title: 'Withdrawal Window: 24*7', desc: 'Instant withdrawal window available 24 hours a day, 7 days a week, 365 days a year.' },
      ];

      terms.forEach((t, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const xPos = 40 + col * 445;
        const yPos = 120 + row * 95;

        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, yPos, 430, 80, 8, 8, 'F');
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(1.5);
        doc.roundedRect(xPos, yPos, 430, 80, 8, 8, 'S');

        // Num circle
        doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.circle(xPos + 25, yPos + 26, 14, 'F');
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text(t.num, xPos + 25, yPos + 30, { align: 'center' });

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFontSize(12);
        doc.text(t.title, xPos + 50, yPos + 28);

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.text(doc.splitTextToSize(t.desc, 360), xPos + 50, yPos + 48);
      });

      // Bottom Banner
      doc.setFillColor(10, 30, 74);
      doc.roundedRect(35, 420, W - 70, 50, 8, 8, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(35, 420, W - 70, 50, 8, 8, 'S');

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('★ THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME ★', W / 2, 452, { align: 'center' });

    } else if (s.id === 14) {
      // GET IN TOUCH WITH US
      addHeaderAndFooter(14, 'GET IN TOUCH WITH US', 'Official Platforms & International Contact Information');

      const contactCards = [
        {
          title: 'Official Website',
          desc: 'Visit our official website for registration, account access and announcements:\n\nwww.globalfinance.world',
        },
        {
          title: 'Corporate Headquarters',
          desc: '10 Downing Street, London, SW1A 2AA\nUnited Kingdom\n\nGlobal Finance Holdings UK',
        },
        {
          title: 'Global Operations Hub',
          desc: 'Global Finance Institutional Trade Center\nLondon & Zurich Multi-Trade Desk\n\n24/7 Automated Smart Settlements',
        },
      ];

      contactCards.forEach((c, idx) => {
        const xPos = 40 + idx * 300;
        doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
        doc.roundedRect(xPos, 130, 280, 260, 8, 8, 'F');
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(1.5);
        doc.roundedRect(xPos, 130, 280, 260, 8, 8, 'S');

        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13.5);
        doc.text(c.title, xPos + 140, 170, { align: 'center' });

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10.5);
        doc.text(doc.splitTextToSize(c.desc, 240), xPos + 20, 215);
      });

      // Bottom Values
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('TRUST: Our Foundation   |   GROWTH: Your Opportunity   |   SECURITY: Our Commitment   |   TOGETHER: A Brighter Future', W / 2, 440, { align: 'center' });

    } else if (s.id === 15) {
      // THANK YOU
      try {
        doc.addImage(GLOBAL_FINANCE_LOGO_BASE64, 'JPEG', W / 2 - 140, 45, 280, 156);
      } catch (e) {}

      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(44);
      doc.text('THANK YOU', W / 2, 260, { align: 'center' });

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.text('“For Your Time & Support”', W / 2, 295, { align: 'center' });

      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(W / 2 - 250, 325, 500, 48, 8, 8, 'F');
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(2);
      doc.roundedRect(W / 2 - 250, 325, 500, 48, 8, 8, 'S');

      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('Together We Build a Smarter Financial Future', W / 2, 355, { align: 'center' });

      // 4 Pillars Bottom
      const tyPillars = [
        { t: 'TRUST', s: 'Our Foundation' },
        { t: 'GROWTH', s: 'Your Opportunity' },
        { t: 'SECURITY', s: 'Our Commitment' },
        { t: 'TOGETHER', s: 'A Brighter Future' },
      ];
      tyPillars.forEach((p, idx) => {
        const xPos = 110 + idx * 190;
        doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
        doc.roundedRect(xPos, 400, 170, 50, 6, 6, 'F');
        doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
        doc.roundedRect(xPos, 400, 170, 50, 6, 6, 'S');

        doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.text(p.t, xPos + 85, 422, { align: 'center' });
        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.setFontSize(8.5);
        doc.text(p.s, xPos + 85, 438, { align: 'center' });
      });

      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(0, H - 25, W, 25, 'F');
      doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.text('WWW.GLOBALFINANCE.WORLD • 100% BEP-20 USDT STABLECOIN ARCHITECTURE', W / 2, H - 9, { align: 'center' });
    }
  }

  return doc;
}

export function savePdfToFile(filepath: string) {
  const doc = generatePdfDocument();
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(filepath, pdfBuffer);
  console.log(`Saved PDF to ${filepath}, size: ${pdfBuffer.length} bytes`);
}
