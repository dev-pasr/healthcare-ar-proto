export const claims = [
  {
  id: 'CLM-4001',
  mbi: '2M00X33N55Q',
  patientName: 'David Walker',
  dateOfService: '2025-07-02',
  claimReceivedDate: '2025-07-03',
  remittanceDate: '2025-07-07',
  payer: 'Medicare Part B',
  providerNPI: '1073612489',
  claimType: 'Professional',
  processingStatus: 'Finalized',
  paymentMethod: 'ACH',
  paymentTraceNumber: '20250707AB123',
  amountBilled: 660.00,
  amountPaid: 420.00,
  balanceDue: 240.00,
  adjustmentGroupCodes: ['CO', 'PR'],
  remarkCodes: ['M15'], // e.g. "Missing/Incomplete/Invalid credentialing data"
  status: 'Underpaid',
  lineItems: [
    {
      cpt: '99213',
      diagnosis: 'E11.9',
      charge: 300,
      denial: {
        carc: 'CARC97',
        carcDesc: 'Payment is included in the allowance for another service/procedure.',
        rarc: 'N390',
        rarcDesc: 'This payment is adjusted due to a component of a bundled service.',
        date: '2025-07-07',
        cause: 'Level 3 office visit bundled with lab services',
        resolution: 'Submit corrected claim or evaluate bundling rationale'
      }
    },
    {
      cpt: '82947',
      diagnosis: 'R73.9',
      charge: 360,
      denial: null
    }
  ]
},
  {
    id: 'CLM-4010',
    mbi: '1X92A74N56L',
    patientName: 'Rachel Parker',
    dateOfService: '2025-07-10',
    claimReceivedDate: '2025-07-11',
    remittanceDate: '2025-07-14',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250714RP101',
    amountBilled: 720.0,
    amountPaid: 490.0,
    balanceDue: 230.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['N130'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '80053',
        diagnosis: 'R73.9',
        charge: 270,
        denial: {
          carc: 'CARC109',
          carcDesc: 'Service not payable per guidelines.',
          rarc: 'N330',
          rarcDesc: 'Frequency exceeded.',
          date: '2025-07-14',
          cause: 'CMP panel exceeded allowable frequency',
          resolution: 'Appeal with medical necessity rationale'
        }
      },
      {
        cpt: '99214',
        diagnosis: 'E11.9',
        charge: 450,
        denial: null
      }
    ]
  },
  {
    id: 'CLM-4011',
    mbi: '7F60T22V13B',
    patientName: 'Mark Sullivan',
    dateOfService: '2025-07-09',
    claimReceivedDate: '2025-07-10',
    remittanceDate: '2025-07-13',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'Check',
    paymentTraceNumber: '20250713MS473',
    amountBilled: 385.0,
    amountPaid: 190.0,
    balanceDue: 195.0,
    adjustmentGroupCodes: ['PR'],
    remarkCodes: ['M15'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '93000',
        diagnosis: 'I10',
        charge: 180,
        denial: null
      },
      {
        cpt: '36415',
        diagnosis: 'Z01.89',
        charge: 205,
        denial: {
          carc: 'CARC96',
          carcDesc: 'Non-covered charge(s).',
          rarc: 'N130',
          rarcDesc: 'Consult plan documentation.',
          date: '2025-07-13',
          cause: 'Routine venipuncture not separately payable',
          resolution: 'Confirm inclusion within bundled service'
        }
      }
    ]
  },
  {
    id: 'CLM-4012',
    mbi: '6K87Y90C48J',
    patientName: 'Ashley Coleman',
    dateOfService: '2025-07-08',
    claimReceivedDate: '2025-07-09',
    remittanceDate: '2025-07-12',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Rejected',
    paymentMethod: null,
    paymentTraceNumber: null,
    amountBilled: 530.0,
    amountPaid: 0.0,
    balanceDue: 530.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['N522'],
    status: 'Denied',
    lineItems: [
      {
        cpt: '92507',
        diagnosis: 'F80.2',
        charge: 530,
        denial: {
          carc: 'CARC16',
          carcDesc: 'Claim/service lacks required information.',
          rarc: 'M27',
          rarcDesc: 'Missing referring provider.',
          date: '2025-07-12',
          cause: 'Referral provider NPI not submitted',
          resolution: 'Resubmit claim with valid referring NPI'
        }
      }
    ]
  },
  {
    id: 'CLM-4013',
    mbi: '3P33D66R72Q',
    patientName: 'Daniel Brooks',
    dateOfService: '2025-07-07',
    claimReceivedDate: '2025-07-08',
    remittanceDate: '2025-07-11',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250711DB555',
    amountBilled: 495.0,
    amountPaid: 295.0,
    balanceDue: 200.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['MA130'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: 'G0439',
        diagnosis: 'Z00.00',
        charge: 495,
        denial: {
          carc: 'CARC16',
          carcDesc: 'Missing required information.',
          rarc: 'MA130',
          rarcDesc: 'Missing initial AWV linkage.',
          date: '2025-07-11',
          cause: 'Subsequent wellness visit billed without prior visit record',
          resolution: 'Submit corrected claim with G0438 reference'
        }
      }
    ]
  },
  {
    id: 'CLM-4014',
    mbi: '5J24B15M18H',
    patientName: 'Laura Jenkins',
    dateOfService: '2025-07-06',
    claimReceivedDate: '2025-07-07',
    remittanceDate: '2025-07-10',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Corrected',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250710LJ222',
    amountBilled: 675.0,
    amountPaid: 350.0,
    balanceDue: 325.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['N699'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '99215',
        diagnosis: 'M54.5',
        charge: 675,
        denial: {
          carc: 'CARC54',
          carcDesc: 'Multiple physicians bill separately.',
          rarc: 'N699',
          rarcDesc: 'Unbundled services.',
          date: '2025-07-10',
          cause: 'Consultation billed in conjunction with bundled therapy',
          resolution: 'Adjust claim based on CPT bundling rules'
        }
      }
    ]
  },
  {
    id: 'CLM-4015',
    mbi: '8T15E72L89N',
    patientName: 'James Ray',
    dateOfService: '2025-07-05',
    claimReceivedDate: '2025-07-06',
    remittanceDate: '2025-07-09',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250709JR312',
    amountBilled: 580.0,
    amountPaid: 380.0,
    balanceDue: 200.0,
    adjustmentGroupCodes: ['PR'],
    remarkCodes: ['N19'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '99396',
        diagnosis: 'Z00.00',
        charge: 580,
        denial: {
          carc: 'CARC111',
          carcDesc: 'Preventive service criteria not met.',
          rarc: 'N19',
          rarcDesc: 'Benefit not covered.',
          date: '2025-07-09',
          cause: 'Preventive service billed outside recommended interval',
          resolution: 'Review frequency rules and resubmit with override'
        }
      }
    ]
  },
   {
    id: 'CLM-5001',
    mbi: '2T00Y55A12Z',
    patientName: 'Jonathan Davis',
    dateOfService: '2025-07-02',
    claimReceivedDate: '2025-07-03',
    remittanceDate: '2025-07-07',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250707JD001',
    amountBilled: 690.0,
    amountPaid: 440.0,
    balanceDue: 250.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['N130'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '99214',
        diagnosis: 'E11.9',
        charge: 330,
        denial: null
      },
      {
        cpt: '80053',
        diagnosis: 'R73.9',
        charge: 360,
        denial: {
          carc: 'CARC109',
          carcDesc: 'Service not payable per guidelines.',
          rarc: 'N330',
          rarcDesc: 'Frequency exceeds coverage limits.',
          date: '2025-07-07',
          cause: 'Comprehensive metabolic panel exceeded monthly limit',
          resolution: 'Submit medical necessity; request override'
        }
      }
    ]
  },
  {
    id: 'CLM-5002',
    mbi: '4F88K90D44N',
    patientName: 'Emily Sanders',
    dateOfService: '2025-07-01',
    claimReceivedDate: '2025-07-02',
    remittanceDate: '2025-07-06',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Rejected',
    paymentMethod: null,
    paymentTraceNumber: null,
    amountBilled: 510.0,
    amountPaid: 0.0,
    balanceDue: 510.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['MA61'],
    status: 'Denied',
    lineItems: [
      {
        cpt: '93000',
        diagnosis: 'I48.91',
        charge: 280,
        denial: {
          carc: 'CARC16',
          carcDesc: 'Missing required information.',
          rarc: 'MA61',
          rarcDesc: 'Primary diagnosis inconsistent with procedure.',
          date: '2025-07-06',
          cause: 'Diagnosis incompatible with billed ECG',
          resolution: 'Resubmit with corrected diagnosis ICD-10 code'
        }
      },
      {
        cpt: '99213',
        diagnosis: 'J01.90',
        charge: 230,
        denial: null
      }
    ]
  },
  {
    id: 'CLM-5003',
    mbi: '7R23E19L73Q',
    patientName: 'Michael Foster',
    dateOfService: '2025-07-04',
    claimReceivedDate: '2025-07-05',
    remittanceDate: '2025-07-09',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'Check',
    paymentTraceNumber: '20250709MF003',
    amountBilled: 740.0,
    amountPaid: 560.0,
    balanceDue: 180.0,
    adjustmentGroupCodes: ['PR'],
    remarkCodes: ['N19'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '99396',
        diagnosis: 'Z00.00',
        charge: 360,
        denial: {
          carc: 'CARC111',
          carcDesc: 'Not covered unless preventive.',
          rarc: 'N19',
          rarcDesc: 'Benefit not covered under Medicare.',
          date: '2025-07-09',
          cause: 'Patient not eligible for wellness visit this calendar year',
          resolution: 'Confirm eligibility or request override based on need'
        }
      },
      {
        cpt: '80061',
        diagnosis: 'E78.5',
        charge: 380,
        denial: null
      }
    ]
  },
  {
    id: 'CLM-5004',
    mbi: '9M33T87X25B',
    patientName: 'Jessica Lee',
    dateOfService: '2025-07-05',
    claimReceivedDate: '2025-07-06',
    remittanceDate: '2025-07-10',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Corrected',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250710JL004',
    amountBilled: 495.0,
    amountPaid: 250.0,
    balanceDue: 245.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['MA130'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: 'G0439',
        diagnosis: 'Z00.00',
        charge: 495,
        denial: {
          carc: 'CARC16',
          carcDesc: 'Missing/invalid required info.',
          rarc: 'MA130',
          rarcDesc: 'Claim missing reference to prior wellness visit.',
          date: '2025-07-10',
          cause: 'No linked G0438 for initial AWV',
          resolution: 'Resubmit claim referencing prior AWV date'
        }
      }
    ]
  },
  {
    id: 'CLM-5005',
    mbi: '6L10C44P81Z',
    patientName: 'Andrew Murphy',
    dateOfService: '2025-07-06',
    claimReceivedDate: '2025-07-07',
    remittanceDate: '2025-07-11',
    payer: 'Medicare Part B',
    providerNPI: '1073612489',
    claimType: 'Professional',
    processingStatus: 'Finalized',
    paymentMethod: 'ACH',
    paymentTraceNumber: '20250711AM005',
    amountBilled: 620.0,
    amountPaid: 370.0,
    balanceDue: 250.0,
    adjustmentGroupCodes: ['CO'],
    remarkCodes: ['N699'],
    status: 'Underpaid',
    lineItems: [
      {
        cpt: '99214',
        diagnosis: 'I10',
        charge: 310,
        denial: null
      },
      {
        cpt: '93015',
        diagnosis: 'I48.91',
        charge: 310,
        denial: {
          carc: 'CARC119',
          carcDesc: 'Benefit maximum reached.',
          rarc: 'N699',
          rarcDesc: 'Service exceeds frequency limits.',
          date: '2025-07-11',
          cause: 'Cardiac stress test repeated within 30-day interval',
          resolution: 'Submit frequency override with physician justification'
        }
      }
    ]
  }
];