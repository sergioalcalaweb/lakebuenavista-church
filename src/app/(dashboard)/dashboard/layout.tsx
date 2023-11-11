import DashNavBar from "@/components/dashboard/dash-nav-bar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <DashNavBar />
      <div className="px-6 py-6">
        {children}
      </div>
    </>
  )
}