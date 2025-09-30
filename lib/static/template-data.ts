// Helper function to convert title to kebab-case for folder/file names
function titleToKebabCase(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Helper function to generate image path from title
function generateImagePath(title: string): string {
  const kebabTitle = titleToKebabCase(title);
  return `/product/${kebabTitle}/${kebabTitle}.png`;
}

// Create template objects with auto-generated image paths
const createTemplate = (
  id: number,
  category: string,
  title: string,
  description: string,
  url: string,
  heroBanner: string,
  price: string
) => ({
  id,
  category,
  title,
  description,
  image: generateImagePath(title),
  url,
  heroBanner,
  price,
});

export const templateData = [
  createTemplate(
    1,
    "Company Profile",
    "Shell Global",
    "Company Profile",
    "https://www.shell.com/",
    "true",
    "pro"
  ),
  createTemplate(
    2,
    "Company Profile",
    "Tesla",
    "Company Profile",
    "https://www.tesla.com/",
    "true",
    "free"
  ),
  createTemplate(
    3,
    "Company Profile",
    "Marriott",
    "Company Profile",
    "https://www.marriott.com/",
    "true",
    "exclusive"
  ),
  createTemplate(
    4,
    "Sekolah",
    "Harvard",
    "Sekolah",
    "https://www.harvard.edu/",
    "true",
    "free"
  ),
  createTemplate(
    5,
    "Rumah Sakit",
    "RS Mitra Keluarga",
    "Rumah Sakit",
    "https://www.mit.edu/",
    "true",
    "exclusive"
  ),
  createTemplate(
    6,
    "Toko Online",
    "Eiger",
    "Toko Online",
    "https://www.eigeradventure.com/",
    "true",
    "exclusive"
  ),
];
