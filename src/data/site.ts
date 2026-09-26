// แก้ข้อมูลส่วนตัวทั้งหมดที่ไฟล์นี้ไฟล์เดียว
export const site = {
  name: 'Nattapong',
  title: 'Nattapong — Developer',
  tagline: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ปี 4 ที่ชอบสร้างเว็บและเครื่องมือที่ช่วยให้งานง่ายขึ้น',
  description: 'Portfolio และรับทำเว็บไซต์ / ระบบเล็กๆ สำหรับร้านค้าและธุรกิจ',
  status: 'เปิดรับงานฟรีแลนซ์',
  // TODO: ใส่อีเมลที่อยากให้ลูกค้าติดต่อ (เว้นว่างไว้ = ไม่แสดง)
  email: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/nattapong18-en' },
    // TODO: ใส่ลิงก์ LinkedIn / Facebook / LINE ของคุณ
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  skills: ['TypeScript', 'Rust', 'C++', 'Python', 'Svelte', 'Next.js', 'Astro', 'PostgreSQL', 'Docker', 'ESP32 / IoT'],
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
  {
    title: 'IoT / ESP32 prototype',
    desc: 'ต่อเซนเซอร์หรืออุปกรณ์เข้ากับเว็บ dashboard ควบคุมและดูข้อมูลแบบ realtime',
  },
];

export const projects: { name: string; desc: string; href: string; demo?: string; tags: string[] }[] = [
  {
    name: 'Luma Smart Light',
    desc: 'ควบคุมไฟ ESP32 ด้วยเสียงภาษาไทย/อังกฤษ ใช้ rule-based interpreter และมี Ollama บน Raspberry Pi เป็น fallback โดยไม่ใช้ AI API แบบเสียเงิน',
    href: 'https://github.com/nattapong18-en/smart-led',
    demo: 'https://smart-led.664110310060.workers.dev/',
    tags: ['ESP32', 'TypeScript', 'Ollama', 'Raspberry Pi'],
  },
  {
    name: 'Booking API',
    desc: 'ระบบจองห้องพัก ทำ API ด้วย Rust + Axum ใช้ PostgreSQL และ Redis มี CI และ frontend เป็น Svelte',
    href: 'https://github.com/nattapong18-en/booking_api',
    demo: 'https://booking-frontend-omega-three.vercel.app',
    tags: ['Rust', 'Axum', 'PostgreSQL', 'Redis', 'Svelte'],
  },
  {
    name: 'Thai Coin Scanner',
    desc: 'สแกนเหรียญไทยผ่านกล้องมือถือแบบ realtime ด้วย TensorFlow.js และใช้ motion sensor ตรวจว่าเครื่องนิ่งก่อนสแกน',
    href: 'https://github.com/nattapong18-en/coin-thai',
    tags: ['TensorFlow.js', 'JavaScript'],
  },
  {
    name: 'ESP32 Gyroscope Monitor',
    desc: 'dashboard แสดงค่า MPU6050 จาก ESP32 ผ่าน Supabase และสั่ง calibrate เซนเซอร์กลับไปจากหน้าเว็บได้',
    href: 'https://github.com/nattapong18-en/esp32-gyro',
    tags: ['ESP32', 'Supabase', 'IoT'],
  },
  {
    name: 'Thailand Weather',
    desc: 'ดูสภาพอากาศและค่าฝุ่น PM2.5 ครบทั้ง 77 จังหวัด ใช้ข้อมูลจาก Open-Meteo',
    href: 'https://github.com/nattapong18-en/thailand_weather',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Rust Web Server',
    desc: 'HTTP server แบบ multi-threaded ที่เขียนเองทั้งหมดโดยไม่ใช้ tokio มี thread pool ที่ทำเอง',
    href: 'https://github.com/nattapong18-en/web_server',
    tags: ['Rust', 'Systems'],
  },
];
