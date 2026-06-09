'use strict';

/* ─── COMPANY CONFIG ───────────────────────────────────────────── */
const COMPANY = {
  name:      'Boat Link Medical Equipment Trading L.L.C',
  phone:     '+971543816497',
  whatsapp:  '971543816497',
  email:     'boatlink4@gmail.com',
  address:   'Business Venue Building, Office 101, Oud Mehta, Dubai , UAE',
};

/* ─── WHATSAPP HELPER ──────────────────────────────────────────── */
function waLink(productName) {
  const msg = encodeURIComponent(
    `Hello,\n\nI am interested in:\n${productName}\n\nPlease share details.`
  );
  return `https://wa.me/${COMPANY.whatsapp}?text=${msg}`;
}

/* ─── 15 CATEGORIES ────────────────────────────────────────────── */
const categories = [
  {
    name:        'ICU Equipment',
    image:       'images/category/icu-equipment.webp' || 'images/main.webp',
    description: 'Anesthesia machines, ventilators, patient monitors, defibrillators, infusion pumps, and full ICU support systems for intensive care units and operating rooms.',
  },
  {
    name:        'Medical Imaging',
    image:       'images/category/medical-imaging.webp' || 'images/main.webp',
    description: 'X-ray systems, C-arms, ultrasound scanners, mammography units, and digital imaging equipment for accurate diagnostic imaging across specialties.',
  },
  {
    name:        'Laboratory Equipment',
    image:       'images/category/laboratory-equipment.webp' || 'images/main.webp',
    description: 'Chemistry analyzers, hematology analyzers, centrifuges, microplate readers, and complete laboratory diagnostic solutions.',
  },
  {
    name:        'Neonatology Equipment',
    image:       'images/category/neonatology-equipment.webp' || 'images/main.webp',
    description: 'Infant incubators, phototherapy units, radiant warmers, resuscitators and newborn care equipment for neonatal intensive care.',
  },
  {
    name:        'Dental Equipment',
    image:       'images/category/dental-equipment.webp' || 'images/main.webp',
    description: 'Dental chairs, X-ray systems, panoramic units, and complete dental equipment solutions for modern dental practices.',
  },
  {
    name:        'Dialysis',
    image:       'images/category/dialysis.webp' || 'images/main.webp',
    description: 'Dialysis machines and complete dialysis equipment for efficient kidney replacement therapy in clinical environments.',
  },
  {
    name:        'ECG & EEG',
    image:       'images/category/ecg-eeg.webp' || 'images/main.webp',
    description: 'Electrocardiogram (ECG), electroencephalogram (EEG) machines, and treadmill stress test (TMT) units for cardiac and neurological monitoring.',
  },
  {
    name:        'Sterilizer Equipment',
    image:       'images/category/sterilizer-equipment.webp' || 'images/main.webp',
    description: 'Autoclaves, steam sterilizers, hot air ovens and complete sterilization solutions for infection control in healthcare facilities.',
  },
  {
    name:        'Gynaecology Equipment',
    image:       'images/category/gynaecology-equipment.webp' || 'images/main.webp',
    description: 'Delivery beds, examination couches, foetal monitors, baby sound dopplers and comprehensive gynaecology instruments.',
  },
  {
    name:        'Physiotherapy Equipment',
    image:       'images/category/physiotherapy-equipment.webp' || 'images/main.webp',
    description: 'Ultrasound therapy, muscle stimulators, shortwave diathermy, TENS units, traction equipment and full physiotherapy solutions.',
  },
  {
    name:        'SCICAN Products',
    image:       'images/category/scican-products.webp' || 'images/main.webp',
    description: 'SCICAN infection control solutions including Statim autoclaves, Hydrim washer disinfectors for dental, ophthalmic and medical clinics.',
  },
  {
    name:        'Surgical 3-Ply Mask Machine',
    image:       'images/category/surgical-3-ply-mask-machine.webp' || 'images/main.webp',
    description: 'High-speed automated blank mask making machines for producing surgical 3-ply face masks with ultrasonic melting technology.',
  },
  {
    name:        'Furniture & Logistics',
    image:       'images/category/furniture-logistics.webp' || 'images/main.webp',
    description: 'ICU electrical hospital beds, trolleys, stretchers, mayo stands and complete medical furniture for healthcare facilities.',
  },
  {
    name:        'Consumables & Instruments',
    image:       'images/category/consumables-instruments.webp' || 'images/main.webp',
    description: 'A wide range of medical consumables and instruments including syringes, needles, sutures, IV sets, masks and everyday clinical supplies.',
  },
  {
    name:        'Ophthalmology Equipment',
    image:       'images/category/ophthalmology-equipment.webp' || 'images/main.webp',
    description: 'Auto refractometers, slit lamps, OCT scanners, A/B scan units, lensometers, visual field analyzers and full ophthalmic equipment.',
  },
];

/* ─── PRODUCTS ────────────────────────────────────────────────── */
/* Add / remove product objects here — website updates automatically */
const products = [

  /* ====================================================
     ICU EQUIPMENT
  ==================================================== */
  {
    id: 1,
    name:             'Anesthesia Machine WM-6100 PLUS',
    image:            'images/anesthesia-machine-wm-6100-plus.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'High-performance anesthesia system for ICU, OR and anesthesiology with 10.4" TFT screen and multiple ventilation modes.',
    fullDescription:  'The WM-6100 PLUS Anesthesia System delivers outstanding performance in Intensive Care Units, Operating Rooms, and Anesthesiology Departments. Professional design for adult, child, and infant inhalation anesthesia and respiratory management, with advanced ventilation modes. Outstanding ergonomic design providing high safety, stability, and exceptional user experience.',
    manufacturer:     'WAVEMED',
    model:            'WM-6100 PLUS',
    features: [
      '10.4" TFT LCD screen displaying ventilation parameters, alarms, and waveforms',
      'High precision flow meter for instant fresh gas flow monitoring',
      'Integration breathing circuit design for easy operation',
      'Multiple working modes: volume control and pressure limit',
      'Vaporizer with temperature, flow compensation and self-lock safety function',
      'Multiple parameters monitoring interface for complete patient overview',
    ],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 2,
    name:             'Anesthesia Machine WM-6100D',
    image:            'images/anesthesia-machine-wm-6100d.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'WAVEMED 7-inch colourful screen anesthesia ventilator system for ICU and operating rooms.',
    fullDescription:  'The WM-6100D WAVEMED Medical Anesthesia System offers professional-grade anesthesia delivery from high to low acuity, simple to complex cases, pediatric to geriatric patients. Based on 23 years of anesthesia solution development, providing High Security, High Accuracy, High Stability and accurate monitoring.',
    manufacturer:     'WAVEMED',
    model:            'WM-6100D',
    features: [
      '7" TFT LCD screen with ventilation parameters, alarms, and waveforms',
      'High precision flow meter',
      'Integration breathing circuit design',
      'Volume control and pressure limit ventilation modes',
      'Vaporizer with temperature/flow compensation and self-lock function',
      'Real-time pressure-time, flow-time loop graphics',
      'High precision O2 concentration detection',
      'Optional: vital sign monitor and anesthetic gas monitor',
    ],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 3,
    name:             'ICU Ventilator WM-1100',
    image:            'images/icu-ventilator-wm-1100.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Friendly, powerful and reliable ICU ventilator for cardiopulmonary resuscitation and respiratory support.',
    fullDescription:  'The WM-1100 ICU Ventilator is suitable for various medical institutions for cardiopulmonary resuscitation and respiratory support. Handles acute respiratory failure, oxygenation dysfunction, intra-operation and post-operation respiratory support, and other respiratory treatments.',
    manufacturer:     'WAVEMED',
    model:            'WM-1100',
    features: [
      '12.1" TFT LCD screen with ventilation parameters, alarms, and waveforms',
      'Recycle breathing pipe for easy operation',
      'Multiple ventilation modes: volume control and pressure limit',
      'Real-time pressure-time and flow-time loop graphics',
      'High precision O2 concentration detection',
      'Stable and low-noise air compressor for quiet clinical environment',
    ],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 4,
    name:             'ICU Ventilator WT-500',
    image:            'images/icu-ventilator-wt-500.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Pneumatically driven, electrically controlled ICU ventilator for emergency resuscitation and respiratory therapy.',
    fullDescription:  'The WT-500 is a pneumatically driven, electrically controlled ventilator designed for emergency clinical resuscitation and respiratory therapy. Features an elegant design, automated self-checking, and self-calibrating sensors.',
    manufacturer:     'WAVETECH',
    model:            'WT-500',
    features: [
      'High visibility wide-angle LED alphanumeric display',
      'High precision infrared turbine pressure and flow sensors',
      'Automatic conversion to standby mode during AC power outages',
      'Automated self-checking on startup with auto self-calibrating sensor',
      '9-level adjustable humidifier',
      'Audible and visual alarms: tidal volume, airway pressure, power failure, O2 failure',
    ],
    specifications: {
      'Drive':          'Pneumatically driven, electrically controlled',
      'Display':        'High visibility wide-angle LED alphanumeric',
      'Sensors':        'High precision infrared turbine pressure and flow',
      'Humidifier':     '9-level adjustable',
      'Alarms':         'Tidal volume, airway pressure, power failure, O2 failure',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 5,
    name:             'Multi-Parameter Patient Monitor WT-M8KC',
    image:            'images/multi-parameter-patient-monitor-wt-m8kc.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'WaveTech 12.1" colour TFT multi-parameter patient monitor for adult, pediatric, neonatal, ICU and OR use.',
    fullDescription:  'The WaveTech Multi-Parameter Patient Monitor WT M-8KC is designed for Adult, Pediatric, Neonatal, Medicine, Surgery, Operating Room, ICU and CCU applications. Features a large 12.1" real colour TFT screen and built-in rechargeable battery.',
    manufacturer:     'WAVETECH',
    model:            'WT-M8KC',
    features: [
      '12.1" real colour TFT screen',
      'Multi-parameter simultaneous monitoring',
      'Built-in rechargeable Li-ion battery (2h operating after full charge)',
      'Suitable for Adult, Pediatric, and Neonatal patients',
      'AC 100–240V, 50/60Hz power supply',
    ],
    specifications: {
      'Display':                 '12.1" real colour TFT',
      'Power':                   'AC 100–240V, 50/60Hz; DC Li-ion 11.1V 24Wh',
      'Battery Life':            '2 hours after full charge',
      'Dimensions':              '340×245×134 mm (approx.)',
      'Weight':                  'Approx. 2.798 kg',
      'Operating Temp':          '0–40 °C',
      'Operating Humidity':      '15–80%',
      'Storage Temp':            '-20 to +55 °C',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 6,
    name:             'Multi-Parameter Patient Monitor WT-E12',
    image:            'images/multi-parameter-patient-monitor-wt-e12.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: '12-inch full touch screen patient monitor with ST analysis, wireless central monitoring and 7-day trend storage.',
    fullDescription:  'The WT-E12 features a 12-inch high-resolution colour TFT LCD with optional full touch screen, real-time ST segment analysis, pacemaker detection, and 3-level audio/visual alarms. Wireless central monitoring system applicable to ICU/CCU/OR.',
    manufacturer:     'WAVETECH',
    model:            'WT-E12',
    features: [
      '12-inch high-resolution colour TFT LCD (optional full touch screen)',
      'Real-time ST segment analysis and pacemaker detection',
      '3-level audio/visual alarms',
      'Efficient defibrillator and HF knife interference resistance',
      'Built-in rechargeable lithium battery',
      '400 groups NIBP list, 6000 seconds ECG waveform recall',
      '60 alarm event records, 7-day trend chart storage',
      'Wireless central monitoring — ICU/CCU/OR compatible',
      'Wall mounting and mobile trolley support',
    ],
    specifications: {
      'Display':             '12-inch colour TFT LCD, 12×11.3×6.3 inch',
      'Weight':              '8.33 lb',
      'Power':               '100–240V AC, 50/60Hz, Max 70VA',
      'Battery':             '11.1V 4000mAh rechargeable lithium',
      'Standard Config':     'SpO2, PR, NIBP, ECG, RESP, TEMP',
      'Optional':            'Nellcor SpO2, 2×IBP, ETCO2, Touch screen, Built-in Thermal Printer',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 7,
    name:             'Patient Monitor',
    image:            'images/patient-monitor.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Multimodal bedside monitor simultaneously measuring vital parameters including blood pressure, heart rate and pulse oximetry.',
    fullDescription:  'Multimodal monitors that simultaneously measure and display the relevant vital parameters such as blood pressure, heart rate, and pulse oximetry — commonly integrated into bedside monitors in critical care units and anesthetic machines in operating rooms.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 8,
    name:             'Fetal Monitor',
    image:            'images/fetal-monitor.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Electronic fetal heart monitoring device for use during pregnancy, labor and delivery — tracks fetal heart rate and uterine contractions.',
    fullDescription:  'Electronic fetal heart monitoring is done during pregnancy, labor, and delivery. It keeps track of the fetal heart rate and monitors the duration of uterine contractions.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 9,
    name:             'Fetal Doppler',
    image:            'images/fetal-doppler.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Hand-held ultrasound transducer for prenatal fetal heartbeat detection using the Doppler effect.',
    fullDescription:  'A Fetal Doppler Monitor is a hand-held ultrasound transducer used to detect the fetal heartbeat for prenatal care. It uses the Doppler effect to provide an audible simulation of the heartbeat.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 10,
    name:             'Oxygen Concentrator',
    image:            'images/oxygen-concentrator.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Medical device that filters and compresses ambient air to deliver continuous supplemental oxygen to patients.',
    fullDescription:  'An oxygen concentrator is a medical device used to deliver oxygen to those who require it. Unlike an oxygen tank with a fixed supply, a concentrator filters in air, compresses it, and delivers air continuously — the air supply never runs out.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 11,
    name:             'Suction Machine',
    image:            'images/suction-machine.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Medical suction device for removing mucus, serum, and other substances from body cavities using partial vacuum.',
    fullDescription:  'A suction machine is a device for removing liquids or gases by suction, especially an instrument that uses suction to remove substances such as mucus or serum from a body cavity.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 12,
    name:             'Electrosurgery Unit',
    image:            'images/electrosurgery-unit.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'High-frequency alternating current electrosurgical device for cutting, coagulating, desiccating or fulguratingtissue.',
    fullDescription:  'Electrosurgery is the application of a high-frequency (radio frequency) alternating polarity electrical current to biological tissue as a means to cut, coagulate, desiccate, or fulgurate tissue.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 13,
    name:             'Infusion Pump',
    image:            'images/infusion-pump.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Precision infusion pump delivering small-volume injections, repeated boluses and patient-controlled analgesia reliably.',
    fullDescription:  'Infusion pumps can administer fluids in ways that would be impractically expensive or unreliable if performed manually. They can administer as little as 0.1 mL per hour injections, injections every minute, or patient-controlled analgesia boluses up to a maximum number per hour.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 14,
    name:             'Syringe Pump',
    image:            'images/syringe-pump.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'High-precision syringe driver for accurate intravenous medication delivery in ICU and clinical settings.',
    fullDescription:  'A syringe pump is a small infusion pump used to gradually administer small amounts of fluid (with or without medication) to a patient. Used extensively in ICU, OR, and general ward environments.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 15,
    name:             'Portable Automated External Defibrillator (AED)',
    image:            'images/portable-automated-external-defibrillator-aed.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'Portable electronic AED that automatically diagnoses life-threatening cardiac arrhythmias and delivers defibrillation therapy.',
    fullDescription:  'An automated external defibrillator (AED) is a portable electronic device that automatically diagnoses ventricular fibrillation and pulseless ventricular tachycardia, and treats them through defibrillation — applying electrical therapy which stops the arrhythmia and allows the heart to reestablish an effective rhythm.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 16,
    name:             'External Defibrillator',
    image:            'images/external-defibrillator.webp' || 'images/main.webp',
    category:         'ICU Equipment',
    shortDescription: 'External defibrillator that converts abnormal ECG rhythms to normal sinus rhythm by applying controlled electric current.',
    fullDescription:  'A defibrillator is used to perform defibrillation for the purpose of converting abnormal ECG rhythm into normal rhythm. When the heart enters ventricular fibrillation, a controlled amount of external electric current returns it to normal sinus rhythm.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     MEDICAL IMAGING
  ==================================================== */
  {
    id: 101,
    name:             'Digital Mobile X-Ray',
    image:            'images/digital-mobile-x-ray.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Mobile digital X-ray system for point-of-care imaging across NICU, ICU, OR and Emergency Room environments.',
    fullDescription:  'Mobile X-ray systems are used throughout the hospital from in-patient to NICU, Operating Room, and Emergency Room imaging. Designed for fast, reliable, high image quality point-of-care imaging using wireless flat panel detector technology.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 102,
    name:             'X-Ray Radiography System',
    image:            'images/x-ray-radiography-system.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Fixed digital radiography system providing high-confidence first-impression imaging to guide patient care pathways.',
    fullDescription:  'Our X-Ray Radiography System is designed to be an intuitive and technologically powerful tool, helping you deliver greater confidence. Focused on reinventing X-ray to help you swiftly and carefully determine the right course of action to shape amazing and valuable patient care.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 103,
    name:             'C-Arm Radiography System',
    image:            'images/c-arm-radiography-system.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Mobile C-arm X-ray imaging device for flexible intra-operative and interventional use across multiple ORs.',
    fullDescription:  'A mobile C-arm is a medical imaging device based on X-ray technology that can be used flexibly in various operating rooms within a clinic. Ideal for orthopaedic, vascular, and general surgical procedures.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 104,
    name:             'Mammography System',
    image:            'images/mammography-system.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Dedicated low-dose X-ray mammography system for early detection and diagnosis of breast diseases in women.',
    fullDescription:  'Mammography is specialized medical imaging using a low-dose X-ray system to see inside the breasts. A mammography exam, called a mammogram, aids in the early detection and diagnosis of breast diseases in women.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 105,
    name:             'Fully Automatic Mammography Unit',
    image:            'images/fully-automatic-mammography-unit.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Fully automatic mammography unit for complete automated breast imaging with high diagnostic accuracy.',
    fullDescription:  'A fully automatic mammography unit offering complete automated positioning and image acquisition for breast imaging. Designed to optimise workflow and patient comfort while maintaining the highest diagnostic image quality.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 106,
    name:             'X-Ray Film Processor',
    image:            'images/x-ray-film-processor.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Automatic X-ray film processor transporting film through developing, fixing, washing and drying cycles consistently.',
    fullDescription:  'Automatic processing is the most commonly used method of processing radiographs. The automatic film processor mechanically transports exposed X-ray film through the developing, fixing, washing, and drying cycles. Quicker than manual processing and produces finished radiographs of uniform quality.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 107,
    name:             'X-Ray Film Viewer',
    image:            'images/x-ray-film-viewer.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'High-quality X-ray illuminator providing clear, bright image viewing for more accurate radiographic diagnoses.',
    fullDescription:  'A high-quality X-ray illuminator gives a quality X-ray view that produces clearer images for more accurate diagnoses. Available in single and multi-panel configurations.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 108,
    name:             'Portable Ultrasound Scanner',
    image:            'images/portable-ultrasound-scanner.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Compact, hand-carried portable ultrasound scanner with optional battery operation for point-of-care diagnostic imaging.',
    fullDescription:  'Portable ultrasound utilizes small and lightweight devices compared to console-style predecessors. These mobile ultrasound systems can be carried by hand and in some cases operated on battery power alone, enabling point-of-care imaging anywhere.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 109,
    name:             'Digital Ultrasound Scanner',
    image:            'images/digital-ultrasound-scanner.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Full-featured diagnostic ultrasound system for imaging tendons, muscles, joints, vessels, internal organs and obstetric use.',
    fullDescription:  'Ultrasound (diagnostic sonography / ultrasonography) is a diagnostic imaging technique based on ultrasound application. Used to see internal body structures such as tendons, muscles, joints, vessels, and internal organs. Widely used in obstetric (pregnancy) ultrasound.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 110,
    name:             'Digital X-Ray Vita CR',
    image:            'images/digital-x-ray-vita-cr.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Digital X-ray Vita CR system for high-quality computed radiography with efficient digital workflow.',
    fullDescription:  'The Digital X-Ray Vita CR provides a complete computed radiography solution, converting conventional X-ray equipment to full digital workflow while maintaining high image quality and diagnostic accuracy.',
    manufacturer:     '',
    model:            'Vita CR',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 111,
    name:             'Motion Mobile X-Ray',
    image:            'images/motion-mobile-x-ray.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Motion-series mobile X-ray system combining mobility and high image quality for bedside and emergency imaging.',
    fullDescription:  'The Motion Mobile X-Ray system is designed for high-quality bedside and emergency imaging with excellent mobility across all hospital environments.',
    manufacturer:     '',
    model:            'Motion',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 112,
    name:             'Ultrasound Probes',
    image:            'images/ultrasound-probes.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Wide range of diagnostic ultrasound transducer probes for abdominal, cardiac, vascular, obstetric and musculoskeletal imaging.',
    fullDescription:  'Our range of ultrasound probes covers all clinical applications including abdominal, cardiac, vascular, obstetric, small parts, and musculoskeletal imaging. Compatible with major ultrasound platforms.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 113,
    name:             'Samsung Ultrasound',
    image:            'images/samsung-ultrasound.webp' || 'images/main.webp',
    category:         'Medical Imaging',
    shortDescription: 'Samsung medical-grade ultrasound systems featuring innovative AI-powered tools and outstanding image clarity.',
    fullDescription:  'Samsung ultrasound systems deliver outstanding image clarity and innovative AI-powered diagnostic tools across multiple clinical disciplines including radiology, OB/GYN, cardiology, and point-of-care.',
    manufacturer:     'Samsung Medison',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     LABORATORY EQUIPMENT
  ==================================================== */
  {
    id: 201,
    name:             'Fully Automatic Chemistry Analyzer — SAPPHIRE SPR-161',
    image:            'images/fully-automatic-chemistry-analyzer-sapphire-spr-161.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Random-access chemistry analyzer with 36-assay capacity, 220 tests/hour throughput and ISE module support.',
    fullDescription:  'The SPR-161 SAPPHIRE fully automatic chemistry analyzer features random access with direct reading system. Handles 36 assay items with a maximum throughput of 220 tests/hour for single reagent, 160 tests/hour for two reagent, and an additional 100 tests/hour with ISE module.',
    manufacturer:     'SAPPHIRE',
    model:            'SPR-161',
    features: [
      'Random access with direct reading system',
      'Levy Jennings quality control at 3 levels',
      'Multiple report formats available',
      'End point, Kinetic, Fixed time, Immunoturbidimetry methods',
      '1 and 2 reagent, multistandard, reagent/serum blank modes',
    ],
    specifications: {
      'Assay Items':       '36',
      'Throughput':        '1 Reagent: 220 tests/hr; 2 Reagent: 160 tests/hr; With ISE: +100 tests/hr',
      'Sample Positions':  '50',
      'Sample Volume':     '1–100 µL, 0.1 µL step',
      'Reagent Positions': '36',
      'R1 Volume':         '1–400 µL, 1 µL step',
      'R2 Volume':         '1–400 µL, 1 µL step',
      'Wavelength':        '340–810 nm',
      'Light Source':      'Halogen lamp',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 202,
    name:             'Hematology Analyzer',
    image:            'images/hematology-analyzer.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Automated hematology analyzer measuring blood and biological sample characteristics for rapid disease diagnosis.',
    fullDescription:  'An automated hematology analyser is a medical laboratory instrument designed to measure different chemicals and other characteristics in a number of biological samples quickly with minimal human assistance. These measured properties of blood and other fluids may be useful in the diagnosis of disease.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 203,
    name:             'Chemistry Analyzer',
    image:            'images/chemistry-analyzer.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Benchtop or floor-standing chemistry analyzer determining metabolites, electrolytes, proteins and drugs in biological fluids.',
    fullDescription:  'Chemistry analyzers determine the concentration of certain metabolites, electrolytes, proteins, and/or drugs in samples of serum, plasma, urine, cerebrospinal fluid, and/or other body fluids. Available as benchtop or floor-standing configurations.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 204,
    name:             'Blood Coagulation Analyzer',
    image:            'images/blood-coagulation-analyzer.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Automated coagulometer measuring blood clotting ability via PT, PTT and other coagulation tests.',
    fullDescription:  'Automated coagulation machines measure the ability of blood to clot by performing partial thromboplastin times, prothrombin times, and other tests. Require blood samples drawn in sodium citrate anticoagulant tubes.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 205,
    name:             'Microplate Reader',
    image:            'images/microplate-reader.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Laboratory instrument detecting biological, chemical or physical events in microtiter plate samples.',
    fullDescription:  'Microplate readers are instruments used to detect biological, chemical, or physical events of samples in microtiter plates. Widely used in ELISA, cell biology, drug discovery, and quantitative biochemistry.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 206,
    name:             'Urine Analyzer',
    image:            'images/urine-analyzer.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Automatic urine testing device detecting and quantifying bilirubin, protein, glucose, red blood cells and more.',
    fullDescription:  'A urine analyser is a device used in the clinical setting to perform automatic urine testing. Units detect and quantify a number of analytes including bilirubin, protein, glucose, and red blood cells.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 207,
    name:             'ESR Analyzer',
    image:            'images/esr-analyzer.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Automated erythrocyte sedimentation rate analyzer — a non-specific measure of inflammation.',
    fullDescription:  'Erythrocyte Sedimentation Rate (ESR) is the rate at which red blood cells sediment over one hour. It is a common hematology test and a non-specific measure of inflammation. Modern automated ESR analyzers provide rapid, reproducible results.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 208,
    name:             'Centrifuge',
    image:            'images/centrifuge.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Laboratory centrifuge for separating fluids, gases or liquids based on density through centrifugal force.',
    fullDescription:  'Laboratory centrifuges are used to separate components of blood, urine, and other biological fluids. Available in benchtop, refrigerated, high-speed, and micro configurations.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 209,
    name:             'Superspeed Centrifuge',
    image:            'images/superspeed-centrifuge.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'High-speed laboratory centrifuge for demanding separations requiring greater centrifugal force.',
    fullDescription:  'Superspeed centrifuges provide the high RPM and RCF values required for demanding laboratory separations including protein, DNA, and cell component isolation.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 210,
    name:             'Containment Barrier Isolator Lab',
    image:            'images/containment-barrier-isolator-lab.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Primary containment barrier isolator for safe handling of hazardous biological or pharmaceutical materials.',
    fullDescription:  'Containment barrier isolators provide a physical barrier between the operator and hazardous materials in laboratory environments, maintaining sterility and operator safety.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 211,
    name:             'Laminar Flow / Fume Hood',
    image:            'images/laminar-flow-fume-hood.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Laminar flow cabinet and fume hood for safe laboratory work with biological and chemical samples.',
    fullDescription:  'Laminar flow hoods and fume cabinets protect laboratory workers and samples from contamination and hazardous vapors. Available in horizontal and vertical airflow configurations.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 212,
    name:             'Lab Safety Cabinet',
    image:            'images/lab-safety-cabinet.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Biological safety cabinet providing personnel, product, and environmental protection in laboratory settings.',
    fullDescription:  'Biological safety cabinets (BSC) provide a contained ventilated workspace for safely working with materials contaminated with or potentially contaminated with pathogens.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 213,
    name:             'Samsung Hematology',
    image:            'images/samsung-hematology.webp' || 'images/main.webp',
    category:         'Laboratory Equipment',
    shortDescription: 'Samsung medical-grade hematology analyzer for precise complete blood count (CBC) and differential analysis.',
    fullDescription:  'Samsung hematology analyzers deliver precise CBC and differential results with high throughput and minimal sample volume requirements, suitable for clinical laboratories of all sizes.',
    manufacturer:     'Samsung',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     NEONATOLOGY EQUIPMENT
  ==================================================== */
  {
    id: 301,
    name:             'Infant Incubator',
    image:            'images/infant-incubator.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Neonatal incubator providing a controlled environment with heater, fan, humidity, oxygen and nursing access ports.',
    fullDescription:  'A neonatal incubator is a rigid box-like enclosure in which an infant can be kept in a controlled environment for observation and care. The device includes a heater, fan, water container for humidity, oxygen control valve, and access ports for nursing care.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 302,
    name:             'Medical Mobile Infant Incubator',
    image:            'images/medical-mobile-infant-incubator.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Mobile neonatal incubator for safe transport of newborns within or between healthcare facilities.',
    fullDescription:  'A mobile infant incubator designed for the safe transport of newborns within or between hospitals, maintaining controlled temperature, humidity, and oxygen levels during transfer.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 303,
    name:             'Infant Phototherapy Unit',
    image:            'images/infant-phototherapy-unit.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Neonatal phototherapy unit using therapeutic light to reduce serum bilirubin levels and treat neonatal jaundice.',
    fullDescription:  'Infant phototherapy units use the effect of light on jaundice in neonates to decrease serum bilirubin levels. Essential equipment in neonatal care for managing hyperbilirubinemia.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 304,
    name:             'Infant Radiant Warmer',
    image:            'images/infant-radiant-warmer.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Open care radiant warmer providing controlled thermal environment for neonatal resuscitation and stabilization.',
    fullDescription:  'Infant radiant warmers provide an open care station with overhead radiant heat to maintain the body temperature of newborns during resuscitation, examination, and procedures.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 305,
    name:             'Air-Oxygen Blender',
    image:            'images/air-oxygen-blender.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Precision air-oxygen blender for accurate FiO2 delivery to neonatal patients requiring respiratory support.',
    fullDescription:  'Air-oxygen blenders precisely mix air and oxygen to deliver a controlled fraction of inspired oxygen (FiO2) to neonates receiving respiratory support via incubator, CPAP, or ventilator.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 306,
    name:             'Infant Oxygen Hood',
    image:            'images/infant-oxygen-hood.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Transparent oxygen hood for non-invasive oxygen delivery to neonates requiring supplemental oxygen therapy.',
    fullDescription:  'An infant oxygen hood is a clear, enclosed device placed over the head of a neonate to provide a controlled oxygen-enriched environment without the need for intubation.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 307,
    name:             'Infant T-Piece Resuscitator',
    image:            'images/infant-t-piece-resuscitator.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'T-piece mechanical infant resuscitator delivering controlled peak inspiratory pressure and PEEP for neonatal resuscitation.',
    fullDescription:  'The Infant T-piece resuscitator is a pressure-limited, flow-controlled mechanical device used for neonatal resuscitation, delivering consistent peak inspiratory pressure (PIP) and positive end-expiratory pressure (PEEP).',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 308,
    name:             'Jaundice Detector',
    image:            'images/jaundice-detector.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Non-invasive transcutaneous bilirubin meter for screening neonatal jaundice without blood sampling.',
    fullDescription:  'A jaundice detector (transcutaneous bilirubinometer) provides non-invasive measurement of neonatal bilirubin levels through the skin, reducing the need for repeated blood tests.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 309,
    name:             'Neonatal Eyeshade',
    image:            'images/neonatal-eyeshade.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Protective neonatal eyeshade for blocking light during phototherapy to protect the newborn\'s eyes.',
    fullDescription:  'Neonatal eyeshades protect the sensitive eyes of newborns from the intense light used during phototherapy treatment for jaundice.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 310,
    name:             'BVM Resuscitator',
    image:            'images/bvm-resuscitator.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Bag-valve-mask (BVM) resuscitator for manual ventilation of neonates and infants during resuscitation.',
    fullDescription:  'A bag-valve-mask resuscitator provides positive pressure ventilation to neonates and infants during resuscitation situations. Available in neonatal and infant sizes with various mask options.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 311,
    name:             'Low-Pressure Aspirator',
    image:            'images/low-pressure-aspirator.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Gentle low-pressure suction aspirator for safe secretion removal in neonatal and infant patients.',
    fullDescription:  'A low-pressure aspirator provides gentle suction for the safe removal of secretions from the airways of neonatal and infant patients without causing trauma to delicate mucous membranes.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 312,
    name:             'Infant Head Fixing Unit',
    image:            'images/infant-head-fixing-unit.webp' || 'images/main.webp',
    category:         'Neonatology Equipment',
    shortDescription: 'Neonatal head positioning device for stabilizing infant head position during procedures and care.',
    fullDescription:  'The infant head fixing unit provides gentle, secure positioning of the neonatal head during procedures, imaging, and routine care to ensure safety and accurate results.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     DENTAL EQUIPMENT
  ==================================================== */
  {
    id: 401,
    name:             'Dental Chair',
    image:            'images/dental-chair.webp' || 'images/main.webp',
    category:         'Dental Equipment',
    shortDescription: 'Full-featured dental engine chair with integrated mechanical and pneumatic power sources for handpieces.',
    fullDescription:  'A dental engine is a large chair-side appliance (often including the chair itself) for use in a dentist\'s office. At minimum, a dental engine serves as a source of mechanical or pneumatic power for one or more handpieces.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 402,
    name:             'Dental X-Ray System',
    image:            'images/dental-x-ray-system.webp' || 'images/main.webp',
    category:         'Dental Equipment',
    shortDescription: 'Intraoral dental X-ray system for diagnosing cavities, gum disease and infections by imaging inside teeth and beneath gums.',
    fullDescription:  'Dental X-rays help dentists diagnose common problems such as cavities, gum disease, and some types of infections. Radiographs allow dentists to see inside a tooth and beneath the gums to assess the health of the bone and supporting tissues.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 403,
    name:             'Wall-Mounted Dental X-Ray',
    image:            'images/wall-mounted-dental-x-ray.webp' || 'images/main.webp',
    category:         'Dental Equipment',
    shortDescription: 'Space-saving wall-mounted dental X-ray unit for convenient, flexible intraoral radiographic imaging.',
    fullDescription:  'Wall-mounted dental X-ray systems provide a fixed, space-efficient radiography solution for dental practices. Arm-mounted for flexible positioning and ease of use.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 404,
    name:             'Mobile Dental X-Ray',
    image:            'images/mobile-dental-x-ray.webp' || 'images/main.webp',
    category:         'Dental Equipment',
    shortDescription: 'Portable mobile dental X-ray unit for flexible intraoral imaging in various clinical locations.',
    fullDescription:  'Mobile dental X-ray units provide portable, flexible intraoral radiography for use in dental chairs, bedside situations, or for patients with limited mobility.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 405,
    name:             'Panoramic Dental X-Ray System',
    image:            'images/panoramic-dental-x-ray-system.webp' || 'images/main.webp',
    category:         'Dental Equipment',
    shortDescription: 'Panoramic 2D dental X-ray capturing the entire mouth — teeth, jaws and surrounding structures — in a single image.',
    fullDescription:  'Panoramic radiography (panoramic X-ray) is a two-dimensional dental X-ray examination that captures the entire mouth in a single image, including the teeth, upper and lower jaws, surrounding structures, and tissues. Ideal for treatment planning and orthodontic assessment.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     ECG & EEG
  ==================================================== */
  {
    id: 501,
    name:             'EEG Machine',
    image:            'images/eeg-machine.webp' || 'images/main.webp',
    category:         'ECG & EEG',
    shortDescription: 'Electroencephalography (EEG) system for recording brain electrical activity — used in epilepsy, sleep disorders, and coma diagnosis.',
    fullDescription:  'EEG is most often used to diagnose epilepsy, which causes abnormalities in EEG readings. Also used to diagnose sleep disorders, depth of anesthesia, coma, encephalopathies, and brain death. EEG was historically a first-line method for diagnosing tumors, stroke and focal brain disorders.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 503,
    name:             'TMT Unit (Treadmill Stress Test)',
    image:            'images/tmt-unit-treadmill-stress-test.webp' || 'images/main.webp',
    category:         'ECG & EEG',
    shortDescription: 'Exercise ECG treadmill stress test system showing how the heart responds to physical exertion.',
    fullDescription:  'The exercise stress test (exercise electrocardiogram, treadmill test, graded exercise test, or stress EKG) is used to determine how the heart responds to being pushed. Used in diagnosing coronary artery disease and assessing cardiac function during physical activity.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     DIALYSIS
  ==================================================== */
  {
    id: 601,
    name:             'Dialysis Machine',
    image:            'images/dialysis-machine.webp' || 'images/main.webp',
    category:         'Dialysis',
    shortDescription: 'Advanced haemodialysis machine providing efficient kidney replacement therapy for patients with chronic kidney disease.',
    fullDescription:  'Dialysis machines help doctors provide more efficient ways for dialysis patients to manage advanced chronic kidney disease. The machines filter waste products and excess water from the blood when the kidneys can no longer perform this function.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 602,
    name:             'Dialysis Equipment',
    image:            'images/dialysis-equipment.webp' || 'images/main.webp',
    category:         'Dialysis',
    shortDescription: 'Complete range of dialysis support equipment including water treatment, dialysate preparation and access management.',
    fullDescription:  'Our complete dialysis equipment range includes water treatment systems, dialysate preparation units, vascular access management, and all ancillary equipment required for a complete haemodialysis setup.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     STERILIZER EQUIPMENT
  ==================================================== */
  {
    id: 701,
    name:             'Autoclave Sterilizer',
    image:            'images/autoclave-sterilizer.webp' || 'images/main.webp',
    category:         'Sterilizer Equipment',
    shortDescription: 'Fully automatic Class B autoclave with 8 preset sterilization programs, vacuum testing and USB output.',
    fullDescription:  'A fully automatic Class B autoclave with 8 preset sterilization programs. Designed for the sterilization of wrapped instruments, porous loads, and hollow devices in clinical and dental settings.',
    manufacturer:     '',
    model:            '',
    features: [
      'Fully automatic operation',
      '8 preset sterilization programs',
      'B&D / Helix / Vacuum testing program',
      'Cleaning program',
      'Printer & USB output',
      'Big stainless steel water tanks',
      'High-quality bacteria filter',
    ],
    specifications: {
      'Sterilization Temp':   '105–134 °C',
      'Sterilization Time':   '4–60 min',
      'Dry Time':             '1–25 min',
      'Vacuum Times':         '1–10 times',
      'Available Capacity':   '12 / 18 / 24 litres',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 702,
    name:             'Timed Tabletop Electric Boiling Sterilizer',
    image:            'images/timed-tabletop-electric-boiling-sterilizer.webp' || 'images/main.webp',
    category:         'Sterilizer Equipment',
    shortDescription: 'Tabletop electric boiling sterilizer with timed cycle for rapid sterilization of clinical instruments.',
    fullDescription:  'The timed tabletop electric boiling sterilizer provides a simple, reliable method of sterilization using boiling water. Suitable for metal instruments, glass items, and other heat-stable materials.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 703,
    name:             'Vertical Pressure Steam Sterilizer',
    image:            'images/vertical-pressure-steam-sterilizer.webp' || 'images/main.webp',
    category:         'Sterilizer Equipment',
    shortDescription: 'Vertical benchtop pressure steam sterilizer for reliable gravity and pre-vacuum sterilization cycles.',
    fullDescription:  'Vertical pressure steam sterilizers are designed for use in laboratories, clinics, and hospitals where reliable steam sterilization of instruments and materials is required. Available in various capacities.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 704,
    name:             'Hot Air Oven',
    image:            'images/hot-air-oven.webp' || 'images/main.webp',
    category:         'Sterilizer Equipment',
    shortDescription: 'Dry heat hot air oven sterilizer for glassware, oils, powders and other materials that cannot tolerate moisture.',
    fullDescription:  'Hot air ovens provide dry heat sterilization for materials that cannot be sterilized by steam — including glassware, powders, oils, and metal instruments — using circulating hot air at temperatures typically between 160–180°C.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 705,
    name:             'Horizontal Cylindrical Pressure Steam Sterilizer',
    image:            'images/horizontal-cylindrical-pressure-steam-sterilizer.webp' || 'images/main.webp',
    category:         'Sterilizer Equipment',
    shortDescription: 'Large-capacity horizontal cylindrical pressure steam sterilizer for bulk sterilization in hospital central sterile supply.',
    fullDescription:  'Horizontal cylindrical pressure steam sterilizers are used in central sterile supply departments for bulk sterilization of large loads including wrapped packs, linen, and instruments.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     GYNAECOLOGY EQUIPMENT
  ==================================================== */
  {
    id: 801,
    name:             'Examination Couch',
    image:            'images/examination-couch.webp' || 'images/main.webp',
    category:         'Gynaecology Equipment',
    shortDescription: 'Gynaecology examination couch with adjustable back rest and leg support for comfortable patient examination.',
    fullDescription:  'Gynaecology examination couches are specifically designed for female patient examinations, providing adjustable positioning and patient comfort during gynaecological assessments.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 802,
    name:             'Delivery Bed',
    image:            'images/delivery-bed.webp' || 'images/main.webp',
    category:         'Gynaecology Equipment',
    shortDescription: 'Multi-position delivery bed designed to support mother and medical team during the delivery process.',
    fullDescription:  'Delivery beds are specifically engineered to provide optimal positioning for both the patient and the medical team during labour and delivery. Features adjustable height, back section, and leg supports.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 803,
    name:             'Delivery Table (Electrical & Manual)',
    image:            'images/delivery-table-electrical-manual.webp' || 'images/main.webp',
    category:         'Gynaecology Equipment',
    shortDescription: 'Electrically and manually adjustable delivery table supporting all phases of labour and childbirth.',
    fullDescription:  'Delivery tables are available in both electrical and manual variants, offering flexible positioning for all phases of labour, delivery, and postpartum care.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 804,
    name:             'Foetal Monitor',
    image:            'images/foetal-monitor.webp' || 'images/main.webp',
    category:         'Gynaecology Equipment',
    shortDescription: 'Cardiotocograph (CTG) for continuous electronic fetal heart rate and uterine contraction monitoring during labour.',
    fullDescription:  'Foetal monitors (cardiotocographs) provide continuous electronic monitoring of fetal heart rate and uterine contractions during labour, enabling early detection of fetal distress.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 805,
    name:             'Baby Sound Doppler',
    image:            'images/baby-sound-doppler.webp' || 'images/main.webp',
    category:         'Gynaecology Equipment',
    shortDescription: 'Handheld fetal Doppler for listening to fetal heartbeat during antenatal consultations.',
    fullDescription:  'A baby sound Doppler (fetal Doppler) is a handheld ultrasound device used in antenatal care to detect and listen to the fetal heartbeat. Provides reassurance and basic monitoring during pregnancy check-ups.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     PHYSIOTHERAPY EQUIPMENT
  ==================================================== */
  {
    id: 901,
    name:             'Ultrasound Therapy Unit',
    image:            'images/ultrasound-therapy-unit.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Therapeutic ultrasound unit for deep tissue heating, pain relief and accelerated soft tissue healing.',
    fullDescription:  'Therapeutic ultrasound units deliver high-frequency sound waves to deep tissues for thermal and non-thermal effects including pain relief, improved circulation, and accelerated tissue healing.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 902,
    name:             'Muscle Stimulator (EMS)',
    image:            'images/muscle-stimulator-ems.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Electrical muscle stimulator for muscle rehabilitation, strengthening and pain management.',
    fullDescription:  'Electrical muscle stimulators (EMS) deliver electrical impulses to muscles for therapeutic purposes including muscle rehabilitation after injury, strengthening, and management of muscle atrophy.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 903,
    name:             'Shortwave Diathermy',
    image:            'images/shortwave-diathermy.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Shortwave diathermy unit delivering deep heat to joints and muscles for pain relief and increased mobility.',
    fullDescription:  'Shortwave diathermy uses high-frequency electromagnetic energy to generate deep heat in tissues. Used for treating pain, muscle spasm, and joint stiffness in physiotherapy.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 904,
    name:             'TENS Therapy Unit',
    image:            'images/tens-therapy-unit.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Transcutaneous electrical nerve stimulation (TENS) unit for non-invasive pain relief and management.',
    fullDescription:  'TENS therapy delivers low-voltage electrical current to relieve pain by interfering with pain signals transmitted to the brain. Widely used for chronic and acute pain management.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 905,
    name:             'Paraffin Tank',
    image:            'images/paraffin-tank.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Paraffin wax bath unit for thermal therapy of hands, feet and joints with soothing deep heat.',
    fullDescription:  'Paraffin wax tanks provide moist heat therapy by immersing the hands, feet, or other body parts in warm paraffin wax. Used to relieve pain and stiffness in arthritis, fibromyalgia, and musculoskeletal disorders.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 906,
    name:             'Traction Unit',
    image:            'images/traction-unit.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Cervical and lumbar traction unit for relieving spinal compression, disc herniation and nerve root pain.',
    fullDescription:  'Traction units apply a pulling force to the spine to relieve compression of intervertebral discs and nerve roots. Used in treating neck pain, back pain, disc herniation, and sciatica.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 907,
    name:             'Knee Physiotherapy Unit',
    image:            'images/knee-physiotherapy-unit.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Dedicated knee physiotherapy device for rehabilitation of knee injuries and post-operative recovery.',
    fullDescription:  'Knee physiotherapy units provide targeted therapeutic modalities for rehabilitation of knee injuries, ligament repair recovery, and post-operative physiotherapy.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 908,
    name:             'Interferential Current Therapy (IFT)',
    image:            'images/interferential-current-therapy-ift.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Interferential current therapy unit for deep pain relief using medium-frequency electrical stimulation.',
    fullDescription:  'Interferential current therapy (IFT) uses medium-frequency alternating currents that intersect within tissues to produce therapeutic effects including pain relief, muscle stimulation, and increased local circulation.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 909,
    name:             'Cold Pack',
    image:            'images/cold-pack.webp' || 'images/main.webp',
    category:         'Physiotherapy Equipment',
    shortDescription: 'Reusable therapeutic cold packs for cryotherapy, reducing inflammation and acute injury pain.',
    fullDescription:  'Therapeutic cold packs provide cryotherapy for reducing inflammation, swelling, and pain associated with acute injuries, post-operative care, and chronic musculoskeletal conditions.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     SCICAN PRODUCTS
  ==================================================== */
  {
    id: 1001,
    name:             'Statim Autoclave G4 — SCICAN',
    image:            'images/statim-autoclave-g4-scican.webp' || 'images/main.webp',
    category:         'SCICAN Products',
    shortDescription: 'SCICAN Statim G4 cassette autoclave providing the world\'s fastest steam sterilization cycle for dental and medical instruments.',
    fullDescription:  'The SCICAN Statim G4 is a cassette autoclave renowned for providing the fastest steam sterilization cycle available. Designed for dental offices, ophthalmology clinics, and medical practices where rapid instrument turnaround is critical.',
    manufacturer:     'SCICAN',
    model:            'Statim G4',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1002,
    name:             'Hydrim Washer Disinfector G4 — SCICAN',
    image:            'images/hydrim-washer-disinfector-g4-scican.webp' || 'images/main.webp',
    category:         'SCICAN Products',
    shortDescription: 'SCICAN Hydrim G4 instrument washer disinfector for automated cleaning and thermal disinfection of reusable instruments.',
    fullDescription:  'The SCICAN Hydrim G4 is a compact washer disinfector providing automated cleaning and thermal disinfection of reusable dental, ophthalmic, and medical instruments. Part of SCICAN\'s G4 connected infection control ecosystem.',
    manufacturer:     'SCICAN',
    model:            'Hydrim G4',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1003,
    name:             'Washer Disinfector — SCICAN',
    image:            'images/washer-disinfector-scican.webp' || 'images/main.webp',
    category:         'SCICAN Products',
    shortDescription: 'SCICAN washer disinfector for safe, automated cleaning and disinfection of medical and dental instruments.',
    fullDescription:  'SCICAN washer disinfectors provide a safe, validated automated process for cleaning and thermally disinfecting reusable instruments, reducing manual handling and improving infection control compliance.',
    manufacturer:     'SCICAN',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     SURGICAL 3-PLY MASK MACHINE
  ==================================================== */
  {
    id: 1101,
    name:             'Blank Mask Making Machine',
    image:            'images/Blank Mask Making Machine.webp' || 'images/main.webp',
    category:         'Surgical 3-Ply Mask Machine',
    shortDescription: 'Fully automatic ultrasonic blank face mask making machine producing 60–125 pieces/minute.',
    fullDescription:  'The Blank Mask Making Machine uses ultrasonic melting technology to manufacture high-quality blank face masks. Single-operator machine with aluminum frame construction for durability, anti-rust properties, easy cleaning, and neat appearance.',
    manufacturer:     '',
    model:            '',
    features: [
      'Ultrasonic melting technique',
      'Single man operation',
      'Aluminum machine frame — anti-rust, durable, easy to clean',
    ],
    specifications: {
      'Power Source':    '220V 50–60 Hz',
      'Input Power':     '3.5 KW',
      'Designed Speed':  '125 pcs/min',
      'Optimum Speed':   '60–100 pcs/min',
      'Dimension':       '2000 × 600 × 1200 mm',
      'Weight':          '700 kg',
    },
    certifications: [],
    notes: '',
  },

  /* ====================================================
     FURNITURE & LOGISTICS
  ==================================================== */
  {
    id: 1201,
    name:             'ICU Electrical Hospital Bed',
    image:            'images/icu-electrical-hospital-bed.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: '3-function electric hospital bed with ABS side rails, central braking castors and adjustable height from 510–780 mm.',
    fullDescription:  'The ICU electric hospital bed features three-function electric operation with high-quality three-motion motors. Engineering ABS plastic headboard, central control brake castors, ABS side rails, beautiful appearance, sturdy frame, and easy operation.',
    manufacturer:     '',
    model:            '',
    features: [
      '3-function electric operation',
      'High-quality three-motion motors',
      'Engineering ABS plastic headboard',
      'Central control brake castors',
      'ABS side rails',
      'Backrest adjustment: 0–75°',
      'Leg section: 0–40°',
      'Trendelenburg: 0–12°; Anti-Trendelenburg: 0–12°',
    ],
    specifications: {
      'Height Adjustment':  '510–780 mm',
      'Length':             '2200 mm',
      'Width':              '900 mm',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1202,
    name:             'Gynaecology Couch',
    image:            'images/gynaecology-couch.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Adjustable gynaecology examination couch for comfortable patient positioning during clinical procedures.',
    fullDescription:  'A gynaecology couch designed specifically for female patient examinations with adjustable sections for patient comfort and clinician access.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1203,
    name:             'Mayo Stand',
    image:            'images/mayo-stand.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Adjustable mayo stand for holding surgical instruments within the sterile field during procedures.',
    fullDescription:  'Mayo stands provide an adjustable over-patient platform for holding surgical instruments and sterile supplies within easy reach of the surgeon during operations.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1204,
    name:             'Emergency Trolley',
    image:            'images/emergency-trolley.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Crash cart emergency trolley for organizing and transporting resuscitation equipment and emergency medications.',
    fullDescription:  'Emergency trolleys (crash carts) are used to organize and transport resuscitation equipment, defibrillators, medications, and emergency supplies for rapid deployment during cardiac or respiratory arrest.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1205,
    name:             'Anaesthesia Trolley',
    image:            'images/anaesthesia-trolley.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Dedicated anaesthesia trolley for organized storage of anaesthesia drugs, equipment and airway management tools.',
    fullDescription:  'Anaesthesia trolleys provide organized, accessible storage for anaesthesia medications, airway management equipment, and anaesthesia accessories in operating rooms and procedure areas.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1206,
    name:             'Medicine Trolley',
    image:            'images/medicine-trolley.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Lockable medicine distribution trolley for safe medication storage and ward round administration.',
    fullDescription:  'Medicine trolleys provide secure, organised medication storage with lockable drawers for safe distribution of medications during ward rounds and clinical procedures.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1207,
    name:             'Hospital Manual Bed',
    image:            'images/hospital-manual-bed.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Manual crank-operated hospital bed with adjustable backrest and height for general ward patient care.',
    fullDescription:  'Hospital manual beds feature a crank-operated mechanism for adjusting the backrest and bed height without requiring electricity. Ideal for general ward use with a sturdy frame and durable construction.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },
  {
    id: 1208,
    name:             'Emergency Stretcher',
    image:            'images/emergency-stretcher.webp' || 'images/main.webp',
    category:         'Furniture & Logistics',
    shortDescription: 'Hospital emergency stretcher for patient transport with adjustable height and sturdy frame.',
    fullDescription:  'Emergency stretchers provide safe, comfortable patient transport within and between hospital departments. Features include adjustable height, IV poles, side rails, and smooth-rolling castors.',
    manufacturer:     '',
    model:            '',
    features: [],
    specifications: {},
    certifications: [],
    notes: '',
  },

  /* ====================================================
     CONSUMABLES & INSTRUMENTS
  ==================================================== */
  { id: 1301, name: 'Pipets',             image: 'images/Pipets.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Precision laboratory and clinical pipets for accurate liquid measurement and transfer.',            fullDescription: 'Clinical and laboratory pipets for accurate measurement and transfer of small volumes of liquid. Available in multiple sizes and configurations.',                                              manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1302, name: 'Cotton Roll',        image: 'images/Cotton Roll.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Medical-grade cotton rolls for wound care, dental procedures and moisture absorption.',              fullDescription: 'High-quality medical cotton rolls used in dental procedures, wound care, and general clinical moisture absorption. Available in various sizes.',                                              manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1303, name: '3-Way Stopcock',     image: 'images/3-Way Stopcock.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Three-way stopcock valve for controlling IV line fluid flow and pressure monitoring.',              fullDescription: 'Three-way stopcocks are used in IV therapy to control fluid flow, allow for medication administration, and connect pressure monitoring lines without interrupting infusion.',                   manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1304, name: 'Sharp Container',    image: 'images/Sharp Container.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Puncture-resistant sharps disposal container for safe disposal of needles, syringes and blades.',   fullDescription: 'Puncture-resistant sharps containers for the safe disposal of used needles, syringes, lancets, and other sharps. Available in multiple capacities meeting biohazard disposal regulations.',  manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1305, name: 'Bandage',            image: 'images/Bandage.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Medical bandages for wound dressing, compression therapy and immobilisation.',                       fullDescription: 'Medical-grade bandages for wound dressing, compression therapy, and limb immobilisation. Available as elastic, crepe, cohesive, and triangular variants.',                                  manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1306, name: 'Suture',             image: 'images/Suture.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Sterile surgical sutures for wound closure — available in absorbable and non-absorbable types.',   fullDescription: 'Sterile surgical sutures for wound and incision closure. Available in absorbable (Vicryl, Monocryl, PDS) and non-absorbable (Prolene, Nylon, Silk) varieties with various needle configurations.', manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1307, name: 'ECG Gel',            image: 'images/ECG Gel.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Conductive electrode gel for ECG, defibrillation and ultrasound procedures.',                       fullDescription: 'Conductive gel used with ECG electrodes, defibrillation pads, and ultrasound transducers to ensure good electrical or acoustic contact with the skin.',                                       manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1308, name: 'Needles',            image: 'images/Needles.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Sterile hypodermic needles for injection, blood draw and IV cannulation.',                          fullDescription: 'Sterile hypodermic needles for injection, blood collection, and IV cannulation. Available in all standard gauges and lengths for all clinical applications.',                                 manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1309, name: 'Centrifuge Tubes',   image: 'images/Centrifuge Tubes.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Sterile centrifuge tubes for sample collection, processing and storage in clinical laboratories.',   fullDescription: 'Sterile centrifuge tubes designed for sample collection, centrifugation, and storage. Available in 1.5 mL, 2 mL, 15 mL, and 50 mL sizes.',                                                 manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1310, name: 'IV Set',             image: 'images/IV Set.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Sterile IV administration set for fluid and medication delivery via intravenous route.',             fullDescription: 'Sterile IV administration sets for intravenous fluid and medication delivery. Available in standard, paediatric (burette), and blood transfusion configurations.',                            manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1311, name: 'Biohazard Bag',      image: 'images/Biohazard Bag.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Biohazard waste disposal bags for safe collection and disposal of infectious clinical waste.',       fullDescription: 'Heavy-duty biohazard bags for safe collection, containment, and disposal of infectious clinical waste. Colour-coded and clearly marked with biohazard symbols.',                             manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1312, name: 'Drape Sheet',        image: 'images/Drape Sheet.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Sterile surgical drape sheets for maintaining the sterile field during procedures.',                 fullDescription: 'Sterile disposable surgical drape sheets maintaining the sterile field around operative sites and patient examination areas. Available in various sizes and configurations.',                    manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1313, name: 'EDTA Tube',          image: 'images/EDTA Tube.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'EDTA anticoagulant blood collection tubes for haematology and molecular testing.',                   fullDescription: 'EDTA (ethylenediaminetetraacetic acid) blood collection vacuum tubes with anticoagulant coating for haematology (CBC) and molecular biology testing.',                                        manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1314, name: 'Microscope Slides',  image: 'images/Microscope Slides.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Laboratory microscope slides and cover slips for specimen examination and histology.',               fullDescription: 'Plain and frosted microscope slides and cover slips for specimen preparation, histology, cytology, and haematology examination under light microscopy.',                                      manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1315, name: 'Face Mask 3-Ply',    image: 'images/Face Mask 3-Ply.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Disposable 3-ply surgical face mask providing barrier protection for patients and healthcare workers.', fullDescription: 'Disposable 3-ply surgical face masks providing filtration and barrier protection against droplets and aerosols. Fluid resistant outer layer, melt-blown filter middle layer, soft inner layer.', manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1316, name: 'Sanitizer',          image: 'images/Sanitizer.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Alcohol-based hand sanitizer for rapid hand hygiene and infection prevention.',                      fullDescription: 'WHO-formulation alcohol-based hand sanitizer for rapid hand hygiene without water. Available in gel and liquid formulations in multiple container sizes.',                                      manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1317, name: 'Syringe',            image: 'images/Syringe.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Sterile disposable syringes for injection and fluid aspiration in various sizes.',                  fullDescription: 'Sterile disposable syringes for drug injection, vaccine administration, and fluid aspiration. Available in 1 mL, 2 mL, 5 mL, 10 mL, 20 mL, and 50 mL sizes with Luer-Lock or Luer-Slip tips.', manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1318, name: 'KN95 Mask',          image: 'images/KN95 Mask.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'KN95 filtering facepiece respirator offering ≥95% particulate filtration efficiency.',             fullDescription: 'KN95 certified filtering facepiece respirators providing at least 95% filtration efficiency against non-oil-based particulates. Compliant with Chinese GB2626-2019 standard.',                 manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1319, name: 'N95 Mask 3M 1860',   image: 'images/N95 Mask 3M 1860.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: '3M 1860 N95 respirator for healthcare use, NIOSH approved, filtering ≥95% airborne particles.',     fullDescription: '3M 1860 N95 Healthcare Respirator is NIOSH-approved and cleared by the FDA for use as a surgical mask. Provides a secure fit and filters at least 95% of airborne particles.',              manufacturer: '3M', model: '1860', features: [], specifications: {}, certifications: ['NIOSH N95', 'FDA Cleared'], notes: '' },
  { id: 1320, name: 'Micropore',          image: 'images/Micropore.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Hypoallergenic micropore surgical tape for wound dressings, tube fixation and sensitive skin.',     fullDescription: 'Micropore surgical tape is a hypoallergenic paper-based adhesive tape used for securing wound dressings, medical tubing, and catheters on sensitive skin.',                                   manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1321, name: 'Oxygen Mask',        image: 'images/Oxygen Mask.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Disposable oxygen delivery mask for controlled oxygen administration to spontaneously breathing patients.', fullDescription: 'Disposable oxygen delivery masks provide a comfortable and hygienic method of oxygen administration to spontaneously breathing patients. Available as simple face masks, Venturi masks, and non-rebreather masks.', manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },
  { id: 1322, name: 'Dental Instruments', image: 'images/Dental Instruments.webp' || 'images/main.webp', category: 'Consumables & Instruments', shortDescription: 'Full range of dental hand instruments for examination, restoration and surgical procedures.',        fullDescription: 'Complete range of dental hand instruments including examination sets, extraction forceps, elevators, scalers, mirrors, probes, and surgical instruments for all dental procedures.',          manufacturer: '', model: '', features: [], specifications: {}, certifications: [], notes: '' },

  /* ====================================================
     OPHTHALMOLOGY EQUIPMENT
  ==================================================== */
  {
    id: 1401,
    name:             'Auto Refractometer MG-9000',
    image:            'images/auto-refractometer-mg-9000.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Top-quality auto refractometer with 5.7" LCD, built-in thermal printer and 10 measured values storage for both eyes.',
    fullDescription:  'The MG-9000 is a high-quality auto refractometer providing precise measurement of sphere, cylinder, and axis for both eyes. Features a 5.7" LCD display, built-in thermal printer, and stores 10 measured values per eye.',
    manufacturer:     '',
    model:            'MG-9000',
    features: [
      'Auto fog chart for accurate measurement',
      '10 measured values stored for both eyes',
      'Built-in thermal printer',
      'RS-232 output for data transfer',
      '5-minute / 10-minute power save function',
    ],
    specifications: {
      'Sphere Range':        '-20D to +20D (Vd=12mm), 0.125D / 0.25D steps',
      'Cylinder Range':      '-8D to +8D, 0.125D / 0.25D steps',
      'Axis Angle':          '1°–180°, 1° steps',
      'PD Range':            '45–85 mm, 1 mm steps',
      'Vertex Distance':     '0 / 12 / 13.75 / 15 mm',
      'Min Pupil Diameter':  'Ø 2.0 mm',
      'Display':             '5.7" LCD (colour)',
      'Printer':             'Built-in thermal',
      'Power':               'AC 220V 50Hz or 110V 60Hz',
      'Dimensions':          '288(W) × 500(D) × 480(H) mm',
      'Weight':              '14 kg',
      'Output':              'RS-232',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1402,
    name:             'Slit Lamp — OPTICARE',
    image:            'images/slit-lamp-opticare.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Galilean slit lamp biomicroscope with 5-step magnification, 14 mm slit adjustability and German OSRAM halogen lamp.',
    fullDescription:  'The OPTICARE Slit Lamp features parallel Galilean optics with 12.5× eyepiece and 5 total magnification steps (6×, 10×, 16×, 25×, 40×). Compatible with iPhone and Samsung mobile adapters for image capture. Full range of slit width, height, and angle adjustments with multi-filter system.',
    manufacturer:     'OPTICARE',
    model:            '',
    features: [
      'iPhone / Samsung mobile adapter optional for image capture',
      'Parallel Galilean optics',
      '5-step total magnification: 6×, 10×, 16×, 25×, 40×',
      'Slit width: 0–14 mm continuously adjustable',
      'Slit height: 1–14 mm continuously adjustable',
      'Slit angle: 0°–180°',
      'Filters: heat absorption, grey, red-free (green), cobalt blue',
      'German OSRAM halogen tungsten lamp (LED optional)',
      'Fixation: red LED',
    ],
    specifications: {
      'Eyepiece':             '12.5×',
      'Magnification':        '6×, 10×, 16×, 25×, 40×',
      'Visual Field':         'Ø 37, 23, 14, 8.7, 5.7 mm',
      'Diopter Adjustment':   '+5D to -5D',
      'Aperture Diameter':    'Ø 14, 10, 5, 3, 2, 1, 0.2 mm',
      'Longitudinal Travel':  '90 mm',
      'Lateral Travel':       '100 mm',
      'Vertical Travel':      '30 mm',
      'Fine Base Movement':   '15 mm',
      'Input Voltage':        '110V/220V, 60/50 Hz',
      'Input Power':          '60 VA',
      'Lamp':                 '12V/50W halogen (LED optional)',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1403,
    name:             'Ophthalmic OCT Scanner OCT-500',
    image:            'images/ophthalmic-oct-scanner-oct-500.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Spectral-domain OCT with built-in PC, ≤6µm axial resolution and up to 36,000 A-scans/sec for posterior segment screening.',
    fullDescription:  'The OPTICARE OCT-500 is a spectral-domain ophthalmic OCT scanner tailored for rapid screening of fundus diseases in outpatient clinics. Built-in computer, easy installation, and professional analysis software. Everything is inside the compact body — no external computer needed.',
    manufacturer:     'OPTICARE',
    model:            'OCT-500',
    features: [
      'Compact design with built-in computer — no external PC required',
      'Data export via Ethernet or external hard drive',
      'Peripheral device support: keyboard, printer',
      'Easy installation — plug in and go',
      'Professional fundus disease analysis software',
    ],
    specifications: {
      'Methodology':            'Spectral domain OCT',
      'Axial Resolution':       '≤ 6 µm (in tissue)',
      'Transverse Resolution':  '≤ 20 µm (in tissue)',
      'Scan Depth':             '≥ 6 mm',
      'Scan Speed':             '≥ 24,000 A-scans/sec (up to 36,000)',
      'Scan Modes':             '30°, Raster, Circle',
      'Fundus Image':           'OCT en face',
      'Focus Adjustment':       '-150 to +150',
      'Min Pupil Diameter':     '≥ 3 mm',
      'OCT Light Source':       '840 nm SLD',
      'Optical Power':          '750 µW (at cornea)',
      'Operation':              '13.3" touch screen',
      'Power Supply':           '100–240V, 50/60 Hz',
      'Dimensions':             '497 × 395 × 490 mm (L×W×H)',
      'Weight':                 '34 kg (75 lbs)',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1404,
    name:             'Ophthalmic A/B Scan AB-1000',
    image:            'images/ophthalmic-a-b-scan-ab-1000.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Combined A/B scan unit with 12.1" touch screen for complete biometry and ocular imaging including IOL calculation.',
    fullDescription:  'The OPTICARE AB-1000 provides both A-scan biometry and B-scan ultrasonography. A-scan measures anterior chamber depth, lens thickness, axial length for IOL calculation. B-scan displays profile images of the eyeball for diagnosing cataract, vitreous disease, retinal detachment, intraocular tumors, and trauma.',
    manufacturer:     'OPTICARE',
    model:            'AB-1000',
    features: [
      '12.1" colour touch screen',
      'Advanced digital software with adjustable frozen/stored image parameters',
      'IOL calculation: SRK-T, SRX II, HOLLADAY, BINKHORST-II, HOFFER-Q, HAIGIS',
      'B-scanner electromagnetic drive — extends probe life',
      'B-scan video playback of 100 images',
      'A-scan: 10-point average for 0.05 mm accuracy',
    ],
    specifications: {
      'A-Scan Probe Freq':    '10 MHz',
      'A-Scan Mode':          'Contact',
      'A-Scan Range':         '>5 mm – 40 mm',
      'A-Scan Accuracy':      '≤ ±0.05 mm',
      'IOL Formulae':         'SRK-T, SRX II, HOLLADAY, BINKHORST-II, HOFFER-Q, HAIGIS',
      'A-Scan Gain':          '20–110 dB',
      'B-Scan Probe Freq':    '10 MHz',
      'B-Scan Depth':         '≥ 50 mm',
      'Axial Resolution':     '≤ 0.2 mm',
      'Lateral Resolution':   '≤ 0.3 mm',
      'B-Scan Gain':          '20–110 dB',
      'Review':               '100 images',
      'Size':                 '340 × 320 × 115 mm',
      'Weight':               '10 kg',
      'Power':                '100–240V, 50/60 Hz',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1405,
    name:             'Auto Lensometer D910 — OPTICARE',
    image:            'images/auto-lensometer-d910-opticare.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Auto lensometer with 7" TFT touch screen, Bluetooth, Wi-Fi and USB for measuring PD, PH, sphere, cylinder and prism.',
    fullDescription:  'The OPTICARE D910 Auto Lens Meter features a new capacitive touch panel with high resolution, simultaneous UV and green light wavelength measurement, and 4 data communication forms: Bluetooth, RS-232, USB, and Wi-Fi. Fine marking pens, lens holder with magnetic and stable sliding nosepiece.',
    manufacturer:     'OPTICARE',
    model:            'D910',
    features: [
      'Measurement of PD, PH, and PCL (Progressive Channel Length)',
      'New capacitive touch panel with high resolution',
      'Simultaneous UV and green light wavelength measurement',
      '4 data communication: Bluetooth, RS-232, USB, Wi-Fi',
      'Fine marking pens, lens holder, magnetic sliding nosepiece',
    ],
    specifications: {
      'Sphere':              '-25.00D to +25.00D',
      'Cylinder':            '0 to ±9.99D, 0.01/0.12/0.25D steps',
      'Axis':                '0°–180°, 1° step',
      'Prism Degree':        '0–15D, 0.01/0.12/0.25D steps',
      'ADD':                 '0 to ±9.99D',
      'PD':                  '40–90 mm, 0.5 mm steps',
      'Speed':               '0.1 s',
      'Display':             'TFT LCD 7.0", 640×480',
      'Printer':             'Thermal',
      'Dimension':           '180(L) × 255(W) × 455(H) mm',
      'Weight':              'Approx. 12 kg',
      'Power':               '100–240V, 50–60 Hz',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1406,
    name:             'Ophthalmic Visual Field Analyzer APS-6000',
    image:            'images/ophthalmic-visual-field-analyzer-aps-6000.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Traditional LED perimeter with 388 stimulus points, eye-position tracking and CCD eye monitoring.',
    fullDescription:  'The APS-6000 is a traditional perimeter using LED stimulation across 388 points (61 red, 327 yellow). Features automatic eye-position tracking with CCD camera, adjustable stimulation timing, and automatic blink alarm.',
    manufacturer:     '',
    model:            'APS-6000',
    features: [
      'LED stimulation source with yellow and red lights',
      '388 stimulus points (61 red, 327 yellow)',
      'CCD camera for direct eye-position tracking',
      'Automatic blink detection alarm',
      'Adjustable chin rest: ±80 mm vertical, ±115 mm lateral',
    ],
    specifications: {
      'Radius of Stimulator':    '300 mm ± 5 mm',
      'Stimulus Source':         'LED',
      'Stimulus Lights':         'Yellow and red',
      'Stimulus Strength':       '0 nt to 318,310 nt (0–1000 asb), 14 levels ±10%',
      'Background Brightness':   '4 asb ± 10%',
      'Light Spot Diameter':     '2 mm ± 0.25 mm',
      'Stimulus Points':         '388 (Red: 61, Yellow: 327)',
      'Stimulus Time':           '0.2–2.0 s (programmable ±5%)',
      'Stimulus Interval':       '0.5–2.0 s (programmable ±5%)',
      'Eye Tracking':            'White-black CCD, direct tracking',
      'Chin Rest':               'Up-down 80 mm; Right-left 115 mm',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1407,
    name:             'Auto Keratometer OPT-V018-N',
    image:            'images/auto-keratometer-opt-v018-n.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Combined auto refractometer and keratometer measuring sphere, cylinder, axis, and corneal curvature with Ø2.0 mm minimum pupil.',
    fullDescription:  'The OPTICARE OPT-V018-N combines auto refractometry and keratometry in one device. Measures sphere, cylinder, axis, pupillary distance, and corneal radius of curvature and power in a single examination.',
    manufacturer:     'OPTICARE',
    model:            'OPT-V018-N',
    features: [],
    specifications: {
      'Sphere':                  '-20D to +20D (VD=12), 0.125D steps',
      'Cylinder':                '-8D to +8D, 0.125D steps',
      'Axis':                    '0°–180°, 1° step',
      'PD':                      '45–88 mm, 1 mm steps',
      'Vertex Distance':         '0 mm / 12 mm / 13.75 mm',
      'Min Pupil Size':          'Ø 2.0 mm',
      'Keratometry Range':       '5.0–10 mm radius of curvature (0.01 mm increment)',
      'Corneal Power':           '33.75–67.50D (n=1.337)',
    },
    certifications: [],
    notes: '',
  },
  {
    id: 1408,
    name:             'Green Laser Argon Photo Coagulator — APPASSAMI',
    image:            'images/green-laser-argon-photo-coagulator-appassami.webp' || 'images/main.webp',
    category:         'Ophthalmology Equipment',
    shortDescription: 'Solid-state green laser photocoagulator for retinal disorders with touch screen, foot switch and 10,000-hour lifetime.',
    fullDescription:  'The APPASSAMI AMOGH PLUS is a diode-pumped, frequency-doubled, true CW solid-state green laser photocoagulator for retinal disorders. Lightweight and portable with LCD touch screen display, LED-illuminated fiber port, and metal-shielded laser delivery cable.',
    manufacturer:     'APPASSAMI',
    model:            'AMOGH PLUS',
    features: [
      'Patented solid-state technology for extended life and efficiency',
      'True continuous wave (CW) output',
      'Touch screen interface with LCD',
      'Lightweight and portable',
      'Foot switch with LED indicator',
      'LED-illuminated fiber connecting port',
      'Metal-shielded laser delivery fiber optic cable',
    ],
    specifications: {
      'Treatment Laser':      'Diode pumped, frequency doubled, true CW solid state',
      'Laser Module Capacity': '3 Watts',
      'Aiming Beam':          '635 nm semiconductor diode, 0–1 mW (variable)',
      'Power Adjustment':     '10–1500 mW (variable)',
      'Power Supply':         '110V/230V AC, 50/60 Hz, 2A, single phase',
      'Cooling':              'Thermoelectric (Peltier) and air cooled',
      'Operation Mode':       'Repeat pulse, single pulse, continuous',
      'Lifetime':             '10,000 working hours',
      'Dimensions':           '290(H) × 175(W) × 365(D) mm',
      'Weight':               '8 kg',
      'Power Consumption':    '100 Watts',
      'Pulse Duration':       '0.01–10 sec',
      'Pulse Interval':       '0.01–10 sec',
      'Laser Safety Class':   'Class IV',
    },
    certifications: [],
    notes: '',
  },
];

/* ─── STATE ────────────────────────────────────────────────────── */
let currentView     = 'home';      // 'home' | 'category'
let currentCategory = null;        // category name string
let catSearchQuery  = '';

/* ─── DOM REFS ─────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);

/* ─── COUNT HELPERS ─────────────────────────────────────────────── */
function countForCategory(catName) {
  return products.filter(p => p.category === catName).length;
}

/* ─── ESCAPE HTML ──────────────────────────────────────────────── */
function esc(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ════════════════════════════════════════════════════════════════
   VIEW SWITCHING
════════════════════════════════════════════════════════════════ */
function showView(view) {
  const home = $('viewHome');
  const cat  = $('viewCategory');
  const foot = $('siteFooter');
  if (!home || !cat) return;

  if (view === 'home') {
    home.classList.remove('view-hidden');
    cat.classList.add('view-hidden');
    currentView = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    cat.classList.remove('view-hidden');
    home.classList.add('view-hidden');
    currentView = 'category';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

/* ════════════════════════════════════════════════════════════════
   RENDER CATEGORY GRID (Home page)
════════════════════════════════════════════════════════════════ */
function renderCategoryGrid() {
  const grid = $('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = categories.map(cat => {
    const count = countForCategory(cat.name);
    const img   = cat.image || 'images/main.webp';
    return `
      <article class="cat-card scroll-reveal" data-cat="${esc(cat.name)}" tabindex="0" role="button" aria-label="View products in ${esc(cat.name)}">
        <div class="cat-card-img-wrap">
          <img src="${img}" alt="${esc(cat.name)}" loading="lazy" width="400" height="220"/>
          <span class="cat-count-badge">${count} Product${count !== 1 ? 's' : ''}</span>
        </div>
        <div class="cat-card-body">
          <h3 class="cat-card-name">${esc(cat.name)}</h3>
          <p class="cat-card-desc">${esc(cat.description)}</p>
        </div>
        <div class="cat-card-footer">
          <button class="btn btn-primary cat-view-btn" data-cat="${esc(cat.name)}">
            View Products
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </article>`;
  }).join('');

  // Bind click events
  grid.querySelectorAll('.cat-view-btn, .cat-card').forEach(el => {
    el.addEventListener('click', e => {
      const catName = e.currentTarget.dataset.cat ||
                      e.currentTarget.closest('[data-cat]')?.dataset.cat;
      if (catName) openCategoryView(catName);
    });
    if (el.classList.contains('cat-card')) {
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const catName = el.dataset.cat;
          if (catName) openCategoryView(catName);
        }
      });
    }
  });

  initScrollReveal();
}

/* ════════════════════════════════════════════════════════════════
   CATEGORY VIEW
════════════════════════════════════════════════════════════════ */
function openCategoryView(catName) {
  currentCategory = catName;
  catSearchQuery  = '';
  const input = $('catSearchInput');
  if (input) { input.value = ''; }
  const clear = $('catSearchClear');
  if (clear) { clear.hidden = true; }

  renderCategoryBanner(catName);
  renderBreadcrumb(catName);
  renderCategoryProducts(catName);
  showView('category');
}

function renderCategoryBanner(catName) {
  const banner = $('catViewBanner');
  if (!banner) return;
  const cat   = categories.find(c => c.name === catName);
  const count = countForCategory(catName);
  banner.innerHTML = `
    <div class="cat-banner-inner">
      <span class="cat-banner-name">${esc(catName)}</span>
      <p class="cat-banner-desc">${esc(cat ? cat.description : '')}</p>
      <span class="cat-banner-count">
        <span class="cat-banner-count-dot" aria-hidden="true"></span>
        ${count} Product${count !== 1 ? 's' : ''} Available
      </span>
    </div>`;
}

function renderBreadcrumb(catName) {
  const bc = $('catBreadcrumb');
  if (!bc) return;
  bc.innerHTML = `
    <a href="#" class="breadcrumb-home-link">Home</a>
    <span class="breadcrumb-sep" aria-hidden="true">›</span>
    <a href="#" class="breadcrumb-products-link">Products</a>
    <span class="breadcrumb-sep" aria-hidden="true">›</span>
    <span class="breadcrumb-current" aria-current="page">${esc(catName)}</span>`;

  bc.querySelector('.breadcrumb-home-link')?.addEventListener('click', e => {
    e.preventDefault(); showView('home');
    setTimeout(() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), 50);
  });
  bc.querySelector('.breadcrumb-products-link')?.addEventListener('click', e => {
    e.preventDefault(); showView('home');
    setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 50);
  });
}

function getFilteredCatProducts() {
  const q = catSearchQuery.toLowerCase().trim();
  return products.filter(p => {
    if (p.category !== currentCategory) return false;
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      (p.shortDescription || '').toLowerCase().includes(q) ||
      (p.manufacturer || '').toLowerCase().includes(q) ||
      (p.model || '').toLowerCase().includes(q)
    );
  });
}

function renderCategoryProducts() {
  const grid    = $('catProductsGrid');
  const noRes   = $('catNoResults');
  const countEl = $('catProductCount');
  if (!grid) return;

  const filtered = getFilteredCatProducts();
  const total    = products.filter(p => p.category === currentCategory).length;

  if (countEl) {
    countEl.innerHTML = filtered.length === total
      ? `Showing <strong>${total}</strong> product${total !== 1 ? 's' : ''}`
      : `Showing <strong>${filtered.length}</strong> of <strong>${total}</strong> product${total !== 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    grid.style.display = 'none';
    noRes.hidden = false;
    return;
  }

  grid.style.display = '';
  noRes.hidden = true;

  const placeholderImg = 'images/main.webp';

  grid.innerHTML = filtered.map((p, i) => {
    const hasMfr   = p.manufacturer && p.manufacturer.trim();
    const hasModel = p.model && p.model.trim();
    return `
      <article class="product-card" style="animation-delay:${i * 50}ms">
        <div class="prod-card-img-wrap">
          <img src="${p.image || placeholderImg}" alt="${esc(p.name)}" loading="lazy" width="400" height="250"/>
        </div>
        <div class="prod-card-right">
          <div class="prod-card-body">
            <h3 class="prod-card-name">${esc(p.name)}</h3>
            <p class="prod-card-desc">${esc(p.shortDescription)}</p>
            ${hasMfr || hasModel ? `
            <div class="prod-card-meta">
              ${hasMfr   ? `<div class="prod-card-meta-row"><span class="prod-card-meta-label">Manufacturer</span><span class="prod-card-meta-value">${esc(p.manufacturer)}</span></div>` : ''}
              ${hasModel ? `<div class="prod-card-meta-row"><span class="prod-card-meta-label">Model</span><span class="prod-card-meta-value">${esc(p.model)}</span></div>` : ''}
            </div>` : ''}
          </div>
          <div class="prod-card-footer">
            <button class="btn btn-outline btn-sm" data-product-id="${p.id}" aria-label="More info about ${esc(p.name)}">More Info</button>
            <a href="${waLink(p.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" aria-label="WhatsApp enquiry for ${esc(p.name)}">
              <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true">
                <path d="M8 0C3.582 0 0 3.582 0 8c0 1.408.369 2.728 1.009 3.872L0 16l4.24-.995A7.96 7.96 0 008 16c4.418 0 8-3.582 8-8s-3.582-8-8-8zm4.136 11.336c-.176.498-1.032.952-1.416.978-.384.032-.392.28-2.48-.584C6.16 10.872 4.952 8.616 4.856 8.472c-.096-.136-.792-1.104-.76-2.08.032-.976.536-1.44.728-1.64.192-.2.416-.248.56-.248.144 0 .28.001.4.007.128.007.304-.048.472.376.176.44.6 1.504.656 1.616.056.112.088.24.016.384-.072.144-.104.232-.208.36-.104.128-.216.288-.312.384-.104.104-.208.216-.088.424.12.208.544.896 1.168 1.448.792.696 1.472.936 1.68 1.04.208.104.328.088.448-.056.12-.144.512-.6.648-.808.136-.208.272-.168.456-.104.184.064 1.176.584 1.376.696.2.112.336.16.384.248.048.088.048.504-.128 1z"/>
              </svg>
              Enquire
            </a>
          </div>
        </div>
      </article>`;
  }).join('');

  /*
   * Event delegation on the grid container — survives innerHTML re-renders.
   * One listener on the parent catches ALL current and future button clicks.
   */
  grid._delegated = grid._delegated || (() => {
    grid.addEventListener('click', e => {
      const btn = e.target.closest('[data-product-id]');
      if (btn) openModal(Number(btn.dataset.productId));
    });
    return true;
  })();
}

/* ════════════════════════════════════════════════════════════════
   MODAL  — Fixed: starts hidden, only opens on user action
════════════════════════════════════════════════════════════════ */
function openModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  const overlay = $('modalOverlay');
  const body    = $('modalBody');
  if (!overlay || !body) return;

  const img     = p.image || 'images/main.webp';
  const hasMfr  = p.manufacturer && p.manufacturer.trim();
  const hasMdl  = p.model && p.model.trim();
  const hasFull = p.fullDescription && p.fullDescription.trim();
  const hasSpec = p.specifications && Object.keys(p.specifications).length > 0;
  const hasFeat = p.features && p.features.length > 0;
  const hasCert = p.certifications && p.certifications.length > 0;
  const hasNote = p.notes && p.notes.trim();

  const specRows = hasSpec
    ? Object.entries(p.specifications).map(([k, v]) =>
        `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')
    : '';

  const featItems = hasFeat
    ? p.features.map(f =>
        `<div class="modal-feature-item"><span class="modal-feature-dot" aria-hidden="true"></span>${esc(f)}</div>`).join('')
    : '';

  const certBadges = hasCert
    ? p.certifications.map(c => `<span class="modal-cert-badge">${esc(c)}</span>`).join('')
    : '';

  body.innerHTML = `
    <img class="modal-img" src="${img}" alt="${esc(p.name)}" width="740" height="370"/>
    <h2 class="modal-title" id="modalTitle">${esc(p.name)}</h2>

    ${(hasMfr || hasMdl || p.category) ? `
    <div class="modal-meta-row">
      ${hasMfr  ? `<div class="modal-meta-item"><span class="modal-meta-label">Manufacturer</span><span class="modal-meta-value">${esc(p.manufacturer)}</span></div>` : ''}
      ${hasMdl  ? `<div class="modal-meta-item"><span class="modal-meta-label">Model</span><span class="modal-meta-value">${esc(p.model)}</span></div>` : ''}
      ${p.category ? `<div class="modal-meta-item"><span class="modal-meta-label">Category</span><span class="modal-meta-value">${esc(p.category)}</span></div>` : ''}
    </div>` : ''}

    ${hasFull ? `<p class="modal-desc">${esc(p.fullDescription)}</p>` : ''}

    ${hasFeat ? `
    <h3 class="modal-section-title">Key Features</h3>
    <div class="modal-features">${featItems}</div>` : ''}

    ${hasSpec ? `
    <h3 class="modal-section-title">Technical Specifications</h3>
    <table class="specs-table" aria-label="Specifications for ${esc(p.name)}">
      <tbody>${specRows}</tbody>
    </table>` : ''}

    ${hasCert ? `
    <h3 class="modal-section-title">Certifications</h3>
    <div class="modal-certs">${certBadges}</div>` : ''}

    ${hasNote ? `
    <div class="modal-notes">${esc(p.notes)}</div>` : ''}

    <div class="modal-footer">
      <a href="${waLink(p.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M10 0C4.477 0 0 4.477 0 10c0 1.76.46 3.41 1.26 4.84L0 20l5.3-1.24A9.95 9.95 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.17 14.17c-.22.62-1.29 1.19-1.77 1.22-.48.04-.49.35-3.1-.73-2.6-1.07-4.19-3.77-4.31-3.94-.13-.17-.99-1.38-.95-2.6.04-1.22.67-1.8.91-2.05.24-.25.52-.31.7-.31.18 0 .35.001.5.008.16.008.38-.06.59.47.22.55.75 1.88.82 2.02.07.14.11.3.02.48-.09.18-.13.29-.26.45-.13.16-.27.36-.39.48-.13.13-.26.27-.11.53.15.26.68 1.12 1.46 1.81.99.87 1.84 1.17 2.1 1.3.26.13.41.11.56-.07.15-.18.64-.75.81-1.01.17-.26.34-.21.57-.13.23.08 1.47.73 1.72.87.25.14.42.2.48.31.06.11.06.63-.16 1.25z"/>
        </svg>
        Enquire on WhatsApp
      </a>
      <button class="btn btn-outline" id="modalCloseBtn">Close</button>
    </div>`;

  /* Show — class only. CSS visibility/pointer-events handle the rest */
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  body.focus();

  /* Close button rendered inside modal body */
  $('modalCloseBtn')?.addEventListener('click', closeModal);
}

function closeModal() {
  const overlay = $('modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    const body = $('modalBody');
    if (body) body.innerHTML = '';
  }, 260);
}

/* ════════════════════════════════════════════════════════════════
   FOOTER CATEGORY LINKS
════════════════════════════════════════════════════════════════ */
function renderFooterCategories() {
  const list = $('footerCatLinks');
  if (!list) return;
  // Show first 8 categories in footer
  list.innerHTML = categories.slice(0, 8).map(cat =>
    `<li><a href="#" class="footer-cat-link" data-cat="${esc(cat.name)}">${esc(cat.name)}</a></li>`
  ).join('');

  list.querySelectorAll('.footer-cat-link').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      openCategoryView(a.dataset.cat);
    });
  });
}

/* ════════════════════════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.scroll-reveal:not(.revealed)');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('revealed'));
  }
}

/* ════════════════════════════════════════════════════════════════
   NAVBAR
════════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = $('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });
}

/* ════════════════════════════════════════════════════════════════
   MOBILE MENU
════════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const btn    = $('hamburger');
  const drawer = $('mobileNavDrawer');
  if (!btn || !drawer) return;

  /* Remove the HTML hidden attr so CSS class controls display */
  drawer.removeAttribute('hidden');

  const close = () => {
    drawer.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = drawer.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close when any link inside the drawer is clicked */
  drawer.querySelectorAll('.nav-link, .btn').forEach(el => {
    el.addEventListener('click', close);
  });

  /* Close when clicking anywhere outside the navbar */
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !drawer.contains(e.target)) close();
  });
}

/* ════════════════════════════════════════════════════════════════
   CATEGORY SEARCH
════════════════════════════════════════════════════════════════ */
function initCatSearch() {
  const input = $('catSearchInput');
  const clear = $('catSearchClear');
  const reset = $('catResetSearch');

  input?.addEventListener('input', () => {
    catSearchQuery = input.value;
    clear.hidden   = !catSearchQuery;
    renderCategoryProducts();
  });

  clear?.addEventListener('click', () => {
    input.value    = '';
    catSearchQuery = '';
    clear.hidden   = true;
    input.focus();
    renderCategoryProducts();
  });

  reset?.addEventListener('click', () => {
    input.value    = '';
    catSearchQuery = '';
    if (clear) clear.hidden = true;
    renderCategoryProducts();
  });
}

/* ════════════════════════════════════════════════════════════════
   MODAL CLOSE EVENTS
════════════════════════════════════════════════════════════════ */
function initModalEvents() {
  /* Header X button */
  $('modalClose')?.addEventListener('click', closeModal);

  /* Click on backdrop (outside modal box) */
  $('modalOverlay')?.addEventListener('click', e => {
    if (e.target === $('modalOverlay')) closeModal();
  });

  /* Escape key — only when modal is open */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $('modalOverlay')?.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ════════════════════════════════════════════════════════════════
   NAV LINKS — smooth scroll + SPA routing
════════════════════════════════════════════════════════════════ */
function initNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      // If on category view and navigating to a home section, switch view first
      if (currentView === 'category') {
        showView('home');
        setTimeout(() => {
          const navH = $('navbar')?.offsetHeight || 0;
          const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      } else {
        const navH = $('navbar')?.offsetHeight || 0;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Logo and footer logo go home
  ['navLogoLink', 'footerLogoLink'].forEach(id => {
    $(id)?.addEventListener('click', e => {
      e.preventDefault();
      if (currentView === 'category') showView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Hero CTA "Explore Products"
  $('heroExploreCta')?.addEventListener('click', e => {
    e.preventDefault();
    const target = $('products');
    if (!target) return;
    const navH = $('navbar')?.offsetHeight || 0;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

/* ════════════════════════════════════════════════════════════════
   BACK TO TOP
════════════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = $('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => { btn.hidden = window.scrollY < 400; }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ════════════════════════════════════════════════════════════════
   FOOTER YEAR
════════════════════════════════════════════════════════════════ */
function initFooter() {
  const el = $('footerYear');
  if (el) el.textContent = '2025';
}

/* ════════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* Guarantee modal is closed on load — class only, no hidden attr */
  const overlay = $('modalOverlay');
  if (overlay) overlay.classList.remove('open');

  renderCategoryGrid();
  renderFooterCategories();
  initNavbar();
  initMobileMenu();
  initNavLinks();
  initCatSearch();
  initModalEvents();
  initBackToTop();
  initFooter();
  initScrollReveal();
});

