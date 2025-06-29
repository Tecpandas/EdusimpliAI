export const chemistryXI = [
  {
    id: 1,
    title: 'Some Basic Concepts of Chemistry',
    summary: 'Laying the groundwork for all of chemistry by exploring the nature of matter, the laws of chemical combination, and the crucial concept of the mole for quantitative analysis.',
    detailedExplanation: "This foundational chapter introduces the language of chemistry. It begins by defining matter and the fundamental laws governing chemical combinations, which led to Dalton's atomic theory. We then explore how to quantify matter at the atomic level through atomic and molecular masses. The cornerstone of the chapter is the mole concept, a powerful tool that allows us to count vast numbers of atoms and molecules by weighing them. This skill is then applied to stoichiometry, the calculation of reactant and product quantities in chemical reactions, including the identification of limiting reagents.",
    keyTopics: ['Importance of Chemistry', 'Laws of Chemical Combinations', 'Dalton’s Atomic Theory', 'Mole Concept and Molar Masses', 'Stoichiometry and Calculations'],
    realWorldExample: 'Baking a cake requires precise amounts of ingredients (stoichiometry) to get the desired result.',
    keyEquation: 'Number of moles = Given mass / Molar mass',
    icon: 'flask',
    visualizationLinks: [
      'https://molview.org/',
      'https://www.chemtube3d.com/',
      'https://ptable.com/'
    ],
    resourceLinks: [
      { title: "Khan Academy: The Mole and Avogadro's Number", url: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/the-mole-and-avogadros-number/v/the-mole-and-avogadros-number' },
      { title: 'PhET Simulation: Reactants, Products and Leftovers', url: 'https://phet.colorado.edu/en/simulations/reactants-products-and-leftovers' }
    ],
    quiz: [
      { question: 'What is the value of Avogadro\'s number?', options: ['6.022 x 10^23', '3.14 x 10^23', '6.022 x 10^-23', '1.602 x 10^19'], correct: '6.022 x 10^23' },
      { question: 'The reactant that gets consumed first in a reaction is called the:', options: ['Excess reagent', 'Product', 'Catalyst', 'Limiting reagent'], correct: 'Limiting reagent' },
    ]
  },
  {
    id: 2,
    title: 'Structure of Atom',
    summary: 'A journey into the atom, from the discovery of subatomic particles to the modern quantum mechanical model that defines electron orbitals.',
    detailedExplanation: "This chapter traces the historical development of our understanding of the atom. It starts with the discovery of electrons, protons, and neutrons, and moves through the early atomic models of Thomson and Rutherford. Bohr's model introduced the key idea of quantized energy levels, successfully explaining the hydrogen spectrum. The chapter culminates in the modern quantum mechanical model, which describes electrons in terms of probabilities and orbitals defined by a set of four quantum numbers. Rules like the Aufbau principle, Pauli exclusion principle, and Hund's rule are explained for determining the electronic configuration of atoms.",
    keyTopics: ['Discovery of Sub-atomic Particles', 'Atomic Models (Thomson, Rutherford, Bohr)', 'Quantum Mechanical Model of Atom', 'Quantum Numbers', 'Shapes of Atomic Orbitals', 'Rules for Filling Electrons'],
    realWorldExample: 'Neon signs glow because electricity excites electrons in neon atoms to higher energy levels; they emit colored light when falling back.',
    keyEquation: 'ΔE = hν',
    icon: 'flask',
    visualizationLinks: [
      'https://winter.group.shef.ac.uk/orbitron/',
      'https://phet.colorado.edu/en/simulations/build-an-atom',
      'https://www.chemtube3d.com/'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Build an Atom', url: 'https://phet.colorado.edu/en/simulations/build-an-atom' },
      { title: 'The Orbitron: A gallery of atomic orbitals', url: 'https://winter.group.shef.ac.uk/orbitron/' }
    ],
    quiz: [
      { question: 'Which quantum number defines the shape of an orbital?', options: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (ml)', 'Spin (ms)'], correct: 'Azimuthal (l)' },
      { question: 'Rutherford\'s alpha-scattering experiment led to the discovery of the:', options: ['Electron', 'Proton', 'Nucleus', 'Neutron'], correct: 'Nucleus' },
    ]
  },
  {
    id: 3,
    title: 'Classification of Elements and Periodicity in Properties',
    summary: 'An exploration of the modern periodic table and the recurring trends in the physical and chemical properties of elements.',
    detailedExplanation: "This chapter explains why the periodic table is chemistry's most important tool. It traces the history of its development, culminating in the Modern Periodic Law, which arranges elements by atomic number. The structure of the table (s, p, d, f blocks) is linked to electronic configurations. The core of the chapter is the study of periodic trends, explaining how properties like atomic radius, ionization enthalpy, electron gain enthalpy, and electronegativity change systematically across periods and down groups, allowing us to predict the behavior of elements.",
    keyTopics: ['Modern Periodic Law', 'The Periodic Table and Electronic Configurations', 'Periodic Trends in Properties', 'Atomic and Ionic Radii', 'Ionization Enthalpy', 'Electron Gain Enthalpy', 'Electronegativity'],
    realWorldExample: 'Fluorine is highly reactive because it has a high electronegativity and readily accepts an electron, a trend seen in the periodic table.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://ptable.com/',
      'https://www.rsc.org/periodic-table',
      'https://www.youtube.com/watch?v=0-0Y_3a2p3Y'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Periodic Table Trends', url: 'https://www.khanacademy.org/science/chemistry/periodic-table' },
      { title: 'Royal Society of Chemistry: Interactive Periodic Table', url: 'https://www.rsc.org/periodic-table' }
    ],
    quiz: [
      { question: 'As you move from left to right across a period, atomic radius generally:', options: ['Increases', 'Decreases', 'Stays the same', 'Varies randomly'], correct: 'Decreases' },
      { question: 'Elements in the same group have similar:', options: ['Atomic numbers', 'Atomic masses', 'Valence electron configurations', 'Number of protons'], correct: 'Valence electron configurations' },
    ]
  },
  {
    id: 4,
    title: 'Chemical Bonding and Molecular Structure',
    summary: 'A fundamental look at how atoms combine to form molecules, and how theories like VSEPR and VBT predict their shapes and properties.',
    detailedExplanation: "This chapter answers the question of why atoms stick together. It covers the formation of ionic and covalent bonds based on the octet rule. Key bond parameters like length, angle, and enthalpy are defined. The VSEPR (Valence Shell Electron Pair Repulsion) theory is introduced as a simple yet powerful tool for predicting the geometry of molecules. For a deeper understanding of bonding, Valence Bond Theory (including the concepts of hybridization and orbital overlap) and Molecular Orbital Theory are explained. The chapter also discusses the special case of hydrogen bonding and its importance.",
    keyTopics: ['Ionic and Covalent Bonds', 'Bond Parameters', 'VSEPR Theory', 'Valence Bond Theory and Hybridisation', 'Molecular Orbital Theory', 'Hydrogen Bonding'],
    realWorldExample: 'The bent shape of a water molecule (H₂O), explained by VSEPR theory, gives it polarity, allowing it to dissolve many substances.',
    keyEquation: 'Bond Order = ½ (Nb - Na)',
    icon: 'flask',
    visualizationLinks: [
      'https://molview.org/',
      'https://phet.colorado.edu/en/simulations/molecule-shapes',
      'https://www.chemtube3d.com/'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Molecule Shapes', url: 'https://phet.colorado.edu/en/simulations/molecule-shapes' },
      { title: 'Crash Course Chemistry: Bonding Models', url: 'https://www.youtube.com/watch?v=a8LF7JEb0IA' }
    ],
    quiz: [
      { question: 'What is the geometry of a methane (CH4) molecule according to VSEPR theory?', options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'], correct: 'Tetrahedral' },
      { question: 'Which theory explains the paramagnetic nature of O₂?', options: ['VSEPR Theory', 'Valence Bond Theory', 'Molecular Orbital Theory', 'Lewis Theory'], correct: 'Molecular Orbital Theory' },
    ]
  },
  {
    id: 5,
    title: 'States of Matter',
    summary: 'An examination of the properties of gases and liquids, the laws that govern them, and the intermolecular forces that define their state.',
    detailedExplanation: "This chapter explores the different physical states of matter, with a primary focus on gases and liquids. It starts by explaining the various types of intermolecular forces that determine a substance's state. The behavior of gases is described by the gas laws (Boyle's, Charles's, Avogadro's), which are combined into the Ideal Gas Equation. The Kinetic Molecular Theory of Gases provides a microscopic explanation for this behavior. The chapter also discusses why real gases deviate from ideal behavior and introduces the properties of liquids, such as vapor pressure, surface tension, and viscosity.",
    keyTopics: ['Intermolecular Forces', 'The Gaseous State and The Gas Laws', 'Ideal Gas Equation', 'Kinetic Molecular Theory of Gases', 'Deviation from Ideal Behaviour', 'The Liquid State'],
    realWorldExample: 'A pressure cooker works because it increases the pressure, which raises the boiling point of water, as described by the gas laws.',
    keyEquation: 'PV = nRT',
    icon: 'flask',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/gas-properties',
      'https://www.chemtube3d.com/',
      'https://molview.org/'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Gas Properties', url: 'https://phet.colorado.edu/en/simulations/gas-properties' },
      { title: 'Khan Academy: States of Matter', url: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces' }
    ],
    quiz: [
      { question: 'Which law relates pressure and volume at constant temperature?', options: ['Charles\'s Law', 'Boyle\'s Law', 'Avogadro\'s Law', 'Gay-Lussac\'s Law'], correct: 'Boyle\'s Law' },
      { question: 'Real gases deviate from ideal behavior at:', options: ['High temperature and low pressure', 'High temperature and high pressure', 'Low temperature and high pressure', 'Low temperature and low pressure'], correct: 'Low temperature and high pressure' },
    ]
  },
  {
    id: 6,
    title: 'Thermodynamics',
    summary: 'A study of energy, heat, work, and the laws that govern their conversion, determining the spontaneity of chemical reactions.',
    detailedExplanation: "Thermodynamics is the study of energy transformations. This chapter introduces key concepts like system, surroundings, and state functions. The First Law of Thermodynamics (conservation of energy) is discussed in terms of internal energy, heat, and work. The concept of enthalpy (ΔH) is introduced to measure heat changes in reactions. The chapter then moves to the Second Law and the concept of entropy (ΔS) as a measure of disorder, which helps predict the direction of spontaneous change. Finally, Gibbs Free Energy (ΔG) is presented as the ultimate criterion for spontaneity, combining enthalpy and entropy.",
    keyTopics: ['Thermodynamic Terms', 'First Law of Thermodynamics', 'Enthalpy (ΔH)', 'Hess’s Law', 'Spontaneity', 'Entropy (ΔS) and the Second Law', 'Gibbs Energy (ΔG)'],
    realWorldExample: 'An instant cold pack works because the dissolution of ammonium nitrate inside it is an endothermic process (ΔH > 0), absorbing heat.',
    keyEquation: 'ΔG = ΔH - TΔS',
    icon: 'flask',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
      'https://www.youtube.com/watch?v=G9E_q_3d3_k',
      'https://www.chem.uiuc.edu/clcwebsite/therm.html'
    ],
    resourceLinks: [
      { title: 'Crash Course Chemistry: Thermodynamics', url: 'https://www.youtube.com/watch?v=G9E_q_3d3_k' },
      { title: 'PhET Simulation: Energy Forms and Changes', url: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes' }
    ],
    quiz: [
      { question: 'A reaction that releases heat is called:', options: ['Endothermic', 'Exothermic', 'Isothermal', 'Adiabatic'], correct: 'Exothermic' },
      { question: 'For a spontaneous process, the change in Gibbs Free Energy (ΔG) must be:', options: ['Positive', 'Negative', 'Zero', 'Equal to ΔH'], correct: 'Negative' },
    ]
  },
  {
    id: 7,
    title: 'Equilibrium',
    summary: 'An exploration of reversible reactions and the dynamic state of chemical equilibrium, including acid-base and solubility equilibria.',
    detailedExplanation: "This chapter deals with the state of equilibrium in reversible reactions, where the rates of the forward and reverse reactions are equal. It introduces the law of mass action and the equilibrium constant (Kc, Kp). Le Chatelier's Principle is a key concept, explaining how a system at equilibrium responds to changes in concentration, pressure, or temperature. The principles of equilibrium are then applied to ionic systems, covering the theories of acids and bases, the pH scale, the action of buffer solutions, and the solubility product (Ksp) for sparingly soluble salts.",
    keyTopics: ['Chemical Equilibrium', 'Equilibrium Constant (Kc, Kp)', 'Le Chatelier’s Principle', 'Acids, Bases and Salts', 'pH Scale', 'Buffer Solutions', 'Solubility Product'],
    realWorldExample: 'A sealed bottle of soda is in equilibrium; opening it releases CO₂ pressure, shifting the equilibrium and causing fizzing (Le Chatelier\'s Principle).',
    keyEquation: 'pH = -log[H⁺]',
    icon: 'flask',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/reversible-reactions',
      'https://phet.colorado.edu/en/simulations/ph-scale',
      'https://www.chemtube3d.com/'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Reversible Reactions', url: 'https://phet.colorado.edu/en/simulations/reversible-reactions' },
      { title: 'Khan Academy: Chemical Equilibrium', url: 'https://www.khanacademy.org/science/chemistry/chemical-equilibrium' }
    ],
    quiz: [
      { question: 'According to Le Chatelier\'s principle, increasing the pressure on N₂(g) + 3H₂(g) ⇌ 2NH₃(g) will:', options: ['Shift left', 'Shift right', 'Have no effect', 'Increase temperature'], correct: 'Shift right' },
      { question: 'A solution with a pH of 3 is considered:', options: ['Acidic', 'Basic', 'Neutral', 'A buffer'], correct: 'Acidic' },
    ]
  },
  {
    id: 8,
    title: 'Redox Reactions',
    summary: 'A detailed look at oxidation-reduction (redox) reactions, characterized by the transfer of electrons and changes in oxidation states.',
    detailedExplanation: "Redox reactions are fundamental to many chemical and biological processes. This chapter defines oxidation and reduction in terms of electron transfer and introduces the concept of oxidation numbers as a tool for tracking these changes. It covers how to identify oxidizing and reducing agents and classifies different types of redox reactions. A significant part of the chapter is dedicated to the methods for balancing complex redox equations (oxidation number method and half-reaction method). The connection between redox reactions and electrochemical cells is also introduced.",
    keyTopics: ['Oxidation and Reduction', 'Oxidation Number', 'Types of Redox Reactions', 'Balancing of Redox Reactions', 'Redox Reactions and Electrode Processes'],
    realWorldExample: 'The rusting of iron is a redox reaction where iron is oxidized by air and water.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=1v_8tF8-4zE',
      'https://chem.libretexts.org/',
      'https://www.chem.ucla.edu/~harding/IGOC/R/redox.html'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Oxidation-Reduction Reactions', url: 'https://www.khanacademy.org/science/chemistry/oxidation-reduction' },
      { title: 'The Organic Chemistry Tutor: Balancing Redox Reactions', url: 'https://www.youtube.com/watch?v=v5sDNmYCaqo' }
    ],
    quiz: [
      { question: 'In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, what is being oxidized?', options: ['Zn', 'Cu²⁺', 'Zn²⁺', 'Cu'], correct: 'Zn' },
      { question: 'What is the oxidation number of sulfur in H₂SO₄?', options: ['+2', '+4', '+6', '-2'], correct: '+6' },
    ]
  },
  {
    id: 9,
    title: 'Hydrogen',
    summary: 'A study of the unique position, properties, preparation, and important compounds of hydrogen, the simplest and most abundant element.',
    detailedExplanation: "Hydrogen holds a unique position in the periodic table due to its simple structure. This chapter discusses its properties and its similarities to both alkali metals and halogens. It covers the preparation of dihydrogen (H₂) and its uses. The various types of hydrides (ionic, covalent, and metallic) are explained. The chapter also delves into the chemistry of two of hydrogen's most important compounds: water, including its structure and the concept of hard and soft water, and hydrogen peroxide (H₂O₂), a powerful oxidizing agent. The potential of hydrogen as a clean fuel is also highlighted.",
    keyTopics: ['Position in Periodic Table', 'Preparation and Properties of Dihydrogen', 'Hydrides', 'Water (Structure, Hard/Soft)', 'Hydrogen Peroxide (H₂O₂)', 'Hydrogen as a Fuel'],
    realWorldExample: 'Hydrogen peroxide (H₂O₂) is used as a mild antiseptic because it decomposes into water and oxygen.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://www.rsc.org/periodic-table/element/1/hydrogen',
      'https://molview.org/?q=water',
      'https://www.energy.gov/eere/fuelcells/hydrogen-fuel-basics'
    ],
    resourceLinks: [
      { title: 'Royal Society of Chemistry: Hydrogen', url: 'https://www.rsc.org/periodic-table/element/1/hydrogen' },
      { title: 'U.S. Department of Energy: Hydrogen Fuel Basics', url: 'https://www.energy.gov/eere/fuelcells/hydrogen-fuel-basics' }
    ],
    quiz: [
      { question: 'What causes temporary hardness in water?', options: ['Sulphates of Mg and Ca', 'Chlorides of Mg and Ca', 'Bicarbonates of Mg and Ca', 'Nitrates of Mg and Ca'], correct: 'Bicarbonates of Mg and Ca' },
      { question: 'Which isotope of hydrogen is radioactive?', options: ['Protium', 'Deuterium', 'Tritium', 'All are stable'], correct: 'Tritium' },
    ]
  },
  {
    id: 10,
    title: 'The s-Block Elements',
    summary: 'An exploration of the alkali metals (Group 1) and alkaline earth metals (Group 2), known for their high reactivity and important compounds.',
    detailedExplanation: "This chapter focuses on the elements of the first two groups of the periodic table. It discusses the general characteristics of the alkali metals (Group 1) and alkaline earth metals (Group 2), including trends in their atomic and physical properties. The anomalous behavior of the first element in each group (Lithium and Beryllium) is explained. The chapter also covers the preparation, properties, and uses of important compounds like sodium carbonate (washing soda), sodium hydroxide, and calcium carbonate (limestone), and discusses the biological importance of Na, K, Mg, and Ca ions.",
    keyTopics: ['Group 1: Alkali Metals', 'Important Compounds of Sodium', 'Group 2: Alkaline Earth Metals', 'Important Compounds of Calcium', 'Biological Importance of s-Block Elements'],
    realWorldExample: 'Baking soda (sodium bicarbonate, NaHCO₃) is a compound of an s-block element used in baking and as an antacid.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://ptable.com/',
      'https://www.youtube.com/watch?v=6ZY6d6jI3kQ',
      'https://www.rsc.org/periodic-table'
    ],
    resourceLinks: [
      { title: 'Crash Course Chemistry: The Alkali Metals', url: 'https://www.youtube.com/watch?v=6ZY6d6jI3kQ' },
      { title: 'Chem LibreTexts: The Alkali Metals (Group 1)', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/07%3A_Periodic_Properties_of_the_Elements/7.07%3A_Group_Trends_for_the_Active_Metals' }
    ],
    quiz: [
      { question: 'Which alkali metal is the most reactive?', options: ['Li', 'Na', 'K', 'Cs'], correct: 'Cs' },
      { question: 'Which element shows a diagonal relationship with Magnesium?', options: ['Sodium', 'Beryllium', 'Lithium', 'Boron'], correct: 'Lithium' },
    ]
  },
  {
    id: 11,
    title: 'The p-Block Elements (Groups 13 & 14)',
    summary: 'A detailed look at the chemistry of the Boron family (Group 13) and the Carbon family (Group 14), highlighting their diverse properties.',
    detailedExplanation: "This chapter introduces the p-block, starting with Group 13 (Boron family) and Group 14 (Carbon family). It examines the trends in their properties, including the 'inert pair effect' which becomes significant down the groups. For Group 13, it discusses the electron-deficient nature of boron compounds like diborane. For Group 14, it highlights the unique property of carbon, catenation, which leads to a vast number of organic compounds. The different allotropes of carbon (diamond, graphite, fullerenes) and important compounds like carbon oxides and silicones are also covered.",
    keyTopics: ['Group 13 Elements: The Boron Family', 'Important Compounds of Boron', 'Group 14 Elements: The Carbon Family', 'Allotropes of Carbon', 'Important Compounds of Carbon and Silicon'],
    realWorldExample: 'Silicon, a Group 14 element, is the foundation of the modern electronics industry, used to make computer chips.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://ptable.com/',
      'https://www.chemtube3d.com/',
      'https://molview.org/'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Carbon and the p-block', url: 'https://www.khanacademy.org/science/biology/properties-of-carbon' },
      { title: 'Chem LibreTexts: The Boron Family (Group 13)', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%3A_Chemistry_(Averill_and_Eldredge)/22%3A_The_p-Block_Elements/22.2%3A_The_Elements_of_Group_13' }
    ],
    quiz: [
      { question: 'Which allotrope of carbon is a good conductor of electricity?', options: ['Diamond', 'Graphite', 'Fullerene', 'Coal'], correct: 'Graphite' },
      { question: 'The tendency of an element to form chains of identical atoms is called:', options: ['Allotropy', 'Isomerism', 'Catenation', 'Polymerization'], correct: 'Catenation' },
    ]
  },
  {
    id: 12,
    title: 'Organic Chemistry: Basic Principles & Techniques',
    summary: 'Laying the foundation of organic chemistry by covering nomenclature, isomerism, reaction mechanisms, and purification methods.',
    detailedExplanation: "This chapter serves as the entry point into the world of organic chemistry. It establishes the rules for naming organic compounds using the IUPAC system. The concept of isomerism, where molecules have the same formula but different structures, is introduced. It then delves into the fundamental concepts of reaction mechanisms, explaining electronic effects like inductive and resonance effects, which govern the reactivity of molecules. The chapter also defines key reactive species like electrophiles and nucleophiles and outlines common techniques for purifying organic compounds.",
    keyTopics: ['IUPAC Nomenclature', 'Isomerism (Structural and Stereoisomerism)', 'Fundamental Concepts in Reaction Mechanism', 'Electronic Effects', 'Electrophiles and Nucleophiles', 'Purification of Organic Compounds'],
    realWorldExample: 'The difference between butane (in lighters) and isobutane (in aerosols) is an example of structural isomerism.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://www.chem.ucla.edu/~harding/IGOC/IGOC.html',
      'https://molview.org/',
      'https://www.chemtube3d.com/'
    ],
    resourceLinks: [
      { title: 'The Organic Chemistry Tutor: IUPAC Nomenclature', url: 'https://www.youtube.com/watch?v=z_s3g_45oNU' },
      { title: 'Chem LibreTexts: Organic Chemistry', url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry' }
    ],
    quiz: [
      { question: 'A species that attacks an electron-rich center is called a(n):', options: ['Nucleophile', 'Electrophile', 'Free radical', 'Carbanion'], correct: 'Electrophile' },
      { question: 'The stability of carbocations follows the order:', options: ['3° > 2° > 1°', '1° > 2° > 3°', '2° > 1° > 3°', '3° > 1° > 2°'], correct: '3° > 2° > 1°' },
    ]
  },
  {
    id: 13,
    title: 'Hydrocarbons',
    summary: 'An exploration of the simplest organic compounds—alkanes, alkenes, alkynes, and aromatic compounds—and their characteristic reactions.',
    detailedExplanation: "Hydrocarbons, compounds containing only carbon and hydrogen, form the backbone of organic chemistry. This chapter classifies them into alkanes (saturated), alkenes (containing double bonds), and alkynes (containing triple bonds). It discusses their preparation and characteristic reactions: free-radical substitution for alkanes, and electrophilic addition for alkenes and alkynes (including Markovnikov's rule). The final section introduces aromatic hydrocarbons, focusing on benzene, the concept of aromaticity (Hückel's rule), and its characteristic electrophilic substitution reactions.",
    keyTopics: ['Alkanes', 'Alkenes', 'Alkynes', 'Aromatic Hydrocarbons', 'Aromaticity', 'Electrophilic Substitution'],
    realWorldExample: 'Natural gas (mostly methane, an alkane) and petrol (a mix of alkanes) are hydrocarbons used as major fuel sources worldwide.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://molview.org/',
      'https://www.chemtube3d.com/',
      'https://www.chem.ucla.edu/~harding/IGOC/IGOC.html'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Alkanes, Alkenes, and Alkynes', url: 'https://www.khanacademy.org/science/organic-chemistry/alkanes-cycloalkanes-and-conformational-analysis' },
      { title: 'Crash Course Chemistry: Hydrocarbons', url: 'https://www.youtube.com/watch?v=U_y_h3Rykks' }
    ],
    quiz: [
      { question: 'Which type of reaction is characteristic of alkanes?', options: ['Addition', 'Elimination', 'Free-radical substitution', 'Electrophilic substitution'], correct: 'Free-radical substitution' },
      { question: 'Which of the following is an aromatic compound?', options: ['Cyclohexane', 'Cyclohexene', 'Benzene', 'Hexane'], correct: 'Benzene' },
    ]
  },
  {
    id: 14,
    title: 'Environmental Chemistry',
    summary: 'An application of chemical principles to understand and combat environmental pollution in the air, water, and soil.',
    detailedExplanation: "This chapter examines the chemistry behind major environmental issues. It discusses atmospheric pollution, including the formation of acid rain, photochemical smog, the greenhouse effect leading to global warming, and the depletion of the stratospheric ozone layer. It also covers water pollution, defining terms like BOD (Biochemical Oxygen Demand) and explaining the process of eutrophication. Soil pollution from pesticides and industrial wastes is also addressed. The chapter concludes by introducing the principles of Green Chemistry as a sustainable approach to prevent pollution.",
    keyTopics: ['Atmospheric Pollution (Tropospheric and Stratospheric)', 'Acid Rain, Smog, Greenhouse Effect, Ozone Depletion', 'Water Pollution (BOD, Eutrophication)', 'Soil Pollution', 'Green Chemistry'],
    realWorldExample: 'Acid rain is caused by sulfur and nitrogen oxides from burning fossil fuels reacting with atmospheric water.',
    keyEquation: '',
    icon: 'flask',
    visualizationLinks: [
      'https://www.epa.gov/environmental-topics',
      'https://climate.nasa.gov/',
      'https://www.acs.org/greenchemistry.html'
    ],
    resourceLinks: [
      { title: 'NASA: Global Climate Change', url: 'https://climate.nasa.gov/' },
      { title: 'American Chemical Society: Green Chemistry', url: 'https://www.acs.org/greenchemistry.html' }
    ],
    quiz: [
      { question: 'Acid rain is primarily caused by oxides of which two elements?', options: ['Carbon and Hydrogen', 'Sulfur and Nitrogen', 'Sodium and Potassium', 'Chlorine and Fluorine'], correct: 'Sulfur and Nitrogen' },
      { question: 'The depletion of the ozone layer is mainly caused by:', options: ['Carbon dioxide', 'Methane', 'Chlorofluorocarbons (CFCs)', 'Acid rain'], correct: 'Chlorofluorocarbons (CFCs)' },
    ]
  }
];

// =================================================================================
//                            BIOLOGY CLASS 11
// =================================================================================
export const biologyXI = [
  {
    id: 1,
    title: 'The Living World',
    summary: 'An introduction to the definition of life, the vast diversity of organisms, and the systematic approach used to classify them.',
    detailedExplanation: "This opening chapter addresses the fundamental question: 'What is living?'. It distinguishes living from non-living based on defining characteristics like metabolism, cellular organization, and consciousness. It introduces the immense biodiversity on Earth and highlights the need for a standardized system of nomenclature (binomial nomenclature) and classification. The chapter outlines the taxonomic hierarchy (Kingdom, Phylum, Class, etc.) and describes various taxonomical aids like herbaria, museums, and botanical gardens that help in the study and conservation of organisms.",
    keyTopics: ['What is ‘Living’?', 'Diversity in the Living World', 'Taxonomic Categories', 'Taxonomical Aids'],
    realWorldExample: 'A museum or a botanical garden serves as a taxonomical aid, helping us identify and study different species.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=bO_T4t_d1pA',
      'https://www.biologieducare.com/',
      'https://www.britannica.com/science/taxonomy'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Introduction to biodiversity', url: 'https://www.khanacademy.org/science/biology/biodiversity-and-conservation/introduction-to-biodiversity/v/what-is-biodiversity' },
      { title: 'Crash Course Biology: Taxonomy', url: 'https://www.youtube.com/watch?v=F38BmgPcZ_I' }
    ],
    quiz: [
      { question: 'Which of the following is a defining characteristic of living organisms?', options: ['Growth', 'Reproduction', 'Metabolism', 'Movement'], correct: 'Metabolism' },
      { question: 'Who is known as the father of modern taxonomy?', options: ['Aristotle', 'Theophrastus', 'Carolus Linnaeus', 'Charles Darwin'], correct: 'Carolus Linnaeus' },
    ]
  },
  {
    id: 2,
    title: 'Biological Classification',
    summary: 'An exploration of the major systems of classification, focusing on R.H. Whittaker\'s Five Kingdom system: Monera, Protista, Fungi, Plantae, and Animalia.',
    detailedExplanation: "This chapter details how scientists have historically classified the living world. It focuses on R.H. Whittaker's widely accepted Five Kingdom Classification. Each kingdom is explored based on its key characteristics, such as cell structure (prokaryotic vs. eukaryotic), body organization (unicellular vs. multicellular), and mode of nutrition. It provides an overview of Kingdom Monera (bacteria), Protista (diverse eukaryotes), and Fungi. The chapter concludes by discussing organisms that don't fit into this system, such as viruses, viroids, and lichens.",
    keyTopics: ['Kingdom Monera', 'Kingdom Protista', 'Kingdom Fungi', 'Kingdom Plantae', 'Kingdom Animalia', 'Viruses, Viroids and Lichens'],
    realWorldExample: 'Yeast, a type of fungus, is used in baking and brewing, showcasing the economic importance of Kingdom Fungi.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=F38BmgPcZ_I',
      'https://www.ucmp.berkeley.edu/alllife/threedomains.html',
      'https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_General_Biology_(Boundless)/20%3A_Phylogenies_and_the_History_of_Life/20.02%3A_The_Five_Kingdoms'
    ],
    resourceLinks: [
      { title: 'Amoeba Sisters: The Six Kingdoms', url: 'https://www.youtube.com/watch?v=F38BmgPcZ_I' },
      { title: 'UC Berkeley: The Five Kingdoms of Life', url: 'https://ucmp.berkeley.edu/alllife/threedomains.html' }
    ],
    quiz: [
      { question: 'The five-kingdom classification was proposed by:', options: ['C. Linnaeus', 'R.H. Whittaker', 'Aristotle', 'T.O. Diener'], correct: 'R.H. Whittaker' },
      { question: 'The cell wall of fungi is made of:', options: ['Cellulose', 'Chitin', 'Peptidoglycan', 'Hemicellulose'], correct: 'Chitin' },
    ]
  },
  {
    id: 3,
    title: 'Plant Kingdom',
    summary: 'A detailed survey of the major groups within the plant kingdom, from simple algae to complex flowering plants, highlighting their life cycles.',
    detailedExplanation: "This chapter provides a comprehensive tour of the plant kingdom. It starts with the simplest plants, the algae, and moves progressively to more complex groups: bryophytes (the 'amphibians' of the plant kingdom), pteridophytes (the first terrestrial plants with vascular tissue), gymnosperms (plants with 'naked' seeds like pines), and finally, the most advanced group, the angiosperms (flowering plants). The key characteristics, economic importance, and life cycles of each group are discussed, with a focus on the concept of alternation of generations between the gametophyte and sporophyte phases.",
    keyTopics: ['Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms', 'Alternation of Generations'],
    realWorldExample: 'Pine trees, which produce cones instead of flowers, are common examples of gymnosperms.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=X4L3r_XJ0vY',
      'https://www.britannica.com/science/plant',
      'https://bio.libretexts.org/Bookshelves/Botany'
    ],
    resourceLinks: [
      { title: 'Crash Course Biology: The Plant Kingdom', url: 'https://www.youtube.com/watch?v=X4L3r_XJ0vY' },
      { title: 'Khan Academy: Introduction to plants', url: 'https://www.khanacademy.org/science/biology/plant-biology' }
    ],
    quiz: [
      { question: 'Which group of plants is known as "amphibians of the plant kingdom"?', options: ['Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms'], correct: 'Bryophytes' },
      { question: 'Double fertilization is a characteristic feature of:', options: ['Algae', 'Fungi', 'Gymnosperms', 'Angiosperms'], correct: 'Angiosperms' },
    ]
  },
  {
    id: 4,
    title: 'Animal Kingdom',
    summary: 'A comprehensive classification of animals, from simple sponges to complex mammals, based on key structural and developmental characteristics.',
    detailedExplanation: "This chapter systematically classifies the vast diversity of the animal kingdom. It begins by explaining the basis of classification, such as levels of organization, symmetry, and the nature of the coelom. It then proceeds phylum by phylum, from the simplest invertebrates like Porifera (sponges) and Cnidaria (jellyfish) up to the complex Chordata. Key characteristics, unique features (like the water vascular system in Echinoderms), and representative examples are provided for each phylum, culminating in a detailed look at the classes of vertebrates, including fish, amphibians, reptiles, birds, and mammals.",
    keyTopics: ['Basis of Classification', 'Phylum Porifera to Echinodermata', 'Phylum Chordata', 'Classes Cyclostomata to Mammalia'],
    realWorldExample: 'Insects, belonging to Phylum Arthropoda, are the most diverse group of animals and play crucial roles as pollinators and decomposers.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=tkq33-1s-lU',
      'https://www.animaldiversity.org/',
      'https://www.britannica.com/animal/animal'
    ],
    resourceLinks: [
      { title: 'Crash Course Biology: Animal Kingdom', url: 'https://www.youtube.com/watch?v=tkq33-1s-lU' },
      { title: 'Animal Diversity Web (University of Michigan)', url: 'https://animaldiversity.org/' }
    ],
    quiz: [
      { question: 'Which phylum is characterized by the presence of a water canal system?', options: ['Coelenterata', 'Porifera', 'Platyhelminthes', 'Annelida'], correct: 'Porifera' },
      { question: 'Which is the largest phylum in the animal kingdom?', options: ['Mollusca', 'Arthropoda', 'Annelida', 'Chordata'], correct: 'Arthropoda' },
    ]
  },
  {
    id: 5,
    title: 'Morphology of Flowering Plants',
    summary: 'A study of the external forms and structures of various plant parts like roots, stems, leaves, flowers, and fruits.',
    detailedExplanation: "Morphology is the study of the external features of organisms. This chapter focuses on the diverse forms of flowering plants. It describes the structure and modifications of the root, stem, and leaf, showing how they are adapted for functions like storage, support, and protection. The chapter then details the structure of the flower, the arrangement of flowers (inflorescence), and the processes leading to the formation of fruits and seeds. It concludes by describing the key morphological features of important plant families like Fabaceae and Solanaceae.",
    keyTopics: ['The Root', 'The Stem', 'The Leaf', 'The Inflorescence', 'The Flower', 'The Fruit and Seed', 'Description of Important Families'],
    realWorldExample: 'A potato is a modified stem (tuber) that stores food, while a carrot is a modified root.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=j3y-Uo9-u5E',
      'https://www.proprofs.com/quiz-school/story.php?title=morphology-of-flowering-plants-quiz-1',
      'https://bio.libretexts.org/Bookshelves/Botany/Botany_(Ha_Morrow_and_Al-Rowaily)/05%3A_Plant_Form_and_Function'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Plant structures', url: 'https://www.khanacademy.org/science/biology/plant-biology/plant-structures/a/plant-parts-and-functions' },
      { title: 'BYJU\'S: Morphology of Flowering Plants', url: 'https://byjus.com/biology/morphology-of-flowering-plants/' }
    ],
    quiz: [
      { question: 'The arrangement of flowers on the floral axis is termed as:', options: ['Venation', 'Phyllotaxy', 'Aestivation', 'Inflorescence'], correct: 'Inflorescence' },
      { question: 'Which part of the flower develops into a fruit?', options: ['Ovary', 'Ovule', 'Stamen', 'Petal'], correct: 'Ovary' },
    ]
  },
  {
    id: 6,
    title: 'Anatomy of Flowering Plants',
    summary: 'An exploration of the internal tissue organization of roots, stems, and leaves in monocots and dicots, including secondary growth.',
    detailedExplanation: "This chapter takes a look inside the plant, studying its internal structure or anatomy. It introduces the different types of plant tissues: meristematic (for growth) and permanent (for specific functions). It then describes how these tissues are organized into three systems: epidermal, ground, and vascular. The chapter provides a comparative anatomy of the root, stem, and leaf for both dicotyledonous and monocotyledonous plants. A key section is dedicated to secondary growth, the process responsible for the increase in girth of woody plants, leading to the formation of wood and bark.",
    keyTopics: ['The Tissues (Meristematic and Permanent)', 'The Tissue System', 'Anatomy of Dicot and Monocot Plants', 'Secondary Growth'],
    realWorldExample: 'The annual rings in a tree trunk, used to determine its age, are a result of secondary growth in the vascular tissues.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=O-V-f9_35YI',
      'https://www.biologydiscussion.com/plant-anatomy/anatomy-of-flowering-plants-notes/53123',
      'https://bio.libretexts.org/Bookshelves/Botany/Botany_(Ha_Morrow_and_Al-Rowaily)/05%3A_Plant_Form_and_Function'
    ],
    resourceLinks: [
      { title: 'BYJU\'S: Anatomy of Flowering Plants', url: 'https://byjus.com/biology/anatomy-of-flowering-plants/' },
      { title: 'Easy Biology Class: Plant Tissues', url: 'https://www.easybiologyclass.com/plant-tissues-lecture-notes-ppt/' }
    ],
    quiz: [
      { question: 'Which tissue is responsible for the growth in length of a plant?', options: ['Apical meristem', 'Lateral meristem', 'Intercalary meristem', 'Permanent tissue'], correct: 'Apical meristem' },
      { question: 'Secondary growth in dicot stems is due to the activity of:', options: ['Apical meristem', 'Vascular cambium and cork cambium', 'Intercalary meristem', 'Epidermis'], correct: 'Vascular cambium and cork cambium' },
    ]
  },
  {
    id: 7,
    title: 'Structural Organisation in Animals',
    summary: 'A focus on the four primary types of animal tissues—epithelial, connective, muscular, and neural—and how they form organ systems.',
    detailedExplanation: "This chapter examines how cells are organized into tissues, and tissues into organs and organ systems in animals. It provides a detailed description of the structure, location, and function of the four basic types of animal tissues: epithelial (for covering and lining), connective (for support and linking), muscular (for movement), and neural (for control and coordination). The chapter also illustrates how these tissues come together to form the organ systems of representative animals like the earthworm and cockroach, providing a complete picture of their anatomy.",
    keyTopics: ['Animal Tissues (Epithelial, Connective, Muscular, Neural)', 'Organ and Organ System', 'Anatomy of Earthworm and Cockroach'],
    realWorldExample: 'The human skin is an organ composed of epithelial tissue for protection, connective tissue for support, and neural tissue for sensation.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=buy1-azQ9CE',
      'https://www.visiblebody.com/learn/anatomy/tissue-types',
      'https://www.biologydiscussion.com/animals-2/structural-organisation-in-animals-with-diagram/15873'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn Tissue Types', url: 'https://www.visiblebody.com/learn/anatomy/tissue-types' },
      { title: 'Khan Academy: Tissues', url: 'https://www.khanacademy.org/science/high-school-biology/hs-human-body-systems/hs-body-structure-and-homeostasis/a/tissues-organs-organ-systems' }
    ],
    quiz: [
      { question: 'Which tissue covers the outer surface of the body and lines internal organs?', options: ['Connective', 'Muscular', 'Epithelial', 'Neural'], correct: 'Epithelial' },
      { question: 'Blood is a type of:', options: ['Epithelial tissue', 'Connective tissue', 'Muscular tissue', 'Neural tissue'], correct: 'Connective tissue' },
    ]
  },
  {
    id: 8,
    title: 'Cell: The Unit of Life',
    summary: 'A detailed tour of the cell, exploring the structure and function of its organelles and highlighting the key differences between prokaryotic and eukaryotic cells.',
    detailedExplanation: "This chapter explores the fundamental unit of all living organisms: the cell. It begins with the history of cell discovery and the formulation of the Cell Theory. A detailed overview of both prokaryotic cells (lacking a nucleus) and eukaryotic cells is provided. The chapter then takes a deep dive into the eukaryotic cell, describing the structure and function of the cell membrane, cell wall (in plants), and various cell organelles like the nucleus (the control center), mitochondria (the powerhouse), endoplasmic reticulum, Golgi apparatus, and ribosomes (protein factories).",
    keyTopics: ['Cell Theory', 'Overview of Cell', 'Prokaryotic Cells', 'Eukaryotic Cells', 'Cell Membrane and Wall', 'Cell Organelles'],
    realWorldExample: 'Mitochondria, the "powerhouses" of the cell, are responsible for generating the energy (ATP) that powers all our bodily functions.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=URUJD5NEXC8',
      'https://www.visiblebody.com/learn/biology/cells/cell-overview',
      'https://phet.colorado.edu/en/simulations/cell-structure'
    ],
    resourceLinks: [
      { title: 'Amoeba Sisters: Introduction to Cells', url: 'https://www.youtube.com/watch?v=8IlzKri08kk' },
      { title: 'Visible Body: Learn Cell Anatomy', url: 'https://www.visiblebody.com/learn/biology/cells/cell-overview' }
    ],
    quiz: [
      { question: 'The "powerhouse" of the cell is the:', options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Endoplasmic reticulum'], correct: 'Mitochondrion' },
      { question: 'Which organelle is responsible for protein synthesis?', options: ['Mitochondrion', 'Lysosome', 'Ribosome', 'Golgi apparatus'], correct: 'Ribosome' },
    ]
  },
  {
    id: 9,
    title: 'Biomolecules',
    summary: 'An investigation into the chemical building blocks of life, including the structure and function of proteins, carbohydrates, lipids, and nucleic acids.',
    detailedExplanation: "This chapter delves into the chemistry of life by studying the molecules that constitute cells. It explains how to analyze the chemical composition of living tissues. The four major classes of biomacromolecules are explored in detail: proteins (polymers of amino acids with diverse functions), polysaccharides (complex carbohydrates for energy storage and structure), lipids (fats and oils), and nucleic acids (DNA and RNA, the carriers of genetic information). A significant focus is placed on the structure of proteins (primary, secondary, tertiary, quaternary) and the nature of enzymes as biological catalysts.",
    keyTopics: ['Chemical Composition Analysis', 'Primary and Secondary Metabolites', 'Proteins', 'Polysaccharides', 'Nucleic Acids', 'Structure of Proteins', 'Enzymes'],
    realWorldExample: 'Enzymes in laundry detergents are biomolecules that help break down protein and fat stains.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=F3crf2aA-u0',
      'https://molview.org/',
      'https://www.rcsb.org/'
    ],
    resourceLinks: [
      { title: 'Crash Course Biology: Biomolecules', url: 'https://www.youtube.com/watch?v=H8WJ2KENlK0' },
      { title: 'Khan Academy: Macromolecules', url: 'https://www.khanacademy.org/science/biology/macromolecules' }
    ],
    quiz: [
      { question: 'The building blocks of proteins are:', options: ['Monosaccharides', 'Fatty acids', 'Amino acids', 'Nucleotides'], correct: 'Amino acids' },
      { question: 'Enzymes are biological catalysts that are chemically:', options: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'], correct: 'Proteins' },
    ]
  },
  {
    id: 10,
    title: 'Cell Cycle and Cell Division',
    summary: 'An exploration of the life cycle of a cell, detailing the processes of mitosis (for growth and repair) and meiosis (for sexual reproduction).',
    detailedExplanation: "This chapter describes the sequence of events by which a cell duplicates its genome and divides into two daughter cells, known as the cell cycle. It details the phases of interphase (G1, S, G2) and the M phase. The process of mitosis (equational division) is explained step-by-step (prophase, metaphase, anaphase, telophase), highlighting its role in growth and repair. The chapter then covers meiosis (reductional division), the specialized cell division that produces haploid gametes, explaining how it generates genetic variation through processes like crossing over.",
    keyTopics: ['Cell Cycle (Interphase and M Phase)', 'Mitosis', 'Significance of Mitosis', 'Meiosis (Meiosis I and Meiosis II)', 'Significance of Meiosis'],
    realWorldExample: 'The healing of a wound involves mitosis, where cells divide to replace the damaged ones.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=Q6ucKWIIFmg',
      'https://www.visiblebody.com/learn/biology/cells/mitosis-and-meiosis',
      'https://phet.colorado.edu/en/simulations/cell-division'
    ],
    resourceLinks: [
      { title: 'Amoeba Sisters: Mitosis', url: 'https://www.youtube.com/watch?v=f-ldPgEfAHI' },
      { title: 'Khan Academy: Cell cycle and mitosis', url: 'https://www.khanacademy.org/science/biology/cellular-molecular-biology/mitosis/a/cell-cycle-phases' }
    ],
    quiz: [
      { question: 'In which phase of the cell cycle does DNA replication occur?', options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'], correct: 'S phase' },
      { question: 'Meiosis results in the formation of:', options: ['Two diploid cells', 'Four haploid cells', 'Two haploid cells', 'Four diploid cells'], correct: 'Four haploid cells' },
    ]
  },
  {
    id: 11,
    title: 'Transport in Plants',
    summary: 'A study of the mechanisms by which plants absorb and transport water, nutrients, and food throughout their body.',
    detailedExplanation: "This chapter explores the physiology of transport in plants. It covers short-distance transport mechanisms like diffusion, facilitated diffusion, and active transport. It then delves into plant-water relations, explaining concepts like water potential and osmosis. The majority of the chapter is dedicated to long-distance transport. The cohesion-tension theory is explained as the mechanism for the ascent of sap through the xylem (transpiration pull). The pressure-flow hypothesis is presented to explain the translocation of sugars (food) from source to sink through the phloem.",
    keyTopics: ['Means of Transport', 'Plant-Water Relations (Water Potential, Osmosis)', 'Long Distance Transport of Water (Transpiration)', 'Transport of Mineral Nutrients', 'Phloem Transport (Source to Sink)'],
    realWorldExample: 'The process of transpiration, the loss of water vapor from leaves, is what pulls water up from the roots to the top of the tallest trees.',
    keyEquation: 'Ψw = Ψs + Ψp',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=9gbykltq94I',
      'https://www.biologydiscussion.com/plants/transport-in-plants/transport-in-plants-meaning-and-importance-botany/69888',
      'https://bio.libretexts.org/Bookshelves/Botany/Botany_(Ha_Morrow_and_Al-Rowaily)/06%3A_Plant_Physiology/6.02%3A_Water_and_Solute_Transport'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Plant transport', url: 'https://www.khanacademy.org/science/biology/plant-biology/plant-structures/a/xylem-and-phloem' },
      { title: 'Crash Course Biology: Plant Transport', url: 'https://www.youtube.com/watch?v=9gbykltq94I' }
    ],
    quiz: [
      { question: 'The transport of food in plants occurs through the:', options: ['Xylem', 'Phloem', 'Cortex', 'Epidermis'], correct: 'Phloem' },
      { question: 'The loss of water in the form of vapor from the leaves is known as:', options: ['Guttation', 'Transpiration', 'Bleeding', 'Evaporation'], correct: 'Transpiration' },
    ]
  },
  {
    id: 12,
    title: 'Mineral Nutrition',
    summary: 'An examination of the essential minerals required for plant growth, their specific roles, deficiency symptoms, and the nitrogen cycle.',
    detailedExplanation: "This chapter focuses on how plants obtain and use mineral nutrients from the soil. It explains the criteria for the essentiality of an element and classifies them into macronutrients and micronutrients. The specific roles of these nutrients and the visible symptoms that appear in plants when they are deficient are described. The chapter also discusses the mechanism of mineral absorption by roots and provides a detailed account of the metabolism of nitrogen, a crucial macronutrient, including the process of biological nitrogen fixation by microorganisms like Rhizobium.",
    keyTopics: ['Essential Mineral Elements', 'Role of Macro- and Micronutrients', 'Deficiency Symptoms', 'Mechanism of Absorption', 'Metabolism of Nitrogen'],
    realWorldExample: 'Farmers use fertilizers containing nitrogen (N), phosphorus (P), and potassium (K) to provide essential macronutrients to crops.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=leCjpr-Y-94',
      'https://www.cropnutrition.com/nutrient-knowledge',
      'https://bio.libretexts.org/Bookshelves/Botany/Botany_(Ha_Morrow_and_Al-Rowaily)/06%3A_Plant_Physiology/6.03%3A_Plant_Nutrition'
    ],
    resourceLinks: [
      { title: 'BYJU\'S: Mineral Nutrition in Plants', url: 'https://byjus.com/biology/mineral-nutrition-in-plants/' },
      { title: 'Khan Academy: Plant mineral nutrition', url: 'https://www.khanacademy.org/science/biology/plant-biology/plant-nutrition-and-transport/a/plant-mineral-nutrition' }
    ],
    quiz: [
      { question: 'Which element is a component of chlorophyll?', options: ['Iron', 'Magnesium', 'Manganese', 'Calcium'], correct: 'Magnesium' },
      { question: 'The conversion of atmospheric nitrogen to ammonia is called:', options: ['Nitrification', 'Denitrification', 'Nitrogen fixation', 'Ammonification'], correct: 'Nitrogen fixation' },
    ]
  },
  {
    id: 13,
    title: 'Photosynthesis in Higher Plants',
    summary: 'A detailed molecular explanation of how plants use sunlight, water, and carbon dioxide to create their own food and release oxygen.',
    detailedExplanation: "This chapter unravels the process of photosynthesis. It begins with early experiments that helped shape our understanding. The structure of the chloroplast, the site of photosynthesis, is detailed. The process is broken down into two main stages: the light-dependent reactions, where light energy is captured by pigments like chlorophyll to produce ATP and NADPH; and the light-independent reactions (the Calvin cycle), where this chemical energy is used to fix CO₂ into sugar. The chapter also discusses alternative pathways like the C4 pathway and the wasteful process of photorespiration.",
    keyTopics: ['Site of Photosynthesis', 'Pigments involved', 'Light Reaction and Electron Transport', 'The Calvin Cycle (C3)', 'The C4 Pathway', 'Photorespiration', 'Factors affecting Photosynthesis'],
    realWorldExample: 'All the food we eat is a direct or indirect product of photosynthesis, the process plants use to convert sunlight into chemical energy.',
    keyEquation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=K_9z_wI3v1Q',
      'https://phet.colorado.edu/en/simulations/photosynthesis',
      'https://www.rsc.org/educatiion/resource/res00000455/photosynthesis.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Photosynthesis', url: 'https://phet.colorado.edu/en/simulations/photosynthesis' },
      { title: 'Khan Academy: Photosynthesis', url: 'https://www.khanacademy.org/science/biology/photosynthesis-in-plants' }
    ],
    quiz: [
      { question: 'The light-dependent reactions of photosynthesis produce:', options: ['ATP and NADPH', 'Glucose and oxygen', 'CO₂ and water', 'ADP and NADP⁺'], correct: 'ATP and NADPH' },
      { question: 'In which part of the chloroplast does the Calvin cycle take place?', options: ['Thylakoid membrane', 'Stroma', 'Grana', 'Outer membrane'], correct: 'Stroma' },
    ]
  },
  {
    id: 14,
    title: 'Respiration in Plants',
    summary: 'An exploration of how plants break down glucose to release stored energy through glycolysis, the Krebs cycle, and oxidative phosphorylation.',
    detailedExplanation: "This chapter explains how plants, like animals, perform cellular respiration to generate ATP, the energy currency of the cell. It details the step-by-step breakdown of glucose through glycolysis in the cytoplasm. It then follows the product, pyruvate, into the mitochondria for the Krebs cycle (aerobic respiration). The chapter culminates in the electron transport system and oxidative phosphorylation, where the majority of ATP is synthesized using oxygen as the final electron acceptor. Anaerobic respiration (fermentation) is also discussed as an alternative pathway in the absence of oxygen.",
    keyTopics: ['Glycolysis', 'Fermentation', 'Aerobic Respiration', 'The Krebs’s Cycle', 'Electron Transport System (ETS)', 'The Respiratory Balance Sheet', 'Respiratory Quotient (RQ)'],
    realWorldExample: 'The fermentation process, used to make wine and beer, is a form of anaerobic respiration carried out by yeast.',
    keyEquation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=00jbG_cfGuQ',
      'https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_General_Biology_(Boundless)/07%3A_Cellular_Respiration',
      'https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Cellular Respiration', url: 'https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation' },
      { title: 'Amoeba Sisters: Cellular Respiration', url: 'https://www.youtube.com/watch?v=4Eo7JtQlgq4' }
    ],
    quiz: [
      { question: 'Glycolysis occurs in the:', options: ['Mitochondrial matrix', 'Cytoplasm', 'Inner mitochondrial membrane', 'Chloroplast'], correct: 'Cytoplasm' },
      { question: 'What is the final electron acceptor in the electron transport system?', options: ['Water', 'Oxygen', 'Cytochrome', 'NAD⁺'], correct: 'Oxygen' },
    ]
  },
  {
    id: 15,
    title: 'Plant Growth and Development',
    summary: 'An overview of the entire life process of a plant from seed to maturity, focusing on the role of plant hormones (PGRs) in controlling these events.',
    detailedExplanation: "This chapter covers the journey of a plant's life. It defines growth, differentiation, and development. The core of the chapter is the study of Plant Growth Regulators (PGRs) or plant hormones. It details the functions of the five major types: auxins (for growth and rooting), gibberellins (for stem elongation), cytokinins (for cell division), abscisic acid (the 'stress hormone'), and ethylene (a gaseous hormone for ripening). It also explains how external factors, specifically light (photoperiodism) and temperature (vernalisation), can influence flowering.",
    keyTopics: ['Growth and Development', 'Differentiation', 'Plant Growth Regulators (PGRs)', 'Auxins, Gibberellins, Cytokinins, Ethylene, ABA', 'Photoperiodism', 'Vernalisation'],
    realWorldExample: 'Spraying fruit with ethylene, a plant hormone, is a common practice to artificially ripen them for the market.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=F2n_24yGH5Y',
      'https://www.biologydiscussion.com/plants/plant-physiology-plants/plant-growth-and-development-meaning-phases-and-measurement/69904',
      'https://bio.libretexts.org/Bookshelves/Botany/Botany_(Ha_Morrow_and_Al-Rowaily)/06%3A_Plant_Physiology/6.04%3A_Plant_Growth_and_Development'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Plant hormones and tropisms', url: 'https://www.khanacademy.org/science/biology/plant-biology/plant-responses-and-hormones/a/plant-hormones' },
      { title: 'BYJU\'S: Plant Growth and Development', url: 'https://byjus.com/biology/plant-growth-and-development/' }
    ],
    quiz: [
      { question: 'Which plant hormone is responsible for apical dominance?', options: ['Auxin', 'Gibberellin', 'Cytokinin', 'Ethylene'], correct: 'Auxin' },
      { question: 'The phenomenon of flowering in response to day length is called:', options: ['Phototropism', 'Photoperiodism', 'Vernalisation', 'Dormancy'], correct: 'Photoperiodism' },
    ]
  },
  {
    id: 16,
    title: 'Digestion and Absorption',
    summary: 'A journey through the human digestive system, explaining how food is mechanically and chemically broken down and how nutrients are absorbed.',
    detailedExplanation: "This chapter details the process by which complex food substances are converted into simple absorbable forms. It describes the anatomy of the human alimentary canal (from mouth to anus) and the associated digestive glands (salivary glands, liver, pancreas). The chapter then explains the digestion of major biomolecules—carbohydrates, proteins, and fats—through the action of various enzymes at different parts of the digestive tract. Finally, it covers the process of absorption of these digested products in the small intestine and discusses common disorders of the digestive system.",
    keyTopics: ['Digestive System', 'Alimentary Canal and Glands', 'Digestion of Food', 'Absorption of Digested Products', 'Disorders of Digestive System'],
    realWorldExample: 'Lactose intolerance is a common disorder where the body cannot produce enough lactase enzyme to digest the sugar in milk.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=zrffA6y29zg',
      'https://www.visiblebody.com/learn/digestive',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/21%3A_Digestive_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Digestive System', url: 'https://www.visiblebody.com/learn/digestive' },
      { title: 'Crash Course A&P: Digestive System', url: 'https://www.youtube.com/watch?v=y3zw-p8MB1w' }
    ],
    quiz: [
      { question: 'The digestion of proteins begins in the:', options: ['Mouth', 'Stomach', 'Small intestine', 'Large intestine'], correct: 'Stomach' },
      { question: 'Bile is produced by the:', options: ['Pancreas', 'Gallbladder', 'Liver', 'Stomach'], correct: 'Liver' },
    ]
  },
  {
    id: 17,
    title: 'Breathing and Exchange of Gases',
    summary: 'An exploration of the human respiratory system, the mechanics of breathing, and how gases are exchanged in the lungs and transported in the blood.',
    detailedExplanation: "This chapter covers the process of gaseous exchange. It describes the human respiratory system, including the lungs and the air passages. The mechanism of breathing (inhalation and exhalation) is explained based on the pressure gradients created by the diaphragm and intercostal muscles. The chapter details the exchange of O₂ and CO₂ at the alveoli and tissues, driven by partial pressure differences. It also explains how these gases are transported in the blood, focusing on the role of hemoglobin. The neural regulation of respiration and common respiratory disorders are also discussed.",
    keyTopics: ['Respiratory Organs', 'Mechanism of Breathing', 'Exchange of Gases', 'Transport of Gases (O₂ and CO₂)', 'Regulation of Respiration', 'Disorders of Respiratory System'],
    realWorldExample: 'Asthma is a respiratory disorder characterized by inflammation of the airways, making breathing difficult.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=kacyaEXqVhs',
      'https://www.visiblebody.com/learn/respiratory',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/22%3A_Respiratory_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Respiratory System', url: 'https://www.visiblebody.com/learn/respiratory' },
      { title: 'Khan Academy: The respiratory system', url: 'https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology/respiratory-system-introduction/a/the-respiratory-system' }
    ],
    quiz: [
      { question: 'The primary site of gas exchange in the lungs is the:', options: ['Trachea', 'Bronchi', 'Bronchioles', 'Alveoli'], correct: 'Alveoli' },
      { question: 'Most of the oxygen in the blood is transported by:', options: ['Dissolving in plasma', 'Binding to hemoglobin', 'Converting to bicarbonate', 'Binding to WBCs'], correct: 'Binding to hemoglobin' },
    ]
  },
  {
    id: 18,
    title: 'Body Fluids and Circulation',
    summary: 'A detailed look at the human circulatory system, including the components of blood, the structure and function of the heart, and the cardiac cycle.',
    detailedExplanation: "This chapter describes the transport system of the body. It details the composition and functions of blood (plasma and formed elements) and lymph. The structure of the human heart is explained in detail, along with the pathway of blood through the four chambers (double circulation). The chapter explains the cardiac cycle, heart sounds, and how the electrical activity of the heart is recorded using an ECG. It also covers the regulation of cardiac activity and common circulatory disorders like hypertension and coronary artery disease.",
    keyTopics: ['Blood and Lymph', 'Circulatory Pathways', 'Human Circulatory System', 'Cardiac Cycle', 'Electrocardiograph (ECG)', 'Double Circulation', 'Disorders of Circulatory System'],
    realWorldExample: 'An electrocardiogram (ECG) is a medical test that records the electrical activity of the heart, helping to diagnose heart problems.',
    keyEquation: 'Cardiac Output = Stroke Volume × Heart Rate',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=gnj2_8-aV-c',
      'https://www.visiblebody.com/learn/circulatory',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/23%3A_Circulatory_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Circulatory System', url: 'https://www.visiblebody.com/learn/circulatory' },
      { title: 'Crash Course A&P: The Heart', url: 'https://www.youtube.com/watch?v=CWFyxn0qDEU' }
    ],
    quiz: [
      { question: 'The "pacemaker" of the heart is the:', options: ['AV node', 'SA node', 'Purkinje fibers', 'Bundle of His'], correct: 'SA node' },
      { question: 'Which blood vessels carry blood away from the heart?', options: ['Arteries', 'Veins', 'Capillaries', 'Venuoles'], correct: 'Arteries' },
    ]
  },
  {
    id: 19,
    title: 'Excretory Products and their Elimination',
    summary: 'An exploration of the human urinary system, the process of urine formation, and the kidney\'s role in regulating water and salt balance.',
    detailedExplanation: "This chapter focuses on the elimination of metabolic wastes from the body. It describes the structure of the human excretory system, with a focus on the kidneys and their functional units, the nephrons. The three main steps of urine formation—glomerular filtration, tubular reabsorption, and tubular secretion—are explained in detail. The chapter also covers the counter-current mechanism for concentrating urine. The hormonal regulation of kidney function (by ADH and RAAS) and disorders related to the excretory system are also discussed.",
    keyTopics: ['Human Excretory System', 'Urine Formation', 'Function of the Tubules', 'Mechanism of Concentration of Filtrate', 'Regulation of Kidney Function', 'Disorders of the Excretory System'],
    realWorldExample: 'Kidney dialysis is a medical procedure that artificially filters waste products from the blood when the kidneys fail.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=oCQ-5g60-pE',
      'https://www.visiblebody.com/learn/urinary',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/24%3A_Urinary_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Urinary System', url: 'https://www.visiblebody.com/learn/urinary' },
      { title: 'Khan Academy: The kidney and nephron', url: 'https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology/urinary-system/a/the-kidney-and-nephron' }
    ],
    quiz: [
      { question: 'The functional unit of the kidney is the:', options: ['Neuron', 'Nephron', 'Alveolus', 'Villus'], correct: 'Nephron' },
      { question: 'The first step in urine formation is:', options: ['Tubular secretion', 'Tubular reabsorption', 'Glomerular filtration', 'Micturition'], correct: 'Glomerular filtration' },
    ]
  },
  {
    id: 20,
    title: 'Locomotion and Movement',
    summary: 'A study of the human musculoskeletal system, including the structure of bones and joints, and the mechanism of muscle contraction.',
    detailedExplanation: "This chapter covers the systems responsible for movement. It describes the human skeletal system, including the axial and appendicular skeletons, and classifies the different types of joints. The main focus is on the muscular system. It details the structure of a skeletal muscle, down to the level of the sarcomere. The sliding filament theory is explained as the mechanism for muscle contraction, outlining the roles of actin, myosin, and calcium ions. The chapter concludes with a discussion of common disorders of the muscular and skeletal systems like arthritis and osteoporosis.",
    keyTopics: ['Types of Movement', 'Muscle and Muscle Contraction', 'Sliding Filament Theory', 'Skeletal System', 'Joints', 'Disorders of Muscular and Skeletal System'],
    realWorldExample: 'Weightlifting causes muscle hypertrophy, an increase in the size of muscle cells, which is a direct application of understanding muscle physiology.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=I80s6i97L10',
      'https://www.visiblebody.com/learn/musculoskeletal',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/19%3A_Muscular_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Musculoskeletal System', url: 'https://www.visiblebody.com/learn/musculoskeletal' },
      { title: 'Crash Course A&P: The Skeletal System', url: 'https://www.youtube.com/watch?v=r-d2h4_s-0I' }
    ],
    quiz: [
      { question: 'The contractile proteins of a muscle fiber are:', options: ['Actin and myosin', 'Troponin and tropomyosin', 'Collagen and elastin', 'Keratin and melanin'], correct: 'Actin and myosin' },
      { question: 'The longest and strongest bone in the human body is the:', options: ['Humerus', 'Tibia', 'Femur', 'Vertebral column'], correct: 'Femur' },
    ]
  },
  {
    id: 21,
    title: 'Neural Control and Coordination',
    summary: 'A deep dive into the human nervous system, from the structure of a neuron and nerve impulse transmission to the functions of the brain and sensory organs.',
    detailedExplanation: "This chapter explains the body's rapid control and coordination system. It describes the structure of a neuron, the functional unit of the nervous system. The generation and conduction of a nerve impulse (action potential) along an axon and its transmission across a synapse via neurotransmitters are detailed. The chapter provides an overview of the human neural system, differentiating between the central (CNS) and peripheral (PNS) systems. It outlines the major parts of the brain and their functions, the reflex arc, and concludes with the anatomy and physiology of the eye and ear.",
    keyTopics: ['Neuron and Nerve Impulse', 'Synapse', 'Central Neural System (Brain and Spinal Cord)', 'Reflex Action and Reflex Arc', 'Sensory Reception (Eye and Ear)'],
    realWorldExample: 'The reflex action of quickly pulling your hand away from a hot object is a protective mechanism coordinated by the spinal cord.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=xRkPN-2G9lo',
      'https://www.visiblebody.com/learn/nervous',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/18%3A_Nervous_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Nervous System', url: 'https://www.visiblebody.com/learn/nervous' },
      { title: 'Khan Academy: Human nervous system', url: 'https://www.khanacademy.org/science/biology/human-biology/neuron-nervous-system/a/overview-of-the-nervous-system' }
    ],
    quiz: [
      { question: 'The part of the neuron that receives signals is the:', options: ['Axon', 'Dendrite', 'Soma', 'Myelin sheath'], correct: 'Dendrite' },
      { question: 'The part of the human brain responsible for balance and coordination is the:', options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Pons'], correct: 'Cerebellum' },
    ]
  },
  {
    id: 22,
    title: 'Chemical Coordination and Integration',
    summary: 'An exploration of the endocrine system, the ductless glands that secrete hormones to regulate long-term processes like growth, metabolism, and reproduction.',
    detailedExplanation: "This chapter covers the body's other control system, which uses chemical messengers called hormones. It describes the major endocrine glands of the human body, including the hypothalamus, pituitary (the 'master gland'), thyroid, adrenal glands, and pancreas. For each gland, the hormones they secrete and their specific functions are detailed. The chapter explains the mechanism of hormone action, distinguishing between how protein-based and steroid-based hormones interact with target cells. Disorders related to hormonal imbalances, such as diabetes and goitre, are also discussed.",
    keyTopics: ['Endocrine Glands and Hormones', 'Human Endocrine System', 'Hormones of Heart, Kidney and GI Tract', 'Mechanism of Hormone Action'],
    realWorldExample: 'Diabetes mellitus is a disorder of the endocrine system caused by a deficiency of the hormone insulin, which regulates blood sugar.',
    keyEquation: '',
    icon: 'dna',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=vLdNX5Te1Xo',
      'https://www.visiblebody.com/learn/endocrine',
      'https://bio.libretexts.org/Bookshelves/Human_Biology/Book%3A_Human_Biology_(Wakim_and_Grewal)/20%3A_Endocrine_System'
    ],
    resourceLinks: [
      { title: 'Visible Body: Learn The Endocrine System', url: 'https://www.visiblebody.com/learn/endocrine' },
      { title: 'Crash Course A&P: Endocrine System', url: 'https://www.youtube.com/watch?v=vLdNX5Te1Xo' }
    ],
    quiz: [
      { question: 'Which gland is known as the "master gland"?', options: ['Thyroid', 'Adrenal', 'Pituitary', 'Pancreas'], correct: 'Pituitary' },
      { question: 'Which hormone is secreted by the adrenal medulla in response to stress?', options: ['Cortisol', 'Aldosterone', 'Adrenaline (Epinephrine)', 'Insulin'], correct: 'Adrenaline (Epinephrine)' },
    ]
  }
];

// =================================================================================
//                            PHYSICS CLASS 11
// =================================================================================
export const physicsXI = [
  {
    id: 1,
    title: 'Physical World',
    summary: 'An introduction to the nature of physics, its scope and excitement, the fundamental forces, and the nature of physical laws.',
    detailedExplanation: "This introductory chapter sets the stage for the study of physics. It defines what physics is and explores its vast scope, from the microscopic world of particles to the macroscopic universe of galaxies. It highlights the relationship between physics, technology, and society. The chapter introduces the four fundamental forces of nature—gravitational, weak nuclear, electromagnetic, and strong nuclear—which govern all phenomena in the universe. It concludes by discussing the nature of physical laws and the importance of conservation principles in physics.",
    keyTopics: ['What is Physics?', 'Scope and Excitement of Physics', 'Fundamental Forces in Nature', 'Nature of Physical Laws'],
    realWorldExample: "The principles of gravity, a fundamental force, explain why planets orbit the sun and how satellites stay in orbit.",
    keyEquation: '',
    icon: 'atom',
    visualizationLinks: [
      'https://www.youtube.com/watch?v=B6li3q6oH94',
      'https://www.fnal.gov/pub/science/particle-physics-101/the-four-forces.html',
      'https://phet.colorado.edu/',
    ],
    resourceLinks: [
      { title: 'Fermilab: The Four Forces', url: 'https://www.fnal.gov/pub/science/particle-physics-101/the-four-forces.html' },
      { title: 'Khan Academy: Introduction to Physics', url: 'https://www.khanacademy.org/science/physics/one-dimensional-motion/introduction-to-physics-sc/v/introduction-to-physics' }
    ],
    quiz: [
      { question: 'Which is the weakest fundamental force in nature?', options: ['Gravitational Force', 'Electromagnetic Force', 'Strong Nuclear Force', 'Weak Nuclear Force'], correct: 'Gravitational Force' },
      { question: 'Which fundamental force is responsible for holding the nucleus together?', options: ['Gravitational', 'Electromagnetic', 'Strong Nuclear', 'Weak Nuclear'], correct: 'Strong Nuclear' },
    ]
  },
  {
    id: 2,
    title: 'Units and Measurement',
    summary: 'A foundational chapter on the international system of units (SI), techniques for measurement, and the crucial analysis of errors and significant figures.',
    detailedExplanation: "Physics is a quantitative science, making measurement essential. This chapter introduces the International System of Units (SI), defining the seven fundamental units. It discusses methods for measuring length, mass, and time. A key focus is on the concepts of accuracy and precision, and the analysis of errors in measurement. The rules for determining significant figures are outlined to ensure proper representation of measurement precision. The chapter concludes with dimensional analysis, a powerful tool for checking the consistency of equations and deriving relationships between physical quantities.",
    keyTopics: ['The International System of Units (SI)', 'Measurement of Length, Mass and Time', 'Accuracy, Precision and Errors', 'Significant Figures', 'Dimensions of Physical Quantities', 'Dimensional Analysis'],
    realWorldExample: 'GPS systems rely on extremely precise time measurements from atomic clocks to determine your location accurately.',
    keyEquation: 'Error (%) = (Δa / a_mean) * 100',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/ruler',
      'https://www.npl.co.uk/si-units',
      'https://www.youtube.com/watch?v=hQpQ0hxVNTg'
    ],
    resourceLinks: [
      { title: 'Khan Academy: Units and Measurement', url: 'https://www.khanacademy.org/science/physics/one-dimensional-motion/units-and-measurements/v/working-with-units-word-problem' },
      { title: 'NIST: The International System of Units (SI)', url: 'https://www.nist.gov/pml/weights-and-measures/metric-si/si-units' }
    ],
    quiz: [
      { question: 'What is the SI unit for electric current?', options: ['Volt', 'Ohm', 'Ampere', 'Watt'], correct: 'Ampere' },
      { question: 'The dimensional formula for Force is:', options: ['[MLT⁻²]', '[ML²T⁻²]', '[ML⁻¹T⁻²]', '[MLT⁻¹]'], correct: '[MLT⁻²]' },
    ]
  },
  {
    id: 3,
    title: 'Motion in a Straight Line',
    summary: 'An introduction to kinematics, describing the motion of objects along a straight line using concepts of displacement, velocity, and acceleration.',
    detailedExplanation: "This chapter lays the foundation for describing motion. It distinguishes between scalar quantities like distance and speed, and vector quantities like displacement and velocity. The concept of acceleration as the rate of change of velocity is introduced. A central part of the chapter is the derivation and application of the three kinematic equations for uniformly accelerated motion, which allow us to predict the position and velocity of an object at any time. The concept of relative velocity is also explored to describe motion as seen from different frames of reference.",
    keyTopics: ['Position, Displacement, and Path Length', 'Average and Instantaneous Velocity', 'Acceleration', 'Kinematic Equations for Uniformly Accelerated Motion', 'Relative Velocity'],
    realWorldExample: 'A car accelerating from rest on a straight road can be described using the kinematic equations of motion.',
    keyEquation: 's = ut + ½at²',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/moving-man',
      'https://ophysics.com/k.html',
      'https://www.youtube.com/watch?v=r2d36_K2B_c'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: The Moving Man', url: 'https://phet.colorado.edu/en/simulations/moving-man' },
      { title: 'The Physics Classroom: 1-D Kinematics', url: 'https://www.physicsclassroom.com/class/1DKin' }
    ],
    quiz: [
      { question: 'The slope of a position-time graph gives:', options: ['Acceleration', 'Displacement', 'Velocity', 'Speed'], correct: 'Velocity' },
      { question: 'The area under a velocity-time graph represents:', options: ['Acceleration', 'Displacement', 'Jerk', 'Average velocity'], correct: 'Displacement' },
    ]
  },
  {
    id: 4,
    title: 'Motion in a Plane',
    summary: 'Extending kinematics to two dimensions by introducing vector analysis to describe projectile motion and uniform circular motion.',
    detailedExplanation: "This chapter expands the study of motion to two dimensions. It begins with a thorough introduction to vectors and their operations (addition, subtraction, and resolution into components). These tools are then applied to analyze motion in a plane. Two key examples are studied in detail: projectile motion, where an object moves under the influence of gravity, following a parabolic path; and uniform circular motion, where an object moves in a circle at a constant speed, experiencing a constant centripetal acceleration towards the center.",
    keyTopics: ['Scalars and Vectors', 'Vector Operations', 'Resolution of Vectors', 'Motion in a Plane', 'Projectile Motion', 'Uniform Circular Motion'],
    realWorldExample: 'A javelin thrown by an athlete follows a parabolic path, which is an example of projectile motion.',
    keyEquation: 'a_c = v²/r',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/projectile-motion',
      'https://phet.colorado.edu/en/simulations/vector-addition',
      'https://www.falstad.com/vectormath/'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Projectile Motion', url: 'https://phet.colorado.edu/en/simulations/projectile-motion' },
      { title: 'Khan Academy: Two-dimensional motion', url: 'https://www.khanacademy.org/science/physics/two-dimensional-motion' }
    ],
    quiz: [
      { question: 'The trajectory of a projectile is a:', options: ['Circle', 'Straight line', 'Parabola', 'Ellipse'], correct: 'Parabola' },
      { question: 'In uniform circular motion, which quantity is constant?', options: ['Velocity', 'Speed', 'Acceleration', 'Force'], correct: 'Speed' },
    ]
  },
  {
    id: 5,
    title: 'Laws of Motion',
    summary: 'A cornerstone of classical mechanics, this chapter introduces Newton\'s three laws of motion, inertia, momentum, and the concept of friction.',
    detailedExplanation: "This chapter delves into the causes of motion, introducing Newton's three fundamental laws. The First Law defines inertia. The Second Law provides a quantitative relationship between force, mass, and acceleration (F=ma). The Third Law describes the nature of action-reaction forces. The concept of momentum and the principle of its conservation are discussed, which are crucial for analyzing collisions and systems like rockets. The chapter also provides a detailed look at friction, distinguishing between static and kinetic friction, and explores the dynamics of circular motion, applying Newton's laws to find the necessary centripetal force.",
    keyTopics: ['Newton’s First Law (Inertia)', 'Newton’s Second Law (F=ma)', 'Newton’s Third Law (Action-Reaction)', 'Conservation of Momentum', 'Friction', 'Dynamics of Circular Motion'],
    realWorldExample: 'When a car suddenly stops, passengers lurch forward due to inertia, as described by Newton\'s First Law.',
    keyEquation: 'F = ma',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/forces-and-motion-basics',
      'https://phet.colorado.edu/en/simulations/friction',
      'https://ophysics.com/f.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Forces and Motion Basics', url: 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics' },
      { title: 'Crash Course Physics: Newton\'s Laws', url: 'https://www.youtube.com/watch?v=kKKM8Y-u7ds' }
    ],
    quiz: [
      { question: 'Newton\'s first law of motion is also known as the law of:', options: ['Action-Reaction', 'Inertia', 'Momentum', 'Force'], correct: 'Inertia' },
      { question: 'A rocket works on the principle of:', options: ['Conservation of energy', 'Conservation of mass', 'Conservation of momentum', 'Newton\'s first law'], correct: 'Conservation of momentum' },
    ]
  },
  {
    id: 6,
    title: 'Work, Energy and Power',
    summary: 'Defining the concepts of work, kinetic and potential energy, and power, and establishing the fundamental principle of conservation of energy.',
    detailedExplanation: "This chapter introduces the crucial concepts of work and energy. Work is defined as the product of force and displacement. The chapter introduces kinetic energy (the energy of motion) and potential energy (stored energy due to position or configuration). The powerful Work-Energy Theorem connects the work done on an object to the change in its kinetic energy. The principle of conservation of mechanical energy is established for conservative forces. The chapter also defines power as the rate at which work is done and analyzes different types of collisions (elastic and inelastic) using the principles of conservation of momentum and energy.",
    keyTopics: ['Work', 'Kinetic Energy', 'Potential Energy', 'The Work-Energy Theorem', 'Conservation of Mechanical Energy', 'Power', 'Collisions'],
    realWorldExample: 'A roller coaster demonstrates the conversion between potential energy (at the top of a hill) and kinetic energy (at the bottom).',
    keyEquation: 'W = ΔKE',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/energy-skate-park-basics',
      'https://phet.colorado.edu/en/simulations/work-energy-and-power',
      'https://ophysics.com/e.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Energy Skate Park', url: 'https://phet.colorado.edu/en/simulations/energy-skate-park-basics' },
      { title: 'Khan Academy: Work and Energy', url: 'https://www.khanacademy.org/science/physics/work-and-energy' }
    ],
    quiz: [
      { question: 'The work-energy theorem states that the work done is equal to the change in an object\'s:', options: ['Potential energy', 'Kinetic energy', 'Momentum', 'Velocity'], correct: 'Kinetic energy' },
      { question: 'In an elastic collision, which of the following is conserved?', options: ['Kinetic energy only', 'Momentum only', 'Both kinetic energy and momentum', 'Neither'], correct: 'Both kinetic energy and momentum' },
    ]
  },
  {
    id: 7,
    title: 'System of Particles and Rotational Motion',
    summary: 'Extending mechanics from point masses to extended bodies, introducing center of mass, torque, moment of inertia, and angular momentum.',
    detailedExplanation: "This chapter moves from the motion of single particles to the motion of rigid bodies. It introduces the concept of the center of mass to describe the overall motion of a system. The chapter then dives into rotational motion, defining rotational analogues for displacement (angle), velocity (angular velocity), and acceleration (angular acceleration). The concepts of torque (the rotational equivalent of force) and moment of inertia (the rotational equivalent of mass) are introduced. A key focus is the law of conservation of angular momentum, which explains phenomena like a spinning ice skater changing their speed.",
    keyTopics: ['Centre of Mass', 'Moment of Inertia', 'Theorems of Perpendicular and Parallel Axes', 'Torque and Angular Momentum', 'Conservation of Angular Momentum', 'Rolling Motion'],
    realWorldExample: 'An ice skater spins faster by pulling their arms in, demonstrating the conservation of angular momentum.',
    keyEquation: 'τ = Iα',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/torque',
      'https://ophysics.com/r.html',
      'https://www.myphysicslab.com/rigid-body/rolling-disc-en.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Torque', url: 'https://phet.colorado.edu/en/simulations/torque' },
      { title: 'The Physics Classroom: Rotation and Moment of Inertia', url: 'https://www.physicsclassroom.com/class/rotation' }
    ],
    quiz: [
      { question: 'The rotational analogue of force is:', options: ['Moment of inertia', 'Angular momentum', 'Torque', 'Angular velocity'], correct: 'Torque' },
      { question: 'The law of conservation of angular momentum states that if no external torque acts, the total angular momentum is:', options: ['Zero', 'Constant', 'Increasing', 'Decreasing'], correct: 'Constant' },
    ]
  },
  {
    id: 8,
    title: 'Gravitation',
    summary: 'A study of the universal force of gravity, from Kepler\'s laws of planetary motion to the dynamics of satellites and the concept of escape velocity.',
    detailedExplanation: "This chapter explores one of the fundamental forces of nature. It begins with Kepler's empirical laws of planetary motion. Newton's Universal Law of Gravitation is then introduced, providing a physical explanation for Kepler's observations. The chapter discusses the acceleration due to gravity (g) and how it varies with altitude and depth. The concepts of gravitational potential energy, escape velocity (the speed needed to escape a planet's gravitational pull), and the orbital mechanics of Earth satellites, including geostationary satellites, are covered in detail.",
    keyTopics: ['Kepler’s Laws', 'Universal Law of Gravitation', 'Acceleration due to Gravity', 'Gravitational Potential Energy', 'Escape Speed', 'Earth Satellites'],
    realWorldExample: 'Communication satellites orbit the Earth in geostationary orbits, a direct application of gravitational principles.',
    keyEquation: 'F = G * (m1*m2) / r²',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/gravity-and-orbits',
      'https://phet.colorado.edu/en/simulations/gravity-force-lab',
      'https://www.myphysicslab.com/engine2D/gravity-pendulum-en.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Gravity and Orbits', url: 'https://phet.colorado.edu/en/simulations/gravity-and-orbits' },
      { title: 'Khan Academy: Gravitation', url: 'https://www.khanacademy.org/science/physics/gravitation-newtonian' }
    ],
    quiz: [
      { question: 'Kepler\'s first law states that planets move in:', options: ['Circular orbits', 'Elliptical orbits', 'Parabolic orbits', 'Hyperbolic orbits'], correct: 'Elliptical orbits' },
      { question: 'The escape velocity from the Earth\'s surface is approximately:', options: ['7.9 km/s', '11.2 km/s', '9.8 km/s', '1.6 km/s'], correct: '11.2 km/s' },
    ]
  },
  {
    id: 9,
    title: 'Mechanical Properties of Solids',
    summary: 'An exploration of how solid materials deform under external forces, introducing the concepts of stress, strain, and elasticity.',
    detailedExplanation: "This chapter deals with the elastic properties of solid materials. It defines stress as the internal restoring force per unit area and strain as the fractional deformation. Hooke's Law is introduced, which states that for small deformations, stress is proportional to strain. The proportionality constant is the modulus of elasticity. The chapter discusses different types of moduli—Young's modulus (for length), Bulk modulus (for volume), and Shear modulus (for shape). The stress-strain curve for a material is analyzed to understand its elastic and plastic behavior.",
    keyTopics: ['Elasticity and Plasticity', 'Stress and Strain', 'Hooke’s Law', 'Stress-strain Curve', 'Elastic Moduli (Young\'s, Bulk, Shear)'],
    realWorldExample: 'The design of bridges and buildings relies on understanding the stress and strain limits of materials like steel and concrete.',
    keyEquation: 'Stress = Y × Strain',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/masses-and-springs',
      'https://www.youtube.com/watch?v=Gk3-22wA2i4',
      'https://demonstrations.wolfram.com/StressAndStrain/'
    ],
    resourceLinks: [
      { title: 'The Physics Classroom: Elasticity', url: 'https://www.physicsclassroom.com/class/statics/Lesson-4/Elasticity-and-Hooke-s-Law' },
      { title: 'PhET Simulation: Masses & Springs', url: 'https://phet.colorado.edu/en/simulations/masses-and-springs-basics' }
    ],
    quiz: [
      { question: 'The ratio of stress to strain within the elastic limit is called:', options: ['Poisson\'s ratio', 'Modulus of elasticity', 'Bulk modulus', 'Shear modulus'], correct: 'Modulus of elasticity' },
      { question: 'Which of the following is the most elastic?', options: ['Rubber', 'Glass', 'Steel', 'Wood'], correct: 'Steel' },
    ]
  },
  {
    id: 10,
    title: 'Mechanical Properties of Fluids',
    summary: 'A study of fluids at rest (hydrostatics) and in motion (hydrodynamics), covering pressure, buoyancy, viscosity, and Bernoulli\'s principle.',
    detailedExplanation: "This chapter covers the behavior of fluids (liquids and gases). It starts with hydrostatics, introducing pressure, Pascal's law (the basis for hydraulic lifts), and Archimedes' principle (which explains buoyancy). It then explores fluid properties like surface tension (which causes droplets to be spherical) and viscosity (resistance to flow). The second part of the chapter deals with fluid dynamics, introducing the equation of continuity and the famous Bernoulli's principle, which relates pressure, velocity, and height for a moving fluid and explains phenomena like the lift of an airplane wing.",
    keyTopics: ['Pressure and Pascal’s Law', 'Archimedes’ Principle and Buoyancy', 'Viscosity and Stokes’ Law', 'Surface Tension', 'Fluid Dynamics and Bernoulli’s principle'],
    realWorldExample: 'Airplanes generate lift based on Bernoulli\'s principle, where faster-moving air over the wing creates lower pressure.',
    keyEquation: 'P + ½ρv² + ρgh = constant',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/under-pressure',
      'https://phet.colorado.edu/en/simulations/fluid-pressure-and-flow',
      'https://ophysics.com/fl.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Fluid Pressure and Flow', url: 'https://phet.colorado.edu/en/simulations/fluid-pressure-and-flow' },
      { title: 'NASA: Bernoulli\'s Principle', url: 'https://www.grc.nasa.gov/www/k-12/airplane/bern.html' }
    ],
    quiz: [
      { question: 'The working of a hydraulic lift is based on:', options: ['Bernoulli\'s principle', 'Pascal\'s law', 'Archimedes\' principle', 'Stokes\' law'], correct: 'Pascal\'s law' },
      { question: 'Raindrops are spherical due to:', options: ['Viscosity', 'Gravity', 'Atmospheric pressure', 'Surface tension'], correct: 'Surface tension' },
    ]
  },
  {
    id: 11,
    title: 'Thermal Properties of Matter',
    summary: 'A detailed look at heat, temperature, thermal expansion, specific heat, changes of state, and the mechanisms of heat transfer.',
    detailedExplanation: "This chapter explores how matter responds to heat. It defines temperature and introduces different temperature scales. The concepts of thermal expansion of solids, liquids, and gases are discussed. The chapter then delves into calorimetry, defining specific heat capacity and latent heat to quantify the energy required for temperature changes and phase transitions (melting, boiling). Finally, it covers the three modes of heat transfer: conduction (through direct contact), convection (through fluid motion), and radiation (through electromagnetic waves).",
    keyTopics: ['Temperature and Heat', 'Thermal Expansion', 'Specific Heat Capacity', 'Calorimetry', 'Change of State and Latent Heat', 'Heat Transfer (Conduction, Convection, Radiation)'],
    realWorldExample: 'A thermos flask minimizes heat transfer by using a vacuum (to stop conduction/convection) and silvered surfaces (to stop radiation).',
    keyEquation: 'Q = mcΔT',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/states-of-matter-basics',
      'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
      'https://ophysics.com/t.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: States of Matter', url: 'https://phet.colorado.edu/en/simulations/states-of-matter-basics' },
      { title: 'Khan Academy: Thermal physics', url: 'https://www.khanacademy.org/science/physics/thermodynamics' }
    ],
    quiz: [
      { question: 'The process of heat transfer that does not require a medium is:', options: ['Conduction', 'Convection', 'Radiation', 'Advection'], correct: 'Radiation' },
      { question: 'The heat required to change a substance from solid to liquid without any change in temperature is called:', options: ['Specific heat', 'Latent heat of fusion', 'Latent heat of vaporization', 'Heat of sublimation'], correct: 'Latent heat of fusion' },
    ]
  },
  {
    id: 12,
    title: 'Thermodynamics',
    summary: 'Introducing the fundamental laws governing heat and work, defining concepts like internal energy and entropy, and exploring heat engines.',
    detailedExplanation: "This chapter establishes the fundamental laws that govern energy transformations involving heat and work. It starts with the Zeroth Law, which defines temperature. The First Law is a statement of the conservation of energy, introducing the concept of internal energy. The chapter explores various thermodynamic processes (isothermal, adiabatic, isochoric, isobaric). The Second Law introduces the concept of entropy and sets limits on the efficiency of converting heat into work, explaining why perpetual motion machines are impossible. The working of heat engines and refrigerators, including the idealized Carnot engine, is also discussed.",
    keyTopics: ['Zeroth Law of Thermodynamics', 'First Law of Thermodynamics', 'Heat, Internal Energy and Work', 'Thermodynamic Processes', 'Second Law of Thermodynamics', 'Heat Engines and Refrigerators'],
    realWorldExample: 'A car engine is a heat engine that converts the chemical energy of fuel into mechanical work, governed by the laws of thermodynamics.',
    keyEquation: 'ΔU = Q - W',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/gas-properties',
      'https://phet.colorado.edu/en/simulations/reversible-reactions',
      'https://ophysics.com/t.html'
    ],
    resourceLinks: [
      { title: 'Crash Course Physics: Thermodynamics', url: 'https://www.youtube.com/watch?v=z2-zP8YyIeE' },
      { title: 'NASA: What is Thermodynamics?', url: 'https://www.grc.nasa.gov/www/k-12/airplane/thermo.html' }
    ],
    quiz: [
      { question: 'The first law of thermodynamics is a statement of the conservation of:', options: ['Energy', 'Mass', 'Momentum', 'Charge'], correct: 'Energy' },
      { question: 'In an adiabatic process, what is zero?', options: ['Change in internal energy (ΔU)', 'Work done (W)', 'Heat exchange (Q)', 'Change in temperature (ΔT)'], correct: 'Heat exchange (Q)' },
    ]
  },
  {
    id: 13,
    title: 'Kinetic Theory',
    summary: 'A microscopic view of gases, linking macroscopic properties like pressure and temperature to the average motion of their constituent molecules.',
    detailedExplanation: "This chapter provides a microscopic model to explain the macroscopic behavior of gases. It is based on the idea that a gas consists of a large number of molecules in constant, random motion. The theory derives an expression for the pressure exerted by a gas based on molecular collisions and shows that the absolute temperature of a gas is a measure of the average kinetic energy of its molecules. It also introduces the law of equipartition of energy to discuss the specific heats of gases and the concept of the mean free path, the average distance a molecule travels between collisions.",
    keyTopics: ['Molecular Nature of Matter', 'Behaviour of Gases', 'Kinetic Theory of an Ideal Gas', 'Law of Equipartition of Energy', 'Specific Heat Capacity', 'Mean Free Path'],
    realWorldExample: 'The pressure inside a tire increases on a hot day because the gas molecules inside move faster and collide more forcefully with the tire walls.',
    keyEquation: 'KE_avg = (3/2)kT',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/gas-properties',
      'https://www.myphysicslab.com/ideal-gas/ideal-gas-en.html',
      'https://ophysics.com/k.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Gas Properties', url: 'https://phet.colorado.edu/en/simulations/gas-properties' },
      { title: 'HyperPhysics: Kinetic Theory', url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/kinetic/kinthe.html' }
    ],
    quiz: [
      { question: 'The kinetic theory of gases assumes that collisions between molecules are:', options: ['Perfectly elastic', 'Perfectly inelastic', 'Partially elastic', 'Adiabatic'], correct: 'Perfectly elastic' },
      { question: 'The absolute temperature of a gas is proportional to the:', options: ['Average potential energy', 'Average kinetic energy', 'Total energy', 'Mass of the molecules'], correct: 'Average kinetic energy' },
    ]
  },
  {
    id: 14,
    title: 'Oscillations',
    summary: 'A detailed study of periodic motion, focusing on Simple Harmonic Motion (SHM) as a model for systems like pendulums and mass-spring systems.',
    detailedExplanation: "This chapter focuses on a specific type of periodic motion called oscillation. The most fundamental type, Simple Harmonic Motion (SHM), is analyzed in detail. SHM occurs when the restoring force is directly proportional to the displacement from the mean position. The chapter derives equations for displacement, velocity, and acceleration in SHM and discusses the energy conservation in oscillating systems. It applies these concepts to real-world examples like a simple pendulum and a mass-spring system. The effects of damping and the phenomenon of resonance are also explored.",
    keyTopics: ['Periodic and Oscillatory Motions', 'Simple Harmonic Motion (SHM)', 'Energy in SHM', 'Systems Executing SHM', 'Damped Oscillations', 'Forced Oscillations and Resonance'],
    realWorldExample: 'A child on a swing is an example of a simple pendulum, which exhibits simple harmonic motion for small amplitudes.',
    keyEquation: 'F = -kx',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/masses-and-springs',
      'https://phet.colorado.edu/en/simulations/pendulum-lab',
      'https://ophysics.com/o.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Masses and Springs', url: 'https://phet.colorado.edu/en/simulations/masses-and-springs' },
      { title: 'The Physics Classroom: Vibrations and Waves', url: 'https://www.physicsclassroom.com/class/waves' }
    ],
    quiz: [
      { question: 'In Simple Harmonic Motion (SHM), the restoring force is proportional to the:', options: ['Velocity', 'Acceleration', 'Displacement', 'Time period'], correct: 'Displacement' },
      { question: 'What is resonance?', options: ['Driving a system at its natural frequency', 'Damping of oscillations', 'Starting of oscillations', 'A type of motion'], correct: 'Driving a system at its natural frequency' },
    ]
  },
  {
    id: 15,
    title: 'Waves',
    summary: 'An introduction to the properties and behavior of mechanical waves, including superposition, reflection, standing waves, and the Doppler effect.',
    detailedExplanation: "This chapter deals with the propagation of disturbances, or waves. It distinguishes between transverse and longitudinal waves and provides the mathematical description of a traveling wave. The principle of superposition is introduced to explain what happens when waves meet, leading to phenomena like interference, the formation of standing waves, and beats. The chapter also discusses the reflection of waves from boundaries and concludes with the Doppler effect, the apparent change in frequency of a wave due to relative motion between the source and the observer.",
    keyTopics: ['Transverse and Longitudinal Waves', 'Displacement Relation of a Wave', 'The Speed of a Travelling Wave', 'Principle of Superposition', 'Reflection of Waves', 'Beats', 'Doppler Effect'],
    realWorldExample: 'The changing pitch of a siren on a moving ambulance is an example of the Doppler effect.',
    keyEquation: 'v = fλ',
    icon: 'atom',
    visualizationLinks: [
      'https://phet.colorado.edu/en/simulations/wave-on-a-string',
      'https://phet.colorado.edu/en/simulations/sound',
      'https://ophysics.com/w.html'
    ],
    resourceLinks: [
      { title: 'PhET Simulation: Wave on a String', url: 'https://phet.colorado.edu/en/simulations/wave-on-a-string' },
      { title: 'Khan Academy: Waves and sound', url: 'https://www.khanacademy.org/science/physics/waves-and-sound' }
    ],
    quiz: [
      { question: 'Sound waves in air are an example of:', options: ['Transverse waves', 'Longitudinal waves', 'Electromagnetic waves', 'Matter waves'], correct: 'Longitudinal waves' },
      { question: 'The Doppler effect is the apparent change in:', options: ['Frequency due to relative motion', 'Amplitude due to distance', 'Speed due to the medium', 'Wavelength due to reflection'], correct: 'Frequency due to relative motion' },
    ]
  }
];
export const modulesData11 = {
  chemistryXI,
  biologyXI,
  physicsXI,
};