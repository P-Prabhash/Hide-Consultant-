
/**
 * API Service Layer
 * This handles communication with the Python (FastAPI/Flask) backend.
 * For now, it uses localStorage as a fallback to demonstrate functionality.
 */

const BASE_URL = 'http://localhost:8000'; // Default Python backend URL

export const api = {
  // Example call to fetch from Python backend
  async getPlacements() {
    try {
      const response = await fetch(`${BASE_URL}/api/placements`);
      if (response.ok) return await response.json();
    } catch (e) {
      console.warn("Backend not detected, falling back to local registry.");
    }
    const local = localStorage.getItem('hide_placements');
    return local ? JSON.parse(local) : [];
  },

  async getGallery() {
    try {
      const response = await fetch(`${BASE_URL}/api/gallery`);
      if (response.ok) return await response.json();
    } catch (e) {
       console.warn("Backend not detected, falling back to local registry.");
    }
    const local = localStorage.getItem('hide_gallery');
    return local ? JSON.parse(local) : [];
  }
};
