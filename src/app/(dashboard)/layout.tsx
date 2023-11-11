import DashNavBar from "@/components/dashboard/dash-nav-bar"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId } = auth();

  if(!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="light h-screen bg-white">
      {children}
    </div>
  )
}