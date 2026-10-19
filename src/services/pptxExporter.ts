import pptxgen from 'pptxgenjs';
import { GLOBAL_FINANCE_SLIDES } from '../data/presentationData';
import { GLOBAL_FINANCE_LOGO_BASE64 } from '../assets/logoBase64';

export async function exportGlobalFinancePresentation(
  onProgress?: (step: string, percent: number) => void
): Promise<void> {
  onProgress?.('Initializing PowerPoint deck...', 10);
  const pres = new pptxgen();

  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Global Finance International';
  pres.company = 'Global Finance';
  pres.title = 'GLOBAL FINANCE — Digital Finance for a Smarter Future';
  pres.subject = 'Global Finance Investment Platform Presentation (USDT)';

  // Color Palette Constants
  const BG_COLOR = '070D1E';
  const CARD_BG = '0E1A38';
  const GOLD_COLOR = 'F59E0B';
  const CYAN_COLOR = '00F0FF';
  const WHITE_COLOR = 'FFFFFF';
  const ROYAL_BLUE = '1D4ED8';
  const MUTED_GRAY = '94A3B8';
  const SUCCESS_GREEN = '10B981';

  // Helper for common slide elements
  const addHeaderAndFooter = (slide: pptxgen.Slide, slideNum: number, title: string, subtitle?: string) => {
    // Top banner bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0,
      y: 0,
      w: '100%',
      h: 0.85,
      fill: { color: '0A142F' },
      line: { color: '1E293B', width: 1 },
    });

    // Brand Name Top Left
    slide.addText('GLOBAL FINANCE™', {
      x: 0.5,
      y: 0.12,
      w: 3.5,
      h: 0.35,
      fontSize: 16,
      bold: true,
      color: GOLD_COLOR,
      fontFace: 'Arial',
    });

    slide.addText('Digital Finance for a Smarter Future', {
      x: 0.5,
      y: 0.45,
      w: 4.5,
      h: 0.3,
      fontSize: 10,
      color: CYAN_COLOR,
      fontFace: 'Arial',
    });

    // Right top motto
    slide.addText('TRUST · GROWTH · SECURITY · TOGETHER', {
      x: 8.5,
      y: 0.25,
      w: 4.3,
      h: 0.35,
      fontSize: 10,
      bold: true,
      color: GOLD_COLOR,
      align: 'right',
      fontFace: 'Arial',
    });

    // Slide Title
    slide.addText(title, {
      x: 0.5,
      y: 0.95,
      w: 12.33,
      h: 0.65,
      fontSize: 22,
      bold: true,
      color: GOLD_COLOR,
      fontFace: 'Arial',
    });

    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.5,
        y: 1.5,
        w: 12.33,
        h: 0.35,
        fontSize: 12,
        color: CYAN_COLOR,
        fontFace: 'Arial',
      });
    }

    // Bottom Footer
    slide.addShape(pres.ShapeType.rect, {
      x: 0,
      y: 7.05,
      w: '100%',
      h: 0.45,
      fill: { color: '0A142F' },
      line: { color: '1E293B', width: 1 },
    });

    slide.addText('GLOBAL FINANCE • INVESTMENT PLATFORM • 100% USDT BEP-20', {
      x: 0.5,
      y: 7.12,
      w: 9.0,
      h: 0.3,
      fontSize: 9,
      color: MUTED_GRAY,
      fontFace: 'Arial',
    });

    slide.addText(`Slide ${slideNum} of 15`, {
      x: 10.5,
      y: 7.12,
      w: 2.3,
      h: 0.3,
      fontSize: 9,
      color: GOLD_COLOR,
      align: 'right',
      bold: true,
      fontFace: 'Arial',
    });
  };

  const slides = GLOBAL_FINANCE_SLIDES;

  for (let i = 0; i < slides.length; i++) {
    const data = slides[i];
    onProgress?.(`Building Slide ${i + 1}: ${data.title}...`, Math.round(10 + (i / slides.length) * 80));

    const slide = pres.addSlide();
    slide.background = { color: BG_COLOR };
    slide.addNotes(data.speakerNotes);

    if (data.id === 1) {
      // SLIDE 1: COVER
      try {
        slide.addImage({
          data: GLOBAL_FINANCE_LOGO_BASE64,
          x: 4.16,
          y: 0.7,
          w: 5.0,
          h: 2.8,
        });
      } catch (err) {
        console.warn('Could not embed logo image in cover slide', err);
      }

      slide.addText('WELCOME TO', {
        x: 0.5,
        y: 3.6,
        w: 12.33,
        h: 0.4,
        fontSize: 18,
        bold: true,
        color: CYAN_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('Digital Finance for a Smarter Future', {
        x: 0.5,
        y: 4.05,
        w: 12.33,
        h: 0.9,
        fontSize: 34,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText(
        'We are building a global digital finance ecosystem that empowers people, creates opportunities and drives sustainable growth.',
        {
          x: 1.5,
          y: 5.05,
          w: 10.33,
          h: 0.6,
          fontSize: 14,
          color: WHITE_COLOR,
          align: 'center',
          fontFace: 'Arial',
        }
      );

      // 4 Pillars horizontally
      const pillars = [
        'Trusted Solutions',
        'Sustainable Growth',
        'Financial Inclusion',
        'Customer First',
      ];
      pillars.forEach((p, idx) => {
        const xPos = 1.0 + idx * 2.85;
        slide.addShape(pres.ShapeType.roundRect, {
          x: xPos,
          y: 5.85,
          w: 2.6,
          h: 0.7,
          fill: { color: CARD_BG },
          line: { color: GOLD_COLOR, width: 1.5 },
        });
        slide.addText(p, {
          x: xPos,
          y: 5.95,
          w: 2.6,
          h: 0.5,
          fontSize: 12,
          bold: true,
          color: WHITE_COLOR,
          align: 'center',
          fontFace: 'Arial',
        });
      });

      // Bottom bar
      slide.addShape(pres.ShapeType.rect, {
        x: 0,
        y: 6.9,
        w: '100%',
        h: 0.6,
        fill: { color: '0A142F' },
      });
      slide.addText('Global Vision    |    Innovative Solutions    |    Financial Freedom', {
        x: 0,
        y: 7.05,
        w: 13.33,
        h: 0.35,
        fontSize: 11,
        color: CYAN_COLOR,
        align: 'center',
        bold: true,
        fontFace: 'Arial',
      });

    } else if (data.id === 2) {
      // SLIDE 2: ABOUT GLOBAL FINANCE
      addHeaderAndFooter(slide, 2, 'ABOUT GLOBAL FINANCE');

      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 1.7,
        w: 11.73,
        h: 1.0,
        fill: { color: CARD_BG },
        line: { color: CYAN_COLOR, width: 1.5 },
      });

      slide.addText(
        'GLOBAL FINANCE is built to bring people, digital technology and modern financial opportunities together through a clear and accessible digital platform.',
        {
          x: 1.1,
          y: 1.85,
          w: 11.13,
          h: 0.7,
          fontSize: 15,
          color: WHITE_COLOR,
          fontFace: 'Arial',
          bold: true,
        }
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
        const xPos = 0.8 + idx * 2.98;
        slide.addShape(pres.ShapeType.roundRect, {
          x: xPos,
          y: 2.95,
          w: 2.8,
          h: 3.7,
          fill: { color: CARD_BG },
          line: { color: idx % 2 === 0 ? GOLD_COLOR : CYAN_COLOR, width: 1.5 },
        });

        slide.addText(c.title, {
          x: xPos + 0.15,
          y: 3.15,
          w: 2.5,
          h: 0.6,
          fontSize: 13,
          bold: true,
          color: idx % 2 === 0 ? GOLD_COLOR : CYAN_COLOR,
          fontFace: 'Arial',
          align: 'center',
        });

        slide.addText(c.desc, {
          x: xPos + 0.2,
          y: 3.85,
          w: 2.4,
          h: 2.6,
          fontSize: 11,
          color: WHITE_COLOR,
          fontFace: 'Arial',
          align: 'left',
        });
      });

    } else if (data.id === 3) {
      // SLIDE 3: OUR COMPANY
      addHeaderAndFooter(slide, 3, 'OUR COMPANY', 'PEOPLE. OPPORTUNITIES. GROWTH. COMMUNITY.');

      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 1.9,
        w: 7.5,
        h: 3.8,
        fill: { color: CARD_BG },
        line: { color: ROYAL_BLUE, width: 1.5 },
      });

      slide.addText(
        'GLOBAL FINANCE is a global opportunity platform headquartered in London, UK, built on the principles of trust, innovation, and sustainable growth.\n\nWe are committed to creating accessible financial opportunities for people worldwide, empowering individuals and communities to achieve a brighter and more secure tomorrow.\n\nWith a strong local presence and an ambitious global vision, GLOBAL FINANCE bridges markets, people, and possibilities — delivering real value through integrity, transparency, and long-term commitment.',
        {
          x: 1.1,
          y: 2.1,
          w: 6.9,
          h: 3.4,
          fontSize: 12,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        }
      );

      // Quote & Executive Card
      slide.addShape(pres.ShapeType.roundRect, {
        x: 8.6,
        y: 1.9,
        w: 3.9,
        h: 3.8,
        fill: { color: '0F224A' },
        line: { color: GOLD_COLOR, width: 2 },
      });

      slide.addText('“ Together We Build a Brighter Future ”', {
        x: 8.8,
        y: 2.3,
        w: 3.5,
        h: 1.0,
        fontSize: 16,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addShape(pres.ShapeType.rect, {
        x: 9.0,
        y: 3.6,
        w: 3.1,
        h: 0.05,
        fill: { color: CYAN_COLOR },
      });

      slide.addText('DAVID NIKOLAS', {
        x: 8.8,
        y: 3.9,
        w: 3.5,
        h: 0.4,
        fontSize: 15,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('HEAD OF DEPARTMENT\nGLOBAL FINANCE UK', {
        x: 8.8,
        y: 4.35,
        w: 3.5,
        h: 0.6,
        fontSize: 11,
        color: CYAN_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      // 4 Badges bottom
      const compBadges = [
        { t: 'PEOPLE', s: 'Empowering Individuals' },
        { t: 'OPPORTUNITIES', s: 'Creating New Possibilities' },
        { t: 'GROWTH', s: 'Building a Better Tomorrow' },
        { t: 'COMMUNITY', s: 'Stronger Together' },
      ];
      compBadges.forEach((b, idx) => {
        const xPos = 0.8 + idx * 2.98;
        slide.addShape(pres.ShapeType.roundRect, {
          x: xPos,
          y: 5.9,
          w: 2.8,
          h: 0.9,
          fill: { color: CARD_BG },
          line: { color: GOLD_COLOR, width: 1 },
        });
        slide.addText(`${b.t}\n${b.s}`, {
          x: xPos,
          y: 5.98,
          w: 2.8,
          h: 0.75,
          fontSize: 10,
          bold: true,
          color: WHITE_COLOR,
          align: 'center',
          fontFace: 'Arial',
        });
      });

    } else if (data.id === 4) {
      // SLIDE 4: VISION & MISSION
      addHeaderAndFooter(slide, 4, 'OUR VISION & MISSION', 'Strategic Direction & Core Purpose');

      // Vision Card
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 1.9,
        w: 5.7,
        h: 4.6,
        fill: { color: CARD_BG },
        line: { color: GOLD_COLOR, width: 2 },
      });

      slide.addText('OUR VISION', {
        x: 1.1,
        y: 2.1,
        w: 5.1,
        h: 0.5,
        fontSize: 18,
        bold: true,
        color: GOLD_COLOR,
        fontFace: 'Arial',
      });

      slide.addText(
        '• Our vision is to build a trusted and innovative digital finance platform that delivers simple, transparent, and technology-driven USDT-based financial solutions.\n\n• We aim to create a global digital ecosystem where users can manage their digital assets with greater convenience, clarity, and confidence.\n\n• By embracing innovation, responsible practices, and continuous improvement, we aspire to contribute meaningfully to the evolving future of decentralized finance.',
        {
          x: 1.1,
          y: 2.7,
          w: 5.1,
          h: 3.6,
          fontSize: 11.5,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        }
      );

      // Mission Card
      slide.addShape(pres.ShapeType.roundRect, {
        x: 6.8,
        y: 1.9,
        w: 5.7,
        h: 4.6,
        fill: { color: CARD_BG },
        line: { color: CYAN_COLOR, width: 2 },
      });

      slide.addText('OUR MISSION', {
        x: 7.1,
        y: 2.1,
        w: 5.1,
        h: 0.5,
        fontSize: 18,
        bold: true,
        color: CYAN_COLOR,
        fontFace: 'Arial',
      });

      slide.addText(
        '• Our mission is to make digital finance simple, accessible, and transparent through innovative USDT-based financial solutions.\n\n• We strive to create a user-friendly digital ecosystem that enables users to manage their digital assets with confidence and ease.\n\n• Through technology, innovation, and responsible growth, we are committed to continuously improving the digital finance user experience.',
        {
          x: 7.1,
          y: 2.7,
          w: 5.1,
          h: 3.6,
          fontSize: 11.5,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        }
      );

    } else if (data.id === 5) {
      // SLIDE 5: TYPES OF INCOMES
      addHeaderAndFooter(slide, 5, 'TYPES OF INCOMES', '7 Multi-Dimensional Streams of Financial Reward in USDT');

      const incomes = [
        { num: '01', title: 'REFERRAL INCOME', highlight: '10% Direct Commission' },
        { num: '02', title: 'LEVEL INCOME', highlight: '0.25% across Levels 2 to 12' },
        { num: '03', title: 'DAILY WITHDRAWAL ROI INCOME', highlight: '5% Daily (1% Profit + 4% Principal, 25-Day Cycle)' },
        { num: '04', title: 'DAILY COMPOUNDING ROI INCOME', highlight: '25, 50 & 100 Day Exponential Cycles' },
        { num: '05', title: 'ROI ON ROI INCOME', highlight: '5% Level 1 + 1% Levels 2-12' },
        { num: '06', title: 'FD STAKING INCOME', highlight: '180-Day (12%) & 240-Day (20%) Plans' },
        { num: '07', title: 'SALARY INCOME', highlight: 'Lifetime Monthly Salary up to 50,000 USDT/mo' },
      ];

      incomes.forEach((inc, idx) => {
        const yPos = 1.95 + idx * 0.7;
        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: yPos,
          w: 11.73,
          h: 0.6,
          fill: { color: CARD_BG },
          line: { color: idx === 2 ? GOLD_COLOR : ROYAL_BLUE, width: 1.5 },
        });

        // Number badge
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.0,
          y: yPos + 0.08,
          w: 0.7,
          h: 0.44,
          fill: { color: GOLD_COLOR },
        });
        slide.addText(inc.num, {
          x: 1.0,
          y: yPos + 0.1,
          w: 0.7,
          h: 0.4,
          fontSize: 12,
          bold: true,
          color: '000000',
          align: 'center',
          fontFace: 'Arial',
        });

        // Title
        slide.addText(inc.title, {
          x: 1.9,
          y: yPos + 0.12,
          w: 4.8,
          h: 0.38,
          fontSize: 13,
          bold: true,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        });

        // Highlight
        slide.addText(inc.highlight, {
          x: 6.9,
          y: yPos + 0.12,
          w: 5.4,
          h: 0.38,
          fontSize: 12,
          bold: true,
          color: CYAN_COLOR,
          align: 'right',
          fontFace: 'Arial',
        });
      });

    } else if (data.id === 6) {
      // SLIDE 6: 01 REFERRAL INCOME
      addHeaderAndFooter(slide, 6, '01 REFERRAL INCOME', 'Instant 10% Direct Reward Credited in USDT');

      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 1.9,
        w: 4.5,
        h: 4.8,
        fill: { color: '0D2046' },
        line: { color: GOLD_COLOR, width: 2.5 },
      });

      slide.addText('10%', {
        x: 0.8,
        y: 2.2,
        w: 4.5,
        h: 1.6,
        fontSize: 72,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('REFERRAL INCOME\nEVERY REFERRAL', {
        x: 0.8,
        y: 3.9,
        w: 4.5,
        h: 1.0,
        fontSize: 18,
        bold: true,
        color: WHITE_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('Paid instantly in USDT (BEP-20)', {
        x: 0.8,
        y: 5.1,
        w: 4.5,
        h: 0.5,
        fontSize: 12,
        color: CYAN_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      // Right Features
      const refFeatures = [
        {
          title: 'Direct 10% Instant Allocation',
          desc: '10% of the sponsored member’s package amount is credited straight to your available balance upon package activation in USDT.',
        },
        {
          title: 'Unlimited Direct Referrals',
          desc: 'No limit on the number of members you can personally refer. Grow your active organization at your own pace.',
        },
        {
          title: 'Immediate Real-Time Settlement',
          desc: 'Funds are unlocked immediately for withdrawal or compounding. No lock-in period on referral earnings.',
        },
      ];

      refFeatures.forEach((feat, idx) => {
        const yPos = 1.9 + idx * 1.65;
        slide.addShape(pres.ShapeType.roundRect, {
          x: 5.6,
          y: yPos,
          w: 6.9,
          h: 1.45,
          fill: { color: CARD_BG },
          line: { color: CYAN_COLOR, width: 1.5 },
        });

        slide.addText(feat.title, {
          x: 5.9,
          y: yPos + 0.15,
          w: 6.3,
          h: 0.4,
          fontSize: 14,
          bold: true,
          color: GOLD_COLOR,
          fontFace: 'Arial',
        });

        slide.addText(feat.desc, {
          x: 5.9,
          y: yPos + 0.55,
          w: 6.3,
          h: 0.75,
          fontSize: 11,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        });
      });

    } else if (data.id === 7) {
      // SLIDE 7: 02 LEVEL INCOME
      addHeaderAndFooter(slide, 7, '02 LEVEL INCOME', '0.25% Level Income from Level 2 to Level 12');

      // Left Highlight
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 1.9,
        w: 4.2,
        h: 3.8,
        fill: { color: '0D2046' },
        line: { color: GOLD_COLOR, width: 2.5 },
      });

      slide.addText('0.25%', {
        x: 0.8,
        y: 2.2,
        w: 4.2,
        h: 1.4,
        fontSize: 56,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('LEVEL INCOME\nFrom Level 2 To Level 12\non every qualifying referral investment', {
        x: 0.9,
        y: 3.7,
        w: 4.0,
        h: 1.4,
        fontSize: 14,
        bold: true,
        color: WHITE_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      // Right table
      const levelRows: pptxgen.TableRow[] = [
        [
          { text: 'Level Tier', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' } } },
          { text: 'Percentage Rate', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' } } },
          { text: 'Qualification Requirement', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' } } },
        ],
        [
          { text: 'Level 1 (Direct)', options: { color: WHITE_COLOR } },
          { text: '10.00%', options: { bold: true, color: CYAN_COLOR } },
          { text: 'Direct Referral Commission', options: { color: MUTED_GRAY } },
        ],
        [
          { text: 'Level 2', options: { color: WHITE_COLOR } },
          { text: '0.25%', options: { bold: true, color: CYAN_COLOR } },
          { text: 'No conditions required', options: { color: SUCCESS_GREEN, bold: true } },
        ],
        [
          { text: 'Level 3 to Level 5', options: { color: WHITE_COLOR } },
          { text: '0.25% each', options: { bold: true, color: CYAN_COLOR } },
          { text: 'No conditions required', options: { color: SUCCESS_GREEN, bold: true } },
        ],
        [
          { text: 'Level 6 to Level 9', options: { color: WHITE_COLOR } },
          { text: '0.25% each', options: { bold: true, color: CYAN_COLOR } },
          { text: 'No conditions required', options: { color: SUCCESS_GREEN, bold: true } },
        ],
        [
          { text: 'Level 10 to Level 12', options: { color: WHITE_COLOR } },
          { text: '0.25% each', options: { bold: true, color: CYAN_COLOR } },
          { text: 'No conditions required', options: { color: SUCCESS_GREEN, bold: true } },
        ],
      ];

      slide.addTable(levelRows, {
        x: 5.3,
        y: 1.9,
        w: 7.2,
        h: 3.8,
        fontSize: 11,
        fontFace: 'Arial',
        color: WHITE_COLOR,
        fill: { color: CARD_BG },
        border: { type: 'solid', pt: 1, color: '1E293B' },
      });

      // Disclaimer Banner at Bottom
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 5.95,
        w: 11.73,
        h: 0.8,
        fill: { color: '0A1E4A' },
        line: { color: GOLD_COLOR, width: 2 },
      });

      slide.addText('THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME', {
        x: 0.8,
        y: 6.15,
        w: 11.73,
        h: 0.45,
        fontSize: 15,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

    } else if (data.id === 8) {
      // SLIDE 8: 03 DAILY WITHDRAWAL ROI INCOME
      addHeaderAndFooter(slide, 8, '03 DAILY WITHDRAWAL ROI INCOME', '5% Daily Allocation: 1% Profit + 4% Principal for 25 Days');

      // Top Highlights Card
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 1.9,
        w: 4.8,
        h: 4.8,
        fill: { color: '0D2046' },
        line: { color: GOLD_COLOR, width: 2.5 },
      });

      slide.addText('5%', {
        x: 0.8,
        y: 2.1,
        w: 4.8,
        h: 1.2,
        fontSize: 64,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('DAILY ALLOCATION', {
        x: 0.8,
        y: 3.3,
        w: 4.8,
        h: 0.5,
        fontSize: 18,
        bold: true,
        color: WHITE_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('( 1% Profit + 4% Principal for 25 Days )', {
        x: 0.8,
        y: 3.8,
        w: 4.8,
        h: 0.45,
        fontSize: 13,
        bold: true,
        color: CYAN_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('Investment Range:\n2 USDT - 10,000 USDT', {
        x: 0.8,
        y: 4.4,
        w: 4.8,
        h: 0.9,
        fontSize: 15,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('Start with as little as 2 USDT and grow your wealth greater potential', {
        x: 1.0,
        y: 5.4,
        w: 4.4,
        h: 0.9,
        fontSize: 10.5,
        color: MUTED_GRAY,
        align: 'center',
        fontFace: 'Arial',
      });

      // Right Table - Exact 10 USDT example matching Section 4 prompt
      const roiTableRows: pptxgen.TableRow[] = [
        [
          { text: 'Cycle Breakdown Item (10 USDT Example)', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' } } },
          { text: 'Amount (USDT)', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'right' } },
          { text: 'Component Detail', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' } } },
        ],
        [
          { text: 'Daily principal allocation (4%)', options: { color: WHITE_COLOR } },
          { text: '0.40 USDT', options: { bold: true, color: CYAN_COLOR, align: 'right' } },
          { text: 'Capital return component per day', options: { color: MUTED_GRAY } },
        ],
        [
          { text: 'Daily profit allocation (1%)', options: { color: WHITE_COLOR } },
          { text: '0.10 USDT', options: { bold: true, color: SUCCESS_GREEN, align: 'right' } },
          { text: 'Net daily profit generation', options: { color: MUTED_GRAY } },
        ],
        [
          { text: 'Daily total allocation (5%)', options: { bold: true, color: WHITE_COLOR } },
          { text: '0.50 USDT', options: { bold: true, color: GOLD_COLOR, align: 'right' } },
          { text: 'Combined daily payout credited', options: { color: MUTED_GRAY } },
        ],
        [
          { text: '25-day principal allocation (4% × 25)', options: { color: WHITE_COLOR } },
          { text: '10.00 USDT', options: { bold: true, color: CYAN_COLOR, align: 'right' } },
          { text: '100% of initial principal returned', options: { color: MUTED_GRAY } },
        ],
        [
          { text: '25-day profit allocation (1% × 25)', options: { color: WHITE_COLOR } },
          { text: '2.50 USDT', options: { bold: true, color: SUCCESS_GREEN, align: 'right' } },
          { text: '25% pure net profit over cycle', options: { color: MUTED_GRAY } },
        ],
        [
          { text: '25-day total allocation (5% × 25)', options: { bold: true, color: GOLD_COLOR, fill: { color: '0D2046' } } },
          { text: '12.50 USDT', options: { bold: true, color: GOLD_COLOR, fill: { color: '0D2046' }, align: 'right' } },
          { text: '125% total allocation (principal + profit)', options: { bold: true, color: WHITE_COLOR, fill: { color: '0D2046' } } },
        ],
      ];

      slide.addTable(roiTableRows, {
        x: 5.9,
        y: 1.9,
        w: 6.6,
        h: 4.1,
        fontSize: 10.5,
        fontFace: 'Arial',
        color: WHITE_COLOR,
        fill: { color: CARD_BG },
        border: { type: 'solid', pt: 1, color: '1E293B' },
      });

      // Disclaimer Bottom
      slide.addText(
        '* Notice: Principal and profit components are accounted for separately. The 4% component represents principal allocation, not profit. Global Finance does not promise guaranteed or speculative returns.',
        {
          x: 5.9,
          y: 6.15,
          w: 6.6,
          h: 0.7,
          fontSize: 9,
          color: MUTED_GRAY,
          fontFace: 'Arial',
        }
      );

    } else if (data.id === 9) {
      // SLIDE 9: 04 DAILY COMPOUNDING ROI INCOME
      addHeaderAndFooter(slide, 9, '04 DAILY COMPOUNDING ROI INCOME', 'Daily Compounding Income Examples (5% Daily Allocation)');

      const compContent = data.content as any;
      const compTableRows: pptxgen.TableRow[] = [
        [
          { text: 'Investment (USDT)', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '5% Daily ROI', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '25-Day Figure', options: { bold: true, color: CYAN_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '50-Day Figure', options: { bold: true, color: CYAN_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '100-Day Figure', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
        ],
      ];

      compContent.tableRows.forEach((row: any, idx: number) => {
        const isAlternate = idx % 2 === 1;
        compTableRows.push([
          { text: `${row.investment} USDT`, options: { bold: true, color: WHITE_COLOR, fill: { color: isAlternate ? '0D1A38' : CARD_BG }, align: 'center' } },
          { text: `${row.dailyRoi.toFixed(2)} USDT`, options: { color: CYAN_COLOR, fill: { color: isAlternate ? '0D1A38' : CARD_BG }, align: 'center' } },
          { text: `${row.figure25Days.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT`, options: { color: WHITE_COLOR, fill: { color: isAlternate ? '0D1A38' : CARD_BG }, align: 'center' } },
          { text: `${row.figure50Days.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT`, options: { color: WHITE_COLOR, fill: { color: isAlternate ? '0D1A38' : CARD_BG }, align: 'center' } },
          { text: `${row.figure100Days.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT`, options: { bold: true, color: GOLD_COLOR, fill: { color: isAlternate ? '0D1A38' : CARD_BG }, align: 'center' } },
        ]);
      });

      slide.addTable(compTableRows, {
        x: 0.8,
        y: 1.9,
        w: 11.73,
        h: 4.4,
        fontSize: 10,
        fontFace: 'Arial',
        color: WHITE_COLOR,
        border: { type: 'solid', pt: 1, color: '1E293B' },
      });

      slide.addText(
        '* Compounding figures demonstrate theoretical compounding over successive 25-day cycles at 5% daily allocation. Reinvesting earnings carries typical fintech platform market conditions.',
        {
          x: 0.8,
          y: 6.45,
          w: 11.73,
          h: 0.45,
          fontSize: 9,
          color: MUTED_GRAY,
          fontFace: 'Arial',
          align: 'center',
        }
      );

    } else if (data.id === 10) {
      // SLIDE 10: 05 ROI ON ROI INCOME
      addHeaderAndFooter(slide, 10, '05 ROI ON ROI INCOME', '12th - Level ROI On ROI Matrix');

      const roiOnRoiRows: pptxgen.TableRow[] = [
        [
          { text: 'Level', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: 'Daily Level Income', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: 'Level', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: 'Daily Level Income', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
        ],
        [
          { text: 'Level 1', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '5% (ROI on ROI)', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Level 7', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { bold: true, color: CYAN_COLOR, align: 'center' } },
        ],
        [
          { text: 'Level 2', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
          { text: 'Level 8', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
        ],
        [
          { text: 'Level 3', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
          { text: 'Level 9', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
        ],
        [
          { text: 'Level 4', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
          { text: 'Level 10', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
        ],
        [
          { text: 'Level 5', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
          { text: 'Level 11', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
        ],
        [
          { text: 'Level 6', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
          { text: 'Level 12', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1%', options: { color: CYAN_COLOR, align: 'center' } },
        ],
      ];

      slide.addTable(roiOnRoiRows, {
        x: 1.5,
        y: 2.0,
        w: 10.33,
        h: 3.6,
        fontSize: 12,
        fontFace: 'Arial',
        color: WHITE_COLOR,
        fill: { color: CARD_BG },
        border: { type: 'solid', pt: 1, color: '1E293B' },
      });

      // Bottom Condition Banner
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 5.95,
        w: 11.73,
        h: 0.8,
        fill: { color: '0A1E4A' },
        line: { color: GOLD_COLOR, width: 2 },
      });

      slide.addText('THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME', {
        x: 0.8,
        y: 6.15,
        w: 11.73,
        h: 0.45,
        fontSize: 15,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

    } else if (data.id === 11) {
      // SLIDE 11: 06 FD STAKING INCOME
      addHeaderAndFooter(slide, 11, '06 FD STAKING INCOME', 'Fixed Deposit Staking Packages & Summary (All in USDT)');

      const fdRows: pptxgen.TableRow[] = [
        [
          { text: 'FD Package', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '180-Day Plan:\nDaily Return (12%)', options: { bold: true, color: CYAN_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '180-Day Plan:\nTotal Return', options: { bold: true, color: CYAN_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '240-Day Plan:\nDaily Return (20%)', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: '240-Day Plan:\nTotal Return', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
        ],
        [
          { text: '10 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '1.20 USDT', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '216 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '2.00 USDT', options: { color: GOLD_COLOR, align: 'center' } },
          { text: '480 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: '100 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '12.00 USDT', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '2,160 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '20.00 USDT', options: { color: GOLD_COLOR, align: 'center' } },
          { text: '4,800 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: '500 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '60.00 USDT', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '10,800 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '100.00 USDT', options: { color: GOLD_COLOR, align: 'center' } },
          { text: '24,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: '1,000 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '120.00 USDT', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '21,600 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '200.00 USDT', options: { color: GOLD_COLOR, align: 'center' } },
          { text: '48,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: '5,000 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '600.00 USDT', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '108,000 USDT', options: { bold: true, color: WHITE_COLOR, align: 'center' } },
          { text: '1,000.00 USDT', options: { color: GOLD_COLOR, align: 'center' } },
          { text: '240,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
      ];

      slide.addTable(fdRows, {
        x: 0.8,
        y: 2.0,
        w: 11.73,
        h: 4.4,
        fontSize: 11,
        fontFace: 'Arial',
        color: WHITE_COLOR,
        fill: { color: CARD_BG },
        border: { type: 'solid', pt: 1, color: '1E293B' },
      });

      slide.addText(
        '* Fixed Deposit staking locked for specified tenure. Daily distributions credited continuously in USDT.',
        {
          x: 0.8,
          y: 6.5,
          w: 11.73,
          h: 0.35,
          fontSize: 9.5,
          color: MUTED_GRAY,
          fontFace: 'Arial',
          align: 'center',
        }
      );

    } else if (data.id === 12) {
      // SLIDE 12: 07 SALARY INCOME
      addHeaderAndFooter(slide, 12, '07 SALARY INCOME', 'LIFETIME SALARY — YOUR EFFORTS. LIFETIME REWARDS.');

      const salaryRows: pptxgen.TableRow[] = [
        [
          { text: 'Rank', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: 'Rank Title', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: 'Required Team Size', options: { bold: true, color: CYAN_COLOR, fill: { color: '0A142F' }, align: 'center' } },
          { text: 'Monthly Lifetime Salary (USDT)', options: { bold: true, color: GOLD_COLOR, fill: { color: '0A142F' }, align: 'center' } },
        ],
        [
          { text: 'A', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Associate', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '500', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '25 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'B', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Bronze', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '1,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '50 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'S', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Silver', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '2,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '100 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'G', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Gold', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '5,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '250 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'P', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Platinum', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '10,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '500 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'T', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Titanium', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '25,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '1,500 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'PL', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Pearl', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '50,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '3,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'R', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Ruby', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '100,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '8,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'E', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Emerald', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '250,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '25,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
        [
          { text: 'D', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
          { text: 'Diamond', options: { color: WHITE_COLOR, align: 'center' } },
          { text: '500,000', options: { color: CYAN_COLOR, align: 'center' } },
          { text: '50,000 USDT', options: { bold: true, color: GOLD_COLOR, align: 'center' } },
        ],
      ];

      slide.addTable(salaryRows, {
        x: 1.2,
        y: 1.9,
        w: 10.93,
        h: 4.5,
        fontSize: 10,
        fontFace: 'Arial',
        color: WHITE_COLOR,
        fill: { color: CARD_BG },
        border: { type: 'solid', pt: 1, color: '1E293B' },
      });

      slide.addText('BIGGER DREAMS • HIGHER INCOME • A BRIGHTER FUTURE', {
        x: 0.8,
        y: 6.5,
        w: 11.73,
        h: 0.4,
        fontSize: 12,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

    } else if (data.id === 13) {
      // SLIDE 13: TERMS AND CONDITIONS
      addHeaderAndFooter(slide, 13, 'TERMS AND CONDITIONS', 'Direct, Transparent and Unconditional Policies');

      const termsList = [
        { num: '1', title: 'Minimum Withdrawal', desc: 'Minimum withdrawal amount is $1 (1 USDT).' },
        { num: '2', title: 'Deposit & Withdrawal', desc: 'All deposits and withdrawals will be processed only in BEP-20 USDT on BNB Smart Chain.' },
        { num: '3', title: 'Lifetime Salary', desc: 'Eligible members can receive Salary for Lifetime, subject to the applicable plan terms and conditions.' },
        { num: '4', title: 'Special Tour Benefits', desc: '10,000 Team: International Energy & Fintech Conference Tour.\n50,000 Team: Executive Global VIP Luxury Tour.' },
        { num: '5', title: 'Admin Fee: 0%', desc: 'Admin Fee is 0%. Zero deductions on earned USDT balances.' },
        { num: '6', title: 'Withdrawal Window: 24*7', desc: 'Instant withdrawal window available 24 hours a day, 7 days a week.' },
      ];

      termsList.forEach((t, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const xPos = 0.8 + col * 6.0;
        const yPos = 1.9 + row * 1.35;

        slide.addShape(pres.ShapeType.roundRect, {
          x: xPos,
          y: yPos,
          w: 5.7,
          h: 1.2,
          fill: { color: CARD_BG },
          line: { color: GOLD_COLOR, width: 1.5 },
        });

        // Number Badge
        slide.addShape(pres.ShapeType.ellipse, {
          x: xPos + 0.15,
          y: yPos + 0.15,
          w: 0.45,
          h: 0.45,
          fill: { color: GOLD_COLOR },
        });
        slide.addText(t.num, {
          x: xPos + 0.15,
          y: yPos + 0.18,
          w: 0.45,
          h: 0.4,
          fontSize: 12,
          bold: true,
          color: '000000',
          align: 'center',
          fontFace: 'Arial',
        });

        slide.addText(t.title, {
          x: xPos + 0.75,
          y: yPos + 0.12,
          w: 4.8,
          h: 0.35,
          fontSize: 12.5,
          bold: true,
          color: GOLD_COLOR,
          fontFace: 'Arial',
        });

        slide.addText(t.desc, {
          x: xPos + 0.75,
          y: yPos + 0.45,
          w: 4.8,
          h: 0.65,
          fontSize: 10,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        });
      });

      // Bottom banner
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 6.05,
        w: 11.73,
        h: 0.75,
        fill: { color: '0A1E4A' },
        line: { color: GOLD_COLOR, width: 2 },
      });

      slide.addText('THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME.', {
        x: 0.8,
        y: 6.2,
        w: 11.73,
        h: 0.45,
        fontSize: 15,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

    } else if (data.id === 14) {
      // SLIDE 14: GET IN TOUCH WITH US
      addHeaderAndFooter(slide, 14, 'GET IN TOUCH WITH US', 'Official Platforms & International Contact Information');

      const contacts = [
        {
          title: 'Official Website',
          lines: ['Visit our official website for portal access & member registrations:', 'www.globalfinance.world'],
        },
        {
          title: 'Corporate Headquarters',
          lines: ['10 Downing Street, London, SW1A 2AA', 'United Kingdom', 'Global Finance International Holdings UK'],
        },
        {
          title: 'Global Operations & Custody Hub',
          lines: ['Global Finance Institutional Operations', 'London & Zurich Multi-Trade Hub', '24/7 Automated Smart Settlements'],
        },
      ];

      contacts.forEach((c, idx) => {
        const yPos = 1.9 + idx * 1.5;
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.5,
          y: yPos,
          w: 10.33,
          h: 1.3,
          fill: { color: CARD_BG },
          line: { color: GOLD_COLOR, width: 1.5 },
        });

        slide.addText(c.title, {
          x: 1.8,
          y: yPos + 0.15,
          w: 9.7,
          h: 0.4,
          fontSize: 15,
          bold: true,
          color: GOLD_COLOR,
          fontFace: 'Arial',
        });

        slide.addText(c.lines.join('\n'), {
          x: 1.8,
          y: yPos + 0.55,
          w: 9.7,
          h: 0.65,
          fontSize: 11.5,
          color: WHITE_COLOR,
          fontFace: 'Arial',
        });
      });

      // Bottom Badges
      const contactFooters = [
        { t: 'TRUST', s: 'Our Foundation' },
        { t: 'GROWTH', s: 'Your Opportunity' },
        { t: 'SECURITY', s: 'Our Commitment' },
        { t: 'TOGETHER', s: 'A Brighter Future' },
      ];
      contactFooters.forEach((b, idx) => {
        const xPos = 0.8 + idx * 2.98;
        slide.addShape(pres.ShapeType.roundRect, {
          x: xPos,
          y: 6.4,
          w: 2.8,
          h: 0.55,
          fill: { color: '0A142F' },
        });
        slide.addText(`${b.t} — ${b.s}`, {
          x: xPos,
          y: 6.48,
          w: 2.8,
          h: 0.35,
          fontSize: 9.5,
          bold: true,
          color: CYAN_COLOR,
          align: 'center',
          fontFace: 'Arial',
        });
      });

    } else if (data.id === 15) {
      // SLIDE 15: THANK YOU
      try {
        slide.addImage({
          data: GLOBAL_FINANCE_LOGO_BASE64,
          x: 4.16,
          y: 0.7,
          w: 5.0,
          h: 2.8,
        });
      } catch (err) {
        console.warn('Could not embed logo image in thank you slide', err);
      }

      slide.addText('THANK YOU', {
        x: 0.5,
        y: 3.65,
        w: 12.33,
        h: 0.9,
        fontSize: 48,
        bold: true,
        color: GOLD_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addText('For Your Time & Support', {
        x: 0.5,
        y: 4.55,
        w: 12.33,
        h: 0.5,
        fontSize: 20,
        italic: true,
        color: WHITE_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      slide.addShape(pres.ShapeType.roundRect, {
        x: 2.5,
        y: 5.2,
        w: 8.33,
        h: 0.75,
        fill: { color: CARD_BG },
        line: { color: GOLD_COLOR, width: 2 },
      });

      slide.addText('Together We Build a Smarter Financial Future', {
        x: 2.5,
        y: 5.35,
        w: 8.33,
        h: 0.45,
        fontSize: 16,
        bold: true,
        color: CYAN_COLOR,
        align: 'center',
        fontFace: 'Arial',
      });

      // 4 Pillars bottom
      const tyPillars = [
        { t: 'TRUST', s: 'Our Foundation' },
        { t: 'GROWTH', s: 'Your Opportunity' },
        { t: 'SECURITY', s: 'Our Commitment' },
        { t: 'TOGETHER', s: 'A Brighter Future' },
      ];
      tyPillars.forEach((p, idx) => {
        const xPos = 1.0 + idx * 2.85;
        slide.addShape(pres.ShapeType.roundRect, {
          x: xPos,
          y: 6.2,
          w: 2.6,
          h: 0.7,
          fill: { color: '0A142F' },
          line: { color: ROYAL_BLUE, width: 1 },
        });
        slide.addText(`${p.t}\n${p.s}`, {
          x: xPos,
          y: 6.28,
          w: 2.6,
          h: 0.55,
          fontSize: 10,
          bold: true,
          color: WHITE_COLOR,
          align: 'center',
          fontFace: 'Arial',
        });
      });
    }
  }

  onProgress?.('Generating .pptx file...', 95);
  await pres.writeFile({ fileName: 'GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pptx' });
  onProgress?.('Download ready!', 100);
}
