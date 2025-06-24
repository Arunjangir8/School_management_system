# 🎓 School Management System

A comprehensive and modern School Management System built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Clerk Authentication**, and **Prisma ORM**. This full-stack application provides role-based dashboards and streamlined school operations management for administrators, teachers, students, and parents.

## Demo Credentials

Use these dummy accounts to test different roles:

| Role | Username | Password |
|------|----------|----------|
| Admin | admin | admin |
| Teacher | teacher | teacher |
| Student | student | student |
| Parent | parent | parent |


![Admin Page](./public/Admin%20Page.png)
![All Student Page](./public/All%20Students.png)
![Assignment Page](./public/Assignment%20Page.png)
![Parent Page](./public/Parent%20Page.png)
![Profile](./public/Profile%20Page.png)


---

## ✨ Features

### 🔐 Role-Based Access Control
- **Admin Dashboard**: Complete system oversight with user management, analytics, and administrative controls
- **Teacher Portal**: Class management, attendance tracking, student records, and grade management
- **Student Dashboard**: Personal schedule viewing, assignment tracking, and announcements
- **Parent Dashboard**: Child progress monitoring, schedule viewing, and school communication

### 📊 Data Visualization & Analytics
- Interactive charts for attendance tracking
- Financial reporting and visualizations
- User statistics and system metrics
- Real-time data updates

### 📅 Calendar & Schedule Management
- Dynamic event calendars with filtering
- Class schedule management per student
- Event creation and management
- Schedule conflict detection

### 🛡️ Security & Authentication
- Secure authentication with Clerk
- Role-based page protection and automatic redirection
- Server-side authentication validation
- Protected API routes

### 📱 Modern UI/UX
- Responsive design for all devices
- Clean and intuitive interface
- Real-time updates and notifications
- Accessibility-focused components

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | Full-stack React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first CSS framework |
| **Clerk** | Authentication and user management |
| **Prisma ORM** | Database toolkit and query builder |
| **Render** | Deployment and hosting |

---

## 📂 Project Structure

```
school-management-system/
├── app/
│   ├── dashboard/
│   │     ├── admin/
│   │     │   └── page.tsx
│   │     ├── teacher/
│   │     │   └── page.tsx
│   │     ├── student/
│   │     │   └── page.tsx
│   │     ├── parent/
│   │         └── page.tsx
│   └── globals.css
├── components/
│   ├── Announcements.tsx
│   ├── BigCalendarContainer.tsx
│   ├── EventCalendarContainer.tsx
│   └── ui/
├── lib/
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
├── types/
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arunjangir8/School_management_system.git
   cd School_management_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/school_management"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
   CLERK_SECRET_KEY=sk_test_your_secret_key

   # Next.js
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔧 Configuration

### Role Configuration in Clerk

Set up user roles in Clerk's dashboard by adding role metadata:

```json
{
  "role": "admin" | "teacher" | "student" | "parent"
}
```

### Database Schema

The application uses the following main entities:
- **Users**: Admin, Teacher, Student, Parent roles
- **Classes**: Class information and schedules
- **Lessons**: Lessons information and schedules
- **Assignment**: Assignment information and schedules
- **Result**: result information.
- **Exam**: Exam information.
- **Students**: Student profiles and academic data
- **Teacher**: Teacher profiles and academic data
- **Parent**: Parent profiles and student academic data
- **Announcements**: School-wide communications
- **Events**: Calendar events and activities

---

## 📊 Role-Based Features

### Admin Dashboard
- User management and role assignment
- System analytics and reporting
- Financial tracking and insights
- Announcement creation and management
- School-wide calendar management

### Teacher Dashboard
- Class roster and student management
- Attendance tracking and reporting
- Grade entry and academic records
- Parent communication tools
- Personal schedule management

### Student Dashboard
- Personal academic schedule
- Assignment and homework tracking
- Grade viewing and progress reports
- School announcements and updates
- Event calendar access

### Parent Dashboard
- Child's academic progress monitoring
- Schedule and calendar viewing
- Teacher communication portal
- School event information
- Multiple children support

---

## 🛠️ Development

### Server Components vs Client Components

The application uses Next.js App Router with Server Components by default:

```tsx
// Server Component (default)
const AdminPage = async () => {
  const user = await currentUser();
  const role = (user?.publicMetadata as { role?: string })?.role;
  
  if (role !== "admin") {
    redirect(`/${role ?? ""}`);
  }
  
  // Server-side data fetching
  const data = await prisma.user.findMany();
  
  return <EventCalenderContainor data={data} />;
};
```
## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@Arunjangir8](https://github.com/Arunjangir8)
- LinkedIn: [Arun](https://www.linkedin.com/in/arun-9406a4283)
- Email: arunjangir9987@example.com

---

## 🙏 Acknowledgments

- Newton School of Technology for educational support
- Next.js team for the amazing framework
- Clerk for seamless authentication
- Prisma for the excellent ORM
- Tailwind CSS for beautiful styling


**Built with ❤️ for educational institutions**
