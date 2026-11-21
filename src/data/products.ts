import type { ProductItem } from '../types';

export interface CatalogueMetadata {
  company: string;
  source: {
    file: string;
    pages: string;
    note: string;
  };
  imagePolicy: string;
  products: ProductItem[];
}

export const products = [
  {
    company: "ADCOMAX Enterprises Private Limited",
    source: {
      file: "adcomax catlog pdf.pdf",
      pages: "4-7",
      note: "Product names and descriptions are transcribed or lightly normalised from the supplied catalogue. No SKU, brand, price, size or certification has been invented.",
    },
    imagePolicy:
      "Images are cropped from the corresponding product illustrations embedded in the supplied ADCOMAX catalogue PDF. They are local assets, not dummy or placeholder URLs. Some catalogue illustrations are generic or combined images rather than confirmed individual product photographs.",
    products: [
      {
        id: "abrasive-products",
        name: "Abrasive Products",
        category: "Abrasives",
        description:
          "Abrasive products for cutting, smoothing, polishing and finishing workpieces.",
        image: "/images/products/abrasive-products.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 4,
      },
      {
        id: "tack-rags",
        name: "Tack Rags",
        category: "Surface preparation",
        description:
          "Tack rags for surface preparation in automotive and woodworking applications.",
        image: "/images/products/tack-rags.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 4,
      },
      {
        id: "microfiber-cloth",
        name: "Microfiber Cloth",
        category: "Surface preparation",
        description:
          "Microfiber cloth for surface preparation in automotive and woodworking applications.",
        image: "/images/products/microfiber-cloth.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 4,
      },
      {
        id: "foam-polishing-pads",
        name: "Foam Polishing Pads",
        category: "Polishing",
        description:
          "Foam polishing pads for working on oxidized automotive coatings, hard clear coats and colour-sanding scratches.",
        image: "/images/products/foam-polishing-pads.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 4,
      },
      {
        id: "natural-polishing-pads",
        name: "Natural Polishing Pads",
        category: "Polishing",
        description:
          "Natural polishing pads for automotive polishing and paint-finishing work.",
        image: "/images/products/natural-polishing-pads.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 4,
      },
      {
        id: "backup-pads",
        name: "Backup Pads",
        category: "Sanding & polishing",
        description:
          "Backup pads available in Velcro and PSA types and in different sizes for sanding and polishing applications.",
        image: "/images/products/backup-pads.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 4,
      },
      {
        id: "coveralls",
        name: "Protective Coveralls",
        category: "Protective wear",
        description:
          "Coveralls intended to protect the wearer from dirt and workplace exposure while allowing room to move.",
        image: "/images/products/coveralls.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 5,
      },
      {
        id: "robo-coveralls",
        name: "Robo Coveralls",
        category: "Protective wear",
        description:
          "Robo coveralls are listed in the catalogue alongside protective coveralls. The catalogue does not provide separate technical specifications.",
        image: "/images/products/robo-coveralls.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 5,
      },
      {
        id: "masking-film",
        name: "Masking Film",
        category: "Masking & protection",
        description:
          "High-density masking film designed for easy removal and to help prevent paint and overspray from reaching protected surfaces.",
        image: "/images/products/masking-film.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 5,
      },
      {
        id: "polishing-compound",
        name: "Automotive Polishing Compound",
        category: "Polishing",
        description:
          "Automotive polishing compound based on diminishing abrasive particles, described for spot-repair applications.",
        image: "/images/products/polishing-compound.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 5,
      },
      {
        id: "ceramic-coating",
        name: "Ceramic Coating",
        category: "Automotive surface care",
        description:
          "Ceramic coating for automotive surfaces, described as helping protect against weathering, corrosion and oxidation while providing a glossy, scratch-resistant finish.",
        image: "/images/products/ceramic-coating.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 5,
      },
      {
        id: "polyethylene-tape",
        name: "Polyethylene Tape",
        category: "Masking & protection",
        description:
          "Multipurpose polyethylene tape for industrial assembly applications, from general masking to heavy-duty surface protection.",
        image: "/images/products/polyethylene-tape.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 6,
      },
      {
        id: "masking-tape",
        name: "Masking Tape",
        category: "Masking & protection",
        description:
          "Pressure-sensitive paper masking tape used in painting to cover areas that should not be painted.",
        image: "/images/products/masking-tape.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 6,
      },
      {
        id: "die-cut-masks",
        name: "Die-Cut Masks",
        category: "Masking & protection",
        description:
          "Pre-cut adhesive masks that can be removed from a roll and applied to parts; the catalogue notes that formats and quantities can be tailored to production needs.",
        image: "/images/products/die-cut-masks.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 6,
      },
      {
        id: "surface-protection-tape",
        name: "Surface Protection Tape",
        category: "Masking & protection",
        description:
          "Tape intended to protect surfaces from scratches, damage, dust, dirt and moisture; the catalogue lists metal, glass, plastic, optic lenses, decorative laminate, stone, carpet and coated automotive parts as applications.",
        image: "/images/products/surface-protection-tape.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 6,
      },
      {
        id: "tungsten-carbide-rotary-burrs",
        name: "Tungsten Carbide Rotary Burrs",
        category: "Industrial tools",
        description:
          "Rotary carbide burrs for milling and machining stainless steel, cast iron and hardened steel, and for deburring and cleaning ferrous metal. The catalogue describes a double-cut burr with two flutes and a rounded surface.",
        image: "/images/products/tungsten-carbide-rotary-burrs.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 7,
      },
      {
        id: "angle-grinders",
        name: "Angle Grinders",
        category: "Power tools",
        description:
          "Handheld power tools described for metal fabrication tasks including cutting, grinding, deburring, finishing and polishing. The catalogue mentions corded-electric and battery-powered types.",
        image: "/images/products/angle-grinders.jpg",
        imageSource: "adcomax-catalogue-pdf",
        sourcePage: 7,
      },
    ],
  },
];

export const catalogueProducts: ProductItem[] = products[0].products;
export default catalogueProducts;
