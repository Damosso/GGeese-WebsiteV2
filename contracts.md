# GGeese Studio - Frontend & Backend Integration Contracts

## Current Status
✅ **Frontend Complete** - All pages built with mock data
- Home page with hero, features, concept, and testimonials
- Experience page with interactive 3D transformation demo
- Gallery page with video placeholders and image gallery
- Contact page with form and contact information
- Responsive header and footer

## Mock Data Location
All mock data is in `/app/frontend/src/mock.js`

## Backend Implementation Plan

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Frontend Implementation:**
- File: `/app/frontend/src/pages/Contact.jsx`
- Current: Mock submission with console.log and toast notification
- Form fields: name, email, phone, company, message

**Backend Requirements:**
- Store contact submissions in MongoDB
- Send confirmation email (optional for MVP)
- Return success/error response

**Data Model:**
```python
{
  "name": String (required),
  "email": String (required, valid email),
  "phone": String (optional),
  "company": String (optional),
  "message": String (required),
  "created_at": DateTime,
  "status": String (default: "new")
}
```

### 2. Gallery Management (Future)
**Endpoints:**
- `GET /api/videos` - Fetch video gallery
- `GET /api/images` - Fetch image gallery

**Current Mock Data:**
- Videos: 3 demo videos with thumbnails
- Images: 10 gallery images with categories

**Backend Requirements (Optional for MVP):**
- Store video/image metadata
- Support category filtering
- File upload functionality for admin

### 3. Newsletter/Mailing List (Optional)
**Endpoint:** `POST /api/subscribe`

**Frontend:** Add newsletter signup in footer
**Backend:** Store email subscribers

## Integration Steps

### Phase 1: Contact Form (Priority)
1. Create MongoDB model for contact submissions
2. Implement POST /api/contact endpoint
3. Add validation (email format, required fields)
4. Update frontend Contact.jsx to call API
5. Test form submission and data storage

### Phase 2: Content Management (Optional)
1. Admin endpoints for managing gallery content
2. File upload functionality
3. Update frontend to fetch from API instead of mock

## Frontend Files to Update for Backend Integration

### Contact Form Integration
**File:** `/app/frontend/src/pages/Contact.jsx`
**Current Code (Line ~15):**
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Mock form submission
  console.log('Form submitted:', formData);
  toast.success('Message sent successfully! We\'ll get back to you soon.');
  
  // Reset form
  setFormData({...});
};
```

**To Change:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API}/contact`, formData);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({...}); // Reset form
  } catch (error) {
    toast.error('Failed to send message. Please try again.');
    console.error('Contact form error:', error);
  }
};
```

## Environment Variables
No new environment variables needed - using existing:
- `REACT_APP_BACKEND_URL` (frontend)
- `MONGO_URL` (backend)

## Testing Checklist
- [ ] Contact form submission stores data in MongoDB
- [ ] Form validation works (required fields, email format)
- [ ] Success/error toasts display correctly
- [ ] Form resets after successful submission
- [ ] Backend returns proper error messages

## Notes
- Frontend is fully functional with mock data
- All interactive elements work (navigation, buttons, forms)
- 3D transformation demo is CSS-based (no backend needed)
- Image gallery uses placeholder images from Unsplash
- Video section ready for user's own videos
