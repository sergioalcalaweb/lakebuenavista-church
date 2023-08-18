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
    <>
      <DashNavBar />
      <div className="px-6 py-6">
        {children}
      </div>
    </>
  )
}