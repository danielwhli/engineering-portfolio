// Edit the portfolio here, then run: node build.mjs
// Only add claims, results, dates, and links that Daniel has verified.
export const profile = {
  name: 'Daniel Li',
  discipline: 'Electrical & Computer Engineering',
  university: 'The University of Texas at Austin',
  introduction: 'I’m Daniel, an Electrical and Computer Engineering student at UT Austin. My projects connect mechanical design, fabrication, and embedded systems through robotics.',
  about: 'From an Onshape assembly to a CNC toolpath or an Arduino encoder, I’m interested in how individual parts come together as an engineering system. This portfolio brings together my work in FRC mechanisms, machining, an electric vehicle, and engineering design training.',
  // Optional. Add verified destinations to display contact links in the footer.
  email: '',
  github: '',
  linkedin: '',
  resume: { path: 'assets/daniel-li-resume.pdf', label: 'Resume draft · PDF', draft: true },
};

export const skills = [
  { number: '01', title: 'Mechanical design', description: 'Mechanisms and assemblies for robotics.', tools: ['Onshape', 'FRC mechanisms', 'Reference-based design'] },
  { number: '02', title: 'Manufacturing', description: 'Connecting digital geometry to physical parts.', tools: ['Fusion 360 CAM', 'OMIO X8 router', 'Toolpaths & setup', 'CNC operation'] },
  { number: '03', title: 'Embedded systems', description: 'Working at the intersection of hardware and code.', tools: ['Arduino', 'Wheel encoders', 'Electric vehicle'] },
  { number: '04', title: 'Engineering education', description: 'Making engineering design approachable for new members.', tools: ['Design training', '7–8 week program', 'Robotics onboarding'] },
];

// Optional project cover: set coverImage to a filename in dist/assets/ and describe it in coverAlt.
export const projects = [
  {
    coverImage: '', coverAlt: '',
    slug: 'frc-turret-shooter-indexer', number: '01', category: 'Mechanical design', filter: 'mechanical', art: 'turret',
    title: 'FRC turret, shooter & indexing system', short: 'FRC turret, shooter & indexing system',
    subtitle: 'Three connected mechanisms. One integrated design challenge.',
    description: 'Independently designed in Onshape, using reference designs to inform a turret, shooter, and indexing system for FRC.',
    tags: ['Onshape', 'Mechanism design', 'FRC'],
    facts: [['Contribution', 'Independent CAD design'], ['Tools', 'Onshape'], ['Context', 'FIRST Robotics Competition'], ['Design inputs', 'Reference designs']],
    overview: 'This project brings together a turret, shooter, and indexing system for an FRC robot. I independently designed the mechanisms in Onshape using reference designs as inputs.',
    sections: [
      { title: 'A system of connected mechanisms', text: 'The turret directs the shooting assembly, the shooter provides the launching action, and the indexing system manages the feed into the shooter. The project spans all three mechanisms and their relationship within a robot.' },
      { title: 'Independent design, informed by references', text: 'The contribution documented here is independent CAD design in Onshape. Existing reference designs informed the work; this portfolio does not claim that every underlying mechanism concept is original.' },
      { title: 'Engineering context', text: 'Packaging, clearance, and the transitions between mechanisms are useful lenses for reviewing a system like this. The final CAD views and reference links will make those design decisions easier to inspect.' },
    ],
    gallery: [
      { label: 'Full mechanism assembly', hint: 'Replace with an Onshape assembly render or screenshot.', image: '', alt: '' },
      { label: 'Turret & shooter detail', hint: 'Replace with a close-up of the designed mechanisms.', image: '', alt: '' },
      { label: 'Indexing system detail', hint: 'Replace with the feed path and indexing CAD view.', image: '', alt: '' },
    ],
    documentation: ['Onshape model and share link', 'Named reference designs and attribution', 'Design revisions and assembly views'],
  },
  {
    coverImage: '', coverAlt: '',
    slug: 'frc-elevator', number: '02', category: 'Mechanical design', filter: 'mechanical', art: 'elevator',
    title: 'FRC elevator mechanism', short: 'FRC elevator mechanism',
    subtitle: 'Exploring vertical motion through mechanical design.',
    description: 'An elevator mechanism for FRC, designed in Onshape with a focus on the mechanical assembly.',
    tags: ['Onshape', 'Elevator design', 'FRC'],
    facts: [['Contribution', 'Mechanism design'], ['Tools', 'Onshape'], ['Context', 'FIRST Robotics Competition'], ['Artifact', 'CAD assembly']],
    overview: 'I designed an FRC elevator mechanism in Onshape. The project focuses on a mechanical system for vertical motion, with the CAD assembly serving as the central design artifact.',
    sections: [
      { title: 'The mechanism', text: 'An elevator moves a carriage vertically within a robot. Its structure and moving components must work together within the available space. This project approaches that problem through an Onshape design.' },
      { title: 'Design in CAD', text: 'My contribution was the elevator mechanism design in Onshape. Detailed model views can show the structure, carriage, and relationships between parts once project images are added.' },
      { title: 'Engineering context', text: 'Travel, stiffness, component clearance, and the lifting arrangement are useful aspects to document when presenting an elevator. Specific dimensions, hardware choices, and validation data are not yet included in this project record.' },
    ],
    gallery: [
      { label: 'Elevator assembly', hint: 'Replace with the full Onshape elevator model.', image: '', alt: '' },
      { label: 'Carriage detail', hint: 'Replace with a close-up of the moving assembly.', image: '', alt: '' },
      { label: 'Structure & lifting arrangement', hint: 'Replace with a CAD detail showing the mechanism.', image: '', alt: '' },
    ],
    documentation: ['Onshape assembly and component views', 'Travel and dimensional context', 'Design choices and any available validation'],
  },
  {
    coverImage: '', coverAlt: '',
    slug: 'cnc-machining', number: '03', category: 'Manufacturing', filter: 'manufacturing', art: 'cnc',
    title: 'CNC machining with the OMIO X8', short: 'From toolpath to part',
    subtitle: 'Taking a machining workflow from CAM to the router.',
    description: 'CNC machining using an OMIO X8 router and Fusion 360 CAM, covering toolpaths, machine setup, and operation.',
    tags: ['Fusion 360 CAM', 'OMIO X8', 'CNC machining'],
    facts: [['Contribution', 'CAM, setup & operation'], ['CAM software', 'Fusion 360'], ['Machine', 'OMIO X8 CNC router'], ['Scope', 'Digital-to-physical workflow']],
    overview: 'This project covers CNC machining with an OMIO X8 router and Fusion 360 CAM. My work spans toolpath preparation, setup, and machine operation.',
    sections: [
      { title: 'Toolpaths in Fusion 360', text: 'The digital part of the workflow uses Fusion 360 CAM to prepare machining toolpaths. A CAM screenshot can connect the model geometry to the planned motion of the cutting tool.' },
      { title: 'Setup at the machine', text: 'Setup connects the CAM plan to the physical OMIO X8 router. Workholding, stock, and tool setup provide useful documentation of how a part is prepared for machining; the specific setup details will be added with project photos.' },
      { title: 'Machine operation', text: 'The project includes operating the OMIO X8 as part of the machining workflow. No specific material, dimensional tolerance, cutting parameters, or production results are claimed here.' },
    ],
    gallery: [
      { label: 'CAM toolpaths', hint: 'Replace with a Fusion 360 toolpath screenshot.', image: '', alt: '' },
      { label: 'Router setup', hint: 'Replace with an OMIO X8 setup and workholding photo.', image: '', alt: '' },
      { label: 'Machined component', hint: 'Replace with a photo of the actual machined part.', image: '', alt: '' },
    ],
    documentation: ['CAM screenshots and operation sequence', 'Stock, tooling, and workholding details', 'Part photos and any measured inspection data'],
  },
  {
    coverImage: '', coverAlt: '',
    slug: 'electric-vehicle', number: '04', category: 'Embedded systems', filter: 'embedded', art: 'vehicle',
    title: 'Science Olympiad Electric Vehicle', short: 'Electric Vehicle & encoder feedback',
    subtitle: 'Connecting wheel motion to an embedded system.',
    description: 'A Science Olympiad Electric Vehicle project using Arduino and wheel encoders.',
    tags: ['Arduino', 'Wheel encoders', 'Science Olympiad'],
    facts: [['Platform', 'Arduino'], ['Hardware', 'Wheel encoders'], ['Context', 'Science Olympiad'], ['Focus', 'Electric vehicle']],
    overview: 'This Science Olympiad Electric Vehicle project uses Arduino and wheel encoders. It brings mechanical motion and embedded electronics together in a vehicle platform.',
    sections: [
      { title: 'Reading wheel motion', text: 'Wheel encoders convert wheel rotation into signals that an embedded system can read. In this project, Arduino and wheel encoders form part of the electric vehicle system.' },
      { title: 'Hardware meets code', text: 'The vehicle provides a setting for connecting physical motion to an Arduino-based implementation. Wiring diagrams, encoder mounting details, and code excerpts will make the implementation easier to follow when added.' },
      { title: 'Engineering context', text: 'Encoder counts, wheel geometry, and calibration are useful topics for explaining a vehicle that senses wheel motion. No control algorithm, distance accuracy, competition placing, or test outcome is asserted here.' },
    ],
    gallery: [
      { label: 'Vehicle overview', hint: 'Replace with a photo of the actual Electric Vehicle.', image: '', alt: '' },
      { label: 'Wheel encoder integration', hint: 'Replace with a photo of the encoder and wheel mounting.', image: '', alt: '' },
      { label: 'Arduino & wiring', hint: 'Replace with a wiring photo or verified circuit diagram.', image: '', alt: '' },
    ],
    documentation: ['Vehicle and encoder mounting photos', 'Wiring diagram and Arduino code excerpts', 'Calibration method and any recorded test data'],
  },
  {
    coverImage: '', coverAlt: '',
    slug: 'engineering-design-training', number: '05', category: 'Engineering education', filter: 'education', art: 'training',
    title: 'Engineering design training', short: 'An introduction to engineering design',
    subtitle: 'A starting point for new robotics members.',
    description: 'A 7–8 week engineering design training program for new robotics members.',
    tags: ['Engineering design', 'Robotics', '7–8 weeks'],
    facts: [['Format', 'Training program'], ['Duration', '7–8 weeks'], ['Audience', 'New robotics members'], ['Subject', 'Engineering design']],
    overview: 'This project is a 7–8 week engineering design training program for new robotics members. It focuses on introducing engineering design in a robotics setting.',
    sections: [
      { title: 'Designed around new members', text: 'The audience is new robotics members. The program provides a dedicated period for engaging with engineering design as part of their introduction to robotics.' },
      { title: 'A multiweek format', text: 'The program spans 7–8 weeks. The exact weekly syllabus, exercises, and learning materials have not yet been added to this portfolio.' },
      { title: 'Documenting the program', text: 'A weekly outline, sample design exercises, and teaching materials would show the structure in detail. Participant counts, completion rates, and learning outcomes are not currently documented.' },
    ],
    gallery: [
      { label: 'Program overview', hint: 'Replace with the actual training plan or curriculum.', image: '', alt: '' },
      { label: 'Design exercise', hint: 'Replace with an example exercise from the program.', image: '', alt: '' },
      { label: 'Teaching materials', hint: 'Replace with training slides or a workshop photo.', image: '', alt: '' },
    ],
    documentation: ['Weekly syllabus and session structure', 'Sample exercises and teaching materials', 'Confirmed delivery details and any recorded feedback'],
  },
];
