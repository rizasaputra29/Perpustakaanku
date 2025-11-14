import { useState, useRef, useEffect } from 'react';
import { User, Mail, Hash, Users, Edit, Save, Upload } from 'lucide-react';

// Tipe untuk data formulir
interface ProfileData {
  name: string;
  nim: string;
  group: string;
  email: string;
}

// Data default
const defaultData: ProfileData = {
  name: 'Rezvanda Bagas Saputra',
  nim: '21120123130103',
  group: 'Kelompok 42',
  email: 'rezvandabs@students.undip.ac.id',
};

// Kunci untuk localStorage
const PROFILE_KEY = 'userProfile';
const PROFILE_PIC_KEY = 'userProfilePic';

// --- (PERBAIKAN 1) ---
// Tipe untuk props ProfileInput
interface ProfileInputProps {
  name: keyof ProfileData;
  label: string;
  value: string;
  icon: React.ElementType;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// --- (PERBAIKAN 2) ---
// Komponen ProfileInput dipindahkan ke LUAR fungsi Profile
// dan menerima props 'isEditing' & 'onChange'
const ProfileInput = ({ name, label, value, icon: Icon, isEditing, onChange }: ProfileInputProps) => (
  <div className="pb-6 border-b border-gray-200">
    <label htmlFor={name} className="text-xs text-gray-500 uppercase tracking-wider mb-1">
      {label}
    </label>
    <div className="flex items-center space-x-4">
      <Icon className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={!isEditing}
        className="text-lg font-medium text-black w-full bg-transparent focus:outline-none disabled:text-gray-900"
      />
    </div>
  </div>
);


// --- Komponen Utama Profile ---
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileData>(defaultData);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Muat data dari localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(PROFILE_KEY);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    const savedPic = localStorage.getItem(PROFILE_PIC_KEY);
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

  // Handler untuk perubahan input teks
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler untuk menyimpan perubahan
  const handleSave = () => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(formData));
    setIsEditing(false);
    if (profilePic) {
      localStorage.setItem(PROFILE_PIC_KEY, profilePic);
    }
  };

  // Handler untuk membatalkan edit
  const handleCancel = () => {
    const savedData = localStorage.getItem(PROFILE_KEY);
    setFormData(savedData ? JSON.parse(savedData) : defaultData);
    setIsEditing(false);
  };

  // Handler saat gambar dipilih
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newPicUrl = URL.createObjectURL(file);
      setProfilePic(newPicUrl);
    }
  };

  // Handler untuk memicu klik input file
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // (Definisi ProfileInput dihapus dari sini)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Profil</h1>
            <p className="text-lg text-gray-600">
              {isEditing ? 'Anda sedang dalam mode edit' : 'Kelola informasi pribadi Anda'}
            </p>
          </div>
          {isEditing ? (
            <div className="flex space-x-3">
              <button
                onClick={handleCancel}
                className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Simpan</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <Edit className="w-4 h-4" />
              <span>Edit Profil</span>
            </button>
          )}
        </div>

        <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32 rounded-full">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center overflow-hidden">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-16 h-16 text-white" />
                )}
              </div>
              
              {isEditing && (
                <>
                  <button
                    onClick={handleUploadClick}
                    className="absolute -bottom-2 -right-2 bg-white text-black p-3 rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/png, image/jpeg"
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>

          {/* --- (PERBAIKAN 3) --- */}
          {/* Teruskan props 'isEditing' dan 'onChange' ke komponen ProfileInput */}
          <div className="space-y-6 max-w-md mx-auto">
            <ProfileInput
              name="name"
              label="Nama Lengkap"
              value={formData.name}
              icon={User}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <ProfileInput
              name="nim"
              label="NIM"
              value={formData.nim}
              icon={Hash}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <ProfileInput
              name="group"
              label="Kelompok"
              value={formData.group}
              icon={Users}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <ProfileInput
              name="email"
              label="Email"
              value={formData.email}
              icon={Mail}
              isEditing={isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4 text-center">
              Tentang Aplikasi
            </h2>
            <p className="text-center text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Aplikasi Perpustakaan Pribadi adalah Progressive Web App (PWA) yang
              dikembangkan menggunakan React dan TypeScript. Aplikasi ini menampilkan
              koleksi buku dengan desain minimalis modern, dilengkapi dengan fitur offline
              dan dapat diinstall ke perangkat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}