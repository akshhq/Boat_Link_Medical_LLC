/* ============================================================
   MedEquip Pro — script.js
   Medical Equipment Catalog — Complete JavaScript
   ============================================================ */

'use strict';

// ─── 1. CONSTANTS & CONFIGURATION ──────────────────────────────
const TOTAL_PRODUCTS = 12;

// ─── 2. CATEGORIES ─────────────────────────────────────────────
const categories = [
  'Diagnostic Equipment',
  'Patient Monitoring',
  'Laboratory Equipment',
  'Surgical Equipment',
  'Emergency Care',
];

// ─── 3. TAG CSS CLASS MAP ───────────────────────────────────────
const tagClassMap = {
  'Diagnostic Equipment': 'tag--diagnostic',
  'Patient Monitoring':   'tag--monitoring',
  'Laboratory Equipment': 'tag--laboratory',
  'Surgical Equipment':   'tag--surgical',
  'Emergency Care':       'tag--emergency',
};

// ─── 4. SVG GENERATOR ──────────────────────────────────────────
/**
 * Generates a data-URI SVG illustration for a product.
 * @param {string} iconKey – one of the icon keys below
 * @param {string} category – primary category for colour theming
 */
function buildSVG(iconKey, category) {
  const palette = {
    'Diagnostic Equipment': { bg1: '#E8F0FC', bg2: '#C7D9F5', body: '#0A3D6B', accent: '#1A6BB5', screen: '#021D36', trace: '#00FF88', trace2: '#00B4D8' },
    'Patient Monitoring':   { bg1: '#E8F8F0', bg2: '#B8E8D0', body: '#006B3F', accent: '#00875A', screen: '#011A0D', trace: '#00FF88', trace2: '#90EE90' },
    'Laboratory Equipment': { bg1: '#F3E8FE', bg2: '#DDB8F5', body: '#5B007E', accent: '#7B2D8B', screen: '#1A001F', trace: '#E44BF0', trace2: '#C78DF5' },
    'Surgical Equipment':   { bg1: '#FEE8E8', bg2: '#F5B8B8', body: '#8B0000', accent: '#B22222', screen: '#1A0000', trace: '#FF6B6B', trace2: '#FF9999' },
    'Emergency Care':       { bg1: '#FEF0E8', bg2: '#F5CBB8', body: '#8B3300', accent: '#D35400', screen: '#1A0A00', trace: '#FF8C00', trace2: '#FFB347' },
  };

  const c = palette[category] || palette['Diagnostic Equipment'];

  const icons = {
    ecg: `
      <rect x="30" y="24" width="180" height="128" rx="10" fill="${c.body}"/>
      <rect x="38" y="32" width="164" height="100" rx="6" fill="${c.screen}"/>
      <text x="46" y="52" font-family="monospace" font-size="9" fill="${c.trace2}" opacity="0.8">ECG — PATIENT VITALS</text>
      <line x1="38" y1="58" x2="202" y2="58" stroke="${c.body}" stroke-width="1"/>
      <polyline points="48,95 65,95 73,62 83,128 95,72 107,95 124,95 136,95 144,60 156,130 168,70 180,95 200,95"
        fill="none" stroke="${c.trace}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="48" y="73" font-family="monospace" font-size="8" fill="${c.trace}" opacity="0.7">ECG</text>
      <rect x="165" y="64" width="28" height="18" rx="3" fill="${c.body}"/>
      <text x="179" y="76" font-family="monospace" font-size="10" fill="${c.trace}" text-anchor="middle" font-weight="bold">72</text>
      <rect x="60" y="158" width="120" height="10" rx="3" fill="${c.body}" opacity="0.5"/>
      <circle cx="120" cy="163" r="3" fill="${c.accent}"/>`,

    monitor: `
      <rect x="25" y="20" width="190" height="130" rx="10" fill="${c.body}"/>
      <rect x="34" y="28" width="172" height="100" rx="5" fill="${c.screen}"/>
      <text x="42" y="46" font-family="monospace" font-size="8" fill="${c.trace2}" opacity="0.9">VITAL SIGNS MONITOR</text>
      <path d="M42,80 Q57,58 72,80 Q87,102 102,80 Q117,58 132,80 Q147,102 162,80 Q177,58 192,80"
        fill="none" stroke="${c.trace}" stroke-width="2.5"/>
      <path d="M42,105 L65,105 L75,92 L85,118 L95,92 L105,105 L192,105"
        fill="none" stroke="${c.trace2}" stroke-width="2"/>
      <rect x="148" y="52" width="34" height="36" rx="3" fill="${c.body}"/>
      <text x="165" y="67" font-family="monospace" font-size="11" fill="${c.trace}" text-anchor="middle" font-weight="bold">98</text>
      <text x="165" y="79" font-family="monospace" font-size="7" fill="${c.trace}" text-anchor="middle" opacity="0.7">SpO₂%</text>
      <rect x="85" y="155" width="70" height="10" rx="3" fill="${c.body}" opacity="0.5"/>
      <rect x="25" y="152" width="190" height="5" rx="2" fill="${c.accent}" opacity="0.3"/>`,

    ultrasound: `
      <rect x="50" y="14" width="140" height="100" rx="8" fill="${c.body}"/>
      <rect x="58" y="22" width="124" height="70" rx="4" fill="${c.screen}"/>
      <ellipse cx="120" cy="57" rx="50" ry="28" fill="none" stroke="${c.accent}" stroke-width="1.5" opacity="0.5"/>
      <ellipse cx="120" cy="57" rx="34" ry="18" fill="none" stroke="${c.accent}" stroke-width="1.5" opacity="0.6"/>
      <ellipse cx="120" cy="57" rx="20" ry="10" fill="none" stroke="${c.trace}" stroke-width="1.5" opacity="0.8"/>
      <ellipse cx="120" cy="57" rx="8" ry="4" fill="${c.trace}" opacity="0.9"/>
      <line x1="120" y1="29" x2="120" y2="84" stroke="${c.trace2}" stroke-width="0.8" opacity="0.4"/>
      <line x1="64" y1="57" x2="176" y2="57" stroke="${c.trace2}" stroke-width="0.8" opacity="0.4"/>
      <rect x="58" y="98" width="124" height="12" rx="3" fill="${c.body}" opacity="0.8"/>
      <text x="120" y="108" font-family="monospace" font-size="8" fill="${c.trace2}" text-anchor="middle">FREQ: 3.5 MHz</text>
      <rect x="80" y="118" width="80" height="46" rx="6" fill="${c.accent}" opacity="0.3"/>
      <rect x="100" y="130" width="40" height="22" rx="3" fill="${c.body}" opacity="0.5"/>
      <line x1="120" y1="120" x2="120" y2="118" stroke="${c.body}" stroke-width="4"/>
      <rect x="74" y="164" width="92" height="8" rx="3" fill="${c.body}" opacity="0.4"/>`,

    defibrillator: `
      <rect x="30" y="20" width="180" height="130" rx="12" fill="${c.body}"/>
      <rect x="42" y="32" width="156" height="80" rx="6" fill="${c.screen}"/>
      <line x1="52" y1="72" x2="78" y2="72" stroke="${c.trace2}" stroke-width="2" stroke-linecap="round"/>
      <polyline points="78,72 90,72 96,44 102,100 114,52 120,72 142,72 158,72"
        fill="none" stroke="${c.trace}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="52" y="50" font-family="monospace" font-size="8" fill="${c.trace}" opacity="0.8">ENERGY: 200J</text>
      <rect x="160" y="46" width="30" height="20" rx="3" fill="${c.body}"/>
      <text x="175" y="60" font-family="monospace" font-size="10" fill="${c.trace}" text-anchor="middle" font-weight="bold">80</text>
      <rect x="42" y="120" width="50" height="22" rx="5" fill="${c.trace}" opacity="0.9"/>
      <text x="67" y="135" font-family="monospace" font-size="9" fill="${c.screen}" text-anchor="middle" font-weight="bold">SHOCK</text>
      <rect x="100" y="120" width="50" height="22" rx="5" fill="${c.accent}" opacity="0.7"/>
      <text x="125" y="135" font-family="monospace" font-size="9" fill="white" text-anchor="middle">SYNC</text>
      <rect x="158" y="120" width="40" height="22" rx="5" fill="${c.body}" opacity="0.8" stroke="${c.accent}" stroke-width="1"/>
      <text x="178" y="135" font-family="monospace" font-size="8" fill="${c.trace2}" text-anchor="middle">ANALYZE</text>
      <rect x="40" y="158" width="160" height="8" rx="3" fill="${c.accent}" opacity="0.3"/>`,

    syringePump: `
      <rect x="20" y="55" width="200" height="60" rx="8" fill="${c.body}"/>
      <rect x="28" y="63" width="140" height="44" rx="4" fill="${c.screen}"/>
      <text x="36" y="82" font-family="monospace" font-size="9" fill="${c.trace2}" opacity="0.9">RATE: 5.0 mL/hr</text>
      <text x="36" y="98" font-family="monospace" font-size="9" fill="${c.trace}" opacity="0.9">VOL: 48.5 mL</text>
      <rect x="175" y="63" width="37" height="44" rx="3" fill="${c.accent}" opacity="0.5"/>
      <text x="193" y="90" font-family="monospace" font-size="8" fill="white" text-anchor="middle">RUN</text>
      <rect x="30" y="32" width="160" height="20" rx="4" fill="${c.accent}" opacity="0.2" stroke="${c.body}" stroke-width="1.5"/>
      <rect x="32" y="34" width="80" height="16" rx="3" fill="${c.accent}" opacity="0.5"/>
      <rect x="186" y="38" width="20" height="8" rx="2" fill="${c.body}" opacity="0.7"/>
      <rect x="20" y="120" width="50" height="14" rx="3" fill="${c.accent}" opacity="0.3"/>
      <rect x="78" y="120" width="50" height="14" rx="3" fill="${c.accent}" opacity="0.3"/>
      <rect x="136" y="120" width="50" height="14" rx="3" fill="${c.accent}" opacity="0.3"/>
      <line x1="210" y1="75" x2="235" y2="75" stroke="${c.trace2}" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="237" cy="75" r="5" fill="${c.trace2}" opacity="0.5"/>`,

    infusionPump: `
      <rect x="55" y="10" width="130" height="160" rx="10" fill="${c.body}"/>
      <rect x="64" y="20" width="112" height="70" rx="5" fill="${c.screen}"/>
      <text x="72" y="40" font-family="monospace" font-size="8" fill="${c.trace2}" opacity="0.8">INFUSION PUMP</text>
      <text x="120" y="65" font-family="monospace" font-size="16" fill="${c.trace}" text-anchor="middle" font-weight="bold">4.5</text>
      <text x="120" y="78" font-family="monospace" font-size="8" fill="${c.trace2}" text-anchor="middle" opacity="0.8">mL/hr</text>
      <rect x="64" y="100" width="112" height="22" rx="4" fill="${c.body}" opacity="0.8"/>
      <rect x="70" y="104" width="80" height="14" rx="3" fill="${c.accent}" opacity="0.4"/>
      <rect x="70" y="104" width="40" height="14" rx="3" fill="${c.trace}" opacity="0.6"/>
      <text x="155" y="115" font-family="monospace" font-size="7" fill="${c.trace2}" text-anchor="middle" opacity="0.9">50%</text>
      <rect x="64" y="130" width="30" height="20" rx="4" fill="${c.accent}" opacity="0.5"/>
      <rect x="101" y="130" width="30" height="20" rx="4" fill="${c.accent}" opacity="0.5"/>
      <rect x="138" y="130" width="30" height="20" rx="4" fill="${c.trace}" opacity="0.7"/>
      <text x="153" y="144" font-family="monospace" font-size="8" fill="${c.screen}" text-anchor="middle">▶</text>
      <rect x="20" y="30" width="32" height="120" rx="5" fill="${c.accent}" opacity="0.15" stroke="${c.accent}" stroke-width="1"/>
      <rect x="24" y="50" width="24" height="60" rx="3" fill="${c.accent}" opacity="0.2"/>
      <line x1="36" y1="40" x2="36" y2="46" stroke="${c.trace2}" stroke-width="2"/>`,

    ventilator: `
      <rect x="25" y="15" width="190" height="145" rx="10" fill="${c.body}"/>
      <rect x="35" y="25" width="170" height="90" rx="5" fill="${c.screen}"/>
      <text x="43" y="43" font-family="monospace" font-size="8" fill="${c.trace2}" opacity="0.8">VENTILATOR — WAVEFORM</text>
      <path d="M43,70 L60,70 L60,48 L75,48 L75,70 L90,70 L90,48 L105,48 L105,70 L120,70 L120,48 L135,48 L135,70 L150,70 L150,48 L165,48 L165,70 L198,70"
        fill="none" stroke="${c.trace}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M43,95 Q68,80 93,95 Q118,110 143,95 Q168,80 198,95"
        fill="none" stroke="${c.trace2}" stroke-width="1.8"/>
      <rect x="35" y="125" width="40" height="24" rx="4" fill="${c.accent}" opacity="0.4"/>
      <text x="55" y="141" font-family="monospace" font-size="9" fill="white" text-anchor="middle">RR:16</text>
      <rect x="83" y="125" width="40" height="24" rx="4" fill="${c.accent}" opacity="0.4"/>
      <text x="103" y="141" font-family="monospace" font-size="9" fill="white" text-anchor="middle">TV:500</text>
      <rect x="131" y="125" width="40" height="24" rx="4" fill="${c.trace}" opacity="0.7"/>
      <text x="151" y="141" font-family="monospace" font-size="9" fill="${c.screen}" text-anchor="middle">FiO₂</text>
      <rect x="179" y="125" width="26" height="24" rx="4" fill="${c.body}" opacity="0.8" stroke="${c.trace}" stroke-width="1"/>
      <text x="192" y="141" font-family="monospace" font-size="9" fill="${c.trace}" text-anchor="middle">40%</text>`,

    oximeter: `
      <rect x="65" y="10" width="110" height="90" rx="14" fill="${c.body}"/>
      <rect x="73" y="18" width="94" height="60" rx="6" fill="${c.screen}"/>
      <text x="120" y="52" font-family="monospace" font-size="28" fill="${c.trace}" text-anchor="middle" font-weight="bold">98</text>
      <text x="120" y="67" font-family="monospace" font-size="9" fill="${c.trace2}" text-anchor="middle">SpO₂ %</text>
      <rect x="73" y="85" width="94" height="16" rx="3" fill="${c.body}" opacity="0.8"/>
      <text x="120" y="97" font-family="monospace" font-size="9" fill="${c.trace}" text-anchor="middle">HR: 72 BPM</text>
      <rect x="72" y="104" width="96" height="50" rx="10" fill="${c.accent}" opacity="0.2" stroke="${c.accent}" stroke-width="1.5"/>
      <ellipse cx="120" cy="130" rx="26" ry="16" fill="${c.body}" opacity="0.6"/>
      <path d="M94,130 Q107,122 120,130 Q133,122 146,130" fill="${c.body}" opacity="0.5" stroke="${c.accent}" stroke-width="1"/>
      <line x1="120" y1="104" x2="120" y2="100" stroke="${c.body}" stroke-width="3"/>
      <rect x="73" y="158" width="96" height="8" rx="3" fill="${c.accent}" opacity="0.3"/>
      <path d="M80,170 Q120,150 160,170" fill="none" stroke="${c.trace2}" stroke-width="2" opacity="0.4"/>`,

    xray: `
      <rect x="90" y="10" width="60" height="80" rx="6" fill="${c.body}"/>
      <rect x="96" y="16" width="48" height="52" rx="4" fill="${c.screen}"/>
      <ellipse cx="120" cy="43" rx="18" ry="22" fill="none" stroke="${c.trace}" stroke-width="1.5" opacity="0.6"/>
      <ellipse cx="120" cy="43" rx="10" ry="14" fill="none" stroke="${c.trace}" stroke-width="1.5" opacity="0.8"/>
      <line x1="104" y1="55" x2="136" y2="31" stroke="${c.trace2}" stroke-width="0.8" opacity="0.5"/>
      <line x1="104" y1="31" x2="136" y2="55" stroke="${c.trace2}" stroke-width="0.8" opacity="0.5"/>
      <circle cx="120" cy="43" r="4" fill="${c.trace}" opacity="0.9"/>
      <rect x="115" y="92" width="10" height="30" rx="3" fill="${c.accent}" opacity="0.7"/>
      <rect x="40" y="118" width="160" height="50" rx="8" fill="${c.body}"/>
      <rect x="50" y="126" width="100" height="30" rx="4" fill="${c.screen}"/>
      <text x="100" y="148" font-family="monospace" font-size="10" fill="${c.trace2}" text-anchor="middle">kV:100  mAs:8</text>
      <rect x="158" y="130" width="32" height="22" rx="4" fill="${c.trace}" opacity="0.7"/>
      <text x="174" y="145" font-family="monospace" font-size="9" fill="${c.screen}" text-anchor="middle">EXP</text>
      <rect x="80" y="170" width="80" height="8" rx="3" fill="${c.accent}" opacity="0.4"/>`,

    autoclave: `
      <ellipse cx="120" cy="90" rx="80" ry="70" fill="${c.body}"/>
      <ellipse cx="120" cy="90" rx="70" ry="60" fill="${c.screen}"/>
      <ellipse cx="120" cy="90" rx="50" ry="42" fill="none" stroke="${c.trace}" stroke-width="2" opacity="0.5" stroke-dasharray="8 4"/>
      <text x="120" y="82" font-family="monospace" font-size="10" fill="${c.trace2}" text-anchor="middle">134°C</text>
      <text x="120" y="98" font-family="monospace" font-size="9" fill="${c.trace}" text-anchor="middle">2.1 bar</text>
      <text x="120" y="112" font-family="monospace" font-size="8" fill="${c.trace}" text-anchor="middle" opacity="0.8">STERILIZING</text>
      <rect x="56" y="152" width="128" height="18" rx="6" fill="${c.accent}" opacity="0.3"/>
      <rect x="56" y="152" width="64" height="18" rx="6" fill="${c.accent}" opacity="0.6"/>
      <rect x="40" y="84" width="14" height="12" rx="3" fill="${c.accent}" opacity="0.7"/>
      <rect x="186" y="84" width="14" height="12" rx="3" fill="${c.accent}" opacity="0.7"/>
      <line x1="120" y1="18" x2="120" y2="30" stroke="${c.accent}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="16" r="4" fill="${c.trace}" opacity="0.6"/>`,

    centrifuge: `
      <circle cx="120" cy="100" r="80" fill="${c.body}"/>
      <circle cx="120" cy="100" r="68" fill="${c.screen}"/>
      <circle cx="120" cy="100" r="52" fill="none" stroke="${c.body}" stroke-width="6"/>
      <line x1="120" y1="48" x2="120" y2="152" stroke="${c.accent}" stroke-width="3" stroke-linecap="round"/>
      <line x1="68" y1="100" x2="172" y2="100" stroke="${c.accent}" stroke-width="3" stroke-linecap="round"/>
      <line x1="79" y1="61" x2="161" y2="139" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="79" y1="139" x2="161" y2="61" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <rect x="101" y="48" width="38" height="8" rx="4" fill="${c.trace}" opacity="0.8"/>
      <rect x="101" y="144" width="38" height="8" rx="4" fill="${c.trace}" opacity="0.8"/>
      <rect x="68" y="96" width="8" height="8" rx="4" fill="${c.trace}" opacity="0.8"/>
      <rect x="164" y="96" width="8" height="8" rx="4" fill="${c.trace}" opacity="0.8"/>
      <circle cx="120" cy="100" r="14" fill="${c.body}"/>
      <circle cx="120" cy="100" r="8" fill="${c.accent}" opacity="0.7"/>
      <circle cx="120" cy="100" r="4" fill="${c.trace}"/>`,

    labAnalyzer: `
      <rect x="30" y="20" width="180" height="150" rx="10" fill="${c.body}"/>
      <rect x="40" y="30" width="160" height="90" rx="5" fill="${c.screen}"/>
      <text x="48" y="50" font-family="monospace" font-size="8" fill="${c.trace2}" opacity="0.8">LABORATORY ANALYZER</text>
      <rect x="48" y="58" width="60" height="12" rx="3" fill="${c.trace}" opacity="0.9"/>
      <text x="78" y="68" font-family="monospace" font-size="8" fill="${c.screen}" text-anchor="middle">WBC: 6.2</text>
      <rect x="48" y="75" width="60" height="12" rx="3" fill="${c.trace2}" opacity="0.7"/>
      <text x="78" y="85" font-family="monospace" font-size="8" fill="${c.screen}" text-anchor="middle">RBC: 4.9</text>
      <rect x="48" y="92" width="60" height="12" rx="3" fill="${c.trace}" opacity="0.6"/>
      <text x="78" y="102" font-family="monospace" font-size="8" fill="${c.screen}" text-anchor="middle">PLT: 250</text>
      <rect x="120" y="58" width="70" height="50" rx="4" fill="${c.body}" opacity="0.8"/>
      <path d="M127,100 L133,68 L139,88 L145,58 L151,95 L157,72 L163,85 L169,62 L175,95 L181,78 L187,92"
        fill="none" stroke="${c.trace}" stroke-width="2" stroke-linecap="round"/>
      <rect x="40" y="130" width="160" height="30" rx="4" fill="${c.accent}" opacity="0.15"/>
      <rect x="50" y="136" width="40" height="18" rx="3" fill="${c.accent}" opacity="0.5"/>
      <rect x="98" y="136" width="40" height="18" rx="3" fill="${c.accent}" opacity="0.5"/>
      <rect x="146" y="136" width="44" height="18" rx="3" fill="${c.trace}" opacity="0.7"/>
      <text x="168" y="149" font-family="monospace" font-size="8" fill="${c.screen}" text-anchor="middle">ANALYZE</text>`,
  };

  const iconKeys = [
    'ecg', 'monitor', 'ultrasound', 'defibrillator',
    'syringePump', 'infusionPump', 'ventilator', 'oximeter',
    'xray', 'autoclave', 'centrifuge', 'labAnalyzer',
  ];

  const svgBody = icons[iconKey] || icons['ecg'];

  const svg = `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c.bg1}"/>
        <stop offset="100%" stop-color="${c.bg2}"/>
      </linearGradient>
    </defs>
    <rect width="240" height="180" fill="url(#bg)"/>
    ${svgBody}
  </svg>`;

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ─── 5. PRODUCTS DATA ───────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Twelve-Lead ECG Machine',
    image: buildSVG('ecg', 'Diagnostic Equipment'),
    shortDescription: 'Hospital-grade 12-lead electrocardiograph with integrated thermal printer and digital waveform analysis.',
    model: 'CardioScan ECG-1200',
    manufacturer: 'PhysioTech Medical Systems',
    categoryTags: ['Diagnostic Equipment'],
    specifications: {
      'Leads':                  '12-lead standard (I, II, III, aVR, aVL, aVF, V1–V6)',
      'Sampling Rate':          '10,000 Hz per channel',
      'Input Impedance':        '> 10 MΩ',
      'CMRR':                   '> 120 dB at 50/60 Hz',
      'Sensitivity':            '2.5, 5, 10, 20 mm/mV',
      'Paper Speed':            '25 / 50 mm/s',
      'Display':                '7-inch colour TFT LCD, 800 × 480',
      'Storage':                '10,000 ECG records onboard',
      'Connectivity':           'USB, LAN, Wi-Fi 802.11 b/g/n',
      'Battery Life':           '3 hours continuous recording',
      'Dimensions':             '310 × 255 × 88 mm',
      'Weight':                 '2.4 kg',
    },
  },
  {
    id: 2,
    name: 'Multi-Parameter Patient Monitor',
    image: buildSVG('monitor', 'Patient Monitoring'),
    shortDescription: 'Bedside monitor tracking ECG, SpO₂, NIBP, temperature, respiration and invasive pressures simultaneously.',
    model: 'VitalGuard PM-8500',
    manufacturer: 'MedDynamics International',
    categoryTags: ['Patient Monitoring'],
    specifications: {
      'Display':                '15.6-inch TFT, 1920 × 1080, touch',
      'ECG Leads':              '3 / 5 / 12-lead selectable',
      'SpO₂ Technology':        'Nellcor-compatible oximometry',
      'NIBP Method':            'Oscillometric, adult/paediatric/neonate',
      'Temperature':            'YSI / Datalogger probes, 0–50 °C',
      'Respiration':            'Impedance pneumography, 6–120 rpm',
      'IBP Channels':           '2 invasive pressure channels',
      'Alarms':                 'Multi-level visual & audible alarms',
      'Data Storage':           '240 h waveform trend memory',
      'Connectivity':           'HL7, DICOM, Ethernet, Nurse call',
      'Power':                  'AC 100–240 V; internal 12 V battery 4 h',
      'Weight':                 '4.8 kg',
    },
  },
  {
    id: 3,
    name: 'Diagnostic Ultrasound System',
    image: buildSVG('ultrasound', 'Diagnostic Equipment'),
    shortDescription: 'Portable colour-Doppler ultrasound with broadband transducers for abdominal, obstetric and vascular imaging.',
    model: 'SonoVision Pro 640',
    manufacturer: 'Imaging Solutions Corp.',
    categoryTags: ['Diagnostic Equipment'],
    specifications: {
      'Imaging Modes':          'B, M, PWD, CWD, CFM, PDI, Tissue Harmonic',
      'Frequency Range':        '2 – 18 MHz (transducer-dependent)',
      'Scan Depth':             'Up to 30 cm',
      'Frame Rate':             'Up to 120 fps',
      'Probe Ports':            '3 active probe ports',
      'Display':                '21.5-inch high-brightness LED, 1920 × 1200',
      'Image Storage':          '320 GB SSD, DICOM export',
      'Connectivity':           'DICOM 3.0, USB 3.0, HDMI',
      'Battery (optional)':     '90-min portable pack',
      'Dimensions':             '430 × 560 × 1 130 mm (with trolley)',
      'Weight':                 '38 kg with trolley',
    },
  },
  {
    id: 4,
    name: 'AED Defibrillator',
    image: buildSVG('defibrillator', 'Emergency Care'),
    shortDescription: 'Biphasic automated external defibrillator with real-time CPR coaching, AED and manual modes, and ECG display.',
    model: 'ShockWave DEF-360',
    manufacturer: 'EmergeCare Technologies',
    categoryTags: ['Emergency Care'],
    specifications: {
      'Waveform':               'Biphasic truncated exponential (BTE)',
      'Energy Range':           '1 – 360 J (manual); 150/200 J (AED)',
      'Charge Time':            '< 5 sec from battery (200 J)',
      'ECG Display':            '6.5-inch colour LCD',
      'Monitoring Leads':       '3-lead ECG; paddles or adhesive pads',
      'Pacing':                 'External pacing 10–180 ppm, 10–180 mA',
      'SpO₂':                   'Integrated Nellcor SpO₂',
      'NIBP':                   'Integrated oscillometric',
      'CPR Feedback':           'Real-time rate, depth, compression fraction',
      'Data Transfer':          'USB, Bluetooth, Wi-Fi, SD card',
      'Battery':                'Lithium-ion, 5 h monitoring / 200 shocks',
      'IP Rating':              'IP55 splash-proof',
    },
  },
  {
    id: 5,
    name: 'Syringe Pump',
    image: buildSVG('syringePump', 'Patient Monitoring'),
    shortDescription: 'High-precision syringe driver for accurate IV medication delivery with occlusion detection and KVO mode.',
    model: 'PrecisionFlow SP-200',
    manufacturer: 'InfuTech Medical Devices',
    categoryTags: ['Patient Monitoring'],
    specifications: {
      'Syringe Compatibility':  '5, 10, 20, 30, 50/60 mL — major brands',
      'Flow Rate Range':        '0.1 – 1,200 mL/hr',
      'Bolus Rate':             'Up to 1,200 mL/hr',
      'Accuracy':               '± 1% steady-state',
      'Occlusion Detection':    'Adjustable 30–1,000 mmHg',
      'KVO Rate':               '0.1 – 10 mL/hr',
      'Display':                '4.3-inch colour TFT LCD',
      'Drug Library':           '100 drugs × 10 concentration levels',
      'Alarms':                 'Occlusion, air, low battery, near-empty',
      'Battery Life':           '8 h at 5 mL/hr with 50 mL syringe',
      'Communication':          'RS-232, Nurse-call output',
      'Dimensions':             '270 × 120 × 100 mm',
    },
  },
  {
    id: 6,
    name: 'Volumetric Infusion Pump',
    image: buildSVG('infusionPump', 'Patient Monitoring'),
    shortDescription: 'General-purpose volumetric infusion pump with large-scale drug library, dose-error reduction and anti-free-flow protection.',
    model: 'FlowMaster VP-500',
    manufacturer: 'InfuTech Medical Devices',
    categoryTags: ['Patient Monitoring'],
    specifications: {
      'Flow Rate Range':        '0.1 – 999 mL/hr',
      'Bolus Volume':           '0.1 – 999 mL',
      'VTBI Range':             '0.1 – 9,999 mL',
      'Accuracy':               '± 2% steady-state',
      'IV Set Compatibility':   'Standard gravity & pump sets 20 drops/mL',
      'Drug Library':           '500 drugs, 10 clinical care areas',
      'Air-in-Line Detection':  'Ultrasonic, < 0.1 mL bubble',
      'Anti-Free-Flow':         'Valve-based, opens only under pressure',
      'Display':                '5.7-inch colour TFT, touchscreen',
      'Battery Life':           '6 h at 125 mL/hr',
      'Connectivity':           'Ethernet, USB, Nurse-call, RS-232',
      'Weight':                 '3.2 kg',
    },
  },
  {
    id: 7,
    name: 'ICU Ventilator',
    image: buildSVG('ventilator', 'Emergency Care'),
    shortDescription: 'Full-featured adult/paediatric ICU ventilator supporting all invasive and non-invasive ventilation modes with integrated graphics.',
    model: 'BreathPro ICU-2000',
    manufacturer: 'RespiCare Systems',
    categoryTags: ['Emergency Care'],
    specifications: {
      'Patient Range':          'Neonate (0.3 kg) – adult (200 kg)',
      'Ventilation Modes':      'VC-AC, PC-AC, SIMV, PSV, CPAP, NIV, HFNC',
      'Tidal Volume':           '2 – 3,000 mL',
      'Respiratory Rate':       '1 – 120 bpm',
      'FiO₂ Range':             '21 – 100% (O₂ blender)',
      'PEEP/CPAP':              '0 – 50 cmH₂O',
      'Inspiratory Pressure':   '0 – 80 cmH₂O',
      'Inspiratory Flow':       '0 – 200 L/min',
      'Waveform Display':       '15-inch colour touch, 3 simultaneous loops',
      'Monitoring':             'Paw, Pplat, Volume, Flow, FRC, WOB',
      'Compressor':             'Integrated turbine, no external gas required',
      'Battery':                '4 h internal at typical settings',
    },
  },
  {
    id: 8,
    name: 'Fingertip Pulse Oximeter',
    image: buildSVG('oximeter', 'Patient Monitoring'),
    shortDescription: 'Clinical-grade fingertip pulse oximeter with motion-tolerant algorithm, plethysmograph waveform and perfusion index.',
    model: 'OxiSense FPO-800',
    manufacturer: 'VitalSigns Diagnostics',
    categoryTags: ['Patient Monitoring', 'Diagnostic Equipment'],
    specifications: {
      'SpO₂ Range':             '0 – 100%',
      'SpO₂ Accuracy':          '± 2% (70 – 100%)',
      'Pulse Rate Range':       '18 – 300 bpm',
      'PR Accuracy':            '± 1 bpm',
      'Perfusion Index':        '0.02 – 20%',
      'Display':                'OLED colour, 4 orientation modes',
      'Motion Tolerance':       'Masimo LNOP-compatible algorithm',
      'Alarm Limits':           'High/low SpO₂ and PR, user-programmable',
      'Data Storage':           '24 h continuous waveform log',
      'Battery':                '2 × AAA, 40 h continuous use',
      'Operating Temp':         '5 – 40 °C',
      'Approvals':              'CE, FDA 510(k)',
    },
  },
  {
    id: 9,
    name: 'Digital X-Ray System',
    image: buildSVG('xray', 'Diagnostic Equipment'),
    shortDescription: 'Fixed ceiling-mounted digital radiography system with flat-panel detector and AI-assisted image processing.',
    model: 'RadiMax DR-9000',
    manufacturer: 'Imaging Solutions Corp.',
    categoryTags: ['Diagnostic Equipment'],
    specifications: {
      'Detector Type':          'Amorphous silicon flat-panel (CsI scintillator)',
      'Active Area':            '43 × 43 cm',
      'Pixel Pitch':            '139 µm',
      'kVp Range':              '40 – 150 kVp',
      'mA Range':               '1 – 1,000 mA',
      'mAs Range':              '0.1 – 1,000 mAs',
      'Image Matrix':           '3,000 × 3,000 pixels',
      'Readout Time':           '< 3 s per exposure',
      'Tube Heat Capacity':     '800 kHU anode storage',
      'AI Features':            'Auto-exposure, bone suppression, lung nodule assist',
      'Connectivity':           'DICOM 3.0, RIS/HIS, HL7',
      'Radiation Safety':       'Motorised collimator, dose optimisation',
    },
  },
  {
    id: 10,
    name: 'Benchtop Autoclave Steriliser',
    image: buildSVG('autoclave', 'Surgical Equipment'),
    shortDescription: 'Class B pre-vacuum autoclave for wrapped instruments, porous loads and hollow devices. Meets EN 13060 Class B.',
    model: 'SterilPro B-Series 23L',
    manufacturer: 'MedSterile Solutions',
    categoryTags: ['Surgical Equipment'],
    specifications: {
      'Chamber Volume':         '23 litres',
      'Class':                  'EN 13060 Class B (pre-vacuum)',
      'Sterilisation Temp':     '121 °C / 134 °C selectable',
      'Sterilisation Pressure': '2.1 bar',
      'Vacuum Stages':          '3× pre-vacuum, 1× post-vacuum',
      'Cycle Time':             '30 – 45 min (134 °C wrapped)',
      'Load Capacity':          '6 × STE units (unwrapped)',
      'Display':                '4.3-inch colour LCD touchscreen',
      'Printer':                'Built-in thermal printer + USB export',
      'Water System':           'Integrated water purification tank',
      'Traceability':           'Cycle data logging, USB/Ethernet export',
      'Approvals':              'CE 0434, MDR 2017/745',
    },
  },
  {
    id: 11,
    name: 'High-Speed Centrifuge',
    image: buildSVG('centrifuge', 'Laboratory Equipment'),
    shortDescription: 'Compact bench-top centrifuge reaching 15,000 RPM with refrigeration, imbalance detection and brushless motor.',
    model: 'SpinPro HC-15R',
    manufacturer: 'LabCore Instruments',
    categoryTags: ['Laboratory Equipment'],
    specifications: {
      'Maximum Speed':          '15,000 RPM',
      'Maximum RCF':            '21,380 × g',
      'Capacity':               '24 × 1.5/2.0 mL or 12 × 15 mL (with rotor)',
      'Temperature Range':      '−20 °C to +40 °C (refrigerated)',
      'Speed Accuracy':         '± 10 RPM',
      'Acceleration':           '9 selectable stages',
      'Deceleration':           '9 selectable stages + braking',
      'Timer':                  '1 s – 99 min, ∞ hold',
      'Noise Level':            '< 58 dB(A) at max speed',
      'Rotor Detection':        'Auto-recognition RFID',
      'Safety':                 'Imbalance detection, lid lock, over-temp',
      'Motor':                  'Brushless DC — maintenance-free',
    },
  },
  {
    id: 12,
    name: 'Haematology Analyser',
    image: buildSVG('labAnalyzer', 'Laboratory Equipment'),
    shortDescription: '5-part differential haematology analyser delivering 26 CBC parameters with 60 samples/hour throughput.',
    model: 'HematoPro HA-5000',
    manufacturer: 'DiagnosticLab Systems',
    categoryTags: ['Laboratory Equipment'],
    specifications: {
      'Throughput':             '60 samples / hour',
      'Parameters':             '26 CBC + 3-part / 5-part DIFF + NRBC',
      'WBC Differential':       '5-part (Lymph, Mon, Neu, Eos, Baso)',
      'Sample Volume':          '20 µL whole blood (capillary / venous)',
      'Detection Method':       'Impedance + semiconductor laser (fluorescence)',
      'Linearity':              'WBC: 0 – 400 × 10³/µL; RBC: 0.3 – 8.0 × 10⁶/µL',
      'Carryover':              '≤ 0.5%',
      'Display':                '10.4-inch colour TFT touch',
      'Sample Mode':            'Open-tube, closed-tube (CAP), micro-capillary',
      'Data Storage':           '100,000 results with histograms',
      'Connectivity':           'LIS (HL7/ASTM), USB, Ethernet, barcode reader',
      'Reagent System':         'Dedicated 5-reagent, auto-priming',
    },
  },
];

// Safety guard — ensure products array length matches TOTAL_PRODUCTS
if (products.length !== TOTAL_PRODUCTS) {
  console.warn(`products.length (${products.length}) !== TOTAL_PRODUCTS (${TOTAL_PRODUCTS})`);
}

// ─── 6. STATE ───────────────────────────────────────────────────
let activeCategory = 'All';
let searchQuery    = '';

// ─── 7. DOM REFERENCES ──────────────────────────────────────────
const dom = {
  navbar:       () => document.getElementById('navbar'),
  navLinks:     () => document.getElementById('navLinks'),
  hamburger:    () => document.getElementById('hamburger'),
  searchInput:  () => document.getElementById('searchInput'),
  searchClear:  () => document.getElementById('searchClear'),
  filterBtns:   () => document.getElementById('filterButtons'),
  productCount: () => document.getElementById('productCount'),
  productsGrid: () => document.getElementById('productsGrid'),
  noResults:    () => document.getElementById('noResults'),
  resetFilters: () => document.getElementById('resetFilters'),
  modalOverlay: () => document.getElementById('modalOverlay'),
  modal:        () => document.getElementById('modal'),
  modalClose:   () => document.getElementById('modalClose'),
  modalBody:    () => document.getElementById('modalBody'),
  contactForm:  () => document.getElementById('contactForm'),
  formSuccess:  () => document.getElementById('formSuccess'),
  resetForm:    () => document.getElementById('resetForm'),
  backToTop:    () => document.getElementById('backToTop'),
  footerYear:   () => document.getElementById('footerYear'),
  footerCats:   () => document.getElementById('footerCategories'),
};

// ─── 8. TAG UTILITIES ───────────────────────────────────────────
/**
 * Returns a CSS class for a given category name.
 */
function tagClass(cat) {
  return tagClassMap[cat] || 'tag--default';
}

/**
 * Builds an HTML string of tag badges.
 */
function renderTags(tags) {
  return tags.map(t =>
    `<span class="tag ${tagClass(t)}">${escHtml(t)}</span>`
  ).join('');
}

/**
 * Minimal HTML escape to prevent XSS in dynamic content.
 */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── 9. FILTER BUTTONS ──────────────────────────────────────────
function renderFilterButtons() {
  const container = dom.filterBtns();
  if (!container) return;

  const allBtns = ['All', ...categories];
  container.innerHTML = allBtns.map(cat => {
    const isActive = cat === activeCategory ? 'active' : '';
    return `<button class="filter-btn ${isActive}" data-cat="${escHtml(cat)}" aria-pressed="${cat === activeCategory}">${escHtml(cat)}</button>`;
  }).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderFilterButtons();
      renderProducts();
    });
  });
}

// ─── 10. FILTER & SEARCH LOGIC ──────────────────────────────────
function getFilteredProducts() {
  const q = searchQuery.toLowerCase().trim();

  return products.filter(p => {
    // Category filter
    const catMatch = activeCategory === 'All' || p.categoryTags.includes(activeCategory);
    if (!catMatch) return false;

    // Search filter (across name, manufacturer, model, description)
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.manufacturer.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
    );
  });
}

// ─── 11. RENDER PRODUCTS ────────────────────────────────────────
function renderProducts() {
  const grid      = dom.productsGrid();
  const noRes     = dom.noResults();
  const countEl   = dom.productCount();
  if (!grid) return;

  const filtered = getFilteredProducts();

  // Update count — always derived from array lengths, never hardcoded
  const total    = products.length;
  const shown    = filtered.length;
  if (countEl) {
    countEl.innerHTML = shown === total
      ? `Showing <strong>${total}</strong> product${total !== 1 ? 's' : ''}`
      : `Showing <strong>${shown}</strong> of <strong>${total}</strong> product${total !== 1 ? 's' : ''}`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    grid.innerHTML = '';
    grid.hidden    = true;
    noRes.hidden   = false;
    return;
  }

  grid.hidden  = false;
  noRes.hidden = true;

  grid.innerHTML = filtered.map((p, i) => `
    <article class="product-card" style="animation-delay:${i * 60}ms" data-id="${p.id}">
      <div class="card-img-wrap">
        <img
          src="${p.image}"
          alt="${escHtml(p.name)}"
          loading="lazy"
          width="400"
          height="250"
        />
        <div class="card-img-overlay" aria-hidden="true"></div>
      </div>
      <div class="card-body">
        <div class="card-tags">${renderTags(p.categoryTags)}</div>
        <h3 class="card-name">${escHtml(p.name)}</h3>
        <p class="card-desc">${escHtml(p.shortDescription)}</p>
        <div class="card-meta">
          <div class="card-meta-row">
            <span class="card-meta-label">Manufacturer</span>
            <span class="card-meta-value">${escHtml(p.manufacturer)}</span>
          </div>
          <div class="card-meta-row">
            <span class="card-meta-label">Model</span>
            <span class="card-meta-value">${escHtml(p.model)}</span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline btn-details" data-id="${p.id}" aria-label="View details for ${escHtml(p.name)}">
          View Details
          <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </article>
  `).join('');

  // Bind detail buttons
  grid.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', () => openModal(Number(el.dataset.id)));
  });
}

// ─── 12. MODAL ──────────────────────────────────────────────────
function openModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  const overlay = dom.modalOverlay();
  const body    = dom.modalBody();
  if (!overlay || !body) return;

  // Build specs table rows
  const specRows = Object.entries(p.specifications).map(([k, v]) => `
    <tr>
      <th scope="row">${escHtml(k)}</th>
      <td>${escHtml(v)}</td>
    </tr>
  `).join('');

  body.innerHTML = `
    <img
      class="modal-img"
      src="${p.image}"
      alt="${escHtml(p.name)}"
      width="740"
      height="370"
    />
    <div class="modal-header">
      <div class="modal-tags">${renderTags(p.categoryTags)}</div>
      <h2 class="modal-title" id="modalTitle">${escHtml(p.name)}</h2>
      <div class="modal-meta-row">
        <div class="modal-meta-item">
          <span class="modal-meta-label">Manufacturer</span>
          <span class="modal-meta-value">${escHtml(p.manufacturer)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Model / SKU</span>
          <span class="modal-meta-value">${escHtml(p.model)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Category</span>
          <span class="modal-meta-value">${escHtml(p.categoryTags[0])}</span>
        </div>
      </div>
    </div>
    <p class="modal-desc">${escHtml(p.shortDescription)}</p>
    <h3 class="modal-specs-title">Technical Specifications</h3>
    <table class="specs-table" aria-label="Technical specifications for ${escHtml(p.name)}">
      <tbody>${specRows}</tbody>
    </table>
    <div class="modal-footer">
      <a href="#contact" class="btn btn-primary" id="modalInquiryBtn" aria-label="Send inquiry for ${escHtml(p.name)}">
        <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M2 8l8 5 8-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Send Inquiry
      </a>
      <button class="btn btn-outline" id="modalCloseBtnBody">Close</button>
    </div>
  `;

  overlay.hidden = false;
  requestAnimationFrame(() => {
    overlay.classList.add('open');
    body.focus();
  });

  // Close on inquiry click
  body.querySelector('#modalInquiryBtn')?.addEventListener('click', closeModal);
  body.querySelector('#modalCloseBtnBody')?.addEventListener('click', closeModal);

  // Prevent scroll on body
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = dom.modalOverlay();
  if (!overlay) return;
  overlay.classList.remove('open');
  setTimeout(() => {
    overlay.hidden = true;
    dom.modalBody().innerHTML = '';
    document.body.style.overflow = '';
  }, 250);
}

// ─── 13. SEARCH HANDLER ─────────────────────────────────────────
function initSearch() {
  const input = dom.searchInput();
  const clear = dom.searchClear();
  if (!input) return;

  input.addEventListener('input', () => {
    searchQuery = input.value;
    clear.hidden = searchQuery === '';
    renderProducts();
  });

  clear?.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    clear.hidden = true;
    input.focus();
    renderProducts();
  });
}

// ─── 14. SCROLL REVEAL ──────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    // Fallback: reveal immediately
    els.forEach(el => el.classList.add('revealed'));
  }
}

// ─── 15. NAVBAR SCROLL EFFECT ───────────────────────────────────
function initNavbarScroll() {
  const navbar = dom.navbar();
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── 16. ACTIVE NAV LINK ────────────────────────────────────────
function initActiveNavLink() {
  const sections = document.querySelectorAll('main section[id]');
  const links    = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => io.observe(s));
}

// ─── 17. MOBILE MENU ────────────────────────────────────────────
function initMobileMenu() {
  const btn   = dom.hamburger();
  const links = dom.navLinks();
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on link click
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// ─── 18. MODAL CLOSE EVENTS ─────────────────────────────────────
function initModalEvents() {
  dom.modalClose()?.addEventListener('click', closeModal);

  dom.modalOverlay()?.addEventListener('click', e => {
    if (e.target === dom.modalOverlay()) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !dom.modalOverlay()?.hidden) closeModal();
  });
}

// ─── 19. RESET FILTERS ──────────────────────────────────────────
function initResetFilters() {
  dom.resetFilters()?.addEventListener('click', () => {
    activeCategory = 'All';
    searchQuery    = '';
    const input    = dom.searchInput();
    if (input) input.value = '';
    const clear = dom.searchClear();
    if (clear) clear.hidden = true;
    renderFilterButtons();
    renderProducts();
  });
}

// ─── 20. CONTACT FORM ───────────────────────────────────────────
function initContactForm() {
  const form    = dom.contactForm();
  const success = dom.formSuccess();
  const reset   = dom.resetForm();
  if (!form) return;

  function validate(field) {
    const errEl = field.closest('.form-group')?.querySelector('.field-error');
    let msg = '';
    field.classList.remove('invalid');

    if (field.required && !field.value.trim()) {
      msg = 'This field is required.';
    } else if (field.type === 'email' && field.value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        msg = 'Please enter a valid email address.';
      }
    }

    if (msg) {
      field.classList.add('invalid');
      if (errEl) errEl.textContent = msg;
      return false;
    }
    if (errEl) errEl.textContent = '';
    return true;
  }

  // Inline validation on blur
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) validate(field);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields  = Array.from(form.querySelectorAll('input, select, textarea'));
    const isValid = fields.map(validate).every(Boolean);
    if (!isValid) return;

    form.hidden    = true;
    success.hidden = false;
  });

  reset?.addEventListener('click', () => {
    form.reset();
    form.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
    form.hidden    = false;
    success.hidden = true;
  });
}

// ─── 21. BACK TO TOP ────────────────────────────────────────────
function initBackToTop() {
  const btn = dom.backToTop();
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 400;
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── 22. FOOTER ─────────────────────────────────────────────────
function initFooter() {
  // Set copyright year dynamically
  const yearEl = dom.footerYear();
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Populate category links — derived from categories array
  const catList = dom.footerCats();
  if (catList) {
    catList.innerHTML = categories.map(cat =>
      `<li><a href="#catalog" data-foot-cat="${escHtml(cat)}">${escHtml(cat)}</a></li>`
    ).join('');

    catList.querySelectorAll('[data-foot-cat]').forEach(a => {
      a.addEventListener('click', () => {
        activeCategory = a.dataset.footCat;
        renderFilterButtons();
        renderProducts();
      });
    });
  }
}

// ─── 23. SMOOTH ANCHOR SCROLLING (offset for navbar) ────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const navH   = dom.navbar()?.offsetHeight || 0;
      const top    = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ─── 24. INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderFilterButtons();
  renderProducts();
  initSearch();
  initScrollReveal();
  initNavbarScroll();
  initActiveNavLink();
  initMobileMenu();
  initModalEvents();
  initResetFilters();
  initContactForm();
  initBackToTop();
  initFooter();
  initSmoothScroll();
});