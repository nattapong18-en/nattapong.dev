// แก้ข้อมูลส่วนตัวทั้งหมดที่ไฟล์นี้ไฟล์เดียว
export const site = {
  name: 'Nattapong',
  title: 'Nattapong — Developer',
  tagline: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ปี 4 ที่ชอบสร้างเว็บและเครื่องมือที่ช่วยให้งานง่ายขึ้น',
  description: 'Portfolio และรับทำเว็บไซต์ / ระบบเล็กๆ สำหรับร้านค้าและธุรกิจ',
  status: 'เปิดรับงานฟรีแลนซ์',
  // TODO: ใส่อีเมลที่อยากให้ลูกค้าติดต่อ
  email: 'hello@nattapong.dev',
  links: [
    { label: 'GitHub', href: 'https://github.com/nattapong18-en' },
    // TODO: ใส่ลิงก์ LinkedIn / Facebook / LINE ของคุณ
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  skills: ['TypeScript', 'JavaScript', 'Python', 'HTML / CSS', 'Astro', 'Git'],
};

export const services = [
  {
    title: 'Landing page / เว็บร้านค้า',
    desc: 'เว็บหน้าเดียวหรือหลายหน้า โหลดเร็ว รองรับมือถือ มีแผนที่ ปุ่ม LINE และช่องทางติดต่อ',
  },
  {
    title: 'เว็บแอปขนาดเล็ก',
    desc: 'ระบบจอง ฟอร์มรับข้อมูล หรือหลังบ้านง่ายๆ สำหรับทีมหรือธุรกิจขนาดเล็ก',
  },
  {
    title: 'LINE bot / Automation',
    desc: 'บอทตอบคำถาม แจ้งเตือนอัตโนมัติ หรือสคริปต์ช่วยลดงานที่ทำซ้ำทุกวัน',
  },
];

export const projects: { name: string; desc: string; href: string; tags: string[] }[] = [
  {
    name: 'nattapong.dev',
    desc: 'เว็บไซต์ส่วนตัวนี้ สร้างด้วย Astro + Tailwind และเปิดเป็น open source',
    href: 'https://github.com/nattapong18-en/nattapong.dev',
    tags: ['Astro', 'Tailwind'],
  },
  // TODO: เพิ่มโปรเจกต์จาก GitHub อีก 2–3 ชิ้น
];
