// Visual research, October 20. Do not overwrite listings already named in uppercase.
const RESEARCHED_NAMES = {
  "26049": {
    "previousName": "SAINT LAURENT - LONGCHAMP LO695S CAT - EYE SUNGLASSES (Metallic red)",
    "baseName": "Burgundy Amber-Lens Gold-Temple Cat-Eye Sunglasses",
    "name": "SAINT LAURENT - LONGCHAMP LO695S CAT - EYE SUNGLASSES (METALLIC RED)",
    "familyName": "SAINT LAURENT - LONGCHAMP LO695S CAT - EYE SUNGLASSES (METALLIC RED)",
    "brand": "SAINT LAURENT",
    "description": "SAINT LAURENT - LONGCHAMP LO695S CAT - EYE SUNGLASSES (METALLIC RED). FRAME AND LENS COLOR: BURGUNDY / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26052": {
    "previousName": "SAINT LAURENT - SL M130 (Light beige)",
    "baseName": "Cream Gold-Logo Rectangular Sunglasses",
    "name": "SAINT LAURENT - SL M130 (LIGHT BEIGE)",
    "familyName": "SAINT LAURENT - SL M130 (LIGHT BEIGE)",
    "brand": "SAINT LAURENT",
    "description": "SAINT LAURENT - SL M130 (LIGHT BEIGE). FRAME AND LENS COLOR: CREAM / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26035": {
    "previousName": "Rose Gradient Gold-Hinge Square Sunglasses",
    "baseName": "Rose Gradient Gold-Hinge Square Sunglasses",
    "name": "FENDI ROSE-GRADIENT SQUARE SUNGLASSES WITH GOLD FF HINGES",
    "familyName": "FENDI ROSE-GRADIENT SQUARE SUNGLASSES WITH GOLD FF HINGES",
    "brand": "FENDI",
    "description": "FENDI ROSE-GRADIENT SQUARE SUNGLASSES WITH GOLD FF HINGES. FRAME AND LENS COLOR: ROSE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26037": {
    "previousName": "DOLCE & GABBANNA - DG6202 WHITE FRAME (Orange Gold)",
    "baseName": "Dolce & Gabbana White Coral Visor Sunglasses",
    "name": "DOLCE & GABBANNA - DG6202 WHITE FRAME (ORANGE GOLD)",
    "familyName": "DOLCE & GABBANNA - DG6202 WHITE FRAME (ORANGE GOLD)",
    "brand": "DOLCE & GABBANA",
    "description": "DOLCE & GABBANNA - DG6202 WHITE FRAME (ORANGE GOLD). FRAME AND LENS COLOR: WHITE / CORAL. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26040": {
    "previousName": "DOLCE & GABBANA AVIATOR SUNGLASSES (Purple/Gold)",
    "baseName": "Dolce & Gabbana Purple Gold-Temple Aviator Sunglasses",
    "name": "DOLCE & GABBANA AVIATOR SUNGLASSES (PURPLE/GOLD)",
    "familyName": "DOLCE & GABBANA AVIATOR SUNGLASSES (PURPLE/GOLD)",
    "brand": "DOLCE & GABBANA",
    "description": "DOLCE & GABBANA AVIATOR SUNGLASSES (PURPLE/GOLD). FRAME AND LENS COLOR: PURPLE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26042": {
    "previousName": "Amber Transparent Gold-Detail Square Sunglasses",
    "baseName": "Amber Transparent Gold-Detail Square Sunglasses",
    "name": "DITA LXN-EVO NAVIGATOR SUNGLASSES (AMBER / GOLD)",
    "familyName": "DITA LXN-EVO NAVIGATOR SUNGLASSES (AMBER / GOLD)",
    "brand": "DITA",
    "description": "DITA LXN-EVO NAVIGATOR SUNGLASSES (AMBER / GOLD). FRAME AND LENS COLOR: AMBER / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26043": {
    "previousName": "Fendi Brown Gradient Rimless Square Sunglasses",
    "baseName": "Fendi Brown Gradient Rimless Square Sunglasses",
    "name": "FENDI BROWN GRADIENT RIMLESS SQUARE SUNGLASSES",
    "familyName": "FENDI BROWN GRADIENT RIMLESS SQUARE SUNGLASSES",
    "brand": "FENDI",
    "description": "FENDI BROWN GRADIENT RIMLESS SQUARE SUNGLASSES. FRAME AND LENS COLOR: BROWN / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26044": {
    "previousName": "Black Double-Bridge Aviator Sunglasses",
    "baseName": "Black Double-Bridge Aviator Sunglasses",
    "name": "DITA LXN-EVO NAVIGATOR SUNGLASSES (BLACK)",
    "familyName": "DITA LXN-EVO NAVIGATOR SUNGLASSES (BLACK)",
    "brand": "DITA",
    "description": "DITA LXN-EVO NAVIGATOR SUNGLASSES (BLACK). FRAME AND LENS COLOR: BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26045": {
    "previousName": "Fendi Brown Gradient Letter-Temple Shield Sunglasses",
    "baseName": "Fendi Brown Gradient Letter-Temple Shield Sunglasses",
    "name": "FENDI BROWN GRADIENT LETTER-TEMPLE SHIELD SUNGLASSES",
    "familyName": "FENDI BROWN GRADIENT LETTER-TEMPLE SHIELD SUNGLASSES",
    "brand": "FENDI",
    "description": "FENDI BROWN GRADIENT LETTER-TEMPLE SHIELD SUNGLASSES. FRAME AND LENS COLOR: BROWN / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "25206": {
    "previousName": "Dolce & Gabbana",
    "baseName": "Dolce & Gabbana Purple Rimless Sunglasses",
    "name": "DOLCE & GABBANA DG-LOGO RIMLESS SUNGLASSES (PURPLE / GOLD)",
    "familyName": "DOLCE & GABBANA DG-LOGO RIMLESS SUNGLASSES (PURPLE / GOLD)",
    "brand": "DOLCE & GABBANA",
    "description": "DOLCE & GABBANA DG-LOGO RIMLESS SUNGLASSES (PURPLE / GOLD). FRAME AND LENS COLOR: PURPLE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26004": {
    "previousName": "DOLCE & GABBANA FULL SUIT VISOR SUNGLASSES (Black)",
    "baseName": "Oversized Full-Shield Visor Sunglasses",
    "name": "DOLCE & GABBANA FULL SUIT VISOR SUNGLASSES (BLACK)",
    "familyName": "DOLCE & GABBANA FULL SUIT VISOR SUNGLASSES (BLACK)",
    "brand": "DOLCE & GABBANA",
    "description": "DOLCE & GABBANA FULL SUIT VISOR SUNGLASSES (BLACK). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26005": {
    "previousName": "Brown Full-Shield Visor Sunglasses",
    "baseName": "Brown Full-Shield Visor Sunglasses",
    "name": "BROWN FULL-SHIELD VISOR SUNGLASSES",
    "familyName": "BROWN FULL-SHIELD VISOR SUNGLASSES",
    "brand": "",
    "description": "BROWN FULL-SHIELD VISOR SUNGLASSES. FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26006": {
    "previousName": "DOLCE & GABBANA - SHIELD SUNGLASS (Gold  & White)",
    "baseName": "Gold Decorative Rimless Shield Sunglasses",
    "name": "DOLCE & GABBANA - SHIELD SUNGLASS (GOLD  & WHITE)",
    "familyName": "DOLCE & GABBANA - SHIELD SUNGLASS (GOLD  & WHITE)",
    "brand": "DOLCE & GABBANA",
    "description": "DOLCE & GABBANA - SHIELD SUNGLASS (GOLD  & WHITE). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26009": {
    "previousName": "Christian Dior",
    "baseName": "Olive Oval Sunglasses",
    "name": "DIOR DIORMETEOR B1I CAT-EYE SUNGLASSES (OLIVE / GOLD)",
    "familyName": "DIOR DIORMETEOR B1I CAT-EYE SUNGLASSES (OLIVE / GOLD)",
    "brand": "DIOR",
    "description": "DIOR DIORMETEOR B1I CAT-EYE SUNGLASSES (OLIVE / GOLD). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26010": {
    "previousName": "Christian Dior",
    "baseName": "Purple Gradient D-Temple Square Sunglasses",
    "name": "DIOR INITIALS S2I SQUARE SUNGLASSES (BLACK / PURPLE GRADIENT)",
    "familyName": "DIOR INITIALS S2I SQUARE SUNGLASSES (BLACK / PURPLE GRADIENT)",
    "brand": "DIOR",
    "description": "DIOR INITIALS S2I SQUARE SUNGLASSES (BLACK / PURPLE GRADIENT). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26014": {
    "previousName": "BLVGARI SERPENT - GEOMETRIC SQUARE (Pink/Burgundy)",
    "baseName": "Rose Transparent Square Sunglasses",
    "name": "BVLGARI SERPENT - GEOMETRIC SQUARE (PINK/BURGUNDY)",
    "familyName": "BVLGARI SERPENT - GEOMETRIC SQUARE (PINK/BURGUNDY)",
    "brand": "BVLGARI",
    "description": "BVLGARI SERPENT - GEOMETRIC SQUARE (PINK/BURGUNDY). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26015": {
    "previousName": "BLVGARI SERPENT GRADIENT (Brown Lens)",
    "baseName": "Yellow Oval Sunglasses",
    "name": "BVLGARI SERPENT GRADIENT (BROWN LENS)",
    "familyName": "BVLGARI SERPENT GRADIENT (BROWN LENS)",
    "brand": "BVLGARI",
    "description": "BVLGARI SERPENT GRADIENT (BROWN LENS). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26016": {
    "previousName": "BLVGARI SERPENT BV400601 (Brown/Havana)",
    "baseName": "Brown Slim Logo-Temple Sunglasses",
    "name": "BVLGARI SERPENT BV400601 (BROWN/HAVANA)",
    "familyName": "BVLGARI SERPENT BV400601 (BROWN/HAVANA)",
    "brand": "BVLGARI",
    "description": "BVLGARI SERPENT BV400601 (BROWN/HAVANA). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26017": {
    "previousName": "BLVGARI RIMLESS SUNGLASSES (Brown/Gold)",
    "baseName": "Amber Oval Leopard-Temple Sunglasses",
    "name": "BVLGARI RIMLESS SUNGLASSES (BROWN/GOLD)",
    "familyName": "BVLGARI RIMLESS SUNGLASSES (BROWN/GOLD)",
    "brand": "BVLGARI",
    "description": "BVLGARI RIMLESS SUNGLASSES (BROWN/GOLD). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26018": {
    "previousName": "BULVGARRI SERPENT GRADIENT SUNGLASSES (Gold)",
    "baseName": "Blue Gradient Chain-Temple Square Sunglasses",
    "name": "BVLGARI SERPENT GRADIENT SUNGLASSES (GOLD)",
    "familyName": "BVLGARI SERPENT GRADIENT SUNGLASSES (GOLD)",
    "brand": "BVLGARI",
    "description": "BVLGARI SERPENT GRADIENT SUNGLASSES (GOLD). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26019": {
    "previousName": "BLVGARI SERPENT FOREVER (Black)",
    "baseName": "Black Square Gold-Hinge Sunglasses",
    "name": "BVLGARI SERPENT FOREVER (BLACK)",
    "familyName": "BVLGARI SERPENT FOREVER (BLACK)",
    "brand": "BVLGARI",
    "description": "BVLGARI SERPENT FOREVER (BLACK). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26020": {
    "previousName": "Balenciaga",
    "baseName": "Rose Rimless Rectangular Sunglasses",
    "name": "BALENCIAGA BB-LOGO RIMLESS RECTANGULAR SUNGLASSES (ROSE)",
    "familyName": "BALENCIAGA BB-LOGO RIMLESS RECTANGULAR SUNGLASSES (ROSE)",
    "brand": "BALENCIAGA",
    "description": "BALENCIAGA BB-LOGO RIMLESS RECTANGULAR SUNGLASSES (ROSE). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26021": {
    "previousName": "Dior",
    "baseName": "Brown Slim Metal Sunglasses",
    "name": "BALENCIAGA OVAL METAL-FRAME SUNGLASSES (BROWN GRADIENT)",
    "familyName": "BALENCIAGA OVAL METAL-FRAME SUNGLASSES (BROWN GRADIENT)",
    "brand": "BALENCIAGA",
    "description": "BALENCIAGA OVAL METAL-FRAME SUNGLASSES (BROWN GRADIENT). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26022": {
    "previousName": "Balenciaga",
    "baseName": "Blue Gradient Patterned-Temple Sunglasses",
    "name": "DIOR OBLIQUE-TEMPLE RIMLESS SUNGLASSES (BLUE GRADIENT)",
    "familyName": "DIOR OBLIQUE-TEMPLE RIMLESS SUNGLASSES (BLUE GRADIENT)",
    "brand": "DIOR",
    "description": "DIOR OBLIQUE-TEMPLE RIMLESS SUNGLASSES (BLUE GRADIENT). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26023": {
    "previousName": "BALENCIAGA BB01575SWITT (Oval Black)",
    "baseName": "Black Slim Sport Sunglasses",
    "name": "BALENCIAGA BB0157S SWIFT OVAL SUNGLASSES (BLACK)",
    "familyName": "BALENCIAGA BB0157S SWIFT OVAL SUNGLASSES (BLACK)",
    "brand": "BALENCIAGA",
    "description": "BALENCIAGA BB0157S SWIFT OVAL SUNGLASSES (BLACK). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26024": {
    "previousName": "Hermes",
    "baseName": "Brown Gradient Logo-Temple Sunglasses",
    "name": "DIOR CD-LOGO OVAL RIMLESS SUNGLASSES (BROWN GRADIENT)",
    "familyName": "DIOR CD-LOGO OVAL RIMLESS SUNGLASSES (BROWN GRADIENT)",
    "brand": "DIOR",
    "description": "DIOR CD-LOGO OVAL RIMLESS SUNGLASSES (BROWN GRADIENT). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26027": {
    "previousName": "DIOR - FANTASLICA BIU (Metallic Gold)",
    "baseName": "Gold Butterfly Crystal Aviator Sunglasses",
    "name": "DIOR DIORFANTASTICA B1U BUTTERFLY-CRYSTAL AVIATOR SUNGLASSES (GOLD / PURPLE)",
    "familyName": "DIOR DIORFANTASTICA B1U BUTTERFLY-CRYSTAL AVIATOR SUNGLASSES (GOLD / PURPLE)",
    "brand": "DIOR",
    "description": "DIOR DIORFANTASTICA B1U BUTTERFLY-CRYSTAL AVIATOR SUNGLASSES (GOLD / PURPLE). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26031": {
    "previousName": "Chanel",
    "baseName": "Amber Oval Letter-Temple Sunglasses",
    "name": "DIOR GOLD-LOGO OVAL SUNGLASSES (AMBER / NUDE)",
    "familyName": "DIOR GOLD-LOGO OVAL SUNGLASSES (AMBER / NUDE)",
    "brand": "DIOR",
    "description": "DIOR GOLD-LOGO OVAL SUNGLASSES (AMBER / NUDE). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26032": {
    "previousName": "Black Classic Square Sunglasses",
    "baseName": "Black Classic Square Sunglasses",
    "name": "DIOR DIORXPLORER S2I RECTANGULAR SUNGLASSES (BLACK)",
    "familyName": "DIOR DIORXPLORER S2I RECTANGULAR SUNGLASSES (BLACK)",
    "brand": "DIOR",
    "description": "DIOR DIORXPLORER S2I RECTANGULAR SUNGLASSES (BLACK). FRAME AND LENS COLOR: AS SHOWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26100": {
    "previousName": "SAINT LAURENT - SL M119 BLAZE (Gold Havana)",
    "baseName": "Gold Crystal Square Tortoiseshell-Temple Sunglasses",
    "name": "SAINT LAURENT - SL M119 BLAZE (GOLD HAVANA)",
    "familyName": "SAINT LAURENT - SL M119 BLAZE (GOLD HAVANA)",
    "brand": "SAINT LAURENT",
    "description": "SAINT LAURENT - SL M119 BLAZE (GOLD HAVANA). FRAME AND LENS COLOR: GOLD / TORTOISESHELL. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26101": {
    "previousName": "SAINT LAURENT SC MILLA BLAZE YSC CASSARIDGE MONOGRAM (Gold)",
    "baseName": "Pink Crystal Square Logo-Temple Sunglasses",
    "name": "SAINT LAURENT SC MILLA BLAZE YSC CASSARIDGE MONOGRAM (GOLD)",
    "familyName": "SAINT LAURENT SC MILLA BLAZE YSC CASSARIDGE MONOGRAM (GOLD)",
    "brand": "SAINT LAURENT",
    "description": "SAINT LAURENT SC MILLA BLAZE YSC CASSARIDGE MONOGRAM (GOLD). FRAME AND LENS COLOR: PINK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26102": {
    "previousName": "SAINT LAURENT SL M119 (Thick Black)",
    "baseName": "Black Rectangular Gold-Temple Sunglasses",
    "name": "SAINT LAURENT SL M119 (THICK BLACK)",
    "familyName": "SAINT LAURENT SL M119 (THICK BLACK)",
    "brand": "SAINT LAURENT",
    "description": "SAINT LAURENT SL M119 (THICK BLACK). FRAME AND LENS COLOR: BLACK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26108": {
    "previousName": "Amber Gold Double-Bridge Aviator Sunglasses",
    "baseName": "Amber Gold Double-Bridge Aviator Sunglasses",
    "name": "MIU MIU MU A55S DOUBLE-BRIDGE AVIATOR SUNGLASSES (AMBER / GOLD)",
    "familyName": "MIU MIU MU A55S DOUBLE-BRIDGE AVIATOR SUNGLASSES (AMBER / GOLD)",
    "brand": "MIU MIU",
    "description": "MIU MIU MU A55S DOUBLE-BRIDGE AVIATOR SUNGLASSES (AMBER / GOLD). FRAME AND LENS COLOR: AMBER / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26110": {
    "previousName": "Purple Rose Gradient Rimless Sunglasses",
    "baseName": "Purple Rose Gradient Rimless Sunglasses",
    "name": "LOUIS VUITTON MONOGRAM-TEMPLE RIMLESS SUNGLASSES (PURPLE / ROSE)",
    "familyName": "LOUIS VUITTON MONOGRAM-TEMPLE RIMLESS SUNGLASSES (PURPLE / ROSE)",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON MONOGRAM-TEMPLE RIMLESS SUNGLASSES (PURPLE / ROSE). FRAME AND LENS COLOR: PURPLE / ROSE. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26111": {
    "previousName": "Brown Gradient Gold-Temple Shield Sunglasses",
    "baseName": "Brown Gradient Gold-Temple Shield Sunglasses",
    "name": "LOUIS VUITTON GOLD-BAR SHIELD SUNGLASSES (BROWN GRADIENT)",
    "familyName": "LOUIS VUITTON GOLD-BAR SHIELD SUNGLASSES (BROWN GRADIENT)",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON GOLD-BAR SHIELD SUNGLASSES (BROWN GRADIENT). FRAME AND LENS COLOR: BROWN / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26181": {
    "previousName": "Louis Vuitton Blue-Amber Gradient Gold-Bar Shield Sunglasses",
    "baseName": "Louis Vuitton Blue-Amber Gradient Gold-Bar Shield Sunglasses",
    "name": "LOUIS VUITTON BLUE-AMBER GRADIENT GOLD-BAR SHIELD SUNGLASSES",
    "familyName": "LOUIS VUITTON BLUE-AMBER GRADIENT GOLD-BAR SHIELD SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON BLUE-AMBER GRADIENT GOLD-BAR SHIELD SUNGLASSES. FRAME AND LENS COLOR: BLUE / AMBER / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26182": {
    "previousName": "Louis Vuitton Purple-Rose Rimless Pink-Temple Sunglasses",
    "baseName": "Louis Vuitton Purple-Rose Rimless Pink-Temple Sunglasses",
    "name": "LOUIS VUITTON PURPLE-ROSE RIMLESS PINK-TEMPLE SUNGLASSES",
    "familyName": "LOUIS VUITTON PURPLE-ROSE RIMLESS PINK-TEMPLE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON PURPLE-ROSE RIMLESS PINK-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: PURPLE / ROSE / PINK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26183": {
    "previousName": "Louis Vuitton Black Angular Gold-Trim Rectangular Sunglasses",
    "baseName": "Louis Vuitton Black Angular Gold-Trim Rectangular Sunglasses",
    "name": "LOUIS VUITTON 1.1 MILLIONAIRES SUNGLASSES (BLACK / GOLD)",
    "familyName": "LOUIS VUITTON 1.1 MILLIONAIRES SUNGLASSES (BLACK / GOLD)",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON 1.1 MILLIONAIRES SUNGLASSES (BLACK / GOLD). FRAME AND LENS COLOR: BLACK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26184": {
    "previousName": "Louis Vuitton Black Cat-Eye Purple-Lens Sunglasses",
    "baseName": "Louis Vuitton Black Cat-Eye Purple-Lens Sunglasses",
    "name": "LOUIS VUITTON BLACK CAT-EYE PURPLE-LENS SUNGLASSES",
    "familyName": "LOUIS VUITTON BLACK CAT-EYE PURPLE-LENS SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON BLACK CAT-EYE PURPLE-LENS SUNGLASSES. FRAME AND LENS COLOR: BLACK / PURPLE. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26185": {
    "previousName": "Louis Vuitton Black Gold-V Brow Square Sunglasses",
    "baseName": "Louis Vuitton Black Gold-V Brow Square Sunglasses",
    "name": "LOUIS VUITTON 1.1 EVIDENCE SUNGLASSES (BLACK / GOLD)",
    "familyName": "LOUIS VUITTON 1.1 EVIDENCE SUNGLASSES (BLACK / GOLD)",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON 1.1 EVIDENCE SUNGLASSES (BLACK / GOLD). FRAME AND LENS COLOR: BLACK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26186": {
    "previousName": "Louis Vuitton Caramel Monogram-Temple Square Sunglasses",
    "baseName": "Louis Vuitton Caramel Monogram-Temple Square Sunglasses",
    "name": "LOUIS VUITTON CARAMEL MONOGRAM-TEMPLE SQUARE SUNGLASSES",
    "familyName": "LOUIS VUITTON CARAMEL MONOGRAM-TEMPLE SQUARE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON CARAMEL MONOGRAM-TEMPLE SQUARE SUNGLASSES. FRAME AND LENS COLOR: CARAMEL / BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26187": {
    "previousName": "Louis Vuitton Purple-Rose Cat-Eye Pink Monogram-Temple Sunglasses",
    "baseName": "Louis Vuitton Purple-Rose Cat-Eye Pink Monogram-Temple Sunglasses",
    "name": "LOUIS VUITTON PURPLE-ROSE CAT-EYE PINK MONOGRAM-TEMPLE SUNGLASSES",
    "familyName": "LOUIS VUITTON PURPLE-ROSE CAT-EYE PINK MONOGRAM-TEMPLE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON PURPLE-ROSE CAT-EYE PINK MONOGRAM-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: PURPLE / ROSE / PINK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26188": {
    "previousName": "Louis Vuitton Tortoiseshell Yellow-Lens Square Sunglasses",
    "baseName": "Louis Vuitton Tortoiseshell Yellow-Lens Square Sunglasses",
    "name": "LOUIS VUITTON TORTOISESHELL YELLOW-LENS SQUARE SUNGLASSES",
    "familyName": "LOUIS VUITTON TORTOISESHELL YELLOW-LENS SQUARE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON TORTOISESHELL YELLOW-LENS SQUARE SUNGLASSES. FRAME AND LENS COLOR: TORTOISESHELL / YELLOW. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26189": {
    "previousName": "Louis Vuitton Brown Gradient Rimless Wood-Temple Sunglasses",
    "baseName": "Louis Vuitton Brown Gradient Rimless Wood-Temple Sunglasses",
    "name": "LOUIS VUITTON BROWN GRADIENT RIMLESS WOOD-TEMPLE SUNGLASSES",
    "familyName": "LOUIS VUITTON BROWN GRADIENT RIMLESS WOOD-TEMPLE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON BROWN GRADIENT RIMLESS WOOD-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26190": {
    "previousName": "Louis Vuitton Rose Gradient Rimless Monogram-Temple Sunglasses",
    "baseName": "Louis Vuitton Rose Gradient Rimless Monogram-Temple Sunglasses",
    "name": "LOUIS VUITTON ROSE GRADIENT RIMLESS MONOGRAM-TEMPLE SUNGLASSES",
    "familyName": "LOUIS VUITTON ROSE GRADIENT RIMLESS MONOGRAM-TEMPLE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON ROSE GRADIENT RIMLESS MONOGRAM-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: ROSE / BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26191": {
    "previousName": "Louis Vuitton Black Quote-Detail Rectangular Sunglasses",
    "baseName": "Louis Vuitton Black Quote-Detail Rectangular Sunglasses",
    "name": "LOUIS VUITTON LV SUPER VISION SQUARE SUNGLASSES (BLACK)",
    "familyName": "LOUIS VUITTON LV SUPER VISION SQUARE SUNGLASSES (BLACK)",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON LV SUPER VISION SQUARE SUNGLASSES (BLACK). FRAME AND LENS COLOR: BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26192": {
    "previousName": "Louis Vuitton Blue Crystal Flat-Top Rectangular Sunglasses",
    "baseName": "Louis Vuitton Blue Crystal Flat-Top Rectangular Sunglasses",
    "name": "LOUIS VUITTON BLUE CRYSTAL FLAT-TOP RECTANGULAR SUNGLASSES",
    "familyName": "LOUIS VUITTON BLUE CRYSTAL FLAT-TOP RECTANGULAR SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON BLUE CRYSTAL FLAT-TOP RECTANGULAR SUNGLASSES. FRAME AND LENS COLOR: BLUE / BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26193": {
    "previousName": "Louis Vuitton Grey Gradient Angular Rimless Sunglasses",
    "baseName": "Louis Vuitton Grey Gradient Angular Rimless Sunglasses",
    "name": "LOUIS VUITTON GREY GRADIENT ANGULAR RIMLESS SUNGLASSES",
    "familyName": "LOUIS VUITTON GREY GRADIENT ANGULAR RIMLESS SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON GREY GRADIENT ANGULAR RIMLESS SUNGLASSES. FRAME AND LENS COLOR: GREY. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26194": {
    "previousName": "Louis Vuitton Black Gold-Flower Round Sunglasses",
    "baseName": "Louis Vuitton Black Gold-Flower Round Sunglasses",
    "name": "LOUIS VUITTON BLACK GOLD-FLOWER ROUND SUNGLASSES",
    "familyName": "LOUIS VUITTON BLACK GOLD-FLOWER ROUND SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON BLACK GOLD-FLOWER ROUND SUNGLASSES. FRAME AND LENS COLOR: BLACK / PURPLE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26195": {
    "previousName": "Louis Vuitton Black Monogram Shield Sunglasses",
    "baseName": "Louis Vuitton Black Monogram Shield Sunglasses",
    "name": "LOUIS VUITTON LV WAIMEA L SHIELD SUNGLASSES (BLACK MONOGRAM)",
    "familyName": "LOUIS VUITTON LV WAIMEA L SHIELD SUNGLASSES (BLACK MONOGRAM)",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON LV WAIMEA L SHIELD SUNGLASSES (BLACK MONOGRAM). FRAME AND LENS COLOR: BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26196": {
    "previousName": "Louis Vuitton Pink Gold-Chain Shield Sunglasses",
    "baseName": "Louis Vuitton Pink Gold-Chain Shield Sunglasses",
    "name": "LOUIS VUITTON PINK GOLD-CHAIN SHIELD SUNGLASSES",
    "familyName": "LOUIS VUITTON PINK GOLD-CHAIN SHIELD SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON PINK GOLD-CHAIN SHIELD SUNGLASSES. FRAME AND LENS COLOR: PINK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26197": {
    "previousName": "Louis Vuitton Blue-Amber Rimless Green-Temple Sunglasses",
    "baseName": "Louis Vuitton Blue-Amber Rimless Green-Temple Sunglasses",
    "name": "LOUIS VUITTON BLUE-AMBER RIMLESS GREEN-TEMPLE SUNGLASSES",
    "familyName": "LOUIS VUITTON BLUE-AMBER RIMLESS GREEN-TEMPLE SUNGLASSES",
    "brand": "LOUIS VUITTON",
    "description": "LOUIS VUITTON BLUE-AMBER RIMLESS GREEN-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BLUE / AMBER / GREEN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26198": {
    "previousName": "Versace Rose Gold-Frame Medallion Shield Sunglasses",
    "baseName": "Versace Rose Gold-Frame Medallion Shield Sunglasses",
    "name": "VERSACE VE2268 MEDUSA MEDALLION SHIELD SUNGLASSES (ROSE / GOLD)",
    "familyName": "VERSACE VE2268 MEDUSA MEDALLION SHIELD SUNGLASSES (ROSE / GOLD)",
    "brand": "VERSACE",
    "description": "VERSACE VE2268 MEDUSA MEDALLION SHIELD SUNGLASSES (ROSE / GOLD). FRAME AND LENS COLOR: ROSE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26199": {
    "previousName": "Versace Brown Gold Double-Bridge Aviator Sunglasses",
    "baseName": "Versace Brown Gold Double-Bridge Aviator Sunglasses",
    "name": "VERSACE BROWN GOLD DOUBLE-BRIDGE AVIATOR SUNGLASSES",
    "familyName": "VERSACE BROWN GOLD DOUBLE-BRIDGE AVIATOR SUNGLASSES",
    "brand": "VERSACE",
    "description": "VERSACE BROWN GOLD DOUBLE-BRIDGE AVIATOR SUNGLASSES. FRAME AND LENS COLOR: BROWN / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26200": {
    "previousName": "Versace Blue Shield Black Gold-Temple Sunglasses",
    "baseName": "Versace Blue Shield Black Gold-Temple Sunglasses",
    "name": "VERSACE BLUE SHIELD BLACK GOLD-TEMPLE SUNGLASSES",
    "familyName": "VERSACE BLUE SHIELD BLACK GOLD-TEMPLE SUNGLASSES",
    "brand": "VERSACE",
    "description": "VERSACE BLUE SHIELD BLACK GOLD-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BLUE / BLACK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26201": {
    "previousName": "Versace Brown Bronze-Frame Shield Sunglasses",
    "baseName": "Versace Brown Bronze-Frame Shield Sunglasses",
    "name": "VERSACE VE2220 MEDUSA HALO SHIELD SUNGLASSES (BROWN / BRONZE)",
    "familyName": "VERSACE VE2220 MEDUSA HALO SHIELD SUNGLASSES (BROWN / BRONZE)",
    "brand": "VERSACE",
    "description": "VERSACE VE2220 MEDUSA HALO SHIELD SUNGLASSES (BROWN / BRONZE). FRAME AND LENS COLOR: BROWN / BRONZE. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26202": {
    "previousName": "Versace Amber Gold Oval Tortoiseshell-Temple Sunglasses",
    "baseName": "Versace Amber Gold Oval Tortoiseshell-Temple Sunglasses",
    "name": "VERSACE AMBER GOLD OVAL TORTOISESHELL-TEMPLE SUNGLASSES",
    "familyName": "VERSACE AMBER GOLD OVAL TORTOISESHELL-TEMPLE SUNGLASSES",
    "brand": "VERSACE",
    "description": "VERSACE AMBER GOLD OVAL TORTOISESHELL-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: AMBER / TORTOISESHELL / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26203": {
    "previousName": "Versace Black Gold Rectangular Sunglasses",
    "baseName": "Versace Black Gold Rectangular Sunglasses",
    "name": "VERSACE BLACK GOLD RECTANGULAR SUNGLASSES",
    "familyName": "VERSACE BLACK GOLD RECTANGULAR SUNGLASSES",
    "brand": "VERSACE",
    "description": "VERSACE BLACK GOLD RECTANGULAR SUNGLASSES. FRAME AND LENS COLOR: BLACK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26204": {
    "previousName": "Versace Rose Black-Frame Aviator Sunglasses",
    "baseName": "Versace Rose Black-Frame Aviator Sunglasses",
    "name": "VERSACE VE2250 MEDUSA AVIATOR SUNGLASSES (ROSE GRADIENT)",
    "familyName": "VERSACE VE2250 MEDUSA AVIATOR SUNGLASSES (ROSE GRADIENT)",
    "brand": "VERSACE",
    "description": "VERSACE VE2250 MEDUSA AVIATOR SUNGLASSES (ROSE GRADIENT). FRAME AND LENS COLOR: ROSE / BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26205": {
    "previousName": "Versace Yellow-Lens Black Aviator Sunglasses",
    "baseName": "Versace Yellow-Lens Black Aviator Sunglasses",
    "name": "VERSACE VE4508U DOUBLE-BRIDGE SUNGLASSES (BLACK / YELLOW)",
    "familyName": "VERSACE VE4508U DOUBLE-BRIDGE SUNGLASSES (BLACK / YELLOW)",
    "brand": "VERSACE",
    "description": "VERSACE VE4508U DOUBLE-BRIDGE SUNGLASSES (BLACK / YELLOW). FRAME AND LENS COLOR: YELLOW / BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26206": {
    "previousName": "Versace Blue Gradient Gold-Temple Rimless Sunglasses",
    "baseName": "Versace Blue Gradient Gold-Temple Rimless Sunglasses",
    "name": "VERSACE VE2275 RIMLESS SQUARE SUNGLASSES (BLUE / GOLD)",
    "familyName": "VERSACE VE2275 RIMLESS SQUARE SUNGLASSES (BLUE / GOLD)",
    "brand": "VERSACE",
    "description": "VERSACE VE2275 RIMLESS SQUARE SUNGLASSES (BLUE / GOLD). FRAME AND LENS COLOR: BLUE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26207": {
    "previousName": "Chanel Black Gold Shield Sunglasses",
    "baseName": "Chanel Black Gold Shield Sunglasses",
    "name": "CHANEL BLACK GOLD SHIELD SUNGLASSES",
    "familyName": "CHANEL BLACK GOLD SHIELD SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL BLACK GOLD SHIELD SUNGLASSES. FRAME AND LENS COLOR: BLACK / PURPLE / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26208": {
    "previousName": "Chanel Brown Rimless Wood-Temple Sunglasses",
    "baseName": "Chanel Brown Rimless Wood-Temple Sunglasses",
    "name": "CHANEL BROWN RIMLESS WOOD-TEMPLE SUNGLASSES",
    "familyName": "CHANEL BROWN RIMLESS WOOD-TEMPLE SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL BROWN RIMLESS WOOD-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26209": {
    "previousName": "Chanel Black Rimless Quilted-Temple Sunglasses",
    "baseName": "Chanel Black Rimless Quilted-Temple Sunglasses",
    "name": "CHANEL BLACK RIMLESS QUILTED-TEMPLE SUNGLASSES",
    "familyName": "CHANEL BLACK RIMLESS QUILTED-TEMPLE SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL BLACK RIMLESS QUILTED-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26210": {
    "previousName": "Chanel Brown Gradient Round Wood-Temple Sunglasses",
    "baseName": "Chanel Brown Gradient Round Wood-Temple Sunglasses",
    "name": "CHANEL BROWN GRADIENT ROUND WOOD-TEMPLE SUNGLASSES",
    "familyName": "CHANEL BROWN GRADIENT ROUND WOOD-TEMPLE SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL BROWN GRADIENT ROUND WOOD-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26211": {
    "previousName": "Chanel Amber Geometric Square Sunglasses",
    "baseName": "Chanel Amber Geometric Square Sunglasses",
    "name": "CHANEL AMBER GEOMETRIC SQUARE SUNGLASSES",
    "familyName": "CHANEL AMBER GEOMETRIC SQUARE SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL AMBER GEOMETRIC SQUARE SUNGLASSES. FRAME AND LENS COLOR: AMBER. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26212": {
    "previousName": "Chanel Rose Gradient Cream-Temple Rimless Sunglasses",
    "baseName": "Chanel Rose Gradient Cream-Temple Rimless Sunglasses",
    "name": "CHANEL ROSE GRADIENT CREAM-TEMPLE RIMLESS SUNGLASSES",
    "familyName": "CHANEL ROSE GRADIENT CREAM-TEMPLE RIMLESS SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL ROSE GRADIENT CREAM-TEMPLE RIMLESS SUNGLASSES. FRAME AND LENS COLOR: ROSE / CREAM. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26213": {
    "previousName": "Chanel Black Oval Gold-Temple Sunglasses",
    "baseName": "Chanel Black Oval Gold-Temple Sunglasses",
    "name": "CHANEL BLACK OVAL GOLD-TEMPLE SUNGLASSES",
    "familyName": "CHANEL BLACK OVAL GOLD-TEMPLE SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL BLACK OVAL GOLD-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: BLACK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26214": {
    "previousName": "Chanel Rose Gold Rimless Red-Temple Sunglasses",
    "baseName": "Chanel Rose Gold Rimless Red-Temple Sunglasses",
    "name": "CHANEL ROSE GOLD RIMLESS RED-TEMPLE SUNGLASSES",
    "familyName": "CHANEL ROSE GOLD RIMLESS RED-TEMPLE SUNGLASSES",
    "brand": "CHANEL",
    "description": "CHANEL ROSE GOLD RIMLESS RED-TEMPLE SUNGLASSES. FRAME AND LENS COLOR: ROSE / RED / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26215": {
    "previousName": "Dior Brown Gradient Gold Crystal Butterfly Square Sunglasses",
    "baseName": "Dior Brown Gradient Gold Crystal Butterfly Square Sunglasses",
    "name": "DIOR BROWN GRADIENT GOLD CRYSTAL BUTTERFLY SQUARE SUNGLASSES",
    "familyName": "DIOR BROWN GRADIENT GOLD CRYSTAL BUTTERFLY SQUARE SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR BROWN GRADIENT GOLD CRYSTAL BUTTERFLY SQUARE SUNGLASSES. FRAME AND LENS COLOR: BROWN / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26216": {
    "previousName": "Dior Pink Gradient Gold Crystal Butterfly Square Sunglasses",
    "baseName": "Dior Pink Gradient Gold Crystal Butterfly Square Sunglasses",
    "name": "DIOR PINK GRADIENT GOLD CRYSTAL BUTTERFLY SQUARE SUNGLASSES",
    "familyName": "DIOR PINK GRADIENT GOLD CRYSTAL BUTTERFLY SQUARE SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR PINK GRADIENT GOLD CRYSTAL BUTTERFLY SQUARE SUNGLASSES. FRAME AND LENS COLOR: PINK / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26217": {
    "previousName": "Dior Amber Crystal Cat-Eye Sunglasses",
    "baseName": "Dior Amber Crystal Cat-Eye Sunglasses",
    "name": "DIOR AMBER CRYSTAL CAT-EYE SUNGLASSES",
    "familyName": "DIOR AMBER CRYSTAL CAT-EYE SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR AMBER CRYSTAL CAT-EYE SUNGLASSES. FRAME AND LENS COLOR: AMBER. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26218": {
    "previousName": "Dior Blue Crystal Square Sunglasses",
    "baseName": "Dior Blue Crystal Square Sunglasses",
    "name": "DIOR DIORXPLORER S2I RECTANGULAR SUNGLASSES (BLUE CRYSTAL / BLACK)",
    "familyName": "DIOR DIORXPLORER S2I RECTANGULAR SUNGLASSES (BLUE CRYSTAL / BLACK)",
    "brand": "DIOR",
    "description": "DIOR DIORXPLORER S2I RECTANGULAR SUNGLASSES (BLUE CRYSTAL / BLACK). FRAME AND LENS COLOR: BLUE / BLACK. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26219": {
    "previousName": "Dior Pink Oval Silver Crystal Sunglasses",
    "baseName": "Dior Pink Oval Silver Crystal Sunglasses",
    "name": "DIOR PINK OVAL SILVER CRYSTAL SUNGLASSES",
    "familyName": "DIOR PINK OVAL SILVER CRYSTAL SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR PINK OVAL SILVER CRYSTAL SUNGLASSES. FRAME AND LENS COLOR: PINK / SILVER. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26220": {
    "previousName": "Dior Brown Gold-Chain Wing Sunglasses",
    "baseName": "Dior Brown Gold-Chain Wing Sunglasses",
    "name": "DIOR BROWN GOLD-CHAIN WING SUNGLASSES",
    "familyName": "DIOR BROWN GOLD-CHAIN WING SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR BROWN GOLD-CHAIN WING SUNGLASSES. FRAME AND LENS COLOR: BROWN / GOLD. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26221": {
    "previousName": "Dior Brown Silver Crystal Cat-Eye Sunglasses",
    "baseName": "Dior Brown Silver Crystal Cat-Eye Sunglasses",
    "name": "DIOR BROWN SILVER CRYSTAL CAT-EYE SUNGLASSES",
    "familyName": "DIOR BROWN SILVER CRYSTAL CAT-EYE SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR BROWN SILVER CRYSTAL CAT-EYE SUNGLASSES. FRAME AND LENS COLOR: BROWN / SILVER. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26222": {
    "previousName": "Dior Tortoiseshell Round Gold-Logo Temple Sunglasses",
    "baseName": "Dior Tortoiseshell Round Gold-Logo Temple Sunglasses",
    "name": "DIOR TORTOISESHELL ROUND GOLD-LOGO TEMPLE SUNGLASSES",
    "familyName": "DIOR TORTOISESHELL ROUND GOLD-LOGO TEMPLE SUNGLASSES",
    "brand": "DIOR",
    "description": "DIOR TORTOISESHELL ROUND GOLD-LOGO TEMPLE SUNGLASSES. FRAME AND LENS COLOR: TORTOISESHELL / BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  },
  "26223": {
    "previousName": "Dior Brown Monogram Shield Sunglasses",
    "baseName": "Dior Brown Monogram Shield Sunglasses",
    "name": "DIOR DIORCLUB M2U OBLIQUE SHIELD SUNGLASSES (BROWN)",
    "familyName": "DIOR DIORCLUB M2U OBLIQUE SHIELD SUNGLASSES (BROWN)",
    "brand": "DIOR",
    "description": "DIOR DIORCLUB M2U OBLIQUE SHIELD SUNGLASSES (BROWN). FRAME AND LENS COLOR: BROWN. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS."
  }
}

// Exact model names supplied by the owner on 23 October 2026.
const OWNER_CONFIRMED_EYEWEAR_NAMES = {
  GL114: 'TOM FORD ICON FT1278 GEOMETRIC SUNGLASSES — BLACK',
  GL167: 'TOM FORD ICON FT1278 GEOMETRIC SUNGLASSES'
}

export function normalizeResearchedEyewear(product) {
  const ownerName = product.category === 'Eye Wears' && OWNER_CONFIRMED_EYEWEAR_NAMES[product.productCode]
  if (ownerName) return {
    ...product,
    name: ownerName,
    familyName: ownerName,
    brand: 'TOM FORD',
    description: `${ownerName}. FRAME AND LENS COLOUR AS PICTURED. CONTACT BUYYMEE FOR AVAILABILITY AND DELIVERY DETAILS.`
  }
  if (product.category !== 'Eye Wears' || !product.name || product.name === product.name.toUpperCase()) return product
  const entry = RESEARCHED_NAMES[String(product.id)]
  if (!entry || ![entry.previousName, entry.baseName].includes(product.name)) return product
  const { previousName, baseName, ...details } = entry
  return { ...product, ...details }
}
