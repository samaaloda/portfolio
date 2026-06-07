export const PROJECT_IMAGES_DIR = "/images/projects";

export function projectImageSrc(filename) {
  if (!filename) return null;
  return `${PROJECT_IMAGES_DIR}/${filename}`;
}
