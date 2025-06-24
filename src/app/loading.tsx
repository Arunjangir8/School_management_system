import React from 'react';
import { Home, Users, User, BookOpen, GraduationCap, ClipboardList, FileText, Award, UserCheck, Calendar, MessageSquare, Megaphone, Settings, LogOut } from 'lucide-react';

// Mock skeleton component since we don't have react-loading-skeleton
const SidebarSkeleton = () => (
  <div className="w-64 bg-white shadow-sm border-r border-gray-200 p-4 h-screen sticky top-0">
    {/* Logo */}
    <div className="flex items-center space-x-2 mb-8">
      <Skeleton circle width="2rem" height="2rem" />
      <Skeleton width="7rem" height="1.5rem" />
    </div>

    {/* Profile */}
    <div className="mb-6">
      <Skeleton width="3rem" height="0.875rem" className="mb-4" />
      <div className="flex items-center space-x-3">
        <Skeleton circle width="2.5rem" height="2.5rem" />
        <div className="flex-1">
          <Skeleton width="4rem" height="1rem" className="mb-1" />
          <Skeleton width="3rem" height="0.75rem" />
        </div>
      </div>
    </div>

    {/* Menu */}
    <div className="space-y-1">
      <Skeleton width="2.5rem" height="0.875rem" className="mb-4" />
      {[
        { icon: Home, label: 'Home' },
        { icon: Users, label: 'Teachers' },
        { icon: User, label: 'Students' },
        { icon: Users, label: 'Parents' },
        { icon: BookOpen, label: 'Subjects' },
        { icon: GraduationCap, label: 'Classes' },
        { icon: ClipboardList, label: 'Lessons' },
        { icon: FileText, label: 'Exams' },
        { icon: Award, label: 'Assignments' }
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <item.icon className="w-5 h-5 text-gray-300" />
          <Skeleton width="4rem" height="1rem" />
        </div>
      ))}
    </div>

    {/* Bottom Section */}
    <div className="absolute bottom-4 left-4 right-4 space-y-2">
      <div className="flex items-center space-x-3 p-3 rounded-lg">
        <Settings className="w-5 h-5 text-gray-300" />
        <Skeleton width="4rem" height="1rem" />
      </div>
      <div className="flex items-center space-x-3 p-3 rounded-lg">
        <LogOut className="w-5 h-5 text-gray-300" />
        <Skeleton width="3rem" height="1rem" />
      </div>
    </div>
  </div>
);
type SkeletonProps = {
  width: string | number;
  height: string | number;
  className?: string;
  circle?: boolean;
};

const Skeleton = ({ width, height, className = "", circle = false }: SkeletonProps) => (
  <div 
    className={`bg-gray-200 animate-pulse ${circle ? 'rounded-full' : 'rounded'} ${className}`}
    style={{ width, height }}
  />
);

const SkeletonText = ({ lines = 1, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} height="1rem" width={i === lines - 1 ? "75%" : "100%"} />
    ))}
  </div>
);

// CountChartContainer Skeleton
const CountChartSkeleton = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm h-full">
    <div className="flex justify-between items-center mb-6">
      <Skeleton width="6rem" height="1.5rem" />
      <Skeleton width="1.5rem" height="1.5rem" />
    </div>
    <div className="flex justify-center items-center h-64">
      <Skeleton circle width="12rem" height="12rem" />
    </div>
    <div className="flex justify-center space-x-8 mt-6">
      <div className="text-center">
        <Skeleton width="2rem" height="2rem" className="mx-auto mb-2" />
        <SkeletonText lines={2} />
      </div>
      <div className="text-center">
        <Skeleton width="2rem" height="2rem" className="mx-auto mb-2" />
        <SkeletonText lines={2} />
      </div>
    </div>
  </div>
);

// AttendanceChartContainer Skeleton
const AttendanceChartSkeleton = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm h-full">
    <div className="flex justify-between items-center mb-4">
      <Skeleton width="8rem" height="1.5rem" />
      <Skeleton width="1.5rem" height="1.5rem" />
    </div>
    <div className="flex items-center space-x-2 mb-4">
      <Skeleton circle width="0.75rem" height="0.75rem" />
      <Skeleton width="3rem" height="0.875rem" />
      <Skeleton circle width="0.75rem" height="0.75rem" />
      <Skeleton width="3rem" height="0.875rem" />
    </div>
    <div className="h-64 flex items-end justify-between space-x-4">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
        <div key={day} className="flex-1 flex flex-col items-center">
          <Skeleton 
            width="100%" 
            height={`${Math.random() * 120 + 80}px`} 
            className="mb-2" 
          />
          <Skeleton width="2rem" height="0.875rem" />
        </div>
      ))}
    </div>
  </div>
);

// UserCard Skeleton
type UserCardSkeletonProps = {
  type: string;
};

const UserCardSkeleton = ({ type }: UserCardSkeletonProps) => (
  <div className="bg-white rounded-lg p-6 shadow-sm min-w-[200px] flex-1">
    <div className="flex items-center justify-between mb-4">
      <Skeleton width="4rem" height="1rem" />
      <Skeleton width="1.5rem" height="1.5rem" />
    </div>
    <div className="text-center">
      <Skeleton width="3rem" height="2.5rem" className="mx-auto mb-2" />
      <Skeleton width="5rem" height="0.875rem" className="mx-auto" />
    </div>
  </div>
);


// EventCalendar Skeleton
const EventCalendarSkeleton = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <Skeleton width="5rem" height="1.5rem" />
      <div className="flex space-x-2">
        <Skeleton width="1rem" height="1rem" />
        <Skeleton width="1rem" height="1rem" />
      </div>
    </div>
    
    {/* Calendar Grid */}
    <div className="grid grid-cols-7 gap-1 text-xs mb-2">
      {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
        <div key={day} className="text-center p-1">
          <Skeleton width="100%" height="0.75rem" />
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-7 gap-1 mb-4">
      {Array.from({ length: 35 }).map((_, index) => (
        <div key={index} className="aspect-square p-1">
          <Skeleton width="100%" height="100%" className="rounded-sm" />
        </div>
      ))}
    </div>

    {/* Events List */}
    <div className="border-t pt-4">
      <Skeleton width="3rem" height="1rem" className="mb-3" />
      <div className="space-y-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-2 p-2 rounded">
            <Skeleton circle width="0.5rem" height="0.5rem" />
            <div className="flex-1">
              <Skeleton width="70%" height="0.875rem" />
            </div>
            <Skeleton width="2rem" height="0.75rem" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Announcements Skeleton
const AnnouncementsSkeleton = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <Skeleton width="8rem" height="1.5rem" />
      <Skeleton width="3rem" height="0.875rem" />
    </div>
    
    <div className="space-y-4">
      {Array.from({ length: 1 }).map((_, index) => (
        <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
          <div className="flex justify-between items-start mb-2">
            <Skeleton width="8rem" height="1rem" />
            <Skeleton width="3rem" height="0.75rem" />
          </div>
          <SkeletonText lines={2} />
        </div>
      ))}
    </div>
  </div>
);

const AdminPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SidebarSkeleton />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Skeleton width="16rem" height="2.5rem" className="rounded-full" />
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton circle width="2rem" height="2rem" />
              <Skeleton circle width="2rem" height="2rem" />
              <div className="flex items-center space-x-2">
                <Skeleton circle width="2rem" height="2rem" />
                <Skeleton width="4rem" height="1rem" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 flex gap-4 flex-col md:flex-row">
          {/* Left */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChartSkeleton />
              </div>
              <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChartSkeleton />
              </div>
            </div>
            
            <div className="flex gap-4 justify-between flex-wrap">
              <UserCardSkeleton type="admin" />
              <UserCardSkeleton type="teacher" />
              <UserCardSkeleton type="student" />
            </div>
          </div>
          
          {/* Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalendarSkeleton />
            <AnnouncementsSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageSkeleton;