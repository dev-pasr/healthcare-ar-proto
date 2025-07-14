export const denialSeed = [
  {
    id: 1,
    carc: 'CARC96',
    carcDesc: 'Non-covered charge(s).',
    rarc: 'N130',
    rarcDesc: 'Consult plan benefit documentation.',
    cause: 'Service excluded from plan',
    resolution: 'Appeal with documentation or bill secondary payer'
  },
  {
    id: 2,
    carc: 'CARC16',
    carcDesc: 'Missing required information.',
    rarc: 'MA61',
    rarcDesc: 'Diagnosis inconsistent with procedure.',
    cause: 'Diagnosis doesn’t support CPT service',
    resolution: 'Correct ICD-10 coding and resubmit'
  },
  {
    id: 3,
    carc: 'CARC109',
    carcDesc: 'Service not payable per guidelines.',
    rarc: 'N330',
    rarcDesc: 'Frequency exceeds coverage limit.',
    cause: 'Lab billed more than once within allowed period',
    resolution: 'Submit medical necessity or appeal with override'
  },
  {
    id: 4,
    carc: 'CARC111',
    carcDesc: 'Not covered unless preventive.',
    rarc: 'N19',
    rarcDesc: 'Benefit not covered.',
    cause: 'Preventive visit outside eligibility window',
    resolution: 'Check preventive schedule or request override'
  },
  {
    id: 5,
    carc: 'CARC119',
    carcDesc: 'Benefit maximum reached.',
    rarc: 'N699',
    rarcDesc: 'Service exceeds frequency limits.',
    cause: 'Cardiac stress test repeated too soon',
    resolution: 'Submit physician’s override justification'
  },
  {
    id: 6,
    carc: 'CARC50',
    carcDesc: 'Non-covered services.',
    rarc: 'M86',
    rarcDesc: 'Missing referral or prior authorization.',
    cause: 'Behavioral health visit lacked pre-auth',
    resolution: 'Attach retro authorization or initiate appeal'
  },
  {
    id: 7,
    carc: 'CARC54',
    carcDesc: 'Multiple physicians bill separately.',
    rarc: 'N699',
    rarcDesc: 'Unbundled services.',
    cause: 'Therapy consult billed without compliance bundling',
    resolution: 'Adjust coding or attach bundling rationale'
  },
  {
    id: 8,
    carc: 'CARC97',
    carcDesc: 'Included in allowance for another service.',
    rarc: 'N390',
    rarcDesc: 'Bundled adjustment.',
    cause: 'Evaluation bundled into preventive service',
    resolution: 'Resubmit with modifier or separate claim'
  },
  {
    id: 9,
    carc: 'CARC45',
    carcDesc: 'Charge exceeds fee schedule.',
    rarc: 'N365',
    rarcDesc: 'Service not covered.',
    cause: 'Procedure billed above allowed amount',
    resolution: 'Adjust to fee schedule and resubmit'
  }
];