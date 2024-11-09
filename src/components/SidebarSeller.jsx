import PropTypes from 'prop-types';
import { IoHomeOutline, IoChatbubbleOutline, IoStatsChartOutline, IoBookOutline, IoHelpCircleOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';
import { IoReceiptOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col items-center p-6">
      {/* Logo */}
      <div className="text-2xl font-bold mb-6">KambingFresh</div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/80" // Ganti dengan URL foto profil yang sesuai
          alt="Profile"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h2 className="text-lg font-semibold">Hijau Mandala</h2>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-4">
        <SidebarItem icon={<IoHomeOutline />} label="Home" />
        <SidebarItem icon={<IoReceiptOutline />} label="Pesanan" />
        <SidebarItem icon={<IoStatsChartOutline />} label="Statistik" />
        <SidebarItem icon={<IoChatbubbleOutline />} label="Chat" />
        <SidebarItem icon={<IoBookOutline />} label="Edukasi" />
        <SidebarItem icon={<IoHelpCircleOutline />} label="Bantuan" />
        <SidebarItem icon={<IoSettingsOutline />} label="Pengaturan" />
        <SidebarItem icon={<IoLogOutOutline />} label="Keluar" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-4 text-gray-700 hover:text-green-600 cursor-pointer">
    {icon}
    <span className="text-lg">{label}</span>
  </div>
);

SidebarItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default Sidebar;
