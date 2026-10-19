import { jsPDF } from 'jspdf';
import { GLOBAL_FINANCE_SLIDES } from '../data/presentationData';
import { GLOBAL_FINANCE_LOGO_BASE64 } from '../assets/logoBase64';

export async function downloadGlobalFinancePdf(
  onProgress?: (step: string, percent: number) => void
): Promise<void> {
  onProgress?.('Preparing official PDF presentation...', 30);

  // First try direct download of the pre-built PDF file
  try {
    const response = await fetch('/GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pdf');
    if (response.ok) {
      onProgress?.('Downloading PDF...', 75);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      onProgress?.('PDF Downloaded!', 100);
      return;
    }
  } catch (err) {
    console.warn('Prebuilt PDF fetch failed, falling back to client-side generation', err);
  }

  // Fallback: Client-side jsPDF generation
  onProgress?.('Generating PDF slides in browser...', 50);
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: [960, 540],
  });

  const W = 960;
  const H = 540;
  const BG_COLOR = [7, 13, 30];
  const CARD_BG = [14, 26, 56];
  const HEADER_BG = [10, 20, 47];
  const GOLD = [245, 158, 11];
  const CYAN = [0, 240, 255];
  const WHITE = [255, 255, 255];
  const MUTED = [148, 163, 184];
  const SUCCESS = [16, 185, 129];
  const ROYAL_BLUE = [29, 78, 216];

  const addHeaderAndFooter = (pageNum: number, title: string, subtitle?: string) => {
    doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
    doc.rect(0, 0, W, 45, 'F');

    try {
      doc.addImage(GLOBAL_FINANCE_LOGO_BASE64, 'JPEG', 30, 5, 60, 34);
    } catch (e) {}

    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('GLOBAL FINANCE', 100, 20);

    doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text('Digital Finance for a Smarter Future • USDT Platform', 100, 33);

    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('TRUST · GROWTH · SECURITY · TOGETHER', W - 30, 26, { align: 'right' });

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

    doc.setFillColor(BG_COLOR[0], BG_COLOR[1], BG_COLOR[2]);
    doc.rect(0, 0, W, H, 'F');

    if (s.id === 1) {
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

      doc.setFillColor(HEADER_BG[0], HEADER_BG[1], HEADER_BG[2]);
      doc.rect(0, H - 35, W, 35, 'F');
      doc.setTextColor(CYAN[0], CYAN[1], CYAN[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text('Global Vision    |    Innovative Solutions    |    Financial Freedom    |    100% USDT', W / 2, H - 14, { align: 'center' });
    } else {
      addHeaderAndFooter(s.id, s.title, s.subtitle);

      doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
      doc.roundedRect(35, 120, W - 70, 360, 8, 8, 'F');
      doc.setDrawColor(ROYAL_BLUE[0], ROYAL_BLUE[1], ROYAL_BLUE[2]);
      doc.setLineWidth(1.5);
      doc.roundedRect(35, 120, W - 70, 360, 8, 8, 'S');

      doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const notes = doc.splitTextToSize(s.speakerNotes || '', W - 120);
      doc.text(notes, 60, 160);
    }
  }

  doc.save('GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pdf');
  onProgress?.('PDF Ready!', 100);
}
