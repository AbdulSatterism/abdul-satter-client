import DashboardSidebar from "@/components/shared/DashboardSidebar";
import Footer from "@/components/shared/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardSidebar>{children}</DashboardSidebar>
    </>
  );
};
export default DashboardLayout;
