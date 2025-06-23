
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  Home,
  Users,
  GraduationCap,
  User,
  BookOpen,
  NotebookPen,
  Book,
  FileText,
  ClipboardList,
  Calendar,
  MessageSquare,
  Megaphone,
  Settings,
  LogOut,
  UserCircle,
} from "lucide-react";

const Menu = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata?.role as string;

  const iconClasses = "text-blue-500"; // You can adjust color here

  const menuItems = [
    {
      title: "PROFILE",
      items: [
        { icon: UserCircle, label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] }
      ],
    },
    {
      title: "MENU",
      items: [
        { icon: Home, label: "Home", href: `/${role}`, visible: ["admin", "teacher", "student", "parent"] },
        { icon: Users, label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
        { icon: GraduationCap, label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
        { icon: User, label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
        { icon: BookOpen, label: "Subjects", href: "/list/subjects", visible: ["admin"] },
        { icon: NotebookPen, label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
        { icon: Book, label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
        { icon: FileText, label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
        { icon: ClipboardList, label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
        { icon: ClipboardList, label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
        { icon: Calendar, label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
        { icon: Calendar, label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
        { icon: MessageSquare, label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
        { icon: Megaphone, label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
      ],
    },
    {
      title: "OTHER",
      items: [
        { icon: Settings, label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
        { icon: LogOut, label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
      ],
    },
  ];

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{section.title}</span>
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex justify-center items-center lg:justify-start gap-4 text-gray-500 py-1.5 rounded-md hover:bg-LamaSkyLight transition-colors"
                >
                  <Icon size={20} strokeWidth={1} className={iconClasses} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
