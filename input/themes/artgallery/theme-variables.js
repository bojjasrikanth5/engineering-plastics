/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function (params) {
  let fontParams = {
    'system-ui': {
      name: 'SystemUI',
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      hasItalic: false
    },
    'adventpro': {
      name: 'Advent Pro',
      family: '\'Advent Pro\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'aleo': {
      name: 'Aleo',
      family: '\'Aleo\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'andadapro': {
      name: 'Andada Pro',
      family: '\'Andada Pro\', serif',
      weight: '400 840',
      hasItalic: true
    },
    'antonio': {
      name: 'Antonio',
      family: '\'Antonio\', sans-serif',
      weight: '100 700',
      hasItalic: false
    },
    'archivonarrow': {
      name: 'Archivo Narrow',
      family: '\'Archivo Narrow\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'asap': {
      name: 'Asap',
      family: '\'Asap\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'assistant': {
      name: 'Assistant',
      family: '\'Assistant\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'besley': {
      name: 'Besley',
      family: '\'Besley\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'bitter': {
      name: 'Bitter',
      family: '\'Bitter\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'brygada1918': {
      name: 'Brygada 1918',
      family: '\'Brygada 1918\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'cabin': {
      name: 'Cabin',
      family: '\'Cabin\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'cairo': {
      name: 'Cairo',
      family: '\'Cairo\', sans-serif',
      weight: '200 1000',
      hasItalic: false
    },
    'comfortaa': {
      name: 'Comfortaa',
      family: '\'Comfortaa\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'dancingscript': {
      name: 'Dancing Script',
      family: '\'Dancing Script\', cursive',
      weight: '400 700',
      hasItalic: false
    },
    'dosis': {
      name: 'Dosis',
      family: '\'Dosis\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'domine': {
      name: 'Domine',
      family: '\'Domine\', serif',
      weight: '400 700',
      hasItalic: false
    },
    'exo': {
      name: 'Exo',
      family: '\'Exo\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'faustina': {
      name: 'Faustina',
      family: '\'Faustina\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'figtree': {
      name: 'Figtree',
      family: '\'Figtree\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'frankruhllibre': {
      name: 'Frank Ruhl Libre',
      family: '\'Frank Ruhl Libre\', serif',
      weight: '300 900',
      hasItalic: false
    },
    'glory': {
      name: 'Glory',
      family: '\'Glory\', sans-serif',
      weight: '100 800',
      hasItalic: true
    },
    'gluten': {
      name: 'Gluten',
      family: '\'Gluten\', cursive',
      weight: '100 900',
      hasItalic: false
    },
    'heebo': {
      name: 'Heebo',
      family: '\'Heebo\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'imbue': {
      name: 'Imbue',
      family: '\'Imbue\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'instrumentsans': {
      name: 'Instrument Sans',
      family: '\'Instrument Sans\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'jetbrainsmono': {
      name: 'JetBrains Mono',
      family: '\'JetBrains Mono\', monospace',
      weight: '100 800',
      hasItalic: true
    },
    'jura': {
      name: 'Jura',
      family: '\'Jura\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'karla': {
      name: 'Karla',
      family: '\'Karla\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'kreon': {
      name: 'Kreon',
      family: '\'Kreon\', serif',
      weight: '300 700',
      hasItalic: false
    },
    'labrada': {
      name: 'Labrada',
      family: '\'Labrada\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'lemonada': {
      name: 'Lemonada',
      family: '\'Lemonada\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'lexend': {
      name: 'Lexend',
      family: '\'Lexend\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'librefranklin': {
      name: 'Libre Franklin',
      family: '\'Libre Franklin\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'lora': {
      name: 'Lora',
      family: '\'Lora\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'manuale': {
      name: 'Manuale',
      family: '\'Manuale\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'manrope': {
      name: 'Manrope',
      family: '\'Manrope\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'mavenpro': {
      name: 'Maven Pro',
      family: '\'Maven Pro\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'merriweathersans': {
      name: 'Merriweather Sans',
      family: '\'Merriweather Sans\', sans-serif',
      weight: '300 800',
      hasItalic: true
    },
    'montserrat': {
      name: 'Montserrat',
      family: '\'Montserrat\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'nunito': {
      name: 'Nunito',
      family: '\'Nunito\', sans-serif',
      weight: '200 1000',
      hasItalic: true
    },
    'orbitron': {
      name: 'Orbitron',
      family: '\'Orbitron\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'oswald': {
      name: 'Oswald',
      family: '\'Oswald\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'petrona': {
      name: 'Petrona',
      family: '\'Petrona\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'playfairdisplay': {
      name: 'Playfair Display',
      family: '\'Playfair Display\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'plusjakartasans': {
      name: 'Plus Jakarta Sans',
      family: '\'Plus Jakarta Sans\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'publicsans': {
      name: 'Public Sans',
      family: '\'Public Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'quicksand': {
      name: 'Quicksand',
      family: '\'Quicksand\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'raleway': {
      name: 'Raleway',
      family: '\'Raleway\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'redhatdisplay': {
      name: 'Red Hat Display',
      family: '\'Red Hat Display\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'redhatmono': {
      name: 'Red Hat Mono',
      family: '\'Red Hat Mono\', monospace',
      weight: '300 700',
      hasItalic: true
    },
    'robotoflex': {
      name: 'Roboto Flex',
      family: '\'Roboto Flex\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'robotoslab': {
      name: 'Roboto Slab',
      family: '\'Roboto Slab\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'rokkitt': {
      name: 'Rokkitt',
      family: '\'Rokkitt\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'rubik': {
      name: 'Rubik',
      family: '\'Rubik\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'ruda': {
      name: 'Ruda',
      family: '\'Ruda\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'smoochsans': {
      name: 'Smooch Sans',
      family: '\'Smooch Sans\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'sourcecodepro': {
      name: 'Source Code Pro',
      family: '\'Source Code Pro\', monospace',
      weight: '200 900',
      hasItalic: true
    },
    'spartan': {
      name: 'Spartan',
      family: '\'Spartan\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'urbanist': {
      name: 'Urbanist',
      family: '\'Urbanist\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'worksans': {
      name: 'Work Sans',
      family: '\'Work Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'yanonekaffeesatz': {
      name: 'Yanone Kaffeesatz',
      family: '\'Yanone Kaffeesatz\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'yrsa': {
      name: 'Yrsa',
      family: '\'Yrsa\', serif',
      weight: '300 700',
      hasItalic: true
    }
  };

  let fontBodyName = fontParams[params.fontBody]?.name;
  let fontBodyFamily = fontParams[params.fontBody]?.family;
  let fontBodyWeight = fontParams[params.fontBody]?.weight;
  let fontBodyHasItalic = fontParams[params.fontBody]?.hasItalic;

  let fontHeadingsName = fontParams[params.fontHeadings]?.name;
  let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
  let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
  let fontHeadingsHasItalic = fontParams[params.fontHeadings]?.hasItalic;

  let output = '';
  let loadedFonts = new Set();

  const addFontFace = (key, name, weight, hasItalic) => {
    if (!loadedFonts.has(name)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}.woff2') format('woff2');
          font-weight: ${weight};
          font-display: swap;
          font-style: normal;
        }
      `;
      loadedFonts.add(name);
    }
    if (hasItalic && !loadedFonts.has(`${name}-italic`)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}-italic.woff2') format('woff2');
          font-weight: ${weight}; 
          font-display: swap;
          font-style: italic;
        }
      `;
      loadedFonts.add(`${name}-italic`);
    }
  };

  if (params.fontBody !== 'system-ui') {
    addFontFace(params.fontBody, fontBodyName, fontBodyWeight, params.fontBodyItalic && fontBodyHasItalic);
  }

  if (params.fontHeadings !== 'system-ui') {
    addFontFace(params.fontHeadings, fontHeadingsName, fontHeadingsWeight, params.fontHeadingsItalic && fontHeadingsHasItalic);
  }

  if (params.fontMenu === 'system-ui') {
    params.fontMenu = fontParams['system-ui'].family;
  }

  if (params.fontLogo === 'system-ui') {
    params.fontLogo = fontParams['system-ui'].family;
  }

  // Fluid base font-size
  const minScreen = 20; // rem
  const maxScreen = 133; // rem
  const screenRange = maxScreen - minScreen;
  const minFontSize = params.minFontSize;
  const maxFontSize = params.maxFontSize;
  const fontSizeRange = maxFontSize - minFontSize;
  const fontSizeValue = `clamp(${minFontSize}rem, ${minFontSize}rem + (${fontSizeRange} * ((100vw - ${minScreen}rem) / ${screenRange})), ${maxFontSize}rem)`;

  output += `  
      :root {
        --page-width:           ${params.pageWidth}; 
        --page-margin:          ${params.pageMargin};
        --entry-width:          ${params.postEntryWidth};           
        --header-height:        ${params.navbarHeight}; 
        --hero-height:          ${params.postHeroHeight}; 
        --slider-height:        ${params.heroHeight}; 
        --latest-grid-image-height: ${params.latestGridImageHeight}; 
        --body-font:            ${fontBodyFamily};
        --heading-font:         ${fontHeadingsFamily};
        --logo-font:            ${params.fontLogo};
        --menu-font:            ${params.fontMenu};
        --font-size:            ${fontSizeValue};
        --font-weight-normal:   ${params.fontBodyWeight}; 
        --font-weight-bold:     ${params.fontBoldWeight}; 
        --line-height:          ${params.lineHeight};      
        --letter-spacing:     ${params.letterSpacing}em;
        --heading-1-weight:     ${params.fontH1Weight};
        --headings-weight:    ${params.fontHeadignsWeight};
        --headings-transform: ${params.fontHeadingsTransform};
        --headings-style:     ${params.fontHeadingsStyle};
        --headings-letter-spacing: ${params.fontHeadingsletterSpacing}em;
        --headings-line-height: ${params.fontHeadingsLineHeight};                               
  `;

  if (params.themeColor === 'brown') {
    output += `             
         --dark: #3a3326;
         --gray-0: #443c2d;
         --gray-1: #645842;
         --gray-2: #837357;
         --gray-3: #c3b8a4;
         --light: #eae6df;
         --lighter: #f6f5f2;
         --yellow: #FFC439;
         --red: #EC1037;
         --blue: #3773EB;
         --green: #5CB85C;
         --white: #f6f5f2;
         --white-rgb: 191, 179, 158;
         --primary-color: #BFB39E;
         --secondary-color: #CC6600;
         --section-bg: #f6f5f2;
         --top-bg: #212224;
         --middle-bg: #212224;
         --bottom-bg: #212224;
         --navbar-bg: var(--top-bg);
         --navbar-link-color: var(--primary-color);
         --navbar-link-color-hover: var(--white);
         --navbar-font-weight: var(--font-weight-bold);
         --navbar-button-primary-border: var(--primary-color);
         --navbar-button-primary-border-hover: var(--primary-color);
         --navbar-button-primary-color: var(--primary-color);
         --navbar-button-primary-color-hover: var(--primary-color);
         --navbar-icon: var(--primary-color);
         --navbar-icon-hover: var(--primary-color);
         --navbar-border: rgba(var(--white-rgb), .09);
         --s1-bg: var(--top-bg);
         --s1-text-color: var(--primary-color);
         --s1-headings-color: var(--primary-color);
         --s1-link-color: var(--primary-color);
         --s1-link-color-hover: var(--white);
         --s1-link-invert-color: var(--white);
         --s1-link-invert-color-hover: var(--primary-color);
         --s2-bg: var(--middle-bg);
         --s2-text-color: var(--primary-color);
         --s2-headings-color: var(--primary-color);
         --s2-link-color: var(--primary-color);
         --s2-link-color-hover: var(--white);
         --s2-link-invert-color: var(--white);
         --s2-link-invert-color-hover: var(--primary-color);
         --s2-button-primary-border: var(--primary-color);
         --s2-button-primary-border-hover: var(--white);
         --s2-button-primary-color: var(--primary-color);
         --s2-button-primary-color-hover: var(--white);
         --s2-image-placeholder: #26272a;
         --s3-bg: var(--bottom-bg);
         --s3-text-color: var(--primary-color);
         --s3-headings-color: var(--primary-color);
         --s3-link-color: var(--primary-color);
         --s3-link-color-hover: var(--white);
         --s3-link-invert-color: var(--white);
         --s3-link-invert-color-hover: var(--primary-color);
         --s3-button-primary-border: var(--primary-color);
         --s3-button-primary-border-hover: var(--primary-color);
         --s3-button-primary-color: var(--primary-color);
         --s3-button-primary-color-hover: var(--primary-color);
         --s3-image-overlay: var(--top-bg);
         --s3-image-overlay-hover: var(--primary-color);
         --s3-icon: var(--primary-color);
         --slider-text-color: var(--white);
         --slider-link-color: var(--white);
         --slider-link-color-hover: var(--primary-color);
         --logo-color: var(--primary-color);
         --headings-color: var(--dark);
         --text-color: var(--gray-0);
         --text-color-lighter: var(--gray-1);
         --text-color-lightest: var(--gray-2);
         --link-color: var(--dark);
         --link-color-hover: var(--secondary-color);
         --link-invert-color: var(--secondary-color);
         --link-invert-color-hover: var(--dark);
         --border-color-normal: var(--gray-3);
         --border-color-light: var(--light);
         --border-color-lightest: rgba(var(--white-rgb), .09);
         --button-primary-border: var(--secondary-color);
         --button-primary-color: var(--secondary-color);
         --button-primary-border-hover: var(--dark);
         --button-primary-color-hover: var(--dark);
         --input-background: var(--white);
         --input-border-color: var(--gray-3);
         --input-border-color-focus: var(--secondary-color);
         --input-text-color: var(--gray-1);
         --code-inline-background: var(--light);
         --dropdown-menu-bg: #2f3033;
         --dropdown-menu-link-color: var(--primary-color);
         --dropdown-menu-link-color-hover: var(--white);
         --dropdown-menu-link-background-hover: rgba(var(--white-rgb), .07);
         --mobile-menu-link-background-bg: var(--top-bg);
         --mobile-menu-link-color: var(--primary-color);
         --mobile-menu-link-color-hover: var(--white);
         --icon: var(--gray-1);
         --icon-hover: var(--secondary-color);
         --image-placeholder: var(--light);
         --image-overlay-hover: #212224;
         --highlight-message: var(--gray-3);
         --info-message: #71B8ED;
         --success-message: #5BC68A;
         --warning-message: var(--secondary-color);
         --transition: all 0.24s ease;
            `;
  }

  if (params.themeColor === 'navy') {
    output += `             
         --dark: #272e3e;
         --gray-0: #3d414b;
         --gray-1: #525765;
         --gray-2: #8592b2;
         --gray-3: #cbd1df;
         --light: #f1f2f6;
         --lighter: #f2f3f7;
         --yellow: #FFC439;
         --red: #EC1037;
         --blue: #3773EB;
         --green: #5CB85C;
         --white: #fff;
         --white-rgb: 255, 255, 255;
         --primary-color: #232938;
         --secondary-color: #CC4E30;
         --section-bg: #fff;
         --top-bg: #232938;
         --middle-bg: #FDF8F7;
         --bottom-bg: #232938;
         --navbar-bg: var(--top-bg);
         --navbar-link-color: var(--white);
         --navbar-link-color-hover: var(--secondary-color);
         --navbar-font-weight: var(--font-weight-bold);
         --navbar-button-primary-border: var(--white);
         --navbar-button-primary-border-hover: var(--secondary-color);
         --navbar-button-primary-color: var(--white);
         --navbar-button-primary-color-hover: var(--secondary-color);
         --navbar-icon: var(--white);
         --navbar-icon-hover: var(--secondary-color);
         --navbar-border: rgba(var(--white-rgb), .05);
         --s1-bg: var(--top-bg);
         --s1-text-color: var(--light);
         --s1-headings-color: var(--white);
         --s1-link-color: var(--white);
         --s1-link-color-hover: var(--secondary-color);
         --s1-link-invert-color: var(--white-color);
         --s1-link-invert-color-hover: var(--secondary-color);
         --s2-bg: var(--middle-bg);
         --s2-text-color: var(--primary-color);
         --s2-headings-color: var(--primary-color);
         --s2-link-color: var(--primary-color);
         --s2-link-color-hover: var(--secondary-color);
         --s2-link-invert-color: var(--secondary-color);
         --s2-link-invert-color-hover: var(--primary-color);
         --s2-button-primary-border: var(--primary-color);
         --s2-button-primary-border-hover: var(--secondary-color);
         --s2-button-primary-color: var(--primary-color);
         --s2-button-primary-color-hover: var(--secondary-color);
         --s2-image-placeholder: #fbefed;
         --s3-bg: var(--bottom-bg);
         --s3-text-color: var(--light);
         --s3-headings-color: var(--white);
         --s3-link-color: var(--white);
         --s3-link-color-hover: var(--secondary-color);
         --s3-link-invert-color: var(--secondary-color);
         --s3-link-invert-color-hover: var(--white);
         --s3-button-primary-border: var(--white);
         --s3-button-primary-border-hover: var(--secondary-color);
         --s3-button-primary-color: var(--white);
         --s3-button-primary-color-hover: var(--secondary-color);
         --s3-image-overlay: var(--primary-color);
         --s3-image-overlay-hover: var(--secondary-color);
         --s3-icon: var(--white);
         --slider-text-color: var(--white);
         --slider-link-color: var(--white);
         --slider-link-color-hover: var(--secondary-color);
         --logo-color: var(--white);
         --headings-color: var(--dark);
         --text-color: var(--gray-0);
         --text-color-lighter: var(--gray-1);
         --text-color-lightest: var(--gray-2);
         --link-color: var(--dark);
         --link-color-hover: var(--secondary-color);
         --link-invert-color: var(--secondary-color);
         --link-invert-color-hover: var(--dark);
         --border-color-normal: var(--gray-2);
         --border-color-light: var(--gray-3);
         --border-color-lightest: rgba(var(--white-rgb), .05);
         --button-primary-border: var(--secondary-color);
         --button-primary-color: var(--secondary-color);
         --button-primary-border-hover: var(--dark);
         --button-primary-color-hover: var(--dark);
         --input-background: var(--white);
         --input-border-color: var(--gray-2);
         --input-border-color-focus: var(--secondary-color);
         --input-text-color: var(--gray-1);
         --code-inline-background: #fbefed;
         --dropdown-menu-bg: var(--secondary-color);
         --dropdown-menu-link-color: var(--white);
         --dropdown-menu-link-color-hover: var(--white);
         --dropdown-menu-link-background-hover: rgba(var(--white-rgb), .15);
         --mobile-menu-link-background-bg: var(--top-bg);
         --mobile-menu-link-color: var(--white);
         --mobile-menu-link-color-hover: var(--gray-2);
         --icon: var(--gray-0);
         --icon-hover: var(--secondary-color);
         --image-placeholder: var(--middle-bg);
         --image-overlay-hover: var(--dark);
         --highlight-message: var(--gray-3);
         --info-message: #71B8ED;
         --success-message: #5BC68A;
         --warning-message: var(--secondary-color);
         --transition: all 0.24s ease;
            `;
  }

  if (params.themeColor === 'beige') {
    output += `             
         --dark: #1c2121;
         --gray-0: #3d414b;
         --gray-1: #495053;
         --gray-2: #616b6e;
         --gray-3: #bbc0be;
         --gray-4: #eae6df;
         --light: #fbf7ee;
         --lighter: #fbf7ee;
         --yellow: #df830e;
         --red: #EC1037;
         --blue: #3773EB;
         --green: #5CB85C;
         --white: #fff;
         --white-rgb: 255, 255, 255;
         --primary-color: #525252;
         --secondary-color: #df830e;
         --section-bg: var(--white);
         --top-bg: var(--lighter);
         --middle-bg: var(--lighter);
         --bottom-bg: var(--primary-color);
         --navbar-bg: var(--top-bg);
         --navbar-link-color: var(--gray-1);
         --navbar-link-color-hover: var(--yellow);
         --navbar-font-weight: var(--font-weight-bold);
         --navbar-button-primary-border: var(--primary-color);
         --navbar-button-primary-border-hover: var(--yellow);
         --navbar-button-primary-color: var(--primary-color);
         --navbar-button-primary-color-hover: var(--yellow);
         --navbar-icon: var(--primary-color);
         --navbar-icon-hover: var(--yellow);
         --navbar-border: var(--gray-4);
         --s1-bg: var(--lighter);
         --s1-text-color: var(--gray-1);
         --s1-headings-color: var(--primary-color);
         --s1-link-color: var(--primary-color);
         --s1-link-color-hover: var(--yellow);
         --s1-link-invert-color: var(--primary-color);
         --s1-link-invert-color-hover: var(--yellow);
         --s2-bg: var(--middle-bg);
         --s2-text-color: var(--primary-color);
         --s2-headings-color: var(--primary-color);
         --s2-link-color: var(--primary-color);
         --s2-link-color-hover: var(--yellow);
         --s2-link-invert-color: var(--yellow);
         --s2-link-invert-color-hover: var(--primary-color);
         --s2-button-primary-border: var(--primary-color);
         --s2-button-primary-border-hover: var(--yellow);
         --s2-button-primary-color: var(--primary-color);
         --s2-button-primary-color-hover: var(--yellow);
         --s2-image-placeholder: #f6eeda;
         --s3-bg: var(--bottom-bg);
         --s3-text-color: var(--gray-3);
         --s3-headings-color: var(--white);
         --s3-link-color: var(--gray-3);
         --s3-link-color-hover: var(--yellow);
         --s3-link-invert-color: var(--yellow);
         --s3-link-invert-color-hover: var(--gray-3);
         --s3-button-primary-border: var(--yellow);
         --s3-button-primary-border-hover: var(--white);
         --s3-button-primary-color: var(--yellow);
         --s3-button-primary-color-hover: var(--white);
         --s3-image-overlay: var(--primary-color);
         --s3-image-overlay-hover: var(--yellow);
         --s3-icon: var(--white);
         --slider-text-color: var(--white);
         --slider-link-color: var(--white);
         --slider-link-color-hover: var(--secondary-color);
         --logo-color: var(--gray-0);
         --headings-color: var(--primary-color);
         --text-color: var(--gray-1);
         --text-color-lighter: var(--gray-2);
         --text-color-lightest: var(--gray-2);
         --link-color: var(--primary-color);
         --link-color-hover: var(--secondary-color);
         --link-invert-color: var(--secondary-color);
         --link-invert-color-hover: var(--primary-color);
         --border-color-normal: var(--gray-3);
         --border-color-light: var(--gray-4);
         --border-color-lightest: rgba(var(--white-rgb), .06);
         --button-primary-border: var(--secondary-color);
         --button-primary-color: var(--secondary-color);
         --button-primary-border-hover: var(--dark);
         --button-primary-color-hover: var(--dark);
         --input-background: var(--white);
         --input-border-color: var(--gray-3);
         --input-border-color-focus: var(--secondary-color);
         --input-text-color: var(--gray-1);
         --code-inline-background: #fbefed;
         --dropdown-menu-bg: var(--yellow);
         --dropdown-menu-link-color: var(--white);
         --dropdown-menu-link-color-hover: var(--white);
         --dropdown-menu-link-background-hover: rgba(var(--white-rgb), .2);
         --mobile-menu-link-background-bg: var(--top-bg);
         --mobile-menu-link-color: var(--gray-1);
         --mobile-menu-link-color-hover: var(--secondary-color);
         --icon: var(--gray-0);
         --icon-hover: var(--secondary-color);
         --image-placeholder: var(--middle-bg);
         --image-overlay-hover: var(--dark);
         --highlight-message: var(--gray-3);
         --info-message: #71B8ED;
         --success-message: #5BC68A;
         --warning-message: var(--secondary-color);
         --transition: all 0.24s ease;
            `;
  }

  if (params.themeColor === 'gray') {
    output += `             
         --dark:#1b1d21;
         --gray-0: #24272c;
         --gray-1: #33383f;
         --gray-2: #424751;
         --gray-3: #575f6b;
         --light: #dcdcdc;
         --lighter: #eeeeee;
         --yellow: #f0af4b;
         --red: #EC1037;
         --blue: #3773EB;
         --green: #5CB85C;
         --white: #ededed;
         --white-rgb: 255, 255, 255;
         --primary-color: #393e46;
         --secondary-color: #b55400;
         --section-bg: var(--lighter);
         --top-bg: var(--lighter);
         --middle-bg: #b55400;
         --bottom-bg: var(--primary-color);
         --navbar-bg: var(--top-bg);
         --navbar-link-color: var(--gray-1);
         --navbar-link-color-hover: var(--secondary-color);
         --navbar-font-weight: var(--font-weight-bold);
         --navbar-button-primary-border: var(--primary-color);
         --navbar-button-primary-border-hover: var(--secondary-color);
         --navbar-button-primary-color: var(--primary-color);
         --navbar-button-primary-color-hover: var(--secondary-color);
         --navbar-icon: var(--primary-color);
         --navbar-icon-hover: var(--secondary-color);
         --navbar-border: var(--light);
         --s1-bg: var(--lighter);
         --s1-text-color: var(--gray-3);
         --s1-headings-color: var(--gray-1);
         --s1-link-color: var(--secondary-color);
         --s1-link-color-hover: var(--primary-color);
         --s1-link-invert-color: var(--secondary-color);
         --s1-link-invert-color-hover: var(--primary-color);
         --s2-bg: var(--middle-bg);
         --s2-text-color: var(--white);
         --s2-headings-color: var(--white);
         --s2-link-color: var(--white);
         --s2-link-color-hover: var(--primary-color);
         --s2-link-invert-color: var(--primary-color);
         --s2-link-invert-color-hover: var(--primary-color);
         --s2-button-primary-border: var(--white);
         --s2-button-primary-border-hover: var(--primary-color);
         --s2-button-primary-color: var(--white);
         --s2-button-primary-color-hover: var(--primary-color);
         --s2-image-placeholder: #d2670b;
         --s3-bg: var(--bottom-bg);
         --s3-text-color: var(--light);
         --s3-headings-color: var(--white);
         --s3-link-color: var(--light);
         --s3-link-color-hover: var(--secondary-color);
         --s3-link-invert-color: var(--secondary-color);
         --s3-link-invert-color-hover: var(--light);
         --s3-button-primary-border: var(--light);
         --s3-button-primary-border-hover: var(--secondary-color);
         --s3-button-primary-color: var(--light);
         --s3-button-primary-color-hover: var(--secondary-color);
         --s3-image-overlay: var(--primary-color);
         --s3-image-overlay-hover: var(--secondary-color);
         --s3-icon: var(--white);
         --slider-text-color: var(--white);
         --slider-link-color: var(--white);
         --slider-link-color-hover: var(--secondary-color);
         --logo-color: var(--gray-0);
         --headings-color: var(--gray-1);
         --text-color: var(--gray-2);
         --text-color-lighter: var(--gray-3);
         --text-color-lightest: var(--gray-2);
         --link-color: var(--gray-1);
         --link-color-hover: var(--secondary-color);
         --link-invert-color: var(--secondary-color);
         --link-invert-color-hover: var(--gray-1);
         --border-color-normal: var(--gray-3);
         --border-color-light: var(--light);
         --border-color-lightest: rgba(var(--white-rgb), .12);
         --button-primary-border: var(--secondary-color);
         --button-primary-color: var(--secondary-color);
         --button-primary-border-hover: var(--gray-1);
         --button-primary-color-hover: var(--gray-1);
         --input-background: var(--white);
         --input-border-color: var(--gray-3);
         --input-border-color-focus: var(--secondary-color);
         --input-text-color: var(--gray-1);
         --code-inline-background: var(--light);
         --dropdown-menu-bg: var(--primary-color);
         --dropdown-menu-link-color: var(--white);
         --dropdown-menu-link-color-hover: var(--white);
         --dropdown-menu-link-background-hover: rgba(var(--white-rgb), .05);
         --mobile-menu-link-background-bg: var(--top-bg);
         --mobile-menu-link-color: var(--gray-1);
         --mobile-menu-link-color-hover: var(--secondary-color);
         --icon: var(--gray-0);
         --icon-hover: var(--secondary-color);
         --image-placeholder: var(--light);
         --image-overlay-hover: var(--gray-1);
         --highlight-message: var(--gray-3);
         --info-message: #71B8ED;
         --success-message: #5BC68A;
         --warning-message: var(--secondary-color);
         --transition: all 0.24s ease;
            `;
  }

  output += `
      }`;

  return output;
}

module.exports = generateThemeVariables;