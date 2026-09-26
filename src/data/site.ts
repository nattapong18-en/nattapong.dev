// แก้ข้อมูลส่วนตัวทั้งหมดที่ไฟล์นี้ไฟล์เดียว
export const site = {
  name: 'Nattapong',
  title: 'Nattapong — Computer Engineer',
  role: 'Computer Engineer · ปี 4',
  headline: ['ตั้งแต่ชิป', 'จนถึงหน้าจอ'],
  intro:
    'ผม Nattapong นักศึกษาวิศวกรรมคอมพิวเตอร์ เขียน firmware ให้ ESP32 สร้าง backend ด้วย Rust ทำ AI ที่รันบนเครื่องเล็ก และต่อทุกอย่างเข้ากับเว็บ',
  description:
    'Computer Engineer ทำงานครบตั้งแต่ Embedded / IoT, Systems & Backend, AI จนถึง Web — portfolio และรับงาน',
  status: 'เปิดรับงานฟรีแลนซ์ และมองหาตำแหน่งงาน',
  // TODO: ใส่อีเมลที่อยากให้ลูกค้าติดต่อ (เว้นว่างไว้ = ไม่แสดง)
  email: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/nattapong18-en' },
    // TODO: ใส่ลิงก์ LinkedIn / Facebook / LINE ของคุณ
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

export type DomainKey = 'hw' | 'sys' | 'ai' | 'web';

// สายงาน เรียงจากชั้นล่างสุด (ชิป) ขึ้นไปถึงหน้าจอ
export const domains: { key: DomainKey; label: string; layer: string; desc: string; tools: string[] }[] = [
  {
    key: 'hw',
    label: 'Embedded & IoT',
    layer: 'ชิป / เซนเซอร์',
    desc: 'เขียน firmware ให้ ESP32 อ่านเซนเซอร์ ควบคุมอุปกรณ์ และส่งข้อมูลขึ้น cloud ผ่าน Wi-Fi',
    tools: ['ESP32', 'C++', 'PlatformIO', 'MPU6050', 'Raspberry Pi'],
  },
  {
    key: 'sys',
    label: 'Systems & Backend',
    layer: 'server / ข้อมูล',
    desc: 'สร้าง API และ server ด้วย Rust ออกแบบฐานข้อมูลกับ cache และ deploy ด้วย Docker บน Linux',
    tools: ['Rust', 'Axum', 'PostgreSQL', 'Redis', 'Docker', 'Linux'],
  },
  {
    key: 'ai',
    label: 'AI / ML',
    layer: 'โมเดล',
    desc: 'ทำโมเดลที่ใช้งานได้จริงบนเครื่องเล็ก ตั้งแต่ neural network ด้วย PyTorch, vision บน browser จนถึง LLM บน Raspberry Pi',
    tools: ['PyTorch', 'TensorFlow.js', 'Ollama'],
  },
  {
    key: 'web',
    label: 'Web',
    layer: 'หน้าจอ',
    desc: 'ทำหน้าเว็บและ dashboard ที่รวมทุกชั้นเข้าด้วยกัน ให้คนใช้งานได้จริงจากมือถือหรือคอม',
    tools: ['TypeScript', 'Next.js', 'Svelte', 'Astro', 'Supabase'],
  },
];

export const services = [
  {
    title: 'IoT / ESP32 prototype',
    desc: 'ต่อเซนเซอร์หรืออุปกรณ์เข้ากับ cloud และทำ dashboard ควบคุมหรือดูข้อมูลแบบ realtime',
  },
  {
    title: 'Backend & API',
    desc: 'ระบบหลังบ้าน ฐานข้อมูล และ API สำหรับแอปหรือเว็บ พร้อม deploy',
  },
  {
    title: 'เว็บไซต์ / เว็บแอป',
    desc: 'เว็บร้านค้า landing page ระบบจอง หรือฟอร์มรับข้อมูล โหลดเร็วและรองรับมือถือ',
  },
  {
    title: 'Automation / Bot',
    desc: 'LINE bot แจ้งเตือนอัตโนมัติ หรือสคริปต์ช่วยลดงานที่ต้องทำซ้ำทุกวัน',
  },
];

export type Project = {
  name: string;
  desc: string;
  href: string;
  demo?: string;
  image?: string;
  domains: DomainKey[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'Luma Smart Light',
    desc: 'สั่งไฟ ESP32 ด้วยเสียงภาษาไทย/อังกฤษ ใช้ rule-based interpreter และมี LLM (Ollama) บน Raspberry Pi เป็น fallback โดยไม่ใช้ AI API แบบเสียเงิน',
    href: 'https://github.com/nattapong18-en/smart-led',
    demo: 'https://smart-led.664110310060.workers.dev/',
    image: '/projects/luma.png',
    domains: ['hw', 'ai', 'web'],
    tags: ['ESP32', 'Raspberry Pi', 'Ollama', 'TypeScript'],
  },
  {
    name: 'Booking API',
    desc: 'API ระบบจองห้องพักด้วย Rust + Axum ใช้ PostgreSQL และ Redis มี CI และ frontend เป็น Svelte',
    href: 'https://github.com/nattapong18-en/booking_api',
    demo: 'https://booking-frontend-omega-three.vercel.app',
    domains: ['sys', 'web'],
    tags: ['Rust', 'Axum', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'ESP32 Gyroscope Monitor',
    desc: 'ESP32 อ่านค่า MPU6050 ส่งขึ้น Supabase แสดงผลบน dashboard และสั่ง calibrate เซนเซอร์กลับจากหน้าเว็บได้',
    href: 'https://github.com/nattapong18-en/esp32-gyro',
    domains: ['hw', 'web'],
    tags: ['ESP32', 'C++', 'Supabase'],
  },
  {
    name: 'Thai Coin Scanner',
    desc: 'สแกนเหรียญไทยผ่านกล้องมือถือแบบ realtime ด้วย TensorFlow.js และใช้ motion sensor ตรวจว่าเครื่องนิ่งก่อนสแกน',
    href: 'https://github.com/nattapong18-en/coin-thai',
    domains: ['ai', 'web'],
    tags: ['TensorFlow.js', 'Computer Vision'],
  },
  {
    name: 'Rust Web Server',
    desc: 'HTTP server แบบ multi-threaded ที่เขียนเองจาก TCP โดยไม่ใช้ tokio และมี thread pool ที่ทำเอง',
    href: 'https://github.com/nattapong18-en/web_server',
    domains: ['sys'],
    tags: ['Rust', 'TCP', 'Concurrency'],
  },
  {
    name: 'Mini Task Board',
    desc: 'ระบบ CRUD หลาย container สำหรับฝึก Docker ตั้งแต่สร้าง image จนย้ายไปรันบนเครื่องอื่น และ deploy บน Cloudflare',
    href: 'https://github.com/nattapong18-en/task-board',
    demo: 'https://mini-task-board.664110310060.workers.dev',
    image: '/projects/taskboard.png',
    domains: ['sys', 'web'],
    tags: ['Docker', 'Compose', 'Cloudflare'],
  },
  {
    name: 'Neural Network (PyTorch)',
    desc: 'neural network หลายชั้นที่ train ด้วย PyTorch แล้วบันทึกโมเดลเก็บไว้ใช้ต่อ',
    href: 'https://github.com/nattapong18-en/neuron-network',
    domains: ['ai'],
    tags: ['PyTorch', 'Python'],
  },
  {
    name: 'sys_monitor',
    desc: 'โปรแกรม terminal ดูการใช้ CPU และ RAM แบบ realtime โดยอ่านค่าตรงจาก /proc ของ Linux',
    href: 'https://github.com/nattapong18-en/sys_monitor',
    domains: ['sys'],
    tags: ['Rust', 'Linux'],
  },
  {
    name: 'ESP32 Cloud LED',
    desc: 'ESP32 อ่านค่าจาก Supabase ผ่าน Wi-Fi แล้วสั่งเปิดปิด LED เป็นจุดเริ่มต้นที่ต่อยอดมาเป็น Luma',
    href: 'https://github.com/nattapong18-en/esp32-project1',
    domains: ['hw'],
    tags: ['ESP32', 'C++', 'Supabase'],
  },
  {
    name: 'Thailand Weather',
    desc: 'ดูสภาพอากาศและค่าฝุ่น PM2.5 ครบทั้ง 77 จังหวัด ใช้ข้อมูลจาก Open-Meteo',
    href: 'https://github.com/nattapong18-en/thailand_weather',
    domains: ['web'],
    tags: ['Next.js', 'TypeScript'],
  },
];
