How to use the Geo-Intelligent Alumni Demo:

1. Start your backend server (npm start).
2. Open geo-demo-frontend.html in your browser (or visit http://localhost:5000/geo-demo-frontend.html if running locally).
3. The map will show a demo location (Delhi) and fetch nearby alumni from your backend API.
4. Add alumni with location data via the backend (POST to /api/alumni with location field).
5. The alumni list and map markers will update automatically.

Tips:
- Make sure CORS is enabled if accessing from a different origin.
- You can customize the center coordinates and radius in the HTML file.
- For real data, ensure alumni profiles have valid location coordinates.
- Use Postman or curl to add alumni with location for testing.

For advanced features (Google Maps, mobile support, clustering), ask for further integration help!
